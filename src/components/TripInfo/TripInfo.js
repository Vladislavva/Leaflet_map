import React from 'react';
import Input from '../Input/input';
import gps from '../../assets/gps.png';
import Button from '../Button/Button';
import {
  useLocation
} from "react-router-dom";
import SelectBlock from '../Select/SelectBlock';



const TripInfo = () => {
  const path = useLocation();
  return (
    <div>
      {path.pathname === '/find' && (
        <div className='tripInfo'>
          <h3>Информация поездки</h3>
          <Input
            img={gps} label={"Откуда"} />
          <Input
            img={gps} label={"Куда"} />
          <div className="btnBlock">
            <Button btnName={"Отменить"} btnStyle={"Btn"} clickfunc={clickfunc} />
            <Button btnName={"Искать поездку"} btnStyle={"Btn"} />
          </div>
        </div>
      )}

      {
        path.pathname === '/create' && (
          <div className='tripInfo'>
          <h3>Информация поездки</h3>
          <Input
            img={gps} label={"Откуда"} />
          <Input
            img={gps} label={"Куда"} />
            <p>Количество попутчиков + ВЫ</p>
            <SelectBlock/>
            <p>Время отправления</p>
            <Button btnName={"Создать поездку"} btnStyle={"Btn"} />
            </div>
            
            
        )
      }
    </div>)
};

const clickfunc = (e) => {

  alert(e.target)
}

export default TripInfo

