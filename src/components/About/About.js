import React from 'react';


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
                <img className="grid_group_item_img" src = { require('./img/07.jpg') }  />
                <div className="grid_group_item_name">
                  <p>鋼筆</p><p>300</p>
                </div>
            </div>
            <div className="grid_group_item">
                <img className="grid_group_item_img" src = { require('./img/09.jpg') }  />
                <div className="grid_group_item_name">
                  <p>鋼筆</p><p>300</p>
                </div>
            </div>
            <div className="grid_group_item">
                <img className="grid_group_item_img" src = { require('./img/v5.jpg') }  />
                <div className="grid_group_item_name">
                  <p>鋼筆</p><p>300</p>
                </div>
            </div>
         </div>
      </div>
    );
  }
}


const About = () => (
  <div className="center_content">
     <ListContent items={ Listitem } />
     <Griditem />
  </div>
);

export default About;
