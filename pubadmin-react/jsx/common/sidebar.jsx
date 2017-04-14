class SideBar extends React.Component {
	
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {		
		currentpage: ""
      };
    }	
    
    handleClick(e){
    		this.setState({currentpage:e.target.id});
    		this.props.handleClick(e);
    }
    
	render() {
		var menus = this.props.menus;
		var menuref = this.props.menuref;
		var handleClick = this.handleClick;
		var currentpage = this.state.currentpage;
		
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