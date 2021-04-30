import React from 'react';

class ButtonFilter extends React.Component {
  render() {
    const { filterPk, filter } = this.props;
    return (
      <button onClick={filterPk} id={ filter }>{ filter }</button>      
    ) 
  }
}

export default ButtonFilter;
