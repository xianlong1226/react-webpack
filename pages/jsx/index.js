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
    <h1>介绍JSX</h1>
    <p>考虑下面的变量定义。</p>
    <Code>
      <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</p>
    </Code>
    <p>这个有趣的标签语法既不是字符串也不是html。</p>
    <p>它叫做JSX，是Javascript的语法扩展。我们推荐使用它搭配React来描述UI长什么样子。JSX可能使你想起了模板语言，但是它确实是完全依靠Javascript语言的力量。</p>
    <p>JSX创建React元素。我们将在下一章节探索将它们渲染到DOM。</p>
    <h2>在JSX中嵌入表达式</h2>
    <p>你可以通过包裹花括号来将任何的Javascript表达式嵌入到JSX中。例如，2+2，user.name，formatName(user)都是有效的表达式。</p>
    <Code>
      <p>function formatName(user) {'{'}</p>
        <p>return user.firstName + ' ' + user.lastName;</p>
      <p>{'}'}</p>

      <p>const user = {'{'}</p>
        <p>firstName: 'Harper',</p>
        <p>lastName: 'Perez'</p>
      <p>{'}'};</p>

      <p>const element = (</p>
        <p>&lt;h1&gt;</p>
          <p>Hello, {'{'}formatName(user){'}'}!</p>
        <p>&lt;/h1&gt;</p>
      <p>);</p>

      <p>ReactDOM.render(</p>
        <p>element,</p>
        <p>document.getElementById('root')</p>
      <p>);</p>
    </Code>
    <h2>JSX也是表达式</h2>
    <p>编译之后，JSX会变成合法的Javascript对象。</p>
    <p>这就意味着，你可以在if声明或for循环中使用它，把它赋值给变量，作为参数，或作为函数的返回值。</p>
    <Code>
      <p>function getGreeting(user) {'{'}</p>
        <p>if (user) {'{'}</p>
          <p>return &lt;h1&gt;Hello, {'{'}formatName(user){'}'}!&lt;/h1&gt;;</p>
        <p>{'}'};</p>
        <p>return &lt;h1&gt;Hello, Stranger.&lt;/h1&gt;;</p>
      <p>{'}'};</p>
    </Code>
    <h2>用JSX指定属性</h2>
    <p>你可以使用引号指定字符串文字作为属性。</p>
    <Code>
      <p>const element = &lt;div tabIndex="0"&gt;&lt;/div&gt;;</p>
    </Code>
    <p>你也可以使用花括号嵌套Javascript表达式作为属性。</p>
    <Code>
      <p>const element = &lt;img src={'{'}user.avatarUrl{'}'}&gt;&lt;/img&gt;;</p>
    </Code>
    <p>用大括号嵌套Javascript表达式作为属性时千万别用引号包裹。否则，JSX会将它们作为字符串而不是表达式。例如，下面的属性设置将直接作为字符串输出。</p>
    <Code>
      <p>const element = &lt;img src="{'{'}user.avatarUrl{'}'}"&gt;&lt;/img&gt;;</p>
    </Code>
    <h2>用JSx指定子元素</h2>
    <p>如果一个标签是空的，你可以用/>立即关闭它，像XML一样。</p>
    <Code>
      <p>const element = &lt;img src={'{'}user.avatarUrl{'}'} /&gt;;</p>
    </Code>
    <p>JSX标签也可以包含子元素</p>
    <Code>
      <p>const element = (</p>
        <p>&lt;div&gt;</p>
          <p>&lt;h1&gt;Hello!&lt;/h1&gt;</p>
          <p>&lt;h2&gt;Good to see you here.&lt;/h2&gt;</p>
        <p>&lt;/div&gt;</p>
      <p>);</p>
    </Code>
    <p>由于JSX更接近于Javascript而不是Html，所以React Dom使用驼峰式的属性命名代替Html属性命名。例如，class在JSX中是className。</p>
    <h2>JSX阻止注入攻击</h2>
    <p>嵌入用户输入到JSX是安全的。</p>
    <Code>
      <p>const title = response.potentiallyMaliciousInput;</p>
      <p>// This is safe:</p>
      <p>const element = &lt;h1&gt;{'{'}title{'}'}&lt;/h1&gt;;</p>
    </Code>
    <p>默认情况下，在渲染之前React DOM避免任何值嵌入到JSX。因此，它能确保你不能注入任何没有包含在你的应用中的东西。所有的东西在渲染之前都会被转换成字符串。这帮助避免XSS (cross-site-scripting)攻击。</p>
    <h2>JSX表现对象</h2>
    <p>Babel通过React.createElement()调用编译JSX。下面的两个例子是完全一样的：</p>
    <Code>
      <p>const element = (</p>
        <p>&lt;h1 className="greeting"&gt;</p>
          <p>Hello, world!</p>
        <p>&lt;/h1&gt;</p>
      <p>);</p>
    </Code>
    <Code>
      <p>const element = React.createElement(</p>
        <p>'h1',</p>
        <p>{'{'}className: 'greeting'{'}'},</p>
        <p>'Hello, world!'</p>
      <p>);</p>
    </Code>
    <p>React.createElement()执行一些检查帮助你编写没有bug的代码，但是本质上它创建类似下面的代码：</p>
    <Code>
      <p>// Note: this structure is simplified</p>
      <p>const element = {'{'}</p>
        <p>type: 'h1',</p>
        <p>props: {'{'}</p>
          <p>className: 'greeting',</p>
          <p>children: 'Hello, world'</p>
        <p>{'}'}</p>
      <p>{'}'};</p>
    </Code>
    <p>这些对象被称为"React elements"。你可以把他们看作你在屏幕上看到的东西的描述。React读取这些对象并用它们构建DOM并保持它们是最新的。</p>
    <p>我们将在下一章节探索将React elements渲染成DOM。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});