import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const getRandPerson = () => {
    const randPerson = Math.floor(Math.random() * people.length);
    return randPerson !== index
      ? randPerson
      : randPerson >= 3
      ? randPerson - 1
      : randPerson + 1;
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() =>
            index > 0 ? setIndex(prev => prev - 1) : setIndex(people.length - 1)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => (index < 3 ? setIndex(prev => prev + 1) : setIndex(0))}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => setIndex(getRandPerson)}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
