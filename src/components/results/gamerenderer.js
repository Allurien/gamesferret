import React from 'react';
import GameComponent from './gamecomponent';

export default props =>{
    const data = props.data;
    return(
        <div className="detailContainer">
            {data.map(game => <GameComponent key={game.game_id} details={game} location={location}/>)}
        </div>
    )
}
