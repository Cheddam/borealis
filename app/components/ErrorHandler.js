import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="application-error">
                    <h3>Something went wrong when loading your dynamic component.</h3>
                    <p><em>"{this.state.error}"</em></p>
                    <p>Check the console for more details.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorHandler;