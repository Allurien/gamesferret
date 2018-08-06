import React, {Component} from 'react';
import ReactStars from 'react-stars'
import '../modals/modal.scss'
import '../gamedetails/gamedetails.scss'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteFavorite, returnFavorites} from '../../actions/';


class Favorites extends Component {
    constructor(){
        super();
    }
    async removeFavorite(){
        await this.props.deleteFavorite(this.props.user.id, this.props.details.game_id);
        
        this.props.returnFavorites(this.props.user.id);
    }
    render(){
        return (
            <div className="resItem">
                <Link to={`/game/${this.props.details.game_id}/gamedetails`}>
                    <div className='gameBlock'>
                        <img className='resItemImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                        <div className='stars'>
                            <ReactStars count={5} color2={'#ffd700'} value={parseFloat(this.props.details.all_rating)} edit={false}/>
                        </div>
                        <h4 className='blueLink'>{this.props.details.app_name}</h4>
                    </div>
                </Link>
                <button className='blueLink blueButton' onClick={this.removeFavorite.bind(this)}>Remove Favorite</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        favorites: state.favorite.favorites,
        user: state.user.user
    }
}
export default connect(mapStateToProps, {deleteFavorite, returnFavorites})(Favorites);