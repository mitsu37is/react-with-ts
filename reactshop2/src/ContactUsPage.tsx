import * as React from "react";
import ContactUs from "./ContactUs";
import { ISubmitResult, IValues } from "./Form";

interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

class ContactUsPage extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      reason: "",
      notes: ""
    };
  }

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit} />
      </div>
    );
  }

  private handleNameChange = (name: string) => {
    this.setState({ name });
  };
  private handleEmailChange = (email: string) => {
    this.setState({ email });
  };
  private handleReasonChange = (reason: string) => {
    this.setState({ reason });
  };
  private handleNotesChange = (notes: string) => {
    this.setState({ notes });
  };

  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    const wait = (ms: number): Promise<void> => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    await wait(1000); // simulate asynchronous web API call
    return {
      success: true
    };
  };
}

export default ContactUsPage;
