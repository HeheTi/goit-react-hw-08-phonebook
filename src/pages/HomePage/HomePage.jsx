import React from 'react';
import homePageImg from '../../image/address-book.jpg';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <p>
        The<span className={s.wrapperText}>Phonebook</span>application will help
        you save contacts and be able to access them at any time!
      </p>
      <img src={homePageImg} alt="phonebook" className={s.img} />
    </div>
  );
};

export default HomePage;
