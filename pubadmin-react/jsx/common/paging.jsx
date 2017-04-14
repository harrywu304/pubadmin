class FullPaging extends React.Component {

    constructor(props) {
      super(props);
    }	
    
    buildPageArr(totalPage){
 		//build page arr
		var pageArr = [];
		var step = (totalPage/10 < 10)?1:totalPage/10;
		if(step == 1){
			for(var i=0;i<totalPage;i++){
				pageArr[i] = i+1;
			}
		} else {
			pageArr[0] = 0;
			var i = 0;
			do{
			  i++;
			  pageArr[i] = pageArr[i-1]+step;
			} while(pageArr[i] < totalPage);
			pageArr[0] = 1;
		}
		console.log(pageArr);
		return pageArr;
    }
    
	render() {
		var handleClick = this.props.handleClick;
		var totalPage = this.props.totalPage;
		var currentPage = this.props.currentPage;
		var prepage = currentPage - 1;
		prepage = (prepage < 1)?"1":prepage;
		var nextpage = currentPage + 1;
		nextpage = (nextpage > totalPage)?totalPage:nextpage;
		var pageArr = this.buildPageArr(totalPage);
		
		return (
            <div>

                <ul className="pager">
                    <li><a onClick={handleClick} value={1} >首页</a></li>
                    <li><a onClick={handleClick} value={prepage}>上一页</a></li>
                    <li><a onClick={handleClick} value={nextpage}>下一页</a></li>
                    <li><a onClick={handleClick} value={totalPage}>最后一页</a></li>
                    <li>&nbsp;{currentPage}/{ totalPage }&nbsp;</li>
                    <li>请选择页数：</li>
                    <li> 
                    <select id="pageSelect" onChange={handleClick} value={currentPage}>
                        {
                            pageArr.map(function(p){
                                return  <option key={p} value={p}>{p}</option>}
                            )
                        }
                    </select>
                    </li>
                </ul>

            </div>
		);
	}		
}