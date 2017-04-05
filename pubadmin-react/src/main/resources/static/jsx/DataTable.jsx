class DataTable extends React.Component {
  render() {
  	var names = this.props.tbrownames;
    return <table className="table table-striped">
              <thead>
              	<DataHead tbheads={this.props.tbheads}/>
              </thead>
             <tbody>
	                {
	                	this.props.tbrows.map(function(row){
	                		if(names == undefined){
	                			return <DataRow key={row.id} tbrow={row}/>;
	                		} else {
	                			return <AutoDataRow key={row.id} tbrow={row} rownames={names}/>;
	                		}
	                	})
	        				}
            </tbody>
           </table>;    
  }
  
} 

class DataHead extends React.Component {
	render(){
		return <tr>
	                {
						        React.Children.map(this.props.tbheads, function (head) {
						          return <th>{head}</th>;
						        }) 
	        				}		
			</tr>;
	}
}

class AutoDataRow extends React.Component {
	render(){
		var row = this.props.tbrow;
		var names = this.props.rownames;
		return <tr>
		{
		React.Children.map(names, function(name){
			return <td >{row[name]}</td>;
		})

		}
		</tr>;
	}
}

class DataRow extends React.Component {
	render(){
		var row = this.props.tbrow;
		return <tr>
			<td >{row.id}</td>
			<td>{row.header1}</td>
			<td>{row.header2}</td>
			<td>{row.header3}</td>
			<td>{row.header4}</td>
			</tr>;
	}
}


/*表头名称和数据记录字段名的对应关系*/						 
var tbheadrowref = {"#":"id","Header1":"header1","Header2":"header2","Header3":"header3","Header4":"header4"};	
/*要显示的表头名称*/			
var tbheads = ["#", "Header1","Header3", "Header2", "Header4"];
/*自动匹配要显示的数据记录字段名*/
var tbrownames = tbheads.map(function(key){ return tbheadrowref[key]}); 

var tbrows = {"rows":[{"id":"1,001","header1":"Lorem","header2":"ipsum","header3":"dolor","header4":"sit"},
							{"id":"1,002","header1":"amet","header2":"consectetur","header3":"adipiscing","header4":"elit"}]
						 };

ReactDOM.render(
  <DataTable tbheads={tbheads} tbrows={tbrows.rows} />,
  document.getElementById('data_table')
);
