import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';



const App = (props) => (
  <div>
     <div className="nav_bar">
        <ul className="list">
          <li><IndexLink to="/" activeClassName="active">衣服</IndexLink></li>
          <li><Link to="/read" activeStyle={{ color: 'green' }}>文具</Link></li>
          <li><Link to="/repos/react-router" activeStyle={styles.active}>家具</Link></li>
          <li><Link to="/user" activeClassName="active">收納</Link></li>
          <li><NavLink to="/contacts">聯絡我們</NavLink></li>
        </ul>
     </div>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
