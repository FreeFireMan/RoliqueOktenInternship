import React from 'react';
import classes from './Input.module.css';


const Input = (props) => {
    // let divClass = [];
    // if (props.className)
    //     {divClass.push(props.className)}

    return (
        <div className={`${classes.div} ${classes[props.className]}`}>
            <label className={classes.label} for={props.id}>{props.label}</label>
            <input className={classes.input} type={props.type} id={props.id}/>
            {props.error ? <p className={classes.p}>{props.error}</p> : null}
        </div>
    );
};

export default Input;