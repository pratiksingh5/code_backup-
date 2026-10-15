// Bad Example:
// The LinkButton class breaks the expected behavior of the Button class by rendering an anchor tag instead of a button.

class Button extends React.Component {
    render() {
        return <button>{this.props.label}</button>;
    }
}

class LinkButton extends Button {
    render() {
        return <a>{this.props.label}</a>;
    }
}


// Good Example:
// We make the component flexible by allowing the caller to specify the element type.

class Button extends React.Component {
    render() {
        const Component = this.props.as || 'button';
        return <Component>{this.props.label}</Component>;
    }
}

// Usage
<Button label="Click me" as="a" />
<Button label="Click me" />
