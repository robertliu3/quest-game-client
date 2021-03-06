import React, {Component} from 'react';
import PlayerPortrait from './PlayerPortrait';
import PlayerField from './PlayerField';
import PlayerHand from './PlayerHand';

class Player extends Component {

  constructor(props) {
    super(props);


  }

  
  render() {
    let props = this.props;
    let cards = this.props.cards;
    let hand = this.props.player.hand || [];
    let fieldCards = this.props.player.field.concat(this.props.player.temp);
    return(
      <div>
        <PlayerPortrait playerNumber={props.playerNumber} player={props.player} />
        <PlayerField playerNumber={props.playerNumber} cards={fieldCards} />
        <PlayerHand faceDown={props.faceDown} onCardClick={props.handleCardClick} playerNumber={props.playerNumber} cards={hand} />
      </div>
    )
  }
}

export default Player;