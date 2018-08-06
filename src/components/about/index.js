import React from 'react';
import './about.scss';
import DevItem from './dev';
import Steffany from './images/steffanyli.png';
import Delray from './images/delray.jpg';
import Stephanie from './images/tofuttinew.png';
import Sharry from './images/sharry.jpg';
import Martin from './images/martin.jpg';
import Dan from './images/dans.jpg';


export default props => {
    return (
        <div className='aboutPageContainer'>
            <h4 className='aboutLabel'>Meet our dev team, who while not ferrets, are equally cool.</h4>
            <DevItem src={Steffany} name='Steffany Gross' title='Front End Developer' alt='Boss Lady' site='http://www.steffanygross.com' github='https://github.com/Allurien' linkedin='https://www.linkedin.com/in/steffany-gross-452205a/' email='mailto:steffany.gross@gmail.com' />
            <DevItem src={Delray} name='Delray Faskey' title='Front End Developer' alt='much programmer, wow.' site='http://www.delrayfaskey.com' github='https://github.com/Raenbow' linkedin='https://www.linkedin.com/in/delray-faskey/' email='mailto:d.a.faskey@gmail.com' />
            <DevItem src={Stephanie} name='Stephanie Lacina' title='Front End Developer' alt='Artist Extraordinaire' site='http://www.stephanielacina.com' github='https://github.com/StephanieLDR' linkedin='https://www.linkedin.com/in/stephanie-lacina-del-rossi-814507163/' email='mailto:stephanie.c.lacina@gmail.com' />
            <DevItem src={Sharry} name='Sharry Lu' title='Back End Developer' alt='Nice Programmer Lady' site='http://www.sharrylu.com/' github='https://github.com/sasa-us' linkedin='https://www.linkedin.com/in/sharry-lu-1b5385128/' email='mailto:sharryluh@gmail.com' />
            <DevItem src={Martin} name='Martin Rizo' title="Back End Developer" alt="(╯^_^)╯︵ ┻━┻" site='http://www.martinrizo.com' github='https://github.com/Martin92571' linkedin='https://www.linkedin.com/in/martin-rizo-3622b296/' email='mailto:zegrizo@gmail.com' />
            <DevItem src={Dan} name='Daniel Stone' title='Back End Developer' alt='┬─┬ ノ( ^_^ノ)' site='http://danielkstone.com/' github='https://github.com/codedaniels' linkedin='https://www.linkedin.com/in/danielks/' email='mailto:danielksstone@gmail.com' />
        </div>
    )
}