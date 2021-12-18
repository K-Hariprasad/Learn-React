import React, { Component } from 'react'

export class ChildComponent extends Component {
    
    render() {
        let { fruit } = this.props
        if(fruit === "Tomato"){
            throw Error("Tomato is not a fruit!!!!!!")
        }
        return (
            <div>
                <p>{fruit}</p>
            </div>
        )
    }
}

export default ChildComponent
