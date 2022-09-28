import React from 'react';
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  handleFlag = () => {
    if(this.state.flag){
      this.props.changeCount(this.props.value);
    }
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    return this.state.flag ? (
      <div className="card">
        {this.props.value}
        <button onClick={this.handleFlag} className="closeBtn">
          X
        </button>
      </div>
    ) : (
      <div className="card_show">
        <button onClick={this.handleFlag} className='show_btn'>SHOW</button>
      </div>
    );
  }
}
export default Card;