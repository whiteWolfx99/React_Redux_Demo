import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const iceCreamContainer = (props) => {
  return (
    <div>
      <h1>Ice Cream</h1>
      <h2>Number of ice - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
