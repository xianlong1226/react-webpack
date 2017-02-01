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
    <h1>安装</h1>
    <p>React是灵活的，可以用在各种各样的项目中。你可以用它创建新的apps，也可以将它逐渐引入到已经存在的项目中，而不需要重写这个项目。</p>
    <h2>创建一个单页应用</h2>
    <p>Create React App是构建一个新的React单页应用的最好方式。它帮你建立开发环境，方便你使用最新的Javascript特性，为你提供一个良好的开发经验，并且优化你的app。</p>
    <Code>
      <p>npm install -g create-react-app</p>
      <p>create-react-app hello-world</p>
      <p>cd hello-world</p>
      <p>npm start</p>
    </Code>
    <p>Create React App不用处理后端逻辑或者数据库；它仅仅创建一个前端的生成管道，所以，你可以搭配任何你想用的后端使用它。它在底层使用Webpack，Babel，ESLint，但是已经为你配置好了。</p>
    <h2>添加React到一个已经存在的应用</h2>
    <p>开始使用React你不用重写你的app。</p>
    <p>我们推荐把React添加到你的应用中的一小部分，比如一个小部件。</p>
    <h3>Install React</h3>
    <p>官网推荐使用Yarn或npm管理前端依赖，我这里只列举使用npm的方式。</p>
    <Code>
      <p>npm install --save react react-dom</p>
    </Code>
    <h3>启用ES6和JSX</h3>
    <p>我们推荐搭配Babel使用React来让你在Javascript代码中使用ES6和JSX。ES6是一组现代Javascript特性，JSX是可以和React配合很好的Javascript语言的扩展。</p>
    <p>首先确认你已经安装了babel-preset-react和babel-preset-es2015，并且在.babelrc文件中配置了他们。</p>
    <Code>
    <p></p>
      <p>"presets": ["es2015", "stage-2", "react"],</p>
      <p>"plugins": ["transform-runtime"],</p>
      <p>"comments": false</p>
    <p></p>
    </Code>
    <h3>Hello World with ES6 and JSX</h3>
    <p>我们推荐使用像webpack或Browserify这样的打包机，这样你就可以写模块化的代码并且把它们一起打包到小的模块里以便优化加载时间。</p>
    <p>该框架中，我已经将React和ReactDOM配置为全局变量了，你可以在模块中直接使用。</p>
    <Code>
      <p>ReactDOM.render(</p>
        <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <p>上面的代码将h1标签渲染到id为root的标签中，所以你的html文件中需要一个id为root的标签。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});