class Reports extends React.Component {
    constructor(props) {
      super(props);
      this.handleQuery = this.handleQuery.bind(this);   
      this.state = {
      	title:'Reports',
      	datatitle: 'Report List',		
		heads : ["#", "Name","Age", "Sex", "City"],
		headkeyref : {"#":"id","Name":"header1","Sex":"header2","Age":"header3","City":"header4"},	
		rows: [],
		totalPage: 1,
		currentPage:1
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
	                            <button type="button" className="btn btn-default" id="querySubmit" onClick={this.handleQuery}>Query</button>
	                        </form>
	                    </div>
	                </div>
	            </div>	
	        </div>    
		);    	
    }
    
    handleQuery(e) {
    	console.log("e.target.id:"+e.target.id);
    	var pageNum = 1;
    	if("querySubmit" == e.target.id){
    		pageNum = 1;
    	} else {
	    	//由于react的版本兼容问题，新版本不能直接通过e.target.value获取a标签的value属性，需要通过e.target.getAttribute获取
	    	pageNum = parseInt(getEventValue(e));
	    	console.log("query pageNum:"+pageNum);
	    	this.setState({c_pnum:pageNum});    		
    	}
    	
    	var appName = this.refs.appName;
     	var $this = this;
     	var vPageNum = (pageNum == 1)?"":pageNum;
        $.ajax({
            url: "/pubadmin-react/testdata/users"+vPageNum+".json",
            type: "GET",
            data: {appName:appName.value, pageNum:pageNum},
            success: function (data, status, xhr) {
            	console.log("data:"+data);
            	console.log("status:"+status);
				console.log(xhr.getResponseHeader("Content-Type"));
				$this.setState({rows:data.rows, totalPage:data.totalPage, currentPage:pageNum});
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
			<FullPaging totalPage={this.state.totalPage} currentPage={this.state.currentPage} handleClick={this.handleQuery}/>
			</div>
		);
	}	
}

ReactDOM.render(
  <Reports  />,
  document.getElementById('mainbar')
);