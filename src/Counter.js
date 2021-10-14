import React, { useState } from 'react'

export const Counter = () => {

    const [state, setState] = useState({
        counter: 0,
        status: true
    })

    const { counter, status } = state

    const increment = () => {
        setState({
            counter: counter + 1,
            status: false
        })
    }

    const decrement = () => {
        
        setState({
            ...state,
            counter: counter - 1,
        })

    }

    return (
        <div>
            <h1 className="display-2 text-center"> { counter } </h1>

            <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-outline-secondary btn-lg" onClick={ decrement } disabled={ counter == 0 ? true : false }> - </button>
                <button className="btn btn-outline-secondary ms-2 btn-lg" onClick={ increment }> + </button>
            </div>
        </div>
    )
}
