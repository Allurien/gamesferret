import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {accountSignIn} from "../../actions";
import {renderInputs} from "../../helpers";

class SignIn extends Component {


    async handleSignIn (values) {
        try{
            await this.props.accountSignIn(values);

            this.props.history.push('/');
        } catch(err){
        }

    }

    render() {
        const {handleSubmit, authError} = this.props;
 

        return (

            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                <h1 className="text-center">Sign-In</h1>
                <div className="row  col-xs-10 col-xs-offset-1">
                    <Field className="signInInput" name="email" type="email"  component={renderInputs} label="Email"/>
            </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <Field type="password" className="signInInput" type="password" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <div className="signInInput">
                        <button className="btn accountBtn btn-info btn-sm col-xs-4 col-xs-offset-4">Sign In</button>
                    </div>
                </div>
                <p className="text-danger col-xs-4 col-xs-offset-4 text-center">{authError}</p>
            </form>
        )
    }
}

function validate(values) {
    const{email, password} = values;
    const errors = {};

    if(!email) {
        errors.email = "Please enter your email";
    }
    if (!password) {
        errors.password = "Please enter a password"
    }
    return errors;

}

SignIn = reduxForm({
    form: "sign-in",
    validate: validate
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {accountSignIn: accountSignIn})(SignIn);
