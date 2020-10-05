import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './PersonRound.module.scss'

type Props = {
  redirectUrl: string;
  imgUrl: string;
  name: string;
  role: string;
}

export default ({ redirectUrl, imgUrl, name, role }: Props) => {
  const history = useHistory();
  return (
    <>
      <img src={imgUrl} onClick={() => history.push(redirectUrl)} alt={name} />
      <Link to={redirectUrl}><span className={styles.name}>{name}</span></Link>
      <span className={styles.role}>{role}</span>
    </>
  );
}