import { useState } from "react";

/**
 * custom hook to toggle modal
 * @returns 
 */
const useModal = () => {
  // current state and a function to modify the state
  const [isDisplayed, setIsDisplayed] = useState(false);

  /** use the function of the useState isShowing */
  function toggleModal() {
    setIsDisplayed(!isDisplayed);
  }

  return {
    isDisplayed,
    toggleModal
  };
};

export default useModal;