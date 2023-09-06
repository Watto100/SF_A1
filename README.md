# Assessment 1:

## Git: (https://github.com/Watto100/SF_A1.git)
The application was uploaded into a public GitHub repository. The program files were tracked using git. The files were added to the git and committed with messages describing the changes. The GitHub repository was the origin for the git. All committed changes were pushed into the GitHub repository. The home page of the repository has the application folder and a README file. The file is used to document the application and is written in mark down format. In the application folder there is the ‘Server’ folder which has the files for the backend, and there is the ‘src’ folder which contains the angular files.

## Data structures:
The data was stored locally for the first part of the assignment. The data was stored in two JSON files. The user had an id, name, email, password, and role. The id was the user’s username or unique identifier. The user’s role indicated their access in the application. The different roles were admin, user and banned. The admin role was able to create and ban users and had all the same access as normal users. The user role has access to the groups that they have access to and their profile. The banned role is not able to login to the application.
The second data set is the group JSON file. Groups have a name, list of channels, admins and members. The name of the group is how it is identified. The group’s list of channels are all the chat channels that the group has. The admins are all the group admins who oversee the group, where all user admins are a group admin to every group. The group members are all users who have access to the group.

## Rest API’s:
The api’s are how the angular application communicates with the server.
-	GET groups:
This API is used to send the group JSON file from the server to the angular group component. The angular component will use the object to list all the groups and their respective channels. The component will only show the groups that the user has access to. If the user is a group admin the user will be able to modify the group with functionality that is hidden to none group admins.
-	GET users:
This API is used to send all the users to the userlisting angular component. The component will use the information so that the component will list all the users on the page with all their details.
-	POST login: 
This API is used to send the inputted username and password from the login form to the server. The server will compare the posted data to the user JSON data to determine if the user has the correct credentials. The API will return whether the credentials are correct. The server will also ensure that the user is not banned.
-	POST ban user:
This API will send the selected user id to the server where the server will modify the user’s role in the JSON file indicating that the user is banned.
-	POST add user: 
This API will send all the information need to create a user to the server where the server will add the user to the JSON file.
-	POST make user admin:
This API sends the selected user’s id to the serve so that the server can change the user’s role to an admin.
-	POST delete group:
This API sends the selected group’s name to the server so that the server can delete the group from the JSON file.
-	POST make group admin:
This API sends the selected user id to the server so that the server can add the user to the admins list.
-	POST add group member:
This API sends the selected user id to the server so that the server can add the user to the members list.
-	POST add group channel:
This API sends a string of the new channel’s name and the selected group to the serve so that the server can add the channel to the correct group.


## Angular Architecture:

### Components:

**App:** 

The app component is responsible for routing, it will route all the other components. The app component will have a navigation bar so that the user can easily navigate the application.

**Register:**

The register component is responsible for creating new users. The typescript file will use a form to validate registration. The page will also have a router link to the login page. If the user is successfully registered the component will tell the user, they are successful and navigate them to the login page.

**User Listing:**

The user listing component is only accessible by the user admins. This page gives a list of all the users their data. The admin will be able to ban users and change their role.

**Group Page:**

This component will show all the different groups and their channels. Users will only be able to see groups that they are a member of. The component will also have functionality for admins. Admins can create new channels for the selected groups and can delete the groups. admins can also add users to groups.

**Login:**

This component is used to log users in. If users are successfully logged in their session token will be locally saved. This page will also have a router link to the register component.


### Services:

**Auth service:**

This service is used to authorise the users to use the application. It uses APIs to authorise users. It lets the user login and register. 

**Auth guard:**

This service is used to ensure that users have the appropriate role in order to access sensitive functions.


### Modules

**App module:**

This module is used to import all the required functionality such as the ‘HttpClientModule’. It is also used to import all the components of the application to declare them. This ensures that all the components have access to all the functionalities.

**Material module:**

This module is used to import angular material functionality. A separate file was used to declutter the main app module. This module imports different modules from angular materials to add functionality to the application. The app module imports this module so that all the components have access.

## Further Notes
The app currently does not work because the client end was not able to use the JSON files. If the application could read the JSON file the login and registration should work.
