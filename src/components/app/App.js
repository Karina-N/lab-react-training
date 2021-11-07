import React from 'react';
import { IdCard } from '../idCard/IdCard';
import { Greetings } from '../Greetings';
import { Random } from '../Random';
import { BoxColor } from '../BoxColor';
import { CreditCard } from '../creditCard/CreditCard';
import { Rating } from '../Rating';
import { DriverCard } from '../DriverCard';
import { LikeButton } from '../LikeButton';
import { ClickablePicture } from '../ClickablePicture';
import { Dice } from '../Dice';
import { Carousel } from '../Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard />
      <Greetings lang="de" children="Ludwig" />
      <Random />
      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard />
      <h1>Stars</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Driver Card</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h1>Like Button</h1>
      <LikeButton />

      <h1>Clickable Picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <h1>Dice</h1>
      <Dice />

      <h1>Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
