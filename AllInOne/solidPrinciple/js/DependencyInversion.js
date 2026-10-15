// High-level modules should not depend on low-level modules. Both should depend on abstractions. 

// Bad Example:
// The App class depends directly on the Database class, which makes it difficult to change the data source.

class Database {
    getData() {
        // Fetch data from database
    }
}

class App {
    constructor() {
        this.database = new Database();
    }

    render() {
        this.database.getData();
    }
}

const app = new App();
app.render();


// Good Example:
// The App class depends on an abstraction (interface), making it easier to switch the data source.

class DataSource {
    getData() {
        throw new Error('Method not implemented');
    }
}

class Database extends DataSource {
    getData() {
        // Fetch data from database
    }
}

class API extends DataSource {
    getData() {
        // Fetch data from API
    }
}

class App {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    render() {
        this.dataSource.getData();
    }
}

const app = new App(new Database());
app.render();
