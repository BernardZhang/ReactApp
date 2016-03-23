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
	            mindmap: {}
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
	                            name: 'node111'
	                        }, {
	                            id: '112',
	                            name: 'node112'
	                        }]
	                    }]
	                }
	            });
	            debugger;
	            console.log('about componentDidMount');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            debugger;
	            console.log('about render', this.state.mindmap);
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    this.state.title
	                ),
	                _react2.default.createElement(_Mindmap2.default, { data: this.state.mindmap })
	            );
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
	
	var _NodeList = __webpack_require__(/*! ./NodeList */ 165);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mindmap = function (_React$Component) {
	    _inherits(Mindmap, _React$Component);
	
	    function Mindmap(props) {
	        _classCallCheck(this, Mindmap);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Mindmap).call(this, props));
	    }
	
	    _createClass(Mindmap, [{
	        key: 'render',
	        value: function render() {
	            var rootNode = this.props.data;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'mindmap' },
	                _react2.default.createElement(_Node2.default, { isRoot: true, data: rootNode, expand: true }),
	                _react2.default.createElement(_NodeList2.default, { nodes: rootNode.children, level: 1 })
	            );
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
	            var node = this.props.data;
	            var isRoot = !!this.props.isRoot;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'node' + (isRoot ? ' node_root' : ''), 'node-id': this.props.id },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'node__text' },
	                    node.name
	                ),
	                this.getToggleBtn(node, this.state.expand)
	            );
	        }
	    }, {
	        key: 'getToggleBtn',
	        value: function getToggleBtn(node, expand) {
	            if (node.children && node.children.length) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: 'toggle-btn' },
	                    expand ? '-' : '+'
	                );
	            }
	
	            return '';
	        }
	    }, {
	        key: 'toggleExpand',
	        value: function toggleExpand(isExpand) {
	            var isExpand = false;
	
	            if (typeof isExpand === 'undefined') {
	                isExpand = !this.state.expand;
	            } else {
	                isExpand = !!isExpand;
	            }
	
	            this.setState({
	                expand: isExpand
	            });
	
	            return this;
	        }
	    }]);
	
	    return Node;
	}(_react2.default.Component);
	
	exports.default = Node;

/***/ },

/***/ 165:
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
	            var nodes = this.props.nodes;
	
	            if (nodes && nodes.length) {
	                var level = this.props.level;
	                var nodeList = nodes.map(function (node) {
	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'children__item', key: node.id },
	                        _react2.default.createElement(_Node2.default, { data: node, expand: true }),
	                        _react2.default.createElement(NodeList, { nodes: node.children, level: level + 1 })
	                    );
	                }, this);
	
	                return _react2.default.createElement(
	                    'ol',
	                    { className: 'children level-' + level },
	                    nodeList
	                );
	            }
	
	            return null;
	        }
	    }]);
	
	    return NodeList;
	}(_react2.default.Component);
	
	exports.default = NodeList;

/***/ }

});
//# sourceMappingURL=about.js.map