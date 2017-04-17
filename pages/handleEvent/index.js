let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

let image1 = require('./images/6-1.png');
let image2 = require('./images/6-2.png');
let image3 = require('./images/6-3.png');
let image4 = require('./images/6-4.png');
let image5 = require('./images/6-5.png');
let image6 = require('./images/6-6.png');
let image7 = require('./images/6-7.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>处理事件</h1>
    <p>React元素处理事件和Html元素是十分相似的。只有一些语法上的区别：</p>
    <ul>
    <li>React事件采用驼峰式命名，而不是小写。</li>
    <li>用JSX你可以传递一个函数作为事件处理程序而不是字符串。</li>
    </ul>
    <p>例如，HTML：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>在React中稍微有所不同：</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>另外一点不同是在React中不能通过return false阻止事件的默认行为。你必须显示的调用preventDefault()。例如，在纯HTML中，为了阻止链接默认打开一个新页面，你可以这样写：</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>在React中将被替换为：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>这里，e是一个合成的事件。React根据 W3C spec 定义这些合成的事件，所以你不需要担心跨浏览器的兼容问题。</p>
    <p>当使用React时，一般你不需要调用addEventListener()给已经创建了的DOM元素添加监听器，只需要在元素最初渲染的时候提供一个监听器就行了。</p>
    <p>当你使用ES6 class定义一个组件时，常用的事件处理程序是类的一个方法。例如，下面的Toggle组件渲染一个Button让用户在"ON"和"OFF"状态之间进行切换：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>你必须小心JSX回掉函数中的this的含义。在JavaScript中，默认情况下，class的方法是没有范围限制的。如果你忘记bind this.handleClick 并且把它赋值给onClick属性，那么当这个方法实际被调用的时候this将会是undefined。</p>
    <p>这不是React特有的行为。它是how functions work in JavaScript的一部分。一般情况下，如果你引用一个方法后面不带()，就像onClick={'{'}this.handleClick{'}'}，你应该bind这个方法。</p>
    <p>如果调用bind让你很烦恼，那么有两种方式可以绕过它。如果你正在使用还在试验的属性初始化器语法，你可以使用属性初始化器来正确的绑定回掉函数：</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>这个语法在创建React app时默认是有效的。</p>
    <p>如果你没有使用还在试验的属性初始化器语法，那么可以在回掉函数中使用箭头函数：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>这个语法的问题是每次渲染LoggingButton时都要创建一个不同的回掉函数。大多数情况下，这很好。然而，如果这个回调函数作为prop传递给低层级的组件，那些组件可能要做额外的重新渲染。我们推荐在构造函数中binding或者使用属性初始化器语法来避免这一系列的性能问题。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});