import React, {Component} from 'react';
import Favorites from './favorites';
import './results.scss';
import {connect} from 'react-redux';
import {searchResults, returnFavorites, setLoadingFlag, clearFavoriteDetails} from '../../actions/';
import GeneralText from '../multiuse/generaltext';
import Loader from '../loader';

class FavoritesList extends Component {

    componentWillMount(){
        this.props.returnFavorites(this.props.user.id);
    }
    componentDidUpdate(){
        console.log('favorites', this.props);
    }
    componentWillUnmount(){
        this.props.clearFavoriteDetails();
    }

    render(){

    const data = this.props.favorites;
    const text = `Here are your favorite games, ${this.props.user.username}`;
        return (
            <div className="resContainer">
                <h2>My Favorites</h2>
                {this.props.favorites ? <GeneralText text={text} /> : null}
                {this.props.favorites ? <div className="detailContainer">
                    {data.map(game => <Favorites key={game.game_id} details={game}/>)}
                </div> : <h3>It looks like you don't have any favorites! You should save some.</h3>}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        favorites: state.favorite.favorites,
        user: state.user.user,
        loading: state.game.loading
    }
}
export default connect(mapStateToProps, {searchResults, returnFavorites, setLoadingFlag, clearFavoriteDetails})(FavoritesList);
