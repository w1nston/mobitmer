import React from 'react';

export default function MobTimer({ onStart }) {
  return (
    <section>
      <button onClick={onStart}>
        Start
      </button>
    </section>
  );
}
