// Bad Example:

// In this example, the UserProfile component is responsible for both rendering the user profile and handling the settings change logic, which includes saving to the database. This violates the SRP.


function UserProfile({ user }) {
    const saveToDatabase = (user) => {
        // Save user to database
        console.log("User saved to database");
    };

    const changeSettings = (settings) => {
        user.settings = settings;
        saveToDatabase(user);
    };

    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={() => changeSettings({ theme: 'dark' })}>Change Settings</button>
        </div>
    );
}

const user = { name: 'John', settings: {} };
<UserProfile user={user} />;


// Good Example:
// We separate the responsibilities into UserProfile for rendering and a handler function passed as a prop to handle settings change logic.

function UserProfile({ user, onSettingsChange }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={() => onSettingsChange({ theme: 'dark' })}>Change Settings</button>
        </div>
    );
}

function App() {
    const user = { name: 'John', settings: {} };

    const changeSettings = (settings) => {
        user.settings = settings;
        saveToDatabase(user);
    };

    const saveToDatabase = (user) => {
        // Save user to database
        console.log("User saved to database");
    };

    return <UserProfile user={user} onSettingsChange={changeSettings} />;
}
