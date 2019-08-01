import React from 'react';
import TodoList from './TodoList';
import AppPage from '../app/AppPage';

type Props = {};

export default function ListPage(props: Props) {
  return (
    <AppPage>
      <TodoList />
    </AppPage>
  );
}
