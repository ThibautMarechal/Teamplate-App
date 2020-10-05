import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  hrBefore?: boolean
  hrAfter?: boolean
}

export default ({ to, hrBefore = false, hrAfter = true }: Props) => (
  <>
    {hrBefore && <hr />}
    <Link to={to}>&lt; Retour</Link>
    {hrAfter && <hr />}
  </>
);