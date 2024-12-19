import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Rejected = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user');

  return (
    <div>
      <h1>Request Rejected</h1>
      <p> {user} firstly open your demat account</p>
    </div>
  );
};

export default Rejected;
