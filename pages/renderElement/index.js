let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>渲染元素</h1>
    <p>元素是React app最小的构建块。</p>
    <p>一个元素描述你在屏幕上看到的东西：</p>
    <Code>
      <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</p>
    </Code>
    <p>不像浏览器的DOM元素，React元素是纯粹的对象，对于创建是低成本的。React DOM小心翼翼的更新匹配React elements的DOM。</p>
    <h2>渲染元素到DOM</h2>
    <p>我们假设有一个id属性为root的div元素在你的html文件中：</p>
    <Code>
      <p>&lt;div id="root"&gt;&lt;/div&gt;</p>
    </Code>
    <p>我们称它为根DOM节点，因为任何在它里面的元素都会被React DOM管理。</p>
    <p>用React构造的应用通常只有唯一的根DOM节点。如果你正在整合React到一个已经存在的app，你可以有很多孤立的根DOM节点。</p>
    <p>为了渲染一个React元素到一个根DOM节点，需要将以上两者都传入ReactDOM.render()。</p>
    <Code>
      <p>ReactDOM.render(</p>
        <p>element,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <h2>更新已经渲染的元素</h2>
    <p>React元素是不可变的。一旦创建了一个元素，你不能改变它的孩子或属性。一个元素就像是电影的一个画面：它表现UI在某一时刻的一个固定的点。</p>
    <p>以我们现在所掌握的知识，更新UI的唯一方式是新建一个元素，然后将它传递给ReactDOM.render()。</p>
    <p>思考下面的时钟的例子：</p>
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
    <p>这将每秒钟调用一次ReactDOM.render()方法。实际上，大多数React apps只会调用一次ReactDOM.render()。在下一章节，我们将学习如何将这样的代码密封到状态性的组件中。</p>
    <h2>React只会更新需要更新的部分</h2>
    <p>React DOM将元素和它的子元素跟之前的比较，只将需要更新的部分更新到期望的状态。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});