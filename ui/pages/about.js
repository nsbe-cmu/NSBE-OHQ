// pages/about.js

import Layout from '../components/Layout';
import { FormExampleFieldControlId, FormNoGener } from '../components/Forms'
import { Component }  from 'react'


const clickHandler = () => {
    console.log('Clicked!')
}

export default class About extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    render() {
        return(
          <Layout>
            <p>This is the about page</p>
            <FormExampleFieldControlId handleFormSubmission={clickHandler}/>
            <FormNoGener handleFormSubmission={clickHandler}/>
          </Layout>
        )
    }
    
}
