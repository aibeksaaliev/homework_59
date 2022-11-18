import React from 'react';

interface GetJokeButtonProps {
  onClick: React.MouseEventHandler;
}

const compareProps = (prevProps: GetJokeButtonProps, nextProps: GetJokeButtonProps) => {
  return prevProps !== nextProps;
};

const GetJokeButton: React.FC<GetJokeButtonProps> = React.memo(({onClick}) => {
  console.log("render button");
  return (
    <>
      <button onClick={onClick}>Get joke</button>
    </>
  );
}, compareProps)



export default GetJokeButton;