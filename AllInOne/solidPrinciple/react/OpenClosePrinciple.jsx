// Bad Example:
// Here, if we want to add a new button type, we need to modify the Button component, which violates the OCP.

function Button({ type, label }) {
    if (type === 'primary') {
        return <button className="btn btn-primary">{label}</button>;
    } else if (type === 'secondary') {
        return <button className="btn btn-secondary">{label}</button>;
    }
    return <button className="btn">{label}</button>;
}


// Good Example:
// By using composition, we can add new button types without modifying the existing Button component.

function Button({ className, label }) {
    return <button className={`btn ${className}`}>{label}</button>;
}

const PrimaryButton = (props) => <Button className="btn-primary" {...props} />;
const SecondaryButton = (props) => <Button className="btn-secondary" {...props} />;

// Usage
<PrimaryButton label="Primary" />
<SecondaryButton label="Secondary" />
