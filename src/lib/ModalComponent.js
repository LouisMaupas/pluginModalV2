import React from "react";
// https://reactjs.org/docs/portals.html
import ReactDOM from "react-dom";
import styled from "styled-components";
import close from "./icon-close.svg";

const Backgroud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,
Wrapper = styled.div`
  height: 75px;
  width: 500px;
  background-color: white;
  border: solid 1px black;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  justify-content: center;
`,
ImgBox = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  & :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const Modal = ({ isShowing, toggle, ...props }) =>
  isShowing
  // createPortal() allow to display a component in the DOM outside of its parent component.
    ? ReactDOM.createPortal(
        <>
          <Backgroud onClick={toggle}>
            <Wrapper>
              <div className="modal">
                <div className="modal-header">
                  <ImgBox>
                  <img 
                  src={close}
                    type="button"
                    className="modal-close-button"
                    onClick={toggle}
                    alt="close button"
                  />
                  </ImgBox>
                </div>
                <div className="modal-body">{props.children}</div>
              </div>
            </Wrapper>
          </Backgroud>

     
        </>,
        document.body
      )
    : null;


export default Modal;