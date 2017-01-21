import React from 'react';

function renderMobster(mobster, index) {
  return (
    <tr key={index}>
      <td>{mobster}</td>
    </tr>
  );
}

export default function MobsterList({ mobsters = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Mobsters</th>
        </tr>
      </thead>
      <tbody>
        {mobsters.map(renderMobster)}
      </tbody>
    </table>
  );
}
