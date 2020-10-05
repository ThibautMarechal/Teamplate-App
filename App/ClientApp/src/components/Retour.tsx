import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
}

export default ({ to }: Props) => <><Link to={to}>&lt; Retour</Link><hr /></>