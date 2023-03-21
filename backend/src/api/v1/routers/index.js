const Router = require('express').Router();

//------- Start to import the require controllers -------------------X
const AuthControllers = require('../controllers/AuthControllers');
const filesControllers = require('../controllers/FilesControllers');
const UsersControllers = require('../controllers/UsersControllers');

//--------Start to import the middlewares ---------------------X
const FetchUser = require('../middlewares/FetchUser'); // middlewares can used to get the all contents of the login users
const Upload = require('../middlewares/UploadFile'); // Uploading the files

//-----Creating the authentications apis------------X
Router.post('/auth/register',AuthControllers().Register); //Register the user after checking the authentication,using POST '/api/auth/register'
Router.post('/auth/login',AuthControllers().Login); // Login the register user after checking the authentication,using POST '/api/auth/login'
Router.get('/auth/getUser',FetchUser,AuthControllers().getUser); // Get the all details of theLogin user,using GET '/api/auth/getUser'

//------------- Creating the file uploading modal -----------X
Router.get('/files/fetch',filesControllers().Fetch) //Fetching the contents by the users
Router.post('/files/add',Upload.single('myfile'),filesControllers().Add) //Adding the contents by the users
Router.patch('/files/update/:_id',Upload.single('myfile'),filesControllers().Update) //Updating the content by the users, using '/api/courses/update/:_id'
Router.delete('/files/delete/:_id',filesControllers().Delete) // Deleting the courses by the mentors, using DELETE '/api/courses/delete/:_id'

//------ Searching the content by the farmers -------------X
Router.get('/files/search',UsersControllers().Lands); //Finding the lands

module.exports = Router