// admin.js 

import Layout from '../components/Layout';
import { Component }  from 'react'

export default class Admin extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    render() {
        return(
          <Layout>
            <p>This is the admin page</p>
          </Layout>
        )
    }
    
}