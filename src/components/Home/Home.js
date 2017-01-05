import React from 'react';


class SliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl:[
        {
          url:  require('./img/06.jpg')
        },
        {
          url:  require('./img/07.jpg')
        },
        {
          url:  require('./img/08.jpg')
        },

      ],
      num : 0
    };

    this.right = this.right.bind(this);
    this.left = this.left.bind(this);
  }

  right() {
    this.setState(  { num:
      this.state.num<(this.state.imgUrl.length-1) ?
      this.state.num + 1 : this.state.num = 0
    });
  }

  left() {
    this.setState(  { num:
      this.state.num >0 ?
      this.state.num - 1 : this.state.num = this.state.imgUrl.length-1
    });
  }

  componentDidMount() {

    this.timerID = setInterval(
      () => this.tick(),
      5000
    );

  }
  tick() {
    this.setState(  { num:
      this.state.num<(this.state.imgUrl.length-1) ?
      this.state.num + 1 : this.state.num=0
    });
  }

  render() {
    return (  //jsx的class 要用className
      <div className="slidershow_panel">
          <div className="slidershow_img">
             <img src={ this.state.imgUrl[  this.state.num ].url } />
          </div>
          <div className="leftButton" onClick={this.left}></div>
          <div className="rightButton" onClick={this.right.bind(this)}></div>
      </div>
    );
  }
}

const Home = () => (
  <div>
     <SliderShow />
  </div>
);

export default Home;
