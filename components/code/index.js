require('./style.scss');

class Code extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return <div className="code">{this.props.children}</div>
    }
}

module.exports = Code;