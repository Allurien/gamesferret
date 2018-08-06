import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {browseResults} from '../../actions/';
import Loader from '../loader';

class PlatformResultsList extends Component {

    componentDidMount(){
        this.getData();
    }
    getData() {
        const newItem = {
            platform: this.props.match.params.platform,
        };
        this.props.browseResults(newItem)
    }
    render(){
        if (!this.props.browseresult){
            return (
                <Loader />
            )
        }
    const data = this.props.browseresult.data;
    const text = 'Here are some results we think you will like!';
        return (
            <div className="resContainer">
                <h2 className="titleLabel">{`${this.props.match.params.platform} Games`}</h2>
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
        browseresult: state.browse.browseresult
    }
}
export default connect(mapStateToProps, {browseResults})(PlatformResultsList);
