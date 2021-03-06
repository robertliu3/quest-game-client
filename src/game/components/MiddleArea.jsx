import React, {Component} from 'react';


class MiddleArea extends Component {

  constructor(props) {
    super(props);


  }
  render() {
    let props = this.props;
    let cards = this.props.cards;
    return(
      <div className="MiddleArea">
        {props.revealedCard ? 
          <img className="midCard" 
          src={"/image/Cards/Story/" + props.revealedCard.name + ".jpg"}/>
          : null}

        {cards ? cards.map(card => (
          <img key={card.id} 
            className="midCard" 
            src={"/image/Cards/Adventure/" + card.name + ".jpg"}/>
        )) : null}
      </div>
    )
  }
}

export default MiddleArea;