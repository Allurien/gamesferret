import React, {Component} from 'react';
import Favorites from './favorites';
import './results.scss';
import {connect} from 'react-redux';
import {searchResults, returnFavorites} from '../../actions/';
import GeneralText from '../multiuse/generaltext';
import Loader from '../loader';

class FavoritesList extends Component {


    componentDidMount(){
        this.props.returnFavorites(this.props.user.id);
    }
    
    render(){
        if (!this.props.favorites){
            return (
                <Loader />
            )
    }

    const data = this.props.favorites;
    const text = `Here are your favorite games, ${this.props.user.username}`;
         return (
            <div className="resContainer">
                <h2>My Favorites</h2>
                <GeneralText text={text} />
                <div className="detailContainer">
                    {data.map(game => <Favorites key={game.game_id} details={game}/>)}
                </div>
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
export default connect(mapStateToProps, {searchResults, returnFavorites})(FavoritesList);
