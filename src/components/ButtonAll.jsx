import React from 'react';

class ButtonAll extends React.Component {
  render() {
    const { switchPk } = this.props;
    return (
      <button onClick={switchPk} id="All" className="next"><i className="fas fa-long-arrow-alt-right"></i></button>      
    ) 
  }
}

export default ButtonAll;
