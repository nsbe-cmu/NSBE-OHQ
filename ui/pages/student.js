// student.js 

import Layout from '../components/Layout';
import { Component }  from 'react'

export default class Student extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    render() {
        return(
          <Layout page='student'>
            <p>This is the student page</p>
          </Layout>
        )
    }
    
}