let Main = require('components/main');

require('./style.scss');
require('./page.html');

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Main><div>
    该教程是参考React官网（https://facebook.github.io/react/）编写的。<br/>
    大多数是直接翻译，个别地方自己做了修改。希望对初学者有所帮助。<br/>
    另外，该教程本身就是应用React+Webpack搭建的，大家可直接使用该框架进行开发。
    </div></Main>
  }
}

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});