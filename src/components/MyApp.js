var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** 
 *
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
			todos: ToDoData,
			isLoading: true
			// {Object}
		};_this.updateState = _this.updateState.bind(_this);
		return _this;
	}

	// ----- LIFECYCLE

	/** 
  * @deprecated 16.3
  * */


	_createClass(MyApp, [{
		key: "componentWillMount",
		value: function componentWillMount() {}
		/** 
   * a ready state handler
   * */

	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				_this2.setState({
					isLoading: false
				});
			}, 1500);
		}
		/** 
   * check if the props received has changed
   * @param {Object}
   * @deprecated 16.3
   * 
  componentWillReceiveProps(nextProps) {
  	}*/
		/** 
   * should component re-render
   * @return {Boolean}
   * */

	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			return true;
		}
		/** 
   * clean-up code before component disappears
   * */

	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {}
		/** 
   * @deprecated 16.3
   * 
  componentWillUpdate() {
  	}*/
		/** 
   * create backup of current state
   * https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
   * @returns {Object}
   * */
		//getSnapshotBeforeUpdate() {

		//}
		/** 
   * return the new, updated state based on the props
   * https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
   * @warning https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
   * @static
   * @param {Object}
   * @param {Object}
   * @returns {Object}
   * */
		//static getDerivedStateFromProps(props, state) {
		//	return {}
		//}
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
				ToDoComponent,
				React.createElement(Loading, { isLoading: this.state.isLoading })
			);
		}

		// ----- START MY METHODS

		/** 
   * @param {Number}
   * */

	}, {
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
	}]);

	return MyApp;
}(React.Component);