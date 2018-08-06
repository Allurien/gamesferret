import React, {Component} from 'react';
import ReactStars from 'react-stars'
import '../gamedetails/gamedetails.scss'
import Modal from 'react-modal';
import {withRouter, Link} from 'react-router-dom';

class GameResult extends Component {
    constructor () {
        super();
        this.state = {
            modalIsOpen: false
          };
          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
    } 
    openModal() {
        this.setState({modalIsOpen: true});
      }
    closeModal() {
        this.setState({modalIsOpen: false});
      }
    render(){
        const miniDescription = this.props.details.description.replace(/<\/?[^><]*>|\&\#?\d*\w*\;/gm, " ");
        
        const ratingChanged = (newRating) => {
        };
        Modal.setAppElement(document.getElementById('root'));
        Modal.defaultStyles={
            overlay: {
                position: 'fixed',
                top: '0',
                left: '0',
                width:'100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: '5',
            }
        }
        return (
            <div className="resItem">
                <div className='gameBlock' onClick={this.openModal}>
                    <img className='resItemImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                    <div className="stars">
                        <ReactStars count={5}  color2={'#ffd700'} value={parseFloat(this.props.details.all_rating)} edit={false}/>
                    </div>
                    <h4>{this.props.details.app_name}</h4>
                </div>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal} 
                    shouldCloseOnOverlayClick={true} 
                    contentLabel="Game Details Modal"
                    className='modal-main'
                    >
                    <div className="modalContainer">
                        <div className="modalDetails">
                            <h3>{this.props.details.app_name}</h3>
                            <div className="modalRow">
                                <img className='modalImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                                <div className="infoColumn">
                                    <p>{ (miniDescription.length > 60) ? ((miniDescription.substring(0,60-3)) + '...') : miniDescription }</p>
                                    <div className="stars">
                                        <ReactStars count={5} color2={'#ffd700'} value={parseFloat(this.props.details.all_rating)} edit={false}/>
                                    </div>
                                    <h4>Price: {this.props.details.price_value}</h4>
                                </div>
                            </div>
                            <div className="modalRow">
                                <button className='detailsButton' onClick={this.closeModal}><Link to={`/game/${this.props.details.game_id}/gamedetails`}>View Game Details</Link></button>
                                <button className='detailsButton' onClick={this.closeModal}>Continue Browsing</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
} 
export default withRouter(GameResult);