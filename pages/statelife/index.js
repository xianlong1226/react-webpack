let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

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
let image11 = require('./images/11.png');
let image12 = require('./images/12.png');
let image13 = require('./images/13.png');
let image14 = require('./images/14.png');
let image15 = require('./images/15.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>状态和生命周期</h1>
    <p>思考前面章节时钟的例子。到目前为止，我们只学习了一种更新UI的方式。我们调用ReactDOM.render()改变渲染输出：</p>
    <Code>
      <p>function tick() {'{'}</p>
        <p>const element = (</p>
          <p>&lt;div&gt;</p>
            <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
            <p>&lt;h2&gt;It is {'{'}new Date().toLocaleTimeString(){'}'}.&lt;/h2&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
        <p>ReactDOM.render(</p>
          <p>element,</p>
          <p>document.getElementById('root')</p>
        <p>);</p>
      <p>{'}'}</p>

      <p>setInterval(tick, 1000);</p>
    </Code>
    <p>在这一章节，我们将学习如何让Clock组件可复用和封装。它将会设置自己的定时器并且每秒更新一次。</p>
    <p>我们首先从封装时钟的样子开始：</p>
    <Code>
      <p>function Clock(props) {'{'}</p>
        <p>return (</p>
          <p>&lt;div&gt;</p>
            <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
            <p>&lt;h2&gt;It is {'{'}new Date().toLocaleTimeString(){'}'}.&lt;/h2&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
      <p>}</p>

      <p>function tick() {'{'}</p>
        <p>ReactDOM.render(</p>
          <p>&lt;Clock date={'{'}new Date(){'}'} /&gt;,</p>
          <p>document.getElementById('root')</p>
        <p>);</p>
      <p>{'}'}</p>

      <p>setInterval(tick, 1000);</p>
    </Code>
    <p>然而，它错过了一个至关重要的要素：时钟设置一个定时器并且每秒更新UI的细节。</p>
    <p>理想情况下，我只想写一次下面的代码然后时钟自己更新：</p>
    <Code>
      <p>ReactDOM.render(</p>
        <p>&lt;Clock date={'{'}new Date(){'}'} /&gt;,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <p>为了实现它，我们添加"state"到时钟组件。State和Props相似，但是它是私有的并且完全由组件控制的。</p>
    <p>我们之前提到过以class定义的组件具有一些额外的特性。局部的state恰恰是：一个class的特性变量。</p>
    <p>你可以用5步将一个functional组件转变为class组件：</p>
    <ol>
    <li>用相同的名字定义一个ES6的class并且继承React.Component。</li>
    <li>添加一个render()方法。</li>
    <li>将方法的内容移到render()内。</li>
    <li>在render()方法内用this.props替换props。</li>
    </ol>
    <Code>
      <p>class Clock extends React.Component {'{'}</p>
        <p>render() {'{'}</p>
          <p>return (</p>
            <p>&lt;div&gt;</p>
              <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
              <p>&lt;h2&gt;It is {'{'}this.props.date.toLocaleTimeString(){'}'}.&lt;/h2&gt;</p>
            <p>&lt;/div&gt;</p>
          <p>);</p>
        <p>{'}'}</p>
      <p>{'}'}</p>
    </Code>
    <p>现在Clock就被定义成了一个class而不是function。这让我们能够使用额外的特性比如state和lifecycle钩子。</p>
    <h2>给class添加局部的State</h2>
    <p>我们通过三个步骤将date从props移动到state：</p>
    <p>1.在ender()方法中用this.state.date替换this.props.date:</p>
    <Code>
      <p>class Clock extends React.Component {'{'}</p>
        <p>render() {'{'}</p>
          <p>return (</p>
            <p>&lt;div&gt;</p>
              <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
              <p>&lt;h2&gt;It is {'{'}this.state.date.toLocaleTimeString(){'}'}.&lt;/h2&gt;</p>
            <p>&lt;/div&gt;</p>
          <p>);</p>
        <p>{'}'}</p>
      <p>{'}'}</p>
    </Code>
    <p>2.添加一个class constructor初始化this.state：</p>
    <Code>
      <p>class Clock extends React.Component {'{'}</p>
        <p>constructor(props){'{'}</p>
        <p>super(props);</p>
        <p>this.state = {'{'}date: new Date(){'}'};</p>
        <p>{'}'}</p>
        <p>render() {'{'}</p>
          <p>return (</p>
            <p>&lt;div&gt;</p>
              <p>&lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
              <p>&lt;h2&gt;It is {'{'}this.state.date.toLocaleTimeString(){'}'}.&lt;/h2&gt;</p>
            <p>&lt;/div&gt;</p>
          <p>);</p>
        <p>{'}'}</p>
      <p>{'}'}</p>
    </Code>
    <p>注意，我们是怎么将props传递给基类构造函数的。</p>
    <Code>
      <p>constructor(props){'{'}</p>
      <p>super(props);</p>
      <p>this.state = {'{'}date: new Date(){'}'};</p>
      <p>{'}'}</p>
    </Code>
    <p>class的组件应该永远调用基类的构造函数传递props参数。</p>
    <p>3.从&lt;Clock /&gt;元素删除date prop:</p>
    <Code>
      <p>ReactDOM.render(</p>
        <p>&lt;Clock /&gt;,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <p>我们稍后将会给组件添加上定时器。</p>
    <h2>给class添加生命周期方法</h2>
    <p>在拥有许多组件的应用中，在组件销毁时释放被组件占用的资源是十分重要的。</p>
    <p>每当Clock被渲染到DOM的第一时刻，我们想要设置一个定时器。这在React中叫做"mounting"。</p>
    <p>每当被Clock创建的DOM被销毁时，我们也想清除这个定时器。这在React中叫做"unmounting"。</p>
    <p>我们可以在组件中声明一些指定的方法，当组件mounts或者unmounts时执行一些代码。</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>这些方法被称作"lifecycle hooks"。</p>
    <p>componentDidMount()钩子在组件输出的内容被渲染到DOM后执行。这里是非常适合设置定时器的地方。</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>注意，我们将计时器ID保存到了this上。</p>
    <p>this.props被React自身设置，并且this.state具有特殊的意义，如果你需要存储一些东西但这些东西不是用来视觉输出的，你可以在class添加任何字段。</p>
    <p>如果有些东西你不在render()中使用，那么你不应该将它放到state上。</p>
    <p>我们将要在componentWillUnmount()生命周期钩子中销毁定时器：</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>最后，我们将设置每秒钟执行一次tick()方法。</p>
    <p>它将使用this.setState()方法计划更新组件的局部state：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>让我们快速回顾一下发生了什么和方法被调用的顺序：</p>
    <ul>
    <li>1)当&lt;Clock /&gt;被传递给ReactDOM.render()时，React调用Clock组件的构造函数。由于Clock需要显示当前时间，它用一个包含当前时间的对象初始化this.state。我们后面会更新this.state。</li>
    <li>2)然后React调用Clock组件的render()方法。React通过这个方法了解应该渲染什么到屏幕上。React之后更新匹配Clock的render()方法的输出的DOM。</li>
    <li>3)当Clock的输出插入到DOM时，React调用组件的componentDidMount()生命周期钩子。在它里面Clock组件请求浏览器设置一个定时器每秒调用一次tick()方法。</li>
    <li>4)每一秒浏览器调用tick()方法。在这个方法中，Clock组件通过调用setState()方法传递一个包含当前时间的对象来计划UI更新。由于调用setState()，React知道state已经改变了，然后再次调用render()方法去获知应该在屏幕上显示什么。这次，在render()方法中this.state.date是不同的，所以render()的输出包含已经更新的时间。React更新对应的DOM。</li>
    <li>5)如果Clock组件从DOM中移除了，React调用componentWillUnmount()生命周期钩子，定时器停止了。</li>
    </ul>
    <h2>正确使用State</h2>
    <p>关于setState()方法，有三件事你需要知道：</p>
    <h3>不要直接修改State</h3>
    <p>例如，下面的代码不会重新渲染组件：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>正确使用：</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>你唯一可以赋值this.state的地方是constructor()方法。</p>
    <h3>State的更新可能是异步的</h3>
    <p>考虑到性能，React可能分批的将很多setState()调用集中到一次更新中。</p>
    <p>因为this.props和this.state是异步更新的，你不应该依赖他们的值计算下一次的state。</p>
    <p>例如，下面的代码可能更新counter失败：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>为了修复它，使用第二种形式的setState()接受一个方法而不是对象。这个方法将会接收之前的state作为第一个参数，当前更新时应用的props作为第二个参数：</p>
    <Code>
      <img src={image8} />
    </Code>
    <p>上面我们使用了箭头函数，但是使用常规函数也是可以的：</p>
    <Code>
      <img src={image9} />
    </Code>
    <h3>state更新是被合并的</h3>
    <p>当你调用setState()时，React合并你提供给当前state的对象。</p>
    <p>例如，你的state可能包含许多独立的变量：</p>
    <Code>
      <img src={image10} />
    </Code>
    <p>你可以通过单独的setState()调用更新他们</p>
    <Code>
      <img src={image11} />
    </Code>
    <p>这个合并是浅层次的，this.setState({'{'}comments{'}'})会保持this.state.posts不变，只替换this.state.comments。</p>
    <h3>数据流</h3>
    <p>父组件和子组件都不知道某一个组件是状态的还是非状态的，并且它们不关心它是定义成了function还是class。</p>
    <p>这就是为什么state是局部的或封装的。它只能被拥有它和设置它的组件访问，而不能被其他组件访问。</p>
    <p>组件可以选择传递它的state到子组件作为props：</p>
    <Code>
      <img src={image12} />
    </Code>
    <p>这对自定义组件同样起作用：</p>
    <Code>
      <img src={image13} />
    </Code>
    <p>FormattedDate组件将从它的props中接受date，而不知道它是否来自于Clock组件的state或者Clock组件的props或者手动输入的：</p>
    <Code>
      <img src={image14} />
    </Code>
    <p>这通常被称作"top-down"或者"unidirectional"数据流。任何的state总是由一些特定的组件拥有，并且任何由state派生的date或UI只能影响他们的下一级组件。</p>
    <p>如果你设想一个组件树是一个props的瀑布流，那么每一个组件的state就像是在任意点汇入它的额外的水源，并且也向下流动。</p>
    <p>为了证明所有的组件确定都是独立的，我们可以创建一个App组件包含三个Clock组件：</p>
    <Code>
      <img src={image15} />
    </Code>
    <p>每一个组件设置自己的定时器，并且独立更新。</p>
    <p>在React app中，无论一个组件是状态的还是非状态的，都被认为是一个随着时间改变的组件的实现细节。你可以在状态组件中使用非状态组件，反之亦然。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});