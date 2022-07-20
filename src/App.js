import React from "react";
import useModal from "./lib/hooks";
import Modal from "./lib/ModalComponent";

export default function App() {

  // exemple of custom hook use case
  const { isDisplayed: exempleOfModalToDisplay, toggleModal: exempleOfModalTrigger } = useModal();

  return (
    <>
      <div className="App">

        {/* Exemple of button to display modal */}
        <button onClick={exempleOfModalTrigger}>
          Click here to display Modal 
        </button>

        {/* Exemple of Modal */}
        <Modal
          isShowing={exempleOfModalToDisplay}
          toggle={exempleOfModalTrigger}
        >
          Exemple of modal text content.
        </Modal>

      </div>
    </>
  );
}