//This file is a basic template for future result pages.
import React, {Component} from 'react';
import GameComponent from './gamecomponent';
import './results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {searchResults} from '../../actions/';
import Loader from '../loader';

class ResultsList extends Component {


    componentDidMount(){
        this.getResultData(this.props.search);
    }
    getResultData(){
        this.props.searchResults(this.props.search);
    }
    render(){
        if (!this.props.gamelist){
            return (
                <Loader />
            )
    }
    const data = this.props.gamelist.data;
        return (
            <div className="resContainer">
                <h2>{this.props.title}</h2>
                <GeneralText text={this.props.text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        gamelist: state.search.gamelist
    }
}
export default connect(mapStateToProps, {searchResults})(ResultsList);
