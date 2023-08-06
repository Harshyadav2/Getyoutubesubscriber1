# Youtube-Subscribers-Backend
The given problem statement was to create a Backend API to get YouTube Subscriber data for a Mongodb database, 
as per the problem statement we have to create a backend api which will send the response in form of JSON, by using modular coding approach which contains having different files for the api connection, the database should be handled by another file & all the route should be on app.js file
Furthermore addition to this we created the files for 3 different GET routes & for their Controller which will help in the scaling of this application to big scale

Deployement link
LIVE LINK  - https://getyoutubesubscriber.onrender.com

Routes ->>
✅GET [http://localhost:3000/subscribers] - Response with an array of subscribers(an Object)
✅GET [http://localhost:3000/subscribers/names] - Response with an array of subscribers(an Object with only two fields name and subscribedChannel)
✅GET [http://localhost:3000/subscribers/:id] - Response with a subscriber*(an object)* with given id

✅& Response with status code 400 and Error message({message: error.message}) if id does not match

#Introduction
A backend project which includes specific routes in the URL .
User can do the following as below:
access the number of subscribers,
access subscribers by specific IDs and names,
add subscribers, &
delete subscibers

#Used in this project:
Mongoose
Express
MongoDB (Atlas and Compass)
Raw data
Path module to join index.html
Postman || Insomnia
nodemon
dotenv

Step 1
Install npm dependencies of express and mongoose using " npm install " command.

Step 2
Using MongoDB local (Compass) as well as MongoDB Cloud (Atlas), depends on you which you want to use Just uncomment and comment the codes vice versa in createDatabase.js and index.js

note : To demonstrate I am using deployed project over the render
Start the backend server using nodemon or node index.js command.

Step 3

GET http://localhost:3000/ 
GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local or MongoDB cloud database.

GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local or MongoDB cloud database.

GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local or MongoDB cloud database.
GET http://localhost:3000/invalid → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.

YOUTUBE VIDEO LINK - https://youtu.be/B3piQfo_o4E
