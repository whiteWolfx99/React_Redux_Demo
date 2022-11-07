import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream , buyCake } from "../redux";

function ItemContainer(props) {
  return (
    <div>
        <h1>items</h1>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy items</button>
    </div>
  )
}

const mapStateTOProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}   

export default connect(mapStateTOProps, mapDispatchToProps)(ItemContainer)