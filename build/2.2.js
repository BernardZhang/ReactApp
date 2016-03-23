webpackJsonp([2],{

/***/ 226:
/*!*****************************!*\
  !*** ./app/views/Inbox.jsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Notes = __webpack_require__(/*! ../components/Notes */ 227);
	
	var _Notes2 = _interopRequireDefault(_Notes);
	
	var _Cube = __webpack_require__(/*! ../components/cube/Cube */ 229);
	
	var _Cube2 = _interopRequireDefault(_Cube);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import uuid from 'node-uuid';
	
	var Inbox = function (_React$Component) {
		_inherits(Inbox, _React$Component);
	
		function Inbox(props) {
			var _arguments = arguments;
	
			_classCallCheck(this, Inbox);
	
			debugger;
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Inbox).call(this, props));
	
			_this.onEdit = function (id, task) {
				if (task === '') {
					return;
				}
				console.log('Inbox: onEdit', _arguments, _this);
				var notes = _this.state.notes.map(function (note) {
					if (note.id === id) {
						note.task = task;
					}
	
					return note;
				});
				_this.setState({ notes: notes });
			};
	
			_this.onDelete = function (id) {
				console.log('Inbox: onDelete', _arguments, _this);
				_this.setState({
					notes: _this.state.notes.filter(function (note) {
						return note.id !== id;
					})
				});
			};
	
			_this.addNote = function (e) {
				_this.setState({
					notes: [].concat(_toConsumableArray(_this.state.notes), [{
						id: _this.state.notes.length + 1,
						task: 'New Task'
					}])
				});
			};
	
			console.log(_this.props);
			_this.state = {
				notes: [{
					id: 1,
					task: 'Learn React'
				}, {
					id: 2,
					task: 'Learn Webpack'
				}]
			};
			return _this;
		}
	
		_createClass(Inbox, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						'Inbox'
					),
					_react2.default.createElement(
						'button',
						{ onClick: this.addNote },
						'+'
					),
					_react2.default.createElement(_Notes2.default, { notes: this.state.notes, onEdit: this.onEdit, onDelete: this.onDelete }),
					_react2.default.createElement(_Cube2.default, null)
				);
			}
		}]);
	
		return Inbox;
	}(_react2.default.Component);
	
	exports.default = Inbox;

/***/ },

/***/ 227:
/*!**********************************!*\
  !*** ./app/components/Notes.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Note = __webpack_require__(/*! ./Note.jsx */ 228);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	    var notes = _ref.notes;
	    var onEdit = _ref.onEdit;
	    var onDelete = _ref.onDelete;
	
	    return _react2.default.createElement(
	        'ul',
	        null,
	        notes.map(function (note) {
	            return _react2.default.createElement(
	                'li',
	                { key: note.id },
	                _react2.default.createElement(_Note2.default, {
	                    task: note.task,
	                    onEdit: onEdit.bind(null, note.id),
	                    onDelete: onDelete.bind(null, note.id) })
	            );
	        })
	    );
	};

/***/ },

/***/ 228:
/*!*********************************!*\
  !*** ./app/components/Note.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Note = function (_React$Component) {
		_inherits(Note, _React$Component);
	
		function Note(props) {
			_classCallCheck(this, Note);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Note).call(this, props));
	
			_this.renderNote = function () {
				return _react2.default.createElement(
					'div',
					{ onClick: _this.edit },
					_react2.default.createElement(
						'span',
						null,
						_this.props.task
					),
					_this.props.onDelete ? _this.renderDelete() : null
				);
			};
	
			_this.renderEdit = function () {
				return _react2.default.createElement('input', { type: 'text',
					autoFocus: true,
					placeholder: _this.props.task,
					onBlur: _this.finishEdit,
					onKeyPress: _this.checkEnter });
			};
	
			_this.renderDelete = function () {
				return _react2.default.createElement(
					'button',
					{ onClick: _this.props.onDelete },
					'x'
				);
			};
	
			_this.edit = function () {
				_this.setState({
					editing: true
				});
			};
	
			_this.checkEnter = function (e) {
				debugger;
				if (e.key === 'Enter') {
					_this.finishEdit(e);
				}
			};
	
			_this.finishEdit = function (e) {
				debugger;
				if (_this.props.onEdit) {
					_this.props.onEdit(e.target.value);
				}
	
				_this.setState({
					editing: false
				});
			};
	
			_this.state = {
				editing: false
			};
			return _this;
		}
	
		_createClass(Note, [{
			key: 'render',
			value: function render() {
				if (this.state.editing) {
					return this.renderEdit();
				}
	
				return this.renderNote();
			}
		}]);
	
		return Note;
	}(_react2.default.Component);
	
	exports.default = Note;

/***/ },

/***/ 229:
/*!**************************************!*\
  !*** ./app/components/cube/Cube.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(/*! ./cube.less */ 230);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cube = function (_React$Component) {
	    _inherits(Cube, _React$Component);
	
	    function Cube(props) {
	        _classCallCheck(this, Cube);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Cube).call(this, props));
	    }
	
	    _createClass(Cube, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'cube-container' },
	                _react2.default.createElement('div', { className: 'edge up' }),
	                _react2.default.createElement('div', { className: 'edge down' }),
	                _react2.default.createElement('div', { className: 'edge front' }),
	                _react2.default.createElement('div', { className: 'edge back' }),
	                _react2.default.createElement('div', { className: 'edge left' }),
	                _react2.default.createElement('div', { className: 'edge right' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'edge center' },
	                    'Hello Cube'
	                )
	            );
	        }
	    }]);
	
	    return Cube;
	}(_react2.default.Component);
	
	exports.default = Cube;

/***/ },

/***/ 230:
/*!***************************************!*\
  !*** ./app/components/cube/cube.less ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./cube.less */ 231);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./cube.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./cube.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 231:
/*!**********************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./app/components/cube/cube.less ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 162)();
	// imports
	
	
	// module
	exports.push([module.id, ".cube-container {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  top: 0;\n  margin: auto;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(45deg) rotateY(45deg);\n  transform: rotateX(45deg) rotateY(45deg);\n  -webkit-animation: cube-rotate linear infinite;\n  animation: cube-rotate 6s linear infinite;\n}\n.cube-container .edge {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: 2px 2px 10px #fff inset;\n  background: radial-gradient(transparent 30%, rgba(50, 255, 212, 0.3) 100%);\n}\n.edge.up {\n  -webkit-transform: translate3d(0, -50%, 0) rotateX(90deg) rotateY(0);\n  transform: translate3d(0, -50%, 0) rotateX(90deg) rotateY(0);\n}\n.edge.down {\n  -webkit-transform: translate3d(0, 50%, 0) rotateX(90deg) rotateY(0);\n  transform: translate3d(0, 50%, 0) rotateX(90deg) rotateY(0);\n}\n.edge.front {\n  -webkit-transform: translate3d(0, 0, -50%) rotateX(0) rotateY(0);\n  transform: translate3d(0, 0, -50%) rotateX(0) rotateY(0);\n}\n.edge.back {\n  -webkit-transform: translate3d(0, 0, 50%) rotateX(0) rotateY(0);\n  transform: translate3d(0, 0, 50%) rotateX(0) rotateY(0);\n}\n.edge.left {\n  -webkit-transform: translate3d(-50%, 0, 0) rotateX(0) rotateY(90deg);\n  transform: translate3d(-50%, 0, 0) rotateX(0) rotateY(90deg);\n}\n.edge.right {\n  -webkit-transform: translate3d(50%, 0, 0) rotateX(0) rotateY(90deg);\n  transform: translate3d(50%, 0, 0) rotateX(0) rotateY(90deg);\n}\n.edge.center {\n  text-align: center;\n  line-height: 200px;\n  background: radial-gradient(transparent 30%, rgba(255, 255, 255, 0.3) 100%);\n}\n@-webkit-keyframes cube-rotate {\n  from {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateX(360deg) rotateY(360deg);\n    transform: rotateX(360deg) rotateY(360deg);\n  }\n}\n@keyframes cube-rotate {\n  from {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateX(360deg) rotateY(360deg);\n    transform: rotateX(360deg) rotateY(360deg);\n  }\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=2.2.js.map