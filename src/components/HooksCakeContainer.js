// instead of mapStateToProps and connect function, we can use useSelector hook to get the state we want from the redux store
// use useDispatch to use dispatch

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer(){

    const NumberOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()

    return(
        <div>   
            <h2>Number of Cakes - {NumberOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake!</button>
        </div>
    )
}

export default HooksCakeContainer