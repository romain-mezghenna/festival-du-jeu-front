import React from 'react';
import { Circle } from 'react-circle';

type ProgressColor = 'green' | 'orange' | 'red';

interface CircularProgressProps {
  percentage: string;
  color: ProgressColor;
  size?: string;
  lineWidth?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  color,
  size = '50px',
  lineWidth = '5px',
}): JSX.Element => {
  let progressColor: string;

  switch (color) {
    case 'green':
      if (Number(percentage) === 100) {
        progressColor = '#00ff00';
      } else {
        progressColor = '#008000';
      }
      break;
    case 'orange':
      progressColor = '#ffa000';
      break;
    case 'red':
      progressColor = '#ff0000';
      break;
    default:
      throw new Error(`Invalid color: ${color}`);
  }

  return (
    <Circle
      animate={true}
      size={size}
      lineWidth={lineWidth}
      progress={Number(percentage) / 100}
      bgColor={progressColor} // Set the color here
    // Remove the fill prop from the Circle component
    // fill={'transparent'}
    />
  );
};

export default CircularProgress;