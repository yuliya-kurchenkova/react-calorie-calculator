import React, { useState } from 'react'
import InputTemplate from "./components/input/inputTemplate";
import CheckboxTemplate from "./components/checkbox/checkboxTemplate";
import RadioTemplate from "./components/radio/radioTemplate";
import Button from "./components/button/buttonTemplate";
import SelectTemplate from "./components/select/selectTemplate";
import './App.css'


function App() {
    const [inputHeight, setInputHeight] = useState("");
    const [inputWeight, setInputWeight] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [selectChange, setSelectChange] = useState("");
    const [radioChange, setRadioChange] = useState('woman');



    const checkedRadioHandler = () => {
        setRadioChange(radioChange === 'woman' ? 'man' : 'woman' )
    }

    const selectChangeHandler = e => {
        setSelectChange(e.target.value)
    }

    const test =  inputHeight && inputWeight && inputAge ? false : true

    const handlerHeight = e => {
        setInputHeight(e.target.value)
    }
    const handlerWeight = e => {
        setInputWeight(e.target.value)
    }
    const handlerAge = e => {
        setInputAge(e.target.value)
    }
  return (
    <div>
        <h1 className='app-title'>Расчёт калорий для похудения</h1>
        <div className='app-container'>
            <InputTemplate
                placeholder={'см'}
                label={'Рост (в см)'}
                value={inputHeight}
                onChange={handlerHeight}
            />
            <InputTemplate
                placeholder={'кг'}
                label={'Вес (в кг)'}
                value={inputWeight}
                onChange={handlerWeight}
            />
            <InputTemplate
                placeholder={'года'}
                label={'Возраст (в годах)'}
                value={inputAge}
                onChange={handlerAge}
            />
        </div>

        <div className='app-container'>
            <RadioTemplate
               label={'Мужчина'}
               text={'Пол'}
               name={'radio'}
               checked={radioChange === 'man'}
               onChange={checkedRadioHandler}
            />
            {/*{ radioChange ? 'true' : 'false' }*/}
            { radioChange }
            <RadioTemplate
               label={'Женщина'}
               name={'radio'}
               checked={radioChange === 'woman'}
               onChange={checkedRadioHandler}
            />
            <SelectTemplate
             onChange={selectChangeHandler}
             value={selectChange}
            />
            <CheckboxTemplate/>
        </div>
        <Button
         text={'Рассчитать'}
         disabled={test}
        />
    </div>
  );
}

export default App;
