let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

let image1 = require('./images/1.png');
let image2 = require('./images/2.png');
let image3 = require('./images/3.png');
let image4 = require('./images/4.png');
let image5 = require('./images/5.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>组合和继承</h1>
    <p>React有一个强大的组合模型，我们推荐使用组合代替继承来在组件之间复用代码。</p>
    <p>在这一章节中，我们将思考一些新的React开发者经常遇到的关于继承的问题，并且演示我们怎么通过组合解决他们。</p>
    <h2>包含</h2>
    <p>一些组件不可能提前知道他们的孩子。尤其是常见的组件像Sidebar 或 Dialog通常表现的像个盒子。</p>
    <p>我们推荐这样的组件使用专门的children prop传递子元素到他们的输出：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>这允许别的组件通过嵌套JSX传递任意children给它。</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>任何包含在&lt;FancyBorder&gt;里的东西JSX都会作为children props传递到FancyBorder组件中。因为FancyBorder在&lt;div&gt;中渲染{'{'}props.children{'}'}，传递进去的元素最终出现的输出中。</p>
    <p>虽然这是不太常见的，但是有时你在组件中需要多个"holes"。这种情况下，你可能想到你的常用方法而不是children：</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>React元素像&lt;Contacts /&gt;和&lt;Chat /&gt;就是对象，所以你可以像其他数据一样作为props传递他们。</p>
    <h2>特殊化</h2>
    <p>有的时候我们考虑组件就是其他组件的“特殊情况”。例如，我们可以说WelcomeDialog是Dialog的特殊情况。</p>
    <p>在React中这样应用于组合。一个更特殊的组件渲染一个更一般的组件，并且通过props配置它：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>定义成class的组合可以达到和组件同样的效果：</p>
    <Code>
      <img src={image5} />
    </Code>
    <h2>继承呢？</h2>
    <p>在Facebook中，我们使用了上千的React组件，但是我们没有发现任何我们推荐使用组件继承的使用案例。</p>
    <p>Props和组件用明确的和安全的方式给你足够的灵活性来定制组件的样子和行为。记住，组件可以接收任意的props，包含简单值，React元素，和方法。</p>
    <p>如果你想在组件间复用非UI的功能，我们建议提取它到单独的JavaScript模块。组件可以引入它，使用它的函数、对象和类，而不用扩展它。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});