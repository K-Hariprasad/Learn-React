import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }
    render() {
        let { hasError } = this.state
        if(hasError){
            return <h1>Something went wrong. Check the error log!!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
