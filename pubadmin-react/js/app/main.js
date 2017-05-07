"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main(props) {
		_classCallCheck(this, Main);

		var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

		_this.handleMenuClick = _this.handleMenuClick.bind(_this);
		_this.state = {
			menus: ["Overview", "Reports", "Analytics", "Exports"],
			menuref: { "Overview": "overview", "Reports": "reports", "Analytics": "analytics", "Exports": "exports" },
			currentpage: "overview"
		};
		return _this;
	}

	_createClass(Main, [{
		key: "handleMenuClick",
		value: function handleMenuClick(e) {
			console.log("do handleMenuClick...");
			console.log("e.target.id:" + e.target.id);
			var id = e.target.id;
			this.setState({ currentpage: id });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ id: "sidebar", className: "col-sm-3 col-md-2 sidebar" },
					React.createElement(SideBar, { menus: this.state.menus, menuref: this.state.menuref, handleClick: this.handleMenuClick })
				),
				React.createElement(
					"div",
					{ id: "mainbar", className: "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" },
					"overview" == this.state.currentpage ? React.createElement(Overview, null) : "",
					"reports" == this.state.currentpage ? React.createElement(Reports, null) : ""
				)
			);
		}
	}]);

	return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));