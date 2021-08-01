CREATE TABLE super_admin_list(
    id SERIAL PRIMARY KEY,                                                                                                                                                                                         
    user_name VARCHAR(50) UNIQUE NOT NULL,                                                                                                                                                                         
    password VARCHAR(50) NOT NULL,                                                                                                                                                                                 
    created_at TIMESTAMPTZ NOT NULL DEFAULT Now()                                                                                                                                                                          
);

CREATE TABLE admin_list(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE NOT NULL, 
    password VARCHAR(50) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT Now() 
);

CREATE TABLE user_list(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE NOT NULL, 
    password VARCHAR(50) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT Now() 
);

CREATE TABLE property_list(
    id SERIAL PRIMARY KEY,
    property_name VARCHAR(50) UNIQUE NOT NULL, 
    added_by INT NOT NULL,
    FOREIGN KEY (added_by)
        REFERENCES super_admin_list (id),
    is_active BOOLEAN NOT NULL DEFAULT TRUE, 
    property_owner INT NOT NULL, 
    FOREIGN KEY (property_owner)
        REFERENCES admin_list (id),
    approved_by_owner BOOLEAN NOT NULL DEFAULT FALSE, 
    property_buyer INT DEFAULT NULL,
    FOREIGN KEY (property_buyer)
        REFERENCES user_list (id),
    availability BOOLEAN NOT NULL DEFAULT TRUE
);