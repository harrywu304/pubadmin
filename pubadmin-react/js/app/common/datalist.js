"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataList = function (_React$Component) {
	_inherits(DataList, _React$Component);

	function DataList() {
		_classCallCheck(this, DataList);

		return _possibleConstructorReturn(this, (DataList.__proto__ || Object.getPrototypeOf(DataList)).apply(this, arguments));
	}

	_createClass(DataList, [{
		key: "render",
		value: function render() {
			var datatitle = this.props.datatitle;
			var renderDataRow = this.props.renderDataRow;
			var heads = this.props.heads;
			var headkeyref = this.props.headkeyref;
			var rows = this.props.rows;

			return React.createElement(
				"div",
				null,
				datatitle != undefined ? React.createElement(
					"h2",
					{ className: "sub-header" },
					datatitle
				) : "",
				React.createElement(
					"div",
					{ id: "data_table", className: "table-responsive" },
					React.createElement(DataTable, { heads: heads, rows: this.props.rows, renderDataRow: renderDataRow, headkeyref: headkeyref })
				)
			);
		}
	}]);

	return DataList;
}(React.Component);

var DataTable = function (_React$Component2) {
	_inherits(DataTable, _React$Component2);

	function DataTable() {
		_classCallCheck(this, DataTable);

		return _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).apply(this, arguments));
	}

	_createClass(DataTable, [{
		key: "autoRenderRow",
		value: function autoRenderRow(row, rowkeys, index) {
			return React.createElement(
				"tr",
				{ key: index },
				React.Children.map(rowkeys, function (rowkey) {
					return React.createElement(
						"td",
						null,
						row[rowkey]
					);
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			var heads = this.props.heads;
			var rows = this.props.rows;
			var renderDataRow = this.props.renderDataRow;
			var headkeyref = this.props.headkeyref;
			var rowkeys = headkeyref != undefined ? heads.map(function (key) {
				return headkeyref[key];
			}) : [];
			var autoRenderRow = this.autoRenderRow;

			return React.createElement(
				"table",
				{ className: "table table-striped" },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.Children.map(heads, function (head) {
							return React.createElement(
								"th",
								null,
								head
							);
						})
					)
				),
				React.createElement(
					"tbody",
					null,
					rows.map(function (row, index) {
						return renderDataRow != undefined ? renderDataRow(row, index) : autoRenderRow(row, rowkeys, index);
					})
				)
			);
		}
	}]);

	return DataTable;
}(React.Component);