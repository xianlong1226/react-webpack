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
let image9 = require('./images/9.png');
let image10 = require('./images/10.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>表单</h1>
    <p>在React中，html表单元素和其他html元素有点不太一样。因为表单元素天生保持一些内部状态。例如，这个表单元素接受唯一的name属性：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>这个form具有默认的html form行为：当用户提交时浏览一个新页面。如果你想在React有这个行为，也是可以的。但是大多数情况下，用一个JavaScript函数处理表单的提交并且访问用户输入的数据是很方便的。实现它的标准做法使用一个叫做"controlled components"的技术。</p>
    <h2>控制组件</h2>
    <p>在html中，表单元素像&lt;input&gt;, &lt;textarea&gt;, 和 &lt;select&gt;通常保持自己的状态，并且根据用户输入改变状态。在React中，可变状态通常保存在组件的state中并且只能通过setState()更新它。</p>
    <p>我们可以合并二者让React的state作为“唯一数据源”。然后React渲染一个表单并且控制它根据后续用户输入发生什么。一个input表单元素的value属性被React控制的方式成为"controlled component"。</p>
    <p>例如，我们想让之前的例子当表单被提交时log它的name，我们可以把这个表单写成可控组件：</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>由于value属性被设置在我们的表单元素上，显示的value总是this.state.value，使React的state作为唯一数据源。由于每次敲击键盘handleChange方法都会执行更新React的state，显示的value将会随着用户键入而改变。</p>
    <p>控制组件每次状态改变都会和处理函数发生联系。这使它直接修改或验证用户输入。例如，如果我们想让输入的name全部大写，我们可以这样写handleChange方法：</p>
    <Code>
      <img src={image3} />
    </Code>
    <h2>textarea标签</h2>
    <p>在html中，textarea使用children定义文本：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>在React中，textarea使用value属性代替。用这种方式一个使用textarea的表单在写法上和单行输入的input表单很相似：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>注意，this.state.value在构造函数中被初始化了，所以textarea初始化时有文字在里面了。</p>
    <h2>select标签</h2>
    <p>在html中，select创建下拉列表：</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>注意，Coconut选项初始化时被选中了，因为有一个selected属性。React中，在根select标签上使用value属性代替selected属性。这在控制组件中是非常方便的，因为你只需要在一个地方更新它：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>总的来说，这使得input，textarea，select工作起来非常相似，都接受一个value，你可以使用它实施控制组件。</p>
    <h2>处理多个输入</h2>
    <p>当你需要处理多个需要控制的input元素时，你可以给每个元素添加一个name属性，然后让处理函数根据event.target.name的值去选择：</p>
    <Code>
      <img src={image8} />
    </Code>
    <p>注意，我们使用ES6的计算属性名语法更新state中对应元素name的key：</p>
    <Code>
      <img src={image9} />
    </Code>
    <p>这根ES5的Code是等效的：</p>
    <Code>
      <img src={image10} />
    </Code>
    <p>另外，由于setState()自动合并state，我们只需要用改变的部分调用它。</p>
    <h2>替代控制组件</h2>
    <p>有的时候使用控制组件是冗长乏味的，因为你需要为每一个改变date的方式写一个事件处理函数，并且输送所有输入状态到控制组件。当你用React转换已经存在的代码或用non-React的库整合到React的应用时这将是非常烦恼的。这种情况下，你可能想要看看非控制组件：实现input表单的另一种技术。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});