import React from 'react';

const Today = () => {
  const date = new Date();
  let monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format;

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = new Date();

  return (
    <div className='today'>
      <span className='month'>{monthName(date)}</span>
      <h1 className='date'>{date.getDate()}</h1>
      <span className='day'>{weekday[day.getDay()]}</span>
    </div>
  );
};

export default Today;
