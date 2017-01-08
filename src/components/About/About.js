import React from 'react';
import styles from 'F:/github/stationery/res/css/read.sass'

const Listitem = [
  {
    name: '鉛筆'
  },
  {
    name: '原子筆'
  },
  {
    name: '鋼筆'
  },
  {
    name: '鋼珠筆'
  },
  {
    name: '修正帶'
  },
  {
    name: '橡皮擦'
  }
]
class ListContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (  //jsx的class 要用className
      <div className="read_left">
        <ul>
          {
            this.props.items.map( (item, i) => (
            <li key={i} className="read_left_item"> { item.name } </li>
            ))
          }
        </ul>
      </div>
    );
  }


}


class Griditem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (  //jsx的class 要用className
      <div className="read_right">
         <div className="grid_group">
            <div className="grid_group_item">
                //<img src = { require('./img/09.jpg') }  />

            </div>
         </div>
      </div>
    );
  }
}


const About = () => (
  <div>
     <ListContent items={ Listitem } />
     <Griditem />
  </div>
);

export default About;
