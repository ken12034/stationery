import React from 'react';
import SliderShow from '../SliderShow';


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
       <div className="btn-center">
           <span>給你溫暖的感覺</span>
       </div>
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
            <div className="home_content">
            <ImageBox />

            </div>
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
      <div className="box_group">
        <div className="box_content">
          <img src={  require('./img/v7.jpg') } />
          <div className="box_content_hover">
              <div className="box_content_btn"><a href="#/read">衣服</a></div>
          </div>
        </div>
        <div className="box_content">
          <img src={  require('./img/v5.jpg') } />
          <div className="box_content_hover">
              <div className="box_content_btn"><a href="#/read">文具</a></div>
          </div>
        </div>
        <div className="box_content">
          <img src={  require('./img/v6.jpg') } />
          <div className="box_content_hover">
              <div className="box_content_btn"><a href="#/repos/react-router">家具</a></div>
          </div>
        </div>
        <div className="box_content">
          <img src={  require('./img/v4.jpg') } />
          <div className="box_content_hover">
              <div className="box_content_btn"><a href="#/contacts">收納</a></div>
          </div>
        </div>
      </div>
    );
  }
}

const Home = () => (
  <div>
     <SliderShow />
     <HotContent />

  </div>
);

export default Home;
