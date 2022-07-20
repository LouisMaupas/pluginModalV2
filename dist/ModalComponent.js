"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconClose = _interopRequireDefault(require("./icon-close.svg"));

var _excluded = ["isShowing", "toggle"];

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backgroud = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n"]))),
    Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 75px;\n  width: 500px;\n  background-color: white;\n  border: solid 1px black;\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1001;\n  display: flex;\n  justify-content: center;\n"]))),
    ImgBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 0.5rem;\n  & :hover {\n    cursor: pointer;\n    transform: scale(1.5);\n  }\n"])));

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
      toggle = _ref.toggle,
      props = _objectWithoutProperties(_ref, _excluded);

  return isShowing // createPortal() allow to display a component in the DOM outside of its parent component.
  ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Backgroud, {
    onClick: toggle
  }, /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement(ImgBox, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconClose.default,
    type: "button",
    className: "modal-close-button",
    onClick: toggle,
    alt: "close button"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children))))), document.body) : null;
};

var _default = Modal;
exports.default = _default;