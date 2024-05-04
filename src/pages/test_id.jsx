import { Header } from '@/components/Header';
import { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/Button';

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/forums');
    const forums = response.data.forums || [];
    return {
      props: { initialForums: forums },
    };
  } catch (error) {
    console.error('Error fetching forums:', error);
    return {
      props: { initialForums: [] },
    };
  }
};

const TestPage = ({ initialForums }) => {
  const [forums, setForums] = useState(initialForums);

  const handleDelete = (forumId) => async () => {
    const deletedForum = forums.find(({ id }) => id === forumId);
    const newForums = forums.filter(({ id }) => id !== forumId);
    setForums(newForums);
    try {
      await axios.delete(`http://localhost:3000/api/forums/${forumId}`);
    } catch (err) {
      setForums([...newForums, deletedForum]);
    }
  };

  return (
    <>
   <Header />
      <ul className="flex flex-col gap-4">
        {forums.map(({ id, city }) => (
          <li key={id} className="group flex items-center gap-2">
            <Link href={`/forums/${id}/edit`} className="flex gap-2 py-1">
              <span
                className={clsx('h-6 w-6 border border-green-500', {
                  'bg-green-500': isDone,
                })}
              />{' '}
              #{id} {city}
            </Link>
            <Button
              onClick={handleDelete(id)}
              variant="danger"
              size="md"
              className="hidden group-hover:inline"
            >
              DELETE
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestPage;
