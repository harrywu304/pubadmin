class Main extends React.Component {
    constructor(props) {
      super(props);
      this.handlerMenuClick = this.handlerMenuClick.bind(this);
      this.state = {		
		menus : ["Overview", "Reports","Analytics", "Exports"],
		menuref : {"Overview":"overview","Reports":"reports","Analytics":"analytics","Exports":"exports"},
		currentpage: "overview"
      };
    }	
    
    handlerMenuClick(e){
    	console.log("do handlerMenuClick...");
    	console.log("e.target.id:"+e.target.id);
    	var id = e.target.id;
    	this.setState({currentpage:id});
    	//$("#"+id).parent().attr({"class":"active"});
    }
	
	render() {
		return (
			<div >
		        <div id="sidebar" className="col-sm-3 col-md-2 sidebar" >
		        	<SideBar menus={this.state.menus} menuref={this.state.menuref} handlerClick={this.handlerMenuClick}/>
		        </div>			
		        <div id="mainbar" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					{("overview" == this.state.currentpage)?<Overview /> : ""}	
					{("reports" == this.state.currentpage)?<Reports /> : ""}
		        </div>			
			</div>
		);
	}	
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
