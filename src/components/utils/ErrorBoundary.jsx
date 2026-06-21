import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container w-screen h-screen flex justify-center items-center text-svg-hover font-medium text-4xl">
                    <h1>Something went wrong!</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;