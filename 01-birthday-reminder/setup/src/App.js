import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={
            () =>
              setPeople(prev =>
                prev !== [] ? setPeople([]) : setPeople(people)
              ) //TODO: why this ain't working
          }
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
