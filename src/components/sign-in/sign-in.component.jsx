import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value })
            console.log(value)
        }

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.setState({ email: '', password: '' })
        }
    }
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account !</h1>
                <span>Sign in with email and password.</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput type="passwordx`" name="passwordx`" value={this.state.password} handleChange={this.handleChange} label="password" />
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with Google </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;