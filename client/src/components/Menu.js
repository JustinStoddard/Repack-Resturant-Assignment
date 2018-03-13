import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends React.Component {
  state = { menu_items: [] }

  componentDidMount() {
    axios.get('/api/menu_items')
      .then( res => this.setState({ menu_items: res.data }) )
  }

  render() {
    const { menu_items } = this.state;
     return(
      <ul>
        { menu_items.map( m =>
            <li key={m.id}>
              <Link to={`/menu_items/${m.id}`}>{m.name}</Link>
            </li>
          )
        }
      </ul>
    ) 
  }
}

export default Menu;