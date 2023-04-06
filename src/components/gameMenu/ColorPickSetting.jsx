import React from 'react';
import Button from '../UI/Button';

const ColorPickSetting = (props) => {
    return (
       <div className='colorPicker-container'>
       <p>Change color type</p>
        <Button id={props.colorPick} onClick={props.handleColorPick}>{props.colorPick}</Button>
       </div>
    );
}

export default ColorPickSetting;
