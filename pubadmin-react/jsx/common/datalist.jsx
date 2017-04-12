class DataList extends React.Component {
    
	render() {
		var datatitle = this.props.datatitle;
		var renderDataRow = this.props.renderDataRow;
		var heads = this.props.heads;
		var headkeyref = this.props.headkeyref;
		var rows = this.props.rows;
		
		return (
			<div>
	          {(datatitle != undefined)?<h2 className="sub-header">{datatitle}</h2>:""}
	          <div id="data_table" className="table-responsive">
							<DataTable heads={heads} rows={this.props.rows} renderDataRow={renderDataRow} headkeyref={headkeyref}/>
	          </div>
	    </div>  
		);	
	}	
}	

class DataTable extends React.Component {
	
	autoRenderRow(row, rowkeys, index){
		return (
		<tr key={index}>
		{
			React.Children.map(rowkeys, function(rowkey){
				return <td>{row[rowkey]}</td>;
			})
		}
		</tr>
		);
	}
	
  render() {
  	var heads = this.props.heads;
		var rows = this.props.rows;
		var renderDataRow = this.props.renderDataRow;
		var headkeyref = this.props.headkeyref;
		var rowkeys = (headkeyref != undefined)?heads.map(function(key){ return headkeyref[key]}):[];
		var autoRenderRow = this.autoRenderRow;
  	
    return (
    	<table className="table table-striped">
              <thead>
				<tr>
        {
	        React.Children.map(heads, function (head) {
	          return <th>{head}</th>;
	        }) 
        }		
				</tr>
          </thead>
         <tbody>
        {
        	rows.map(function(row,index){
        			return (renderDataRow != undefined)?renderDataRow(row,index):autoRenderRow(row, rowkeys, index);
        	})
    		}
        </tbody>
      </table>
    );
  }
  
} 
