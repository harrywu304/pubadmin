//V1.1.0 by Wuhx 20170204
(function($) {
	//从当前浏览器Url中提取特定请求参数值
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return decodeURIComponent(r[2]);
		return null;
	}
	
	//从url中提取所有请求参数，返回参数Map
	$.getParamArray = function(url) {
        var theRequest = new Object();
        if (url.indexOf("?") == -1) {
            return theRequest;
        }
        var url = url.split("?")[1];
        var strs = url.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
        return theRequest;
    }
	
	//参数Map拼装成url请求字符串
	$.getParamUrlStr = function(paramArray) {
		var urlStr = "";
	    for(var attr in paramArray){
	    	urlStr+="&"+attr+"="+paramArray[attr];
	    }
	    return urlStr;
	}
})(jQuery);