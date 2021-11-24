import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Api from '../Api';
import { useLocalStorage } from 'react-use'
import { Modal, ModalHeader, ModalBody, Form, Input, Button, FormGroup, Label, FormFeedback } from 'reactstrap';
import { AxiosError } from 'axios';

type AuthorizationType = {
  logged: boolean;
  username?: string,
  bearer?: string;
  login: () => void;
  logout: () => void;
}

export const Context = React.createContext<AuthorizationType>({ logged: false, login: () => {}, logout: () => {} });
export const useLogged = () => useContext(Context).logged;
export const useUsername = () => useContext(Context).username;
export const useLogin = () => useContext(Context).login
export const useLogout = () => useContext(Context).logout
export const AuthorizationProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useLocalStorage('token', null);
  if(token && !Api.defaults.headers.common['Authorization'])
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    Api.interceptors.response.use(response => response, error => {
      if (error.response.status === 401)
        setToken(null);
     return Promise.reject(error);
   });
  }, [setToken]);
  const username = useMemo<string | undefined>(() => {
    if(token) 
      return jwt_decode<{ unique_name: string }>(token).unique_name;
    return undefined;
  }, [token])
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const login = useCallback(() => {
    setShowLoginModal(true);
  }, []);
  const logout = useCallback(() => {
    setToken(null);
  }, [setToken]);
  const contextValue = useMemo<AuthorizationType>(() => ({
    logged: !!token,
    username,
    login,
    logout
  }), [token, username, login, logout]);
  return (
    <Context.Provider value={contextValue}>
      <>
        {children}
        <Modal isOpen={showLoginModal} toggle={() => setShowLoginModal(false)}>
          <ModalHeader toggle={() => setShowLoginModal(false)}>Se connecter</ModalHeader>
          <ModalBody>
            <Form onSubmit={e => {
              e.preventDefault();
              Api.post('/api/auth/login', { password }).then(({ data: { token } }) => {
                setShowLoginModal(false);
                setToken(token);
              }).catch((e: AxiosError) => {
                setError(e.response?.data?.message ?? 'Une erreur est survenue');
                setPassword('');
              });
            }}>
              <FormGroup>
                <Label for="password">Mot de passe</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  invalid={!!error}
                />
                {error ? (<FormFeedback>{error}</FormFeedback>) : null}
              </FormGroup>
              <Button type="submit" color="primary">Se connecter</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    </Context.Provider>
  )
}

