# Property Managemnt App

## To Run The App

### Local CLI
- make sure `npm` is installed 
- `npm start` in CLI root directory to start the app
- go to `localhost:3000` in your browser

### CodeSandbox

- [Generated at time of writing this readme](https://jqj85.csb.app/)

### Vercel Deployment

- [Property Manegement App](https://property-management-app.vercel.app/dashboard)

## App Usage

### Login Page

- supersuer login:
    - username: `superuser0`
    - password: `0000`

### Super Admin Dashboard 

*Note*
- create atleast one owner and one user to explore the app 
- create atleast one property to explore the app 

**Logout Button**
- click the logout button under the greeting to go to the logout page
- confirm logout or cancel in the logut 

**Table of Users**
- set user active or inactive

**Add User**
- create new property owners 
- create new users (buyers)
- each new user must have password for login
- the type of each user must be set to either owner or user

**Table of Properties**
- add new properties to app 
- set property active or inactive
- properties can be approved later by logged in owners 

**Add Property**
- enter property name
- set owner from drop down
- set price of property

### Owner Dashboard

- use owner login that you created in the superadmin dashboard 

**Logout Button**
- click the logout button under the greeting to go to the logout page
- confirm logout or cancel in the logut 


**Properies Table**
- lists all the properties added for the logged in owner 
- owner may approve or unapprove property

### User Dashboard 

**Properties For Sale Table**
- listing of all the approved properties available for sale
- buyer clicks Buy button to buy property

**My Properties Section**
- Buy button adds property to My Properties section 



