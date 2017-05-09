class SideBar extends React.Component {
	
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {		
		//currentpage: ''
      };
    }	
    
    handleClick(e){
    		//this.setState({currentpage:e.target.id});
    		window.location = "?view="+e.target.id;
    }
    
	render() {
		var menus = this.props.menus;
		var menuref = this.props.menuref;
		var handleClick = this.handleClick;
		var currentpage = this.props.currentpage;
		
		return (
          <ul className="nav nav-sidebar">
            {
            	menus.map(function(menu,index){ 
            		var menuid = menuref[menu];
            		return <li key={menuid} className={(currentpage == menuid)?"active":""}><a href="#" id={menuid} onClick={handleClick} >{menu}</a></li>;
            	})
            }
          </ul>	
		);
	}	
}

var menus = ["Overview", "Reports","Analytics", "Exports"];
var menuref = {"Overview":"overview","Reports":"reports","Analytics":"analytics","Exports":"exports"};

ReactDOM.render(
  <SideBar menus={menus} menuref={menuref} currentpage={view}/>,
  document.getElementById('sidebar')
);