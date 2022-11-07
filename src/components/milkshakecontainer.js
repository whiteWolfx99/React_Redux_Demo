import React from 'react'
import { buymilkshake } from "../redux";
import { connect } from "react-redux";

function milkshakecontainer(props) {
  return (
    <div>
        <hr></hr>
        <h1>milkshake</h1>
        <h2>number of milk shake - {props.numOfMilkshakes}</h2>
        <button onClick={props.buymilkshake}>Buy milkshake</button>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        numOfMilkshakes : state.milkshake.numOfMilkshakes
    }
}     

const mapDispatchToProps = (dispatch) => {
    return {
        buymilkshake: () => dispatch(buymilkshake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(milkshakecontainer)