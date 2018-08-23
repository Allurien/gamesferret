import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {createAccount} from "../../actions";
import {renderInputs} from "../../helpers";

class SignUp extends Component {

    async handleSignUp (values) {
        try{
            await this.props.createAccount(values);
            this.props.history.push('/');
        } catch(err){
        }

    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                <h1 className="text-center">Create Account</h1>
                <div className="row col-xs-10 col-xs-offset-1">
                    <Field name="username" component={renderInputs} label="Username"/>
                </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <Field name="email" component={renderInputs} label="Email"/>
                </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <Field type="password" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <div className="d-flex col-xs-10 col-xs-offset-1 justify-content-end">
                        <button className="btn accountBtn btn-info btn-sm col-xs-4 col-xs-offset-4">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const{username, email, password, confirmPassword} = values;
    const errors = {};

    if(!username) {
        errors.username = "Please enter your username";
    }
    if(!email) {
        errors.email = "Please enter your email";
    }
    if (!password) {
        errors.password = "Please enter a password"
    }
    if (!confirmPassword) {
        errors.confirmPassword = "Passwords do not match"
    }
    return errors;

}
function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}


SignUp = reduxForm({
    form: "sign-up",
    validate: validate
})(SignUp);

export default connect(mapStateToProps, {createAccount: createAccount})(SignUp);