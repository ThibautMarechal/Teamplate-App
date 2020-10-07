import React, { CSSProperties } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './PersonRound.module.scss'

type Props = {
  redirectUrl?: string;
  imgUrl: string;
  name: string;
  role?: JSX.Element;
  hideDescription?: boolean;
  style?: CSSProperties
}

export default ({ redirectUrl, imgUrl, name, role, hideDescription, style }: Props) => {
  const history = useHistory();
  const handleClick = () => {
    if(redirectUrl) history.push(redirectUrl)
  }
  return (
    <>
      <img className={styles.img} src={imgUrl} onClick={handleClick} alt={name} title={name} style={style} />
      {!hideDescription && (
        <div className={styles.description}>
          {redirectUrl ? (
            <Link to={redirectUrl}><h4 className={styles.name}>{name}</h4></Link>
          ) : (
            <h4 className={styles.name}>{name}</h4>
          )}
          <span className={styles.role}>{role}</span>
        </div>
      )}
    </>
  );
}