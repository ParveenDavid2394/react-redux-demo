import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'


function IceCreamContainer(props) {

    return (

        <div>
            <h2>Number of Ice Cream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream!</button>
        </div>
    )
}

// function to transfer data from redux state into props of this component
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

// function to transfer dispatch from state into props of this component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

// need to connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)