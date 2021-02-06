import React from "react";
import Notification from "./Notification";

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: false,
      success: false,
      error: false,
      warning: false,
      info: false,
    };
  }
  handleClick = (type) => {
    this.setState({
      [type]: !this.state[type],
    });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("default")}>
          {this.state.default ? "Hide" : "Show"} default
        </button>
        {/* success */}
        <button onClick={() => this.handleClick("success")}>
          {this.state.success ? "Hide" : "Show"} success
        </button>
        {/* error */}
        <button onClick={() => this.handleClick("error")}>
          {this.state.error ? "Hide" : "Show"} error
        </button>
        {/* warning */}
        <button onClick={() => this.handleClick("warning")}>
          {this.state.warning ? "Hide" : "Show"} warning
        </button>
        {/* info */}
        <button onClick={() => this.handleClick("info")}>
          {this.state.info ? "Hide" : "Show"} info
        </button>
        <div className="notification-list">
          {this.state.default ? (
            <Notification
              type="default"
              content="default notification"
              handleClick={() => this.handleClick("default")}
            />
          ) : null}
          {this.state.success ? (
            <Notification
              type="success"
              content="success notification"
              handleClick={() => this.handleClick("success")}
            />
          ) : null}
          {this.state.error ? (
            <Notification
              type="error"
              content="error notification"
              handleClick={() => this.handleClick("error")}
            />
          ) : null}
          {this.state.warning ? (
            <Notification
              type="warning"
              content="warning notification"
              handleClick={() => this.handleClick("warning")}
            />
          ) : null}
          {this.state.info ? (
            <Notification
              type="info"
              content="info notification"
              handleClick={() => this.handleClick("info")}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default NotificationList;
