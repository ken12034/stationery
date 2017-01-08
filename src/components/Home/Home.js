import React from 'react';

class VedioShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };

  }
  render() {
    return (
    <div className="top_content">
      <video width="100%"   autoPlay="true"  loop="true">
      <source src="http://video.wixstatic.com/video/11062b_40811fcc9cac4a5bbfb0d93aaa94d70d/1080p/mp4/file.mp4"
      type="video/mp4" />
       </video>
    </div>
    );
  }
}

class SliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl:[
        {
          url:  require('./img/4cb259_b1adeba8d4eb4690a635aff82ca8190e.jpg')
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


class HotContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };

  }
  render() {
    return (
      <div>
        <div className="main_panel">
            <div className="home_content"></div>
        </div>
      </div>
    );
  }
}

class ImageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };

  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

const Home = () => (
  <div>
     <VedioShow />
     <HotContent />
  </div>
);

export default Home;
