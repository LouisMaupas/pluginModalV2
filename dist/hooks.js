"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

/**
 * custom hook to toggle modal
 * @returns 
 */
const useModal = () => {
  // current state and a function to modify the state
  const [isDisplayed, setIsDisplayed] = (0, _react.useState)(false);
  /** use the function of the useState isShowing */

  function toggleModal() {
    setIsDisplayed(!isDisplayed);
  }

  return {
    isDisplayed,
    toggleModal
  };
};

var _default = useModal;
exports.default = _default;