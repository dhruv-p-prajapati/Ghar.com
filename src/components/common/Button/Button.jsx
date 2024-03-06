import React, { useState } from 'react';
import './button.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/actions/ThemeAction';

const Button = () => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);

  const handleToggleMode = () => {
    dispatch(toggleTheme(theme));
  }
  return (
    <button className='btn' onClick={handleToggleMode}>Change Theme</button>
  )
}

export default Button