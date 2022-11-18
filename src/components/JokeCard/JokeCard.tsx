import React from 'react';

interface JokeCardProps {
  joke: string | undefined;
}

const JokeCard: React.FC<JokeCardProps> = ({joke}) => {
  console.log("render");
  return (
    <div>
      <p>{joke}</p>
    </div>
  );
};

export default JokeCard;