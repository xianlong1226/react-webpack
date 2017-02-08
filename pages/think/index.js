let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
require('./page.html');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>React</h1>
    <p>相信到此为止，通过该教程你基本上可以了解怎么通过React来开发自己的应用了。我也就是抛砖引玉了，更高级的部分，大家应该有能力通过官网去学习了。我的英语水平有限，很多地方翻译的不是太准确，欢迎大家批评指正。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});