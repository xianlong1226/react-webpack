let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
require('./page.html');

let image1 = require('./images/16-1.png');
let image2 = require('./images/16-2.png');
let image3 = require('./images/16-3.png');
let image4 = require('./images/16-4.png');
let image5 = require('./images/16-5.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>Refs and the DOM</h1>
    <p>在典型的React数据流中，props是父组件与子组件交互的唯一途径。为了修改子组件，你需要使用一个新的props重新渲染它。但是，在一些特殊情况下，你需要在典型数据流外立刻修改它。将要被修改的子节点可能是一个React组件的实例或者一个DOM元素。</p>
    <h2>When to Use Refs</h2>
    <p>有一些良好的使用refs的案例：</p>
    <ul>
    <li>管理焦点、文本选择，或媒体回放。</li>
    <li>触发实时动画。</li>
    <li>整合第三方的DOM库。</li>
    </ul>
    <p>任何可以用声明的方式处理的都不要使用refs。</p>
    <p>例如，传递一个isOpen prop给组件，代替在一个Dialog组件暴露open() 和 close() 方法。</p>
    <h2>Adding a Ref to a DOM Element</h2>
    <p>React支持一个特殊的属性，使用它可以依附任何组件。ref属性使用一个回调函数，并且在组件mounted 或 unmounted后该回调函数会立即执行。</p>
    <p>当ref属性被用于html元素时，ref回调函数接收当前的html元素作为参数。例如，下面的代码使用ref回调函数存储对一个DOM节点的引用。</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>当组件mounts时React使用DOM元素调用ref回调函数，当组件unmounts时使用null调用它。</p>
    <p>使用ref回调函数访问DOM元素的常用模式是在class中设置一个属性。首选的方式是像上面例子中一样在ref回调函数中设置一个属性。</p>
    <h2>Adding a Ref to a Class Component</h2>
    <p>当ref属性被用在一个声明为class的特定组件，ref回调函数接收组件的mounted实例作为参数。例如，如果我们想要包裹CustomTextInput组件模仿它在mounting后被立即点击：</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>注意，只有CustomTextInput被声明为class时才会起作用:</p>
    <Code>
      <img src={image3} />
    </Code>
    <h2>Refs and Functional Components</h2>
    <p>不能再functional组件中使用ref，因为它没有实例：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>然而，你可以在functional组件内部使用ref，在你引用DOM元素或class组件时：</p>
    <Code>
      <img src={image5} />
    </Code>
    <h2>警告</h2>
    <p>If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn't matter in most cases.</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});