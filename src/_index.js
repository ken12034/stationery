import React from 'react';
import ReactDOM from 'react-dom';
require('../app.css');
require('../css/test.sass');

//var imgsrc = require('../img/02.jpg');

class TodoList extends React.Component {
  render() {
    return (
      <div className="nav_bar">
        <MyComponent />
        <ul className="list">
            <li>鋼筆</li>
            <li>記事本</li>
            <li>工具書</li>
        </ul>
      </div>
    );
  }
}
const MyComponent = () => (
    <div className="logo_title">
        <h3>buy buy</h3>
    </div>
);

class HelloMessage extends React.Component {
  // 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
    constructor(props) {
        // 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
        super(props);
        this.state = {}
    }
    // render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

// PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck
HelloMessage.defaultProps = {
 name: 'Zuck',
}


class SliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl:[
        {
          url:  require('../img/01.jpg')
        },
        {
          url:  require('../img/02.jpg')
        },
        {
          url:  require('../img/banner2.jpg')
        },
        {
          url:  require('../img/banner.png')
        }
      ],
      num : 0
    };

    //this.right = this.right.bind(this);
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
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <TodoList />
        <HelloMessage name="Mark" />
        <SliderShow />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
