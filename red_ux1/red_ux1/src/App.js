import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import {useSelector, useDispatch} from "react-redux";

import {
    incAction,
    decAction,
    incCustomAction,
    resetAction, photoAction,onAddToBad,onRemoveFromBad,
} from '../src/components/redux/action-creators'

const PhotosList = () => {

    const users  = useSelector(({userReducer: {users}}) => users )
    const badEmployees  = useSelector(({userReducer: {badEmployees}}) => badEmployees )
    const dispatch = useDispatch()

    const fetchPhotos = async () => {
        const resp = await fetch('https://dummyapi.io/data/api/user?limit=10', {headers: {
            'app-id': 'lTE5abbDxdjGplutvTuc'
        }});
        const json = await resp.json()
        console.log(json)

        dispatch(photoAction(json.data))
        // dispatch(onAddToBad(json.id))

    }
    useEffect (() => {
        if (!users.length){
            fetchPhotos()
        }npm



    return(
        <div>
        {users.map(el => (
            <img
                style={{filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''}}
                onClick={() => {
                    const alreadyInList = badEmployees.includes(el.id)

                    const answer = !alreadyInList && window.confirm('are you sure! delete? ')
                    if(answer){
                        return dispatch(onAddToBad(el.id))
                    }

                  alreadyInList && dispatch(onRemoveFromBad(el.id))
                }}

                     key={el.id} src={el.picture} alt={el.firstName}/>
        ))}
        </div>
    )
}

function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })

    const dispatch = useDispatch()
  return (
    <div className="App">
        {!!(counter1 % 2) && <PhotosList/>}
      <h1>{counter1}</h1>
        <h2>{counter2} -2</h2>
        <button onClick={(click) => dispatch(incCustomAction(100))}>inc custom</button>
        <button onClick={() => dispatch (incAction())}>inc</button>
        <button onClick={() => dispatch(decAction())}>dec</button>
        <button onClick={() => dispatch(resetAction())}>reset</button>

    </div>
  );
}

export default App;
