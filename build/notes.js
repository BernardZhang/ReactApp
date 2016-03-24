webpackJsonp([7],{

/***/ 0:
/*!*******************!*\
  !*** multi notes ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/baidu/Desktop/Demo/ReactApp/app/components/Notes.jsx */234);


/***/ },

/***/ 171:
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

/***/ 234:
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
	
	var _Note = __webpack_require__(/*! ./Note.jsx */ 171);
	
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

/***/ }

});
//# sourceMappingURL=notes.js.map