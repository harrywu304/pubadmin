class SideBar extends React.Component {
	
    constructor(props) {
      super(props);
      this.handlerClick = this.handlerClick.bind(this);
      this.state = {		
		currentpage: ""
      };
    }	
    
    handlerClick(e){
    		this.setState({currentpage:e.target.id});
    		this.props.handlerClick(e);
    }
    
	render() {
		var menus = this.props.menus;
		var menuref = this.props.menuref;
		var handlerClick = this.handlerClick;
		var currentpage = this.state.currentpage;
		
		return (
          <ul className="nav nav-sidebar">
            {
            	menus.map(function(menu,index){ 
            		var menuid = menuref[menu];
            		return <li key={menuid} className={(currentpage == menuid)?"active":""}><a href="#" id={menuid} onClick={handlerClick} >{menu}</a></li>;
            	})
            }
          </ul>	
		);
	}	
}