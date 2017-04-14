'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_React$Component) {
	_inherits(Reports, _React$Component);

	function Reports(props) {
		_classCallCheck(this, Reports);

		var _this = _possibleConstructorReturn(this, (Reports.__proto__ || Object.getPrototypeOf(Reports)).call(this, props));

		_this.handleQuery = _this.handleQuery.bind(_this);
		_this.state = {
			title: 'Reports',
			datatitle: 'Report List',
			heads: ["#", "Name", "Age", "Sex", "City"],
			headkeyref: { "#": "id", "Name": "header1", "Sex": "header2", "Age": "header3", "City": "header4" },
			rows: [],
			totalPage: 1,
			currentPage: 1
		};
		return _this;
	}

	_createClass(Reports, [{
		key: 'renderDataRow',
		value: function renderDataRow(row, index) {
			return React.createElement(
				'tr',
				{ key: index },
				React.createElement(
					'td',
					null,
					row.id
				),
				React.createElement(
					'td',
					null,
					row.header1
				),
				React.createElement(
					'td',
					null,
					row.header3
				),
				React.createElement(
					'td',
					null,
					row.header2
				),
				React.createElement(
					'td',
					null,
					row.header4
				)
			);
		}
	}, {
		key: 'renderQueryForm',
		value: function renderQueryForm() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'h2',
						{ className: 'sub-header' },
						'Query'
					),
					React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							null,
							React.createElement(
								'form',
								{ className: 'form-inline', role: 'form' },
								React.createElement(
									'div',
									{ className: 'form-group' },
									React.createElement(
										'label',
										{ className: 'control-label' },
										'App Name\uFF1A'
									),
									React.createElement('input', { type: 'text', ref: 'appName', className: 'form-control', id: 'appName' })
								),
								React.createElement(
									'button',
									{ type: 'button', className: 'btn btn-default', id: 'querySubmit', onClick: this.handleQuery },
									'Query'
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: 'handleQuery',
		value: function handleQuery(e) {
			console.log("e.target.id:" + e.target.id);
			var pageNum = 1;
			if ("querySubmit" == e.target.id) {
				pageNum = 1;
			} else {
				//由于react的版本兼容问题，新版本不能直接通过e.target.value获取a标签的value属性，需要通过e.target.getAttribute获取
				pageNum = parseInt(getEventValue(e));
				console.log("query pageNum:" + pageNum);
				this.setState({ c_pnum: pageNum });
			}

			var appName = this.refs.appName;
			var $this = this;
			var vPageNum = pageNum == 1 ? "" : pageNum;
			$.ajax({
				url: "/pubadmin-react/testdata/users" + vPageNum + ".json",
				type: "GET",
				data: { appName: appName.value, pageNum: pageNum },
				success: function success(data, status, xhr) {
					console.log("data:" + data);
					console.log("status:" + status);
					console.log(xhr.getResponseHeader("Content-Type"));
					$this.setState({ rows: data.rows, totalPage: data.totalPage, currentPage: pageNum });
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					{ className: 'page-header' },
					this.state.title
				),
				this.renderQueryForm(),
				React.createElement(DataList, { datatitle: this.state.datatitle, heads: this.state.heads, rows: this.state.rows, headkeyref: this.state.headkeyref }),
				React.createElement(FullPaging, { totalPage: this.state.totalPage, currentPage: this.state.currentPage, handleClick: this.handleQuery })
			);
		}
	}]);

	return Reports;
}(React.Component);