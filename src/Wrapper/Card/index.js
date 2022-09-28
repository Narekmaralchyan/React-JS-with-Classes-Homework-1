import React from 'react';
import HiddenCard from '../hiddenCard';
import OpenedCard from '../openedCard';
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  handleFlag = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    return this.state.flag ? <OpenedCard cardUnmountCounter ={this.props.cardUnmountCounter} value={this.props.value} handleFlag={this.handleFlag}/>
    : <HiddenCard handleFlag={this.handleFlag}/> ;
  }
}
export default Card;