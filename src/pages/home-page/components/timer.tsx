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
    <div className=" font-[Poppins] text-[20px]">
      <div className="flex items-end gap-2">
        <div className="flex flex-col items-center">
          <div className="text-lg">days</div>
          <div className="text-2xl font-semibold">{timeDay}</div>
        </div>
        <div className="text-2xl font-semibold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-lg">hours</div>
          <div className="text-2xl font-semibold">{timerHours}</div>
        </div>
        <div className="text-2xl font-semibold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-lg">minutes</div>
          <div className="text-2xl font-semibold">{timerMinutes}</div>
        </div>
        <div className="text-2xl font-semibold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-lg">seconds</div>
          <div className="text-2xl font-semibold">{timerSeconds}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
