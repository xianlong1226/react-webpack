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
    <h1>组件和Props</h1>
    <p>组件让你能将UI分割成独立的，可复用的片段，并且每一部分是独立的。</p>
    <p>从概念上看，组件就像是Javascript的function。他们接受任意的输入（"props"）并且返回React元素。</p>
    <h2>functional和class的组件</h2>
    <p>定义一个组件最简单的方式是写一个Javascript函数：</p>
    <Code>
      <p>function Welcome(props){'{'}</p>
        <p>return &lt;h1&gt;Hello, {'{'}props.name{'}'}&lt;/h1&gt;;</p>
      <p>{'}'}</p>
    </Code>
    <p>这个方法是一个有效的React组件，因为它接受唯一的props对象参数并且返回React元素。我们称这类组件"functional"因为他们是Javascript方法。</p>
    <p>你也可以使用es6 class定义组件：</p>
    <Code>
      <p>class Welcome extends React.Component {'{'}</p>
        <p>render() {'{'}</p>
          <p>return &lt;h1&gt;Hello, {'{'}props.name{'}'}&lt;/h1&gt;;</p>
        <p>{'}'}</p>
      <p>{'}'}</p>
    </Code>
    <p>从React的观点看，以上两个组件是等效的。</p>
    <p>Classes具有一些额外的特征，我们将在下一章节讨论。在那之前，我们使用functional组件，因为它简洁。</p>
    <h2>渲染一个组件</h2>
    <p>之前，我们仅仅遇到React元素表现DOM标签：</p>
    <Code>
      <p>const element = &lt;div /&gt;;</p>
    </Code>
    <p>然而，元素也能表现用户自定义的组件：</p>
    <Code>
      <p>const element = &lt;Welcome name="Sara" /&gt;;</p>
    </Code>
    <p>当React发现一个元素表现为用户自定义的组件时，它传递JSX属性给这个组件作为独立的对象。我们称之为"props"。</p>
    <p>例如，下面的代码在页面上渲染"Hello, Sara"：</p>
    <Code>
      <p>function Welcome(props) {'{'}</p>
        <p>return &lt;h1&gt;Hello, {'{'}props.name{'}'}&lt;/h1&gt;;</p>
      <p>{'}'}</p>

      <p>const element = &lt;Welcome name="Sara" /&gt;;</p>
      <p>ReactDOM.render(</p>
        <p>element,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <p>让我们概括一下在这个例子中发生了生么：</p>
    <ol>
    <li>我们用&lt;Welcome name="Sara" /&gt;调用ReactDOM.render()。</li>
    <li>React调用Welcome组件用{'{'}name: 'Sara'{'}'}作为props。</li>
    <li>我们的Welcome组件返回一个&lt;h1&gt;Hello, Sara&lt;/h1&gt;元素作为结果。</li>
    <li>React DOM有效的更新DOM匹配&lt;h1&gt;Hello, Sara&lt;/h1&gt;</li>
    </ol>
    <p>注意：</p>
    <p>组件的命名一定要首字母大写。</p>
    <p>例如，&lt;div /&gt;表现为一个DOM标签，而&lt;Welcome /&gt;表现为一个组件，并且需要Welcome在作用域内。</p>
    <h2>组合组件</h2>
    <p>组件可以在他们的输出中涉及到别的组件。这让我们在任何详细的级别使用相同的组件。一个button，一个form，一个dialog，在React app中，所有这些通常表现为组件。</p>
    <p>例如，我们创建一个App组件渲染很多次Welcome组件：</p>
    <Code>
      <p>function Welcome(props) {'{'}</p>
        <p>return &lt;h1&gt;Hello, {'{'}props.name{'}'}&lt;/h1&gt;;</p>
      <p>{'}'}</p>

      <p>function App() {'{'}</p>
        <p>return (</p>
          <p>&lt;div&gt;</p>
            <p>&lt;Welcome name="Sara" /&gt;</p>
            <p>&lt;Welcome name="Cahal" /&gt;</p>
            <p>&lt;Welcome name="Edite" /&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
      <p>{'}'}</p>

      <p>ReactDOM.render(</p>
        <p>&lt;App /&gt;,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <p>典型的，新的React apps在最顶层具有一个唯一的App组件。然而，如果你整合React到一个已经存在的app，你或许用一个例如Button的小的组件自底向上的，逐渐的以你的工作方式一直到最高层级。</p>
    <p>注意：组件必须返回唯一的根元素。这就是为什么我添加一个&lt;div&gt;包含所有的&lt;Welcome&gt;元素。</p>
    <h2>提取组件</h2>
    <p>别害怕将组件拆分成小的组件。</p>
    <p>例如，思考这个Comment组件</p>
    <Code>
      <p>function Comment(props) {'{'}</p>
        <p>return (</p>
          <p>&lt;div className="Comment"&gt;</p>
            <p>&lt;div className="UserInfo"&gt;</p>
              <p>&lt;img className="Avatar" src={'{'}props.author.avatarUrl{'}'} alt={'{'}props.author.name{'}'}/&gt;</p>
              <p>&lt;div className="UserInfo-name"&gt;</p>
                <p>{'{'}props.author.name{'}'}</p>
              <p>&lt;/div&gt;</p>
            <p>&lt;/div&gt;</p>
            <p>&lt;div className="Comment-text"&gt;</p>
            <p>  {'{'}props.text{'}'}</p>
            <p>&lt;/div&gt;</p>
            <p>&lt;div className="Comment-date"&gt;</p>
            <p>  {'{'}formatDate(props.date){'}'}</p>
            <p>&lt;/div&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
      <p>{'}'}</p>
    </Code>
    <p>它接收author (an object), text (a string),和 date (a date)作为props。</p>
    <p>首先，我们提取Avatar</p>
    <Code>
      <p>function Avatar(props) {'{'}</p>
      <p>return (</p>
      <p>&lt;img className="Avatar" src={'{'}props.author.avatarUrl{'}'} alt={'{'}props.author.name{'}'}/&gt;</p>
      <p>);</p>
      <p>{'}'}</p>
    </Code>
    <p>Avatar不需要知道它将被渲染到Comment。这也是为什么我们给它的prop一个通用的name：user而不是author。</p>
    <p>我们推荐从组件自己的角度命名props，而不是它将要被用到的上下文环境。</p>
    <p>接下来，我们提取一个UserInfo组件，渲染一个Avatar紧挨着user's name：</p>
    <Code>
      <p>function UserInfo(props) {'{'}</p>
        <p>return (</p>
          <p>&lt;div className="UserInfo"&gt;</p>
            <p>&lt;Avatar user={'{'}props.user{'}'} /&gt;</p>
            <p>&lt;div className="UserInfo-name"&gt;</p>
              <p>{'{'}props.user.name{'}'}</p>
            <p>&lt;/div&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
      <p>{'}'}</p>
    </Code>
    <p>这使得我们进一步简化Comment组件：</p>
    <Code>
      <p>function Comment(props) {'{'}</p>
        <p>return (</p>
          <p>&lt;div className="Comment"&gt;</p>
            <p>&lt;UserInfo user={'{'}props.author{'}'} /&gt;</p>
            <p>&lt;div className="Comment-text"&gt;</p>
              <p>{'{'}props.text{'}'}</p>
            <p>&lt;/div&gt;</p>
            <p>&lt;div className="Comment-date"&gt;</p>
              <p>{'{'}formatDate(props.date){'}'}</p>
            <p>&lt;/div&gt;</p>
          <p>&lt;/div&gt;</p>
        <p>);</p>
      <p>{'}'}</p>
    </Code>
    <h2>Props是只读的</h2>
    <p>无论你以function或者class声明一个组件，它绝不能修改它的props。考虑如下的sum函数：</p>
    <Code>
      <p>function sum(a, b) {'{'}</p>
        <p>return a + b;</p>
      <p>}</p>
    </Code>
    <p>这类functions被称作"pure"，因为他们不会试图改变他们的输入，并且根据相同的输入永远得到相同的输出。</p>
    <p>与此形成鲜明对比的是，这个函数是不"pure"的，因为它改变自己的输入：</p>
    <Code>
      <p>function withdraw(account, amount) {'{'}</p>
        <p>account.total -= amount;</p>
      <p>}</p>
    </Code>
    <p>React是相当灵活的，但是它有一个严格的规定：</p>
    <p>所有的React组件关于Props必须像pure function。当然，应用的UIs是动态的并且随着时间变化的。在下一章节我们将介绍"state"的概念。state允许React组件随着时间改变它们的输出来响应用户的行为，网络响应，和任何其他的，而不违背它的规则。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});