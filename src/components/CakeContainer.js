import React from 'react';
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return ( 
        <div>
                  <hr></hr>
            <h1>cheese cake</h1>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);