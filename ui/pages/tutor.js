// tutor.js 

import Layout from '../components/Layout';
import { Component }  from 'react'

export default class Tutor extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    render() {
        return(
          <Layout page='tutor'>
            <p>This is the tutor page</p>
          </Layout>
        )
    }
    
}