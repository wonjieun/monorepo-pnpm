'use client';

import { useEffect, useState } from 'react';
import { trpc } from '@web/app/trpc';

export default function Button() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    trpc.hello
      .query({ name: `Jina` })
      .then(({ greeting }) => setGreeting(greeting));
  }, []);

  return <button>{greeting}</button>;
}
