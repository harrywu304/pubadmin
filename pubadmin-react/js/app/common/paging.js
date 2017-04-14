"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullPaging = function (_React$Component) {
	_inherits(FullPaging, _React$Component);

	function FullPaging(props) {
		_classCallCheck(this, FullPaging);

		return _possibleConstructorReturn(this, (FullPaging.__proto__ || Object.getPrototypeOf(FullPaging)).call(this, props));
	}

	_createClass(FullPaging, [{
		key: "buildPageArr",
		value: function buildPageArr(totalPage) {
			//build page arr
			var pageArr = [];
			var step = totalPage / 10 < 10 ? 1 : totalPage / 10;
			if (step == 1) {
				for (var i = 0; i < totalPage; i++) {
					pageArr[i] = i + 1;
				}
			} else {
				pageArr[0] = 0;
				var i = 0;
				do {
					i++;
					pageArr[i] = pageArr[i - 1] + step;
				} while (pageArr[i] < totalPage);
				pageArr[0] = 1;
			}
			console.log(pageArr);
			return pageArr;
		}
	}, {
		key: "render",
		value: function render() {
			var handleClick = this.props.handleClick;
			var totalPage = this.props.totalPage;
			var currentPage = this.props.currentPage;
			var prepage = currentPage - 1;
			prepage = prepage < 1 ? "1" : prepage;
			var nextpage = currentPage + 1;
			nextpage = nextpage > totalPage ? totalPage : nextpage;
			var pageArr = this.buildPageArr(totalPage);

			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ className: "pager" },
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ onClick: handleClick, value: 1 },
							"\u9996\u9875"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ onClick: handleClick, value: prepage },
							"\u4E0A\u4E00\u9875"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ onClick: handleClick, value: nextpage },
							"\u4E0B\u4E00\u9875"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ onClick: handleClick, value: totalPage },
							"\u6700\u540E\u4E00\u9875"
						)
					),
					React.createElement(
						"li",
						null,
						"\xA0",
						currentPage,
						"/",
						totalPage,
						"\xA0"
					),
					React.createElement(
						"li",
						null,
						"\u8BF7\u9009\u62E9\u9875\u6570\uFF1A"
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"select",
							{ id: "pageSelect", onChange: handleClick, value: currentPage },
							pageArr.map(function (p) {
								return React.createElement(
									"option",
									{ key: p, value: p },
									p
								);
							})
						)
					)
				)
			);
		}
	}]);

	return FullPaging;
}(React.Component);