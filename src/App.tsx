import React from 'react';
import Card from './Components/card';
import './app.css'

const App:React.FC = () => {
  return (
    <div >
      <div className='header'>
        <span className='header__title'>Ты сегодня покормил кота?</span>
      </div>
      <Card />
    </div>
  );
}

export default App;
