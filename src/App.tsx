import { useEffect, useState } from "react";

interface ITimeObject {
  hours: number;
  minutes: number;
  seconds: number;
}

const timeToSeconds = (
  hours: number,
  minutes: number,
  seconds: number
): number => {
  const totalSeconds: number = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
};

const secondsToTime = (totalSeconds: number): ITimeObject => {
  const hours: number = Math.floor(totalSeconds / 3600);
  const remainingSecondsAfterHours: number = totalSeconds % 3600;
  const minutes: number = Math.floor(remainingSecondsAfterHours / 60);
  const seconds: number = remainingSecondsAfterHours % 60;

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const TimePicker = () => {
  // Initial values
  const secondsProps = 140;
  const maxDuration = 120;
  const totalSeconds = secondsProps % (24 * 60 * 60);
  const initialHour = Math.floor(totalSeconds / 3600);
  const initialMinute = Math.floor((totalSeconds % 3600) / 60);
  const initialSecond = totalSeconds % 60;

  // From
  const [fromHours, setFromHour] = useState<number>(0);
  const [fromMinutes, setFromMinute] = useState<number>(0);
  const [fromSeconds, setFromSecond] = useState<number>(0);

  // To
  const [toHours, setToHours] = useState<number>(initialHour);
  const [toMinutes, setToMinutes] = useState<number>(initialMinute);
  const [toSeconds, setToSeconds] = useState<number>(initialSecond);

  // Duration
  const [durationHours, setDurationHours] = useState<number>(initialHour);
  const [durationMinutes, setDurationMinutes] = useState<number>(initialMinute);
  const [durationSeconds, setDurationSeconds] = useState<number>(initialSecond);

  useEffect(() => {
    const to = timeToSeconds(toHours, toMinutes, toSeconds);
    const from = timeToSeconds(fromHours, fromMinutes, fromSeconds);
    const diffrence = Math.abs(to - from);

    const { hours, minutes, seconds } = secondsToTime(diffrence);
    setDurationHours(hours);
    setDurationMinutes(minutes);
    setDurationSeconds(seconds);
  }, [fromHours, fromMinutes, fromSeconds, toHours, toMinutes, toSeconds]);

  // From Handlers
  const handleFromHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 23) {
      value = 23;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setFromHour(value);
  };

  const handleFromMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setFromMinute(value);
  };

  const handleFromSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setFromSecond(value);
  };

  // To Handlers
  const handleToHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 23) {
      value = 23;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setToHours(value);
  };

  const handleToMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setToMinutes(value);
  };

  const handleToSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setToSeconds(value);
  };
  // Duration Handlers
  const handleDurationHoursChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(e.target.value, 10);
    if (value > 23) {
      value = 23;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setDurationHours(value);
  };

  const handleDurationMinutesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setDurationMinutes(value);
  };

  const handleDurationSecondsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) {
      value = 59;
    } else if (value < 0 || isNaN(value)) {
      value = 0;
    }
    setDurationSeconds(value);
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div>
      <div>
        <h2>{secondsProps}</h2>
      </div>
      <div className='timeInputs'>
        <div className='inputsContainer'>
          <h3>From</h3>
          <div className='timeInput'>
            <input
              type='number'
              value={formatTime(fromHours)}
              onChange={handleFromHoursChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(fromMinutes)}
              onChange={handleFromMinutesChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(fromSeconds)}
              onChange={handleFromSecondsChange}
            />
          </div>
          <p></p>
        </div>
        <div className='inputsContainer'>
          <h3>To</h3>
          <div className='timeInput'>
            <input
              type='number'
              value={formatTime(toHours)}
              onChange={handleToHoursChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(toMinutes)}
              onChange={handleToMinutesChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(toSeconds)}
              onChange={handleToSecondsChange}
            />
          </div>
        </div>
        <div className='inputsContainer'>
          <h3>Duration</h3>
          <div className='timeInput'>
            <input
              type='number'
              value={formatTime(durationHours)}
              onChange={handleDurationHoursChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(durationMinutes)}
              onChange={handleDurationMinutesChange}
            />
            <span>:</span>
            <input
              type='number'
              value={formatTime(durationSeconds)}
              onChange={handleDurationSecondsChange}
            />
          </div>
          <p className='error'>
            {timeToSeconds(durationHours, durationMinutes, durationSeconds) >
            maxDuration
              ? "No longer than two minutes"
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
