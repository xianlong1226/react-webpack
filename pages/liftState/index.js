let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

let image1 = require('./images/10-1.png');
let image2 = require('./images/10-2.png');
let image3 = require('./images/10-3.png');
let image4 = require('./images/10-4.png');
let image5 = require('./images/10-5.png');
let image6 = require('./images/10-6.png');
let image7 = require('./images/10-7.png');
let image8 = require('./images/10-8.png');
let image9 = require('./images/10-9.gif');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>提升State</h1>
    <p>经常地，一些组件需要反映相同的改变的数据。我们推荐提升他们共享的state到最近接的公共的祖先。让我们看看这是如何工作的。</p>
    <p>在这一部分，我们将制作一个温度计，根据给定的温度判断水是否沸腾了。</p>
    <p>我们用一个叫做BoilingVerdict的组件开始。它接受摄氏温度作为prop并且打印它是否足够让水沸腾：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>接下来，我们创建一个叫做Calculator的组件，它创建一个&lt;input&gt;让你输入一个温度并且保持它的value在this.state.value中。</p>
    <p>另外，它为当前的输入值渲染BoilingVerdict组件。</p>
    <Code>
      <img src={image2} />
    </Code>
    <h2>添加第二个input</h2>
    <p>我们新的需求是，出了摄氏温度，我们也提供一个华氏温度的输入，并且它们保持同步。</p>
    <p>我们通过从Calculator组件中提取TemperatureInput组件开始。我们给它添加一个新的scale prop，值可以是"c" 或者 "f"。</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>我们现在改变Calculator渲染两个独立的温度输入：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>我们现在有两个文本输入，但是你在它们中的一个输入，另一个不会跟着改变。这跟我们的需求矛盾：我们想让它们保持同步。</p>
    <p>我们也不能在Calculator中显示BoilingVerdict。Calculator不知道当前的温度，因为它隐藏在TemperatureInput中。</p>
    <h2>提升State</h2>
    <p>首先，我们写两个方法来让摄氏温度和华氏温度互相转换：</p>
    <Code>
      <img src={image5} />
    </Code>
    <p>这两个函数转换数字。我们将在写一个函数，用一个字符串的value和一个转换函数作为参数并且返回一个字符串。我们使用它根据一个的输入计算另外一个输入。如果传入无效value它会返回空字符串，并且它会使输出保留三位小数：</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>接下来，我们将从TemperatureInput中移除state。代替的，接收value和onChange事件处理函数：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>如果几个组件需要访问相同的state，那标志着这个state应该被提升到它们最接近的共同的祖先。在我们的例子中这个祖先是Calculator。我们保存当前的value和scale在它的state中。</p>
    <p>我们可能已经保存了两个输入的value，但这是不必要的。保存最接近的输入的value和代表它的scale就足够了。我们可以根据当前的value和scale推断出另一个输入的value。</p>
    <Code>
      <img src={image8} />
    </Code>
    <p>现在，不论你编辑哪个input，Calculator中的this.state.value和this.state.scale都会更新。</p>
    <h2>经验教训</h2>
    <p>在React应用中，任何数据的变化都应该只有唯一的数据源。通常，state应首先被添加到组件，组件需要它进行渲染。然后，如果别的组件也需要它，你可以提升它到他们最近的公共祖先。代替尝试在不同的组件中保持state同步，你应该依靠top-down数据流。</p>
    <p>提升变量涉及到比双向绑定方法要写更多的“模板”代码。但好处是，它很方便查找并隔离bugs。因为任何一个state存在于某一个组件并且组件独自修改它，错误的面积大大减少了。另外，你可以执行自定义的逻辑拒绝或改变用户输入。</p>
    <p>如果一些东西可以从props或state中派生，那它就不应该在state中。</p>
    <p>当你发现在UI中发生了一些错误，你可以使用 React Developer Tools 审查props并且沿着tree向上移动直到找到更新state的对应的组件。</p>
    <p>这允许您跟踪bug的来源:</p>
    <Code>
      <img src={image9} />
    </Code>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});