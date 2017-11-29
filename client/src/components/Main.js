import React, { Component } from 'react'
import { getCategories } from '../utils/ServerAPI'

class Main extends Component {
    render() {
        
        getCategories().then(data => {
            console.log(data.categories)
        })

        return (
            <h1>Readable Project</h1>
        )
    }
}

export default Main