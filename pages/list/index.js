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

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    <h1>Lists 和 Keys</h1>
    <p>首先，让我们回顾一下在JavaScript中你怎么改变列表的值。</p>
    <p>给定下面的代码，我们使用map()方法获取一组数字并且把它们的值翻倍。我们将map()函数返回的新数组赋值给变量doubled，并且输出日志：</p>
    <Code>
      <img src={image1} />
    </Code>
    <p>上面的代码输出日志[2, 4, 6, 8, 10]到控制台。</p>
    <p>在React中把数组转换成元素集合的方式基本完全一样。</p>
    <h2>渲染多行组件</h2>
    <p>你可以生成元素集合并且使用花括号将他们包含进JSX中。</p>
    <p>下面，我们使用map()函数循环numbers数组。我们为每一项返回一个&lt;li&gt;元素。最后，我们将元素结果集数组赋值给变量listItems：</p>
    <Code>
      <img src={image2} />
    </Code>
    <p>我们包含整个listItems数组到&lt;ul&gt;并且把它渲染到DOM：</p>
    <Code>
      <img src={image3} />
    </Code>
    <h2>基本的列表组件</h2>
    <p>通常你需要在一个组件中渲染lists。</p>
    <p>我们改造之前的例子到一个组件中，该组件接收一个数字数组输出无序元素列表：</p>
    <Code>
      <img src={image4} />
    </Code>
    <p>当你执行这段代码，你会得到一个警告：需要为每一个列表项提供一个key。"key"是一个特殊的字符串属性，当创建元素列表的时候你需要包含它。我们将在下一部分讨论为什么它很重要。</p>
    <p>让我们在numbers.map()中给列表项设置一个key，修复缺失key的问题：</p>
    <Code>
      <img src={image5} />
    </Code>
    <h2>Keys</h2>
    <p>Keys帮助React识别哪一项是改变的，新加的或删除的。Keys应该给数组中的每一个元素并且给他们一个唯一的标识。</p>
    <Code>
      <img src={image6} />
    </Code>
    <p>选择key的最好方式是使用一个字符串唯一标示一个列表项。最常用的是使用数据中的IDs作为keys：</p>
    <Code>
      <img src={image7} />
    </Code>
    <p>当你没有稳定的IDs渲染items时，你可以使用item的索引作为key的最后手段：</p>
    <Code>
      <img src={image8} />
    </Code>
    <p>如果元素可能重新排序，我们不推荐使用索引作为key，因为这可能很慢。</p>
    <h2>提取一个带Keys的组件</h2>
    <p>Keys只在包含数组的上下文中有意义。</p>
    <p>例如，如果你提取一个ListItem组件，你需要把key加到数组中的标签上，而不是根标签：</p>
    <b>错误使用的例子：</b>
    <Code>
      <img src={image9} />
    </Code>
    <b>正确使用的例子：</b>
    <Code>
      <img src={image10} />
    </Code>
    <h2>在同胞元素之间keys必须是唯一的</h2>
    <p>在数组中使用的key必须在同胞中是唯一的。但是它们不需要全局唯一。当我们创建两个不同的数组时可以使用相同的key：</p>
    <Code>
      <img src={image11} />
    </Code>
    <p>Keys只是作为React的一个线索，但是不会传给你的组件。如果在你的组件中需要相同的值，用一个不同的值明确的作为prop传递它：</p>
    <Code>
      <img src={image12} />
    </Code>
    <p>上面的例子中，Post组件能获取到props.id，但是不同获取到props.key。</p>
    <h2>在JSX中嵌套map()</h2>
    <p>之前的例子中我们定义了独立的变量listItems并且包含到了JSX中：</p>
    <Code>
      <img src={image13} />
    </Code>
    <p>JSX允许在大括号里嵌套任何表达式所以我们可以内嵌map()：</p>
    <Code>
      <img src={image14} />
    </Code>
    <p>有时这样是代码清晰的，但这种风格依然是恶习。就像在JavaScript，由你决定是否值得为了可读性而提取一个组件。请记住，如果map()方法体嵌套太深的话，是时候提取组件了。</p>
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});