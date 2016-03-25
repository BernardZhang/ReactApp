webpackJsonp([0],{

/***/ 0:
/*!*******************!*\
  !*** multi about ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/baidu/Desktop/Demo/ReactApp/app/views/About.jsx */1);


/***/ },

/***/ 1:
/*!*****************************!*\
  !*** ./app/views/About.jsx ***!
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
	
	var _Mindmap = __webpack_require__(/*! ../components/mindmap/Mindmap */ 159);
	
	var _Mindmap2 = _interopRequireDefault(_Mindmap);
	
	var _Dialog = __webpack_require__(/*! ../components/dialog/Dialog */ 167);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _Note = __webpack_require__(/*! ../components/Note */ 171);
	
	var _Note2 = _interopRequireDefault(_Note);
	
	var _Drag = __webpack_require__(/*! ../components/Drag */ 170);
	
	var _Drag2 = _interopRequireDefault(_Drag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_React$Component) {
	    _inherits(About, _React$Component);
	
	    function About(props) {
	        _classCallCheck(this, About);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));
	
	        console.log('About constructor', props);
	        _this.state = {
	            title: 'About',
	            mindmap: {},
	            editDialog: {
	                open: false,
	                title: '',
	                content: ''
	            }
	        };
	        return _this;
	    }
	
	    // getInitialState() {
	    //     console.log('About getInitialState', arguments);
	    // }
	
	    _createClass(About, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setState({
	                mindmap: {
	                    id: '1',
	                    name: 'node1',
	                    children: [{
	                        id: '11',
	                        name: 'node11',
	                        children: [{
	                            id: '111',
	                            name: 'node111',
	                            children: [{
	                                id: '1111',
	                                name: 'node-1111',
	                                children: [{
	                                    id: '11111',
	                                    name: 'node-11111'
	                                }]
	                            }]
	                        }, {
	                            id: '112',
	                            name: 'node112'
	                        }]
	                    }]
	                }
	            });
	            console.log('about componentDidMount');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log('About render');
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    this.state.title
	                ),
	                _react2.default.createElement(_Mindmap2.default, {
	                    data: this.state.mindmap,
	                    singleSelection: true,
	                    expand: true,
	                    expandLevel: 2,
	                    onSelect: this.onSelect.bind(this),
	                    onEdit: this.onEdit,
	                    onAdd: this.onAdd,
	                    onDelete: this.onDelete }),
	                this.state.editDialog.open ? _react2.default.createElement(_Dialog2.default, { data: this.state.editDialog,
	                    onClose: this.onCloseDilog.bind(this),
	                    open: this.state.editDialog.open }) : '',
	                _react2.default.createElement(_Drag2.default, null),
	                '}'
	            );
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(node) {
	            // throw {
	            //     msg: 'error'
	            // };
	            this.setState({
	                mindmap: this.state.mindmap,
	                editDialog: {
	                    open: true,
	                    title: node.id,
	                    content: _react2.default.createElement(_Note2.default, { task: node.name })
	                }
	            });
	            // alert('after error');
	        }
	    }, {
	        key: 'onEdit',
	        value: function onEdit(node) {
	            console.log(node);
	        }
	    }, {
	        key: 'onAdd',
	        value: function onAdd(node) {
	            console.log(node);
	        }
	    }, {
	        key: 'onDelete',
	        value: function onDelete(node) {
	            console.log(node);
	        }
	    }, {
	        key: 'onCloseDilog',
	        value: function onCloseDilog() {
	            this.setState({
	                editDialog: {
	                    open: false
	                }
	            });
	        }
	    }]);
	
	    return About;
	}(_react2.default.Component);
	
	exports.default = About;

/***/ },

/***/ 159:
/*!********************************************!*\
  !*** ./app/components/mindmap/Mindmap.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	__webpack_require__(/*! ./mindmap.less */ 160);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Node = __webpack_require__(/*! ./Node */ 164);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _NodeList = __webpack_require__(/*! ./NodeList */ 166);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mindmap = function (_React$Component) {
	    _inherits(Mindmap, _React$Component);
	
	    function Mindmap(props) {
	        _classCallCheck(this, Mindmap);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mindmap).call(this, props));
	
	        _this.state = {
	            expand: _this.props.expand
	        };
	        return _this;
	    }
	
	    _createClass(Mindmap, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var data = _props.data;
	            var expand = _props.expand;
	            var expandLevel = _props.expandLevel;
	            var onSelect = _props.onSelect;
	            var onMouseup = _props.onMouseup;
	            var onEdit = _props.onEdit;
	            var onAdd = _props.onAdd;
	            var onDelete = _props.onDelete;
	
	            var level = 1;
	
	            expand = typeof data.expand !== 'undefined' ? !!data.expand : this.state.expand;
	            if (typeof expandLevel !== 'undefined') {
	                expand = expand && level < expandLevel;
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'mindmap' },
	                _react2.default.createElement(_Node2.default, { isRoot: true, data: data,
	                    expand: expand,
	                    expandLevel: expandLevel,
	                    onSelect: this.onSelect.bind(this, data),
	                    onEdit: onEdit,
	                    onAdd: onAdd,
	                    onDelete: onDelete }),
	                _react2.default.createElement(_NodeList2.default, { nodes: data.children,
	                    level: level,
	                    expand: expand,
	                    expandLevel: expandLevel,
	                    onSelect: this.onSelect.bind(this),
	                    onEdit: onEdit,
	                    onAdd: onAdd,
	                    onDelete: onDelete })
	            );
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(node) {
	            this.setActiveNode(node);
	            if (typeof this.props.onSelect === 'function') {
	                this.props.onSelect(node);
	            }
	        }
	    }, {
	        key: 'toggleExpand',
	        value: function toggleExpand(isExpand, node) {
	            this.setState({
	                expand: isExpand
	            });
	        }
	    }, {
	        key: 'setActiveNode',
	        value: function setActiveNode(node) {
	            if (this.props.singleSelection && this.activeNode) {
	                this.activeNode.active = false;
	            }
	            node.active = true;
	            this.activeNode = node;
	            return this;
	        }
	    }, {
	        key: 'getActiveNode',
	        value: function getActiveNode() {
	            return this.activeNode;
	        }
	    }]);
	
	    return Mindmap;
	}(_react2.default.Component);
	
	exports.default = Mindmap;

/***/ },

/***/ 160:
/*!*********************************************!*\
  !*** ./app/components/mindmap/mindmap.less ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./mindmap.less */ 161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./mindmap.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./mindmap.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 161:
/*!****************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./app/components/mindmap/mindmap.less ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 162)();
	// imports
	
	
	// module
	exports.push([module.id, ".mindmap {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  white-space: nowrap;\n  color: #494846;\n  overflow: auto;\n  font-size: 14px;\n}\n.mindmap:before {\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  width: 0;\n}\n.mindmap .node {\n  position: relative;\n  display: inline-block;\n  line-height: 24px;\n  vertical-align: middle;\n  border: 1px solid #f38951;\n  padding: 0px 10px 0px 10px;\n  margin: 4px 0;\n  background: #fef7e7;\n  border-radius: 40px;\n  text-align: left;\n  cursor: pointer;\n  transition: all .2s;\n  direction: ltr;\n}\n.mindmap .node__text {\n  display: inline-block;\n  margin-right: 10px;\n}\n.mindmap .toggle-btn {\n  position: absolute;\n  display: inline-block;\n  line-height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  border: solid 1px #f38951;\n  color: #f38951;\n  text-align: center;\n  font-size: 12px;\n  margin-left: 15px;\n  top: 5px;\n  z-index: 100;\n  /*background-color: #ffffff;*/\n  right: 3px;\n}\n.mindmap .hasScore {\n  background-color: #d0d0d0;\n  color: #ffffff;\n}\n.mindmap .node:hover {\n  box-shadow: 0 0 3px 0 #3498DB;\n}\n.mindmap .node_warning {\n  background-color: #f35551;\n  border: 1px solid #f35551;\n  color: #fff;\n}\n.mindmap .node_warning .toggle-btn {\n  color: #494846;\n}\n.mindmap .node_active {\n  background-color: #f9a801;\n  border: 1px solid #f9a801;\n  color: #fff;\n}\n.mindmap li.node_subitems_active ol .node {\n  background-color: #f9a801;\n  border: 1px solid #f9a801;\n  color: #fff;\n}\n.mindmap .node_active .toggle-btn {\n  border: 1px solid #ffffff;\n}\n.mindmap .node_active .toggle-btn {\n  color: white;\n}\n.mindmap .children {\n  position: relative;\n  list-style: none;\n  margin: 0;\n  text-align: left;\n  padding: 0 0 0 6px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.mindmap .children:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -4px;\n  width: 10px;\n  border-top: 1px solid #f9a801;\n}\n.mindmap .children__item {\n  position: relative;\n  padding: 0 0 0 10px;\n  border-left: 1px solid #f9a801;\n}\n.mindmap .children__item:first-child,\n.mindmap .children__item:last-child {\n  border-left: 1px solid transparent;\n}\n.mindmap .children__item:before {\n  content: '';\n  width: 10px;\n  border-top: 1px solid #f9a801;\n  position: absolute;\n  top: 50%;\n  left: 0;\n}\n.mindmap .children__item:first-child:before {\n  left: -1px;\n  bottom: 0;\n  border-radius: 4px 0 0 0;\n  border-left: 1px solid #f9a801;\n}\n.mindmap .children__item:last-child:before {\n  left: -1px;\n  top: 0;\n  bottom: 50%;\n  border-radius: 0 0 0 4px;\n  border: 0;\n  border-left: 1px solid #f9a801;\n  border-bottom: 1px solid #f9a801;\n}\n.mindmap .children__item:first-child:last-child:before {\n  top: 50%;\n  bottom: auto;\n  border: 0;\n  border-radius: 0;\n  border-top: 1px solid #f9a801;\n}\n@keyframes shan {\n  from {\n    border: 1px solid green;\n  }\n  to {\n    border: 1px solid #ff0000;\n  }\n}\n@-moz-keyframes shan {\n  from {\n    border: 1px solid green;\n  }\n  to {\n    border: 1px solid #ff0000;\n  }\n}\n.node__text {\n  /*  animation: shan 1s;\n    -moz-animation: shan 1s;    \n    -webkit-animation: shan 1s;\n    -o-animation: shan 1s;*/\n}\n/***********************  dimension tree 子菜单***************/\n#tree-menu {\n  background-color: #F0F0F0;\n  position: absolute;\n  width: 80px;\n  border: solid 1px #ADADAD;\n  z-index: 2000;\n}\n#tree-menu ul {\n  margin: 0px;\n  display: block;\n  list-style: none;\n}\n#tree-menu ul li {\n  padding-left: 10px;\n  line-height: 20px;\n}\n#tree-menu ul li:hover {\n  background-color: #66b3e9;\n  color: #fff;\n  cursor: pointer;\n}\n", ""]);
	
	// exports


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

/***/ 164:
/*!*****************************************!*\
  !*** ./app/components/mindmap/Node.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 165);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Node = function (_React$Component) {
	    _inherits(Node, _React$Component);
	
	    function Node(props) {
	        _classCallCheck(this, Node);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));
	
	        _this.state = {
	            expand: _this.props.expand
	        };
	        return _this;
	    }
	
	    _createClass(Node, [{
	        key: 'render',
	        value: function render() {
	            var isRoot = !!this.props.isRoot;
	            var _props = this.props;
	            var data = _props.data;
	            var onSelect = _props.onSelect;
	            var onEdit = _props.onEdit;
	            var onAdd = _props.onAdd;
	            var onDelete = _props.onDelete;
	
	            var that = this;
	            var getClassName = function getClassName(node, isRoot) {
	                var className = ['node'];
	
	                if (isRoot) {
	                    className.push('node_root');
	                }
	
	                if (node.active) {
	                    className.push('node_active');
	                }
	
	                return className.join(' ');
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { className: getClassName(data, isRoot), 'node-id': this.props.id },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'node__text',
	                        onClick: this.onSelect.bind(this, data) },
	                    data.name
	                ),
	                this.getToggleBtn(data, this.state.expand)
	            );
	        }
	    }, {
	        key: 'getToggleBtn',
	        value: function getToggleBtn(node, expand) {
	            if (node.children && node.children.length) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: 'toggle-btn', onClick: this.toggleExpand.bind(this, !expand, node) },
	                    expand ? '-' : '+'
	                );
	            }
	
	            return '';
	        }
	    }, {
	        key: 'toggleExpand',
	        value: function toggleExpand(isExpand, node) {
	            node.expand = isExpand;
	            this.setState({
	                expand: isExpand
	            });
	            var nodeList = _reactDom2.default.findDOMNode(this).nextElementSibling;
	
	            if (nodeList) {
	                nodeList.style.cssText += 'display: ' + (isExpand ? 'inline-block' : 'none');
	            }
	
	            if (typeof this.props.toggleExpand === 'function') {
	                this.props.toggleExpand(isExpand, node);
	            }
	
	            return this;
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(node) {
	            node.active = true;
	            if (typeof this.props.onSelect === 'function') {
	                this.props.onSelect(node);
	            }
	        }
	    }]);
	
	    return Node;
	}(_react2.default.Component);
	
	exports.default = Node;

/***/ },

/***/ 166:
/*!*********************************************!*\
  !*** ./app/components/mindmap/NodeList.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 165);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Node = __webpack_require__(/*! ./Node */ 164);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NodeList = function (_React$Component) {
	    _inherits(NodeList, _React$Component);
	
	    function NodeList(props) {
	        _classCallCheck(this, NodeList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NodeList).call(this, props));
	    }
	
	    _createClass(NodeList, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var nodes = _props.nodes;
	            var expand = _props.expand;
	            var level = _props.level;
	            var expandLevel = _props.expandLevel;
	            var onSelect = _props.onSelect;
	            var onEdit = _props.onEdit;
	            var onAdd = _props.onAdd;
	            var onDelete = _props.onDelete;
	
	            if (nodes && nodes.length) {
	                var nodeList = nodes.map(function (node) {
	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'children__item', key: node.id },
	                        _react2.default.createElement(_Node2.default, {
	                            data: node,
	                            expand: _this2.isExpand(node),
	                            onSelect: onSelect,
	                            onEdit: onEdit.bind(null, node),
	                            onAdd: onAdd.bind(null, node),
	                            onDelete: onDelete.bind(null, node) }),
	                        _react2.default.createElement(NodeList, {
	                            nodes: node.children,
	                            expand: _this2.isExpand(node),
	                            expandLevel: expandLevel,
	                            level: level + 1,
	                            onSelect: onSelect,
	                            onEdit: onEdit.bind(null, node),
	                            onAdd: onAdd.bind(null, node),
	                            onDelete: onDelete.bind(null, node) })
	                    );
	                }, this);
	                var style = {
	                    display: expand ? 'inline-block' : 'none'
	                };
	                console.log('display: ' + style.display);
	
	                return _react2.default.createElement(
	                    'ol',
	                    { className: 'children level-' + level, style: style },
	                    nodeList
	                );
	            }
	
	            return null;
	        }
	    }, {
	        key: 'toggleExpand',
	        value: function toggleExpand(expand, node) {
	            var nodeList = _reactDom2.default.findDOMNode(this);
	            node.expand = expand;
	            if (typeof this.props.toggleExpand === 'function') {
	                this.props.toggleExpand(expand, node);
	            }
	        }
	    }, {
	        key: 'isExpand',
	        value: function isExpand(node) {
	            var _props2 = this.props;
	            var expand = _props2.expand;
	            var level = _props2.level;
	            var expandLevel = _props2.expandLevel;
	
	            var isExpand = typeof node.expand !== 'undefined' ? !!node.expand : expand;
	
	            if (typeof expandLevel !== 'undefined') {
	                isExpand = isExpand && level < expandLevel;
	            }
	
	            return isExpand;
	        }
	    }]);
	
	    return NodeList;
	}(_react2.default.Component);
	
	exports.default = NodeList;

/***/ },

/***/ 167:
/*!******************************************!*\
  !*** ./app/components/dialog/Dialog.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	__webpack_require__(/*! ./dialog.less */ 168);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Drag2 = __webpack_require__(/*! ../Drag */ 170);
	
	var _Drag3 = _interopRequireDefault(_Drag2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dialog = function (_Drag) {
	    _inherits(Dialog, _Drag);
	
	    function Dialog(props) {
	        _classCallCheck(this, Dialog);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));
	    }
	
	    _createClass(Dialog, [{
	        key: 'render',
	        value: function render() {
	            var open = this.props.open;
	            var _props = this.props;
	            var data = _props.data;
	            var open = _props.open;
	            var onClose = _props.onClose;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'dialog-mask animated' + (open ? ' fadeIn' : ' fadeOut'), ref: 'dialog' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'dialog', ref: 'target' },
	                    _react2.default.createElement(
	                        'div',
	                        { ref: 'drag', className: 'dialog-header' },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            data.title
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'close-icon', onClick: this.onClose.bind(this) },
	                            'x'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'dialog-body' },
	                        data.content
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'dialog-footer' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'button', onClick: this.onConfirm.bind(this) },
	                            data.confirmText || '确定'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'button', onClick: this.onCancel.bind(this) },
	                            data.cancelText || '取消'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.refs.dialog) {
	                this.drag(this.refs.drag, this.refs.target);
	                console.log(':) drag', this.refs.drag, this.refs.target);
	                this.drag(this.refs.drag, this.refs.target);
	                this.refs.dialog.addEventListener('animationend', this.animationDone.bind(this), false);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            console.log('will did update');
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.refs.dialog) {
	                this.refs.dialog.removeEventListener('animationend', this.animationDone.bind(this), false);
	            }
	        }
	    }, {
	        key: 'animationDone',
	        value: function animationDone() {
	            console.log(':) animationDone');
	            this.refs.dialog.style.cssText += 'display: ' + (this.props.open ? 'block' : 'none');
	        }
	    }, {
	        key: 'onDrag',
	        value: function onDrag() {
	            console.log('onDrag', arguments);
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose() {
	            this.close();
	        }
	    }, {
	        key: 'onConfirm',
	        value: function onConfirm() {
	            this.close();
	        }
	    }, {
	        key: 'onCancel',
	        value: function onCancel() {
	            this.close();
	        }
	    }, {
	        key: 'close',
	        value: function close() {
	            this.props.onClose && this.props.onClose();
	        }
	    }]);
	
	    return Dialog;
	}( /*React.Component*/_Drag3.default);
	
	exports.default = Dialog;

/***/ },

/***/ 168:
/*!*******************************************!*\
  !*** ./app/components/dialog/dialog.less ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/less-loader!./dialog.less */ 169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./dialog.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./dialog.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 169:
/*!**************************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./app/components/dialog/dialog.less ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 162)();
	// imports
	
	
	// module
	exports.push([module.id, ".dialog-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n  top: 0;\n  left: 0;\n  z-index: 9999;\n}\n.dialog {\n  position: absolute;\n  width: 40%;\n  height: auto;\n  z-index: 999;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border: 1px solid lightgreen;\n  border-radius: 5px;\n}\n.dialog-header {\n  background-color: lightgreen;\n  height: 40px;\n  position: relative;\n  cursor: move;\n  color: #fff;\n  line-height: 40px;\n  padding: 0 10px;\n}\n.dialog-header h3 {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n}\n.close-icon {\n  font-size: 28px;\n  width: 40px;\n  height: 100%;\n  color: #fff;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  line-height: 40px;\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n}\n.dialog-body {\n  padding: 20px;\n  background-color: #fff;\n}\n.dialog-footer {\n  background-color: lightgreen;\n  height: 50px;\n  line-height: 50px;\n  text-align: right;\n}\n.button {\n  border-radius: 2px;\n  background-color: #fff;\n  height: 30px;\n  line-height: 30px;\n  display: inline-block;\n  padding: 0 10px;\n  margin: 0 8px;\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 170:
/*!*********************************!*\
  !*** ./app/components/Drag.jsx ***!
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
	
	var Drag = function (_React$Component) {
	    _inherits(Drag, _React$Component);
	
	    function Drag(props) {
	        _classCallCheck(this, Drag);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Drag).call(this, props));
	    }
	
	    _createClass(Drag, [{
	        key: 'render',
	        value: function render() {
	            var style = {
	                position: 'absolute',
	                left: 0,
	                top: 0,
	                background: 'yellow',
	                border: '1px solid green',
	                padding: '20px',
	                width: '40%'
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { ref: 'target', style: style },
	                _react2.default.createElement(
	                    'h3',
	                    { ref: 'drag' },
	                    'Drag me'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Moving...... Moving...... Moving...... Moving...... Moving...... Moving......'
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.drag(this.refs.drag, this.refs.target);
	        }
	    }, {
	        key: 'drag',
	        value: function drag(target, moveElement) {
	            var isMousedown = false;
	            var pos = [];
	            var isTouch = 'ontouchstart' in document;
	            console.log(':) isTouch' + isTouch);
	            var EVENTS = {
	                MOUSEDOWN: isTouch ? 'touchstart' : 'mousedown',
	                MOUSEMOVE: isTouch ? 'touchmove' : 'mousemove',
	                MOUSEUP: isTouch ? 'touchend' : 'mouseup'
	            };
	            var getPosition = function getPosition(e) {
	                return 'ontouchstart' in document ? e.touches[0] : e;
	            };
	
	            var mousedownHandle = function mousedownHandle(e) {
	                e.preventDefault();
	                console.log(':) mousedownHandle');
	                isMousedown = true;
	                console.log(e);
	                var posObj = getPosition(e);
	                pos = [posObj.pageX, posObj.pageY];
	                document.addEventListener(EVENTS.MOUSEMOVE, mousemoveHandle, false);
	                document.addEventListener(EVENTS.MOUSEUP, mouseupHandle, false);
	            };
	            var mousemoveHandle = function mousemoveHandle(e) {
	                e.preventDefault();
	                if (isMousedown) {
	                    var posObj = getPosition(e);
	                    var distance = [posObj.pageX - pos[0], posObj.pageY - pos[1]];
	                    var style = window.getComputedStyle(moveElement);
	                    var rectBox = moveElement.getBoundingClientRect();
	                    var offset = [parseFloat(style.left), parseFloat(style.top)];
	                    // var offset = [rectBox.left, rectBox.top];
	                    var translate = {
	                        x: offset[0] - rectBox.left,
	                        y: offset[1] - rectBox.top
	                    };
	                    console.log(translate);
	                    var left = offset[0] + distance[0];
	                    var top = offset[1] + distance[1];
	
	                    if (left <= translate.x) {
	                        left = translate.x;
	                        console.log(left);
	                    }
	
	                    if (left > window.innerWidth - rectBox.width + translate.x) {
	                        left = window.innerWidth - rectBox.width + translate.x;
	                        console.log('left:' + left);
	                    }
	
	                    if (top <= translate.y) {
	                        top = translate.y;
	                    }
	
	                    if (top > window.innerHeight - rectBox.height + translate.y) {
	                        top = window.innerHeight - rectBox.height + translate.y;
	                    }
	
	                    // left = Math.max(left, 0);
	                    // left = Math.min(left, window.innerWidth - rectBox.width);
	
	                    // top = Math.max(top, 0);
	                    // top = Math.min(top, window.innerHeight - rectBox.height);
	
	                    moveElement.style.left = left + 'px';
	                    moveElement.style.top = top + 'px';
	                    pos = [posObj.pageX, posObj.pageY];
	                    console.log(':) mousemoveHandle', distance, offset, [left, top]);
	                }
	            };
	            var mouseupHandle = function mouseupHandle(e) {
	                e.preventDefault();
	                console.log(': mouseupHandle');
	                isMousedown = false;
	                document.removeEventListener(EVENTS.MOUSEMOVE, mousemoveHandle);
	                document.removeEventListener(EVENTS.MOUSEUP, mouseupHandle);
	            };
	            target.addEventListener(EVENTS.MOUSEDOWN, mousedownHandle, false);
	            // document.addEventListener(EVENTS.MOUSEMOVE, mousemoveHandle, false);
	            // document.addEventListener(EVENTS.MOUSEUP, mouseupHandle, false);
	            // document.addEventListener('mouseup', mouseupHandle, false);
	        }
	    }]);
	
	    return Drag;
	}(_react2.default.Component);
	
	exports.default = Drag;

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

/***/ }

});
//# sourceMappingURL=about.js.map