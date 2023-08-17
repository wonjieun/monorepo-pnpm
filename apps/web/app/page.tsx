import { trpc } from '@web/app/trpc';
import Button from '@web/components/Button';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Jina` });
  return (
    <main>
      <h1>Server side: {greeting}</h1>
      <Button />
    </main>
  );
}
