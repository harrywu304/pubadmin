class Reports extends React.Component {
    constructor(props) {
      super(props);
      this.handleQuery = this.handleQuery.bind(this);      
      this.state = {
      	title:'Reports',
      	datatitle: 'Report List',		
		heads : ["#", "Name","Age", "Sex", "City"],
		headkeyref : {"#":"id","Name":"header1","Sex":"header2","Age":"header3","City":"header4"},	
		rows: []
      };
    }	
	
    renderDataRow(row, index){
		return (<tr key={index}>
			<td >{row.id}</td>
			<td>{row.header1}</td>
			<td>{row.header3}</td>
			<td>{row.header2}</td>
			<td>{row.header4}</td>
			</tr>);    	
    }
    
    renderQueryForm(){
		return (
	        <div >
	            <div >
					<h2 className="sub-header">Query</h2>   
	                <div >
	                    <div>
	                        <form className="form-inline" role="form">
	                            <div className="form-group" >
	                                <label className="control-label">App Name：</label>
	                                <input type="text" ref="appName" className="form-control" id="appName"/>
	                            </div>
	                            <button type="button" className="btn btn-default" id="select" onClick={this.handleQuery}>Query</button>
	                        </form>
	                    </div>
	                </div>
	            </div>	
	        </div>    
		);    	
    }
    
    handleQuery(e) {
    	var appName = this.refs.appName;
    	console.log("e.target.value:"+e.target.value);
    	console.log("e.target.id:"+e.target.id);
    	
    	var $this = this;
    	$.get("/pubadmin-react/testdata/users.json",function(data,status){
    		console.log("data:"+data);
    		console.log("status:"+status);
    		if("success" === status){
				$this.setState({rows:data});
    		}
    	});
    }    
    
	render() {
		return (
			<div>
			<h1 className="page-header">{this.state.title}</h1>
			{this.renderQueryForm()}
			<DataList datatitle={this.state.datatitle} heads={this.state.heads} rows={this.state.rows} headkeyref={this.state.headkeyref}/>
			{/*<DataList datatitle={this.state.datatitle} heads={this.state.heads} rows={this.state.rows} renderDataRow={this.renderDataRow}/>*/}			
			{/*<Paging />*/}
			</div>
		);
	}	
}

