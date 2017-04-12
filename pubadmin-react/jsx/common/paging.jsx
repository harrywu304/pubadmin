class Paging extends React.Component {
	render() {
		return (
            <div>
                <ul className="pager">
                    <li><a onClick={this.handleChange} value={1}>首页</a></li>
                    <li><a onClick={this.handleChange} value={this.state.c_page - 1}>上一页</a></li>
                    <li><button onClick={this.handleChange} value={this.state.c_page } style={this.state.current_page} id="current_p">当前页</button></li>
                    <li><a onClick={this.handleChange} value={this.state.c_page + 1}>下一页</a></li>
                    <li><a onClick={this.handleChange} value={this.state.z_page.length }>最后一页</a></li>&nbsp;
                    <li>{this.state.c_page}/{ this.state.z_page.length }</li>&nbsp;&nbsp;
                    <li>请选择页数：</li>
                    <li> 
                    <select ref="page" onChange={this.handleChange} style={this.state.p_select} id="pageSelect">
                        {
                            this.state.z_page.map(function(p){
                                return  <option key={p}>{p}</option>})
                        }
                    </select>
                    </li>
                </ul>
            </div>
		);
	}		
}