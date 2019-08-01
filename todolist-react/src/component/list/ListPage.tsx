import React from 'react';
import TodoList from './TodoList';
import { TodoListProvider } from '../../context/TodoListContext';
import PageLayout from '../PageLayout';

type Props = {};

export default function ListPage(props: Props) {
  return (
    <TodoListProvider>
      <PageLayout>
        <TodoList />
      </PageLayout>
    </TodoListProvider>
  );
}
