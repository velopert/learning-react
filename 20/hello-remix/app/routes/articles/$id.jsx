import { Outlet, useParams } from '@remix-run/react';

export default function Article() {
  const params = useParams();
  return (
    <div>
      게시글 ID: {params.id}
      <Outlet />
    </div>
  );
}
