import React from 'react';

const User = ({ user }) => {
  const { email, name, username } = user;
  return (
    <div>
      <h1>
        {username} ({name})
      </h1>
      <p>
        <b>e-mail:</b> {email}
      </p>
    </div>
  );
};

export default User;
