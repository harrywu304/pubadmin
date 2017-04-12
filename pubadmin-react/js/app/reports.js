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
			rows: []
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
									{ type: 'button', className: 'btn btn-default', id: 'select', onClick: this.handleQuery },
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
			var appName = this.refs.appName;
			console.log("e.target.value:" + e.target.value);
			console.log("e.target.id:" + e.target.id);

			var $this = this;
			$.get("/pubadmin-react/testdata/users.json", function (data, status) {
				console.log("data:" + data);
				console.log("status:" + status);
				if ("success" === status) {
					$this.setState({ rows: data });
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
				React.createElement(DataList, { datatitle: this.state.datatitle, heads: this.state.heads, rows: this.state.rows, headkeyref: this.state.headkeyref })
			);
		}
	}]);

	return Reports;
}(React.Component);