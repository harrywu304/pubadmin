'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overview = function (_React$Component) {
	_inherits(Overview, _React$Component);

	function Overview(props) {
		_classCallCheck(this, Overview);

		var _this = _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).call(this, props));

		_this.state = {
			title: 'Overview',
			datatitle: 'Data List',
			heads: ["#", "Name", "Age", "Sex", "City"],
			headkeyref: { "#": "id", "Name": "header1", "Sex": "header2", "Age": "header3", "City": "header4" },
			rows: []
		};
		return _this;
	}

	_createClass(Overview, [{
		key: 'renderGraph',
		value: function renderGraph() {
			return React.createElement(
				'div',
				{ id: 'graph', className: 'row placeholders' },
				React.createElement(
					'div',
					{ className: 'col-xs-6 col-sm-3 placeholder' },
					React.createElement('img', { src: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==', width: '200', height: '200', className: 'img-responsive', alt: 'Generic placeholder thumbnail' }),
					React.createElement(
						'h4',
						null,
						'Label'
					),
					React.createElement(
						'span',
						{ className: 'text-muted' },
						'Something else'
					)
				),
				React.createElement(
					'div',
					{ className: 'col-xs-6 col-sm-3 placeholder' },
					React.createElement('img', { src: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==', width: '200', height: '200', className: 'img-responsive', alt: 'Generic placeholder thumbnail' }),
					React.createElement(
						'h4',
						null,
						'Label'
					),
					React.createElement(
						'span',
						{ className: 'text-muted' },
						'Something else'
					)
				),
				React.createElement(
					'div',
					{ className: 'col-xs-6 col-sm-3 placeholder' },
					React.createElement('img', { src: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==', width: '200', height: '200', className: 'img-responsive', alt: 'Generic placeholder thumbnail' }),
					React.createElement(
						'h4',
						null,
						'Label'
					),
					React.createElement(
						'span',
						{ className: 'text-muted' },
						'Something else'
					)
				),
				React.createElement(
					'div',
					{ className: 'col-xs-6 col-sm-3 placeholder' },
					React.createElement('img', { src: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==', width: '200', height: '200', className: 'img-responsive', alt: 'Generic placeholder thumbnail' }),
					React.createElement(
						'h4',
						null,
						'Label'
					),
					React.createElement(
						'span',
						{ className: 'text-muted' },
						'Something else'
					)
				)
			);
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
				this.renderGraph(),
				React.createElement(DataList, { datatitle: this.state.datatitle, heads: this.state.heads, rows: this.state.rows, headkeyref: this.state.headkeyref })
			);
		}
	}]);

	return Overview;
}(React.Component);

ReactDOM.render(React.createElement(Overview, null), document.getElementById('mainbar'));