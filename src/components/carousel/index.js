import React, { Component } from 'react';
// Install React CSS Transition Addon:
// npm install --save react-addons-css-transition-group
import Transition from 'react-transition-group/CSSTransitionGroup';
import Indicators from './indicators';
import imageData from '../../assets/images/carousel';
import './carousel.css';
import axios from 'axios';


class Carousel extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentIndex: 0,
            images: [],
            direction: 'next',
            transitionTime: 500,
            canClick: true
        }
    }

    componentDidMount(){
        this.getImageData();
    }

    async getImageData(){
        const resp = await axios.get('api/mainpage.php', {
            params: {
                action: 'get_mainpage'
            }
        });

        console.log('Get Image Resp:',resp);
        //console.log('Get Image :',resp.data.data[icon_url]);
        this.setState({
            // Can't see call data, so this will need to be changed to the appropriate string
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

        if(!images.length){
            return (
                <div className="carousel-container">
                    <h1 className="">Loading Images</h1>
                </div>
            )
        }

        const { src, text } = images[currentIndex];

        return (
            <div className="center-all">
                
                <div className="carousel-container">
                    <Transition
                        transitionName={`carousel-${direction}`}
                        transitionEnterTimeout={transitionTime}
                        transitionLeaveTimeout={transitionTime}
                    >
                        <img key={src} src={src} alt={text} className="carousel-img" />
                    </Transition>
                </div>
                <h4 className="carousel-text">{text}</h4>
                <Indicators onClick={this.directToImage.bind(this)} count={images.length} current={currentIndex} />
                <button className='btn' onClick={this.changeImg.bind(this, 'previous')}>Previous Game</button>
                <button className='btn' onClick={this.changeImg.bind(this, 'next')}>Next Game</button>
                
            </div>
        );
    }
}

export default Carousel;
