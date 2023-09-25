import {useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        // Initialize form validation
        const form = document.getElementById("contact-form");
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        });
    }, []);

    return (
        <>
            <div className="container">
                <h1>Contact</h1>
                <form id="contact-form" noValidate>
                    {/* Add the "noValidate" attribute to prevent browser validation */}
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide your name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="emailAddress">
                            Email Address
                        </label>
                        <input
                            className="form-control"
                            id="emailAddress"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide a valid email address.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input
                            className="form-control"
                            id="phoneNumber"
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />
                        <div className="invalid-feedback">
                            Please provide your phone number.
                        </div>
                    </div>

                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">Form submission successful!</div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">
                            Error sending message!
                        </div>
                    </div>

                    <div className="d-grid">
                        <button
                            className="btn btn-primary btn-lg"
                            id="submitButton"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
