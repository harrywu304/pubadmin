class Overview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      	title:'Overview',
      	datatitle: 'Data List',		
		heads : ["#", "Name","Age", "Sex", "City"],
		headkeyref : {"#":"id","Name":"header1","Sex":"header2","Age":"header3","City":"header4"},	
		rows: []
      };
    }	
    
	renderGraph() {
		return (
	          <div id="graph" className="row placeholders">
	            <div className="col-xs-6 col-sm-3 placeholder">
	              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
	              <h4>Label</h4>
	              <span className="text-muted">Something else</span>
	            </div>
	            <div className="col-xs-6 col-sm-3 placeholder">
	              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
	              <h4>Label</h4>
	              <span className="text-muted">Something else</span>
	            </div>
	            <div className="col-xs-6 col-sm-3 placeholder">
	              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
	              <h4>Label</h4>
	              <span className="text-muted">Something else</span>
	            </div>
	            <div className="col-xs-6 col-sm-3 placeholder">
	              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
	              <h4>Label</h4>
	              <span className="text-muted">Something else</span>
	            </div>
	          </div>			
		);
	}    
	
	render() {
		return (
			<div>
			<h1 className="page-header">{this.state.title}</h1>
			{this.renderGraph()}
			<DataList datatitle={this.state.datatitle} heads={this.state.heads} rows={this.state.rows} headkeyref={this.state.headkeyref}/>
			{/*<DataList datatitle={this.state.datatitle} heads={this.state.heads} rows={this.state.rows} renderDataRow={this.renderDataRow}/>*/}			
			</div>
		);
	}	
}