import React from 'react'

const ControlledGreeting = (props) => {
    const { title: titlee, onTexChange: changee } = props
    const changeHandler = (event) => {
        changee(event.target.value)
    }

    return (
        <div>
            {titlee}
            <div>
                <input onChange={changeHandler} type="text" />
            </div>
        </div>
    )
}

export default ControlledGreeting
