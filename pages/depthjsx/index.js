let Main = require('components/main');
let Code = require('components/code');

require('./style.scss');
//require('./page.html');

let image1 = require('./images/14-1.png');
let image2 = require('./images/14-2.png');
let image3 = require('./images/14-3.png');
let image4 = require('./images/14-4.png');
let image5 = require('./images/14-5.png');
let image6 = require('./images/14-6.png');
let image7 = require('./images/14-7.png');
let image8 = require('./images/14-8.png');
let image9 = require('./images/14-9.png');
let image10 = require('./images/14-10.png');
let image11 = require('./images/14-11.png');
let image12 = require('./images/14-12.png');
let image13 = require('./images/14-13.png');
let image14 = require('./images/14-14.png');
let image15 = require('./images/14-15.png');
let image16 = require('./images/14-16.png');
let image17 = require('./images/14-17.png');
let image18 = require('./images/14-18.png');
let image19 = require('./images/14-19.png');
let image20 = require('./images/14-20.png');
let image21 = require('./images/14-21.png');
let image22 = require('./images/14-22.png');
let image23 = require('./images/14-23.png');
let image24 = require('./images/14-24.png');
let image25 = require('./images/14-25.png');
let image26 = require('./images/14-26.png');
let image27 = require('./images/14-27.png');
let image28 = require('./images/14-28.png');
let image29 = require('./images/14-29.png');
let image30 = require('./images/14-30.png');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>深层理解JSX</h1>
    <p>从根本上讲，JSX仅仅是React.createElement(component, props, ...children)方法的语法糖。JSX代码：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>编译成：</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>如果没有子节点，你也可以自闭和的标签：</p>
    <Code>
      <img src={image3} />
    </Code>
    <p>编译成：</p>
    <Code>
      <img src={image4} />
    </Code>
    <h2>指定React元素的类型</h2>
    <p>JSX标签的第一步分决定了React元素的类型。</p>
    <p>大写的类型说明该JSX标签是一个React组件。这些标签被编译成一个直接对同名变量的引用，所以你可以使用JSX &lt;Foo /&gt;表达式，Foo必须在作用域中。</p>
    <h3>React必须在作用域中</h3>
    <p>由于JSX编译需要调用React.createElement，所以React库必须总在你的JSX代码的作用域中。</p>
    <p>例如，下面的两个imports都是必须的，尽管React和CustomButton不是直接从JavaScript引用的：</p>
    <Code>
      <img src={image5} />
    </Code>
    <h3>给JSX类型使用“."符号</h3>
    <p>在JSX中你也可以使用”.“引用React组件。如果你有一个单独的模块导出了很多React组件这样是很方便的。例如，如果MyComponents.DatePicker是一个组件，你可以在JSX中直接使用它：</p>
    <Code>
      <img src={image6} />
    </Code>
    <h3>用户自定义的组件必须是首字母大写的</h3>
    <p>当一个元素类型以小写字母开头，那它引用的是一个内置的组件像&lt;div&gt; 或 &lt;span&gt;并且结果以字符串”div“或”span“传递给React.createElement。以一个大写字母像&lt;Foo /&gt;开头的类型编译成React.createElement(Foo)并且对应于一个在你的JavaScript文件中定义的或导入的组件。</p>
    <p>我们推荐以首字母大写定义一个组件。如果你确实有一个组件以小写字母开头的，那么在JSX使用它之前把它赋值给一个首字母大写的变量。</p>
    <p>例如，下面的代码将不会像期望的一样运行：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>为了修复它，我们用Hello重命名hello并且引用它的时候使用&lt;Hello /&gt;：</p>
    <Code>
      <img src={image8} />
    </Code>
    <h3>在运行时选择类型</h3>
    <p>你不能使用表达式作为React元素类型。如果你确实想要使用表达式指明元素类型，首先，只需要将它赋值给一个首字母大写的变量。这一般发生在你要基于prop渲染不同的组件时：</p>
    <Code>
      <img src={image9} />
    </Code>
    <p>为了修复它，我们首先将它赋值给一个首字母大写的变量：</p>
    <Code>
      <img src={image10} />
    </Code>
    <h2>Props in JSX</h2>
    <p>在JSX中有几种不同的方式指明props。</p>
    <h3>JavaScript表达式</h3>
    <p>通过使用{'{}'}包围，你可以传递任意表达式作为一个prop。例如，在这个JSX中：</p>
    <Code>
      <img src={image11} />
    </Code>
    <p>对于MyComponent，props.foo的值将会是10，因为表达式1 + 2 + 3 + 4将会被计算。</p>
    <p>if声明和for循环在JavaScript不是表达式，所以它们不能直接在JSX中使用。代替的，你可以将这些放到包围的代码中。例如：</p>
    <Code>
      <img src={image12} />
    </Code>
    <h3>纯字符串</h3>
    <p>你可以传纯字符串作为prop。这两个JSX表达式是等效的：</p>
    <Code>
      <img src={image13} />
    </Code>
    <p>当你传一个纯字符串，它的值是非转义的HTML，所以这两个JSX表达式是等效的：</p>
    <Code>
      <img src={image14} />
    </Code>
    <p>这种行为通常是不相关的。在这提到只是为了完整性。</p>
    <h3>Props默认是true</h3>
    <p>如果你不给prop传值，它默认是true。这两个JSX表达式是等效的：</p>
    <Code>
      <img src={image15} />
    </Code>
    <p>一般，我们不推荐使用它，因为它容易和 ES6 object shorthand 搞混了：{'{foo}'} 是 {'{foo: foo}'} 的缩写，而不是 {'{foo: true}'}。这个行为只是为了匹配HTML的这个行为。</p>
    <h3>延伸属性</h3>
    <p>如果你已经有一个props对象，你想在JSX中传递它，你可以使用...作为扩展操作符传递真个props对象。这两个组件是等效的：</p>
    <Code>
      <img src={image16} />
    </Code>
    <p>当你构建泛型容器时，延伸属性是非常有用的。然而，他们也会使你的代码非常散乱，因为它很容易传递一对不相关的props到组件，而组件根本不关心他们。我们推荐你保守的使用该语法。</p>
    <h2>Children in JSX</h2>
    <p>包含一个开始标签和结束标签的JSX表达式，两个标签之间的内容将作为一个特殊的prop传递：props.children。有几种不同的方式传递子节点：</p>
    <h3>纯字符串</h3>
    <p>你可以在开始标签和结束标签之间放纯字符串，那么props.children就是这个字符串。这对很多内置的HTML元素是非常有用的。例如：</p>
    <Code>
      <img src={image17} />
    </Code>
    <p>这在JSX中是有效的，组件中的props.children将会是"Hello world!"。HTML是非转义的，所以你可以像你写HTML一样写JSX：</p>
    <Code>
      <img src={image18} />
    </Code>
    <p>JSX会移除每一行开头和结尾的空格。它也会移除空行。紧挨着标签的新行会被移除；纯字符串之间的新行会被压缩为一个空格。所以下面这些渲染结果是一样的：</p>
    <Code>
      <img src={image19} />
    </Code>
    <h3>JSX Children</h3>
    <p>你可以设置多个JSX元素作为子节点。这对显示嵌套的组件是非常有用的：</p>
    <Code>
      <img src={image20} />
    </Code>
    <p>你可以将不同类型的子节点混合在一起，所以你可以将纯字符串和JSX子节点放在一起。这是JSX和HTML另一点相似的地方，所以这既是有效的JSX也是有效的HTML：</p>
    <Code>
      <img src={image21} />
    </Code>
    <p>一个React组件不能返回多个React元素，但是一个单一的JSX表达式可以有多个子节点，所以，如果你想让一个组件返回多个元素，可以把它们包含在一个div中。</p>
    <h2>JavaScript Expressions</h2>
    <p>你可以传递任意的JavaScript表达式作为子节点，通过把它包含在花括号{'{}'}中。例如，这些表达式是等效的：</p>
    <Code>
      <img src={image22} />
    </Code>
    <p>对渲染任意长度的JSX表达式集合这是非常有用的。例如：</p>
    <Code>
      <img src={image23} />
    </Code>
    <p>JavaScript表达式可以和其他类型的子节点混合。这在字符串模板的场合是非常有用的：</p>
    <Code>
      <img src={image24} />
    </Code>
    <h2>Functions as Children</h2>
    <p>通常JavaScript表达式插入到JSX中和字符串、React元素，或它们的集合是等效的。props.children和其他类型prop作用是一样的，你可以传给它任意类型的数据，但不能是React不知道的数据类型。</p>
    <p>例如，你有一个定制的组件，你可以传递一个回掉函数作为props.children：</p>
    <Code>
      <img src={image25} />
    </Code>
    <p>传递给特定组件的Children可以是任何东西，只要在渲染之前组件能将它转换为React理解的东西。</p>
    <h2>Booleans, Null, 和 Undefined 将会被忽略</h2>
    <p>false, null, undefined, 和 true 是有效的children。他们只是不被渲染。这些表达式的渲染结果是相同的：</p>
    <Code>
      <img src={image26} />
    </Code>
    <p>这对条件渲染React元素是非常有用的。下面的JSX只有在showHeader是true的时候才会渲染&lt;Header /&gt;：</p>
    <Code>
      <img src={image27} />
    </Code>
    <p>需要注意的是，一些类false的值，比如数字0，React也是会渲染的。例如下面的代码可能表现的和你期望的不一样，因为当props.messages是空数组时0也会被输出：</p>
    <Code>
      <img src={image28} />
    </Code>
    <p>为了修正它，要确保{'&&'}之前的表达式总是boolean：</p>
    <Code>
      <img src={image29} />
    </Code>
    <p>相反的，如果你想让一个值像 false, true, null, 或者 undefined 出现在输出中，你首先必须将它转换成字符串：</p>
    <Code>
      <img src={image30} />
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