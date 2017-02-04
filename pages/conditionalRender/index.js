let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
require('./page.html');

let image1 = require('./images/1.png');
let image2 = require('./images/2.png');
let image3 = require('./images/3.png');
let image4 = require('./images/4.png');
let image5 = require('./images/5.png');
let image6 = require('./images/6.png');
let image7 = require('./images/7.png');
let image8 = require('./images/8.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>条件渲染</h1>
    <p>在React中，你可以创建不同的组件封装你需要的行为。然后，你可以根据应用的state只渲染其中的一些。</p>
    <p>在React中，条件渲染和JavaScript中的条件作用是一样的。使用JavaScript的运算符，像if或者条件运算符创建元素反应当前的state并且让React更新对应的UI。</p>
    <p>考虑下面的两个组件：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>我们再创建一个Greeting组件根据用户是否登陆了显示这两个组件中的一个：</p>
    <Code>
      <img src={image2} />
    </Code>
    <h2>元素变量</h2>
    <p>你可以使用变量存储元素。这可以帮助你条件渲染组件的一部分，而其他的输出不会改变。</p>
    <p>考虑这两个新的组件，代表退出和登陆按钮：</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>在下面的例子中，我们创建一个叫做LoginControl的状态性组件。它将根据当前的state渲染&lt;LoginButton /&gt;或&lt;LogoutButton /&gt;中的一个。它也会渲染之前例子中的&lt;Greeting /&gt;</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>虽然声明变量和使用if声明是一个条件渲染组件的很好的方式，但有时你希望使用更短的语法。在JSX中有一些内联条件的方式，将在下面介绍。</p>
    <h2>内联if和逻辑与操作符</h2>
    <p>你可以通过包裹花括号将任何表达式嵌套到JSX中。这包括JavaScript的逻辑与操作符：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>它是起作用的，因为在JavaScript中true &amp;&amp; expression永远取后面表达式的值，false &amp;&amp; expression永远取值false。因此，如果条件是true，&amp;&amp;后面的元素将会出现在输出中；如果条件是false，React将会忽略并跳过它。</p>
    <h2>Inline If-Else with Conditional Operator</h2>
    <p>另一个行内条件渲染元素的方式是使用JavaScript条件操作符condition ? true : false。</p>
    <p>下面的例子中我们使用它条件渲染一小块文本：</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>它也可以用于大的表达式尽管它是不太明显的看出发生了什么：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>就像在JavaScript中一样，它取决于你基于你和你的团队考虑可读性而选择合适的风格。同时记住，不论什么时候条件变的太复杂时，最好提取一个组件。</p>
    <h2>阻止组件渲染</h2>
    <p>在极少数情况下你可能希望一个组件隐藏它自己，即使这个组件是另一个组件渲染的。用return false代替它的render()方法的输出就行了。</p>
    <p>在下面的例子中，&lt;WarningBanner /&gt;根据props中warn的值渲染。如果值是false，那么组件就不渲染了：</p>
    <Code>
      <img src={image8} />
    </Code>
    <p>从组件的render方法返回null不会影响组件生命周期方法的执行。例如，componentWillUpdate和componentDidUpdate依然会被调用。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});