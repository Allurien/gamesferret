import React, { Component } from 'react';
import Transition from 'react-transition-group/CSSTransitionGroup';
import Indicators from './indicators';
import './carousel.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {viewDetails} from '../../actions/';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars'
import '../modals/modal.scss'
import Loader from '../loader';


class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
            images: [],
            direction: 'next',
            transitionTime: 500,
            canClick: true,
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
        this.dataForClick();
      }
    closeModal() {
        this.setState({modalIsOpen: false});
      }
    componentDidMount(){
        this.getImageData();
    }
    dataForClick(){
        const { images, currentIndex } = this.state;
        this.props.viewDetails(images[currentIndex].game_id);
        if (!this.props.details){
            return (
                <Loader />
            )  
        }
    }
    async getImageData(){
        const resp = await axios.get('api/gameapp.php', {
            params: {
                action: 'get_mainpage'
            }
        });
        this.setState({
            images: resp.data.data
            //images: resp.data.data[icon_url]
        });
    }
    enableClick(delay){
        setTimeout(() => {
            this.setState({ canClick: true })
        }, delay);
    }
    directToImage(index){
        const { canClick, transitionTime } = this.state;
        if (!canClick) return;
        this.setState({
            currentIndex: index,
            direction: 'fade',
            canClick: false
        }, () => this.enableClick(transitionTime));
    }
    changeImg(nextDirection = 'next'){
        const { canClick, currentIndex, images: { length }, transitionTime } = this.state;
        if(!canClick) return;
        if(nextDirection !== 'next' && nextDirection !== 'previous'){
            nextDirection = 'next'
        }
        let nextIndex = nextDirection === 'next' ? currentIndex + 1 : currentIndex - 1;
        if(nextIndex >= length) {
            nextIndex = 0;
        } else if(nextIndex < 0){
            nextIndex = length - 1;
        }
        this.setState({
            currentIndex: nextIndex,
            direction: nextDirection,
            canClick: false
        }, () => this.enableClick(transitionTime));
    }
    render(){
        const { direction, currentIndex, images, transitionTime } = this.state;
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
        if(!images.length){
            return (
                <Loader />
            )
        }
        const { icon_url, app_name, description, all_rating, price_value, game_id, genre } = images[currentIndex];
        const src= icon_url;
        const text = app_name
        const rating = all_rating;
        const price = price_value;
        const id = game_id;
        const miniDescription = description.replace(/<\/?[^><]*>|\&\#?\d*\w*\;/gm, " ");
        return (
            <div className="center-all"> 
                <div className="carousel-container">
                    <Transition
                        transitionName={`carousel-${direction}`}
                        transitionEnterTimeout={transitionTime}
                        transitionLeaveTimeout={transitionTime}
                    >
                        <div className="ImgAndArrowBox">
                            <button onClick={this.changeImg.bind(this, 'previous')}>
                                <i className="fa fa-chevron-left"></i>
                            </button>
                            <img key={src} src={src} alt={text} onClick={this.openModal} className="carousel-img" />
                            <button onClick={this.changeImg.bind(this, 'next')}>
                                <i className="fa fa-chevron-right"></i>
                            </button>
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
                                <h3>{text}</h3>
                                <div className="modalRow">
                                    <img className='modalImg' src={src} alt={text} />
                                    <div className="infoColumn">
                                        <p>{ (miniDescription.length > 60) ? ((miniDescription.substring(0,60-3)) + '...') : miniDescription }</p>
                                        <div className="ratingStars">
                                            <ReactStars count={5} size={18} color2={'#ffd700'} value={parseFloat(rating)} edit={false}/>
                                        </div>
                                        <h4>Price: {price}</h4>
                                    </div>
                                </div>
                                <div className="modalRow">
                                <Link to={`/game/${id}/gamedetails`}><button className='detailsButton'>View Game Details</button></Link>
                                    <button className='detailsButton' onClick={this.closeModal}>Continue Browsing</button>
                                </div>
                            </div>
                            </div>
                        </Modal>
                    </Transition>
                </div>
                <h4 className="carousel-text">{text}</h4>
                <h5 className="genreLabel">{genre} Game</h5>
                <Indicators onClick={this.directToImage.bind(this)} count={images.length} current={currentIndex} />
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        details: state.game.details
    }
}
export default connect(mapStateToProps, {viewDetails})(Carousel);

