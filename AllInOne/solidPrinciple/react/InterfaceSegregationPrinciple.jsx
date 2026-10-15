// The User component requires all props (onChange, onSave, onDelete), even if some are not used.   

function User({ user, onChange, onSave, onDelete }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={onChange}>Change</button>
            <button onClick={onSave}>Save</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}


// Good Example:
// We split the functionality into smaller components so each one only requires the props it needs.

function User({ user, onChange }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={onChange}>Change</button>
        </div>
    );
}

function UserSave({ onSave }) {
    return <button onClick={onSave}>Save</button>;
}

function UserDelete({ onDelete }) {
    return <button onClick={onDelete}>Delete</button>;
}

// Usage
<User user={user} onChange={handleChange} />
<UserSave onSave={handleSave} />
<UserDelete onDelete={handleDelete} />
