import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [curPerson, setCurPerson] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (curPerson < 0) {
      setCurPerson(lastIndex);
    } else if (curPerson > 3) {
      setCurPerson(0);
    }
  }, [curPerson, people]);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurPerson(curPerson + 1);
    }, 3000);
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [curPerson]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          // more stuff coming up
          let position = `nextSlide`;
          if (index === curPerson) {
            position = `activeSlide`;
          } else if (
            index === curPerson - 1 ||
            (curPerson === 0 && index === people.length - 1)
          ) {
            position = `lastSlide`;
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setCurPerson(curPerson - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setCurPerson(curPerson + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
