import React, { useRef, useState, useEffect } from 'react';

interface Time {
  time: string;
}

const Timer: React.FC<Time> = ({ time }) => {
  const [timeDay, settimeDay] = useState('00');
  const [timerHours, settimerHours] = useState('00');
  const [timerMinutes, settimerMinutes] = useState('00');
  const [timerSeconds, settimerSeconds] = useState('00');

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    const countdownDate = new Date(time).getTime();

    intervalRef.current = window.setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        settimeDay(`${days}`);
        settimerHours(`${hours}`);
        settimerMinutes(`${minutes}`);
        settimerSeconds(`${seconds}`);
      }
    }, 1000);
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white lg:h-20 lg:w-20">
          <div className="text-2xl font-semibold lg:text-3xl">{timeDay}</div>
          <div className=" text-sm font-medium">days</div>
        </div>
        <div className="text-2xl font-semibold lg:text-3xl">:</div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white lg:h-20 lg:w-20">
          <div className="text-2xl font-semibold lg:text-3xl">{timerHours}</div>
          <div className=" text-sm font-medium">hours</div>
        </div>
        <div className="text-2xl font-semibold lg:text-3xl">:</div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white lg:h-20 lg:w-20">
          <div className="text-2xl font-semibold lg:text-3xl">{timerMinutes}</div>
          <div className=" text-sm font-medium">minutes</div>
        </div>
        <div className="text-2xl font-semibold lg:text-3xl">:</div>
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white lg:h-20 lg:w-20">
          <div className="text-2xl font-semibold lg:text-3xl">{timerSeconds}</div>
          <div className=" text-sm font-medium">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
