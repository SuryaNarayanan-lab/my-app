import React from 'react';

import classes from './Card.module.css';

function Card (props){
//const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
