// login.js

import Layout from '../components/Layout'
import { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



export default class Login extends Component {
    constructor(props){
    super()
      this.state = {}
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e, {value} ){
      this.setState({ [e.target.name]: value });
    }

    onSubmit(e){
      e.preventDefault()
      const user_data = {
        email: this.state.email,
        password: this.state.password,
      }
      this.props.onSubmit(user_data);
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
          }
           
        return (
        <Layout page='login'>
            <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='green' textAlign='center'>
                    <Image/> Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.onSubmit}>
                        <Form.Input
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        name='email'
                        onChange={this.onChange}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name='password'
                            type='password'
                            onChange={this.onChange}
                        />
                        <Button color='green' fluid size='medium'>
                            Login
                        </Button>
                        <GoogleLogin
                            clientId="350224058826-4p6as2tv5betb9cn8ihr2egfl6n77huh.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
                </Grid.Column>
            </Grid>
        </Layout>
        );
    }
  }