// @ts-check
'use client';

import React from 'react';
import { useMutation, useRouter } from './framework/router';

export default function TodoItem({ todo }) {
  const { refresh } = useRouter();
  const [isSaving, toggleTodo] = useMutation({ endpoint: '/todos/toggle', method: 'POST' });

  return (
    <span
      onClick={async () => {
        await toggleTodo({ id: todo.id }, {});
        refresh();
      }}
    >
      [{isSaving ? '?' : todo.done ? 'X' : '\xA0'}] {todo.task}
    </span>
  );
}
