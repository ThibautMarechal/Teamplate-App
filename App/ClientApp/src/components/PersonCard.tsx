import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import styles from './PersonCard.module.scss'

type Props = {
  redirectUrl: string;
  imgUrl: string;
  name: string;
}

export default ({ redirectUrl, imgUrl, name }: Props) => {
  const history = useHistory();
  return (
    <Card className={`text-center ${styles.card}`} onClick={() => history.push(redirectUrl)}>
      <CardImg top width="100%" src={imgUrl} alt={name} />
      <CardBody>
        <CardTitle><Link to={redirectUrl}>{name}</Link></CardTitle>
      </CardBody>
    </Card>
  );
}