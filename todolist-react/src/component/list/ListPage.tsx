import React from 'react';
import { useAuthentification } from '../../context/AuthentificationContext';

type Props = {};

export default function ListPage(props: Props) {
  const { username } = useAuthentification();
  return <div>Welcome {username}</div>;
}
