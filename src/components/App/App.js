import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';



const App = (props) => (
  <div>
     <div className="nav_bar">
        <ul className="list">
          <li><IndexLink to="/" activeClassName="active">首頁</IndexLink></li>
          <li><Link to="/read" activeStyle={{ color: 'green' }}>書寫用具</Link></li>
          <li><Link to="/repos/react-router" activeStyle={styles.active}>紙製品/筆記本</Link></li>
          <li><Link to="/user" activeClassName="active">貼紙/紙膠帶</Link></li>
          <li><NavLink to="/contacts">美術用品</NavLink></li>
        </ul>
     </div>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
