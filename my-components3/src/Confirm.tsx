import * as React from "react";
import "./Confirm.css";

interface IProps {
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
}

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay"
  };

  public render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel">
              {this.props.cancelCaption}
            </button>
            <button className="confirm-ok">{this.props.okCaption}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
