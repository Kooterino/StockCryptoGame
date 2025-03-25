CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    balance REAL DEFAULT 5000.00,
    admin BOOLEAN DEFAULT 0
);

CREATE TABLE stocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    symbol TEXT UNIQUE NOT NULL,
    price REAL NOT NULL
);

CREATE TABLE user_stocks (
    user_id INTEGER,
    stock_id INTEGER,
    quantity INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (stock_id) REFERENCES stocks(id)
);