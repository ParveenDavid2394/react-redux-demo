import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'


function CakeContainer(props){

    return(
        
            <div>
            <h2>Number of Cakes - {props.numOfCake}</h2>
                <button onClick={props.buyCake}>Buy Cake!</button>
            </div>
    )
}

// function to transfer data from redux state into props of this component
const mapStateToProps = state =>{
    return {
        numOfCake: state.cake.numOfCake 
    }
}

// function to transfer dispatch from state into props of this component
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}

// need to connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)