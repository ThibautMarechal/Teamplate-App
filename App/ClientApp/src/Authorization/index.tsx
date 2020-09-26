import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
import Axios from 'axios';
import { useLocalStorage } from 'react-use'
import { Modal, ModalHeader, ModalBody, Form, Input, Button, FormGroup, Label } from 'reactstrap';

type User = {
  id: string;
}

type AuthorizationType = {
  logged: boolean;
  user?: User,
  bearer?: string;
  login: () => void; 
  logout: () => void; 
}

export const Context = React.createContext<AuthorizationType>({ logged: false, login: () => {}, logout: () => {} });
export const useLogged = () => useContext(Context).logged;
export const useUser = () => useContext(Context).user;
export const useLogin = () => useContext(Context).login
export const useLogout = () => useContext(Context).logout
export const AuthorizationProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useLocalStorage('token', null);
  useEffect(() => {
    Axios.interceptors.request.use(config => {
      config.headers.post['Authorization'] = `Bearer ${token}`;
      return config;
    });
  }, [token])
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User>();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const login = useCallback(() => {
    setShowLoginModal(true);
  }, []);
  const logout = useCallback(() => {
    setUser(undefined);
  }, []);
  const contextValue = useMemo<AuthorizationType>(() => ({
    logged: !!token,
    user,
    login,
    logout
  }), [token, user, login, logout]);
  return (
    <Context.Provider value={contextValue}>
      <>
        {children}
        <Modal isOpen={showLoginModal} toggle={() => setShowLoginModal(false)}>
          <ModalHeader toggle={() => setShowLoginModal(false)}>Se connecter</ModalHeader>
          <ModalBody>
            <Form onSubmit={e => {
              e.preventDefault();
              Axios.post('/api/auth/login', { password }).then(({ data: { token } }) => {
                setShowLoginModal(false);
                setToken(token);
              });
            }}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
              <Button type="submit" color="primary">Se connecter</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    </Context.Provider>
  )
}

