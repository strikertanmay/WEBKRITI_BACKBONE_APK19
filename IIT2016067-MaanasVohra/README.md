Participation for Backbone:

(1) Installation required: MySql, NodeJS
(2) Use the db.sql file to load the 'ambulance' database
(3) Load all node modules using : npm install
(3) Change the username and password in line 13 and 14 of index.js for the database access

Description:

All the API requests made till now are secure. i.e. A user won't be able to access the URLs(moderator
dashboard, moderator login page). A moderator won't be able to access the URLs(user dashboard, user login page)

Also only moderator has access to adding new ambulance, so that request can't be done by the user.

(1) Made a simple email login for user  [Task - 5]
Email: maanas@gmail.com
Password: maanas
url : http://localhost:3000/login/user

Authentication done using POST request to : http://localhost:3000/auth/user

(2) Made a simple email login for moderator  [Task - 6]
Email: admin@admin.com
Password: admin
url : http://localhost:3000/login/moderator

Authentication done using POST request to : http://localhost:3000/auth/moderator

(3) Made a registration system for the ambulance -> this can only be accessed by the moderator  [Task - 7]
We can only add and view the list of ambulances for now
url : http://localhost:3000/moderatorDashboard

URL for adding new ambulance : POST request to : http://localhost:3000/ambulances
URL for getting list of ambulances with details: GET request to : http://localhost:3000/ambulances

(4) Made a booking system for the user -> this can only be accessed by the user  [Task - 8]
We can only view the list of ambulances for now
url : http://localhost:3000/userDashboard

URL for getting list of ambulances with details : GET request to : http://localhost:3000/ambulances