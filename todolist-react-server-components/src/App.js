// @ts-check
import { Suspense } from 'react';
import Todolist from './Todolist';
import React from 'react';

export default function App() {
  return (
    <Suspense fallback={<div>Loading todos...</div>}>
      <Todolist />
    </Suspense>
  );
}
