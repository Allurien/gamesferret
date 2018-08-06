import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {searchResults, setLoadingFlag} from '../../actions/';
import Loader from '../loader';
import sadferret from '../../assets/images/sadferret.png';

class SearchResults extends Component {
    componentDidMount(){
        const search_term = new URLSearchParams(this.props.location.search).get('search_term');
        this.props.searchResults(search_term);
    }
    componentWillReceiveProps(newProps){
        if(newProps.location.search === this.props.location.search){
            return;
        } else {
        const search_term = new URLSearchParams(newProps.location.search).get('search_term');
        this.props.setLoadingFlag();
        this.props.searchResults(search_term);
        }
    }
    render(){
        if (this.props.loading){
            if(this.props.listError === false){
                return (
                    <div className="notFound">
                        <img src={sadferret} alt="Sad Ferret"/>
                        <h4>Your search had no results. Please try again!</h4>
                    </div>
                )
            }
            return (
                <Loader />
            )
        }
        const data = this.props.gamelist.data;
        const text = 'Here are your search results!';
        return (
            <div className="resContainer">
                <h2>Search Results</h2>
                <GeneralText text={text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        gamelist: state.search.gamelist,
        listError: state.search.errors,
        loading: state.search.loading
    }
}
export default connect(mapStateToProps, {searchResults, setLoadingFlag})(SearchResults);
