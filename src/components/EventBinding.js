import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props){
        super(props)
        this.state = {
            message : "Hello world !!!"
        }
        this.clickHandler_1 = this.clickHandler_1.bind(this)  //binding inside constructor
    }
    clickHandler(){
        this.setState({message : "Button Clicked !!!!"})
    }
    clickHandler_1(){
        this.setState({message : "Button Clicked !!!!"})
    }
    clickHandler_2 = () => {
        this.setState({message : "Button Clicked !!!!"})
    }
    render() {
        let { message } = this.state
        return (
            <div>
                <h4>{message}</h4>
                <hr/>
                <button onClick = {this.clickHandler} >Click Me!</button>
                <p>This button click will throw error because 'this' keyword is undefined in the clickHandler method.</p>
                <hr/>
                <button onClick = {()=>this.clickHandler()} >Click Me!</button>
                <p>Here using arrow function for the event handler.</p>
                <hr/>
                <button onClick = {this.clickHandler.bind(this)} >Click Me!</button>
                <p>Here using event binding inside render method and passing 'this' keyword as argument. Not a best method for larger apps.</p>
                <hr/>
                <button onClick = {this.clickHandler_1} >Click Me!</button>
                <p>Here using event binding inside constructor.</p>
                <hr/>
                <button onClick = {this.clickHandler_2} >Click Me!</button>
                <p>Here event handler method is written in arrow function format.</p>
            </div>
        )
    }
}

export default EventBinding
