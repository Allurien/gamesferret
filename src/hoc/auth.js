import React, {Component} from "react";
import {connect} from "react-redux";

//WrappedComponent or ComposedComponent gets passed in

export default (WrappedComponent)=> {
    class Auth extends Component {
        componentDidMount() {
            if(!this.props.auth) {
                this.props.history.push("/");
            }
        }
//gets called any time props change or if state changes write an if statement in here usually, pass it prevProps and prevState
        componentDidUpdate(prevProps, prevState) {
            if(!this.props.auth) {
                this.props.history.push("/")
            }
        }


        render() {
            return <WrappedComponent log ={this.log} {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);

}