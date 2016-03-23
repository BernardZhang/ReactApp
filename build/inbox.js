webpackJsonp([4,2],{

/***/ 0:
/*!*******************!*\
  !*** multi inbox ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/baidu/Desktop/Demo/ReactApp/app/views/Inbox.jsx */226);


/***/ },

/***/ 162:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 163:
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

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
//# sourceMappingURL=inbox.js.map