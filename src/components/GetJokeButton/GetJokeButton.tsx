import React from 'react';

interface GetJokeButtonProps {
  onClick: React.MouseEventHandler;
}

const compareProps = (prevProps: GetJokeButtonProps, nextProps: GetJokeButtonProps) => {
  return prevProps !== nextProps;
};

const GetJokeButton: React.FC<GetJokeButtonProps> = React.memo(({onClick}) => {
  return (
    <>
      <button
        className="btn btn-danger w-25 mx-auto mb-3"
        onClick={onClick}>Get joke</button>
    </>
  );
}, compareProps)



export default GetJokeButton;