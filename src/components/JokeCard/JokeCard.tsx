import React from 'react';

interface JokeCardProps {
  joke: string | undefined;
}

const JokeCard: React.FC<JokeCardProps> = ({joke}) => {
  return (
    <div className="border border-1 border-dark p-2 mb-3 rounded-2">
      <p className="m-0">{joke}</p>
    </div>
  );
};

export default JokeCard;