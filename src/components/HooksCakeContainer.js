import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
   const numOfCakes = useSelector(state => state.cake.numOfCakes)
   const dispatch = useDispatch()
   return (
    <div>
        <h1>nutela cake</h1>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
    </div>
  )
}

export default HooksCakeContainer