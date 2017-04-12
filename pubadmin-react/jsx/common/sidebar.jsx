class SideBar extends React.Component {
    
	render() {
		var menus = this.props.menus;
		var menuref = this.props.menuref;
		var clickHandler= this.props.clickHandler;
		
		return (
          <ul className="nav nav-sidebar">
            {
            	menus.map(function(menu,index){ 
            		var menuid = menuref[menu];
            		return <li key={index}><a href="#" id={menuid} onClick={clickHandler} >{menu}</a></li>;
            	})
            }
          </ul>	
		);
	}	
}

