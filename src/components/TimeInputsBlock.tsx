import React, { useState, useEffect } from "react";

interface ITimeInputsBlockProps {
  blockTitle: string;
  value: number;
  onChange: (number: number, formValue: string) => void;
}

const TimeInputsBlock: React.FC<ITimeInputsBlockProps> = ({
  blockTitle,
  value,
  onChange,
}) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const convertSecondsToTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return { hours: h, minutes: m, seconds: s };
  };

  useEffect(() => {
    const { hours, minutes, seconds } = convertSecondsToTime(value);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [value]);

  useEffect(() => {
    const totalSeconds = 3600 * hours + 60 * minutes + seconds;
    onChange(totalSeconds, "from");
  }, [hours, minutes, seconds]);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 23) {
      setHours(value);
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 59) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 59) {
      setSeconds(value);
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className='inputsContainer'>
      <h3>{blockTitle}</h3>
      <div className='timeInput'>
        <input
          type='number'
          placeholder='HH'
          min='0'
          max='23'
          value={formatNumber(hours)}
          onChange={handleHoursChange}
        />
        <span>:</span>
        <input
          type='number'
          placeholder='MM'
          min='0'
          max='59'
          value={formatNumber(minutes)}
          onChange={handleMinutesChange}
        />
        <span>:</span>
        <input
          type='number'
          placeholder='SS'
          min='0'
          max='59'
          value={formatNumber(seconds)}
          onChange={handleSecondsChange}
        />
      </div>
    </div>
  );
};

export default TimeInputsBlock;
