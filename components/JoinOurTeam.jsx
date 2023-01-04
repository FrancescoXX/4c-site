import React, { useState } from 'react';
import JoinUsForm from './Form/JoinUsForm';

function JoinOurTeam () {
  const [tab] = useState('Join Our Team');
  return (
    <div className="mt-18 flex items-start justify-start">
      <section className="flex-1 text-center text-4xl font-bold text-white">
        <h1>{tab}</h1>
        <JoinUsForm />
      </section>
    </div>
  );
}

export default JoinOurTeam;
