import React, {useEffect, useState} from 'react';
import JokeCard from "../../components/JokeCard/JokeCard";
import GetJokeButton from "../../components/GetJokeButton/GetJokeButton";
import {JokeType} from "../../types";

const FreeJoke = () => {
  const [jokesFromChuck, setJokesFromChuck] = useState<JokeType[]>([]);
  const [buttonStatus, setButtonStatus] = useState(false);

  const getJokeFromApi = async () => {
    const urlApi: string = "https://api.chucknorris.io/jokes/random";
    const copyOfJokesFromChuck = [...jokesFromChuck];
    setJokesFromChuck(copyOfJokesFromChuck);

    Promise.all([
      fetch(urlApi).then(resp => resp.json()),
      fetch(urlApi).then(resp => resp.json()),
      fetch(urlApi).then(resp => resp.json()),
      fetch(urlApi).then(resp => resp.json()),
      fetch(urlApi).then(resp => resp.json())
  ]).then((promises) => promises.map((item: JokeType) => {
      return setJokesFromChuck((prevState: JokeType[]) => ([...prevState, item]))
    }));

  }

  useEffect(() => {
    getJokeFromApi().catch(console.error);
  }, []);

  const changeButtonStatus = () => {
    setButtonStatus(!buttonStatus);
    getJokeFromApi().catch(console.error);
  };

  return (
    <div className="d-flex flex-column text-center">
      {jokesFromChuck.map(joke => {
        return <JokeCard key={joke.id} joke={joke.value}/>
      })}
      <GetJokeButton onClick={changeButtonStatus}/>
    </div>
  );
};

export default FreeJoke;