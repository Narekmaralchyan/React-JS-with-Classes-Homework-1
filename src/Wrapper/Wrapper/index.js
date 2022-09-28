import React from 'react';
import './style.css'
import Cards from '../Cards.json';
import Card from '../Card';
import Info from '../info/index.js';
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      Cards: Cards,
    };
  }
  cardUnmountCounter = (key) => {
    this.setState({
      Cards: this.state.Cards.map((card) => {
        if (key === card.value) {
          card.count = card.count + 1;
        }
        return card;
      }),
    });
  };
  showCounts = () => {
    this.state.Cards.map((card) => {
      alert(card.count);
      return <div>{card.count}</div>;
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.Cards.map((card) => {
            return (
                <Card
                cardUnmountCounter={this.cardUnmountCounter}
                key={card.value}
                value={card.value}
                count={card.count}
              />
            );
          })}
        </div>
        <div className="result">
          <Info list={this.state.Cards}/>
        </div>
      </div>
    );
  }
}
export default Wrapper;