import React, { Component } from 'react';
import {connect} from 'react-redux';
import {triggerModal, clearModal} from '../../actions/';
import FirstTimeModal from '../modals/firstTimeModal';
import Carousel from '../carousel';
import GeneralText from '../multiuse/generaltext';
import types from "../../actions/types";

class HomePage extends Component {
    componentDidMount() {
        const isNotFirstTimeVisit = window.localStorage.getItem('notfirstimer');
        if(!isNotFirstTimeVisit) {
            this.props.triggerModal('hello')
            window.localStorage.setItem('notfirstimer', true);
        }
    }
    handleModalClose() {
        this.props.clearModal();
    }
    render() {
        const {modal: {firstModal }, user } = this.props;
        const genText = user && user.username ? `Welcome ${user.username}` : 'Welcome to Games Ferret!';
        return (
            <div className="homePageContainer">
                <FirstTimeModal parentComponent={genText} content={firstModal} handleClose={() => this.handleModalClose()} />
                <GeneralText text={genText}/>
                <Carousel/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    modal: state.modal,
    user: state.user.user
});
export default connect(mapStateToProps,{ triggerModal, clearModal })(HomePage);
