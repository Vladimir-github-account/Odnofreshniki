import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import listItemStyles       from './ListItem.module.sass';

const ListItem = props => {
  return <li className={listItemStyles.listItem}>{props.children}</li>;
};

ListItem.propTypes = {
  children: PropTypes.node,
};

class TestList extends Component {
  constructor(props) {
    super( props );
    this.state = {
      items: [],
    };

    this.listRef = React.createRef();
  }

  loadItems = () => {
    const { items } = this.state;
    const newItems = [];
    for (let i = items.length + 30; i > items.length; i--) {
      newItems.push( i );
    }
    this.setState( {
                     items: [ ...newItems, ...items ]
                   } );
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if ( prevState.items.length < this.state.length ) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ( snapshot != null ) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  componentDidMount() {
    this.listRef.current.scrollTo( 0, this.listRef.scrollHeight );
  }

  render() {
    const { items } = this.state;
    return (
        <>
          <ul ref={this.listRef} className={listItemStyles.list}>
            {
              items.map( item => ( <ListItem key={item}>{item}</ListItem> ) )
            }
          </ul>
          <button className={listItemStyles.button}
                  onClick={this.loadItems}>Load
          </button>
        </>
    );
  }
}

TestList.propTypes = {};

export default TestList;