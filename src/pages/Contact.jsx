import React, { Component } from "react";
import FormData from "../components/FormData";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbytzFNRLexNlOAbwciPVmrWn6xdh-5qwmi_biYuRH4HC0X_p9SaP9rhFmf1kelyeT8/exec";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { name: "", email: "", message: "" },
      status: "",
      loading: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state.formData;
    this.setState({ status: "" });

    if (!name || !email || !message) {
      this.setState({ status: "❌ Please fill in all fields." });
      return;
    }

    this.setState({ loading: true });
    try {
      const form = new window.FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("message", message);

      const response = await fetch(WEB_APP_URL, { method: "POST", body: form });
      const text = await response.text();
      console.log("Response from Google Apps Script:", text);
      const result = JSON.parse(text);

      if (result.success) {
        this.setState({
          status: "✅ Message sent successfully!",
          formData: { name: "", email: "", message: "" },
        });
      } else {
        this.setState({
          status: "❌ Failed to send: " + (result.message || "Unknown error"),
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      this.setState({
        status: "❌ Failed to send message. Please try again later.",
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { formData, status, loading } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-400  flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-gray-500 bg-opacity-90 rounded-2xl shadow-2xl p-10 space-y-8">
          <div className="text-center" >
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 tracking-tight drop-shadow-sm">
              CampusForage
            </h1>
            <p className="text-gray-900 text-lg font-medium">
              Reach out to our team—your future begins here!
            </p>
          </div>
          <form onSubmit={this.handleSubmit} className="space-y-6">
            <FormData formData={formData} handleChange={this.handleChange} />
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:from-indigo-700 hover:via-purple-700 hover:to-blue-600 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && (
            <div
              className={`mt-2 text-center text-base font-semibold ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
