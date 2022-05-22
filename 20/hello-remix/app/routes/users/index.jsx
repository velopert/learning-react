import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getUsers } from '../../lib/api';

export const loader = async () => {
  const data = await getUsers();
  return json(data);
};

export default function Users() {
  const users = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
