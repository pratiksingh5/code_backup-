// Single Responsibility Principle

// "A class should have only one reason to change" 

// A class should have only one reason to change, meaning it should have only one job or responsibility. 

// Bad Example
// In this example, the Cricketer class is responsible for both managing the cricketer's stats and displaying the stats. This violates the SRP because it has more than one responsibility.

class UserSettings {
    constructor(user) {
        this.user = user;
    }
    
    changeSettings(settings) {
        this.user.settings = settings;
        this.saveToDatabase(this.user);
    }
    
    saveToDatabase(user) {
        // Save user to database
    }
}

// Good Example
// Here, we have separated the responsibilities into two classes: UserSettings is responsible for changing settings, and UserDatabase is responsible for saving the user to the database. This adheres to the SRP.

class UserSettings {
    constructor(user) {
        this.user = user;
    }
    
    changeSettings(settings) {
        this.user.settings = settings;
    }
}

class UserDatabase {
    saveToDatabase(user) {
        // Save user to database
    }
}

const userSettings = new UserSettings(user);
userSettings.changeSettings(settings);

const userDatabase = new UserDatabase();
userDatabase.saveToDatabase(user);
