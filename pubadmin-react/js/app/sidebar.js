"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.state = {
      currentpage: "overview"
    };
    return _this;
  }

  _createClass(SideBar, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.setState({ currentpage: e.target.id });
      window.location = "http://127.0.0.1:8020/pubadmin-react/dashboard2.html" + "?view=" + e.target.id;
      //this.props.handleClick(e);
    }
  }, {
    key: "render",
    value: function render() {
      var menus = this.props.menus;
      var menuref = this.props.menuref;
      var handleClick = this.handleClick;
      var currentpage = this.state.currentpage;

      return React.createElement(
        "ul",
        { className: "nav nav-sidebar" },
        menus.map(function (menu, index) {
          var menuid = menuref[menu];
          return React.createElement(
            "li",
            { key: menuid, className: currentpage == menuid ? "active" : "" },
            React.createElement(
              "a",
              { href: "#", id: menuid, onClick: handleClick },
              menu
            )
          );
        })
      );
    }
  }]);

  return SideBar;
}(React.Component);

var menus = ["Overview", "Reports", "Analytics", "Exports"];
var menuref = { "Overview": "overview", "Reports": "reports", "Analytics": "analytics", "Exports": "exports" };

ReactDOM.render(React.createElement(SideBar, { menus: menus, menuref: menuref }), document.getElementById('sidebar'));