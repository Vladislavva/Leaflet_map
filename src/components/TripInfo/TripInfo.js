import React from 'react';
import Input from '../Input/input';
import gps from '../../assets/gps.png';
import Button from '../Button/Button';


const TripInfo = () => {



  return (<div className='tripInfo'>
    <h3>Информация поездки</h3>
    <Input
      img={gps} label={"Откуда"} />
    <Input
      img={gps} label={"Куда"} />
    <div className="btnBlock">
      <Button btnName={"Отменить"} />
      <Button btnName={"Искать поездку"} />
    </div>
  </div>)
};
export default TripInfo

