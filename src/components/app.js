import React from 'react';
import MobsterForm from '../containers/mobsterForm';
import MobsterList from '../containers/mobsterList';
import MobTimer from '../containers/mobTimer';

export default function App() {
  return (
    <div>
      <MobsterForm />
      <MobsterList />
      <MobTimer />
    </div>
  );
}
