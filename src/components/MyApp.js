var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @const {String}
var firstName = "Jeremy";
// @const {String}
var lastName = "Heminger";
/** 
 * 
 * */

var MyApp = function (_React$Component) {
	_inherits(MyApp, _React$Component);

	//
	function MyApp() {
		_classCallCheck(this, MyApp);

		// {Object}
		var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this));

		_this.state = {
			todos: ToDoData
			// {Object}
		};_this.updateState = _this.updateState.bind(_this);
		return _this;
	}
	/** 
  * @param {Number}
  * */


	_createClass(MyApp, [{
		key: "updateState",
		value: function updateState(id) {
			/*
   this.setState(prevState => {
   	return {
   		count: (prevState.count + 1)
   	}
   })
   */
			this.setState(function (prevState) {
				var updatedTodos = prevState.todos.map(function (todo) {
					if (todo.id === id) {
						todo.completed = !todo.completed;
					}
					return todo;
				});
				return {
					todos: updatedTodos
				};
			});
		}
		/** 
   * 
   * */

	}, {
		key: "render",
		value: function render() {
			var ToDoComponent = buildToDoComponent(this.updateState);
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { firstName: firstName, lastName: lastName }),
				ToDoComponent
			);
		}
	}]);

	return MyApp;
}(React.Component);