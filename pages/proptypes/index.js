let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
require('./page.html');

let image1 = require('./images/15-1.png');
let image2 = require('./images/15-2.png');
let image3 = require('./images/15-3.png');
let image4 = require('./images/15-4.png');
let image5 = require('./images/15-5.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>Typechecking With PropTypes</h1>
    <p>随着应用程序的增长,你可以捕捉很多类型检查的bug。对于一些应用，你可以使用JavaScript扩展像 Flow 或 TypeScript检查你的整个应用。但即使你不使用这些，React也具有一些内置的类型检查能力。</p>
    <p>为了在props上对组件进行类型检查，你可以设置一个特殊的propTypes属性：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>React.PropTypes输出一系列的验证，用于确保你接收到的数据是合法的。在上面的例子中我们使用React.PropTypes.string。当一个非法的值传递给prop时，一条警告信息将会出现在console中。考虑到性能问题，propTypes只在测试环境下检验。</p>
    <h2>React.PropTypes</h2>
    <p>这里是不同验证器的示例文档：</p>
    <Code>
      <img src={image2} />
      <img src={image3} />
    </Code>
    <h2>Requiring Single Child</h2>
    <p>使用React.PropTypes.element，你可以指定只能传一个子节点给组件。</p>
    <Code>
      <img src={image4} />
    </Code>
    <h2>Default Prop Values</h2>
    <p>你可以通过设置特殊的defaultProps属性给props设置默认值：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>defaultProps将会确保this.props.name具有一个值，如果它没有被父组件指定值。defaultProps被解析后propTypes将执行类型检查。所以类型检查也会应用到defaultProps。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});