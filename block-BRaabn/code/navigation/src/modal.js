import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleModal = () => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };

  render() {
    return (
      <div>
        <div className="modal">
          <button class="btn" onClick={this.handleModal}>
            show modal
          </button>
          <div className={this.state.isActive ? "modal-overlay" : "hidden"}>
            <div className="modal-content">
              <h3>Modal Content</h3>
              <button className="close-modal-btn" onClick={this.handleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
