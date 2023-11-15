// @ts-check
'use client';
import React from 'react';
import { useState } from 'react';
import { useMutation, useRouter } from './framework/router';

export default function AddTodo() {
  const [value, setValue] = useState('');
  const { refresh } = useRouter();
  const [isSaving, addTodo] = useMutation({ endpoint: '/todos/new', method: 'POST' });
  return (
    <div>
      <input placeholder="Your todo" value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={async () => {
          setValue('');
          await addTodo({ value }, {});
          refresh();
        }}
        disabled={isSaving}
      >
        Send
      </button>
    </div>
  );
}
