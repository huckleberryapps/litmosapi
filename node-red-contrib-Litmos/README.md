node-red-contrib-Litmos
================

Node-RED node for Litmos



## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-Litmos, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-Litmos

## Usage

### Methods

#### POST /users

Creates a new user profile in your organisation. By default, no emails will be sent when the user is created. To have an email sent to the user when they are created, the following query string parameter needs to be added to the request: &sendmessage=true. 

Note: By default all new users that you create will be prompted to change their password the first time they login. If you are using the single sign-on approach then this may not be desirable. To stop this from happening you need to set the SkipFirstLogin field to true. By default it is assumed that a username will be a valid email address. If you want to use a non-email address as username you must also set the IsCustomUsername property to true.

Note: You will need to use the same order listed below to update the information. Do not change the order of items or the PUT or POST request will not update/create the users. You can either use the short body or the full body for the request.

Access Level: Account Owners Only

    source : string
    format : string
    Content-Type : string
    Body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users

Returns a list of people in your organisation including active and inactive people. By default only the first 100 people are returned. The list can be filtered on first or last name and paged using the optional paging parameters.

To page through users add "&limit=####" to the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/users?source=MY-APP&limit=1000

 To retrieve only active users, add the parameter "&showInactive=false" to the end of the request.

GET https://api.litmos.com/v1.svc/users?source=MY-APP&showInactive=false

Access Level: Account Owners Only

    format : string
    source : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{username}

Returns user data with a matching username in the string. AccessLevel: Account Owners Only

    source : string
    format : string
    apikey : string
    username : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /users/{user_id}

Update a single user profile in your organisation.  The user Id in the uri must match the Id specified in the request body. AccessLevel: Account Owners Only

    source : string
    Content-Type : string
    Body : 
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}

Returns a single user profile for the given user Id. AccessLevel: Account Owners Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /users/{user_id}

Delete a single user profile in your organisation.  The user will be deleted completely from the system.

Note: Please be careful with the use of this function as once the user is deleted from the system there is no way to recover the user.

Access Level: Account Owners Only

    source : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/details

Returns a detailed list of people in your organisation including active and inactive people. By default only the first 100 people are returned. The list can be filtered on first or last name, paged using the optional paging parameters, and created date.

To return users with a Created Date after a specific date add "&since=YYYY-MM-DD" to the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/users/details?source=MY-APP&since=2015-12-09

Access Level: Account Owners Only

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /users/{user_id}/usercustomfields

Post a list of Advanced User Custom Fields set up in Account Settings> Litmos Features > Custom Fields > User Custom Fields in your organisation per user.

Access Level: Account Owners Only

    source : string
    fromat : string
    Content-Type : string
    Body : 
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/usercustomfields

Returns a list of Advanced User Custom Fields set up in Account Settings > Litmos Features > Custom Fields > User Custom Fields in your organisation per user.

Access Level: Account Owners Only

    source : string
    Content-Type : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /bulkimports

We recommend the "/bulkimports?" endpoint for situations where you need to create or update multiple users via the API. 

Access Level: Account Owners, Administrators, Team Admin and Team Leaders

This endpoint only works for creating/updating users at this time, both use the POST request using XML or JSON formats. The bulk import runs the same process as the bulk import functionality available within the UI. 

Please Note: The <Team> and <Course> fields require the use of the TeamCodeForBulkImport and CourseCodeForBulkImport respectively. These codes can be located in the UI on the Team and Course settings page, otherwise they are available via the API GET /Teams? and GET /Courses? endpoints. 

Company Name cannot be longer than 100 characters.

Querystring parameters:

&sendmessage=[true/false] set true if you want to send login emails

&skipfirstlogin=[true/false] set to true if you want to skipfirstlogin

&format=json for json format

    source : string
    format : string
    sendmessage : boolean
    Content-Type : string
    Body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /bulkimports

Retrieves a list of the User Bulk Import files processed for an organization (latest 1000).

Access Level: Account Owners and Administrators

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /[Id]

Retrieves a specific User Bulk Import.

Access Level: Account Owners and Administrators

    source : string
    Format : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /

Marks people in your organisation complete for a module in your account.  Only one call can be made at a time.  

A common use of this API call is to mark a module complete when a user completes a function outside of Litmos.   This call can be used along with and Embeded module and choosing to uncheck the "Complete the module when opened/ viewed". 

Access Level: Account Owners Only

Important Note: Attempt values can only be upserted for embed and link module types. Attempt values for other module types are created generically by the system.

     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses

Get a list of all courses within your organisation.

Note:

OriginalId can be used as part of a single sign in process to take a user straight into a particular course.

ForSale indicates if the course has been marked for sale via the Litmos UI

Access Level: Account Owners Only

    source : string
    format : string
    limit : integer
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}

Get a single course's details within your organisation.

    source : string
    format : string
    apikey : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /users/{user_id}/courses

Assign a list of courses to a User. 

If any courses already exist in the team or if the course ids are invalid they will be ignored. Emails will be sent notifying the user of the course assignment providing they have previously logged into their account. It is possible to disable sending course invitation emails by adding the following querystring parameter to the end of the uri : &sendmessage=false.

Access level: Administrators Only

    source : string
    sendmessage : boolean
    Content-Type : string
    Body : 
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/courses

Get a list of courses currently assigned to a User and the current status of each course.

The results fields explained

Complete Indicates if the user has completed this course.
PercentageComplete The number of modules the user has completed expressed as percentage.
AssignedDate The date the user was assigned the course.
StartDate The date the user started the course.
DateCompleted Indicates the date the user completed this course.
UpToDate Indicates if the course has changed since the user completed it.


Access Level: Account Owners Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/users

Get a list of all users assigned to a course.

Access Level: Account Owners Only

    source : string
    format : string
    apikey : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules

Get a list of all modules under a course.

Access Level: Account Owners only

    source : string
    format : string
    apikey : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/courses/{course_id}

Get course results and module results for a User.

Access level: Administrators only

    source : string
    format : string
    apikey : string
    user_id : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /users/{user_id}/courses/{course_id}

Unassign courses from a user, one request per course.

Access Level: Trainers Only

    source : string
    apikey : string
    user_id : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /results/details

Get a list of all results for all Users and the current status of each course since a specific date.  In this call, the ‘since’ parameter is required and will fail if it is not present. It will also allow a ‘limit’ parameter of up to 1000 records to keep the record set controlled. The call will fail if the limit parameter is greater than 1000. Use the paging parameters built into the API if there are more than 1000 records returned. 

To return course results that have changed since a specific date, use the "&since=YYYY-MM-DD" parameter on the end of the request.  For example:  

GET https://api.litmos.com/v1.svc/results/details?source=MY-APP&since=2015-12-09

Access level:  Administrators only

    source : string
    since : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /users/{user_id}/courses/{course_id}/reset

Reset the course results for a specific user

Access Level: Administrators Only

    source : string
    apikey : string
    user_id : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /coursecustomfields

Lists all Course Custom Field Labels.

Access Level: Administrators Only

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/coursecustomfields

Retrieve the custom field values for a specific Course. 

Access Level: Account Owners Only

    source : string
    apikey : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /learningpaths

Returns a list of learning paths

Access Level: Account Owners and Administrators

    source : string
    format : string
    Content-Type : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /users/{user_id}/learningpaths

Assigns a list of Users to a Learning Path.

Access Level: Account Owners & Administrators

    source : string
    includesubteams : boolean
    Content-Type : string
    Body : 
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/learningpaths

Returns a List of Learning Paths Assigned to a User.

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /learningpaths/{lp_id}

Returns a Single Learning Path

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    lp_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /learningpaths/{lp_id}/courses

Returns a list of Courses that have been added to a Learning Path.

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    lp_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /learningpaths/{lp_id}/users

Returns a List of Users Assigned to a Learning Path

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    lp_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /teams/{LP_team_id}/learningpaths

Assign a set of Learning Paths to a Team.

Access Level: Account Owners & Administrators

    source : string
    format : string
    sendmessage : boolean
    Content-Type : string
    Body : 
    LP_team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}/learningpaths

Returns a list of Learning Paths Assigned to a Team.

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /users/{user_id}/learningpaths/{lp_id}

Deletes a set of specific user assignments from a Learning Path.

Access Level: Account Owners & Administrators

    source : string
    format : string
    Content-Type : string
    Body : 
    user_id : string
    lp_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /teams/{team_id}/courses

Add a list of courses to a Team. If the courses already exist in the team or if the course ids are invalid they will be ignored. 

Emails will be sent notifying the users of the course assignment providing they have previously logged into their account. It is possible to disable sending course invitation emails by adding the following querystring parameter to the end of the uri : &sendmessage=false.

Access Level: Account Owners Only

    source : string
    sendmessage : boolean
    Content-Type : string
    Body : 
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /teams/{team_id}/courses

Delete a list of courses to a Team. If the courses do not exist in the team or if the course ids are invalid they will be ignored.

Access Level: Trainers Only

    source : string
    Content-Type : string
    Body : 
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /teams/{team_id}/leaders/{user_id}

This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only

    source : string
    Content-Type : string
    team_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /teams/{team_id}/leaders/{user_id}

This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only

    source : string
    Content-Type : string
    team_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}/leaders

Returns a list of users assigned to a Team and marked as Team Leader

Access Level: Account Owners Only

    source : string
    format : string
    apikey : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /teams/{team_id}/admins/{user_id}

This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only

    source : string
    Content-Type : string
    team_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /teams/{team_id}/admins/{user_id}

This assumes the user is already assigned to the team. If the user is not a member of the team you will get 404 Not Found status.

Access Level: Administrators Only

    source : string
    Content-Type : string
    team_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}/admins

Returns a list of users assigned to a Team and marked as Team Admin

Access Level: Administrators Only

    source : string
    format : string
    apikey : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}/users

Returns a list of active users assigned to a Team.

Access Level: Account Owners and Administrators Only

    source : string
    format : string
    limit : integer
    apikey : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /teams/{team_id}/users

Add a list of users to a Team. If the users already exist in the team or if the user ids are invalid they will be ignored.

By default, no emails will be sent when the user is added to a team. To have an email sent to the user when they are added to a team, the following query string parameter needs to be added to the request: &sendmessage=true

Access Level: Account Owners and Administrators Only

    source : string
    format : string
    Content-Type : string
    Body : 
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /teams/{team_id}/users/{user_id}

Users can only be removed from a Team one per request.

Access Level: Account Owners and Administrators Only

    source : string
    format : string
    Content-Type : string
    team_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /users/{user_id}/teams

Removes a user from all Teams the user is assigned to.

Access Level: Account Owners and Administrators Only

    source : string
    Content-Type : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/teams

Returns a list of all teams the User belongs to.

Access Level: Account Owners and Administrators Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams

Returns a list of teams in your organisation. By default only the first 100 teams are returned. The list can be filtered team name and paged using the optional paging parameters.

Access Level: Account Owners Only

    source : string
    format : string
    limit : integer
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /teams

Creates a new team or sub-team in your organisation.

AccessLevel: Trainers Only

    source : string
    format : string
    Content-Type : string
    Body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}

Returns a single team for the given team Id.

AccessLevel: Trainers Only

    source : string
    format : string
    apikey : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /teams/{second_team_id}

Update a single team profile in your organisation.  The team Id in the Uri must match the Id specified in the request body.

Access Level: Account Owners and Administrators Only

    source : string
    format : string
    Content-Type : string
    Body : 
    second_team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{second_team_id}

GETTeam/Team_Id

    source : string
    format : string
    apikey : string
    second_team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /teams/{second_team_id}

Delete a single team profile in your organisation.  The team Id in the Uri must match the Id specified in the request body.

Access Level: Account Owners and Administrators Only

    source : string
    apikey : string
    second_team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/modules/{module_id}/sessions

Creates a new session in an ILT module.  Supports Class Room, Webinar, Webex Training, GoToTraining and Zoom Meetings.

AccessLevel: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    Content-Type : string
    Body : 
    course_id : string
    module_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/{module_id}/sessions

Returns a session list given a module Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    apikey : string
    course_id : string
    module_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /sessions/future

Returns a list of future dated sessions for an organisation. 

By default the first 100 sessions are returned. The list can be filtered on session name and sorted by session’s start date. It can also be paged using the optional paging parameters.

AccessLevel: Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/ilt

Returns a list of ILT Modules given a course Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    apikey : string
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/{module_id}/sessions/{session_id}

Returns a single session in an ILT module for a given session Id and module Id.

AccessLevel: Super Admins/Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /courses/{course_id}/modules/{module_id}/sessions/{session_id}

Update a single session in an ILT module. The session Id in the Uri must match the Id specified in the request body. The session Id in the Uri and the session Id in the request body must match.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    Content-Type : string
    Body : 
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /courses/{course_id}/modules/{module_id}/sessions/{session_id}

Delete a given session.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    apikey : string
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /instructors

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/{module_id}/sessions/{session_id}/rollcall

Returns a list of users registered to a session for a given session Id.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri

    source : string
    format : string
    Content-Type : string
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/modules/{module_id}/sessions/{session_id}/rollcall

Updates a list of users registered to a session for a given session Id.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri

    source : string
    format : string
    Content-Type : string
    Body : 
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/{module_id}/registration

Returns a list of users assigned to an ILT Module a given module Id.

Access Level: Account Owners/Administrators/Team Admins/Team Leaders Only

Request Uri

    source : string
    format : string
    Content-Type : string
    course_id : string
    module_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /courses/{course_id}/modules/{module_id}/sessions/{session_id}/attendance

Returns a list of users registered to a session for a given session Id.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    Content-Type : string
    course_id : string
    module_id : string
    session_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/modules/{module_id}/sessiondays/{session_day_id}/users/{user_id}/attended/{attended}

Mark attendance of session day.

Access Level: Super Admins/Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    apikey : string
    course_id : string
    module_id : string
    session_day_id : string
    user_id : string
    attended : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /instructors/{instructor_id}/sessions

AccessLevel: Account Owners/Administrators Only

Request Uri

    source : string
    format : string
    apikey : string
    instructor_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/modules/{module_id}/sessions/{session_id}/users/{user_id}/register

Register a user to a session given the user’s Id.

AccessLevel: Account Owners/Administrators/Team Admins/Team Leaders Only

    source : string
    format : string
    apikey : string
    course_id : string
    module_id : string
    session_id : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/events

Create an ILT Module given a Course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only

    source : string
    format : string
    Content-Type : string
    Body : 
    course_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /courses/{course_id}/events/{event_id}

Update an ILT Module given a Course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only

    source : string
    format : string
    Content-Type : string
    Body : 
    course_id : string
    event_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### DELETE /courses/{course_id}/events/{event_id}

Delete a given ILT Module given a module Id and a course Id.

AccessLevel: Account Owners/Administrators/Team Admin/Team Leaders Only

Important Note: This will delete all of the ILT sessoins within the Module.

    source : string
    apikey : string
    course_id : string
    event_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /achievements

When a person completes a course in Litmos, an Achievement record is created and added to the user profile. 

This API request enables you to get a list of achievements in descending order and also provides the ability to filter the achievements by date or user.

For example, If you wanted to keep track of when users in your organization complete courses you could make a daily request to /achievements and pass in the previous days date in the since parameter to get all of the achievements that have happened since that date.


Access Level: Account Owners Only

Optional query filters:

userid – return all of the achievements for a given user
since – return all achievements since a given date YYYY-MM-DD
paging – see https://litmos.zendesk.com/entries/20957812-Overview-Developer-API

    source : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/gamificationsummary

Returns the number of badges and point for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /users/{user_id}/gamificationdetails

Returns a list of badges, courses/learning paths, date completed, point for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /teams/{team_id}/gamificationdetails

Returns a list of users, badges, courses/learning paths, date completed, points for a team.

AccessLevel: Super Admins/Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
    team_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### PUT /users/{user_id}/gamificationreset

Resets the gamification points and badges for a user.

AccessLevel: Super Admins/Account Owners/Administrators Only

    source : string
    format : string
    apikey : string
    user_id : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/users/details

Returns a list of people including 'active' and 'inactive' people that have been created or updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/teams/learningpaths

Returns all team learning-paths that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/teams/users

Returns all user team assignments that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/results/details

Returns a list of all user course results that have changed during the specified interval. You can GET 1000 results using the “limit” parameter.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/teams

Returns all teams that were created or modified within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/courses/modules

Returns all modules under each course within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/achievements

Returns a list of all users that have earned achievements within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/teams/courses

Returns all team course assignments that were created or modified within a given date range. 

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/learningpaths/courses

Returns all courses that are assigned to a specific learning path within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/courses

Returns all the courses in your organization that were created or updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/learningpaths

Returns all learning paths that were created/updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/users/courses

Returns all courses assigned to users within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/learningpaths/users

Returns all learning-paths assigned to users within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/modules

Returns all the modules in an organization that was created/ updated within a given date range.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/modules/results

Module results API will return the list of all user module results that have changed during the specified interval.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    source : string
    since : string
    to : string
    format : string
    apikey : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /org/learningpaths/results

Learning paths results API returns the list of all user learning paths results that have changed during the specified interval.

When using the "since" and "to"  date range parameters in the request URI, the date range format must be 'YYYY-MM-DD HH:MM:SS'. This will return all records that were created/updated between the dates specified. 

The date range must be equal or less than 7 days. 

In an attempt to get results for the current day, the "to" date must be set to a future date to return results successfully. 

By default, all API responses will return 100 results. You can return up to 1,000 records by adding the 'limit' query parameter to your URI. Please visit our 'Overview Developer API' documentation and refer to the 'Search & Paging Parameters' section for pagination, and other query parameters you can use. 

    Source : string
    Since : string
    To : string
    Format : string
     
    Accept : 'application/json'
    Content-Type : 'application/json'


## License

#### Apache-2.0

