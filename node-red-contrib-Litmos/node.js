'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function LitmosapisKymaNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.CreateNewUser_source = config.CreateNewUser_source;
        this.CreateNewUser_sourceType = config.CreateNewUser_sourceType || 'str';
        this.CreateNewUser_format = config.CreateNewUser_format;
        this.CreateNewUser_formatType = config.CreateNewUser_formatType || 'str';
        this.CreateNewUser_contentType = config.CreateNewUser_contentType;
        this.CreateNewUser_contentTypeType = config.CreateNewUser_contentTypeType || 'str';
        this.CreateNewUser_body = config.CreateNewUser_body;
        this.CreateNewUser_bodyType = config.CreateNewUser_bodyType || 'str';
        this.GetUsers_format = config.GetUsers_format;
        this.GetUsers_formatType = config.GetUsers_formatType || 'str';
        this.GetUsers_source = config.GetUsers_source;
        this.GetUsers_sourceType = config.GetUsers_sourceType || 'str';
        this.GetUsers_apikey = config.GetUsers_apikey;
        this.GetUsers_apikeyType = config.GetUsers_apikeyType || 'str';
        this.GetaUserbyUsername_source = config.GetaUserbyUsername_source;
        this.GetaUserbyUsername_sourceType = config.GetaUserbyUsername_sourceType || 'str';
        this.GetaUserbyUsername_format = config.GetaUserbyUsername_format;
        this.GetaUserbyUsername_formatType = config.GetaUserbyUsername_formatType || 'str';
        this.GetaUserbyUsername_apikey = config.GetaUserbyUsername_apikey;
        this.GetaUserbyUsername_apikeyType = config.GetaUserbyUsername_apikeyType || 'str';
        this.GetaUserbyUsername_username = config.GetaUserbyUsername_username;
        this.GetaUserbyUsername_usernameType = config.GetaUserbyUsername_usernameType || 'str';
        this.UpdateaUser_source = config.UpdateaUser_source;
        this.UpdateaUser_sourceType = config.UpdateaUser_sourceType || 'str';
        this.UpdateaUser_contentType = config.UpdateaUser_contentType;
        this.UpdateaUser_contentTypeType = config.UpdateaUser_contentTypeType || 'str';
        this.UpdateaUser_body = config.UpdateaUser_body;
        this.UpdateaUser_bodyType = config.UpdateaUser_bodyType || 'str';
        this.UpdateaUser_userId = config.UpdateaUser_userId;
        this.UpdateaUser_userIdType = config.UpdateaUser_userIdType || 'str';
        this.GetUserbyUserId_source = config.GetUserbyUserId_source;
        this.GetUserbyUserId_sourceType = config.GetUserbyUserId_sourceType || 'str';
        this.GetUserbyUserId_format = config.GetUserbyUserId_format;
        this.GetUserbyUserId_formatType = config.GetUserbyUserId_formatType || 'str';
        this.GetUserbyUserId_apikey = config.GetUserbyUserId_apikey;
        this.GetUserbyUserId_apikeyType = config.GetUserbyUserId_apikeyType || 'str';
        this.GetUserbyUserId_userId = config.GetUserbyUserId_userId;
        this.GetUserbyUserId_userIdType = config.GetUserbyUserId_userIdType || 'str';
        this.DeleteaUser_source = config.DeleteaUser_source;
        this.DeleteaUser_sourceType = config.DeleteaUser_sourceType || 'str';
        this.DeleteaUser_apikey = config.DeleteaUser_apikey;
        this.DeleteaUser_apikeyType = config.DeleteaUser_apikeyType || 'str';
        this.DeleteaUser_userId = config.DeleteaUser_userId;
        this.DeleteaUser_userIdType = config.DeleteaUser_userIdType || 'str';
        this.GetUsersDetails_source = config.GetUsersDetails_source;
        this.GetUsersDetails_sourceType = config.GetUsersDetails_sourceType || 'str';
        this.GetUsersDetails_format = config.GetUsersDetails_format;
        this.GetUsersDetails_formatType = config.GetUsersDetails_formatType || 'str';
        this.GetUsersDetails_apikey = config.GetUsersDetails_apikey;
        this.GetUsersDetails_apikeyType = config.GetUsersDetails_apikeyType || 'str';
        this.PostAdvancedCustomFieldsforaUser_source = config.PostAdvancedCustomFieldsforaUser_source;
        this.PostAdvancedCustomFieldsforaUser_sourceType = config.PostAdvancedCustomFieldsforaUser_sourceType || 'str';
        this.PostAdvancedCustomFieldsforaUser_fromat = config.PostAdvancedCustomFieldsforaUser_fromat;
        this.PostAdvancedCustomFieldsforaUser_fromatType = config.PostAdvancedCustomFieldsforaUser_fromatType || 'str';
        this.PostAdvancedCustomFieldsforaUser_contentType = config.PostAdvancedCustomFieldsforaUser_contentType;
        this.PostAdvancedCustomFieldsforaUser_contentTypeType = config.PostAdvancedCustomFieldsforaUser_contentTypeType || 'str';
        this.PostAdvancedCustomFieldsforaUser_body = config.PostAdvancedCustomFieldsforaUser_body;
        this.PostAdvancedCustomFieldsforaUser_bodyType = config.PostAdvancedCustomFieldsforaUser_bodyType || 'str';
        this.PostAdvancedCustomFieldsforaUser_userId = config.PostAdvancedCustomFieldsforaUser_userId;
        this.PostAdvancedCustomFieldsforaUser_userIdType = config.PostAdvancedCustomFieldsforaUser_userIdType || 'str';
        this.GetaUsersAdvancedCustomFields_source = config.GetaUsersAdvancedCustomFields_source;
        this.GetaUsersAdvancedCustomFields_sourceType = config.GetaUsersAdvancedCustomFields_sourceType || 'str';
        this.GetaUsersAdvancedCustomFields_contentType = config.GetaUsersAdvancedCustomFields_contentType;
        this.GetaUsersAdvancedCustomFields_contentTypeType = config.GetaUsersAdvancedCustomFields_contentTypeType || 'str';
        this.GetaUsersAdvancedCustomFields_userId = config.GetaUsersAdvancedCustomFields_userId;
        this.GetaUsersAdvancedCustomFields_userIdType = config.GetaUsersAdvancedCustomFields_userIdType || 'str';
        this.CreateanewUserBulkImport_source = config.CreateanewUserBulkImport_source;
        this.CreateanewUserBulkImport_sourceType = config.CreateanewUserBulkImport_sourceType || 'str';
        this.CreateanewUserBulkImport_format = config.CreateanewUserBulkImport_format;
        this.CreateanewUserBulkImport_formatType = config.CreateanewUserBulkImport_formatType || 'str';
        this.CreateanewUserBulkImport_sendmessage = config.CreateanewUserBulkImport_sendmessage;
        this.CreateanewUserBulkImport_sendmessageType = config.CreateanewUserBulkImport_sendmessageType || 'str';
        this.CreateanewUserBulkImport_contentType = config.CreateanewUserBulkImport_contentType;
        this.CreateanewUserBulkImport_contentTypeType = config.CreateanewUserBulkImport_contentTypeType || 'str';
        this.CreateanewUserBulkImport_body = config.CreateanewUserBulkImport_body;
        this.CreateanewUserBulkImport_bodyType = config.CreateanewUserBulkImport_bodyType || 'str';
        this.GetaListofRecentBulkImports_source = config.GetaListofRecentBulkImports_source;
        this.GetaListofRecentBulkImports_sourceType = config.GetaListofRecentBulkImports_sourceType || 'str';
        this.GetaListofRecentBulkImports_format = config.GetaListofRecentBulkImports_format;
        this.GetaListofRecentBulkImports_formatType = config.GetaListofRecentBulkImports_formatType || 'str';
        this.GetaListofRecentBulkImports_apikey = config.GetaListofRecentBulkImports_apikey;
        this.GetaListofRecentBulkImports_apikeyType = config.GetaListofRecentBulkImports_apikeyType || 'str';
        this.GetaSpecificBulkImport_source = config.GetaSpecificBulkImport_source;
        this.GetaSpecificBulkImport_sourceType = config.GetaSpecificBulkImport_sourceType || 'str';
        this.GetaSpecificBulkImport_format = config.GetaSpecificBulkImport_format;
        this.GetaSpecificBulkImport_formatType = config.GetaSpecificBulkImport_formatType || 'str';
        this.GetCourses_source = config.GetCourses_source;
        this.GetCourses_sourceType = config.GetCourses_sourceType || 'str';
        this.GetCourses_format = config.GetCourses_format;
        this.GetCourses_formatType = config.GetCourses_formatType || 'str';
        this.GetCourses_limit = config.GetCourses_limit;
        this.GetCourses_limitType = config.GetCourses_limitType || 'str';
        this.GetCourses_apikey = config.GetCourses_apikey;
        this.GetCourses_apikeyType = config.GetCourses_apikeyType || 'str';
        this.GetaCourse_source = config.GetaCourse_source;
        this.GetaCourse_sourceType = config.GetaCourse_sourceType || 'str';
        this.GetaCourse_format = config.GetaCourse_format;
        this.GetaCourse_formatType = config.GetaCourse_formatType || 'str';
        this.GetaCourse_apikey = config.GetaCourse_apikey;
        this.GetaCourse_apikeyType = config.GetaCourse_apikeyType || 'str';
        this.GetaCourse_courseId = config.GetaCourse_courseId;
        this.GetaCourse_courseIdType = config.GetaCourse_courseIdType || 'str';
        this.AssignCoursestoaUser_source = config.AssignCoursestoaUser_source;
        this.AssignCoursestoaUser_sourceType = config.AssignCoursestoaUser_sourceType || 'str';
        this.AssignCoursestoaUser_sendmessage = config.AssignCoursestoaUser_sendmessage;
        this.AssignCoursestoaUser_sendmessageType = config.AssignCoursestoaUser_sendmessageType || 'str';
        this.AssignCoursestoaUser_contentType = config.AssignCoursestoaUser_contentType;
        this.AssignCoursestoaUser_contentTypeType = config.AssignCoursestoaUser_contentTypeType || 'str';
        this.AssignCoursestoaUser_body = config.AssignCoursestoaUser_body;
        this.AssignCoursestoaUser_bodyType = config.AssignCoursestoaUser_bodyType || 'str';
        this.AssignCoursestoaUser_userId = config.AssignCoursestoaUser_userId;
        this.AssignCoursestoaUser_userIdType = config.AssignCoursestoaUser_userIdType || 'str';
        this.ListCoursesAssignedtoaUser_source = config.ListCoursesAssignedtoaUser_source;
        this.ListCoursesAssignedtoaUser_sourceType = config.ListCoursesAssignedtoaUser_sourceType || 'str';
        this.ListCoursesAssignedtoaUser_format = config.ListCoursesAssignedtoaUser_format;
        this.ListCoursesAssignedtoaUser_formatType = config.ListCoursesAssignedtoaUser_formatType || 'str';
        this.ListCoursesAssignedtoaUser_apikey = config.ListCoursesAssignedtoaUser_apikey;
        this.ListCoursesAssignedtoaUser_apikeyType = config.ListCoursesAssignedtoaUser_apikeyType || 'str';
        this.ListCoursesAssignedtoaUser_userId = config.ListCoursesAssignedtoaUser_userId;
        this.ListCoursesAssignedtoaUser_userIdType = config.ListCoursesAssignedtoaUser_userIdType || 'str';
        this.ListAllUsersAssignedtoaCourse_source = config.ListAllUsersAssignedtoaCourse_source;
        this.ListAllUsersAssignedtoaCourse_sourceType = config.ListAllUsersAssignedtoaCourse_sourceType || 'str';
        this.ListAllUsersAssignedtoaCourse_format = config.ListAllUsersAssignedtoaCourse_format;
        this.ListAllUsersAssignedtoaCourse_formatType = config.ListAllUsersAssignedtoaCourse_formatType || 'str';
        this.ListAllUsersAssignedtoaCourse_apikey = config.ListAllUsersAssignedtoaCourse_apikey;
        this.ListAllUsersAssignedtoaCourse_apikeyType = config.ListAllUsersAssignedtoaCourse_apikeyType || 'str';
        this.ListAllUsersAssignedtoaCourse_courseId = config.ListAllUsersAssignedtoaCourse_courseId;
        this.ListAllUsersAssignedtoaCourse_courseIdType = config.ListAllUsersAssignedtoaCourse_courseIdType || 'str';
        this.ListModulesforaCourse_source = config.ListModulesforaCourse_source;
        this.ListModulesforaCourse_sourceType = config.ListModulesforaCourse_sourceType || 'str';
        this.ListModulesforaCourse_format = config.ListModulesforaCourse_format;
        this.ListModulesforaCourse_formatType = config.ListModulesforaCourse_formatType || 'str';
        this.ListModulesforaCourse_apikey = config.ListModulesforaCourse_apikey;
        this.ListModulesforaCourse_apikeyType = config.ListModulesforaCourse_apikeyType || 'str';
        this.ListModulesforaCourse_courseId = config.ListModulesforaCourse_courseId;
        this.ListModulesforaCourse_courseIdType = config.ListModulesforaCourse_courseIdType || 'str';
        this.ListCourseandModuleResultsforaUser_source = config.ListCourseandModuleResultsforaUser_source;
        this.ListCourseandModuleResultsforaUser_sourceType = config.ListCourseandModuleResultsforaUser_sourceType || 'str';
        this.ListCourseandModuleResultsforaUser_format = config.ListCourseandModuleResultsforaUser_format;
        this.ListCourseandModuleResultsforaUser_formatType = config.ListCourseandModuleResultsforaUser_formatType || 'str';
        this.ListCourseandModuleResultsforaUser_apikey = config.ListCourseandModuleResultsforaUser_apikey;
        this.ListCourseandModuleResultsforaUser_apikeyType = config.ListCourseandModuleResultsforaUser_apikeyType || 'str';
        this.ListCourseandModuleResultsforaUser_userId = config.ListCourseandModuleResultsforaUser_userId;
        this.ListCourseandModuleResultsforaUser_userIdType = config.ListCourseandModuleResultsforaUser_userIdType || 'str';
        this.ListCourseandModuleResultsforaUser_courseId = config.ListCourseandModuleResultsforaUser_courseId;
        this.ListCourseandModuleResultsforaUser_courseIdType = config.ListCourseandModuleResultsforaUser_courseIdType || 'str';
        this.UnassignCoursesfromaUser_source = config.UnassignCoursesfromaUser_source;
        this.UnassignCoursesfromaUser_sourceType = config.UnassignCoursesfromaUser_sourceType || 'str';
        this.UnassignCoursesfromaUser_apikey = config.UnassignCoursesfromaUser_apikey;
        this.UnassignCoursesfromaUser_apikeyType = config.UnassignCoursesfromaUser_apikeyType || 'str';
        this.UnassignCoursesfromaUser_userId = config.UnassignCoursesfromaUser_userId;
        this.UnassignCoursesfromaUser_userIdType = config.UnassignCoursesfromaUser_userIdType || 'str';
        this.UnassignCoursesfromaUser_courseId = config.UnassignCoursesfromaUser_courseId;
        this.UnassignCoursesfromaUser_courseIdType = config.UnassignCoursesfromaUser_courseIdType || 'str';
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_source = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_source;
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_sourceType = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_sourceType || 'str';
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_since = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_since;
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_sinceType = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_sinceType || 'str';
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikey = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikey;
        this.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikeyType = config.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikeyType || 'str';
        this.ResetCourseResults_source = config.ResetCourseResults_source;
        this.ResetCourseResults_sourceType = config.ResetCourseResults_sourceType || 'str';
        this.ResetCourseResults_apikey = config.ResetCourseResults_apikey;
        this.ResetCourseResults_apikeyType = config.ResetCourseResults_apikeyType || 'str';
        this.ResetCourseResults_userId = config.ResetCourseResults_userId;
        this.ResetCourseResults_userIdType = config.ResetCourseResults_userIdType || 'str';
        this.ResetCourseResults_courseId = config.ResetCourseResults_courseId;
        this.ResetCourseResults_courseIdType = config.ResetCourseResults_courseIdType || 'str';
        this.GetCourseCustomFields_source = config.GetCourseCustomFields_source;
        this.GetCourseCustomFields_sourceType = config.GetCourseCustomFields_sourceType || 'str';
        this.GetCourseCustomFields_format = config.GetCourseCustomFields_format;
        this.GetCourseCustomFields_formatType = config.GetCourseCustomFields_formatType || 'str';
        this.GetCourseCustomFields_apikey = config.GetCourseCustomFields_apikey;
        this.GetCourseCustomFields_apikeyType = config.GetCourseCustomFields_apikeyType || 'str';
        this.GetCourseCustomFieldValuesforaSpecificCourse_source = config.GetCourseCustomFieldValuesforaSpecificCourse_source;
        this.GetCourseCustomFieldValuesforaSpecificCourse_sourceType = config.GetCourseCustomFieldValuesforaSpecificCourse_sourceType || 'str';
        this.GetCourseCustomFieldValuesforaSpecificCourse_apikey = config.GetCourseCustomFieldValuesforaSpecificCourse_apikey;
        this.GetCourseCustomFieldValuesforaSpecificCourse_apikeyType = config.GetCourseCustomFieldValuesforaSpecificCourse_apikeyType || 'str';
        this.GetCourseCustomFieldValuesforaSpecificCourse_courseId = config.GetCourseCustomFieldValuesforaSpecificCourse_courseId;
        this.GetCourseCustomFieldValuesforaSpecificCourse_courseIdType = config.GetCourseCustomFieldValuesforaSpecificCourse_courseIdType || 'str';
        this.GetAllLearningPaths_source = config.GetAllLearningPaths_source;
        this.GetAllLearningPaths_sourceType = config.GetAllLearningPaths_sourceType || 'str';
        this.GetAllLearningPaths_format = config.GetAllLearningPaths_format;
        this.GetAllLearningPaths_formatType = config.GetAllLearningPaths_formatType || 'str';
        this.GetAllLearningPaths_contentType = config.GetAllLearningPaths_contentType;
        this.GetAllLearningPaths_contentTypeType = config.GetAllLearningPaths_contentTypeType || 'str';
        this.AssignUserstoaLearningPath_source = config.AssignUserstoaLearningPath_source;
        this.AssignUserstoaLearningPath_sourceType = config.AssignUserstoaLearningPath_sourceType || 'str';
        this.AssignUserstoaLearningPath_includesubteams = config.AssignUserstoaLearningPath_includesubteams;
        this.AssignUserstoaLearningPath_includesubteamsType = config.AssignUserstoaLearningPath_includesubteamsType || 'str';
        this.AssignUserstoaLearningPath_contentType = config.AssignUserstoaLearningPath_contentType;
        this.AssignUserstoaLearningPath_contentTypeType = config.AssignUserstoaLearningPath_contentTypeType || 'str';
        this.AssignUserstoaLearningPath_body = config.AssignUserstoaLearningPath_body;
        this.AssignUserstoaLearningPath_bodyType = config.AssignUserstoaLearningPath_bodyType || 'str';
        this.AssignUserstoaLearningPath_userId = config.AssignUserstoaLearningPath_userId;
        this.AssignUserstoaLearningPath_userIdType = config.AssignUserstoaLearningPath_userIdType || 'str';
        this.GetaListofLearningPathsAssignedtoaUser_source = config.GetaListofLearningPathsAssignedtoaUser_source;
        this.GetaListofLearningPathsAssignedtoaUser_sourceType = config.GetaListofLearningPathsAssignedtoaUser_sourceType || 'str';
        this.GetaListofLearningPathsAssignedtoaUser_format = config.GetaListofLearningPathsAssignedtoaUser_format;
        this.GetaListofLearningPathsAssignedtoaUser_formatType = config.GetaListofLearningPathsAssignedtoaUser_formatType || 'str';
        this.GetaListofLearningPathsAssignedtoaUser_contentType = config.GetaListofLearningPathsAssignedtoaUser_contentType;
        this.GetaListofLearningPathsAssignedtoaUser_contentTypeType = config.GetaListofLearningPathsAssignedtoaUser_contentTypeType || 'str';
        this.GetaListofLearningPathsAssignedtoaUser_userId = config.GetaListofLearningPathsAssignedtoaUser_userId;
        this.GetaListofLearningPathsAssignedtoaUser_userIdType = config.GetaListofLearningPathsAssignedtoaUser_userIdType || 'str';
        this.GetaSpecificLearningPath_source = config.GetaSpecificLearningPath_source;
        this.GetaSpecificLearningPath_sourceType = config.GetaSpecificLearningPath_sourceType || 'str';
        this.GetaSpecificLearningPath_format = config.GetaSpecificLearningPath_format;
        this.GetaSpecificLearningPath_formatType = config.GetaSpecificLearningPath_formatType || 'str';
        this.GetaSpecificLearningPath_contentType = config.GetaSpecificLearningPath_contentType;
        this.GetaSpecificLearningPath_contentTypeType = config.GetaSpecificLearningPath_contentTypeType || 'str';
        this.GetaSpecificLearningPath_lpId = config.GetaSpecificLearningPath_lpId;
        this.GetaSpecificLearningPath_lpIdType = config.GetaSpecificLearningPath_lpIdType || 'str';
        this.GetaListofCoursesinaLearningPath_source = config.GetaListofCoursesinaLearningPath_source;
        this.GetaListofCoursesinaLearningPath_sourceType = config.GetaListofCoursesinaLearningPath_sourceType || 'str';
        this.GetaListofCoursesinaLearningPath_format = config.GetaListofCoursesinaLearningPath_format;
        this.GetaListofCoursesinaLearningPath_formatType = config.GetaListofCoursesinaLearningPath_formatType || 'str';
        this.GetaListofCoursesinaLearningPath_contentType = config.GetaListofCoursesinaLearningPath_contentType;
        this.GetaListofCoursesinaLearningPath_contentTypeType = config.GetaListofCoursesinaLearningPath_contentTypeType || 'str';
        this.GetaListofCoursesinaLearningPath_lpId = config.GetaListofCoursesinaLearningPath_lpId;
        this.GetaListofCoursesinaLearningPath_lpIdType = config.GetaListofCoursesinaLearningPath_lpIdType || 'str';
        this.GetaListofUsersAssignedtoaLearningPath_source = config.GetaListofUsersAssignedtoaLearningPath_source;
        this.GetaListofUsersAssignedtoaLearningPath_sourceType = config.GetaListofUsersAssignedtoaLearningPath_sourceType || 'str';
        this.GetaListofUsersAssignedtoaLearningPath_format = config.GetaListofUsersAssignedtoaLearningPath_format;
        this.GetaListofUsersAssignedtoaLearningPath_formatType = config.GetaListofUsersAssignedtoaLearningPath_formatType || 'str';
        this.GetaListofUsersAssignedtoaLearningPath_contentType = config.GetaListofUsersAssignedtoaLearningPath_contentType;
        this.GetaListofUsersAssignedtoaLearningPath_contentTypeType = config.GetaListofUsersAssignedtoaLearningPath_contentTypeType || 'str';
        this.GetaListofUsersAssignedtoaLearningPath_lpId = config.GetaListofUsersAssignedtoaLearningPath_lpId;
        this.GetaListofUsersAssignedtoaLearningPath_lpIdType = config.GetaListofUsersAssignedtoaLearningPath_lpIdType || 'str';
        this.AssignLearningPathstoaTeam_source = config.AssignLearningPathstoaTeam_source;
        this.AssignLearningPathstoaTeam_sourceType = config.AssignLearningPathstoaTeam_sourceType || 'str';
        this.AssignLearningPathstoaTeam_format = config.AssignLearningPathstoaTeam_format;
        this.AssignLearningPathstoaTeam_formatType = config.AssignLearningPathstoaTeam_formatType || 'str';
        this.AssignLearningPathstoaTeam_sendmessage = config.AssignLearningPathstoaTeam_sendmessage;
        this.AssignLearningPathstoaTeam_sendmessageType = config.AssignLearningPathstoaTeam_sendmessageType || 'str';
        this.AssignLearningPathstoaTeam_contentType = config.AssignLearningPathstoaTeam_contentType;
        this.AssignLearningPathstoaTeam_contentTypeType = config.AssignLearningPathstoaTeam_contentTypeType || 'str';
        this.AssignLearningPathstoaTeam_body = config.AssignLearningPathstoaTeam_body;
        this.AssignLearningPathstoaTeam_bodyType = config.AssignLearningPathstoaTeam_bodyType || 'str';
        this.AssignLearningPathstoaTeam_lpTeamId = config.AssignLearningPathstoaTeam_lpTeamId;
        this.AssignLearningPathstoaTeam_lpTeamIdType = config.AssignLearningPathstoaTeam_lpTeamIdType || 'str';
        this.GetLearningPathsAssignedtoaTeam_source = config.GetLearningPathsAssignedtoaTeam_source;
        this.GetLearningPathsAssignedtoaTeam_sourceType = config.GetLearningPathsAssignedtoaTeam_sourceType || 'str';
        this.GetLearningPathsAssignedtoaTeam_format = config.GetLearningPathsAssignedtoaTeam_format;
        this.GetLearningPathsAssignedtoaTeam_formatType = config.GetLearningPathsAssignedtoaTeam_formatType || 'str';
        this.GetLearningPathsAssignedtoaTeam_contentType = config.GetLearningPathsAssignedtoaTeam_contentType;
        this.GetLearningPathsAssignedtoaTeam_contentTypeType = config.GetLearningPathsAssignedtoaTeam_contentTypeType || 'str';
        this.GetLearningPathsAssignedtoaTeam_teamId = config.GetLearningPathsAssignedtoaTeam_teamId;
        this.GetLearningPathsAssignedtoaTeam_teamIdType = config.GetLearningPathsAssignedtoaTeam_teamIdType || 'str';
        this.UnAssignUsersfromaLearningPath_source = config.UnAssignUsersfromaLearningPath_source;
        this.UnAssignUsersfromaLearningPath_sourceType = config.UnAssignUsersfromaLearningPath_sourceType || 'str';
        this.UnAssignUsersfromaLearningPath_format = config.UnAssignUsersfromaLearningPath_format;
        this.UnAssignUsersfromaLearningPath_formatType = config.UnAssignUsersfromaLearningPath_formatType || 'str';
        this.UnAssignUsersfromaLearningPath_contentType = config.UnAssignUsersfromaLearningPath_contentType;
        this.UnAssignUsersfromaLearningPath_contentTypeType = config.UnAssignUsersfromaLearningPath_contentTypeType || 'str';
        this.UnAssignUsersfromaLearningPath_body = config.UnAssignUsersfromaLearningPath_body;
        this.UnAssignUsersfromaLearningPath_bodyType = config.UnAssignUsersfromaLearningPath_bodyType || 'str';
        this.UnAssignUsersfromaLearningPath_userId = config.UnAssignUsersfromaLearningPath_userId;
        this.UnAssignUsersfromaLearningPath_userIdType = config.UnAssignUsersfromaLearningPath_userIdType || 'str';
        this.UnAssignUsersfromaLearningPath_lpId = config.UnAssignUsersfromaLearningPath_lpId;
        this.UnAssignUsersfromaLearningPath_lpIdType = config.UnAssignUsersfromaLearningPath_lpIdType || 'str';
        this.AssignaListofCoursestoaTeam_source = config.AssignaListofCoursestoaTeam_source;
        this.AssignaListofCoursestoaTeam_sourceType = config.AssignaListofCoursestoaTeam_sourceType || 'str';
        this.AssignaListofCoursestoaTeam_sendmessage = config.AssignaListofCoursestoaTeam_sendmessage;
        this.AssignaListofCoursestoaTeam_sendmessageType = config.AssignaListofCoursestoaTeam_sendmessageType || 'str';
        this.AssignaListofCoursestoaTeam_contentType = config.AssignaListofCoursestoaTeam_contentType;
        this.AssignaListofCoursestoaTeam_contentTypeType = config.AssignaListofCoursestoaTeam_contentTypeType || 'str';
        this.AssignaListofCoursestoaTeam_body = config.AssignaListofCoursestoaTeam_body;
        this.AssignaListofCoursestoaTeam_bodyType = config.AssignaListofCoursestoaTeam_bodyType || 'str';
        this.AssignaListofCoursestoaTeam_teamId = config.AssignaListofCoursestoaTeam_teamId;
        this.AssignaListofCoursestoaTeam_teamIdType = config.AssignaListofCoursestoaTeam_teamIdType || 'str';
        this.UnAssignaListofCoursesfromaTeam_source = config.UnAssignaListofCoursesfromaTeam_source;
        this.UnAssignaListofCoursesfromaTeam_sourceType = config.UnAssignaListofCoursesfromaTeam_sourceType || 'str';
        this.UnAssignaListofCoursesfromaTeam_contentType = config.UnAssignaListofCoursesfromaTeam_contentType;
        this.UnAssignaListofCoursesfromaTeam_contentTypeType = config.UnAssignaListofCoursesfromaTeam_contentTypeType || 'str';
        this.UnAssignaListofCoursesfromaTeam_body = config.UnAssignaListofCoursesfromaTeam_body;
        this.UnAssignaListofCoursesfromaTeam_bodyType = config.UnAssignaListofCoursesfromaTeam_bodyType || 'str';
        this.UnAssignaListofCoursesfromaTeam_teamId = config.UnAssignaListofCoursesfromaTeam_teamId;
        this.UnAssignaListofCoursesfromaTeam_teamIdType = config.UnAssignaListofCoursesfromaTeam_teamIdType || 'str';
        this.PromoteaUsertoTeamLeaderforaTeam_source = config.PromoteaUsertoTeamLeaderforaTeam_source;
        this.PromoteaUsertoTeamLeaderforaTeam_sourceType = config.PromoteaUsertoTeamLeaderforaTeam_sourceType || 'str';
        this.PromoteaUsertoTeamLeaderforaTeam_contentType = config.PromoteaUsertoTeamLeaderforaTeam_contentType;
        this.PromoteaUsertoTeamLeaderforaTeam_contentTypeType = config.PromoteaUsertoTeamLeaderforaTeam_contentTypeType || 'str';
        this.PromoteaUsertoTeamLeaderforaTeam_teamId = config.PromoteaUsertoTeamLeaderforaTeam_teamId;
        this.PromoteaUsertoTeamLeaderforaTeam_teamIdType = config.PromoteaUsertoTeamLeaderforaTeam_teamIdType || 'str';
        this.PromoteaUsertoTeamLeaderforaTeam_userId = config.PromoteaUsertoTeamLeaderforaTeam_userId;
        this.PromoteaUsertoTeamLeaderforaTeam_userIdType = config.PromoteaUsertoTeamLeaderforaTeam_userIdType || 'str';
        this.DemoteaTeamLeaderonaTeam_source = config.DemoteaTeamLeaderonaTeam_source;
        this.DemoteaTeamLeaderonaTeam_sourceType = config.DemoteaTeamLeaderonaTeam_sourceType || 'str';
        this.DemoteaTeamLeaderonaTeam_contentType = config.DemoteaTeamLeaderonaTeam_contentType;
        this.DemoteaTeamLeaderonaTeam_contentTypeType = config.DemoteaTeamLeaderonaTeam_contentTypeType || 'str';
        this.DemoteaTeamLeaderonaTeam_teamId = config.DemoteaTeamLeaderonaTeam_teamId;
        this.DemoteaTeamLeaderonaTeam_teamIdType = config.DemoteaTeamLeaderonaTeam_teamIdType || 'str';
        this.DemoteaTeamLeaderonaTeam_userId = config.DemoteaTeamLeaderonaTeam_userId;
        this.DemoteaTeamLeaderonaTeam_userIdType = config.DemoteaTeamLeaderonaTeam_userIdType || 'str';
        this.GetTeamLeadersforaTeam_source = config.GetTeamLeadersforaTeam_source;
        this.GetTeamLeadersforaTeam_sourceType = config.GetTeamLeadersforaTeam_sourceType || 'str';
        this.GetTeamLeadersforaTeam_format = config.GetTeamLeadersforaTeam_format;
        this.GetTeamLeadersforaTeam_formatType = config.GetTeamLeadersforaTeam_formatType || 'str';
        this.GetTeamLeadersforaTeam_apikey = config.GetTeamLeadersforaTeam_apikey;
        this.GetTeamLeadersforaTeam_apikeyType = config.GetTeamLeadersforaTeam_apikeyType || 'str';
        this.GetTeamLeadersforaTeam_teamId = config.GetTeamLeadersforaTeam_teamId;
        this.GetTeamLeadersforaTeam_teamIdType = config.GetTeamLeadersforaTeam_teamIdType || 'str';
        this.PromoteaUsertoTeamAdminforaTeam_source = config.PromoteaUsertoTeamAdminforaTeam_source;
        this.PromoteaUsertoTeamAdminforaTeam_sourceType = config.PromoteaUsertoTeamAdminforaTeam_sourceType || 'str';
        this.PromoteaUsertoTeamAdminforaTeam_contentType = config.PromoteaUsertoTeamAdminforaTeam_contentType;
        this.PromoteaUsertoTeamAdminforaTeam_contentTypeType = config.PromoteaUsertoTeamAdminforaTeam_contentTypeType || 'str';
        this.PromoteaUsertoTeamAdminforaTeam_teamId = config.PromoteaUsertoTeamAdminforaTeam_teamId;
        this.PromoteaUsertoTeamAdminforaTeam_teamIdType = config.PromoteaUsertoTeamAdminforaTeam_teamIdType || 'str';
        this.PromoteaUsertoTeamAdminforaTeam_userId = config.PromoteaUsertoTeamAdminforaTeam_userId;
        this.PromoteaUsertoTeamAdminforaTeam_userIdType = config.PromoteaUsertoTeamAdminforaTeam_userIdType || 'str';
        this.DemoteaTeamAdministratoronaTeam_source = config.DemoteaTeamAdministratoronaTeam_source;
        this.DemoteaTeamAdministratoronaTeam_sourceType = config.DemoteaTeamAdministratoronaTeam_sourceType || 'str';
        this.DemoteaTeamAdministratoronaTeam_contentType = config.DemoteaTeamAdministratoronaTeam_contentType;
        this.DemoteaTeamAdministratoronaTeam_contentTypeType = config.DemoteaTeamAdministratoronaTeam_contentTypeType || 'str';
        this.DemoteaTeamAdministratoronaTeam_teamId = config.DemoteaTeamAdministratoronaTeam_teamId;
        this.DemoteaTeamAdministratoronaTeam_teamIdType = config.DemoteaTeamAdministratoronaTeam_teamIdType || 'str';
        this.DemoteaTeamAdministratoronaTeam_userId = config.DemoteaTeamAdministratoronaTeam_userId;
        this.DemoteaTeamAdministratoronaTeam_userIdType = config.DemoteaTeamAdministratoronaTeam_userIdType || 'str';
        this.GetTeamAdministratorsforaTeam_source = config.GetTeamAdministratorsforaTeam_source;
        this.GetTeamAdministratorsforaTeam_sourceType = config.GetTeamAdministratorsforaTeam_sourceType || 'str';
        this.GetTeamAdministratorsforaTeam_format = config.GetTeamAdministratorsforaTeam_format;
        this.GetTeamAdministratorsforaTeam_formatType = config.GetTeamAdministratorsforaTeam_formatType || 'str';
        this.GetTeamAdministratorsforaTeam_apikey = config.GetTeamAdministratorsforaTeam_apikey;
        this.GetTeamAdministratorsforaTeam_apikeyType = config.GetTeamAdministratorsforaTeam_apikeyType || 'str';
        this.GetTeamAdministratorsforaTeam_teamId = config.GetTeamAdministratorsforaTeam_teamId;
        this.GetTeamAdministratorsforaTeam_teamIdType = config.GetTeamAdministratorsforaTeam_teamIdType || 'str';
        this.GetUsersinaTeam_source = config.GetUsersinaTeam_source;
        this.GetUsersinaTeam_sourceType = config.GetUsersinaTeam_sourceType || 'str';
        this.GetUsersinaTeam_format = config.GetUsersinaTeam_format;
        this.GetUsersinaTeam_formatType = config.GetUsersinaTeam_formatType || 'str';
        this.GetUsersinaTeam_limit = config.GetUsersinaTeam_limit;
        this.GetUsersinaTeam_limitType = config.GetUsersinaTeam_limitType || 'str';
        this.GetUsersinaTeam_apikey = config.GetUsersinaTeam_apikey;
        this.GetUsersinaTeam_apikeyType = config.GetUsersinaTeam_apikeyType || 'str';
        this.GetUsersinaTeam_teamId = config.GetUsersinaTeam_teamId;
        this.GetUsersinaTeam_teamIdType = config.GetUsersinaTeam_teamIdType || 'str';
        this.AssignUserstoaTeam_source = config.AssignUserstoaTeam_source;
        this.AssignUserstoaTeam_sourceType = config.AssignUserstoaTeam_sourceType || 'str';
        this.AssignUserstoaTeam_format = config.AssignUserstoaTeam_format;
        this.AssignUserstoaTeam_formatType = config.AssignUserstoaTeam_formatType || 'str';
        this.AssignUserstoaTeam_contentType = config.AssignUserstoaTeam_contentType;
        this.AssignUserstoaTeam_contentTypeType = config.AssignUserstoaTeam_contentTypeType || 'str';
        this.AssignUserstoaTeam_body = config.AssignUserstoaTeam_body;
        this.AssignUserstoaTeam_bodyType = config.AssignUserstoaTeam_bodyType || 'str';
        this.AssignUserstoaTeam_teamId = config.AssignUserstoaTeam_teamId;
        this.AssignUserstoaTeam_teamIdType = config.AssignUserstoaTeam_teamIdType || 'str';
        this.UnAssignUsersfromaTeam_source = config.UnAssignUsersfromaTeam_source;
        this.UnAssignUsersfromaTeam_sourceType = config.UnAssignUsersfromaTeam_sourceType || 'str';
        this.UnAssignUsersfromaTeam_format = config.UnAssignUsersfromaTeam_format;
        this.UnAssignUsersfromaTeam_formatType = config.UnAssignUsersfromaTeam_formatType || 'str';
        this.UnAssignUsersfromaTeam_contentType = config.UnAssignUsersfromaTeam_contentType;
        this.UnAssignUsersfromaTeam_contentTypeType = config.UnAssignUsersfromaTeam_contentTypeType || 'str';
        this.UnAssignUsersfromaTeam_teamId = config.UnAssignUsersfromaTeam_teamId;
        this.UnAssignUsersfromaTeam_teamIdType = config.UnAssignUsersfromaTeam_teamIdType || 'str';
        this.UnAssignUsersfromaTeam_userId = config.UnAssignUsersfromaTeam_userId;
        this.UnAssignUsersfromaTeam_userIdType = config.UnAssignUsersfromaTeam_userIdType || 'str';
        this.UnAssignaUserfromAllTeams_source = config.UnAssignaUserfromAllTeams_source;
        this.UnAssignaUserfromAllTeams_sourceType = config.UnAssignaUserfromAllTeams_sourceType || 'str';
        this.UnAssignaUserfromAllTeams_contentType = config.UnAssignaUserfromAllTeams_contentType;
        this.UnAssignaUserfromAllTeams_contentTypeType = config.UnAssignaUserfromAllTeams_contentTypeType || 'str';
        this.UnAssignaUserfromAllTeams_userId = config.UnAssignaUserfromAllTeams_userId;
        this.UnAssignaUserfromAllTeams_userIdType = config.UnAssignaUserfromAllTeams_userIdType || 'str';
        this.GetalistofAllTeamsaUserisAssignedto_source = config.GetalistofAllTeamsaUserisAssignedto_source;
        this.GetalistofAllTeamsaUserisAssignedto_sourceType = config.GetalistofAllTeamsaUserisAssignedto_sourceType || 'str';
        this.GetalistofAllTeamsaUserisAssignedto_format = config.GetalistofAllTeamsaUserisAssignedto_format;
        this.GetalistofAllTeamsaUserisAssignedto_formatType = config.GetalistofAllTeamsaUserisAssignedto_formatType || 'str';
        this.GetalistofAllTeamsaUserisAssignedto_apikey = config.GetalistofAllTeamsaUserisAssignedto_apikey;
        this.GetalistofAllTeamsaUserisAssignedto_apikeyType = config.GetalistofAllTeamsaUserisAssignedto_apikeyType || 'str';
        this.GetalistofAllTeamsaUserisAssignedto_userId = config.GetalistofAllTeamsaUserisAssignedto_userId;
        this.GetalistofAllTeamsaUserisAssignedto_userIdType = config.GetalistofAllTeamsaUserisAssignedto_userIdType || 'str';
        this.GetaListofAllTeams_source = config.GetaListofAllTeams_source;
        this.GetaListofAllTeams_sourceType = config.GetaListofAllTeams_sourceType || 'str';
        this.GetaListofAllTeams_format = config.GetaListofAllTeams_format;
        this.GetaListofAllTeams_formatType = config.GetaListofAllTeams_formatType || 'str';
        this.GetaListofAllTeams_limit = config.GetaListofAllTeams_limit;
        this.GetaListofAllTeams_limitType = config.GetaListofAllTeams_limitType || 'str';
        this.GetaListofAllTeams_apikey = config.GetaListofAllTeams_apikey;
        this.GetaListofAllTeams_apikeyType = config.GetaListofAllTeams_apikeyType || 'str';
        this.CreateaTeamorSubTeam_source = config.CreateaTeamorSubTeam_source;
        this.CreateaTeamorSubTeam_sourceType = config.CreateaTeamorSubTeam_sourceType || 'str';
        this.CreateaTeamorSubTeam_format = config.CreateaTeamorSubTeam_format;
        this.CreateaTeamorSubTeam_formatType = config.CreateaTeamorSubTeam_formatType || 'str';
        this.CreateaTeamorSubTeam_contentType = config.CreateaTeamorSubTeam_contentType;
        this.CreateaTeamorSubTeam_contentTypeType = config.CreateaTeamorSubTeam_contentTypeType || 'str';
        this.CreateaTeamorSubTeam_body = config.CreateaTeamorSubTeam_body;
        this.CreateaTeamorSubTeam_bodyType = config.CreateaTeamorSubTeam_bodyType || 'str';
        this.GetaTeam_source = config.GetaTeam_source;
        this.GetaTeam_sourceType = config.GetaTeam_sourceType || 'str';
        this.GetaTeam_format = config.GetaTeam_format;
        this.GetaTeam_formatType = config.GetaTeam_formatType || 'str';
        this.GetaTeam_apikey = config.GetaTeam_apikey;
        this.GetaTeam_apikeyType = config.GetaTeam_apikeyType || 'str';
        this.GetaTeam_teamId = config.GetaTeam_teamId;
        this.GetaTeam_teamIdType = config.GetaTeam_teamIdType || 'str';
        this.UpdateaTeam_source = config.UpdateaTeam_source;
        this.UpdateaTeam_sourceType = config.UpdateaTeam_sourceType || 'str';
        this.UpdateaTeam_format = config.UpdateaTeam_format;
        this.UpdateaTeam_formatType = config.UpdateaTeam_formatType || 'str';
        this.UpdateaTeam_contentType = config.UpdateaTeam_contentType;
        this.UpdateaTeam_contentTypeType = config.UpdateaTeam_contentTypeType || 'str';
        this.UpdateaTeam_body = config.UpdateaTeam_body;
        this.UpdateaTeam_bodyType = config.UpdateaTeam_bodyType || 'str';
        this.UpdateaTeam_secondTeamId = config.UpdateaTeam_secondTeamId;
        this.UpdateaTeam_secondTeamIdType = config.UpdateaTeam_secondTeamIdType || 'str';
        this.GETTeamTeam_Id_source = config.GETTeamTeam_Id_source;
        this.GETTeamTeam_Id_sourceType = config.GETTeamTeam_Id_sourceType || 'str';
        this.GETTeamTeam_Id_format = config.GETTeamTeam_Id_format;
        this.GETTeamTeam_Id_formatType = config.GETTeamTeam_Id_formatType || 'str';
        this.GETTeamTeam_Id_apikey = config.GETTeamTeam_Id_apikey;
        this.GETTeamTeam_Id_apikeyType = config.GETTeamTeam_Id_apikeyType || 'str';
        this.GETTeamTeam_Id_secondTeamId = config.GETTeamTeam_Id_secondTeamId;
        this.GETTeamTeam_Id_secondTeamIdType = config.GETTeamTeam_Id_secondTeamIdType || 'str';
        this.DeleteaTeamorSubteam_source = config.DeleteaTeamorSubteam_source;
        this.DeleteaTeamorSubteam_sourceType = config.DeleteaTeamorSubteam_sourceType || 'str';
        this.DeleteaTeamorSubteam_apikey = config.DeleteaTeamorSubteam_apikey;
        this.DeleteaTeamorSubteam_apikeyType = config.DeleteaTeamorSubteam_apikeyType || 'str';
        this.DeleteaTeamorSubteam_secondTeamId = config.DeleteaTeamorSubteam_secondTeamId;
        this.DeleteaTeamorSubteam_secondTeamIdType = config.DeleteaTeamorSubteam_secondTeamIdType || 'str';
        this.CreateaNewILTsessionforaModule_source = config.CreateaNewILTsessionforaModule_source;
        this.CreateaNewILTsessionforaModule_sourceType = config.CreateaNewILTsessionforaModule_sourceType || 'str';
        this.CreateaNewILTsessionforaModule_format = config.CreateaNewILTsessionforaModule_format;
        this.CreateaNewILTsessionforaModule_formatType = config.CreateaNewILTsessionforaModule_formatType || 'str';
        this.CreateaNewILTsessionforaModule_contentType = config.CreateaNewILTsessionforaModule_contentType;
        this.CreateaNewILTsessionforaModule_contentTypeType = config.CreateaNewILTsessionforaModule_contentTypeType || 'str';
        this.CreateaNewILTsessionforaModule_body = config.CreateaNewILTsessionforaModule_body;
        this.CreateaNewILTsessionforaModule_bodyType = config.CreateaNewILTsessionforaModule_bodyType || 'str';
        this.CreateaNewILTsessionforaModule_courseId = config.CreateaNewILTsessionforaModule_courseId;
        this.CreateaNewILTsessionforaModule_courseIdType = config.CreateaNewILTsessionforaModule_courseIdType || 'str';
        this.CreateaNewILTsessionforaModule_moduleId = config.CreateaNewILTsessionforaModule_moduleId;
        this.CreateaNewILTsessionforaModule_moduleIdType = config.CreateaNewILTsessionforaModule_moduleIdType || 'str';
        this.GetaListofSessionsinanILTModule_source = config.GetaListofSessionsinanILTModule_source;
        this.GetaListofSessionsinanILTModule_sourceType = config.GetaListofSessionsinanILTModule_sourceType || 'str';
        this.GetaListofSessionsinanILTModule_format = config.GetaListofSessionsinanILTModule_format;
        this.GetaListofSessionsinanILTModule_formatType = config.GetaListofSessionsinanILTModule_formatType || 'str';
        this.GetaListofSessionsinanILTModule_apikey = config.GetaListofSessionsinanILTModule_apikey;
        this.GetaListofSessionsinanILTModule_apikeyType = config.GetaListofSessionsinanILTModule_apikeyType || 'str';
        this.GetaListofSessionsinanILTModule_courseId = config.GetaListofSessionsinanILTModule_courseId;
        this.GetaListofSessionsinanILTModule_courseIdType = config.GetaListofSessionsinanILTModule_courseIdType || 'str';
        this.GetaListofSessionsinanILTModule_moduleId = config.GetaListofSessionsinanILTModule_moduleId;
        this.GetaListofSessionsinanILTModule_moduleIdType = config.GetaListofSessionsinanILTModule_moduleIdType || 'str';
        this.GetaListofFutureSessionsforanILTModule_source = config.GetaListofFutureSessionsforanILTModule_source;
        this.GetaListofFutureSessionsforanILTModule_sourceType = config.GetaListofFutureSessionsforanILTModule_sourceType || 'str';
        this.GetaListofFutureSessionsforanILTModule_format = config.GetaListofFutureSessionsforanILTModule_format;
        this.GetaListofFutureSessionsforanILTModule_formatType = config.GetaListofFutureSessionsforanILTModule_formatType || 'str';
        this.GetaListofFutureSessionsforanILTModule_apikey = config.GetaListofFutureSessionsforanILTModule_apikey;
        this.GetaListofFutureSessionsforanILTModule_apikeyType = config.GetaListofFutureSessionsforanILTModule_apikeyType || 'str';
        this.GetaListofallILTModulesinaCourse_source = config.GetaListofallILTModulesinaCourse_source;
        this.GetaListofallILTModulesinaCourse_sourceType = config.GetaListofallILTModulesinaCourse_sourceType || 'str';
        this.GetaListofallILTModulesinaCourse_format = config.GetaListofallILTModulesinaCourse_format;
        this.GetaListofallILTModulesinaCourse_formatType = config.GetaListofallILTModulesinaCourse_formatType || 'str';
        this.GetaListofallILTModulesinaCourse_apikey = config.GetaListofallILTModulesinaCourse_apikey;
        this.GetaListofallILTModulesinaCourse_apikeyType = config.GetaListofallILTModulesinaCourse_apikeyType || 'str';
        this.GetaListofallILTModulesinaCourse_courseId = config.GetaListofallILTModulesinaCourse_courseId;
        this.GetaListofallILTModulesinaCourse_courseIdType = config.GetaListofallILTModulesinaCourse_courseIdType || 'str';
        this.GetaSpecificSessioninanILTModule_source = config.GetaSpecificSessioninanILTModule_source;
        this.GetaSpecificSessioninanILTModule_sourceType = config.GetaSpecificSessioninanILTModule_sourceType || 'str';
        this.GetaSpecificSessioninanILTModule_format = config.GetaSpecificSessioninanILTModule_format;
        this.GetaSpecificSessioninanILTModule_formatType = config.GetaSpecificSessioninanILTModule_formatType || 'str';
        this.GetaSpecificSessioninanILTModule_apikey = config.GetaSpecificSessioninanILTModule_apikey;
        this.GetaSpecificSessioninanILTModule_apikeyType = config.GetaSpecificSessioninanILTModule_apikeyType || 'str';
        this.GetaSpecificSessioninanILTModule_courseId = config.GetaSpecificSessioninanILTModule_courseId;
        this.GetaSpecificSessioninanILTModule_courseIdType = config.GetaSpecificSessioninanILTModule_courseIdType || 'str';
        this.GetaSpecificSessioninanILTModule_moduleId = config.GetaSpecificSessioninanILTModule_moduleId;
        this.GetaSpecificSessioninanILTModule_moduleIdType = config.GetaSpecificSessioninanILTModule_moduleIdType || 'str';
        this.GetaSpecificSessioninanILTModule_sessionId = config.GetaSpecificSessioninanILTModule_sessionId;
        this.GetaSpecificSessioninanILTModule_sessionIdType = config.GetaSpecificSessioninanILTModule_sessionIdType || 'str';
        this.UpdateaSessioninanILTModule_source = config.UpdateaSessioninanILTModule_source;
        this.UpdateaSessioninanILTModule_sourceType = config.UpdateaSessioninanILTModule_sourceType || 'str';
        this.UpdateaSessioninanILTModule_format = config.UpdateaSessioninanILTModule_format;
        this.UpdateaSessioninanILTModule_formatType = config.UpdateaSessioninanILTModule_formatType || 'str';
        this.UpdateaSessioninanILTModule_contentType = config.UpdateaSessioninanILTModule_contentType;
        this.UpdateaSessioninanILTModule_contentTypeType = config.UpdateaSessioninanILTModule_contentTypeType || 'str';
        this.UpdateaSessioninanILTModule_body = config.UpdateaSessioninanILTModule_body;
        this.UpdateaSessioninanILTModule_bodyType = config.UpdateaSessioninanILTModule_bodyType || 'str';
        this.UpdateaSessioninanILTModule_courseId = config.UpdateaSessioninanILTModule_courseId;
        this.UpdateaSessioninanILTModule_courseIdType = config.UpdateaSessioninanILTModule_courseIdType || 'str';
        this.UpdateaSessioninanILTModule_moduleId = config.UpdateaSessioninanILTModule_moduleId;
        this.UpdateaSessioninanILTModule_moduleIdType = config.UpdateaSessioninanILTModule_moduleIdType || 'str';
        this.UpdateaSessioninanILTModule_sessionId = config.UpdateaSessioninanILTModule_sessionId;
        this.UpdateaSessioninanILTModule_sessionIdType = config.UpdateaSessioninanILTModule_sessionIdType || 'str';
        this.DeleteaSessioninanILTModule_source = config.DeleteaSessioninanILTModule_source;
        this.DeleteaSessioninanILTModule_sourceType = config.DeleteaSessioninanILTModule_sourceType || 'str';
        this.DeleteaSessioninanILTModule_format = config.DeleteaSessioninanILTModule_format;
        this.DeleteaSessioninanILTModule_formatType = config.DeleteaSessioninanILTModule_formatType || 'str';
        this.DeleteaSessioninanILTModule_apikey = config.DeleteaSessioninanILTModule_apikey;
        this.DeleteaSessioninanILTModule_apikeyType = config.DeleteaSessioninanILTModule_apikeyType || 'str';
        this.DeleteaSessioninanILTModule_courseId = config.DeleteaSessioninanILTModule_courseId;
        this.DeleteaSessioninanILTModule_courseIdType = config.DeleteaSessioninanILTModule_courseIdType || 'str';
        this.DeleteaSessioninanILTModule_moduleId = config.DeleteaSessioninanILTModule_moduleId;
        this.DeleteaSessioninanILTModule_moduleIdType = config.DeleteaSessioninanILTModule_moduleIdType || 'str';
        this.DeleteaSessioninanILTModule_sessionId = config.DeleteaSessioninanILTModule_sessionId;
        this.DeleteaSessioninanILTModule_sessionIdType = config.DeleteaSessioninanILTModule_sessionIdType || 'str';
        this.GetaListofAllInstructors_source = config.GetaListofAllInstructors_source;
        this.GetaListofAllInstructors_sourceType = config.GetaListofAllInstructors_sourceType || 'str';
        this.GetaListofAllInstructors_format = config.GetaListofAllInstructors_format;
        this.GetaListofAllInstructors_formatType = config.GetaListofAllInstructors_formatType || 'str';
        this.GetaListofAllInstructors_apikey = config.GetaListofAllInstructors_apikey;
        this.GetaListofAllInstructors_apikeyType = config.GetaListofAllInstructors_apikeyType || 'str';
        this.GetSessionRollCallforaSession_source = config.GetSessionRollCallforaSession_source;
        this.GetSessionRollCallforaSession_sourceType = config.GetSessionRollCallforaSession_sourceType || 'str';
        this.GetSessionRollCallforaSession_format = config.GetSessionRollCallforaSession_format;
        this.GetSessionRollCallforaSession_formatType = config.GetSessionRollCallforaSession_formatType || 'str';
        this.GetSessionRollCallforaSession_contentType = config.GetSessionRollCallforaSession_contentType;
        this.GetSessionRollCallforaSession_contentTypeType = config.GetSessionRollCallforaSession_contentTypeType || 'str';
        this.GetSessionRollCallforaSession_courseId = config.GetSessionRollCallforaSession_courseId;
        this.GetSessionRollCallforaSession_courseIdType = config.GetSessionRollCallforaSession_courseIdType || 'str';
        this.GetSessionRollCallforaSession_moduleId = config.GetSessionRollCallforaSession_moduleId;
        this.GetSessionRollCallforaSession_moduleIdType = config.GetSessionRollCallforaSession_moduleIdType || 'str';
        this.GetSessionRollCallforaSession_sessionId = config.GetSessionRollCallforaSession_sessionId;
        this.GetSessionRollCallforaSession_sessionIdType = config.GetSessionRollCallforaSession_sessionIdType || 'str';
        this.MarkanILTSessionCompleteandaddScore_source = config.MarkanILTSessionCompleteandaddScore_source;
        this.MarkanILTSessionCompleteandaddScore_sourceType = config.MarkanILTSessionCompleteandaddScore_sourceType || 'str';
        this.MarkanILTSessionCompleteandaddScore_format = config.MarkanILTSessionCompleteandaddScore_format;
        this.MarkanILTSessionCompleteandaddScore_formatType = config.MarkanILTSessionCompleteandaddScore_formatType || 'str';
        this.MarkanILTSessionCompleteandaddScore_contentType = config.MarkanILTSessionCompleteandaddScore_contentType;
        this.MarkanILTSessionCompleteandaddScore_contentTypeType = config.MarkanILTSessionCompleteandaddScore_contentTypeType || 'str';
        this.MarkanILTSessionCompleteandaddScore_body = config.MarkanILTSessionCompleteandaddScore_body;
        this.MarkanILTSessionCompleteandaddScore_bodyType = config.MarkanILTSessionCompleteandaddScore_bodyType || 'str';
        this.MarkanILTSessionCompleteandaddScore_courseId = config.MarkanILTSessionCompleteandaddScore_courseId;
        this.MarkanILTSessionCompleteandaddScore_courseIdType = config.MarkanILTSessionCompleteandaddScore_courseIdType || 'str';
        this.MarkanILTSessionCompleteandaddScore_moduleId = config.MarkanILTSessionCompleteandaddScore_moduleId;
        this.MarkanILTSessionCompleteandaddScore_moduleIdType = config.MarkanILTSessionCompleteandaddScore_moduleIdType || 'str';
        this.MarkanILTSessionCompleteandaddScore_sessionId = config.MarkanILTSessionCompleteandaddScore_sessionId;
        this.MarkanILTSessionCompleteandaddScore_sessionIdType = config.MarkanILTSessionCompleteandaddScore_sessionIdType || 'str';
        this.GetalistofUsersRegisteredtoaSession_source = config.GetalistofUsersRegisteredtoaSession_source;
        this.GetalistofUsersRegisteredtoaSession_sourceType = config.GetalistofUsersRegisteredtoaSession_sourceType || 'str';
        this.GetalistofUsersRegisteredtoaSession_format = config.GetalistofUsersRegisteredtoaSession_format;
        this.GetalistofUsersRegisteredtoaSession_formatType = config.GetalistofUsersRegisteredtoaSession_formatType || 'str';
        this.GetalistofUsersRegisteredtoaSession_contentType = config.GetalistofUsersRegisteredtoaSession_contentType;
        this.GetalistofUsersRegisteredtoaSession_contentTypeType = config.GetalistofUsersRegisteredtoaSession_contentTypeType || 'str';
        this.GetalistofUsersRegisteredtoaSession_courseId = config.GetalistofUsersRegisteredtoaSession_courseId;
        this.GetalistofUsersRegisteredtoaSession_courseIdType = config.GetalistofUsersRegisteredtoaSession_courseIdType || 'str';
        this.GetalistofUsersRegisteredtoaSession_moduleId = config.GetalistofUsersRegisteredtoaSession_moduleId;
        this.GetalistofUsersRegisteredtoaSession_moduleIdType = config.GetalistofUsersRegisteredtoaSession_moduleIdType || 'str';
        this.GetuserAttendanceforaSession_source = config.GetuserAttendanceforaSession_source;
        this.GetuserAttendanceforaSession_sourceType = config.GetuserAttendanceforaSession_sourceType || 'str';
        this.GetuserAttendanceforaSession_format = config.GetuserAttendanceforaSession_format;
        this.GetuserAttendanceforaSession_formatType = config.GetuserAttendanceforaSession_formatType || 'str';
        this.GetuserAttendanceforaSession_contentType = config.GetuserAttendanceforaSession_contentType;
        this.GetuserAttendanceforaSession_contentTypeType = config.GetuserAttendanceforaSession_contentTypeType || 'str';
        this.GetuserAttendanceforaSession_courseId = config.GetuserAttendanceforaSession_courseId;
        this.GetuserAttendanceforaSession_courseIdType = config.GetuserAttendanceforaSession_courseIdType || 'str';
        this.GetuserAttendanceforaSession_moduleId = config.GetuserAttendanceforaSession_moduleId;
        this.GetuserAttendanceforaSession_moduleIdType = config.GetuserAttendanceforaSession_moduleIdType || 'str';
        this.GetuserAttendanceforaSession_sessionId = config.GetuserAttendanceforaSession_sessionId;
        this.GetuserAttendanceforaSession_sessionIdType = config.GetuserAttendanceforaSession_sessionIdType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_source = config.MarkAttendanceforUsersRegisteredtoaSession_source;
        this.MarkAttendanceforUsersRegisteredtoaSession_sourceType = config.MarkAttendanceforUsersRegisteredtoaSession_sourceType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_apikey = config.MarkAttendanceforUsersRegisteredtoaSession_apikey;
        this.MarkAttendanceforUsersRegisteredtoaSession_apikeyType = config.MarkAttendanceforUsersRegisteredtoaSession_apikeyType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_courseId = config.MarkAttendanceforUsersRegisteredtoaSession_courseId;
        this.MarkAttendanceforUsersRegisteredtoaSession_courseIdType = config.MarkAttendanceforUsersRegisteredtoaSession_courseIdType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_moduleId = config.MarkAttendanceforUsersRegisteredtoaSession_moduleId;
        this.MarkAttendanceforUsersRegisteredtoaSession_moduleIdType = config.MarkAttendanceforUsersRegisteredtoaSession_moduleIdType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_sessionDayId = config.MarkAttendanceforUsersRegisteredtoaSession_sessionDayId;
        this.MarkAttendanceforUsersRegisteredtoaSession_sessionDayIdType = config.MarkAttendanceforUsersRegisteredtoaSession_sessionDayIdType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_userId = config.MarkAttendanceforUsersRegisteredtoaSession_userId;
        this.MarkAttendanceforUsersRegisteredtoaSession_userIdType = config.MarkAttendanceforUsersRegisteredtoaSession_userIdType || 'str';
        this.MarkAttendanceforUsersRegisteredtoaSession_attended = config.MarkAttendanceforUsersRegisteredtoaSession_attended;
        this.MarkAttendanceforUsersRegisteredtoaSession_attendedType = config.MarkAttendanceforUsersRegisteredtoaSession_attendedType || 'str';
        this.GetaListofSessionsforaSpecificInstructor_source = config.GetaListofSessionsforaSpecificInstructor_source;
        this.GetaListofSessionsforaSpecificInstructor_sourceType = config.GetaListofSessionsforaSpecificInstructor_sourceType || 'str';
        this.GetaListofSessionsforaSpecificInstructor_format = config.GetaListofSessionsforaSpecificInstructor_format;
        this.GetaListofSessionsforaSpecificInstructor_formatType = config.GetaListofSessionsforaSpecificInstructor_formatType || 'str';
        this.GetaListofSessionsforaSpecificInstructor_apikey = config.GetaListofSessionsforaSpecificInstructor_apikey;
        this.GetaListofSessionsforaSpecificInstructor_apikeyType = config.GetaListofSessionsforaSpecificInstructor_apikeyType || 'str';
        this.GetaListofSessionsforaSpecificInstructor_instructorId = config.GetaListofSessionsforaSpecificInstructor_instructorId;
        this.GetaListofSessionsforaSpecificInstructor_instructorIdType = config.GetaListofSessionsforaSpecificInstructor_instructorIdType || 'str';
        this.RegisteraUsertoaSession_source = config.RegisteraUsertoaSession_source;
        this.RegisteraUsertoaSession_sourceType = config.RegisteraUsertoaSession_sourceType || 'str';
        this.RegisteraUsertoaSession_format = config.RegisteraUsertoaSession_format;
        this.RegisteraUsertoaSession_formatType = config.RegisteraUsertoaSession_formatType || 'str';
        this.RegisteraUsertoaSession_apikey = config.RegisteraUsertoaSession_apikey;
        this.RegisteraUsertoaSession_apikeyType = config.RegisteraUsertoaSession_apikeyType || 'str';
        this.RegisteraUsertoaSession_courseId = config.RegisteraUsertoaSession_courseId;
        this.RegisteraUsertoaSession_courseIdType = config.RegisteraUsertoaSession_courseIdType || 'str';
        this.RegisteraUsertoaSession_moduleId = config.RegisteraUsertoaSession_moduleId;
        this.RegisteraUsertoaSession_moduleIdType = config.RegisteraUsertoaSession_moduleIdType || 'str';
        this.RegisteraUsertoaSession_sessionId = config.RegisteraUsertoaSession_sessionId;
        this.RegisteraUsertoaSession_sessionIdType = config.RegisteraUsertoaSession_sessionIdType || 'str';
        this.RegisteraUsertoaSession_userId = config.RegisteraUsertoaSession_userId;
        this.RegisteraUsertoaSession_userIdType = config.RegisteraUsertoaSession_userIdType || 'str';
        this.CreateanILTModuleinaCourse_source = config.CreateanILTModuleinaCourse_source;
        this.CreateanILTModuleinaCourse_sourceType = config.CreateanILTModuleinaCourse_sourceType || 'str';
        this.CreateanILTModuleinaCourse_format = config.CreateanILTModuleinaCourse_format;
        this.CreateanILTModuleinaCourse_formatType = config.CreateanILTModuleinaCourse_formatType || 'str';
        this.CreateanILTModuleinaCourse_contentType = config.CreateanILTModuleinaCourse_contentType;
        this.CreateanILTModuleinaCourse_contentTypeType = config.CreateanILTModuleinaCourse_contentTypeType || 'str';
        this.CreateanILTModuleinaCourse_body = config.CreateanILTModuleinaCourse_body;
        this.CreateanILTModuleinaCourse_bodyType = config.CreateanILTModuleinaCourse_bodyType || 'str';
        this.CreateanILTModuleinaCourse_courseId = config.CreateanILTModuleinaCourse_courseId;
        this.CreateanILTModuleinaCourse_courseIdType = config.CreateanILTModuleinaCourse_courseIdType || 'str';
        this.UpdateanILTModule_source = config.UpdateanILTModule_source;
        this.UpdateanILTModule_sourceType = config.UpdateanILTModule_sourceType || 'str';
        this.UpdateanILTModule_format = config.UpdateanILTModule_format;
        this.UpdateanILTModule_formatType = config.UpdateanILTModule_formatType || 'str';
        this.UpdateanILTModule_contentType = config.UpdateanILTModule_contentType;
        this.UpdateanILTModule_contentTypeType = config.UpdateanILTModule_contentTypeType || 'str';
        this.UpdateanILTModule_body = config.UpdateanILTModule_body;
        this.UpdateanILTModule_bodyType = config.UpdateanILTModule_bodyType || 'str';
        this.UpdateanILTModule_courseId = config.UpdateanILTModule_courseId;
        this.UpdateanILTModule_courseIdType = config.UpdateanILTModule_courseIdType || 'str';
        this.UpdateanILTModule_eventId = config.UpdateanILTModule_eventId;
        this.UpdateanILTModule_eventIdType = config.UpdateanILTModule_eventIdType || 'str';
        this.DeleteanILTModule_source = config.DeleteanILTModule_source;
        this.DeleteanILTModule_sourceType = config.DeleteanILTModule_sourceType || 'str';
        this.DeleteanILTModule_apikey = config.DeleteanILTModule_apikey;
        this.DeleteanILTModule_apikeyType = config.DeleteanILTModule_apikeyType || 'str';
        this.DeleteanILTModule_courseId = config.DeleteanILTModule_courseId;
        this.DeleteanILTModule_courseIdType = config.DeleteanILTModule_courseIdType || 'str';
        this.DeleteanILTModule_eventId = config.DeleteanILTModule_eventId;
        this.DeleteanILTModule_eventIdType = config.DeleteanILTModule_eventIdType || 'str';
        this.GetAchievements_source = config.GetAchievements_source;
        this.GetAchievements_sourceType = config.GetAchievements_sourceType || 'str';
        this.GetAchievements_format = config.GetAchievements_format;
        this.GetAchievements_formatType = config.GetAchievements_formatType || 'str';
        this.GetAchievements_apikey = config.GetAchievements_apikey;
        this.GetAchievements_apikeyType = config.GetAchievements_apikeyType || 'str';
        this.GetTotalBadgesandPointsForUser_source = config.GetTotalBadgesandPointsForUser_source;
        this.GetTotalBadgesandPointsForUser_sourceType = config.GetTotalBadgesandPointsForUser_sourceType || 'str';
        this.GetTotalBadgesandPointsForUser_format = config.GetTotalBadgesandPointsForUser_format;
        this.GetTotalBadgesandPointsForUser_formatType = config.GetTotalBadgesandPointsForUser_formatType || 'str';
        this.GetTotalBadgesandPointsForUser_apikey = config.GetTotalBadgesandPointsForUser_apikey;
        this.GetTotalBadgesandPointsForUser_apikeyType = config.GetTotalBadgesandPointsForUser_apikeyType || 'str';
        this.GetTotalBadgesandPointsForUser_userId = config.GetTotalBadgesandPointsForUser_userId;
        this.GetTotalBadgesandPointsForUser_userIdType = config.GetTotalBadgesandPointsForUser_userIdType || 'str';
        this.GetBadgesandPointsEarnedByUser_source = config.GetBadgesandPointsEarnedByUser_source;
        this.GetBadgesandPointsEarnedByUser_sourceType = config.GetBadgesandPointsEarnedByUser_sourceType || 'str';
        this.GetBadgesandPointsEarnedByUser_format = config.GetBadgesandPointsEarnedByUser_format;
        this.GetBadgesandPointsEarnedByUser_formatType = config.GetBadgesandPointsEarnedByUser_formatType || 'str';
        this.GetBadgesandPointsEarnedByUser_apikey = config.GetBadgesandPointsEarnedByUser_apikey;
        this.GetBadgesandPointsEarnedByUser_apikeyType = config.GetBadgesandPointsEarnedByUser_apikeyType || 'str';
        this.GetBadgesandPointsEarnedByUser_userId = config.GetBadgesandPointsEarnedByUser_userId;
        this.GetBadgesandPointsEarnedByUser_userIdType = config.GetBadgesandPointsEarnedByUser_userIdType || 'str';
        this.GetBadgesandPointsearnedbyaTeam_source = config.GetBadgesandPointsearnedbyaTeam_source;
        this.GetBadgesandPointsearnedbyaTeam_sourceType = config.GetBadgesandPointsearnedbyaTeam_sourceType || 'str';
        this.GetBadgesandPointsearnedbyaTeam_format = config.GetBadgesandPointsearnedbyaTeam_format;
        this.GetBadgesandPointsearnedbyaTeam_formatType = config.GetBadgesandPointsearnedbyaTeam_formatType || 'str';
        this.GetBadgesandPointsearnedbyaTeam_apikey = config.GetBadgesandPointsearnedbyaTeam_apikey;
        this.GetBadgesandPointsearnedbyaTeam_apikeyType = config.GetBadgesandPointsearnedbyaTeam_apikeyType || 'str';
        this.GetBadgesandPointsearnedbyaTeam_teamId = config.GetBadgesandPointsearnedbyaTeam_teamId;
        this.GetBadgesandPointsearnedbyaTeam_teamIdType = config.GetBadgesandPointsearnedbyaTeam_teamIdType || 'str';
        this.ResetBadgesandPointsForaUser_source = config.ResetBadgesandPointsForaUser_source;
        this.ResetBadgesandPointsForaUser_sourceType = config.ResetBadgesandPointsForaUser_sourceType || 'str';
        this.ResetBadgesandPointsForaUser_format = config.ResetBadgesandPointsForaUser_format;
        this.ResetBadgesandPointsForaUser_formatType = config.ResetBadgesandPointsForaUser_formatType || 'str';
        this.ResetBadgesandPointsForaUser_apikey = config.ResetBadgesandPointsForaUser_apikey;
        this.ResetBadgesandPointsForaUser_apikeyType = config.ResetBadgesandPointsForaUser_apikeyType || 'str';
        this.ResetBadgesandPointsForaUser_userId = config.ResetBadgesandPointsForaUser_userId;
        this.ResetBadgesandPointsForaUser_userIdType = config.ResetBadgesandPointsForaUser_userIdType || 'str';
        this.GetUserDetailsST_source = config.GetUserDetailsST_source;
        this.GetUserDetailsST_sourceType = config.GetUserDetailsST_sourceType || 'str';
        this.GetUserDetailsST_since = config.GetUserDetailsST_since;
        this.GetUserDetailsST_sinceType = config.GetUserDetailsST_sinceType || 'str';
        this.GetUserDetailsST_to = config.GetUserDetailsST_to;
        this.GetUserDetailsST_toType = config.GetUserDetailsST_toType || 'str';
        this.GetUserDetailsST_format = config.GetUserDetailsST_format;
        this.GetUserDetailsST_formatType = config.GetUserDetailsST_formatType || 'str';
        this.GetUserDetailsST_apikey = config.GetUserDetailsST_apikey;
        this.GetUserDetailsST_apikeyType = config.GetUserDetailsST_apikeyType || 'str';
        this.GetTeamLearningPathsST_source = config.GetTeamLearningPathsST_source;
        this.GetTeamLearningPathsST_sourceType = config.GetTeamLearningPathsST_sourceType || 'str';
        this.GetTeamLearningPathsST_since = config.GetTeamLearningPathsST_since;
        this.GetTeamLearningPathsST_sinceType = config.GetTeamLearningPathsST_sinceType || 'str';
        this.GetTeamLearningPathsST_to = config.GetTeamLearningPathsST_to;
        this.GetTeamLearningPathsST_toType = config.GetTeamLearningPathsST_toType || 'str';
        this.GetTeamLearningPathsST_format = config.GetTeamLearningPathsST_format;
        this.GetTeamLearningPathsST_formatType = config.GetTeamLearningPathsST_formatType || 'str';
        this.GetTeamLearningPathsST_apikey = config.GetTeamLearningPathsST_apikey;
        this.GetTeamLearningPathsST_apikeyType = config.GetTeamLearningPathsST_apikeyType || 'str';
        this.GetTeamUsersST_source = config.GetTeamUsersST_source;
        this.GetTeamUsersST_sourceType = config.GetTeamUsersST_sourceType || 'str';
        this.GetTeamUsersST_since = config.GetTeamUsersST_since;
        this.GetTeamUsersST_sinceType = config.GetTeamUsersST_sinceType || 'str';
        this.GetTeamUsersST_to = config.GetTeamUsersST_to;
        this.GetTeamUsersST_toType = config.GetTeamUsersST_toType || 'str';
        this.GetTeamUsersST_format = config.GetTeamUsersST_format;
        this.GetTeamUsersST_formatType = config.GetTeamUsersST_formatType || 'str';
        this.GetTeamUsersST_apikey = config.GetTeamUsersST_apikey;
        this.GetTeamUsersST_apikeyType = config.GetTeamUsersST_apikeyType || 'str';
        this.GetResultsST_source = config.GetResultsST_source;
        this.GetResultsST_sourceType = config.GetResultsST_sourceType || 'str';
        this.GetResultsST_since = config.GetResultsST_since;
        this.GetResultsST_sinceType = config.GetResultsST_sinceType || 'str';
        this.GetResultsST_to = config.GetResultsST_to;
        this.GetResultsST_toType = config.GetResultsST_toType || 'str';
        this.GetResultsST_format = config.GetResultsST_format;
        this.GetResultsST_formatType = config.GetResultsST_formatType || 'str';
        this.GetResultsST_apikey = config.GetResultsST_apikey;
        this.GetResultsST_apikeyType = config.GetResultsST_apikeyType || 'str';
        this.GetTeamsST_source = config.GetTeamsST_source;
        this.GetTeamsST_sourceType = config.GetTeamsST_sourceType || 'str';
        this.GetTeamsST_since = config.GetTeamsST_since;
        this.GetTeamsST_sinceType = config.GetTeamsST_sinceType || 'str';
        this.GetTeamsST_to = config.GetTeamsST_to;
        this.GetTeamsST_toType = config.GetTeamsST_toType || 'str';
        this.GetTeamsST_format = config.GetTeamsST_format;
        this.GetTeamsST_formatType = config.GetTeamsST_formatType || 'str';
        this.GetTeamsST_apikey = config.GetTeamsST_apikey;
        this.GetTeamsST_apikeyType = config.GetTeamsST_apikeyType || 'str';
        this.GetCourseModulesST_source = config.GetCourseModulesST_source;
        this.GetCourseModulesST_sourceType = config.GetCourseModulesST_sourceType || 'str';
        this.GetCourseModulesST_since = config.GetCourseModulesST_since;
        this.GetCourseModulesST_sinceType = config.GetCourseModulesST_sinceType || 'str';
        this.GetCourseModulesST_to = config.GetCourseModulesST_to;
        this.GetCourseModulesST_toType = config.GetCourseModulesST_toType || 'str';
        this.GetCourseModulesST_format = config.GetCourseModulesST_format;
        this.GetCourseModulesST_formatType = config.GetCourseModulesST_formatType || 'str';
        this.GetCourseModulesST_apikey = config.GetCourseModulesST_apikey;
        this.GetCourseModulesST_apikeyType = config.GetCourseModulesST_apikeyType || 'str';
        this.GetAchievementsST_source = config.GetAchievementsST_source;
        this.GetAchievementsST_sourceType = config.GetAchievementsST_sourceType || 'str';
        this.GetAchievementsST_since = config.GetAchievementsST_since;
        this.GetAchievementsST_sinceType = config.GetAchievementsST_sinceType || 'str';
        this.GetAchievementsST_to = config.GetAchievementsST_to;
        this.GetAchievementsST_toType = config.GetAchievementsST_toType || 'str';
        this.GetAchievementsST_format = config.GetAchievementsST_format;
        this.GetAchievementsST_formatType = config.GetAchievementsST_formatType || 'str';
        this.GetAchievementsST_apikey = config.GetAchievementsST_apikey;
        this.GetAchievementsST_apikeyType = config.GetAchievementsST_apikeyType || 'str';
        this.GetTeamCoursesST_source = config.GetTeamCoursesST_source;
        this.GetTeamCoursesST_sourceType = config.GetTeamCoursesST_sourceType || 'str';
        this.GetTeamCoursesST_since = config.GetTeamCoursesST_since;
        this.GetTeamCoursesST_sinceType = config.GetTeamCoursesST_sinceType || 'str';
        this.GetTeamCoursesST_to = config.GetTeamCoursesST_to;
        this.GetTeamCoursesST_toType = config.GetTeamCoursesST_toType || 'str';
        this.GetTeamCoursesST_format = config.GetTeamCoursesST_format;
        this.GetTeamCoursesST_formatType = config.GetTeamCoursesST_formatType || 'str';
        this.GetTeamCoursesST_apikey = config.GetTeamCoursesST_apikey;
        this.GetTeamCoursesST_apikeyType = config.GetTeamCoursesST_apikeyType || 'str';
        this.GetLearningPathsCourseST_source = config.GetLearningPathsCourseST_source;
        this.GetLearningPathsCourseST_sourceType = config.GetLearningPathsCourseST_sourceType || 'str';
        this.GetLearningPathsCourseST_since = config.GetLearningPathsCourseST_since;
        this.GetLearningPathsCourseST_sinceType = config.GetLearningPathsCourseST_sinceType || 'str';
        this.GetLearningPathsCourseST_to = config.GetLearningPathsCourseST_to;
        this.GetLearningPathsCourseST_toType = config.GetLearningPathsCourseST_toType || 'str';
        this.GetLearningPathsCourseST_format = config.GetLearningPathsCourseST_format;
        this.GetLearningPathsCourseST_formatType = config.GetLearningPathsCourseST_formatType || 'str';
        this.GetLearningPathsCourseST_apikey = config.GetLearningPathsCourseST_apikey;
        this.GetLearningPathsCourseST_apikeyType = config.GetLearningPathsCourseST_apikeyType || 'str';
        this.GetCoursesST_source = config.GetCoursesST_source;
        this.GetCoursesST_sourceType = config.GetCoursesST_sourceType || 'str';
        this.GetCoursesST_since = config.GetCoursesST_since;
        this.GetCoursesST_sinceType = config.GetCoursesST_sinceType || 'str';
        this.GetCoursesST_to = config.GetCoursesST_to;
        this.GetCoursesST_toType = config.GetCoursesST_toType || 'str';
        this.GetCoursesST_format = config.GetCoursesST_format;
        this.GetCoursesST_formatType = config.GetCoursesST_formatType || 'str';
        this.GetCoursesST_apikey = config.GetCoursesST_apikey;
        this.GetCoursesST_apikeyType = config.GetCoursesST_apikeyType || 'str';
        this.GetLearningPathsST_source = config.GetLearningPathsST_source;
        this.GetLearningPathsST_sourceType = config.GetLearningPathsST_sourceType || 'str';
        this.GetLearningPathsST_since = config.GetLearningPathsST_since;
        this.GetLearningPathsST_sinceType = config.GetLearningPathsST_sinceType || 'str';
        this.GetLearningPathsST_to = config.GetLearningPathsST_to;
        this.GetLearningPathsST_toType = config.GetLearningPathsST_toType || 'str';
        this.GetLearningPathsST_format = config.GetLearningPathsST_format;
        this.GetLearningPathsST_formatType = config.GetLearningPathsST_formatType || 'str';
        this.GetLearningPathsST_apikey = config.GetLearningPathsST_apikey;
        this.GetLearningPathsST_apikeyType = config.GetLearningPathsST_apikeyType || 'str';
        this.GetUserCoursesST_source = config.GetUserCoursesST_source;
        this.GetUserCoursesST_sourceType = config.GetUserCoursesST_sourceType || 'str';
        this.GetUserCoursesST_since = config.GetUserCoursesST_since;
        this.GetUserCoursesST_sinceType = config.GetUserCoursesST_sinceType || 'str';
        this.GetUserCoursesST_to = config.GetUserCoursesST_to;
        this.GetUserCoursesST_toType = config.GetUserCoursesST_toType || 'str';
        this.GetUserCoursesST_format = config.GetUserCoursesST_format;
        this.GetUserCoursesST_formatType = config.GetUserCoursesST_formatType || 'str';
        this.GetUserCoursesST_apikey = config.GetUserCoursesST_apikey;
        this.GetUserCoursesST_apikeyType = config.GetUserCoursesST_apikeyType || 'str';
        this.GetLearningPathsUsersST_source = config.GetLearningPathsUsersST_source;
        this.GetLearningPathsUsersST_sourceType = config.GetLearningPathsUsersST_sourceType || 'str';
        this.GetLearningPathsUsersST_since = config.GetLearningPathsUsersST_since;
        this.GetLearningPathsUsersST_sinceType = config.GetLearningPathsUsersST_sinceType || 'str';
        this.GetLearningPathsUsersST_to = config.GetLearningPathsUsersST_to;
        this.GetLearningPathsUsersST_toType = config.GetLearningPathsUsersST_toType || 'str';
        this.GetLearningPathsUsersST_format = config.GetLearningPathsUsersST_format;
        this.GetLearningPathsUsersST_formatType = config.GetLearningPathsUsersST_formatType || 'str';
        this.GetLearningPathsUsersST_apikey = config.GetLearningPathsUsersST_apikey;
        this.GetLearningPathsUsersST_apikeyType = config.GetLearningPathsUsersST_apikeyType || 'str';
        this.GetModulesST_source = config.GetModulesST_source;
        this.GetModulesST_sourceType = config.GetModulesST_sourceType || 'str';
        this.GetModulesST_since = config.GetModulesST_since;
        this.GetModulesST_sinceType = config.GetModulesST_sinceType || 'str';
        this.GetModulesST_to = config.GetModulesST_to;
        this.GetModulesST_toType = config.GetModulesST_toType || 'str';
        this.GetModulesST_format = config.GetModulesST_format;
        this.GetModulesST_formatType = config.GetModulesST_formatType || 'str';
        this.GetModulesST_apikey = config.GetModulesST_apikey;
        this.GetModulesST_apikeyType = config.GetModulesST_apikeyType || 'str';
        this.GetModulesResultsST_source = config.GetModulesResultsST_source;
        this.GetModulesResultsST_sourceType = config.GetModulesResultsST_sourceType || 'str';
        this.GetModulesResultsST_since = config.GetModulesResultsST_since;
        this.GetModulesResultsST_sinceType = config.GetModulesResultsST_sinceType || 'str';
        this.GetModulesResultsST_to = config.GetModulesResultsST_to;
        this.GetModulesResultsST_toType = config.GetModulesResultsST_toType || 'str';
        this.GetModulesResultsST_format = config.GetModulesResultsST_format;
        this.GetModulesResultsST_formatType = config.GetModulesResultsST_formatType || 'str';
        this.GetModulesResultsST_apikey = config.GetModulesResultsST_apikey;
        this.GetModulesResultsST_apikeyType = config.GetModulesResultsST_apikeyType || 'str';
        this.GetLearningPathResultsST_source = config.GetLearningPathResultsST_source;
        this.GetLearningPathResultsST_sourceType = config.GetLearningPathResultsST_sourceType || 'str';
        this.GetLearningPathResultsST_since = config.GetLearningPathResultsST_since;
        this.GetLearningPathResultsST_sinceType = config.GetLearningPathResultsST_sinceType || 'str';
        this.GetLearningPathResultsST_to = config.GetLearningPathResultsST_to;
        this.GetLearningPathResultsST_toType = config.GetLearningPathResultsST_toType || 'str';
        this.GetLearningPathResultsST_format = config.GetLearningPathResultsST_format;
        this.GetLearningPathResultsST_formatType = config.GetLearningPathResultsST_formatType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.LitmosapisKyma();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'CreateNewUser') {
                var CreateNewUser_parameters = [];
                var CreateNewUser_nodeParam;
                var CreateNewUser_nodeParamType;

                CreateNewUser_nodeParam = node.CreateNewUser_source;
                CreateNewUser_nodeParamType = node.CreateNewUser_sourceType;
                if (CreateNewUser_nodeParamType === 'str') {
                    CreateNewUser_parameters.source = CreateNewUser_nodeParam || '';
                } else {
                    CreateNewUser_parameters.source = RED.util.getMessageProperty(msg, CreateNewUser_nodeParam);
                }
                CreateNewUser_parameters.source = !!CreateNewUser_parameters.source ? CreateNewUser_parameters.source : msg.payload;
                
                CreateNewUser_nodeParam = node.CreateNewUser_format;
                CreateNewUser_nodeParamType = node.CreateNewUser_formatType;
                if (CreateNewUser_nodeParamType === 'str') {
                    CreateNewUser_parameters.format = CreateNewUser_nodeParam || '';
                } else {
                    CreateNewUser_parameters.format = RED.util.getMessageProperty(msg, CreateNewUser_nodeParam);
                }
                CreateNewUser_parameters.format = !!CreateNewUser_parameters.format ? CreateNewUser_parameters.format : msg.payload;
                
                CreateNewUser_nodeParam = node.CreateNewUser_contentType;
                CreateNewUser_nodeParamType = node.CreateNewUser_contentTypeType;
                if (CreateNewUser_nodeParamType === 'str') {
                    CreateNewUser_parameters.contentType = CreateNewUser_nodeParam || '';
                } else {
                    CreateNewUser_parameters.contentType = RED.util.getMessageProperty(msg, CreateNewUser_nodeParam);
                }
                CreateNewUser_parameters.contentType = !!CreateNewUser_parameters.contentType ? CreateNewUser_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    CreateNewUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.CreateNewUser(CreateNewUser_parameters);
            }
            if (!errorFlag && node.method === 'GetUsers') {
                var GetUsers_parameters = [];
                var GetUsers_nodeParam;
                var GetUsers_nodeParamType;

                GetUsers_nodeParam = node.GetUsers_format;
                GetUsers_nodeParamType = node.GetUsers_formatType;
                if (GetUsers_nodeParamType === 'str') {
                    GetUsers_parameters.format = GetUsers_nodeParam || '';
                } else {
                    GetUsers_parameters.format = RED.util.getMessageProperty(msg, GetUsers_nodeParam);
                }
                GetUsers_parameters.format = !!GetUsers_parameters.format ? GetUsers_parameters.format : msg.payload;
                
                GetUsers_nodeParam = node.GetUsers_source;
                GetUsers_nodeParamType = node.GetUsers_sourceType;
                if (GetUsers_nodeParamType === 'str') {
                    GetUsers_parameters.source = GetUsers_nodeParam || '';
                } else {
                    GetUsers_parameters.source = RED.util.getMessageProperty(msg, GetUsers_nodeParam);
                }
                GetUsers_parameters.source = !!GetUsers_parameters.source ? GetUsers_parameters.source : msg.payload;
                
                GetUsers_nodeParam = node.GetUsers_apikey;
                GetUsers_nodeParamType = node.GetUsers_apikeyType;
                if (GetUsers_nodeParamType === 'str') {
                    GetUsers_parameters.apikey = GetUsers_nodeParam || '';
                } else {
                    GetUsers_parameters.apikey = RED.util.getMessageProperty(msg, GetUsers_nodeParam);
                }
                GetUsers_parameters.apikey = !!GetUsers_parameters.apikey ? GetUsers_parameters.apikey : msg.payload;
                                result = client.GetUsers(GetUsers_parameters);
            }
            if (!errorFlag && node.method === 'GetaUserbyUsername') {
                var GetaUserbyUsername_parameters = [];
                var GetaUserbyUsername_nodeParam;
                var GetaUserbyUsername_nodeParamType;

                GetaUserbyUsername_nodeParam = node.GetaUserbyUsername_source;
                GetaUserbyUsername_nodeParamType = node.GetaUserbyUsername_sourceType;
                if (GetaUserbyUsername_nodeParamType === 'str') {
                    GetaUserbyUsername_parameters.source = GetaUserbyUsername_nodeParam || '';
                } else {
                    GetaUserbyUsername_parameters.source = RED.util.getMessageProperty(msg, GetaUserbyUsername_nodeParam);
                }
                GetaUserbyUsername_parameters.source = !!GetaUserbyUsername_parameters.source ? GetaUserbyUsername_parameters.source : msg.payload;
                
                GetaUserbyUsername_nodeParam = node.GetaUserbyUsername_format;
                GetaUserbyUsername_nodeParamType = node.GetaUserbyUsername_formatType;
                if (GetaUserbyUsername_nodeParamType === 'str') {
                    GetaUserbyUsername_parameters.format = GetaUserbyUsername_nodeParam || '';
                } else {
                    GetaUserbyUsername_parameters.format = RED.util.getMessageProperty(msg, GetaUserbyUsername_nodeParam);
                }
                GetaUserbyUsername_parameters.format = !!GetaUserbyUsername_parameters.format ? GetaUserbyUsername_parameters.format : msg.payload;
                
                GetaUserbyUsername_nodeParam = node.GetaUserbyUsername_apikey;
                GetaUserbyUsername_nodeParamType = node.GetaUserbyUsername_apikeyType;
                if (GetaUserbyUsername_nodeParamType === 'str') {
                    GetaUserbyUsername_parameters.apikey = GetaUserbyUsername_nodeParam || '';
                } else {
                    GetaUserbyUsername_parameters.apikey = RED.util.getMessageProperty(msg, GetaUserbyUsername_nodeParam);
                }
                GetaUserbyUsername_parameters.apikey = !!GetaUserbyUsername_parameters.apikey ? GetaUserbyUsername_parameters.apikey : msg.payload;
                
                GetaUserbyUsername_nodeParam = node.GetaUserbyUsername_username;
                GetaUserbyUsername_nodeParamType = node.GetaUserbyUsername_usernameType;
                if (GetaUserbyUsername_nodeParamType === 'str') {
                    GetaUserbyUsername_parameters.username = GetaUserbyUsername_nodeParam || '';
                } else {
                    GetaUserbyUsername_parameters.username = RED.util.getMessageProperty(msg, GetaUserbyUsername_nodeParam);
                }
                GetaUserbyUsername_parameters.username = !!GetaUserbyUsername_parameters.username ? GetaUserbyUsername_parameters.username : msg.payload;
                                result = client.GetaUserbyUsername(GetaUserbyUsername_parameters);
            }
            if (!errorFlag && node.method === 'UpdateaUser') {
                var UpdateaUser_parameters = [];
                var UpdateaUser_nodeParam;
                var UpdateaUser_nodeParamType;

                UpdateaUser_nodeParam = node.UpdateaUser_source;
                UpdateaUser_nodeParamType = node.UpdateaUser_sourceType;
                if (UpdateaUser_nodeParamType === 'str') {
                    UpdateaUser_parameters.source = UpdateaUser_nodeParam || '';
                } else {
                    UpdateaUser_parameters.source = RED.util.getMessageProperty(msg, UpdateaUser_nodeParam);
                }
                UpdateaUser_parameters.source = !!UpdateaUser_parameters.source ? UpdateaUser_parameters.source : msg.payload;
                
                UpdateaUser_nodeParam = node.UpdateaUser_contentType;
                UpdateaUser_nodeParamType = node.UpdateaUser_contentTypeType;
                if (UpdateaUser_nodeParamType === 'str') {
                    UpdateaUser_parameters.contentType = UpdateaUser_nodeParam || '';
                } else {
                    UpdateaUser_parameters.contentType = RED.util.getMessageProperty(msg, UpdateaUser_nodeParam);
                }
                UpdateaUser_parameters.contentType = !!UpdateaUser_parameters.contentType ? UpdateaUser_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UpdateaUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateaUser_nodeParam = node.UpdateaUser_userId;
                UpdateaUser_nodeParamType = node.UpdateaUser_userIdType;
                if (UpdateaUser_nodeParamType === 'str') {
                    UpdateaUser_parameters.userId = UpdateaUser_nodeParam || '';
                } else {
                    UpdateaUser_parameters.userId = RED.util.getMessageProperty(msg, UpdateaUser_nodeParam);
                }
                UpdateaUser_parameters.userId = !!UpdateaUser_parameters.userId ? UpdateaUser_parameters.userId : msg.payload;
                                result = client.UpdateaUser(UpdateaUser_parameters);
            }
            if (!errorFlag && node.method === 'GetUserbyUserId') {
                var GetUserbyUserId_parameters = [];
                var GetUserbyUserId_nodeParam;
                var GetUserbyUserId_nodeParamType;

                GetUserbyUserId_nodeParam = node.GetUserbyUserId_source;
                GetUserbyUserId_nodeParamType = node.GetUserbyUserId_sourceType;
                if (GetUserbyUserId_nodeParamType === 'str') {
                    GetUserbyUserId_parameters.source = GetUserbyUserId_nodeParam || '';
                } else {
                    GetUserbyUserId_parameters.source = RED.util.getMessageProperty(msg, GetUserbyUserId_nodeParam);
                }
                GetUserbyUserId_parameters.source = !!GetUserbyUserId_parameters.source ? GetUserbyUserId_parameters.source : msg.payload;
                
                GetUserbyUserId_nodeParam = node.GetUserbyUserId_format;
                GetUserbyUserId_nodeParamType = node.GetUserbyUserId_formatType;
                if (GetUserbyUserId_nodeParamType === 'str') {
                    GetUserbyUserId_parameters.format = GetUserbyUserId_nodeParam || '';
                } else {
                    GetUserbyUserId_parameters.format = RED.util.getMessageProperty(msg, GetUserbyUserId_nodeParam);
                }
                GetUserbyUserId_parameters.format = !!GetUserbyUserId_parameters.format ? GetUserbyUserId_parameters.format : msg.payload;
                
                GetUserbyUserId_nodeParam = node.GetUserbyUserId_apikey;
                GetUserbyUserId_nodeParamType = node.GetUserbyUserId_apikeyType;
                if (GetUserbyUserId_nodeParamType === 'str') {
                    GetUserbyUserId_parameters.apikey = GetUserbyUserId_nodeParam || '';
                } else {
                    GetUserbyUserId_parameters.apikey = RED.util.getMessageProperty(msg, GetUserbyUserId_nodeParam);
                }
                GetUserbyUserId_parameters.apikey = !!GetUserbyUserId_parameters.apikey ? GetUserbyUserId_parameters.apikey : msg.payload;
                
                GetUserbyUserId_nodeParam = node.GetUserbyUserId_userId;
                GetUserbyUserId_nodeParamType = node.GetUserbyUserId_userIdType;
                if (GetUserbyUserId_nodeParamType === 'str') {
                    GetUserbyUserId_parameters.userId = GetUserbyUserId_nodeParam || '';
                } else {
                    GetUserbyUserId_parameters.userId = RED.util.getMessageProperty(msg, GetUserbyUserId_nodeParam);
                }
                GetUserbyUserId_parameters.userId = !!GetUserbyUserId_parameters.userId ? GetUserbyUserId_parameters.userId : msg.payload;
                                result = client.GetUserbyUserId(GetUserbyUserId_parameters);
            }
            if (!errorFlag && node.method === 'DeleteaUser') {
                var DeleteaUser_parameters = [];
                var DeleteaUser_nodeParam;
                var DeleteaUser_nodeParamType;

                DeleteaUser_nodeParam = node.DeleteaUser_source;
                DeleteaUser_nodeParamType = node.DeleteaUser_sourceType;
                if (DeleteaUser_nodeParamType === 'str') {
                    DeleteaUser_parameters.source = DeleteaUser_nodeParam || '';
                } else {
                    DeleteaUser_parameters.source = RED.util.getMessageProperty(msg, DeleteaUser_nodeParam);
                }
                DeleteaUser_parameters.source = !!DeleteaUser_parameters.source ? DeleteaUser_parameters.source : msg.payload;
                
                DeleteaUser_nodeParam = node.DeleteaUser_apikey;
                DeleteaUser_nodeParamType = node.DeleteaUser_apikeyType;
                if (DeleteaUser_nodeParamType === 'str') {
                    DeleteaUser_parameters.apikey = DeleteaUser_nodeParam || '';
                } else {
                    DeleteaUser_parameters.apikey = RED.util.getMessageProperty(msg, DeleteaUser_nodeParam);
                }
                DeleteaUser_parameters.apikey = !!DeleteaUser_parameters.apikey ? DeleteaUser_parameters.apikey : msg.payload;
                
                DeleteaUser_nodeParam = node.DeleteaUser_userId;
                DeleteaUser_nodeParamType = node.DeleteaUser_userIdType;
                if (DeleteaUser_nodeParamType === 'str') {
                    DeleteaUser_parameters.userId = DeleteaUser_nodeParam || '';
                } else {
                    DeleteaUser_parameters.userId = RED.util.getMessageProperty(msg, DeleteaUser_nodeParam);
                }
                DeleteaUser_parameters.userId = !!DeleteaUser_parameters.userId ? DeleteaUser_parameters.userId : msg.payload;
                                result = client.DeleteaUser(DeleteaUser_parameters);
            }
            if (!errorFlag && node.method === 'GetUsersDetails') {
                var GetUsersDetails_parameters = [];
                var GetUsersDetails_nodeParam;
                var GetUsersDetails_nodeParamType;

                GetUsersDetails_nodeParam = node.GetUsersDetails_source;
                GetUsersDetails_nodeParamType = node.GetUsersDetails_sourceType;
                if (GetUsersDetails_nodeParamType === 'str') {
                    GetUsersDetails_parameters.source = GetUsersDetails_nodeParam || '';
                } else {
                    GetUsersDetails_parameters.source = RED.util.getMessageProperty(msg, GetUsersDetails_nodeParam);
                }
                GetUsersDetails_parameters.source = !!GetUsersDetails_parameters.source ? GetUsersDetails_parameters.source : msg.payload;
                
                GetUsersDetails_nodeParam = node.GetUsersDetails_format;
                GetUsersDetails_nodeParamType = node.GetUsersDetails_formatType;
                if (GetUsersDetails_nodeParamType === 'str') {
                    GetUsersDetails_parameters.format = GetUsersDetails_nodeParam || '';
                } else {
                    GetUsersDetails_parameters.format = RED.util.getMessageProperty(msg, GetUsersDetails_nodeParam);
                }
                GetUsersDetails_parameters.format = !!GetUsersDetails_parameters.format ? GetUsersDetails_parameters.format : msg.payload;
                
                GetUsersDetails_nodeParam = node.GetUsersDetails_apikey;
                GetUsersDetails_nodeParamType = node.GetUsersDetails_apikeyType;
                if (GetUsersDetails_nodeParamType === 'str') {
                    GetUsersDetails_parameters.apikey = GetUsersDetails_nodeParam || '';
                } else {
                    GetUsersDetails_parameters.apikey = RED.util.getMessageProperty(msg, GetUsersDetails_nodeParam);
                }
                GetUsersDetails_parameters.apikey = !!GetUsersDetails_parameters.apikey ? GetUsersDetails_parameters.apikey : msg.payload;
                                result = client.GetUsersDetails(GetUsersDetails_parameters);
            }
            if (!errorFlag && node.method === 'PostAdvancedCustomFieldsforaUser') {
                var PostAdvancedCustomFieldsforaUser_parameters = [];
                var PostAdvancedCustomFieldsforaUser_nodeParam;
                var PostAdvancedCustomFieldsforaUser_nodeParamType;

                PostAdvancedCustomFieldsforaUser_nodeParam = node.PostAdvancedCustomFieldsforaUser_source;
                PostAdvancedCustomFieldsforaUser_nodeParamType = node.PostAdvancedCustomFieldsforaUser_sourceType;
                if (PostAdvancedCustomFieldsforaUser_nodeParamType === 'str') {
                    PostAdvancedCustomFieldsforaUser_parameters.source = PostAdvancedCustomFieldsforaUser_nodeParam || '';
                } else {
                    PostAdvancedCustomFieldsforaUser_parameters.source = RED.util.getMessageProperty(msg, PostAdvancedCustomFieldsforaUser_nodeParam);
                }
                PostAdvancedCustomFieldsforaUser_parameters.source = !!PostAdvancedCustomFieldsforaUser_parameters.source ? PostAdvancedCustomFieldsforaUser_parameters.source : msg.payload;
                
                PostAdvancedCustomFieldsforaUser_nodeParam = node.PostAdvancedCustomFieldsforaUser_fromat;
                PostAdvancedCustomFieldsforaUser_nodeParamType = node.PostAdvancedCustomFieldsforaUser_fromatType;
                if (PostAdvancedCustomFieldsforaUser_nodeParamType === 'str') {
                    PostAdvancedCustomFieldsforaUser_parameters.fromat = PostAdvancedCustomFieldsforaUser_nodeParam || '';
                } else {
                    PostAdvancedCustomFieldsforaUser_parameters.fromat = RED.util.getMessageProperty(msg, PostAdvancedCustomFieldsforaUser_nodeParam);
                }
                PostAdvancedCustomFieldsforaUser_parameters.fromat = !!PostAdvancedCustomFieldsforaUser_parameters.fromat ? PostAdvancedCustomFieldsforaUser_parameters.fromat : msg.payload;
                
                PostAdvancedCustomFieldsforaUser_nodeParam = node.PostAdvancedCustomFieldsforaUser_contentType;
                PostAdvancedCustomFieldsforaUser_nodeParamType = node.PostAdvancedCustomFieldsforaUser_contentTypeType;
                if (PostAdvancedCustomFieldsforaUser_nodeParamType === 'str') {
                    PostAdvancedCustomFieldsforaUser_parameters.contentType = PostAdvancedCustomFieldsforaUser_nodeParam || '';
                } else {
                    PostAdvancedCustomFieldsforaUser_parameters.contentType = RED.util.getMessageProperty(msg, PostAdvancedCustomFieldsforaUser_nodeParam);
                }
                PostAdvancedCustomFieldsforaUser_parameters.contentType = !!PostAdvancedCustomFieldsforaUser_parameters.contentType ? PostAdvancedCustomFieldsforaUser_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    PostAdvancedCustomFieldsforaUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                PostAdvancedCustomFieldsforaUser_nodeParam = node.PostAdvancedCustomFieldsforaUser_userId;
                PostAdvancedCustomFieldsforaUser_nodeParamType = node.PostAdvancedCustomFieldsforaUser_userIdType;
                if (PostAdvancedCustomFieldsforaUser_nodeParamType === 'str') {
                    PostAdvancedCustomFieldsforaUser_parameters.userId = PostAdvancedCustomFieldsforaUser_nodeParam || '';
                } else {
                    PostAdvancedCustomFieldsforaUser_parameters.userId = RED.util.getMessageProperty(msg, PostAdvancedCustomFieldsforaUser_nodeParam);
                }
                PostAdvancedCustomFieldsforaUser_parameters.userId = !!PostAdvancedCustomFieldsforaUser_parameters.userId ? PostAdvancedCustomFieldsforaUser_parameters.userId : msg.payload;
                                result = client.PostAdvancedCustomFieldsforaUser(PostAdvancedCustomFieldsforaUser_parameters);
            }
            if (!errorFlag && node.method === 'GetaUsersAdvancedCustomFields') {
                var GetaUsersAdvancedCustomFields_parameters = [];
                var GetaUsersAdvancedCustomFields_nodeParam;
                var GetaUsersAdvancedCustomFields_nodeParamType;

                GetaUsersAdvancedCustomFields_nodeParam = node.GetaUsersAdvancedCustomFields_source;
                GetaUsersAdvancedCustomFields_nodeParamType = node.GetaUsersAdvancedCustomFields_sourceType;
                if (GetaUsersAdvancedCustomFields_nodeParamType === 'str') {
                    GetaUsersAdvancedCustomFields_parameters.source = GetaUsersAdvancedCustomFields_nodeParam || '';
                } else {
                    GetaUsersAdvancedCustomFields_parameters.source = RED.util.getMessageProperty(msg, GetaUsersAdvancedCustomFields_nodeParam);
                }
                GetaUsersAdvancedCustomFields_parameters.source = !!GetaUsersAdvancedCustomFields_parameters.source ? GetaUsersAdvancedCustomFields_parameters.source : msg.payload;
                
                GetaUsersAdvancedCustomFields_nodeParam = node.GetaUsersAdvancedCustomFields_contentType;
                GetaUsersAdvancedCustomFields_nodeParamType = node.GetaUsersAdvancedCustomFields_contentTypeType;
                if (GetaUsersAdvancedCustomFields_nodeParamType === 'str') {
                    GetaUsersAdvancedCustomFields_parameters.contentType = GetaUsersAdvancedCustomFields_nodeParam || '';
                } else {
                    GetaUsersAdvancedCustomFields_parameters.contentType = RED.util.getMessageProperty(msg, GetaUsersAdvancedCustomFields_nodeParam);
                }
                GetaUsersAdvancedCustomFields_parameters.contentType = !!GetaUsersAdvancedCustomFields_parameters.contentType ? GetaUsersAdvancedCustomFields_parameters.contentType : msg.payload;
                
                GetaUsersAdvancedCustomFields_nodeParam = node.GetaUsersAdvancedCustomFields_userId;
                GetaUsersAdvancedCustomFields_nodeParamType = node.GetaUsersAdvancedCustomFields_userIdType;
                if (GetaUsersAdvancedCustomFields_nodeParamType === 'str') {
                    GetaUsersAdvancedCustomFields_parameters.userId = GetaUsersAdvancedCustomFields_nodeParam || '';
                } else {
                    GetaUsersAdvancedCustomFields_parameters.userId = RED.util.getMessageProperty(msg, GetaUsersAdvancedCustomFields_nodeParam);
                }
                GetaUsersAdvancedCustomFields_parameters.userId = !!GetaUsersAdvancedCustomFields_parameters.userId ? GetaUsersAdvancedCustomFields_parameters.userId : msg.payload;
                                result = client.GetaUsersAdvancedCustomFields(GetaUsersAdvancedCustomFields_parameters);
            }
            if (!errorFlag && node.method === 'CreateanewUserBulkImport') {
                var CreateanewUserBulkImport_parameters = [];
                var CreateanewUserBulkImport_nodeParam;
                var CreateanewUserBulkImport_nodeParamType;

                CreateanewUserBulkImport_nodeParam = node.CreateanewUserBulkImport_source;
                CreateanewUserBulkImport_nodeParamType = node.CreateanewUserBulkImport_sourceType;
                if (CreateanewUserBulkImport_nodeParamType === 'str') {
                    CreateanewUserBulkImport_parameters.source = CreateanewUserBulkImport_nodeParam || '';
                } else {
                    CreateanewUserBulkImport_parameters.source = RED.util.getMessageProperty(msg, CreateanewUserBulkImport_nodeParam);
                }
                CreateanewUserBulkImport_parameters.source = !!CreateanewUserBulkImport_parameters.source ? CreateanewUserBulkImport_parameters.source : msg.payload;
                
                CreateanewUserBulkImport_nodeParam = node.CreateanewUserBulkImport_format;
                CreateanewUserBulkImport_nodeParamType = node.CreateanewUserBulkImport_formatType;
                if (CreateanewUserBulkImport_nodeParamType === 'str') {
                    CreateanewUserBulkImport_parameters.format = CreateanewUserBulkImport_nodeParam || '';
                } else {
                    CreateanewUserBulkImport_parameters.format = RED.util.getMessageProperty(msg, CreateanewUserBulkImport_nodeParam);
                }
                CreateanewUserBulkImport_parameters.format = !!CreateanewUserBulkImport_parameters.format ? CreateanewUserBulkImport_parameters.format : msg.payload;
                
                CreateanewUserBulkImport_nodeParam = node.CreateanewUserBulkImport_sendmessage;
                CreateanewUserBulkImport_nodeParamType = node.CreateanewUserBulkImport_sendmessageType;
                if (CreateanewUserBulkImport_nodeParamType === 'str') {
                    CreateanewUserBulkImport_parameters.sendmessage = CreateanewUserBulkImport_nodeParam || '';
                } else {
                    CreateanewUserBulkImport_parameters.sendmessage = RED.util.getMessageProperty(msg, CreateanewUserBulkImport_nodeParam);
                }
                CreateanewUserBulkImport_parameters.sendmessage = !!CreateanewUserBulkImport_parameters.sendmessage ? CreateanewUserBulkImport_parameters.sendmessage : msg.payload;
                
                CreateanewUserBulkImport_nodeParam = node.CreateanewUserBulkImport_contentType;
                CreateanewUserBulkImport_nodeParamType = node.CreateanewUserBulkImport_contentTypeType;
                if (CreateanewUserBulkImport_nodeParamType === 'str') {
                    CreateanewUserBulkImport_parameters.contentType = CreateanewUserBulkImport_nodeParam || '';
                } else {
                    CreateanewUserBulkImport_parameters.contentType = RED.util.getMessageProperty(msg, CreateanewUserBulkImport_nodeParam);
                }
                CreateanewUserBulkImport_parameters.contentType = !!CreateanewUserBulkImport_parameters.contentType ? CreateanewUserBulkImport_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    CreateanewUserBulkImport_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.CreateanewUserBulkImport(CreateanewUserBulkImport_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofRecentBulkImports') {
                var GetaListofRecentBulkImports_parameters = [];
                var GetaListofRecentBulkImports_nodeParam;
                var GetaListofRecentBulkImports_nodeParamType;

                GetaListofRecentBulkImports_nodeParam = node.GetaListofRecentBulkImports_source;
                GetaListofRecentBulkImports_nodeParamType = node.GetaListofRecentBulkImports_sourceType;
                if (GetaListofRecentBulkImports_nodeParamType === 'str') {
                    GetaListofRecentBulkImports_parameters.source = GetaListofRecentBulkImports_nodeParam || '';
                } else {
                    GetaListofRecentBulkImports_parameters.source = RED.util.getMessageProperty(msg, GetaListofRecentBulkImports_nodeParam);
                }
                GetaListofRecentBulkImports_parameters.source = !!GetaListofRecentBulkImports_parameters.source ? GetaListofRecentBulkImports_parameters.source : msg.payload;
                
                GetaListofRecentBulkImports_nodeParam = node.GetaListofRecentBulkImports_format;
                GetaListofRecentBulkImports_nodeParamType = node.GetaListofRecentBulkImports_formatType;
                if (GetaListofRecentBulkImports_nodeParamType === 'str') {
                    GetaListofRecentBulkImports_parameters.format = GetaListofRecentBulkImports_nodeParam || '';
                } else {
                    GetaListofRecentBulkImports_parameters.format = RED.util.getMessageProperty(msg, GetaListofRecentBulkImports_nodeParam);
                }
                GetaListofRecentBulkImports_parameters.format = !!GetaListofRecentBulkImports_parameters.format ? GetaListofRecentBulkImports_parameters.format : msg.payload;
                
                GetaListofRecentBulkImports_nodeParam = node.GetaListofRecentBulkImports_apikey;
                GetaListofRecentBulkImports_nodeParamType = node.GetaListofRecentBulkImports_apikeyType;
                if (GetaListofRecentBulkImports_nodeParamType === 'str') {
                    GetaListofRecentBulkImports_parameters.apikey = GetaListofRecentBulkImports_nodeParam || '';
                } else {
                    GetaListofRecentBulkImports_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofRecentBulkImports_nodeParam);
                }
                GetaListofRecentBulkImports_parameters.apikey = !!GetaListofRecentBulkImports_parameters.apikey ? GetaListofRecentBulkImports_parameters.apikey : msg.payload;
                                result = client.GetaListofRecentBulkImports(GetaListofRecentBulkImports_parameters);
            }
            if (!errorFlag && node.method === 'GetaSpecificBulkImport') {
                var GetaSpecificBulkImport_parameters = [];
                var GetaSpecificBulkImport_nodeParam;
                var GetaSpecificBulkImport_nodeParamType;

                GetaSpecificBulkImport_nodeParam = node.GetaSpecificBulkImport_source;
                GetaSpecificBulkImport_nodeParamType = node.GetaSpecificBulkImport_sourceType;
                if (GetaSpecificBulkImport_nodeParamType === 'str') {
                    GetaSpecificBulkImport_parameters.source = GetaSpecificBulkImport_nodeParam || '';
                } else {
                    GetaSpecificBulkImport_parameters.source = RED.util.getMessageProperty(msg, GetaSpecificBulkImport_nodeParam);
                }
                GetaSpecificBulkImport_parameters.source = !!GetaSpecificBulkImport_parameters.source ? GetaSpecificBulkImport_parameters.source : msg.payload;
                
                GetaSpecificBulkImport_nodeParam = node.GetaSpecificBulkImport_format;
                GetaSpecificBulkImport_nodeParamType = node.GetaSpecificBulkImport_formatType;
                if (GetaSpecificBulkImport_nodeParamType === 'str') {
                    GetaSpecificBulkImport_parameters.format = GetaSpecificBulkImport_nodeParam || '';
                } else {
                    GetaSpecificBulkImport_parameters.format = RED.util.getMessageProperty(msg, GetaSpecificBulkImport_nodeParam);
                }
                GetaSpecificBulkImport_parameters.format = !!GetaSpecificBulkImport_parameters.format ? GetaSpecificBulkImport_parameters.format : msg.payload;
                                result = client.GetaSpecificBulkImport(GetaSpecificBulkImport_parameters);
            }
            if (!errorFlag && node.method === 'MarkaModuleComplete') {
                var MarkaModuleComplete_parameters = [];
                var MarkaModuleComplete_nodeParam;
                var MarkaModuleComplete_nodeParamType;
                result = client.MarkaModuleComplete(MarkaModuleComplete_parameters);
            }
            if (!errorFlag && node.method === 'GetCourses') {
                var GetCourses_parameters = [];
                var GetCourses_nodeParam;
                var GetCourses_nodeParamType;

                GetCourses_nodeParam = node.GetCourses_source;
                GetCourses_nodeParamType = node.GetCourses_sourceType;
                if (GetCourses_nodeParamType === 'str') {
                    GetCourses_parameters.source = GetCourses_nodeParam || '';
                } else {
                    GetCourses_parameters.source = RED.util.getMessageProperty(msg, GetCourses_nodeParam);
                }
                GetCourses_parameters.source = !!GetCourses_parameters.source ? GetCourses_parameters.source : msg.payload;
                
                GetCourses_nodeParam = node.GetCourses_format;
                GetCourses_nodeParamType = node.GetCourses_formatType;
                if (GetCourses_nodeParamType === 'str') {
                    GetCourses_parameters.format = GetCourses_nodeParam || '';
                } else {
                    GetCourses_parameters.format = RED.util.getMessageProperty(msg, GetCourses_nodeParam);
                }
                GetCourses_parameters.format = !!GetCourses_parameters.format ? GetCourses_parameters.format : msg.payload;
                
                GetCourses_nodeParam = node.GetCourses_limit;
                GetCourses_nodeParamType = node.GetCourses_limitType;
                if (GetCourses_nodeParamType === 'str') {
                    GetCourses_parameters.limit = GetCourses_nodeParam || '';
                } else {
                    GetCourses_parameters.limit = RED.util.getMessageProperty(msg, GetCourses_nodeParam);
                }
                GetCourses_parameters.limit = !!GetCourses_parameters.limit ? GetCourses_parameters.limit : msg.payload;
                
                GetCourses_nodeParam = node.GetCourses_apikey;
                GetCourses_nodeParamType = node.GetCourses_apikeyType;
                if (GetCourses_nodeParamType === 'str') {
                    GetCourses_parameters.apikey = GetCourses_nodeParam || '';
                } else {
                    GetCourses_parameters.apikey = RED.util.getMessageProperty(msg, GetCourses_nodeParam);
                }
                GetCourses_parameters.apikey = !!GetCourses_parameters.apikey ? GetCourses_parameters.apikey : msg.payload;
                                result = client.GetCourses(GetCourses_parameters);
            }
            if (!errorFlag && node.method === 'GetaCourse') {
                var GetaCourse_parameters = [];
                var GetaCourse_nodeParam;
                var GetaCourse_nodeParamType;

                GetaCourse_nodeParam = node.GetaCourse_source;
                GetaCourse_nodeParamType = node.GetaCourse_sourceType;
                if (GetaCourse_nodeParamType === 'str') {
                    GetaCourse_parameters.source = GetaCourse_nodeParam || '';
                } else {
                    GetaCourse_parameters.source = RED.util.getMessageProperty(msg, GetaCourse_nodeParam);
                }
                GetaCourse_parameters.source = !!GetaCourse_parameters.source ? GetaCourse_parameters.source : msg.payload;
                
                GetaCourse_nodeParam = node.GetaCourse_format;
                GetaCourse_nodeParamType = node.GetaCourse_formatType;
                if (GetaCourse_nodeParamType === 'str') {
                    GetaCourse_parameters.format = GetaCourse_nodeParam || '';
                } else {
                    GetaCourse_parameters.format = RED.util.getMessageProperty(msg, GetaCourse_nodeParam);
                }
                GetaCourse_parameters.format = !!GetaCourse_parameters.format ? GetaCourse_parameters.format : msg.payload;
                
                GetaCourse_nodeParam = node.GetaCourse_apikey;
                GetaCourse_nodeParamType = node.GetaCourse_apikeyType;
                if (GetaCourse_nodeParamType === 'str') {
                    GetaCourse_parameters.apikey = GetaCourse_nodeParam || '';
                } else {
                    GetaCourse_parameters.apikey = RED.util.getMessageProperty(msg, GetaCourse_nodeParam);
                }
                GetaCourse_parameters.apikey = !!GetaCourse_parameters.apikey ? GetaCourse_parameters.apikey : msg.payload;
                
                GetaCourse_nodeParam = node.GetaCourse_courseId;
                GetaCourse_nodeParamType = node.GetaCourse_courseIdType;
                if (GetaCourse_nodeParamType === 'str') {
                    GetaCourse_parameters.courseId = GetaCourse_nodeParam || '';
                } else {
                    GetaCourse_parameters.courseId = RED.util.getMessageProperty(msg, GetaCourse_nodeParam);
                }
                GetaCourse_parameters.courseId = !!GetaCourse_parameters.courseId ? GetaCourse_parameters.courseId : msg.payload;
                                result = client.GetaCourse(GetaCourse_parameters);
            }
            if (!errorFlag && node.method === 'AssignCoursestoaUser') {
                var AssignCoursestoaUser_parameters = [];
                var AssignCoursestoaUser_nodeParam;
                var AssignCoursestoaUser_nodeParamType;

                AssignCoursestoaUser_nodeParam = node.AssignCoursestoaUser_source;
                AssignCoursestoaUser_nodeParamType = node.AssignCoursestoaUser_sourceType;
                if (AssignCoursestoaUser_nodeParamType === 'str') {
                    AssignCoursestoaUser_parameters.source = AssignCoursestoaUser_nodeParam || '';
                } else {
                    AssignCoursestoaUser_parameters.source = RED.util.getMessageProperty(msg, AssignCoursestoaUser_nodeParam);
                }
                AssignCoursestoaUser_parameters.source = !!AssignCoursestoaUser_parameters.source ? AssignCoursestoaUser_parameters.source : msg.payload;
                
                AssignCoursestoaUser_nodeParam = node.AssignCoursestoaUser_sendmessage;
                AssignCoursestoaUser_nodeParamType = node.AssignCoursestoaUser_sendmessageType;
                if (AssignCoursestoaUser_nodeParamType === 'str') {
                    AssignCoursestoaUser_parameters.sendmessage = AssignCoursestoaUser_nodeParam || '';
                } else {
                    AssignCoursestoaUser_parameters.sendmessage = RED.util.getMessageProperty(msg, AssignCoursestoaUser_nodeParam);
                }
                AssignCoursestoaUser_parameters.sendmessage = !!AssignCoursestoaUser_parameters.sendmessage ? AssignCoursestoaUser_parameters.sendmessage : msg.payload;
                
                AssignCoursestoaUser_nodeParam = node.AssignCoursestoaUser_contentType;
                AssignCoursestoaUser_nodeParamType = node.AssignCoursestoaUser_contentTypeType;
                if (AssignCoursestoaUser_nodeParamType === 'str') {
                    AssignCoursestoaUser_parameters.contentType = AssignCoursestoaUser_nodeParam || '';
                } else {
                    AssignCoursestoaUser_parameters.contentType = RED.util.getMessageProperty(msg, AssignCoursestoaUser_nodeParam);
                }
                AssignCoursestoaUser_parameters.contentType = !!AssignCoursestoaUser_parameters.contentType ? AssignCoursestoaUser_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    AssignCoursestoaUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                AssignCoursestoaUser_nodeParam = node.AssignCoursestoaUser_userId;
                AssignCoursestoaUser_nodeParamType = node.AssignCoursestoaUser_userIdType;
                if (AssignCoursestoaUser_nodeParamType === 'str') {
                    AssignCoursestoaUser_parameters.userId = AssignCoursestoaUser_nodeParam || '';
                } else {
                    AssignCoursestoaUser_parameters.userId = RED.util.getMessageProperty(msg, AssignCoursestoaUser_nodeParam);
                }
                AssignCoursestoaUser_parameters.userId = !!AssignCoursestoaUser_parameters.userId ? AssignCoursestoaUser_parameters.userId : msg.payload;
                                result = client.AssignCoursestoaUser(AssignCoursestoaUser_parameters);
            }
            if (!errorFlag && node.method === 'ListCoursesAssignedtoaUser') {
                var ListCoursesAssignedtoaUser_parameters = [];
                var ListCoursesAssignedtoaUser_nodeParam;
                var ListCoursesAssignedtoaUser_nodeParamType;

                ListCoursesAssignedtoaUser_nodeParam = node.ListCoursesAssignedtoaUser_source;
                ListCoursesAssignedtoaUser_nodeParamType = node.ListCoursesAssignedtoaUser_sourceType;
                if (ListCoursesAssignedtoaUser_nodeParamType === 'str') {
                    ListCoursesAssignedtoaUser_parameters.source = ListCoursesAssignedtoaUser_nodeParam || '';
                } else {
                    ListCoursesAssignedtoaUser_parameters.source = RED.util.getMessageProperty(msg, ListCoursesAssignedtoaUser_nodeParam);
                }
                ListCoursesAssignedtoaUser_parameters.source = !!ListCoursesAssignedtoaUser_parameters.source ? ListCoursesAssignedtoaUser_parameters.source : msg.payload;
                
                ListCoursesAssignedtoaUser_nodeParam = node.ListCoursesAssignedtoaUser_format;
                ListCoursesAssignedtoaUser_nodeParamType = node.ListCoursesAssignedtoaUser_formatType;
                if (ListCoursesAssignedtoaUser_nodeParamType === 'str') {
                    ListCoursesAssignedtoaUser_parameters.format = ListCoursesAssignedtoaUser_nodeParam || '';
                } else {
                    ListCoursesAssignedtoaUser_parameters.format = RED.util.getMessageProperty(msg, ListCoursesAssignedtoaUser_nodeParam);
                }
                ListCoursesAssignedtoaUser_parameters.format = !!ListCoursesAssignedtoaUser_parameters.format ? ListCoursesAssignedtoaUser_parameters.format : msg.payload;
                
                ListCoursesAssignedtoaUser_nodeParam = node.ListCoursesAssignedtoaUser_apikey;
                ListCoursesAssignedtoaUser_nodeParamType = node.ListCoursesAssignedtoaUser_apikeyType;
                if (ListCoursesAssignedtoaUser_nodeParamType === 'str') {
                    ListCoursesAssignedtoaUser_parameters.apikey = ListCoursesAssignedtoaUser_nodeParam || '';
                } else {
                    ListCoursesAssignedtoaUser_parameters.apikey = RED.util.getMessageProperty(msg, ListCoursesAssignedtoaUser_nodeParam);
                }
                ListCoursesAssignedtoaUser_parameters.apikey = !!ListCoursesAssignedtoaUser_parameters.apikey ? ListCoursesAssignedtoaUser_parameters.apikey : msg.payload;
                
                ListCoursesAssignedtoaUser_nodeParam = node.ListCoursesAssignedtoaUser_userId;
                ListCoursesAssignedtoaUser_nodeParamType = node.ListCoursesAssignedtoaUser_userIdType;
                if (ListCoursesAssignedtoaUser_nodeParamType === 'str') {
                    ListCoursesAssignedtoaUser_parameters.userId = ListCoursesAssignedtoaUser_nodeParam || '';
                } else {
                    ListCoursesAssignedtoaUser_parameters.userId = RED.util.getMessageProperty(msg, ListCoursesAssignedtoaUser_nodeParam);
                }
                ListCoursesAssignedtoaUser_parameters.userId = !!ListCoursesAssignedtoaUser_parameters.userId ? ListCoursesAssignedtoaUser_parameters.userId : msg.payload;
                                result = client.ListCoursesAssignedtoaUser(ListCoursesAssignedtoaUser_parameters);
            }
            if (!errorFlag && node.method === 'ListAllUsersAssignedtoaCourse') {
                var ListAllUsersAssignedtoaCourse_parameters = [];
                var ListAllUsersAssignedtoaCourse_nodeParam;
                var ListAllUsersAssignedtoaCourse_nodeParamType;

                ListAllUsersAssignedtoaCourse_nodeParam = node.ListAllUsersAssignedtoaCourse_source;
                ListAllUsersAssignedtoaCourse_nodeParamType = node.ListAllUsersAssignedtoaCourse_sourceType;
                if (ListAllUsersAssignedtoaCourse_nodeParamType === 'str') {
                    ListAllUsersAssignedtoaCourse_parameters.source = ListAllUsersAssignedtoaCourse_nodeParam || '';
                } else {
                    ListAllUsersAssignedtoaCourse_parameters.source = RED.util.getMessageProperty(msg, ListAllUsersAssignedtoaCourse_nodeParam);
                }
                ListAllUsersAssignedtoaCourse_parameters.source = !!ListAllUsersAssignedtoaCourse_parameters.source ? ListAllUsersAssignedtoaCourse_parameters.source : msg.payload;
                
                ListAllUsersAssignedtoaCourse_nodeParam = node.ListAllUsersAssignedtoaCourse_format;
                ListAllUsersAssignedtoaCourse_nodeParamType = node.ListAllUsersAssignedtoaCourse_formatType;
                if (ListAllUsersAssignedtoaCourse_nodeParamType === 'str') {
                    ListAllUsersAssignedtoaCourse_parameters.format = ListAllUsersAssignedtoaCourse_nodeParam || '';
                } else {
                    ListAllUsersAssignedtoaCourse_parameters.format = RED.util.getMessageProperty(msg, ListAllUsersAssignedtoaCourse_nodeParam);
                }
                ListAllUsersAssignedtoaCourse_parameters.format = !!ListAllUsersAssignedtoaCourse_parameters.format ? ListAllUsersAssignedtoaCourse_parameters.format : msg.payload;
                
                ListAllUsersAssignedtoaCourse_nodeParam = node.ListAllUsersAssignedtoaCourse_apikey;
                ListAllUsersAssignedtoaCourse_nodeParamType = node.ListAllUsersAssignedtoaCourse_apikeyType;
                if (ListAllUsersAssignedtoaCourse_nodeParamType === 'str') {
                    ListAllUsersAssignedtoaCourse_parameters.apikey = ListAllUsersAssignedtoaCourse_nodeParam || '';
                } else {
                    ListAllUsersAssignedtoaCourse_parameters.apikey = RED.util.getMessageProperty(msg, ListAllUsersAssignedtoaCourse_nodeParam);
                }
                ListAllUsersAssignedtoaCourse_parameters.apikey = !!ListAllUsersAssignedtoaCourse_parameters.apikey ? ListAllUsersAssignedtoaCourse_parameters.apikey : msg.payload;
                
                ListAllUsersAssignedtoaCourse_nodeParam = node.ListAllUsersAssignedtoaCourse_courseId;
                ListAllUsersAssignedtoaCourse_nodeParamType = node.ListAllUsersAssignedtoaCourse_courseIdType;
                if (ListAllUsersAssignedtoaCourse_nodeParamType === 'str') {
                    ListAllUsersAssignedtoaCourse_parameters.courseId = ListAllUsersAssignedtoaCourse_nodeParam || '';
                } else {
                    ListAllUsersAssignedtoaCourse_parameters.courseId = RED.util.getMessageProperty(msg, ListAllUsersAssignedtoaCourse_nodeParam);
                }
                ListAllUsersAssignedtoaCourse_parameters.courseId = !!ListAllUsersAssignedtoaCourse_parameters.courseId ? ListAllUsersAssignedtoaCourse_parameters.courseId : msg.payload;
                                result = client.ListAllUsersAssignedtoaCourse(ListAllUsersAssignedtoaCourse_parameters);
            }
            if (!errorFlag && node.method === 'ListModulesforaCourse') {
                var ListModulesforaCourse_parameters = [];
                var ListModulesforaCourse_nodeParam;
                var ListModulesforaCourse_nodeParamType;

                ListModulesforaCourse_nodeParam = node.ListModulesforaCourse_source;
                ListModulesforaCourse_nodeParamType = node.ListModulesforaCourse_sourceType;
                if (ListModulesforaCourse_nodeParamType === 'str') {
                    ListModulesforaCourse_parameters.source = ListModulesforaCourse_nodeParam || '';
                } else {
                    ListModulesforaCourse_parameters.source = RED.util.getMessageProperty(msg, ListModulesforaCourse_nodeParam);
                }
                ListModulesforaCourse_parameters.source = !!ListModulesforaCourse_parameters.source ? ListModulesforaCourse_parameters.source : msg.payload;
                
                ListModulesforaCourse_nodeParam = node.ListModulesforaCourse_format;
                ListModulesforaCourse_nodeParamType = node.ListModulesforaCourse_formatType;
                if (ListModulesforaCourse_nodeParamType === 'str') {
                    ListModulesforaCourse_parameters.format = ListModulesforaCourse_nodeParam || '';
                } else {
                    ListModulesforaCourse_parameters.format = RED.util.getMessageProperty(msg, ListModulesforaCourse_nodeParam);
                }
                ListModulesforaCourse_parameters.format = !!ListModulesforaCourse_parameters.format ? ListModulesforaCourse_parameters.format : msg.payload;
                
                ListModulesforaCourse_nodeParam = node.ListModulesforaCourse_apikey;
                ListModulesforaCourse_nodeParamType = node.ListModulesforaCourse_apikeyType;
                if (ListModulesforaCourse_nodeParamType === 'str') {
                    ListModulesforaCourse_parameters.apikey = ListModulesforaCourse_nodeParam || '';
                } else {
                    ListModulesforaCourse_parameters.apikey = RED.util.getMessageProperty(msg, ListModulesforaCourse_nodeParam);
                }
                ListModulesforaCourse_parameters.apikey = !!ListModulesforaCourse_parameters.apikey ? ListModulesforaCourse_parameters.apikey : msg.payload;
                
                ListModulesforaCourse_nodeParam = node.ListModulesforaCourse_courseId;
                ListModulesforaCourse_nodeParamType = node.ListModulesforaCourse_courseIdType;
                if (ListModulesforaCourse_nodeParamType === 'str') {
                    ListModulesforaCourse_parameters.courseId = ListModulesforaCourse_nodeParam || '';
                } else {
                    ListModulesforaCourse_parameters.courseId = RED.util.getMessageProperty(msg, ListModulesforaCourse_nodeParam);
                }
                ListModulesforaCourse_parameters.courseId = !!ListModulesforaCourse_parameters.courseId ? ListModulesforaCourse_parameters.courseId : msg.payload;
                                result = client.ListModulesforaCourse(ListModulesforaCourse_parameters);
            }
            if (!errorFlag && node.method === 'ListCourseandModuleResultsforaUser') {
                var ListCourseandModuleResultsforaUser_parameters = [];
                var ListCourseandModuleResultsforaUser_nodeParam;
                var ListCourseandModuleResultsforaUser_nodeParamType;

                ListCourseandModuleResultsforaUser_nodeParam = node.ListCourseandModuleResultsforaUser_source;
                ListCourseandModuleResultsforaUser_nodeParamType = node.ListCourseandModuleResultsforaUser_sourceType;
                if (ListCourseandModuleResultsforaUser_nodeParamType === 'str') {
                    ListCourseandModuleResultsforaUser_parameters.source = ListCourseandModuleResultsforaUser_nodeParam || '';
                } else {
                    ListCourseandModuleResultsforaUser_parameters.source = RED.util.getMessageProperty(msg, ListCourseandModuleResultsforaUser_nodeParam);
                }
                ListCourseandModuleResultsforaUser_parameters.source = !!ListCourseandModuleResultsforaUser_parameters.source ? ListCourseandModuleResultsforaUser_parameters.source : msg.payload;
                
                ListCourseandModuleResultsforaUser_nodeParam = node.ListCourseandModuleResultsforaUser_format;
                ListCourseandModuleResultsforaUser_nodeParamType = node.ListCourseandModuleResultsforaUser_formatType;
                if (ListCourseandModuleResultsforaUser_nodeParamType === 'str') {
                    ListCourseandModuleResultsforaUser_parameters.format = ListCourseandModuleResultsforaUser_nodeParam || '';
                } else {
                    ListCourseandModuleResultsforaUser_parameters.format = RED.util.getMessageProperty(msg, ListCourseandModuleResultsforaUser_nodeParam);
                }
                ListCourseandModuleResultsforaUser_parameters.format = !!ListCourseandModuleResultsforaUser_parameters.format ? ListCourseandModuleResultsforaUser_parameters.format : msg.payload;
                
                ListCourseandModuleResultsforaUser_nodeParam = node.ListCourseandModuleResultsforaUser_apikey;
                ListCourseandModuleResultsforaUser_nodeParamType = node.ListCourseandModuleResultsforaUser_apikeyType;
                if (ListCourseandModuleResultsforaUser_nodeParamType === 'str') {
                    ListCourseandModuleResultsforaUser_parameters.apikey = ListCourseandModuleResultsforaUser_nodeParam || '';
                } else {
                    ListCourseandModuleResultsforaUser_parameters.apikey = RED.util.getMessageProperty(msg, ListCourseandModuleResultsforaUser_nodeParam);
                }
                ListCourseandModuleResultsforaUser_parameters.apikey = !!ListCourseandModuleResultsforaUser_parameters.apikey ? ListCourseandModuleResultsforaUser_parameters.apikey : msg.payload;
                
                ListCourseandModuleResultsforaUser_nodeParam = node.ListCourseandModuleResultsforaUser_userId;
                ListCourseandModuleResultsforaUser_nodeParamType = node.ListCourseandModuleResultsforaUser_userIdType;
                if (ListCourseandModuleResultsforaUser_nodeParamType === 'str') {
                    ListCourseandModuleResultsforaUser_parameters.userId = ListCourseandModuleResultsforaUser_nodeParam || '';
                } else {
                    ListCourseandModuleResultsforaUser_parameters.userId = RED.util.getMessageProperty(msg, ListCourseandModuleResultsforaUser_nodeParam);
                }
                ListCourseandModuleResultsforaUser_parameters.userId = !!ListCourseandModuleResultsforaUser_parameters.userId ? ListCourseandModuleResultsforaUser_parameters.userId : msg.payload;
                
                ListCourseandModuleResultsforaUser_nodeParam = node.ListCourseandModuleResultsforaUser_courseId;
                ListCourseandModuleResultsforaUser_nodeParamType = node.ListCourseandModuleResultsforaUser_courseIdType;
                if (ListCourseandModuleResultsforaUser_nodeParamType === 'str') {
                    ListCourseandModuleResultsforaUser_parameters.courseId = ListCourseandModuleResultsforaUser_nodeParam || '';
                } else {
                    ListCourseandModuleResultsforaUser_parameters.courseId = RED.util.getMessageProperty(msg, ListCourseandModuleResultsforaUser_nodeParam);
                }
                ListCourseandModuleResultsforaUser_parameters.courseId = !!ListCourseandModuleResultsforaUser_parameters.courseId ? ListCourseandModuleResultsforaUser_parameters.courseId : msg.payload;
                                result = client.ListCourseandModuleResultsforaUser(ListCourseandModuleResultsforaUser_parameters);
            }
            if (!errorFlag && node.method === 'UnassignCoursesfromaUser') {
                var UnassignCoursesfromaUser_parameters = [];
                var UnassignCoursesfromaUser_nodeParam;
                var UnassignCoursesfromaUser_nodeParamType;

                UnassignCoursesfromaUser_nodeParam = node.UnassignCoursesfromaUser_source;
                UnassignCoursesfromaUser_nodeParamType = node.UnassignCoursesfromaUser_sourceType;
                if (UnassignCoursesfromaUser_nodeParamType === 'str') {
                    UnassignCoursesfromaUser_parameters.source = UnassignCoursesfromaUser_nodeParam || '';
                } else {
                    UnassignCoursesfromaUser_parameters.source = RED.util.getMessageProperty(msg, UnassignCoursesfromaUser_nodeParam);
                }
                UnassignCoursesfromaUser_parameters.source = !!UnassignCoursesfromaUser_parameters.source ? UnassignCoursesfromaUser_parameters.source : msg.payload;
                
                UnassignCoursesfromaUser_nodeParam = node.UnassignCoursesfromaUser_apikey;
                UnassignCoursesfromaUser_nodeParamType = node.UnassignCoursesfromaUser_apikeyType;
                if (UnassignCoursesfromaUser_nodeParamType === 'str') {
                    UnassignCoursesfromaUser_parameters.apikey = UnassignCoursesfromaUser_nodeParam || '';
                } else {
                    UnassignCoursesfromaUser_parameters.apikey = RED.util.getMessageProperty(msg, UnassignCoursesfromaUser_nodeParam);
                }
                UnassignCoursesfromaUser_parameters.apikey = !!UnassignCoursesfromaUser_parameters.apikey ? UnassignCoursesfromaUser_parameters.apikey : msg.payload;
                
                UnassignCoursesfromaUser_nodeParam = node.UnassignCoursesfromaUser_userId;
                UnassignCoursesfromaUser_nodeParamType = node.UnassignCoursesfromaUser_userIdType;
                if (UnassignCoursesfromaUser_nodeParamType === 'str') {
                    UnassignCoursesfromaUser_parameters.userId = UnassignCoursesfromaUser_nodeParam || '';
                } else {
                    UnassignCoursesfromaUser_parameters.userId = RED.util.getMessageProperty(msg, UnassignCoursesfromaUser_nodeParam);
                }
                UnassignCoursesfromaUser_parameters.userId = !!UnassignCoursesfromaUser_parameters.userId ? UnassignCoursesfromaUser_parameters.userId : msg.payload;
                
                UnassignCoursesfromaUser_nodeParam = node.UnassignCoursesfromaUser_courseId;
                UnassignCoursesfromaUser_nodeParamType = node.UnassignCoursesfromaUser_courseIdType;
                if (UnassignCoursesfromaUser_nodeParamType === 'str') {
                    UnassignCoursesfromaUser_parameters.courseId = UnassignCoursesfromaUser_nodeParam || '';
                } else {
                    UnassignCoursesfromaUser_parameters.courseId = RED.util.getMessageProperty(msg, UnassignCoursesfromaUser_nodeParam);
                }
                UnassignCoursesfromaUser_parameters.courseId = !!UnassignCoursesfromaUser_parameters.courseId ? UnassignCoursesfromaUser_parameters.courseId : msg.payload;
                                result = client.UnassignCoursesfromaUser(UnassignCoursesfromaUser_parameters);
            }
            if (!errorFlag && node.method === 'ListAllCourseResultsforAllUsersSinceaSpecificDate') {
                var ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters = [];
                var ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam;
                var ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType;

                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_source;
                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_sourceType;
                if (ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType === 'str') {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.source = ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam || '';
                } else {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.source = RED.util.getMessageProperty(msg, ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam);
                }
                ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.source = !!ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.source ? ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.source : msg.payload;
                
                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_since;
                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_sinceType;
                if (ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType === 'str') {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.since = ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam || '';
                } else {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.since = RED.util.getMessageProperty(msg, ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam);
                }
                ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.since = !!ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.since ? ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.since : msg.payload;
                
                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikey;
                ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType = node.ListAllCourseResultsforAllUsersSinceaSpecificDate_apikeyType;
                if (ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParamType === 'str') {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.apikey = ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam || '';
                } else {
                    ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.apikey = RED.util.getMessageProperty(msg, ListAllCourseResultsforAllUsersSinceaSpecificDate_nodeParam);
                }
                ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.apikey = !!ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.apikey ? ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters.apikey : msg.payload;
                                result = client.ListAllCourseResultsforAllUsersSinceaSpecificDate(ListAllCourseResultsforAllUsersSinceaSpecificDate_parameters);
            }
            if (!errorFlag && node.method === 'ResetCourseResults') {
                var ResetCourseResults_parameters = [];
                var ResetCourseResults_nodeParam;
                var ResetCourseResults_nodeParamType;

                ResetCourseResults_nodeParam = node.ResetCourseResults_source;
                ResetCourseResults_nodeParamType = node.ResetCourseResults_sourceType;
                if (ResetCourseResults_nodeParamType === 'str') {
                    ResetCourseResults_parameters.source = ResetCourseResults_nodeParam || '';
                } else {
                    ResetCourseResults_parameters.source = RED.util.getMessageProperty(msg, ResetCourseResults_nodeParam);
                }
                ResetCourseResults_parameters.source = !!ResetCourseResults_parameters.source ? ResetCourseResults_parameters.source : msg.payload;
                
                ResetCourseResults_nodeParam = node.ResetCourseResults_apikey;
                ResetCourseResults_nodeParamType = node.ResetCourseResults_apikeyType;
                if (ResetCourseResults_nodeParamType === 'str') {
                    ResetCourseResults_parameters.apikey = ResetCourseResults_nodeParam || '';
                } else {
                    ResetCourseResults_parameters.apikey = RED.util.getMessageProperty(msg, ResetCourseResults_nodeParam);
                }
                ResetCourseResults_parameters.apikey = !!ResetCourseResults_parameters.apikey ? ResetCourseResults_parameters.apikey : msg.payload;
                
                ResetCourseResults_nodeParam = node.ResetCourseResults_userId;
                ResetCourseResults_nodeParamType = node.ResetCourseResults_userIdType;
                if (ResetCourseResults_nodeParamType === 'str') {
                    ResetCourseResults_parameters.userId = ResetCourseResults_nodeParam || '';
                } else {
                    ResetCourseResults_parameters.userId = RED.util.getMessageProperty(msg, ResetCourseResults_nodeParam);
                }
                ResetCourseResults_parameters.userId = !!ResetCourseResults_parameters.userId ? ResetCourseResults_parameters.userId : msg.payload;
                
                ResetCourseResults_nodeParam = node.ResetCourseResults_courseId;
                ResetCourseResults_nodeParamType = node.ResetCourseResults_courseIdType;
                if (ResetCourseResults_nodeParamType === 'str') {
                    ResetCourseResults_parameters.courseId = ResetCourseResults_nodeParam || '';
                } else {
                    ResetCourseResults_parameters.courseId = RED.util.getMessageProperty(msg, ResetCourseResults_nodeParam);
                }
                ResetCourseResults_parameters.courseId = !!ResetCourseResults_parameters.courseId ? ResetCourseResults_parameters.courseId : msg.payload;
                                result = client.ResetCourseResults(ResetCourseResults_parameters);
            }
            if (!errorFlag && node.method === 'GetCourseCustomFields') {
                var GetCourseCustomFields_parameters = [];
                var GetCourseCustomFields_nodeParam;
                var GetCourseCustomFields_nodeParamType;

                GetCourseCustomFields_nodeParam = node.GetCourseCustomFields_source;
                GetCourseCustomFields_nodeParamType = node.GetCourseCustomFields_sourceType;
                if (GetCourseCustomFields_nodeParamType === 'str') {
                    GetCourseCustomFields_parameters.source = GetCourseCustomFields_nodeParam || '';
                } else {
                    GetCourseCustomFields_parameters.source = RED.util.getMessageProperty(msg, GetCourseCustomFields_nodeParam);
                }
                GetCourseCustomFields_parameters.source = !!GetCourseCustomFields_parameters.source ? GetCourseCustomFields_parameters.source : msg.payload;
                
                GetCourseCustomFields_nodeParam = node.GetCourseCustomFields_format;
                GetCourseCustomFields_nodeParamType = node.GetCourseCustomFields_formatType;
                if (GetCourseCustomFields_nodeParamType === 'str') {
                    GetCourseCustomFields_parameters.format = GetCourseCustomFields_nodeParam || '';
                } else {
                    GetCourseCustomFields_parameters.format = RED.util.getMessageProperty(msg, GetCourseCustomFields_nodeParam);
                }
                GetCourseCustomFields_parameters.format = !!GetCourseCustomFields_parameters.format ? GetCourseCustomFields_parameters.format : msg.payload;
                
                GetCourseCustomFields_nodeParam = node.GetCourseCustomFields_apikey;
                GetCourseCustomFields_nodeParamType = node.GetCourseCustomFields_apikeyType;
                if (GetCourseCustomFields_nodeParamType === 'str') {
                    GetCourseCustomFields_parameters.apikey = GetCourseCustomFields_nodeParam || '';
                } else {
                    GetCourseCustomFields_parameters.apikey = RED.util.getMessageProperty(msg, GetCourseCustomFields_nodeParam);
                }
                GetCourseCustomFields_parameters.apikey = !!GetCourseCustomFields_parameters.apikey ? GetCourseCustomFields_parameters.apikey : msg.payload;
                                result = client.GetCourseCustomFields(GetCourseCustomFields_parameters);
            }
            if (!errorFlag && node.method === 'GetCourseCustomFieldValuesforaSpecificCourse') {
                var GetCourseCustomFieldValuesforaSpecificCourse_parameters = [];
                var GetCourseCustomFieldValuesforaSpecificCourse_nodeParam;
                var GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType;

                GetCourseCustomFieldValuesforaSpecificCourse_nodeParam = node.GetCourseCustomFieldValuesforaSpecificCourse_source;
                GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType = node.GetCourseCustomFieldValuesforaSpecificCourse_sourceType;
                if (GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType === 'str') {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.source = GetCourseCustomFieldValuesforaSpecificCourse_nodeParam || '';
                } else {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.source = RED.util.getMessageProperty(msg, GetCourseCustomFieldValuesforaSpecificCourse_nodeParam);
                }
                GetCourseCustomFieldValuesforaSpecificCourse_parameters.source = !!GetCourseCustomFieldValuesforaSpecificCourse_parameters.source ? GetCourseCustomFieldValuesforaSpecificCourse_parameters.source : msg.payload;
                
                GetCourseCustomFieldValuesforaSpecificCourse_nodeParam = node.GetCourseCustomFieldValuesforaSpecificCourse_apikey;
                GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType = node.GetCourseCustomFieldValuesforaSpecificCourse_apikeyType;
                if (GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType === 'str') {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.apikey = GetCourseCustomFieldValuesforaSpecificCourse_nodeParam || '';
                } else {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.apikey = RED.util.getMessageProperty(msg, GetCourseCustomFieldValuesforaSpecificCourse_nodeParam);
                }
                GetCourseCustomFieldValuesforaSpecificCourse_parameters.apikey = !!GetCourseCustomFieldValuesforaSpecificCourse_parameters.apikey ? GetCourseCustomFieldValuesforaSpecificCourse_parameters.apikey : msg.payload;
                
                GetCourseCustomFieldValuesforaSpecificCourse_nodeParam = node.GetCourseCustomFieldValuesforaSpecificCourse_courseId;
                GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType = node.GetCourseCustomFieldValuesforaSpecificCourse_courseIdType;
                if (GetCourseCustomFieldValuesforaSpecificCourse_nodeParamType === 'str') {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.courseId = GetCourseCustomFieldValuesforaSpecificCourse_nodeParam || '';
                } else {
                    GetCourseCustomFieldValuesforaSpecificCourse_parameters.courseId = RED.util.getMessageProperty(msg, GetCourseCustomFieldValuesforaSpecificCourse_nodeParam);
                }
                GetCourseCustomFieldValuesforaSpecificCourse_parameters.courseId = !!GetCourseCustomFieldValuesforaSpecificCourse_parameters.courseId ? GetCourseCustomFieldValuesforaSpecificCourse_parameters.courseId : msg.payload;
                                result = client.GetCourseCustomFieldValuesforaSpecificCourse(GetCourseCustomFieldValuesforaSpecificCourse_parameters);
            }
            if (!errorFlag && node.method === 'GetAllLearningPaths') {
                var GetAllLearningPaths_parameters = [];
                var GetAllLearningPaths_nodeParam;
                var GetAllLearningPaths_nodeParamType;

                GetAllLearningPaths_nodeParam = node.GetAllLearningPaths_source;
                GetAllLearningPaths_nodeParamType = node.GetAllLearningPaths_sourceType;
                if (GetAllLearningPaths_nodeParamType === 'str') {
                    GetAllLearningPaths_parameters.source = GetAllLearningPaths_nodeParam || '';
                } else {
                    GetAllLearningPaths_parameters.source = RED.util.getMessageProperty(msg, GetAllLearningPaths_nodeParam);
                }
                GetAllLearningPaths_parameters.source = !!GetAllLearningPaths_parameters.source ? GetAllLearningPaths_parameters.source : msg.payload;
                
                GetAllLearningPaths_nodeParam = node.GetAllLearningPaths_format;
                GetAllLearningPaths_nodeParamType = node.GetAllLearningPaths_formatType;
                if (GetAllLearningPaths_nodeParamType === 'str') {
                    GetAllLearningPaths_parameters.format = GetAllLearningPaths_nodeParam || '';
                } else {
                    GetAllLearningPaths_parameters.format = RED.util.getMessageProperty(msg, GetAllLearningPaths_nodeParam);
                }
                GetAllLearningPaths_parameters.format = !!GetAllLearningPaths_parameters.format ? GetAllLearningPaths_parameters.format : msg.payload;
                
                GetAllLearningPaths_nodeParam = node.GetAllLearningPaths_contentType;
                GetAllLearningPaths_nodeParamType = node.GetAllLearningPaths_contentTypeType;
                if (GetAllLearningPaths_nodeParamType === 'str') {
                    GetAllLearningPaths_parameters.contentType = GetAllLearningPaths_nodeParam || '';
                } else {
                    GetAllLearningPaths_parameters.contentType = RED.util.getMessageProperty(msg, GetAllLearningPaths_nodeParam);
                }
                GetAllLearningPaths_parameters.contentType = !!GetAllLearningPaths_parameters.contentType ? GetAllLearningPaths_parameters.contentType : msg.payload;
                                result = client.GetAllLearningPaths(GetAllLearningPaths_parameters);
            }
            if (!errorFlag && node.method === 'AssignUserstoaLearningPath') {
                var AssignUserstoaLearningPath_parameters = [];
                var AssignUserstoaLearningPath_nodeParam;
                var AssignUserstoaLearningPath_nodeParamType;

                AssignUserstoaLearningPath_nodeParam = node.AssignUserstoaLearningPath_source;
                AssignUserstoaLearningPath_nodeParamType = node.AssignUserstoaLearningPath_sourceType;
                if (AssignUserstoaLearningPath_nodeParamType === 'str') {
                    AssignUserstoaLearningPath_parameters.source = AssignUserstoaLearningPath_nodeParam || '';
                } else {
                    AssignUserstoaLearningPath_parameters.source = RED.util.getMessageProperty(msg, AssignUserstoaLearningPath_nodeParam);
                }
                AssignUserstoaLearningPath_parameters.source = !!AssignUserstoaLearningPath_parameters.source ? AssignUserstoaLearningPath_parameters.source : msg.payload;
                
                AssignUserstoaLearningPath_nodeParam = node.AssignUserstoaLearningPath_includesubteams;
                AssignUserstoaLearningPath_nodeParamType = node.AssignUserstoaLearningPath_includesubteamsType;
                if (AssignUserstoaLearningPath_nodeParamType === 'str') {
                    AssignUserstoaLearningPath_parameters.includesubteams = AssignUserstoaLearningPath_nodeParam || '';
                } else {
                    AssignUserstoaLearningPath_parameters.includesubteams = RED.util.getMessageProperty(msg, AssignUserstoaLearningPath_nodeParam);
                }
                AssignUserstoaLearningPath_parameters.includesubteams = !!AssignUserstoaLearningPath_parameters.includesubteams ? AssignUserstoaLearningPath_parameters.includesubteams : msg.payload;
                
                AssignUserstoaLearningPath_nodeParam = node.AssignUserstoaLearningPath_contentType;
                AssignUserstoaLearningPath_nodeParamType = node.AssignUserstoaLearningPath_contentTypeType;
                if (AssignUserstoaLearningPath_nodeParamType === 'str') {
                    AssignUserstoaLearningPath_parameters.contentType = AssignUserstoaLearningPath_nodeParam || '';
                } else {
                    AssignUserstoaLearningPath_parameters.contentType = RED.util.getMessageProperty(msg, AssignUserstoaLearningPath_nodeParam);
                }
                AssignUserstoaLearningPath_parameters.contentType = !!AssignUserstoaLearningPath_parameters.contentType ? AssignUserstoaLearningPath_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    AssignUserstoaLearningPath_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                AssignUserstoaLearningPath_nodeParam = node.AssignUserstoaLearningPath_userId;
                AssignUserstoaLearningPath_nodeParamType = node.AssignUserstoaLearningPath_userIdType;
                if (AssignUserstoaLearningPath_nodeParamType === 'str') {
                    AssignUserstoaLearningPath_parameters.userId = AssignUserstoaLearningPath_nodeParam || '';
                } else {
                    AssignUserstoaLearningPath_parameters.userId = RED.util.getMessageProperty(msg, AssignUserstoaLearningPath_nodeParam);
                }
                AssignUserstoaLearningPath_parameters.userId = !!AssignUserstoaLearningPath_parameters.userId ? AssignUserstoaLearningPath_parameters.userId : msg.payload;
                                result = client.AssignUserstoaLearningPath(AssignUserstoaLearningPath_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofLearningPathsAssignedtoaUser') {
                var GetaListofLearningPathsAssignedtoaUser_parameters = [];
                var GetaListofLearningPathsAssignedtoaUser_nodeParam;
                var GetaListofLearningPathsAssignedtoaUser_nodeParamType;

                GetaListofLearningPathsAssignedtoaUser_nodeParam = node.GetaListofLearningPathsAssignedtoaUser_source;
                GetaListofLearningPathsAssignedtoaUser_nodeParamType = node.GetaListofLearningPathsAssignedtoaUser_sourceType;
                if (GetaListofLearningPathsAssignedtoaUser_nodeParamType === 'str') {
                    GetaListofLearningPathsAssignedtoaUser_parameters.source = GetaListofLearningPathsAssignedtoaUser_nodeParam || '';
                } else {
                    GetaListofLearningPathsAssignedtoaUser_parameters.source = RED.util.getMessageProperty(msg, GetaListofLearningPathsAssignedtoaUser_nodeParam);
                }
                GetaListofLearningPathsAssignedtoaUser_parameters.source = !!GetaListofLearningPathsAssignedtoaUser_parameters.source ? GetaListofLearningPathsAssignedtoaUser_parameters.source : msg.payload;
                
                GetaListofLearningPathsAssignedtoaUser_nodeParam = node.GetaListofLearningPathsAssignedtoaUser_format;
                GetaListofLearningPathsAssignedtoaUser_nodeParamType = node.GetaListofLearningPathsAssignedtoaUser_formatType;
                if (GetaListofLearningPathsAssignedtoaUser_nodeParamType === 'str') {
                    GetaListofLearningPathsAssignedtoaUser_parameters.format = GetaListofLearningPathsAssignedtoaUser_nodeParam || '';
                } else {
                    GetaListofLearningPathsAssignedtoaUser_parameters.format = RED.util.getMessageProperty(msg, GetaListofLearningPathsAssignedtoaUser_nodeParam);
                }
                GetaListofLearningPathsAssignedtoaUser_parameters.format = !!GetaListofLearningPathsAssignedtoaUser_parameters.format ? GetaListofLearningPathsAssignedtoaUser_parameters.format : msg.payload;
                
                GetaListofLearningPathsAssignedtoaUser_nodeParam = node.GetaListofLearningPathsAssignedtoaUser_contentType;
                GetaListofLearningPathsAssignedtoaUser_nodeParamType = node.GetaListofLearningPathsAssignedtoaUser_contentTypeType;
                if (GetaListofLearningPathsAssignedtoaUser_nodeParamType === 'str') {
                    GetaListofLearningPathsAssignedtoaUser_parameters.contentType = GetaListofLearningPathsAssignedtoaUser_nodeParam || '';
                } else {
                    GetaListofLearningPathsAssignedtoaUser_parameters.contentType = RED.util.getMessageProperty(msg, GetaListofLearningPathsAssignedtoaUser_nodeParam);
                }
                GetaListofLearningPathsAssignedtoaUser_parameters.contentType = !!GetaListofLearningPathsAssignedtoaUser_parameters.contentType ? GetaListofLearningPathsAssignedtoaUser_parameters.contentType : msg.payload;
                
                GetaListofLearningPathsAssignedtoaUser_nodeParam = node.GetaListofLearningPathsAssignedtoaUser_userId;
                GetaListofLearningPathsAssignedtoaUser_nodeParamType = node.GetaListofLearningPathsAssignedtoaUser_userIdType;
                if (GetaListofLearningPathsAssignedtoaUser_nodeParamType === 'str') {
                    GetaListofLearningPathsAssignedtoaUser_parameters.userId = GetaListofLearningPathsAssignedtoaUser_nodeParam || '';
                } else {
                    GetaListofLearningPathsAssignedtoaUser_parameters.userId = RED.util.getMessageProperty(msg, GetaListofLearningPathsAssignedtoaUser_nodeParam);
                }
                GetaListofLearningPathsAssignedtoaUser_parameters.userId = !!GetaListofLearningPathsAssignedtoaUser_parameters.userId ? GetaListofLearningPathsAssignedtoaUser_parameters.userId : msg.payload;
                                result = client.GetaListofLearningPathsAssignedtoaUser(GetaListofLearningPathsAssignedtoaUser_parameters);
            }
            if (!errorFlag && node.method === 'GetaSpecificLearningPath') {
                var GetaSpecificLearningPath_parameters = [];
                var GetaSpecificLearningPath_nodeParam;
                var GetaSpecificLearningPath_nodeParamType;

                GetaSpecificLearningPath_nodeParam = node.GetaSpecificLearningPath_source;
                GetaSpecificLearningPath_nodeParamType = node.GetaSpecificLearningPath_sourceType;
                if (GetaSpecificLearningPath_nodeParamType === 'str') {
                    GetaSpecificLearningPath_parameters.source = GetaSpecificLearningPath_nodeParam || '';
                } else {
                    GetaSpecificLearningPath_parameters.source = RED.util.getMessageProperty(msg, GetaSpecificLearningPath_nodeParam);
                }
                GetaSpecificLearningPath_parameters.source = !!GetaSpecificLearningPath_parameters.source ? GetaSpecificLearningPath_parameters.source : msg.payload;
                
                GetaSpecificLearningPath_nodeParam = node.GetaSpecificLearningPath_format;
                GetaSpecificLearningPath_nodeParamType = node.GetaSpecificLearningPath_formatType;
                if (GetaSpecificLearningPath_nodeParamType === 'str') {
                    GetaSpecificLearningPath_parameters.format = GetaSpecificLearningPath_nodeParam || '';
                } else {
                    GetaSpecificLearningPath_parameters.format = RED.util.getMessageProperty(msg, GetaSpecificLearningPath_nodeParam);
                }
                GetaSpecificLearningPath_parameters.format = !!GetaSpecificLearningPath_parameters.format ? GetaSpecificLearningPath_parameters.format : msg.payload;
                
                GetaSpecificLearningPath_nodeParam = node.GetaSpecificLearningPath_contentType;
                GetaSpecificLearningPath_nodeParamType = node.GetaSpecificLearningPath_contentTypeType;
                if (GetaSpecificLearningPath_nodeParamType === 'str') {
                    GetaSpecificLearningPath_parameters.contentType = GetaSpecificLearningPath_nodeParam || '';
                } else {
                    GetaSpecificLearningPath_parameters.contentType = RED.util.getMessageProperty(msg, GetaSpecificLearningPath_nodeParam);
                }
                GetaSpecificLearningPath_parameters.contentType = !!GetaSpecificLearningPath_parameters.contentType ? GetaSpecificLearningPath_parameters.contentType : msg.payload;
                
                GetaSpecificLearningPath_nodeParam = node.GetaSpecificLearningPath_lpId;
                GetaSpecificLearningPath_nodeParamType = node.GetaSpecificLearningPath_lpIdType;
                if (GetaSpecificLearningPath_nodeParamType === 'str') {
                    GetaSpecificLearningPath_parameters.lpId = GetaSpecificLearningPath_nodeParam || '';
                } else {
                    GetaSpecificLearningPath_parameters.lpId = RED.util.getMessageProperty(msg, GetaSpecificLearningPath_nodeParam);
                }
                GetaSpecificLearningPath_parameters.lpId = !!GetaSpecificLearningPath_parameters.lpId ? GetaSpecificLearningPath_parameters.lpId : msg.payload;
                                result = client.GetaSpecificLearningPath(GetaSpecificLearningPath_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofCoursesinaLearningPath') {
                var GetaListofCoursesinaLearningPath_parameters = [];
                var GetaListofCoursesinaLearningPath_nodeParam;
                var GetaListofCoursesinaLearningPath_nodeParamType;

                GetaListofCoursesinaLearningPath_nodeParam = node.GetaListofCoursesinaLearningPath_source;
                GetaListofCoursesinaLearningPath_nodeParamType = node.GetaListofCoursesinaLearningPath_sourceType;
                if (GetaListofCoursesinaLearningPath_nodeParamType === 'str') {
                    GetaListofCoursesinaLearningPath_parameters.source = GetaListofCoursesinaLearningPath_nodeParam || '';
                } else {
                    GetaListofCoursesinaLearningPath_parameters.source = RED.util.getMessageProperty(msg, GetaListofCoursesinaLearningPath_nodeParam);
                }
                GetaListofCoursesinaLearningPath_parameters.source = !!GetaListofCoursesinaLearningPath_parameters.source ? GetaListofCoursesinaLearningPath_parameters.source : msg.payload;
                
                GetaListofCoursesinaLearningPath_nodeParam = node.GetaListofCoursesinaLearningPath_format;
                GetaListofCoursesinaLearningPath_nodeParamType = node.GetaListofCoursesinaLearningPath_formatType;
                if (GetaListofCoursesinaLearningPath_nodeParamType === 'str') {
                    GetaListofCoursesinaLearningPath_parameters.format = GetaListofCoursesinaLearningPath_nodeParam || '';
                } else {
                    GetaListofCoursesinaLearningPath_parameters.format = RED.util.getMessageProperty(msg, GetaListofCoursesinaLearningPath_nodeParam);
                }
                GetaListofCoursesinaLearningPath_parameters.format = !!GetaListofCoursesinaLearningPath_parameters.format ? GetaListofCoursesinaLearningPath_parameters.format : msg.payload;
                
                GetaListofCoursesinaLearningPath_nodeParam = node.GetaListofCoursesinaLearningPath_contentType;
                GetaListofCoursesinaLearningPath_nodeParamType = node.GetaListofCoursesinaLearningPath_contentTypeType;
                if (GetaListofCoursesinaLearningPath_nodeParamType === 'str') {
                    GetaListofCoursesinaLearningPath_parameters.contentType = GetaListofCoursesinaLearningPath_nodeParam || '';
                } else {
                    GetaListofCoursesinaLearningPath_parameters.contentType = RED.util.getMessageProperty(msg, GetaListofCoursesinaLearningPath_nodeParam);
                }
                GetaListofCoursesinaLearningPath_parameters.contentType = !!GetaListofCoursesinaLearningPath_parameters.contentType ? GetaListofCoursesinaLearningPath_parameters.contentType : msg.payload;
                
                GetaListofCoursesinaLearningPath_nodeParam = node.GetaListofCoursesinaLearningPath_lpId;
                GetaListofCoursesinaLearningPath_nodeParamType = node.GetaListofCoursesinaLearningPath_lpIdType;
                if (GetaListofCoursesinaLearningPath_nodeParamType === 'str') {
                    GetaListofCoursesinaLearningPath_parameters.lpId = GetaListofCoursesinaLearningPath_nodeParam || '';
                } else {
                    GetaListofCoursesinaLearningPath_parameters.lpId = RED.util.getMessageProperty(msg, GetaListofCoursesinaLearningPath_nodeParam);
                }
                GetaListofCoursesinaLearningPath_parameters.lpId = !!GetaListofCoursesinaLearningPath_parameters.lpId ? GetaListofCoursesinaLearningPath_parameters.lpId : msg.payload;
                                result = client.GetaListofCoursesinaLearningPath(GetaListofCoursesinaLearningPath_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofUsersAssignedtoaLearningPath') {
                var GetaListofUsersAssignedtoaLearningPath_parameters = [];
                var GetaListofUsersAssignedtoaLearningPath_nodeParam;
                var GetaListofUsersAssignedtoaLearningPath_nodeParamType;

                GetaListofUsersAssignedtoaLearningPath_nodeParam = node.GetaListofUsersAssignedtoaLearningPath_source;
                GetaListofUsersAssignedtoaLearningPath_nodeParamType = node.GetaListofUsersAssignedtoaLearningPath_sourceType;
                if (GetaListofUsersAssignedtoaLearningPath_nodeParamType === 'str') {
                    GetaListofUsersAssignedtoaLearningPath_parameters.source = GetaListofUsersAssignedtoaLearningPath_nodeParam || '';
                } else {
                    GetaListofUsersAssignedtoaLearningPath_parameters.source = RED.util.getMessageProperty(msg, GetaListofUsersAssignedtoaLearningPath_nodeParam);
                }
                GetaListofUsersAssignedtoaLearningPath_parameters.source = !!GetaListofUsersAssignedtoaLearningPath_parameters.source ? GetaListofUsersAssignedtoaLearningPath_parameters.source : msg.payload;
                
                GetaListofUsersAssignedtoaLearningPath_nodeParam = node.GetaListofUsersAssignedtoaLearningPath_format;
                GetaListofUsersAssignedtoaLearningPath_nodeParamType = node.GetaListofUsersAssignedtoaLearningPath_formatType;
                if (GetaListofUsersAssignedtoaLearningPath_nodeParamType === 'str') {
                    GetaListofUsersAssignedtoaLearningPath_parameters.format = GetaListofUsersAssignedtoaLearningPath_nodeParam || '';
                } else {
                    GetaListofUsersAssignedtoaLearningPath_parameters.format = RED.util.getMessageProperty(msg, GetaListofUsersAssignedtoaLearningPath_nodeParam);
                }
                GetaListofUsersAssignedtoaLearningPath_parameters.format = !!GetaListofUsersAssignedtoaLearningPath_parameters.format ? GetaListofUsersAssignedtoaLearningPath_parameters.format : msg.payload;
                
                GetaListofUsersAssignedtoaLearningPath_nodeParam = node.GetaListofUsersAssignedtoaLearningPath_contentType;
                GetaListofUsersAssignedtoaLearningPath_nodeParamType = node.GetaListofUsersAssignedtoaLearningPath_contentTypeType;
                if (GetaListofUsersAssignedtoaLearningPath_nodeParamType === 'str') {
                    GetaListofUsersAssignedtoaLearningPath_parameters.contentType = GetaListofUsersAssignedtoaLearningPath_nodeParam || '';
                } else {
                    GetaListofUsersAssignedtoaLearningPath_parameters.contentType = RED.util.getMessageProperty(msg, GetaListofUsersAssignedtoaLearningPath_nodeParam);
                }
                GetaListofUsersAssignedtoaLearningPath_parameters.contentType = !!GetaListofUsersAssignedtoaLearningPath_parameters.contentType ? GetaListofUsersAssignedtoaLearningPath_parameters.contentType : msg.payload;
                
                GetaListofUsersAssignedtoaLearningPath_nodeParam = node.GetaListofUsersAssignedtoaLearningPath_lpId;
                GetaListofUsersAssignedtoaLearningPath_nodeParamType = node.GetaListofUsersAssignedtoaLearningPath_lpIdType;
                if (GetaListofUsersAssignedtoaLearningPath_nodeParamType === 'str') {
                    GetaListofUsersAssignedtoaLearningPath_parameters.lpId = GetaListofUsersAssignedtoaLearningPath_nodeParam || '';
                } else {
                    GetaListofUsersAssignedtoaLearningPath_parameters.lpId = RED.util.getMessageProperty(msg, GetaListofUsersAssignedtoaLearningPath_nodeParam);
                }
                GetaListofUsersAssignedtoaLearningPath_parameters.lpId = !!GetaListofUsersAssignedtoaLearningPath_parameters.lpId ? GetaListofUsersAssignedtoaLearningPath_parameters.lpId : msg.payload;
                                result = client.GetaListofUsersAssignedtoaLearningPath(GetaListofUsersAssignedtoaLearningPath_parameters);
            }
            if (!errorFlag && node.method === 'AssignLearningPathstoaTeam') {
                var AssignLearningPathstoaTeam_parameters = [];
                var AssignLearningPathstoaTeam_nodeParam;
                var AssignLearningPathstoaTeam_nodeParamType;

                AssignLearningPathstoaTeam_nodeParam = node.AssignLearningPathstoaTeam_source;
                AssignLearningPathstoaTeam_nodeParamType = node.AssignLearningPathstoaTeam_sourceType;
                if (AssignLearningPathstoaTeam_nodeParamType === 'str') {
                    AssignLearningPathstoaTeam_parameters.source = AssignLearningPathstoaTeam_nodeParam || '';
                } else {
                    AssignLearningPathstoaTeam_parameters.source = RED.util.getMessageProperty(msg, AssignLearningPathstoaTeam_nodeParam);
                }
                AssignLearningPathstoaTeam_parameters.source = !!AssignLearningPathstoaTeam_parameters.source ? AssignLearningPathstoaTeam_parameters.source : msg.payload;
                
                AssignLearningPathstoaTeam_nodeParam = node.AssignLearningPathstoaTeam_format;
                AssignLearningPathstoaTeam_nodeParamType = node.AssignLearningPathstoaTeam_formatType;
                if (AssignLearningPathstoaTeam_nodeParamType === 'str') {
                    AssignLearningPathstoaTeam_parameters.format = AssignLearningPathstoaTeam_nodeParam || '';
                } else {
                    AssignLearningPathstoaTeam_parameters.format = RED.util.getMessageProperty(msg, AssignLearningPathstoaTeam_nodeParam);
                }
                AssignLearningPathstoaTeam_parameters.format = !!AssignLearningPathstoaTeam_parameters.format ? AssignLearningPathstoaTeam_parameters.format : msg.payload;
                
                AssignLearningPathstoaTeam_nodeParam = node.AssignLearningPathstoaTeam_sendmessage;
                AssignLearningPathstoaTeam_nodeParamType = node.AssignLearningPathstoaTeam_sendmessageType;
                if (AssignLearningPathstoaTeam_nodeParamType === 'str') {
                    AssignLearningPathstoaTeam_parameters.sendmessage = AssignLearningPathstoaTeam_nodeParam || '';
                } else {
                    AssignLearningPathstoaTeam_parameters.sendmessage = RED.util.getMessageProperty(msg, AssignLearningPathstoaTeam_nodeParam);
                }
                AssignLearningPathstoaTeam_parameters.sendmessage = !!AssignLearningPathstoaTeam_parameters.sendmessage ? AssignLearningPathstoaTeam_parameters.sendmessage : msg.payload;
                
                AssignLearningPathstoaTeam_nodeParam = node.AssignLearningPathstoaTeam_contentType;
                AssignLearningPathstoaTeam_nodeParamType = node.AssignLearningPathstoaTeam_contentTypeType;
                if (AssignLearningPathstoaTeam_nodeParamType === 'str') {
                    AssignLearningPathstoaTeam_parameters.contentType = AssignLearningPathstoaTeam_nodeParam || '';
                } else {
                    AssignLearningPathstoaTeam_parameters.contentType = RED.util.getMessageProperty(msg, AssignLearningPathstoaTeam_nodeParam);
                }
                AssignLearningPathstoaTeam_parameters.contentType = !!AssignLearningPathstoaTeam_parameters.contentType ? AssignLearningPathstoaTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    AssignLearningPathstoaTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                AssignLearningPathstoaTeam_nodeParam = node.AssignLearningPathstoaTeam_lpTeamId;
                AssignLearningPathstoaTeam_nodeParamType = node.AssignLearningPathstoaTeam_lpTeamIdType;
                if (AssignLearningPathstoaTeam_nodeParamType === 'str') {
                    AssignLearningPathstoaTeam_parameters.lpTeamId = AssignLearningPathstoaTeam_nodeParam || '';
                } else {
                    AssignLearningPathstoaTeam_parameters.lpTeamId = RED.util.getMessageProperty(msg, AssignLearningPathstoaTeam_nodeParam);
                }
                AssignLearningPathstoaTeam_parameters.lpTeamId = !!AssignLearningPathstoaTeam_parameters.lpTeamId ? AssignLearningPathstoaTeam_parameters.lpTeamId : msg.payload;
                                result = client.AssignLearningPathstoaTeam(AssignLearningPathstoaTeam_parameters);
            }
            if (!errorFlag && node.method === 'GetLearningPathsAssignedtoaTeam') {
                var GetLearningPathsAssignedtoaTeam_parameters = [];
                var GetLearningPathsAssignedtoaTeam_nodeParam;
                var GetLearningPathsAssignedtoaTeam_nodeParamType;

                GetLearningPathsAssignedtoaTeam_nodeParam = node.GetLearningPathsAssignedtoaTeam_source;
                GetLearningPathsAssignedtoaTeam_nodeParamType = node.GetLearningPathsAssignedtoaTeam_sourceType;
                if (GetLearningPathsAssignedtoaTeam_nodeParamType === 'str') {
                    GetLearningPathsAssignedtoaTeam_parameters.source = GetLearningPathsAssignedtoaTeam_nodeParam || '';
                } else {
                    GetLearningPathsAssignedtoaTeam_parameters.source = RED.util.getMessageProperty(msg, GetLearningPathsAssignedtoaTeam_nodeParam);
                }
                GetLearningPathsAssignedtoaTeam_parameters.source = !!GetLearningPathsAssignedtoaTeam_parameters.source ? GetLearningPathsAssignedtoaTeam_parameters.source : msg.payload;
                
                GetLearningPathsAssignedtoaTeam_nodeParam = node.GetLearningPathsAssignedtoaTeam_format;
                GetLearningPathsAssignedtoaTeam_nodeParamType = node.GetLearningPathsAssignedtoaTeam_formatType;
                if (GetLearningPathsAssignedtoaTeam_nodeParamType === 'str') {
                    GetLearningPathsAssignedtoaTeam_parameters.format = GetLearningPathsAssignedtoaTeam_nodeParam || '';
                } else {
                    GetLearningPathsAssignedtoaTeam_parameters.format = RED.util.getMessageProperty(msg, GetLearningPathsAssignedtoaTeam_nodeParam);
                }
                GetLearningPathsAssignedtoaTeam_parameters.format = !!GetLearningPathsAssignedtoaTeam_parameters.format ? GetLearningPathsAssignedtoaTeam_parameters.format : msg.payload;
                
                GetLearningPathsAssignedtoaTeam_nodeParam = node.GetLearningPathsAssignedtoaTeam_contentType;
                GetLearningPathsAssignedtoaTeam_nodeParamType = node.GetLearningPathsAssignedtoaTeam_contentTypeType;
                if (GetLearningPathsAssignedtoaTeam_nodeParamType === 'str') {
                    GetLearningPathsAssignedtoaTeam_parameters.contentType = GetLearningPathsAssignedtoaTeam_nodeParam || '';
                } else {
                    GetLearningPathsAssignedtoaTeam_parameters.contentType = RED.util.getMessageProperty(msg, GetLearningPathsAssignedtoaTeam_nodeParam);
                }
                GetLearningPathsAssignedtoaTeam_parameters.contentType = !!GetLearningPathsAssignedtoaTeam_parameters.contentType ? GetLearningPathsAssignedtoaTeam_parameters.contentType : msg.payload;
                
                GetLearningPathsAssignedtoaTeam_nodeParam = node.GetLearningPathsAssignedtoaTeam_teamId;
                GetLearningPathsAssignedtoaTeam_nodeParamType = node.GetLearningPathsAssignedtoaTeam_teamIdType;
                if (GetLearningPathsAssignedtoaTeam_nodeParamType === 'str') {
                    GetLearningPathsAssignedtoaTeam_parameters.teamId = GetLearningPathsAssignedtoaTeam_nodeParam || '';
                } else {
                    GetLearningPathsAssignedtoaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetLearningPathsAssignedtoaTeam_nodeParam);
                }
                GetLearningPathsAssignedtoaTeam_parameters.teamId = !!GetLearningPathsAssignedtoaTeam_parameters.teamId ? GetLearningPathsAssignedtoaTeam_parameters.teamId : msg.payload;
                                result = client.GetLearningPathsAssignedtoaTeam(GetLearningPathsAssignedtoaTeam_parameters);
            }
            if (!errorFlag && node.method === 'UnAssignUsersfromaLearningPath') {
                var UnAssignUsersfromaLearningPath_parameters = [];
                var UnAssignUsersfromaLearningPath_nodeParam;
                var UnAssignUsersfromaLearningPath_nodeParamType;

                UnAssignUsersfromaLearningPath_nodeParam = node.UnAssignUsersfromaLearningPath_source;
                UnAssignUsersfromaLearningPath_nodeParamType = node.UnAssignUsersfromaLearningPath_sourceType;
                if (UnAssignUsersfromaLearningPath_nodeParamType === 'str') {
                    UnAssignUsersfromaLearningPath_parameters.source = UnAssignUsersfromaLearningPath_nodeParam || '';
                } else {
                    UnAssignUsersfromaLearningPath_parameters.source = RED.util.getMessageProperty(msg, UnAssignUsersfromaLearningPath_nodeParam);
                }
                UnAssignUsersfromaLearningPath_parameters.source = !!UnAssignUsersfromaLearningPath_parameters.source ? UnAssignUsersfromaLearningPath_parameters.source : msg.payload;
                
                UnAssignUsersfromaLearningPath_nodeParam = node.UnAssignUsersfromaLearningPath_format;
                UnAssignUsersfromaLearningPath_nodeParamType = node.UnAssignUsersfromaLearningPath_formatType;
                if (UnAssignUsersfromaLearningPath_nodeParamType === 'str') {
                    UnAssignUsersfromaLearningPath_parameters.format = UnAssignUsersfromaLearningPath_nodeParam || '';
                } else {
                    UnAssignUsersfromaLearningPath_parameters.format = RED.util.getMessageProperty(msg, UnAssignUsersfromaLearningPath_nodeParam);
                }
                UnAssignUsersfromaLearningPath_parameters.format = !!UnAssignUsersfromaLearningPath_parameters.format ? UnAssignUsersfromaLearningPath_parameters.format : msg.payload;
                
                UnAssignUsersfromaLearningPath_nodeParam = node.UnAssignUsersfromaLearningPath_contentType;
                UnAssignUsersfromaLearningPath_nodeParamType = node.UnAssignUsersfromaLearningPath_contentTypeType;
                if (UnAssignUsersfromaLearningPath_nodeParamType === 'str') {
                    UnAssignUsersfromaLearningPath_parameters.contentType = UnAssignUsersfromaLearningPath_nodeParam || '';
                } else {
                    UnAssignUsersfromaLearningPath_parameters.contentType = RED.util.getMessageProperty(msg, UnAssignUsersfromaLearningPath_nodeParam);
                }
                UnAssignUsersfromaLearningPath_parameters.contentType = !!UnAssignUsersfromaLearningPath_parameters.contentType ? UnAssignUsersfromaLearningPath_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UnAssignUsersfromaLearningPath_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UnAssignUsersfromaLearningPath_nodeParam = node.UnAssignUsersfromaLearningPath_userId;
                UnAssignUsersfromaLearningPath_nodeParamType = node.UnAssignUsersfromaLearningPath_userIdType;
                if (UnAssignUsersfromaLearningPath_nodeParamType === 'str') {
                    UnAssignUsersfromaLearningPath_parameters.userId = UnAssignUsersfromaLearningPath_nodeParam || '';
                } else {
                    UnAssignUsersfromaLearningPath_parameters.userId = RED.util.getMessageProperty(msg, UnAssignUsersfromaLearningPath_nodeParam);
                }
                UnAssignUsersfromaLearningPath_parameters.userId = !!UnAssignUsersfromaLearningPath_parameters.userId ? UnAssignUsersfromaLearningPath_parameters.userId : msg.payload;
                
                UnAssignUsersfromaLearningPath_nodeParam = node.UnAssignUsersfromaLearningPath_lpId;
                UnAssignUsersfromaLearningPath_nodeParamType = node.UnAssignUsersfromaLearningPath_lpIdType;
                if (UnAssignUsersfromaLearningPath_nodeParamType === 'str') {
                    UnAssignUsersfromaLearningPath_parameters.lpId = UnAssignUsersfromaLearningPath_nodeParam || '';
                } else {
                    UnAssignUsersfromaLearningPath_parameters.lpId = RED.util.getMessageProperty(msg, UnAssignUsersfromaLearningPath_nodeParam);
                }
                UnAssignUsersfromaLearningPath_parameters.lpId = !!UnAssignUsersfromaLearningPath_parameters.lpId ? UnAssignUsersfromaLearningPath_parameters.lpId : msg.payload;
                                result = client.UnAssignUsersfromaLearningPath(UnAssignUsersfromaLearningPath_parameters);
            }
            if (!errorFlag && node.method === 'AssignaListofCoursestoaTeam') {
                var AssignaListofCoursestoaTeam_parameters = [];
                var AssignaListofCoursestoaTeam_nodeParam;
                var AssignaListofCoursestoaTeam_nodeParamType;

                AssignaListofCoursestoaTeam_nodeParam = node.AssignaListofCoursestoaTeam_source;
                AssignaListofCoursestoaTeam_nodeParamType = node.AssignaListofCoursestoaTeam_sourceType;
                if (AssignaListofCoursestoaTeam_nodeParamType === 'str') {
                    AssignaListofCoursestoaTeam_parameters.source = AssignaListofCoursestoaTeam_nodeParam || '';
                } else {
                    AssignaListofCoursestoaTeam_parameters.source = RED.util.getMessageProperty(msg, AssignaListofCoursestoaTeam_nodeParam);
                }
                AssignaListofCoursestoaTeam_parameters.source = !!AssignaListofCoursestoaTeam_parameters.source ? AssignaListofCoursestoaTeam_parameters.source : msg.payload;
                
                AssignaListofCoursestoaTeam_nodeParam = node.AssignaListofCoursestoaTeam_sendmessage;
                AssignaListofCoursestoaTeam_nodeParamType = node.AssignaListofCoursestoaTeam_sendmessageType;
                if (AssignaListofCoursestoaTeam_nodeParamType === 'str') {
                    AssignaListofCoursestoaTeam_parameters.sendmessage = AssignaListofCoursestoaTeam_nodeParam || '';
                } else {
                    AssignaListofCoursestoaTeam_parameters.sendmessage = RED.util.getMessageProperty(msg, AssignaListofCoursestoaTeam_nodeParam);
                }
                AssignaListofCoursestoaTeam_parameters.sendmessage = !!AssignaListofCoursestoaTeam_parameters.sendmessage ? AssignaListofCoursestoaTeam_parameters.sendmessage : msg.payload;
                
                AssignaListofCoursestoaTeam_nodeParam = node.AssignaListofCoursestoaTeam_contentType;
                AssignaListofCoursestoaTeam_nodeParamType = node.AssignaListofCoursestoaTeam_contentTypeType;
                if (AssignaListofCoursestoaTeam_nodeParamType === 'str') {
                    AssignaListofCoursestoaTeam_parameters.contentType = AssignaListofCoursestoaTeam_nodeParam || '';
                } else {
                    AssignaListofCoursestoaTeam_parameters.contentType = RED.util.getMessageProperty(msg, AssignaListofCoursestoaTeam_nodeParam);
                }
                AssignaListofCoursestoaTeam_parameters.contentType = !!AssignaListofCoursestoaTeam_parameters.contentType ? AssignaListofCoursestoaTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    AssignaListofCoursestoaTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                AssignaListofCoursestoaTeam_nodeParam = node.AssignaListofCoursestoaTeam_teamId;
                AssignaListofCoursestoaTeam_nodeParamType = node.AssignaListofCoursestoaTeam_teamIdType;
                if (AssignaListofCoursestoaTeam_nodeParamType === 'str') {
                    AssignaListofCoursestoaTeam_parameters.teamId = AssignaListofCoursestoaTeam_nodeParam || '';
                } else {
                    AssignaListofCoursestoaTeam_parameters.teamId = RED.util.getMessageProperty(msg, AssignaListofCoursestoaTeam_nodeParam);
                }
                AssignaListofCoursestoaTeam_parameters.teamId = !!AssignaListofCoursestoaTeam_parameters.teamId ? AssignaListofCoursestoaTeam_parameters.teamId : msg.payload;
                                result = client.AssignaListofCoursestoaTeam(AssignaListofCoursestoaTeam_parameters);
            }
            if (!errorFlag && node.method === 'UnAssignaListofCoursesfromaTeam') {
                var UnAssignaListofCoursesfromaTeam_parameters = [];
                var UnAssignaListofCoursesfromaTeam_nodeParam;
                var UnAssignaListofCoursesfromaTeam_nodeParamType;

                UnAssignaListofCoursesfromaTeam_nodeParam = node.UnAssignaListofCoursesfromaTeam_source;
                UnAssignaListofCoursesfromaTeam_nodeParamType = node.UnAssignaListofCoursesfromaTeam_sourceType;
                if (UnAssignaListofCoursesfromaTeam_nodeParamType === 'str') {
                    UnAssignaListofCoursesfromaTeam_parameters.source = UnAssignaListofCoursesfromaTeam_nodeParam || '';
                } else {
                    UnAssignaListofCoursesfromaTeam_parameters.source = RED.util.getMessageProperty(msg, UnAssignaListofCoursesfromaTeam_nodeParam);
                }
                UnAssignaListofCoursesfromaTeam_parameters.source = !!UnAssignaListofCoursesfromaTeam_parameters.source ? UnAssignaListofCoursesfromaTeam_parameters.source : msg.payload;
                
                UnAssignaListofCoursesfromaTeam_nodeParam = node.UnAssignaListofCoursesfromaTeam_contentType;
                UnAssignaListofCoursesfromaTeam_nodeParamType = node.UnAssignaListofCoursesfromaTeam_contentTypeType;
                if (UnAssignaListofCoursesfromaTeam_nodeParamType === 'str') {
                    UnAssignaListofCoursesfromaTeam_parameters.contentType = UnAssignaListofCoursesfromaTeam_nodeParam || '';
                } else {
                    UnAssignaListofCoursesfromaTeam_parameters.contentType = RED.util.getMessageProperty(msg, UnAssignaListofCoursesfromaTeam_nodeParam);
                }
                UnAssignaListofCoursesfromaTeam_parameters.contentType = !!UnAssignaListofCoursesfromaTeam_parameters.contentType ? UnAssignaListofCoursesfromaTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UnAssignaListofCoursesfromaTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UnAssignaListofCoursesfromaTeam_nodeParam = node.UnAssignaListofCoursesfromaTeam_teamId;
                UnAssignaListofCoursesfromaTeam_nodeParamType = node.UnAssignaListofCoursesfromaTeam_teamIdType;
                if (UnAssignaListofCoursesfromaTeam_nodeParamType === 'str') {
                    UnAssignaListofCoursesfromaTeam_parameters.teamId = UnAssignaListofCoursesfromaTeam_nodeParam || '';
                } else {
                    UnAssignaListofCoursesfromaTeam_parameters.teamId = RED.util.getMessageProperty(msg, UnAssignaListofCoursesfromaTeam_nodeParam);
                }
                UnAssignaListofCoursesfromaTeam_parameters.teamId = !!UnAssignaListofCoursesfromaTeam_parameters.teamId ? UnAssignaListofCoursesfromaTeam_parameters.teamId : msg.payload;
                                result = client.UnAssignaListofCoursesfromaTeam(UnAssignaListofCoursesfromaTeam_parameters);
            }
            if (!errorFlag && node.method === 'PromoteaUsertoTeamLeaderforaTeam') {
                var PromoteaUsertoTeamLeaderforaTeam_parameters = [];
                var PromoteaUsertoTeamLeaderforaTeam_nodeParam;
                var PromoteaUsertoTeamLeaderforaTeam_nodeParamType;

                PromoteaUsertoTeamLeaderforaTeam_nodeParam = node.PromoteaUsertoTeamLeaderforaTeam_source;
                PromoteaUsertoTeamLeaderforaTeam_nodeParamType = node.PromoteaUsertoTeamLeaderforaTeam_sourceType;
                if (PromoteaUsertoTeamLeaderforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.source = PromoteaUsertoTeamLeaderforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.source = RED.util.getMessageProperty(msg, PromoteaUsertoTeamLeaderforaTeam_nodeParam);
                }
                PromoteaUsertoTeamLeaderforaTeam_parameters.source = !!PromoteaUsertoTeamLeaderforaTeam_parameters.source ? PromoteaUsertoTeamLeaderforaTeam_parameters.source : msg.payload;
                
                PromoteaUsertoTeamLeaderforaTeam_nodeParam = node.PromoteaUsertoTeamLeaderforaTeam_contentType;
                PromoteaUsertoTeamLeaderforaTeam_nodeParamType = node.PromoteaUsertoTeamLeaderforaTeam_contentTypeType;
                if (PromoteaUsertoTeamLeaderforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.contentType = PromoteaUsertoTeamLeaderforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.contentType = RED.util.getMessageProperty(msg, PromoteaUsertoTeamLeaderforaTeam_nodeParam);
                }
                PromoteaUsertoTeamLeaderforaTeam_parameters.contentType = !!PromoteaUsertoTeamLeaderforaTeam_parameters.contentType ? PromoteaUsertoTeamLeaderforaTeam_parameters.contentType : msg.payload;
                
                PromoteaUsertoTeamLeaderforaTeam_nodeParam = node.PromoteaUsertoTeamLeaderforaTeam_teamId;
                PromoteaUsertoTeamLeaderforaTeam_nodeParamType = node.PromoteaUsertoTeamLeaderforaTeam_teamIdType;
                if (PromoteaUsertoTeamLeaderforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.teamId = PromoteaUsertoTeamLeaderforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.teamId = RED.util.getMessageProperty(msg, PromoteaUsertoTeamLeaderforaTeam_nodeParam);
                }
                PromoteaUsertoTeamLeaderforaTeam_parameters.teamId = !!PromoteaUsertoTeamLeaderforaTeam_parameters.teamId ? PromoteaUsertoTeamLeaderforaTeam_parameters.teamId : msg.payload;
                
                PromoteaUsertoTeamLeaderforaTeam_nodeParam = node.PromoteaUsertoTeamLeaderforaTeam_userId;
                PromoteaUsertoTeamLeaderforaTeam_nodeParamType = node.PromoteaUsertoTeamLeaderforaTeam_userIdType;
                if (PromoteaUsertoTeamLeaderforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.userId = PromoteaUsertoTeamLeaderforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamLeaderforaTeam_parameters.userId = RED.util.getMessageProperty(msg, PromoteaUsertoTeamLeaderforaTeam_nodeParam);
                }
                PromoteaUsertoTeamLeaderforaTeam_parameters.userId = !!PromoteaUsertoTeamLeaderforaTeam_parameters.userId ? PromoteaUsertoTeamLeaderforaTeam_parameters.userId : msg.payload;
                                result = client.PromoteaUsertoTeamLeaderforaTeam(PromoteaUsertoTeamLeaderforaTeam_parameters);
            }
            if (!errorFlag && node.method === 'DemoteaTeamLeaderonaTeam') {
                var DemoteaTeamLeaderonaTeam_parameters = [];
                var DemoteaTeamLeaderonaTeam_nodeParam;
                var DemoteaTeamLeaderonaTeam_nodeParamType;

                DemoteaTeamLeaderonaTeam_nodeParam = node.DemoteaTeamLeaderonaTeam_source;
                DemoteaTeamLeaderonaTeam_nodeParamType = node.DemoteaTeamLeaderonaTeam_sourceType;
                if (DemoteaTeamLeaderonaTeam_nodeParamType === 'str') {
                    DemoteaTeamLeaderonaTeam_parameters.source = DemoteaTeamLeaderonaTeam_nodeParam || '';
                } else {
                    DemoteaTeamLeaderonaTeam_parameters.source = RED.util.getMessageProperty(msg, DemoteaTeamLeaderonaTeam_nodeParam);
                }
                DemoteaTeamLeaderonaTeam_parameters.source = !!DemoteaTeamLeaderonaTeam_parameters.source ? DemoteaTeamLeaderonaTeam_parameters.source : msg.payload;
                
                DemoteaTeamLeaderonaTeam_nodeParam = node.DemoteaTeamLeaderonaTeam_contentType;
                DemoteaTeamLeaderonaTeam_nodeParamType = node.DemoteaTeamLeaderonaTeam_contentTypeType;
                if (DemoteaTeamLeaderonaTeam_nodeParamType === 'str') {
                    DemoteaTeamLeaderonaTeam_parameters.contentType = DemoteaTeamLeaderonaTeam_nodeParam || '';
                } else {
                    DemoteaTeamLeaderonaTeam_parameters.contentType = RED.util.getMessageProperty(msg, DemoteaTeamLeaderonaTeam_nodeParam);
                }
                DemoteaTeamLeaderonaTeam_parameters.contentType = !!DemoteaTeamLeaderonaTeam_parameters.contentType ? DemoteaTeamLeaderonaTeam_parameters.contentType : msg.payload;
                
                DemoteaTeamLeaderonaTeam_nodeParam = node.DemoteaTeamLeaderonaTeam_teamId;
                DemoteaTeamLeaderonaTeam_nodeParamType = node.DemoteaTeamLeaderonaTeam_teamIdType;
                if (DemoteaTeamLeaderonaTeam_nodeParamType === 'str') {
                    DemoteaTeamLeaderonaTeam_parameters.teamId = DemoteaTeamLeaderonaTeam_nodeParam || '';
                } else {
                    DemoteaTeamLeaderonaTeam_parameters.teamId = RED.util.getMessageProperty(msg, DemoteaTeamLeaderonaTeam_nodeParam);
                }
                DemoteaTeamLeaderonaTeam_parameters.teamId = !!DemoteaTeamLeaderonaTeam_parameters.teamId ? DemoteaTeamLeaderonaTeam_parameters.teamId : msg.payload;
                
                DemoteaTeamLeaderonaTeam_nodeParam = node.DemoteaTeamLeaderonaTeam_userId;
                DemoteaTeamLeaderonaTeam_nodeParamType = node.DemoteaTeamLeaderonaTeam_userIdType;
                if (DemoteaTeamLeaderonaTeam_nodeParamType === 'str') {
                    DemoteaTeamLeaderonaTeam_parameters.userId = DemoteaTeamLeaderonaTeam_nodeParam || '';
                } else {
                    DemoteaTeamLeaderonaTeam_parameters.userId = RED.util.getMessageProperty(msg, DemoteaTeamLeaderonaTeam_nodeParam);
                }
                DemoteaTeamLeaderonaTeam_parameters.userId = !!DemoteaTeamLeaderonaTeam_parameters.userId ? DemoteaTeamLeaderonaTeam_parameters.userId : msg.payload;
                                result = client.DemoteaTeamLeaderonaTeam(DemoteaTeamLeaderonaTeam_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamLeadersforaTeam') {
                var GetTeamLeadersforaTeam_parameters = [];
                var GetTeamLeadersforaTeam_nodeParam;
                var GetTeamLeadersforaTeam_nodeParamType;

                GetTeamLeadersforaTeam_nodeParam = node.GetTeamLeadersforaTeam_source;
                GetTeamLeadersforaTeam_nodeParamType = node.GetTeamLeadersforaTeam_sourceType;
                if (GetTeamLeadersforaTeam_nodeParamType === 'str') {
                    GetTeamLeadersforaTeam_parameters.source = GetTeamLeadersforaTeam_nodeParam || '';
                } else {
                    GetTeamLeadersforaTeam_parameters.source = RED.util.getMessageProperty(msg, GetTeamLeadersforaTeam_nodeParam);
                }
                GetTeamLeadersforaTeam_parameters.source = !!GetTeamLeadersforaTeam_parameters.source ? GetTeamLeadersforaTeam_parameters.source : msg.payload;
                
                GetTeamLeadersforaTeam_nodeParam = node.GetTeamLeadersforaTeam_format;
                GetTeamLeadersforaTeam_nodeParamType = node.GetTeamLeadersforaTeam_formatType;
                if (GetTeamLeadersforaTeam_nodeParamType === 'str') {
                    GetTeamLeadersforaTeam_parameters.format = GetTeamLeadersforaTeam_nodeParam || '';
                } else {
                    GetTeamLeadersforaTeam_parameters.format = RED.util.getMessageProperty(msg, GetTeamLeadersforaTeam_nodeParam);
                }
                GetTeamLeadersforaTeam_parameters.format = !!GetTeamLeadersforaTeam_parameters.format ? GetTeamLeadersforaTeam_parameters.format : msg.payload;
                
                GetTeamLeadersforaTeam_nodeParam = node.GetTeamLeadersforaTeam_apikey;
                GetTeamLeadersforaTeam_nodeParamType = node.GetTeamLeadersforaTeam_apikeyType;
                if (GetTeamLeadersforaTeam_nodeParamType === 'str') {
                    GetTeamLeadersforaTeam_parameters.apikey = GetTeamLeadersforaTeam_nodeParam || '';
                } else {
                    GetTeamLeadersforaTeam_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamLeadersforaTeam_nodeParam);
                }
                GetTeamLeadersforaTeam_parameters.apikey = !!GetTeamLeadersforaTeam_parameters.apikey ? GetTeamLeadersforaTeam_parameters.apikey : msg.payload;
                
                GetTeamLeadersforaTeam_nodeParam = node.GetTeamLeadersforaTeam_teamId;
                GetTeamLeadersforaTeam_nodeParamType = node.GetTeamLeadersforaTeam_teamIdType;
                if (GetTeamLeadersforaTeam_nodeParamType === 'str') {
                    GetTeamLeadersforaTeam_parameters.teamId = GetTeamLeadersforaTeam_nodeParam || '';
                } else {
                    GetTeamLeadersforaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetTeamLeadersforaTeam_nodeParam);
                }
                GetTeamLeadersforaTeam_parameters.teamId = !!GetTeamLeadersforaTeam_parameters.teamId ? GetTeamLeadersforaTeam_parameters.teamId : msg.payload;
                                result = client.GetTeamLeadersforaTeam(GetTeamLeadersforaTeam_parameters);
            }
            if (!errorFlag && node.method === 'PromoteaUsertoTeamAdminforaTeam') {
                var PromoteaUsertoTeamAdminforaTeam_parameters = [];
                var PromoteaUsertoTeamAdminforaTeam_nodeParam;
                var PromoteaUsertoTeamAdminforaTeam_nodeParamType;

                PromoteaUsertoTeamAdminforaTeam_nodeParam = node.PromoteaUsertoTeamAdminforaTeam_source;
                PromoteaUsertoTeamAdminforaTeam_nodeParamType = node.PromoteaUsertoTeamAdminforaTeam_sourceType;
                if (PromoteaUsertoTeamAdminforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamAdminforaTeam_parameters.source = PromoteaUsertoTeamAdminforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamAdminforaTeam_parameters.source = RED.util.getMessageProperty(msg, PromoteaUsertoTeamAdminforaTeam_nodeParam);
                }
                PromoteaUsertoTeamAdminforaTeam_parameters.source = !!PromoteaUsertoTeamAdminforaTeam_parameters.source ? PromoteaUsertoTeamAdminforaTeam_parameters.source : msg.payload;
                
                PromoteaUsertoTeamAdminforaTeam_nodeParam = node.PromoteaUsertoTeamAdminforaTeam_contentType;
                PromoteaUsertoTeamAdminforaTeam_nodeParamType = node.PromoteaUsertoTeamAdminforaTeam_contentTypeType;
                if (PromoteaUsertoTeamAdminforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamAdminforaTeam_parameters.contentType = PromoteaUsertoTeamAdminforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamAdminforaTeam_parameters.contentType = RED.util.getMessageProperty(msg, PromoteaUsertoTeamAdminforaTeam_nodeParam);
                }
                PromoteaUsertoTeamAdminforaTeam_parameters.contentType = !!PromoteaUsertoTeamAdminforaTeam_parameters.contentType ? PromoteaUsertoTeamAdminforaTeam_parameters.contentType : msg.payload;
                
                PromoteaUsertoTeamAdminforaTeam_nodeParam = node.PromoteaUsertoTeamAdminforaTeam_teamId;
                PromoteaUsertoTeamAdminforaTeam_nodeParamType = node.PromoteaUsertoTeamAdminforaTeam_teamIdType;
                if (PromoteaUsertoTeamAdminforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamAdminforaTeam_parameters.teamId = PromoteaUsertoTeamAdminforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamAdminforaTeam_parameters.teamId = RED.util.getMessageProperty(msg, PromoteaUsertoTeamAdminforaTeam_nodeParam);
                }
                PromoteaUsertoTeamAdminforaTeam_parameters.teamId = !!PromoteaUsertoTeamAdminforaTeam_parameters.teamId ? PromoteaUsertoTeamAdminforaTeam_parameters.teamId : msg.payload;
                
                PromoteaUsertoTeamAdminforaTeam_nodeParam = node.PromoteaUsertoTeamAdminforaTeam_userId;
                PromoteaUsertoTeamAdminforaTeam_nodeParamType = node.PromoteaUsertoTeamAdminforaTeam_userIdType;
                if (PromoteaUsertoTeamAdminforaTeam_nodeParamType === 'str') {
                    PromoteaUsertoTeamAdminforaTeam_parameters.userId = PromoteaUsertoTeamAdminforaTeam_nodeParam || '';
                } else {
                    PromoteaUsertoTeamAdminforaTeam_parameters.userId = RED.util.getMessageProperty(msg, PromoteaUsertoTeamAdminforaTeam_nodeParam);
                }
                PromoteaUsertoTeamAdminforaTeam_parameters.userId = !!PromoteaUsertoTeamAdminforaTeam_parameters.userId ? PromoteaUsertoTeamAdminforaTeam_parameters.userId : msg.payload;
                                result = client.PromoteaUsertoTeamAdminforaTeam(PromoteaUsertoTeamAdminforaTeam_parameters);
            }
            if (!errorFlag && node.method === 'DemoteaTeamAdministratoronaTeam') {
                var DemoteaTeamAdministratoronaTeam_parameters = [];
                var DemoteaTeamAdministratoronaTeam_nodeParam;
                var DemoteaTeamAdministratoronaTeam_nodeParamType;

                DemoteaTeamAdministratoronaTeam_nodeParam = node.DemoteaTeamAdministratoronaTeam_source;
                DemoteaTeamAdministratoronaTeam_nodeParamType = node.DemoteaTeamAdministratoronaTeam_sourceType;
                if (DemoteaTeamAdministratoronaTeam_nodeParamType === 'str') {
                    DemoteaTeamAdministratoronaTeam_parameters.source = DemoteaTeamAdministratoronaTeam_nodeParam || '';
                } else {
                    DemoteaTeamAdministratoronaTeam_parameters.source = RED.util.getMessageProperty(msg, DemoteaTeamAdministratoronaTeam_nodeParam);
                }
                DemoteaTeamAdministratoronaTeam_parameters.source = !!DemoteaTeamAdministratoronaTeam_parameters.source ? DemoteaTeamAdministratoronaTeam_parameters.source : msg.payload;
                
                DemoteaTeamAdministratoronaTeam_nodeParam = node.DemoteaTeamAdministratoronaTeam_contentType;
                DemoteaTeamAdministratoronaTeam_nodeParamType = node.DemoteaTeamAdministratoronaTeam_contentTypeType;
                if (DemoteaTeamAdministratoronaTeam_nodeParamType === 'str') {
                    DemoteaTeamAdministratoronaTeam_parameters.contentType = DemoteaTeamAdministratoronaTeam_nodeParam || '';
                } else {
                    DemoteaTeamAdministratoronaTeam_parameters.contentType = RED.util.getMessageProperty(msg, DemoteaTeamAdministratoronaTeam_nodeParam);
                }
                DemoteaTeamAdministratoronaTeam_parameters.contentType = !!DemoteaTeamAdministratoronaTeam_parameters.contentType ? DemoteaTeamAdministratoronaTeam_parameters.contentType : msg.payload;
                
                DemoteaTeamAdministratoronaTeam_nodeParam = node.DemoteaTeamAdministratoronaTeam_teamId;
                DemoteaTeamAdministratoronaTeam_nodeParamType = node.DemoteaTeamAdministratoronaTeam_teamIdType;
                if (DemoteaTeamAdministratoronaTeam_nodeParamType === 'str') {
                    DemoteaTeamAdministratoronaTeam_parameters.teamId = DemoteaTeamAdministratoronaTeam_nodeParam || '';
                } else {
                    DemoteaTeamAdministratoronaTeam_parameters.teamId = RED.util.getMessageProperty(msg, DemoteaTeamAdministratoronaTeam_nodeParam);
                }
                DemoteaTeamAdministratoronaTeam_parameters.teamId = !!DemoteaTeamAdministratoronaTeam_parameters.teamId ? DemoteaTeamAdministratoronaTeam_parameters.teamId : msg.payload;
                
                DemoteaTeamAdministratoronaTeam_nodeParam = node.DemoteaTeamAdministratoronaTeam_userId;
                DemoteaTeamAdministratoronaTeam_nodeParamType = node.DemoteaTeamAdministratoronaTeam_userIdType;
                if (DemoteaTeamAdministratoronaTeam_nodeParamType === 'str') {
                    DemoteaTeamAdministratoronaTeam_parameters.userId = DemoteaTeamAdministratoronaTeam_nodeParam || '';
                } else {
                    DemoteaTeamAdministratoronaTeam_parameters.userId = RED.util.getMessageProperty(msg, DemoteaTeamAdministratoronaTeam_nodeParam);
                }
                DemoteaTeamAdministratoronaTeam_parameters.userId = !!DemoteaTeamAdministratoronaTeam_parameters.userId ? DemoteaTeamAdministratoronaTeam_parameters.userId : msg.payload;
                                result = client.DemoteaTeamAdministratoronaTeam(DemoteaTeamAdministratoronaTeam_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamAdministratorsforaTeam') {
                var GetTeamAdministratorsforaTeam_parameters = [];
                var GetTeamAdministratorsforaTeam_nodeParam;
                var GetTeamAdministratorsforaTeam_nodeParamType;

                GetTeamAdministratorsforaTeam_nodeParam = node.GetTeamAdministratorsforaTeam_source;
                GetTeamAdministratorsforaTeam_nodeParamType = node.GetTeamAdministratorsforaTeam_sourceType;
                if (GetTeamAdministratorsforaTeam_nodeParamType === 'str') {
                    GetTeamAdministratorsforaTeam_parameters.source = GetTeamAdministratorsforaTeam_nodeParam || '';
                } else {
                    GetTeamAdministratorsforaTeam_parameters.source = RED.util.getMessageProperty(msg, GetTeamAdministratorsforaTeam_nodeParam);
                }
                GetTeamAdministratorsforaTeam_parameters.source = !!GetTeamAdministratorsforaTeam_parameters.source ? GetTeamAdministratorsforaTeam_parameters.source : msg.payload;
                
                GetTeamAdministratorsforaTeam_nodeParam = node.GetTeamAdministratorsforaTeam_format;
                GetTeamAdministratorsforaTeam_nodeParamType = node.GetTeamAdministratorsforaTeam_formatType;
                if (GetTeamAdministratorsforaTeam_nodeParamType === 'str') {
                    GetTeamAdministratorsforaTeam_parameters.format = GetTeamAdministratorsforaTeam_nodeParam || '';
                } else {
                    GetTeamAdministratorsforaTeam_parameters.format = RED.util.getMessageProperty(msg, GetTeamAdministratorsforaTeam_nodeParam);
                }
                GetTeamAdministratorsforaTeam_parameters.format = !!GetTeamAdministratorsforaTeam_parameters.format ? GetTeamAdministratorsforaTeam_parameters.format : msg.payload;
                
                GetTeamAdministratorsforaTeam_nodeParam = node.GetTeamAdministratorsforaTeam_apikey;
                GetTeamAdministratorsforaTeam_nodeParamType = node.GetTeamAdministratorsforaTeam_apikeyType;
                if (GetTeamAdministratorsforaTeam_nodeParamType === 'str') {
                    GetTeamAdministratorsforaTeam_parameters.apikey = GetTeamAdministratorsforaTeam_nodeParam || '';
                } else {
                    GetTeamAdministratorsforaTeam_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamAdministratorsforaTeam_nodeParam);
                }
                GetTeamAdministratorsforaTeam_parameters.apikey = !!GetTeamAdministratorsforaTeam_parameters.apikey ? GetTeamAdministratorsforaTeam_parameters.apikey : msg.payload;
                
                GetTeamAdministratorsforaTeam_nodeParam = node.GetTeamAdministratorsforaTeam_teamId;
                GetTeamAdministratorsforaTeam_nodeParamType = node.GetTeamAdministratorsforaTeam_teamIdType;
                if (GetTeamAdministratorsforaTeam_nodeParamType === 'str') {
                    GetTeamAdministratorsforaTeam_parameters.teamId = GetTeamAdministratorsforaTeam_nodeParam || '';
                } else {
                    GetTeamAdministratorsforaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetTeamAdministratorsforaTeam_nodeParam);
                }
                GetTeamAdministratorsforaTeam_parameters.teamId = !!GetTeamAdministratorsforaTeam_parameters.teamId ? GetTeamAdministratorsforaTeam_parameters.teamId : msg.payload;
                                result = client.GetTeamAdministratorsforaTeam(GetTeamAdministratorsforaTeam_parameters);
            }
            if (!errorFlag && node.method === 'GetUsersinaTeam') {
                var GetUsersinaTeam_parameters = [];
                var GetUsersinaTeam_nodeParam;
                var GetUsersinaTeam_nodeParamType;

                GetUsersinaTeam_nodeParam = node.GetUsersinaTeam_source;
                GetUsersinaTeam_nodeParamType = node.GetUsersinaTeam_sourceType;
                if (GetUsersinaTeam_nodeParamType === 'str') {
                    GetUsersinaTeam_parameters.source = GetUsersinaTeam_nodeParam || '';
                } else {
                    GetUsersinaTeam_parameters.source = RED.util.getMessageProperty(msg, GetUsersinaTeam_nodeParam);
                }
                GetUsersinaTeam_parameters.source = !!GetUsersinaTeam_parameters.source ? GetUsersinaTeam_parameters.source : msg.payload;
                
                GetUsersinaTeam_nodeParam = node.GetUsersinaTeam_format;
                GetUsersinaTeam_nodeParamType = node.GetUsersinaTeam_formatType;
                if (GetUsersinaTeam_nodeParamType === 'str') {
                    GetUsersinaTeam_parameters.format = GetUsersinaTeam_nodeParam || '';
                } else {
                    GetUsersinaTeam_parameters.format = RED.util.getMessageProperty(msg, GetUsersinaTeam_nodeParam);
                }
                GetUsersinaTeam_parameters.format = !!GetUsersinaTeam_parameters.format ? GetUsersinaTeam_parameters.format : msg.payload;
                
                GetUsersinaTeam_nodeParam = node.GetUsersinaTeam_limit;
                GetUsersinaTeam_nodeParamType = node.GetUsersinaTeam_limitType;
                if (GetUsersinaTeam_nodeParamType === 'str') {
                    GetUsersinaTeam_parameters.limit = GetUsersinaTeam_nodeParam || '';
                } else {
                    GetUsersinaTeam_parameters.limit = RED.util.getMessageProperty(msg, GetUsersinaTeam_nodeParam);
                }
                GetUsersinaTeam_parameters.limit = !!GetUsersinaTeam_parameters.limit ? GetUsersinaTeam_parameters.limit : msg.payload;
                
                GetUsersinaTeam_nodeParam = node.GetUsersinaTeam_apikey;
                GetUsersinaTeam_nodeParamType = node.GetUsersinaTeam_apikeyType;
                if (GetUsersinaTeam_nodeParamType === 'str') {
                    GetUsersinaTeam_parameters.apikey = GetUsersinaTeam_nodeParam || '';
                } else {
                    GetUsersinaTeam_parameters.apikey = RED.util.getMessageProperty(msg, GetUsersinaTeam_nodeParam);
                }
                GetUsersinaTeam_parameters.apikey = !!GetUsersinaTeam_parameters.apikey ? GetUsersinaTeam_parameters.apikey : msg.payload;
                
                GetUsersinaTeam_nodeParam = node.GetUsersinaTeam_teamId;
                GetUsersinaTeam_nodeParamType = node.GetUsersinaTeam_teamIdType;
                if (GetUsersinaTeam_nodeParamType === 'str') {
                    GetUsersinaTeam_parameters.teamId = GetUsersinaTeam_nodeParam || '';
                } else {
                    GetUsersinaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetUsersinaTeam_nodeParam);
                }
                GetUsersinaTeam_parameters.teamId = !!GetUsersinaTeam_parameters.teamId ? GetUsersinaTeam_parameters.teamId : msg.payload;
                                result = client.GetUsersinaTeam(GetUsersinaTeam_parameters);
            }
            if (!errorFlag && node.method === 'AssignUserstoaTeam') {
                var AssignUserstoaTeam_parameters = [];
                var AssignUserstoaTeam_nodeParam;
                var AssignUserstoaTeam_nodeParamType;

                AssignUserstoaTeam_nodeParam = node.AssignUserstoaTeam_source;
                AssignUserstoaTeam_nodeParamType = node.AssignUserstoaTeam_sourceType;
                if (AssignUserstoaTeam_nodeParamType === 'str') {
                    AssignUserstoaTeam_parameters.source = AssignUserstoaTeam_nodeParam || '';
                } else {
                    AssignUserstoaTeam_parameters.source = RED.util.getMessageProperty(msg, AssignUserstoaTeam_nodeParam);
                }
                AssignUserstoaTeam_parameters.source = !!AssignUserstoaTeam_parameters.source ? AssignUserstoaTeam_parameters.source : msg.payload;
                
                AssignUserstoaTeam_nodeParam = node.AssignUserstoaTeam_format;
                AssignUserstoaTeam_nodeParamType = node.AssignUserstoaTeam_formatType;
                if (AssignUserstoaTeam_nodeParamType === 'str') {
                    AssignUserstoaTeam_parameters.format = AssignUserstoaTeam_nodeParam || '';
                } else {
                    AssignUserstoaTeam_parameters.format = RED.util.getMessageProperty(msg, AssignUserstoaTeam_nodeParam);
                }
                AssignUserstoaTeam_parameters.format = !!AssignUserstoaTeam_parameters.format ? AssignUserstoaTeam_parameters.format : msg.payload;
                
                AssignUserstoaTeam_nodeParam = node.AssignUserstoaTeam_contentType;
                AssignUserstoaTeam_nodeParamType = node.AssignUserstoaTeam_contentTypeType;
                if (AssignUserstoaTeam_nodeParamType === 'str') {
                    AssignUserstoaTeam_parameters.contentType = AssignUserstoaTeam_nodeParam || '';
                } else {
                    AssignUserstoaTeam_parameters.contentType = RED.util.getMessageProperty(msg, AssignUserstoaTeam_nodeParam);
                }
                AssignUserstoaTeam_parameters.contentType = !!AssignUserstoaTeam_parameters.contentType ? AssignUserstoaTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    AssignUserstoaTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                AssignUserstoaTeam_nodeParam = node.AssignUserstoaTeam_teamId;
                AssignUserstoaTeam_nodeParamType = node.AssignUserstoaTeam_teamIdType;
                if (AssignUserstoaTeam_nodeParamType === 'str') {
                    AssignUserstoaTeam_parameters.teamId = AssignUserstoaTeam_nodeParam || '';
                } else {
                    AssignUserstoaTeam_parameters.teamId = RED.util.getMessageProperty(msg, AssignUserstoaTeam_nodeParam);
                }
                AssignUserstoaTeam_parameters.teamId = !!AssignUserstoaTeam_parameters.teamId ? AssignUserstoaTeam_parameters.teamId : msg.payload;
                                result = client.AssignUserstoaTeam(AssignUserstoaTeam_parameters);
            }
            if (!errorFlag && node.method === 'UnAssignUsersfromaTeam') {
                var UnAssignUsersfromaTeam_parameters = [];
                var UnAssignUsersfromaTeam_nodeParam;
                var UnAssignUsersfromaTeam_nodeParamType;

                UnAssignUsersfromaTeam_nodeParam = node.UnAssignUsersfromaTeam_source;
                UnAssignUsersfromaTeam_nodeParamType = node.UnAssignUsersfromaTeam_sourceType;
                if (UnAssignUsersfromaTeam_nodeParamType === 'str') {
                    UnAssignUsersfromaTeam_parameters.source = UnAssignUsersfromaTeam_nodeParam || '';
                } else {
                    UnAssignUsersfromaTeam_parameters.source = RED.util.getMessageProperty(msg, UnAssignUsersfromaTeam_nodeParam);
                }
                UnAssignUsersfromaTeam_parameters.source = !!UnAssignUsersfromaTeam_parameters.source ? UnAssignUsersfromaTeam_parameters.source : msg.payload;
                
                UnAssignUsersfromaTeam_nodeParam = node.UnAssignUsersfromaTeam_format;
                UnAssignUsersfromaTeam_nodeParamType = node.UnAssignUsersfromaTeam_formatType;
                if (UnAssignUsersfromaTeam_nodeParamType === 'str') {
                    UnAssignUsersfromaTeam_parameters.format = UnAssignUsersfromaTeam_nodeParam || '';
                } else {
                    UnAssignUsersfromaTeam_parameters.format = RED.util.getMessageProperty(msg, UnAssignUsersfromaTeam_nodeParam);
                }
                UnAssignUsersfromaTeam_parameters.format = !!UnAssignUsersfromaTeam_parameters.format ? UnAssignUsersfromaTeam_parameters.format : msg.payload;
                
                UnAssignUsersfromaTeam_nodeParam = node.UnAssignUsersfromaTeam_contentType;
                UnAssignUsersfromaTeam_nodeParamType = node.UnAssignUsersfromaTeam_contentTypeType;
                if (UnAssignUsersfromaTeam_nodeParamType === 'str') {
                    UnAssignUsersfromaTeam_parameters.contentType = UnAssignUsersfromaTeam_nodeParam || '';
                } else {
                    UnAssignUsersfromaTeam_parameters.contentType = RED.util.getMessageProperty(msg, UnAssignUsersfromaTeam_nodeParam);
                }
                UnAssignUsersfromaTeam_parameters.contentType = !!UnAssignUsersfromaTeam_parameters.contentType ? UnAssignUsersfromaTeam_parameters.contentType : msg.payload;
                
                UnAssignUsersfromaTeam_nodeParam = node.UnAssignUsersfromaTeam_teamId;
                UnAssignUsersfromaTeam_nodeParamType = node.UnAssignUsersfromaTeam_teamIdType;
                if (UnAssignUsersfromaTeam_nodeParamType === 'str') {
                    UnAssignUsersfromaTeam_parameters.teamId = UnAssignUsersfromaTeam_nodeParam || '';
                } else {
                    UnAssignUsersfromaTeam_parameters.teamId = RED.util.getMessageProperty(msg, UnAssignUsersfromaTeam_nodeParam);
                }
                UnAssignUsersfromaTeam_parameters.teamId = !!UnAssignUsersfromaTeam_parameters.teamId ? UnAssignUsersfromaTeam_parameters.teamId : msg.payload;
                
                UnAssignUsersfromaTeam_nodeParam = node.UnAssignUsersfromaTeam_userId;
                UnAssignUsersfromaTeam_nodeParamType = node.UnAssignUsersfromaTeam_userIdType;
                if (UnAssignUsersfromaTeam_nodeParamType === 'str') {
                    UnAssignUsersfromaTeam_parameters.userId = UnAssignUsersfromaTeam_nodeParam || '';
                } else {
                    UnAssignUsersfromaTeam_parameters.userId = RED.util.getMessageProperty(msg, UnAssignUsersfromaTeam_nodeParam);
                }
                UnAssignUsersfromaTeam_parameters.userId = !!UnAssignUsersfromaTeam_parameters.userId ? UnAssignUsersfromaTeam_parameters.userId : msg.payload;
                                result = client.UnAssignUsersfromaTeam(UnAssignUsersfromaTeam_parameters);
            }
            if (!errorFlag && node.method === 'UnAssignaUserfromAllTeams') {
                var UnAssignaUserfromAllTeams_parameters = [];
                var UnAssignaUserfromAllTeams_nodeParam;
                var UnAssignaUserfromAllTeams_nodeParamType;

                UnAssignaUserfromAllTeams_nodeParam = node.UnAssignaUserfromAllTeams_source;
                UnAssignaUserfromAllTeams_nodeParamType = node.UnAssignaUserfromAllTeams_sourceType;
                if (UnAssignaUserfromAllTeams_nodeParamType === 'str') {
                    UnAssignaUserfromAllTeams_parameters.source = UnAssignaUserfromAllTeams_nodeParam || '';
                } else {
                    UnAssignaUserfromAllTeams_parameters.source = RED.util.getMessageProperty(msg, UnAssignaUserfromAllTeams_nodeParam);
                }
                UnAssignaUserfromAllTeams_parameters.source = !!UnAssignaUserfromAllTeams_parameters.source ? UnAssignaUserfromAllTeams_parameters.source : msg.payload;
                
                UnAssignaUserfromAllTeams_nodeParam = node.UnAssignaUserfromAllTeams_contentType;
                UnAssignaUserfromAllTeams_nodeParamType = node.UnAssignaUserfromAllTeams_contentTypeType;
                if (UnAssignaUserfromAllTeams_nodeParamType === 'str') {
                    UnAssignaUserfromAllTeams_parameters.contentType = UnAssignaUserfromAllTeams_nodeParam || '';
                } else {
                    UnAssignaUserfromAllTeams_parameters.contentType = RED.util.getMessageProperty(msg, UnAssignaUserfromAllTeams_nodeParam);
                }
                UnAssignaUserfromAllTeams_parameters.contentType = !!UnAssignaUserfromAllTeams_parameters.contentType ? UnAssignaUserfromAllTeams_parameters.contentType : msg.payload;
                
                UnAssignaUserfromAllTeams_nodeParam = node.UnAssignaUserfromAllTeams_userId;
                UnAssignaUserfromAllTeams_nodeParamType = node.UnAssignaUserfromAllTeams_userIdType;
                if (UnAssignaUserfromAllTeams_nodeParamType === 'str') {
                    UnAssignaUserfromAllTeams_parameters.userId = UnAssignaUserfromAllTeams_nodeParam || '';
                } else {
                    UnAssignaUserfromAllTeams_parameters.userId = RED.util.getMessageProperty(msg, UnAssignaUserfromAllTeams_nodeParam);
                }
                UnAssignaUserfromAllTeams_parameters.userId = !!UnAssignaUserfromAllTeams_parameters.userId ? UnAssignaUserfromAllTeams_parameters.userId : msg.payload;
                                result = client.UnAssignaUserfromAllTeams(UnAssignaUserfromAllTeams_parameters);
            }
            if (!errorFlag && node.method === 'GetalistofAllTeamsaUserisAssignedto') {
                var GetalistofAllTeamsaUserisAssignedto_parameters = [];
                var GetalistofAllTeamsaUserisAssignedto_nodeParam;
                var GetalistofAllTeamsaUserisAssignedto_nodeParamType;

                GetalistofAllTeamsaUserisAssignedto_nodeParam = node.GetalistofAllTeamsaUserisAssignedto_source;
                GetalistofAllTeamsaUserisAssignedto_nodeParamType = node.GetalistofAllTeamsaUserisAssignedto_sourceType;
                if (GetalistofAllTeamsaUserisAssignedto_nodeParamType === 'str') {
                    GetalistofAllTeamsaUserisAssignedto_parameters.source = GetalistofAllTeamsaUserisAssignedto_nodeParam || '';
                } else {
                    GetalistofAllTeamsaUserisAssignedto_parameters.source = RED.util.getMessageProperty(msg, GetalistofAllTeamsaUserisAssignedto_nodeParam);
                }
                GetalistofAllTeamsaUserisAssignedto_parameters.source = !!GetalistofAllTeamsaUserisAssignedto_parameters.source ? GetalistofAllTeamsaUserisAssignedto_parameters.source : msg.payload;
                
                GetalistofAllTeamsaUserisAssignedto_nodeParam = node.GetalistofAllTeamsaUserisAssignedto_format;
                GetalistofAllTeamsaUserisAssignedto_nodeParamType = node.GetalistofAllTeamsaUserisAssignedto_formatType;
                if (GetalistofAllTeamsaUserisAssignedto_nodeParamType === 'str') {
                    GetalistofAllTeamsaUserisAssignedto_parameters.format = GetalistofAllTeamsaUserisAssignedto_nodeParam || '';
                } else {
                    GetalistofAllTeamsaUserisAssignedto_parameters.format = RED.util.getMessageProperty(msg, GetalistofAllTeamsaUserisAssignedto_nodeParam);
                }
                GetalistofAllTeamsaUserisAssignedto_parameters.format = !!GetalistofAllTeamsaUserisAssignedto_parameters.format ? GetalistofAllTeamsaUserisAssignedto_parameters.format : msg.payload;
                
                GetalistofAllTeamsaUserisAssignedto_nodeParam = node.GetalistofAllTeamsaUserisAssignedto_apikey;
                GetalistofAllTeamsaUserisAssignedto_nodeParamType = node.GetalistofAllTeamsaUserisAssignedto_apikeyType;
                if (GetalistofAllTeamsaUserisAssignedto_nodeParamType === 'str') {
                    GetalistofAllTeamsaUserisAssignedto_parameters.apikey = GetalistofAllTeamsaUserisAssignedto_nodeParam || '';
                } else {
                    GetalistofAllTeamsaUserisAssignedto_parameters.apikey = RED.util.getMessageProperty(msg, GetalistofAllTeamsaUserisAssignedto_nodeParam);
                }
                GetalistofAllTeamsaUserisAssignedto_parameters.apikey = !!GetalistofAllTeamsaUserisAssignedto_parameters.apikey ? GetalistofAllTeamsaUserisAssignedto_parameters.apikey : msg.payload;
                
                GetalistofAllTeamsaUserisAssignedto_nodeParam = node.GetalistofAllTeamsaUserisAssignedto_userId;
                GetalistofAllTeamsaUserisAssignedto_nodeParamType = node.GetalistofAllTeamsaUserisAssignedto_userIdType;
                if (GetalistofAllTeamsaUserisAssignedto_nodeParamType === 'str') {
                    GetalistofAllTeamsaUserisAssignedto_parameters.userId = GetalistofAllTeamsaUserisAssignedto_nodeParam || '';
                } else {
                    GetalistofAllTeamsaUserisAssignedto_parameters.userId = RED.util.getMessageProperty(msg, GetalistofAllTeamsaUserisAssignedto_nodeParam);
                }
                GetalistofAllTeamsaUserisAssignedto_parameters.userId = !!GetalistofAllTeamsaUserisAssignedto_parameters.userId ? GetalistofAllTeamsaUserisAssignedto_parameters.userId : msg.payload;
                                result = client.GetalistofAllTeamsaUserisAssignedto(GetalistofAllTeamsaUserisAssignedto_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofAllTeams') {
                var GetaListofAllTeams_parameters = [];
                var GetaListofAllTeams_nodeParam;
                var GetaListofAllTeams_nodeParamType;

                GetaListofAllTeams_nodeParam = node.GetaListofAllTeams_source;
                GetaListofAllTeams_nodeParamType = node.GetaListofAllTeams_sourceType;
                if (GetaListofAllTeams_nodeParamType === 'str') {
                    GetaListofAllTeams_parameters.source = GetaListofAllTeams_nodeParam || '';
                } else {
                    GetaListofAllTeams_parameters.source = RED.util.getMessageProperty(msg, GetaListofAllTeams_nodeParam);
                }
                GetaListofAllTeams_parameters.source = !!GetaListofAllTeams_parameters.source ? GetaListofAllTeams_parameters.source : msg.payload;
                
                GetaListofAllTeams_nodeParam = node.GetaListofAllTeams_format;
                GetaListofAllTeams_nodeParamType = node.GetaListofAllTeams_formatType;
                if (GetaListofAllTeams_nodeParamType === 'str') {
                    GetaListofAllTeams_parameters.format = GetaListofAllTeams_nodeParam || '';
                } else {
                    GetaListofAllTeams_parameters.format = RED.util.getMessageProperty(msg, GetaListofAllTeams_nodeParam);
                }
                GetaListofAllTeams_parameters.format = !!GetaListofAllTeams_parameters.format ? GetaListofAllTeams_parameters.format : msg.payload;
                
                GetaListofAllTeams_nodeParam = node.GetaListofAllTeams_limit;
                GetaListofAllTeams_nodeParamType = node.GetaListofAllTeams_limitType;
                if (GetaListofAllTeams_nodeParamType === 'str') {
                    GetaListofAllTeams_parameters.limit = GetaListofAllTeams_nodeParam || '';
                } else {
                    GetaListofAllTeams_parameters.limit = RED.util.getMessageProperty(msg, GetaListofAllTeams_nodeParam);
                }
                GetaListofAllTeams_parameters.limit = !!GetaListofAllTeams_parameters.limit ? GetaListofAllTeams_parameters.limit : msg.payload;
                
                GetaListofAllTeams_nodeParam = node.GetaListofAllTeams_apikey;
                GetaListofAllTeams_nodeParamType = node.GetaListofAllTeams_apikeyType;
                if (GetaListofAllTeams_nodeParamType === 'str') {
                    GetaListofAllTeams_parameters.apikey = GetaListofAllTeams_nodeParam || '';
                } else {
                    GetaListofAllTeams_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofAllTeams_nodeParam);
                }
                GetaListofAllTeams_parameters.apikey = !!GetaListofAllTeams_parameters.apikey ? GetaListofAllTeams_parameters.apikey : msg.payload;
                                result = client.GetaListofAllTeams(GetaListofAllTeams_parameters);
            }
            if (!errorFlag && node.method === 'CreateaTeamorSubTeam') {
                var CreateaTeamorSubTeam_parameters = [];
                var CreateaTeamorSubTeam_nodeParam;
                var CreateaTeamorSubTeam_nodeParamType;

                CreateaTeamorSubTeam_nodeParam = node.CreateaTeamorSubTeam_source;
                CreateaTeamorSubTeam_nodeParamType = node.CreateaTeamorSubTeam_sourceType;
                if (CreateaTeamorSubTeam_nodeParamType === 'str') {
                    CreateaTeamorSubTeam_parameters.source = CreateaTeamorSubTeam_nodeParam || '';
                } else {
                    CreateaTeamorSubTeam_parameters.source = RED.util.getMessageProperty(msg, CreateaTeamorSubTeam_nodeParam);
                }
                CreateaTeamorSubTeam_parameters.source = !!CreateaTeamorSubTeam_parameters.source ? CreateaTeamorSubTeam_parameters.source : msg.payload;
                
                CreateaTeamorSubTeam_nodeParam = node.CreateaTeamorSubTeam_format;
                CreateaTeamorSubTeam_nodeParamType = node.CreateaTeamorSubTeam_formatType;
                if (CreateaTeamorSubTeam_nodeParamType === 'str') {
                    CreateaTeamorSubTeam_parameters.format = CreateaTeamorSubTeam_nodeParam || '';
                } else {
                    CreateaTeamorSubTeam_parameters.format = RED.util.getMessageProperty(msg, CreateaTeamorSubTeam_nodeParam);
                }
                CreateaTeamorSubTeam_parameters.format = !!CreateaTeamorSubTeam_parameters.format ? CreateaTeamorSubTeam_parameters.format : msg.payload;
                
                CreateaTeamorSubTeam_nodeParam = node.CreateaTeamorSubTeam_contentType;
                CreateaTeamorSubTeam_nodeParamType = node.CreateaTeamorSubTeam_contentTypeType;
                if (CreateaTeamorSubTeam_nodeParamType === 'str') {
                    CreateaTeamorSubTeam_parameters.contentType = CreateaTeamorSubTeam_nodeParam || '';
                } else {
                    CreateaTeamorSubTeam_parameters.contentType = RED.util.getMessageProperty(msg, CreateaTeamorSubTeam_nodeParam);
                }
                CreateaTeamorSubTeam_parameters.contentType = !!CreateaTeamorSubTeam_parameters.contentType ? CreateaTeamorSubTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    CreateaTeamorSubTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.CreateaTeamorSubTeam(CreateaTeamorSubTeam_parameters);
            }
            if (!errorFlag && node.method === 'GetaTeam') {
                var GetaTeam_parameters = [];
                var GetaTeam_nodeParam;
                var GetaTeam_nodeParamType;

                GetaTeam_nodeParam = node.GetaTeam_source;
                GetaTeam_nodeParamType = node.GetaTeam_sourceType;
                if (GetaTeam_nodeParamType === 'str') {
                    GetaTeam_parameters.source = GetaTeam_nodeParam || '';
                } else {
                    GetaTeam_parameters.source = RED.util.getMessageProperty(msg, GetaTeam_nodeParam);
                }
                GetaTeam_parameters.source = !!GetaTeam_parameters.source ? GetaTeam_parameters.source : msg.payload;
                
                GetaTeam_nodeParam = node.GetaTeam_format;
                GetaTeam_nodeParamType = node.GetaTeam_formatType;
                if (GetaTeam_nodeParamType === 'str') {
                    GetaTeam_parameters.format = GetaTeam_nodeParam || '';
                } else {
                    GetaTeam_parameters.format = RED.util.getMessageProperty(msg, GetaTeam_nodeParam);
                }
                GetaTeam_parameters.format = !!GetaTeam_parameters.format ? GetaTeam_parameters.format : msg.payload;
                
                GetaTeam_nodeParam = node.GetaTeam_apikey;
                GetaTeam_nodeParamType = node.GetaTeam_apikeyType;
                if (GetaTeam_nodeParamType === 'str') {
                    GetaTeam_parameters.apikey = GetaTeam_nodeParam || '';
                } else {
                    GetaTeam_parameters.apikey = RED.util.getMessageProperty(msg, GetaTeam_nodeParam);
                }
                GetaTeam_parameters.apikey = !!GetaTeam_parameters.apikey ? GetaTeam_parameters.apikey : msg.payload;
                
                GetaTeam_nodeParam = node.GetaTeam_teamId;
                GetaTeam_nodeParamType = node.GetaTeam_teamIdType;
                if (GetaTeam_nodeParamType === 'str') {
                    GetaTeam_parameters.teamId = GetaTeam_nodeParam || '';
                } else {
                    GetaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetaTeam_nodeParam);
                }
                GetaTeam_parameters.teamId = !!GetaTeam_parameters.teamId ? GetaTeam_parameters.teamId : msg.payload;
                                result = client.GetaTeam(GetaTeam_parameters);
            }
            if (!errorFlag && node.method === 'UpdateaTeam') {
                var UpdateaTeam_parameters = [];
                var UpdateaTeam_nodeParam;
                var UpdateaTeam_nodeParamType;

                UpdateaTeam_nodeParam = node.UpdateaTeam_source;
                UpdateaTeam_nodeParamType = node.UpdateaTeam_sourceType;
                if (UpdateaTeam_nodeParamType === 'str') {
                    UpdateaTeam_parameters.source = UpdateaTeam_nodeParam || '';
                } else {
                    UpdateaTeam_parameters.source = RED.util.getMessageProperty(msg, UpdateaTeam_nodeParam);
                }
                UpdateaTeam_parameters.source = !!UpdateaTeam_parameters.source ? UpdateaTeam_parameters.source : msg.payload;
                
                UpdateaTeam_nodeParam = node.UpdateaTeam_format;
                UpdateaTeam_nodeParamType = node.UpdateaTeam_formatType;
                if (UpdateaTeam_nodeParamType === 'str') {
                    UpdateaTeam_parameters.format = UpdateaTeam_nodeParam || '';
                } else {
                    UpdateaTeam_parameters.format = RED.util.getMessageProperty(msg, UpdateaTeam_nodeParam);
                }
                UpdateaTeam_parameters.format = !!UpdateaTeam_parameters.format ? UpdateaTeam_parameters.format : msg.payload;
                
                UpdateaTeam_nodeParam = node.UpdateaTeam_contentType;
                UpdateaTeam_nodeParamType = node.UpdateaTeam_contentTypeType;
                if (UpdateaTeam_nodeParamType === 'str') {
                    UpdateaTeam_parameters.contentType = UpdateaTeam_nodeParam || '';
                } else {
                    UpdateaTeam_parameters.contentType = RED.util.getMessageProperty(msg, UpdateaTeam_nodeParam);
                }
                UpdateaTeam_parameters.contentType = !!UpdateaTeam_parameters.contentType ? UpdateaTeam_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UpdateaTeam_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateaTeam_nodeParam = node.UpdateaTeam_secondTeamId;
                UpdateaTeam_nodeParamType = node.UpdateaTeam_secondTeamIdType;
                if (UpdateaTeam_nodeParamType === 'str') {
                    UpdateaTeam_parameters.secondTeamId = UpdateaTeam_nodeParam || '';
                } else {
                    UpdateaTeam_parameters.secondTeamId = RED.util.getMessageProperty(msg, UpdateaTeam_nodeParam);
                }
                UpdateaTeam_parameters.secondTeamId = !!UpdateaTeam_parameters.secondTeamId ? UpdateaTeam_parameters.secondTeamId : msg.payload;
                                result = client.UpdateaTeam(UpdateaTeam_parameters);
            }
            if (!errorFlag && node.method === 'GETTeamTeam_Id') {
                var GETTeamTeam_Id_parameters = [];
                var GETTeamTeam_Id_nodeParam;
                var GETTeamTeam_Id_nodeParamType;

                GETTeamTeam_Id_nodeParam = node.GETTeamTeam_Id_source;
                GETTeamTeam_Id_nodeParamType = node.GETTeamTeam_Id_sourceType;
                if (GETTeamTeam_Id_nodeParamType === 'str') {
                    GETTeamTeam_Id_parameters.source = GETTeamTeam_Id_nodeParam || '';
                } else {
                    GETTeamTeam_Id_parameters.source = RED.util.getMessageProperty(msg, GETTeamTeam_Id_nodeParam);
                }
                GETTeamTeam_Id_parameters.source = !!GETTeamTeam_Id_parameters.source ? GETTeamTeam_Id_parameters.source : msg.payload;
                
                GETTeamTeam_Id_nodeParam = node.GETTeamTeam_Id_format;
                GETTeamTeam_Id_nodeParamType = node.GETTeamTeam_Id_formatType;
                if (GETTeamTeam_Id_nodeParamType === 'str') {
                    GETTeamTeam_Id_parameters.format = GETTeamTeam_Id_nodeParam || '';
                } else {
                    GETTeamTeam_Id_parameters.format = RED.util.getMessageProperty(msg, GETTeamTeam_Id_nodeParam);
                }
                GETTeamTeam_Id_parameters.format = !!GETTeamTeam_Id_parameters.format ? GETTeamTeam_Id_parameters.format : msg.payload;
                
                GETTeamTeam_Id_nodeParam = node.GETTeamTeam_Id_apikey;
                GETTeamTeam_Id_nodeParamType = node.GETTeamTeam_Id_apikeyType;
                if (GETTeamTeam_Id_nodeParamType === 'str') {
                    GETTeamTeam_Id_parameters.apikey = GETTeamTeam_Id_nodeParam || '';
                } else {
                    GETTeamTeam_Id_parameters.apikey = RED.util.getMessageProperty(msg, GETTeamTeam_Id_nodeParam);
                }
                GETTeamTeam_Id_parameters.apikey = !!GETTeamTeam_Id_parameters.apikey ? GETTeamTeam_Id_parameters.apikey : msg.payload;
                
                GETTeamTeam_Id_nodeParam = node.GETTeamTeam_Id_secondTeamId;
                GETTeamTeam_Id_nodeParamType = node.GETTeamTeam_Id_secondTeamIdType;
                if (GETTeamTeam_Id_nodeParamType === 'str') {
                    GETTeamTeam_Id_parameters.secondTeamId = GETTeamTeam_Id_nodeParam || '';
                } else {
                    GETTeamTeam_Id_parameters.secondTeamId = RED.util.getMessageProperty(msg, GETTeamTeam_Id_nodeParam);
                }
                GETTeamTeam_Id_parameters.secondTeamId = !!GETTeamTeam_Id_parameters.secondTeamId ? GETTeamTeam_Id_parameters.secondTeamId : msg.payload;
                                result = client.GETTeamTeam_Id(GETTeamTeam_Id_parameters);
            }
            if (!errorFlag && node.method === 'DeleteaTeamorSubteam') {
                var DeleteaTeamorSubteam_parameters = [];
                var DeleteaTeamorSubteam_nodeParam;
                var DeleteaTeamorSubteam_nodeParamType;

                DeleteaTeamorSubteam_nodeParam = node.DeleteaTeamorSubteam_source;
                DeleteaTeamorSubteam_nodeParamType = node.DeleteaTeamorSubteam_sourceType;
                if (DeleteaTeamorSubteam_nodeParamType === 'str') {
                    DeleteaTeamorSubteam_parameters.source = DeleteaTeamorSubteam_nodeParam || '';
                } else {
                    DeleteaTeamorSubteam_parameters.source = RED.util.getMessageProperty(msg, DeleteaTeamorSubteam_nodeParam);
                }
                DeleteaTeamorSubteam_parameters.source = !!DeleteaTeamorSubteam_parameters.source ? DeleteaTeamorSubteam_parameters.source : msg.payload;
                
                DeleteaTeamorSubteam_nodeParam = node.DeleteaTeamorSubteam_apikey;
                DeleteaTeamorSubteam_nodeParamType = node.DeleteaTeamorSubteam_apikeyType;
                if (DeleteaTeamorSubteam_nodeParamType === 'str') {
                    DeleteaTeamorSubteam_parameters.apikey = DeleteaTeamorSubteam_nodeParam || '';
                } else {
                    DeleteaTeamorSubteam_parameters.apikey = RED.util.getMessageProperty(msg, DeleteaTeamorSubteam_nodeParam);
                }
                DeleteaTeamorSubteam_parameters.apikey = !!DeleteaTeamorSubteam_parameters.apikey ? DeleteaTeamorSubteam_parameters.apikey : msg.payload;
                
                DeleteaTeamorSubteam_nodeParam = node.DeleteaTeamorSubteam_secondTeamId;
                DeleteaTeamorSubteam_nodeParamType = node.DeleteaTeamorSubteam_secondTeamIdType;
                if (DeleteaTeamorSubteam_nodeParamType === 'str') {
                    DeleteaTeamorSubteam_parameters.secondTeamId = DeleteaTeamorSubteam_nodeParam || '';
                } else {
                    DeleteaTeamorSubteam_parameters.secondTeamId = RED.util.getMessageProperty(msg, DeleteaTeamorSubteam_nodeParam);
                }
                DeleteaTeamorSubteam_parameters.secondTeamId = !!DeleteaTeamorSubteam_parameters.secondTeamId ? DeleteaTeamorSubteam_parameters.secondTeamId : msg.payload;
                                result = client.DeleteaTeamorSubteam(DeleteaTeamorSubteam_parameters);
            }
            if (!errorFlag && node.method === 'CreateaNewILTsessionforaModule') {
                var CreateaNewILTsessionforaModule_parameters = [];
                var CreateaNewILTsessionforaModule_nodeParam;
                var CreateaNewILTsessionforaModule_nodeParamType;

                CreateaNewILTsessionforaModule_nodeParam = node.CreateaNewILTsessionforaModule_source;
                CreateaNewILTsessionforaModule_nodeParamType = node.CreateaNewILTsessionforaModule_sourceType;
                if (CreateaNewILTsessionforaModule_nodeParamType === 'str') {
                    CreateaNewILTsessionforaModule_parameters.source = CreateaNewILTsessionforaModule_nodeParam || '';
                } else {
                    CreateaNewILTsessionforaModule_parameters.source = RED.util.getMessageProperty(msg, CreateaNewILTsessionforaModule_nodeParam);
                }
                CreateaNewILTsessionforaModule_parameters.source = !!CreateaNewILTsessionforaModule_parameters.source ? CreateaNewILTsessionforaModule_parameters.source : msg.payload;
                
                CreateaNewILTsessionforaModule_nodeParam = node.CreateaNewILTsessionforaModule_format;
                CreateaNewILTsessionforaModule_nodeParamType = node.CreateaNewILTsessionforaModule_formatType;
                if (CreateaNewILTsessionforaModule_nodeParamType === 'str') {
                    CreateaNewILTsessionforaModule_parameters.format = CreateaNewILTsessionforaModule_nodeParam || '';
                } else {
                    CreateaNewILTsessionforaModule_parameters.format = RED.util.getMessageProperty(msg, CreateaNewILTsessionforaModule_nodeParam);
                }
                CreateaNewILTsessionforaModule_parameters.format = !!CreateaNewILTsessionforaModule_parameters.format ? CreateaNewILTsessionforaModule_parameters.format : msg.payload;
                
                CreateaNewILTsessionforaModule_nodeParam = node.CreateaNewILTsessionforaModule_contentType;
                CreateaNewILTsessionforaModule_nodeParamType = node.CreateaNewILTsessionforaModule_contentTypeType;
                if (CreateaNewILTsessionforaModule_nodeParamType === 'str') {
                    CreateaNewILTsessionforaModule_parameters.contentType = CreateaNewILTsessionforaModule_nodeParam || '';
                } else {
                    CreateaNewILTsessionforaModule_parameters.contentType = RED.util.getMessageProperty(msg, CreateaNewILTsessionforaModule_nodeParam);
                }
                CreateaNewILTsessionforaModule_parameters.contentType = !!CreateaNewILTsessionforaModule_parameters.contentType ? CreateaNewILTsessionforaModule_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    CreateaNewILTsessionforaModule_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                CreateaNewILTsessionforaModule_nodeParam = node.CreateaNewILTsessionforaModule_courseId;
                CreateaNewILTsessionforaModule_nodeParamType = node.CreateaNewILTsessionforaModule_courseIdType;
                if (CreateaNewILTsessionforaModule_nodeParamType === 'str') {
                    CreateaNewILTsessionforaModule_parameters.courseId = CreateaNewILTsessionforaModule_nodeParam || '';
                } else {
                    CreateaNewILTsessionforaModule_parameters.courseId = RED.util.getMessageProperty(msg, CreateaNewILTsessionforaModule_nodeParam);
                }
                CreateaNewILTsessionforaModule_parameters.courseId = !!CreateaNewILTsessionforaModule_parameters.courseId ? CreateaNewILTsessionforaModule_parameters.courseId : msg.payload;
                
                CreateaNewILTsessionforaModule_nodeParam = node.CreateaNewILTsessionforaModule_moduleId;
                CreateaNewILTsessionforaModule_nodeParamType = node.CreateaNewILTsessionforaModule_moduleIdType;
                if (CreateaNewILTsessionforaModule_nodeParamType === 'str') {
                    CreateaNewILTsessionforaModule_parameters.moduleId = CreateaNewILTsessionforaModule_nodeParam || '';
                } else {
                    CreateaNewILTsessionforaModule_parameters.moduleId = RED.util.getMessageProperty(msg, CreateaNewILTsessionforaModule_nodeParam);
                }
                CreateaNewILTsessionforaModule_parameters.moduleId = !!CreateaNewILTsessionforaModule_parameters.moduleId ? CreateaNewILTsessionforaModule_parameters.moduleId : msg.payload;
                                result = client.CreateaNewILTsessionforaModule(CreateaNewILTsessionforaModule_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofSessionsinanILTModule') {
                var GetaListofSessionsinanILTModule_parameters = [];
                var GetaListofSessionsinanILTModule_nodeParam;
                var GetaListofSessionsinanILTModule_nodeParamType;

                GetaListofSessionsinanILTModule_nodeParam = node.GetaListofSessionsinanILTModule_source;
                GetaListofSessionsinanILTModule_nodeParamType = node.GetaListofSessionsinanILTModule_sourceType;
                if (GetaListofSessionsinanILTModule_nodeParamType === 'str') {
                    GetaListofSessionsinanILTModule_parameters.source = GetaListofSessionsinanILTModule_nodeParam || '';
                } else {
                    GetaListofSessionsinanILTModule_parameters.source = RED.util.getMessageProperty(msg, GetaListofSessionsinanILTModule_nodeParam);
                }
                GetaListofSessionsinanILTModule_parameters.source = !!GetaListofSessionsinanILTModule_parameters.source ? GetaListofSessionsinanILTModule_parameters.source : msg.payload;
                
                GetaListofSessionsinanILTModule_nodeParam = node.GetaListofSessionsinanILTModule_format;
                GetaListofSessionsinanILTModule_nodeParamType = node.GetaListofSessionsinanILTModule_formatType;
                if (GetaListofSessionsinanILTModule_nodeParamType === 'str') {
                    GetaListofSessionsinanILTModule_parameters.format = GetaListofSessionsinanILTModule_nodeParam || '';
                } else {
                    GetaListofSessionsinanILTModule_parameters.format = RED.util.getMessageProperty(msg, GetaListofSessionsinanILTModule_nodeParam);
                }
                GetaListofSessionsinanILTModule_parameters.format = !!GetaListofSessionsinanILTModule_parameters.format ? GetaListofSessionsinanILTModule_parameters.format : msg.payload;
                
                GetaListofSessionsinanILTModule_nodeParam = node.GetaListofSessionsinanILTModule_apikey;
                GetaListofSessionsinanILTModule_nodeParamType = node.GetaListofSessionsinanILTModule_apikeyType;
                if (GetaListofSessionsinanILTModule_nodeParamType === 'str') {
                    GetaListofSessionsinanILTModule_parameters.apikey = GetaListofSessionsinanILTModule_nodeParam || '';
                } else {
                    GetaListofSessionsinanILTModule_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofSessionsinanILTModule_nodeParam);
                }
                GetaListofSessionsinanILTModule_parameters.apikey = !!GetaListofSessionsinanILTModule_parameters.apikey ? GetaListofSessionsinanILTModule_parameters.apikey : msg.payload;
                
                GetaListofSessionsinanILTModule_nodeParam = node.GetaListofSessionsinanILTModule_courseId;
                GetaListofSessionsinanILTModule_nodeParamType = node.GetaListofSessionsinanILTModule_courseIdType;
                if (GetaListofSessionsinanILTModule_nodeParamType === 'str') {
                    GetaListofSessionsinanILTModule_parameters.courseId = GetaListofSessionsinanILTModule_nodeParam || '';
                } else {
                    GetaListofSessionsinanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, GetaListofSessionsinanILTModule_nodeParam);
                }
                GetaListofSessionsinanILTModule_parameters.courseId = !!GetaListofSessionsinanILTModule_parameters.courseId ? GetaListofSessionsinanILTModule_parameters.courseId : msg.payload;
                
                GetaListofSessionsinanILTModule_nodeParam = node.GetaListofSessionsinanILTModule_moduleId;
                GetaListofSessionsinanILTModule_nodeParamType = node.GetaListofSessionsinanILTModule_moduleIdType;
                if (GetaListofSessionsinanILTModule_nodeParamType === 'str') {
                    GetaListofSessionsinanILTModule_parameters.moduleId = GetaListofSessionsinanILTModule_nodeParam || '';
                } else {
                    GetaListofSessionsinanILTModule_parameters.moduleId = RED.util.getMessageProperty(msg, GetaListofSessionsinanILTModule_nodeParam);
                }
                GetaListofSessionsinanILTModule_parameters.moduleId = !!GetaListofSessionsinanILTModule_parameters.moduleId ? GetaListofSessionsinanILTModule_parameters.moduleId : msg.payload;
                                result = client.GetaListofSessionsinanILTModule(GetaListofSessionsinanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofFutureSessionsforanILTModule') {
                var GetaListofFutureSessionsforanILTModule_parameters = [];
                var GetaListofFutureSessionsforanILTModule_nodeParam;
                var GetaListofFutureSessionsforanILTModule_nodeParamType;

                GetaListofFutureSessionsforanILTModule_nodeParam = node.GetaListofFutureSessionsforanILTModule_source;
                GetaListofFutureSessionsforanILTModule_nodeParamType = node.GetaListofFutureSessionsforanILTModule_sourceType;
                if (GetaListofFutureSessionsforanILTModule_nodeParamType === 'str') {
                    GetaListofFutureSessionsforanILTModule_parameters.source = GetaListofFutureSessionsforanILTModule_nodeParam || '';
                } else {
                    GetaListofFutureSessionsforanILTModule_parameters.source = RED.util.getMessageProperty(msg, GetaListofFutureSessionsforanILTModule_nodeParam);
                }
                GetaListofFutureSessionsforanILTModule_parameters.source = !!GetaListofFutureSessionsforanILTModule_parameters.source ? GetaListofFutureSessionsforanILTModule_parameters.source : msg.payload;
                
                GetaListofFutureSessionsforanILTModule_nodeParam = node.GetaListofFutureSessionsforanILTModule_format;
                GetaListofFutureSessionsforanILTModule_nodeParamType = node.GetaListofFutureSessionsforanILTModule_formatType;
                if (GetaListofFutureSessionsforanILTModule_nodeParamType === 'str') {
                    GetaListofFutureSessionsforanILTModule_parameters.format = GetaListofFutureSessionsforanILTModule_nodeParam || '';
                } else {
                    GetaListofFutureSessionsforanILTModule_parameters.format = RED.util.getMessageProperty(msg, GetaListofFutureSessionsforanILTModule_nodeParam);
                }
                GetaListofFutureSessionsforanILTModule_parameters.format = !!GetaListofFutureSessionsforanILTModule_parameters.format ? GetaListofFutureSessionsforanILTModule_parameters.format : msg.payload;
                
                GetaListofFutureSessionsforanILTModule_nodeParam = node.GetaListofFutureSessionsforanILTModule_apikey;
                GetaListofFutureSessionsforanILTModule_nodeParamType = node.GetaListofFutureSessionsforanILTModule_apikeyType;
                if (GetaListofFutureSessionsforanILTModule_nodeParamType === 'str') {
                    GetaListofFutureSessionsforanILTModule_parameters.apikey = GetaListofFutureSessionsforanILTModule_nodeParam || '';
                } else {
                    GetaListofFutureSessionsforanILTModule_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofFutureSessionsforanILTModule_nodeParam);
                }
                GetaListofFutureSessionsforanILTModule_parameters.apikey = !!GetaListofFutureSessionsforanILTModule_parameters.apikey ? GetaListofFutureSessionsforanILTModule_parameters.apikey : msg.payload;
                                result = client.GetaListofFutureSessionsforanILTModule(GetaListofFutureSessionsforanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofallILTModulesinaCourse') {
                var GetaListofallILTModulesinaCourse_parameters = [];
                var GetaListofallILTModulesinaCourse_nodeParam;
                var GetaListofallILTModulesinaCourse_nodeParamType;

                GetaListofallILTModulesinaCourse_nodeParam = node.GetaListofallILTModulesinaCourse_source;
                GetaListofallILTModulesinaCourse_nodeParamType = node.GetaListofallILTModulesinaCourse_sourceType;
                if (GetaListofallILTModulesinaCourse_nodeParamType === 'str') {
                    GetaListofallILTModulesinaCourse_parameters.source = GetaListofallILTModulesinaCourse_nodeParam || '';
                } else {
                    GetaListofallILTModulesinaCourse_parameters.source = RED.util.getMessageProperty(msg, GetaListofallILTModulesinaCourse_nodeParam);
                }
                GetaListofallILTModulesinaCourse_parameters.source = !!GetaListofallILTModulesinaCourse_parameters.source ? GetaListofallILTModulesinaCourse_parameters.source : msg.payload;
                
                GetaListofallILTModulesinaCourse_nodeParam = node.GetaListofallILTModulesinaCourse_format;
                GetaListofallILTModulesinaCourse_nodeParamType = node.GetaListofallILTModulesinaCourse_formatType;
                if (GetaListofallILTModulesinaCourse_nodeParamType === 'str') {
                    GetaListofallILTModulesinaCourse_parameters.format = GetaListofallILTModulesinaCourse_nodeParam || '';
                } else {
                    GetaListofallILTModulesinaCourse_parameters.format = RED.util.getMessageProperty(msg, GetaListofallILTModulesinaCourse_nodeParam);
                }
                GetaListofallILTModulesinaCourse_parameters.format = !!GetaListofallILTModulesinaCourse_parameters.format ? GetaListofallILTModulesinaCourse_parameters.format : msg.payload;
                
                GetaListofallILTModulesinaCourse_nodeParam = node.GetaListofallILTModulesinaCourse_apikey;
                GetaListofallILTModulesinaCourse_nodeParamType = node.GetaListofallILTModulesinaCourse_apikeyType;
                if (GetaListofallILTModulesinaCourse_nodeParamType === 'str') {
                    GetaListofallILTModulesinaCourse_parameters.apikey = GetaListofallILTModulesinaCourse_nodeParam || '';
                } else {
                    GetaListofallILTModulesinaCourse_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofallILTModulesinaCourse_nodeParam);
                }
                GetaListofallILTModulesinaCourse_parameters.apikey = !!GetaListofallILTModulesinaCourse_parameters.apikey ? GetaListofallILTModulesinaCourse_parameters.apikey : msg.payload;
                
                GetaListofallILTModulesinaCourse_nodeParam = node.GetaListofallILTModulesinaCourse_courseId;
                GetaListofallILTModulesinaCourse_nodeParamType = node.GetaListofallILTModulesinaCourse_courseIdType;
                if (GetaListofallILTModulesinaCourse_nodeParamType === 'str') {
                    GetaListofallILTModulesinaCourse_parameters.courseId = GetaListofallILTModulesinaCourse_nodeParam || '';
                } else {
                    GetaListofallILTModulesinaCourse_parameters.courseId = RED.util.getMessageProperty(msg, GetaListofallILTModulesinaCourse_nodeParam);
                }
                GetaListofallILTModulesinaCourse_parameters.courseId = !!GetaListofallILTModulesinaCourse_parameters.courseId ? GetaListofallILTModulesinaCourse_parameters.courseId : msg.payload;
                                result = client.GetaListofallILTModulesinaCourse(GetaListofallILTModulesinaCourse_parameters);
            }
            if (!errorFlag && node.method === 'GetaSpecificSessioninanILTModule') {
                var GetaSpecificSessioninanILTModule_parameters = [];
                var GetaSpecificSessioninanILTModule_nodeParam;
                var GetaSpecificSessioninanILTModule_nodeParamType;

                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_source;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_sourceType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.source = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.source = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.source = !!GetaSpecificSessioninanILTModule_parameters.source ? GetaSpecificSessioninanILTModule_parameters.source : msg.payload;
                
                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_format;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_formatType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.format = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.format = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.format = !!GetaSpecificSessioninanILTModule_parameters.format ? GetaSpecificSessioninanILTModule_parameters.format : msg.payload;
                
                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_apikey;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_apikeyType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.apikey = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.apikey = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.apikey = !!GetaSpecificSessioninanILTModule_parameters.apikey ? GetaSpecificSessioninanILTModule_parameters.apikey : msg.payload;
                
                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_courseId;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_courseIdType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.courseId = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.courseId = !!GetaSpecificSessioninanILTModule_parameters.courseId ? GetaSpecificSessioninanILTModule_parameters.courseId : msg.payload;
                
                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_moduleId;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_moduleIdType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.moduleId = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.moduleId = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.moduleId = !!GetaSpecificSessioninanILTModule_parameters.moduleId ? GetaSpecificSessioninanILTModule_parameters.moduleId : msg.payload;
                
                GetaSpecificSessioninanILTModule_nodeParam = node.GetaSpecificSessioninanILTModule_sessionId;
                GetaSpecificSessioninanILTModule_nodeParamType = node.GetaSpecificSessioninanILTModule_sessionIdType;
                if (GetaSpecificSessioninanILTModule_nodeParamType === 'str') {
                    GetaSpecificSessioninanILTModule_parameters.sessionId = GetaSpecificSessioninanILTModule_nodeParam || '';
                } else {
                    GetaSpecificSessioninanILTModule_parameters.sessionId = RED.util.getMessageProperty(msg, GetaSpecificSessioninanILTModule_nodeParam);
                }
                GetaSpecificSessioninanILTModule_parameters.sessionId = !!GetaSpecificSessioninanILTModule_parameters.sessionId ? GetaSpecificSessioninanILTModule_parameters.sessionId : msg.payload;
                                result = client.GetaSpecificSessioninanILTModule(GetaSpecificSessioninanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'UpdateaSessioninanILTModule') {
                var UpdateaSessioninanILTModule_parameters = [];
                var UpdateaSessioninanILTModule_nodeParam;
                var UpdateaSessioninanILTModule_nodeParamType;

                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_source;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_sourceType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.source = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.source = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.source = !!UpdateaSessioninanILTModule_parameters.source ? UpdateaSessioninanILTModule_parameters.source : msg.payload;
                
                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_format;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_formatType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.format = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.format = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.format = !!UpdateaSessioninanILTModule_parameters.format ? UpdateaSessioninanILTModule_parameters.format : msg.payload;
                
                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_contentType;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_contentTypeType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.contentType = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.contentType = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.contentType = !!UpdateaSessioninanILTModule_parameters.contentType ? UpdateaSessioninanILTModule_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UpdateaSessioninanILTModule_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_courseId;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_courseIdType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.courseId = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.courseId = !!UpdateaSessioninanILTModule_parameters.courseId ? UpdateaSessioninanILTModule_parameters.courseId : msg.payload;
                
                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_moduleId;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_moduleIdType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.moduleId = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.moduleId = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.moduleId = !!UpdateaSessioninanILTModule_parameters.moduleId ? UpdateaSessioninanILTModule_parameters.moduleId : msg.payload;
                
                UpdateaSessioninanILTModule_nodeParam = node.UpdateaSessioninanILTModule_sessionId;
                UpdateaSessioninanILTModule_nodeParamType = node.UpdateaSessioninanILTModule_sessionIdType;
                if (UpdateaSessioninanILTModule_nodeParamType === 'str') {
                    UpdateaSessioninanILTModule_parameters.sessionId = UpdateaSessioninanILTModule_nodeParam || '';
                } else {
                    UpdateaSessioninanILTModule_parameters.sessionId = RED.util.getMessageProperty(msg, UpdateaSessioninanILTModule_nodeParam);
                }
                UpdateaSessioninanILTModule_parameters.sessionId = !!UpdateaSessioninanILTModule_parameters.sessionId ? UpdateaSessioninanILTModule_parameters.sessionId : msg.payload;
                                result = client.UpdateaSessioninanILTModule(UpdateaSessioninanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'DeleteaSessioninanILTModule') {
                var DeleteaSessioninanILTModule_parameters = [];
                var DeleteaSessioninanILTModule_nodeParam;
                var DeleteaSessioninanILTModule_nodeParamType;

                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_source;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_sourceType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.source = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.source = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.source = !!DeleteaSessioninanILTModule_parameters.source ? DeleteaSessioninanILTModule_parameters.source : msg.payload;
                
                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_format;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_formatType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.format = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.format = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.format = !!DeleteaSessioninanILTModule_parameters.format ? DeleteaSessioninanILTModule_parameters.format : msg.payload;
                
                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_apikey;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_apikeyType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.apikey = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.apikey = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.apikey = !!DeleteaSessioninanILTModule_parameters.apikey ? DeleteaSessioninanILTModule_parameters.apikey : msg.payload;
                
                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_courseId;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_courseIdType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.courseId = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.courseId = !!DeleteaSessioninanILTModule_parameters.courseId ? DeleteaSessioninanILTModule_parameters.courseId : msg.payload;
                
                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_moduleId;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_moduleIdType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.moduleId = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.moduleId = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.moduleId = !!DeleteaSessioninanILTModule_parameters.moduleId ? DeleteaSessioninanILTModule_parameters.moduleId : msg.payload;
                
                DeleteaSessioninanILTModule_nodeParam = node.DeleteaSessioninanILTModule_sessionId;
                DeleteaSessioninanILTModule_nodeParamType = node.DeleteaSessioninanILTModule_sessionIdType;
                if (DeleteaSessioninanILTModule_nodeParamType === 'str') {
                    DeleteaSessioninanILTModule_parameters.sessionId = DeleteaSessioninanILTModule_nodeParam || '';
                } else {
                    DeleteaSessioninanILTModule_parameters.sessionId = RED.util.getMessageProperty(msg, DeleteaSessioninanILTModule_nodeParam);
                }
                DeleteaSessioninanILTModule_parameters.sessionId = !!DeleteaSessioninanILTModule_parameters.sessionId ? DeleteaSessioninanILTModule_parameters.sessionId : msg.payload;
                                result = client.DeleteaSessioninanILTModule(DeleteaSessioninanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofAllInstructors') {
                var GetaListofAllInstructors_parameters = [];
                var GetaListofAllInstructors_nodeParam;
                var GetaListofAllInstructors_nodeParamType;

                GetaListofAllInstructors_nodeParam = node.GetaListofAllInstructors_source;
                GetaListofAllInstructors_nodeParamType = node.GetaListofAllInstructors_sourceType;
                if (GetaListofAllInstructors_nodeParamType === 'str') {
                    GetaListofAllInstructors_parameters.source = GetaListofAllInstructors_nodeParam || '';
                } else {
                    GetaListofAllInstructors_parameters.source = RED.util.getMessageProperty(msg, GetaListofAllInstructors_nodeParam);
                }
                GetaListofAllInstructors_parameters.source = !!GetaListofAllInstructors_parameters.source ? GetaListofAllInstructors_parameters.source : msg.payload;
                
                GetaListofAllInstructors_nodeParam = node.GetaListofAllInstructors_format;
                GetaListofAllInstructors_nodeParamType = node.GetaListofAllInstructors_formatType;
                if (GetaListofAllInstructors_nodeParamType === 'str') {
                    GetaListofAllInstructors_parameters.format = GetaListofAllInstructors_nodeParam || '';
                } else {
                    GetaListofAllInstructors_parameters.format = RED.util.getMessageProperty(msg, GetaListofAllInstructors_nodeParam);
                }
                GetaListofAllInstructors_parameters.format = !!GetaListofAllInstructors_parameters.format ? GetaListofAllInstructors_parameters.format : msg.payload;
                
                GetaListofAllInstructors_nodeParam = node.GetaListofAllInstructors_apikey;
                GetaListofAllInstructors_nodeParamType = node.GetaListofAllInstructors_apikeyType;
                if (GetaListofAllInstructors_nodeParamType === 'str') {
                    GetaListofAllInstructors_parameters.apikey = GetaListofAllInstructors_nodeParam || '';
                } else {
                    GetaListofAllInstructors_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofAllInstructors_nodeParam);
                }
                GetaListofAllInstructors_parameters.apikey = !!GetaListofAllInstructors_parameters.apikey ? GetaListofAllInstructors_parameters.apikey : msg.payload;
                                result = client.GetaListofAllInstructors(GetaListofAllInstructors_parameters);
            }
            if (!errorFlag && node.method === 'GetSessionRollCallforaSession') {
                var GetSessionRollCallforaSession_parameters = [];
                var GetSessionRollCallforaSession_nodeParam;
                var GetSessionRollCallforaSession_nodeParamType;

                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_source;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_sourceType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.source = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.source = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.source = !!GetSessionRollCallforaSession_parameters.source ? GetSessionRollCallforaSession_parameters.source : msg.payload;
                
                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_format;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_formatType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.format = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.format = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.format = !!GetSessionRollCallforaSession_parameters.format ? GetSessionRollCallforaSession_parameters.format : msg.payload;
                
                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_contentType;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_contentTypeType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.contentType = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.contentType = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.contentType = !!GetSessionRollCallforaSession_parameters.contentType ? GetSessionRollCallforaSession_parameters.contentType : msg.payload;
                
                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_courseId;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_courseIdType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.courseId = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.courseId = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.courseId = !!GetSessionRollCallforaSession_parameters.courseId ? GetSessionRollCallforaSession_parameters.courseId : msg.payload;
                
                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_moduleId;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_moduleIdType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.moduleId = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.moduleId = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.moduleId = !!GetSessionRollCallforaSession_parameters.moduleId ? GetSessionRollCallforaSession_parameters.moduleId : msg.payload;
                
                GetSessionRollCallforaSession_nodeParam = node.GetSessionRollCallforaSession_sessionId;
                GetSessionRollCallforaSession_nodeParamType = node.GetSessionRollCallforaSession_sessionIdType;
                if (GetSessionRollCallforaSession_nodeParamType === 'str') {
                    GetSessionRollCallforaSession_parameters.sessionId = GetSessionRollCallforaSession_nodeParam || '';
                } else {
                    GetSessionRollCallforaSession_parameters.sessionId = RED.util.getMessageProperty(msg, GetSessionRollCallforaSession_nodeParam);
                }
                GetSessionRollCallforaSession_parameters.sessionId = !!GetSessionRollCallforaSession_parameters.sessionId ? GetSessionRollCallforaSession_parameters.sessionId : msg.payload;
                                result = client.GetSessionRollCallforaSession(GetSessionRollCallforaSession_parameters);
            }
            if (!errorFlag && node.method === 'MarkanILTSessionCompleteandaddScore') {
                var MarkanILTSessionCompleteandaddScore_parameters = [];
                var MarkanILTSessionCompleteandaddScore_nodeParam;
                var MarkanILTSessionCompleteandaddScore_nodeParamType;

                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_source;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_sourceType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.source = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.source = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.source = !!MarkanILTSessionCompleteandaddScore_parameters.source ? MarkanILTSessionCompleteandaddScore_parameters.source : msg.payload;
                
                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_format;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_formatType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.format = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.format = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.format = !!MarkanILTSessionCompleteandaddScore_parameters.format ? MarkanILTSessionCompleteandaddScore_parameters.format : msg.payload;
                
                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_contentType;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_contentTypeType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.contentType = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.contentType = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.contentType = !!MarkanILTSessionCompleteandaddScore_parameters.contentType ? MarkanILTSessionCompleteandaddScore_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    MarkanILTSessionCompleteandaddScore_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_courseId;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_courseIdType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.courseId = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.courseId = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.courseId = !!MarkanILTSessionCompleteandaddScore_parameters.courseId ? MarkanILTSessionCompleteandaddScore_parameters.courseId : msg.payload;
                
                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_moduleId;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_moduleIdType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.moduleId = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.moduleId = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.moduleId = !!MarkanILTSessionCompleteandaddScore_parameters.moduleId ? MarkanILTSessionCompleteandaddScore_parameters.moduleId : msg.payload;
                
                MarkanILTSessionCompleteandaddScore_nodeParam = node.MarkanILTSessionCompleteandaddScore_sessionId;
                MarkanILTSessionCompleteandaddScore_nodeParamType = node.MarkanILTSessionCompleteandaddScore_sessionIdType;
                if (MarkanILTSessionCompleteandaddScore_nodeParamType === 'str') {
                    MarkanILTSessionCompleteandaddScore_parameters.sessionId = MarkanILTSessionCompleteandaddScore_nodeParam || '';
                } else {
                    MarkanILTSessionCompleteandaddScore_parameters.sessionId = RED.util.getMessageProperty(msg, MarkanILTSessionCompleteandaddScore_nodeParam);
                }
                MarkanILTSessionCompleteandaddScore_parameters.sessionId = !!MarkanILTSessionCompleteandaddScore_parameters.sessionId ? MarkanILTSessionCompleteandaddScore_parameters.sessionId : msg.payload;
                                result = client.MarkanILTSessionCompleteandaddScore(MarkanILTSessionCompleteandaddScore_parameters);
            }
            if (!errorFlag && node.method === 'GetalistofUsersRegisteredtoaSession') {
                var GetalistofUsersRegisteredtoaSession_parameters = [];
                var GetalistofUsersRegisteredtoaSession_nodeParam;
                var GetalistofUsersRegisteredtoaSession_nodeParamType;

                GetalistofUsersRegisteredtoaSession_nodeParam = node.GetalistofUsersRegisteredtoaSession_source;
                GetalistofUsersRegisteredtoaSession_nodeParamType = node.GetalistofUsersRegisteredtoaSession_sourceType;
                if (GetalistofUsersRegisteredtoaSession_nodeParamType === 'str') {
                    GetalistofUsersRegisteredtoaSession_parameters.source = GetalistofUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    GetalistofUsersRegisteredtoaSession_parameters.source = RED.util.getMessageProperty(msg, GetalistofUsersRegisteredtoaSession_nodeParam);
                }
                GetalistofUsersRegisteredtoaSession_parameters.source = !!GetalistofUsersRegisteredtoaSession_parameters.source ? GetalistofUsersRegisteredtoaSession_parameters.source : msg.payload;
                
                GetalistofUsersRegisteredtoaSession_nodeParam = node.GetalistofUsersRegisteredtoaSession_format;
                GetalistofUsersRegisteredtoaSession_nodeParamType = node.GetalistofUsersRegisteredtoaSession_formatType;
                if (GetalistofUsersRegisteredtoaSession_nodeParamType === 'str') {
                    GetalistofUsersRegisteredtoaSession_parameters.format = GetalistofUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    GetalistofUsersRegisteredtoaSession_parameters.format = RED.util.getMessageProperty(msg, GetalistofUsersRegisteredtoaSession_nodeParam);
                }
                GetalistofUsersRegisteredtoaSession_parameters.format = !!GetalistofUsersRegisteredtoaSession_parameters.format ? GetalistofUsersRegisteredtoaSession_parameters.format : msg.payload;
                
                GetalistofUsersRegisteredtoaSession_nodeParam = node.GetalistofUsersRegisteredtoaSession_contentType;
                GetalistofUsersRegisteredtoaSession_nodeParamType = node.GetalistofUsersRegisteredtoaSession_contentTypeType;
                if (GetalistofUsersRegisteredtoaSession_nodeParamType === 'str') {
                    GetalistofUsersRegisteredtoaSession_parameters.contentType = GetalistofUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    GetalistofUsersRegisteredtoaSession_parameters.contentType = RED.util.getMessageProperty(msg, GetalistofUsersRegisteredtoaSession_nodeParam);
                }
                GetalistofUsersRegisteredtoaSession_parameters.contentType = !!GetalistofUsersRegisteredtoaSession_parameters.contentType ? GetalistofUsersRegisteredtoaSession_parameters.contentType : msg.payload;
                
                GetalistofUsersRegisteredtoaSession_nodeParam = node.GetalistofUsersRegisteredtoaSession_courseId;
                GetalistofUsersRegisteredtoaSession_nodeParamType = node.GetalistofUsersRegisteredtoaSession_courseIdType;
                if (GetalistofUsersRegisteredtoaSession_nodeParamType === 'str') {
                    GetalistofUsersRegisteredtoaSession_parameters.courseId = GetalistofUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    GetalistofUsersRegisteredtoaSession_parameters.courseId = RED.util.getMessageProperty(msg, GetalistofUsersRegisteredtoaSession_nodeParam);
                }
                GetalistofUsersRegisteredtoaSession_parameters.courseId = !!GetalistofUsersRegisteredtoaSession_parameters.courseId ? GetalistofUsersRegisteredtoaSession_parameters.courseId : msg.payload;
                
                GetalistofUsersRegisteredtoaSession_nodeParam = node.GetalistofUsersRegisteredtoaSession_moduleId;
                GetalistofUsersRegisteredtoaSession_nodeParamType = node.GetalistofUsersRegisteredtoaSession_moduleIdType;
                if (GetalistofUsersRegisteredtoaSession_nodeParamType === 'str') {
                    GetalistofUsersRegisteredtoaSession_parameters.moduleId = GetalistofUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    GetalistofUsersRegisteredtoaSession_parameters.moduleId = RED.util.getMessageProperty(msg, GetalistofUsersRegisteredtoaSession_nodeParam);
                }
                GetalistofUsersRegisteredtoaSession_parameters.moduleId = !!GetalistofUsersRegisteredtoaSession_parameters.moduleId ? GetalistofUsersRegisteredtoaSession_parameters.moduleId : msg.payload;
                                result = client.GetalistofUsersRegisteredtoaSession(GetalistofUsersRegisteredtoaSession_parameters);
            }
            if (!errorFlag && node.method === 'GetuserAttendanceforaSession') {
                var GetuserAttendanceforaSession_parameters = [];
                var GetuserAttendanceforaSession_nodeParam;
                var GetuserAttendanceforaSession_nodeParamType;

                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_source;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_sourceType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.source = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.source = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.source = !!GetuserAttendanceforaSession_parameters.source ? GetuserAttendanceforaSession_parameters.source : msg.payload;
                
                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_format;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_formatType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.format = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.format = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.format = !!GetuserAttendanceforaSession_parameters.format ? GetuserAttendanceforaSession_parameters.format : msg.payload;
                
                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_contentType;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_contentTypeType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.contentType = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.contentType = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.contentType = !!GetuserAttendanceforaSession_parameters.contentType ? GetuserAttendanceforaSession_parameters.contentType : msg.payload;
                
                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_courseId;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_courseIdType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.courseId = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.courseId = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.courseId = !!GetuserAttendanceforaSession_parameters.courseId ? GetuserAttendanceforaSession_parameters.courseId : msg.payload;
                
                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_moduleId;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_moduleIdType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.moduleId = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.moduleId = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.moduleId = !!GetuserAttendanceforaSession_parameters.moduleId ? GetuserAttendanceforaSession_parameters.moduleId : msg.payload;
                
                GetuserAttendanceforaSession_nodeParam = node.GetuserAttendanceforaSession_sessionId;
                GetuserAttendanceforaSession_nodeParamType = node.GetuserAttendanceforaSession_sessionIdType;
                if (GetuserAttendanceforaSession_nodeParamType === 'str') {
                    GetuserAttendanceforaSession_parameters.sessionId = GetuserAttendanceforaSession_nodeParam || '';
                } else {
                    GetuserAttendanceforaSession_parameters.sessionId = RED.util.getMessageProperty(msg, GetuserAttendanceforaSession_nodeParam);
                }
                GetuserAttendanceforaSession_parameters.sessionId = !!GetuserAttendanceforaSession_parameters.sessionId ? GetuserAttendanceforaSession_parameters.sessionId : msg.payload;
                                result = client.GetuserAttendanceforaSession(GetuserAttendanceforaSession_parameters);
            }
            if (!errorFlag && node.method === 'MarkAttendanceforUsersRegisteredtoaSession') {
                var MarkAttendanceforUsersRegisteredtoaSession_parameters = [];
                var MarkAttendanceforUsersRegisteredtoaSession_nodeParam;
                var MarkAttendanceforUsersRegisteredtoaSession_nodeParamType;

                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_source;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_sourceType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.source = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.source = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.source = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.source ? MarkAttendanceforUsersRegisteredtoaSession_parameters.source : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_apikey;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_apikeyType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.apikey = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.apikey = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.apikey = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.apikey ? MarkAttendanceforUsersRegisteredtoaSession_parameters.apikey : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_courseId;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_courseIdType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.courseId = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.courseId = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.courseId = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.courseId ? MarkAttendanceforUsersRegisteredtoaSession_parameters.courseId : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_moduleId;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_moduleIdType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.moduleId = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.moduleId = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.moduleId = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.moduleId ? MarkAttendanceforUsersRegisteredtoaSession_parameters.moduleId : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_sessionDayId;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_sessionDayIdType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.sessionDayId = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.sessionDayId = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.sessionDayId = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.sessionDayId ? MarkAttendanceforUsersRegisteredtoaSession_parameters.sessionDayId : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_userId;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_userIdType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.userId = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.userId = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.userId = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.userId ? MarkAttendanceforUsersRegisteredtoaSession_parameters.userId : msg.payload;
                
                MarkAttendanceforUsersRegisteredtoaSession_nodeParam = node.MarkAttendanceforUsersRegisteredtoaSession_attended;
                MarkAttendanceforUsersRegisteredtoaSession_nodeParamType = node.MarkAttendanceforUsersRegisteredtoaSession_attendedType;
                if (MarkAttendanceforUsersRegisteredtoaSession_nodeParamType === 'str') {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.attended = MarkAttendanceforUsersRegisteredtoaSession_nodeParam || '';
                } else {
                    MarkAttendanceforUsersRegisteredtoaSession_parameters.attended = RED.util.getMessageProperty(msg, MarkAttendanceforUsersRegisteredtoaSession_nodeParam);
                }
                MarkAttendanceforUsersRegisteredtoaSession_parameters.attended = !!MarkAttendanceforUsersRegisteredtoaSession_parameters.attended ? MarkAttendanceforUsersRegisteredtoaSession_parameters.attended : msg.payload;
                                result = client.MarkAttendanceforUsersRegisteredtoaSession(MarkAttendanceforUsersRegisteredtoaSession_parameters);
            }
            if (!errorFlag && node.method === 'GetaListofSessionsforaSpecificInstructor') {
                var GetaListofSessionsforaSpecificInstructor_parameters = [];
                var GetaListofSessionsforaSpecificInstructor_nodeParam;
                var GetaListofSessionsforaSpecificInstructor_nodeParamType;

                GetaListofSessionsforaSpecificInstructor_nodeParam = node.GetaListofSessionsforaSpecificInstructor_source;
                GetaListofSessionsforaSpecificInstructor_nodeParamType = node.GetaListofSessionsforaSpecificInstructor_sourceType;
                if (GetaListofSessionsforaSpecificInstructor_nodeParamType === 'str') {
                    GetaListofSessionsforaSpecificInstructor_parameters.source = GetaListofSessionsforaSpecificInstructor_nodeParam || '';
                } else {
                    GetaListofSessionsforaSpecificInstructor_parameters.source = RED.util.getMessageProperty(msg, GetaListofSessionsforaSpecificInstructor_nodeParam);
                }
                GetaListofSessionsforaSpecificInstructor_parameters.source = !!GetaListofSessionsforaSpecificInstructor_parameters.source ? GetaListofSessionsforaSpecificInstructor_parameters.source : msg.payload;
                
                GetaListofSessionsforaSpecificInstructor_nodeParam = node.GetaListofSessionsforaSpecificInstructor_format;
                GetaListofSessionsforaSpecificInstructor_nodeParamType = node.GetaListofSessionsforaSpecificInstructor_formatType;
                if (GetaListofSessionsforaSpecificInstructor_nodeParamType === 'str') {
                    GetaListofSessionsforaSpecificInstructor_parameters.format = GetaListofSessionsforaSpecificInstructor_nodeParam || '';
                } else {
                    GetaListofSessionsforaSpecificInstructor_parameters.format = RED.util.getMessageProperty(msg, GetaListofSessionsforaSpecificInstructor_nodeParam);
                }
                GetaListofSessionsforaSpecificInstructor_parameters.format = !!GetaListofSessionsforaSpecificInstructor_parameters.format ? GetaListofSessionsforaSpecificInstructor_parameters.format : msg.payload;
                
                GetaListofSessionsforaSpecificInstructor_nodeParam = node.GetaListofSessionsforaSpecificInstructor_apikey;
                GetaListofSessionsforaSpecificInstructor_nodeParamType = node.GetaListofSessionsforaSpecificInstructor_apikeyType;
                if (GetaListofSessionsforaSpecificInstructor_nodeParamType === 'str') {
                    GetaListofSessionsforaSpecificInstructor_parameters.apikey = GetaListofSessionsforaSpecificInstructor_nodeParam || '';
                } else {
                    GetaListofSessionsforaSpecificInstructor_parameters.apikey = RED.util.getMessageProperty(msg, GetaListofSessionsforaSpecificInstructor_nodeParam);
                }
                GetaListofSessionsforaSpecificInstructor_parameters.apikey = !!GetaListofSessionsforaSpecificInstructor_parameters.apikey ? GetaListofSessionsforaSpecificInstructor_parameters.apikey : msg.payload;
                
                GetaListofSessionsforaSpecificInstructor_nodeParam = node.GetaListofSessionsforaSpecificInstructor_instructorId;
                GetaListofSessionsforaSpecificInstructor_nodeParamType = node.GetaListofSessionsforaSpecificInstructor_instructorIdType;
                if (GetaListofSessionsforaSpecificInstructor_nodeParamType === 'str') {
                    GetaListofSessionsforaSpecificInstructor_parameters.instructorId = GetaListofSessionsforaSpecificInstructor_nodeParam || '';
                } else {
                    GetaListofSessionsforaSpecificInstructor_parameters.instructorId = RED.util.getMessageProperty(msg, GetaListofSessionsforaSpecificInstructor_nodeParam);
                }
                GetaListofSessionsforaSpecificInstructor_parameters.instructorId = !!GetaListofSessionsforaSpecificInstructor_parameters.instructorId ? GetaListofSessionsforaSpecificInstructor_parameters.instructorId : msg.payload;
                                result = client.GetaListofSessionsforaSpecificInstructor(GetaListofSessionsforaSpecificInstructor_parameters);
            }
            if (!errorFlag && node.method === 'RegisteraUsertoaSession') {
                var RegisteraUsertoaSession_parameters = [];
                var RegisteraUsertoaSession_nodeParam;
                var RegisteraUsertoaSession_nodeParamType;

                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_source;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_sourceType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.source = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.source = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.source = !!RegisteraUsertoaSession_parameters.source ? RegisteraUsertoaSession_parameters.source : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_format;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_formatType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.format = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.format = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.format = !!RegisteraUsertoaSession_parameters.format ? RegisteraUsertoaSession_parameters.format : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_apikey;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_apikeyType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.apikey = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.apikey = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.apikey = !!RegisteraUsertoaSession_parameters.apikey ? RegisteraUsertoaSession_parameters.apikey : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_courseId;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_courseIdType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.courseId = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.courseId = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.courseId = !!RegisteraUsertoaSession_parameters.courseId ? RegisteraUsertoaSession_parameters.courseId : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_moduleId;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_moduleIdType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.moduleId = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.moduleId = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.moduleId = !!RegisteraUsertoaSession_parameters.moduleId ? RegisteraUsertoaSession_parameters.moduleId : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_sessionId;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_sessionIdType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.sessionId = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.sessionId = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.sessionId = !!RegisteraUsertoaSession_parameters.sessionId ? RegisteraUsertoaSession_parameters.sessionId : msg.payload;
                
                RegisteraUsertoaSession_nodeParam = node.RegisteraUsertoaSession_userId;
                RegisteraUsertoaSession_nodeParamType = node.RegisteraUsertoaSession_userIdType;
                if (RegisteraUsertoaSession_nodeParamType === 'str') {
                    RegisteraUsertoaSession_parameters.userId = RegisteraUsertoaSession_nodeParam || '';
                } else {
                    RegisteraUsertoaSession_parameters.userId = RED.util.getMessageProperty(msg, RegisteraUsertoaSession_nodeParam);
                }
                RegisteraUsertoaSession_parameters.userId = !!RegisteraUsertoaSession_parameters.userId ? RegisteraUsertoaSession_parameters.userId : msg.payload;
                                result = client.RegisteraUsertoaSession(RegisteraUsertoaSession_parameters);
            }
            if (!errorFlag && node.method === 'CreateanILTModuleinaCourse') {
                var CreateanILTModuleinaCourse_parameters = [];
                var CreateanILTModuleinaCourse_nodeParam;
                var CreateanILTModuleinaCourse_nodeParamType;

                CreateanILTModuleinaCourse_nodeParam = node.CreateanILTModuleinaCourse_source;
                CreateanILTModuleinaCourse_nodeParamType = node.CreateanILTModuleinaCourse_sourceType;
                if (CreateanILTModuleinaCourse_nodeParamType === 'str') {
                    CreateanILTModuleinaCourse_parameters.source = CreateanILTModuleinaCourse_nodeParam || '';
                } else {
                    CreateanILTModuleinaCourse_parameters.source = RED.util.getMessageProperty(msg, CreateanILTModuleinaCourse_nodeParam);
                }
                CreateanILTModuleinaCourse_parameters.source = !!CreateanILTModuleinaCourse_parameters.source ? CreateanILTModuleinaCourse_parameters.source : msg.payload;
                
                CreateanILTModuleinaCourse_nodeParam = node.CreateanILTModuleinaCourse_format;
                CreateanILTModuleinaCourse_nodeParamType = node.CreateanILTModuleinaCourse_formatType;
                if (CreateanILTModuleinaCourse_nodeParamType === 'str') {
                    CreateanILTModuleinaCourse_parameters.format = CreateanILTModuleinaCourse_nodeParam || '';
                } else {
                    CreateanILTModuleinaCourse_parameters.format = RED.util.getMessageProperty(msg, CreateanILTModuleinaCourse_nodeParam);
                }
                CreateanILTModuleinaCourse_parameters.format = !!CreateanILTModuleinaCourse_parameters.format ? CreateanILTModuleinaCourse_parameters.format : msg.payload;
                
                CreateanILTModuleinaCourse_nodeParam = node.CreateanILTModuleinaCourse_contentType;
                CreateanILTModuleinaCourse_nodeParamType = node.CreateanILTModuleinaCourse_contentTypeType;
                if (CreateanILTModuleinaCourse_nodeParamType === 'str') {
                    CreateanILTModuleinaCourse_parameters.contentType = CreateanILTModuleinaCourse_nodeParam || '';
                } else {
                    CreateanILTModuleinaCourse_parameters.contentType = RED.util.getMessageProperty(msg, CreateanILTModuleinaCourse_nodeParam);
                }
                CreateanILTModuleinaCourse_parameters.contentType = !!CreateanILTModuleinaCourse_parameters.contentType ? CreateanILTModuleinaCourse_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    CreateanILTModuleinaCourse_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                CreateanILTModuleinaCourse_nodeParam = node.CreateanILTModuleinaCourse_courseId;
                CreateanILTModuleinaCourse_nodeParamType = node.CreateanILTModuleinaCourse_courseIdType;
                if (CreateanILTModuleinaCourse_nodeParamType === 'str') {
                    CreateanILTModuleinaCourse_parameters.courseId = CreateanILTModuleinaCourse_nodeParam || '';
                } else {
                    CreateanILTModuleinaCourse_parameters.courseId = RED.util.getMessageProperty(msg, CreateanILTModuleinaCourse_nodeParam);
                }
                CreateanILTModuleinaCourse_parameters.courseId = !!CreateanILTModuleinaCourse_parameters.courseId ? CreateanILTModuleinaCourse_parameters.courseId : msg.payload;
                                result = client.CreateanILTModuleinaCourse(CreateanILTModuleinaCourse_parameters);
            }
            if (!errorFlag && node.method === 'UpdateanILTModule') {
                var UpdateanILTModule_parameters = [];
                var UpdateanILTModule_nodeParam;
                var UpdateanILTModule_nodeParamType;

                UpdateanILTModule_nodeParam = node.UpdateanILTModule_source;
                UpdateanILTModule_nodeParamType = node.UpdateanILTModule_sourceType;
                if (UpdateanILTModule_nodeParamType === 'str') {
                    UpdateanILTModule_parameters.source = UpdateanILTModule_nodeParam || '';
                } else {
                    UpdateanILTModule_parameters.source = RED.util.getMessageProperty(msg, UpdateanILTModule_nodeParam);
                }
                UpdateanILTModule_parameters.source = !!UpdateanILTModule_parameters.source ? UpdateanILTModule_parameters.source : msg.payload;
                
                UpdateanILTModule_nodeParam = node.UpdateanILTModule_format;
                UpdateanILTModule_nodeParamType = node.UpdateanILTModule_formatType;
                if (UpdateanILTModule_nodeParamType === 'str') {
                    UpdateanILTModule_parameters.format = UpdateanILTModule_nodeParam || '';
                } else {
                    UpdateanILTModule_parameters.format = RED.util.getMessageProperty(msg, UpdateanILTModule_nodeParam);
                }
                UpdateanILTModule_parameters.format = !!UpdateanILTModule_parameters.format ? UpdateanILTModule_parameters.format : msg.payload;
                
                UpdateanILTModule_nodeParam = node.UpdateanILTModule_contentType;
                UpdateanILTModule_nodeParamType = node.UpdateanILTModule_contentTypeType;
                if (UpdateanILTModule_nodeParamType === 'str') {
                    UpdateanILTModule_parameters.contentType = UpdateanILTModule_nodeParam || '';
                } else {
                    UpdateanILTModule_parameters.contentType = RED.util.getMessageProperty(msg, UpdateanILTModule_nodeParam);
                }
                UpdateanILTModule_parameters.contentType = !!UpdateanILTModule_parameters.contentType ? UpdateanILTModule_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UpdateanILTModule_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateanILTModule_nodeParam = node.UpdateanILTModule_courseId;
                UpdateanILTModule_nodeParamType = node.UpdateanILTModule_courseIdType;
                if (UpdateanILTModule_nodeParamType === 'str') {
                    UpdateanILTModule_parameters.courseId = UpdateanILTModule_nodeParam || '';
                } else {
                    UpdateanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, UpdateanILTModule_nodeParam);
                }
                UpdateanILTModule_parameters.courseId = !!UpdateanILTModule_parameters.courseId ? UpdateanILTModule_parameters.courseId : msg.payload;
                
                UpdateanILTModule_nodeParam = node.UpdateanILTModule_eventId;
                UpdateanILTModule_nodeParamType = node.UpdateanILTModule_eventIdType;
                if (UpdateanILTModule_nodeParamType === 'str') {
                    UpdateanILTModule_parameters.eventId = UpdateanILTModule_nodeParam || '';
                } else {
                    UpdateanILTModule_parameters.eventId = RED.util.getMessageProperty(msg, UpdateanILTModule_nodeParam);
                }
                UpdateanILTModule_parameters.eventId = !!UpdateanILTModule_parameters.eventId ? UpdateanILTModule_parameters.eventId : msg.payload;
                                result = client.UpdateanILTModule(UpdateanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'DeleteanILTModule') {
                var DeleteanILTModule_parameters = [];
                var DeleteanILTModule_nodeParam;
                var DeleteanILTModule_nodeParamType;

                DeleteanILTModule_nodeParam = node.DeleteanILTModule_source;
                DeleteanILTModule_nodeParamType = node.DeleteanILTModule_sourceType;
                if (DeleteanILTModule_nodeParamType === 'str') {
                    DeleteanILTModule_parameters.source = DeleteanILTModule_nodeParam || '';
                } else {
                    DeleteanILTModule_parameters.source = RED.util.getMessageProperty(msg, DeleteanILTModule_nodeParam);
                }
                DeleteanILTModule_parameters.source = !!DeleteanILTModule_parameters.source ? DeleteanILTModule_parameters.source : msg.payload;
                
                DeleteanILTModule_nodeParam = node.DeleteanILTModule_apikey;
                DeleteanILTModule_nodeParamType = node.DeleteanILTModule_apikeyType;
                if (DeleteanILTModule_nodeParamType === 'str') {
                    DeleteanILTModule_parameters.apikey = DeleteanILTModule_nodeParam || '';
                } else {
                    DeleteanILTModule_parameters.apikey = RED.util.getMessageProperty(msg, DeleteanILTModule_nodeParam);
                }
                DeleteanILTModule_parameters.apikey = !!DeleteanILTModule_parameters.apikey ? DeleteanILTModule_parameters.apikey : msg.payload;
                
                DeleteanILTModule_nodeParam = node.DeleteanILTModule_courseId;
                DeleteanILTModule_nodeParamType = node.DeleteanILTModule_courseIdType;
                if (DeleteanILTModule_nodeParamType === 'str') {
                    DeleteanILTModule_parameters.courseId = DeleteanILTModule_nodeParam || '';
                } else {
                    DeleteanILTModule_parameters.courseId = RED.util.getMessageProperty(msg, DeleteanILTModule_nodeParam);
                }
                DeleteanILTModule_parameters.courseId = !!DeleteanILTModule_parameters.courseId ? DeleteanILTModule_parameters.courseId : msg.payload;
                
                DeleteanILTModule_nodeParam = node.DeleteanILTModule_eventId;
                DeleteanILTModule_nodeParamType = node.DeleteanILTModule_eventIdType;
                if (DeleteanILTModule_nodeParamType === 'str') {
                    DeleteanILTModule_parameters.eventId = DeleteanILTModule_nodeParam || '';
                } else {
                    DeleteanILTModule_parameters.eventId = RED.util.getMessageProperty(msg, DeleteanILTModule_nodeParam);
                }
                DeleteanILTModule_parameters.eventId = !!DeleteanILTModule_parameters.eventId ? DeleteanILTModule_parameters.eventId : msg.payload;
                                result = client.DeleteanILTModule(DeleteanILTModule_parameters);
            }
            if (!errorFlag && node.method === 'GetAchievements') {
                var GetAchievements_parameters = [];
                var GetAchievements_nodeParam;
                var GetAchievements_nodeParamType;

                GetAchievements_nodeParam = node.GetAchievements_source;
                GetAchievements_nodeParamType = node.GetAchievements_sourceType;
                if (GetAchievements_nodeParamType === 'str') {
                    GetAchievements_parameters.source = GetAchievements_nodeParam || '';
                } else {
                    GetAchievements_parameters.source = RED.util.getMessageProperty(msg, GetAchievements_nodeParam);
                }
                GetAchievements_parameters.source = !!GetAchievements_parameters.source ? GetAchievements_parameters.source : msg.payload;
                
                GetAchievements_nodeParam = node.GetAchievements_format;
                GetAchievements_nodeParamType = node.GetAchievements_formatType;
                if (GetAchievements_nodeParamType === 'str') {
                    GetAchievements_parameters.format = GetAchievements_nodeParam || '';
                } else {
                    GetAchievements_parameters.format = RED.util.getMessageProperty(msg, GetAchievements_nodeParam);
                }
                GetAchievements_parameters.format = !!GetAchievements_parameters.format ? GetAchievements_parameters.format : msg.payload;
                
                GetAchievements_nodeParam = node.GetAchievements_apikey;
                GetAchievements_nodeParamType = node.GetAchievements_apikeyType;
                if (GetAchievements_nodeParamType === 'str') {
                    GetAchievements_parameters.apikey = GetAchievements_nodeParam || '';
                } else {
                    GetAchievements_parameters.apikey = RED.util.getMessageProperty(msg, GetAchievements_nodeParam);
                }
                GetAchievements_parameters.apikey = !!GetAchievements_parameters.apikey ? GetAchievements_parameters.apikey : msg.payload;
                                result = client.GetAchievements(GetAchievements_parameters);
            }
            if (!errorFlag && node.method === 'GetTotalBadgesandPointsForUser') {
                var GetTotalBadgesandPointsForUser_parameters = [];
                var GetTotalBadgesandPointsForUser_nodeParam;
                var GetTotalBadgesandPointsForUser_nodeParamType;

                GetTotalBadgesandPointsForUser_nodeParam = node.GetTotalBadgesandPointsForUser_source;
                GetTotalBadgesandPointsForUser_nodeParamType = node.GetTotalBadgesandPointsForUser_sourceType;
                if (GetTotalBadgesandPointsForUser_nodeParamType === 'str') {
                    GetTotalBadgesandPointsForUser_parameters.source = GetTotalBadgesandPointsForUser_nodeParam || '';
                } else {
                    GetTotalBadgesandPointsForUser_parameters.source = RED.util.getMessageProperty(msg, GetTotalBadgesandPointsForUser_nodeParam);
                }
                GetTotalBadgesandPointsForUser_parameters.source = !!GetTotalBadgesandPointsForUser_parameters.source ? GetTotalBadgesandPointsForUser_parameters.source : msg.payload;
                
                GetTotalBadgesandPointsForUser_nodeParam = node.GetTotalBadgesandPointsForUser_format;
                GetTotalBadgesandPointsForUser_nodeParamType = node.GetTotalBadgesandPointsForUser_formatType;
                if (GetTotalBadgesandPointsForUser_nodeParamType === 'str') {
                    GetTotalBadgesandPointsForUser_parameters.format = GetTotalBadgesandPointsForUser_nodeParam || '';
                } else {
                    GetTotalBadgesandPointsForUser_parameters.format = RED.util.getMessageProperty(msg, GetTotalBadgesandPointsForUser_nodeParam);
                }
                GetTotalBadgesandPointsForUser_parameters.format = !!GetTotalBadgesandPointsForUser_parameters.format ? GetTotalBadgesandPointsForUser_parameters.format : msg.payload;
                
                GetTotalBadgesandPointsForUser_nodeParam = node.GetTotalBadgesandPointsForUser_apikey;
                GetTotalBadgesandPointsForUser_nodeParamType = node.GetTotalBadgesandPointsForUser_apikeyType;
                if (GetTotalBadgesandPointsForUser_nodeParamType === 'str') {
                    GetTotalBadgesandPointsForUser_parameters.apikey = GetTotalBadgesandPointsForUser_nodeParam || '';
                } else {
                    GetTotalBadgesandPointsForUser_parameters.apikey = RED.util.getMessageProperty(msg, GetTotalBadgesandPointsForUser_nodeParam);
                }
                GetTotalBadgesandPointsForUser_parameters.apikey = !!GetTotalBadgesandPointsForUser_parameters.apikey ? GetTotalBadgesandPointsForUser_parameters.apikey : msg.payload;
                
                GetTotalBadgesandPointsForUser_nodeParam = node.GetTotalBadgesandPointsForUser_userId;
                GetTotalBadgesandPointsForUser_nodeParamType = node.GetTotalBadgesandPointsForUser_userIdType;
                if (GetTotalBadgesandPointsForUser_nodeParamType === 'str') {
                    GetTotalBadgesandPointsForUser_parameters.userId = GetTotalBadgesandPointsForUser_nodeParam || '';
                } else {
                    GetTotalBadgesandPointsForUser_parameters.userId = RED.util.getMessageProperty(msg, GetTotalBadgesandPointsForUser_nodeParam);
                }
                GetTotalBadgesandPointsForUser_parameters.userId = !!GetTotalBadgesandPointsForUser_parameters.userId ? GetTotalBadgesandPointsForUser_parameters.userId : msg.payload;
                                result = client.GetTotalBadgesandPointsForUser(GetTotalBadgesandPointsForUser_parameters);
            }
            if (!errorFlag && node.method === 'GetBadgesandPointsEarnedByUser') {
                var GetBadgesandPointsEarnedByUser_parameters = [];
                var GetBadgesandPointsEarnedByUser_nodeParam;
                var GetBadgesandPointsEarnedByUser_nodeParamType;

                GetBadgesandPointsEarnedByUser_nodeParam = node.GetBadgesandPointsEarnedByUser_source;
                GetBadgesandPointsEarnedByUser_nodeParamType = node.GetBadgesandPointsEarnedByUser_sourceType;
                if (GetBadgesandPointsEarnedByUser_nodeParamType === 'str') {
                    GetBadgesandPointsEarnedByUser_parameters.source = GetBadgesandPointsEarnedByUser_nodeParam || '';
                } else {
                    GetBadgesandPointsEarnedByUser_parameters.source = RED.util.getMessageProperty(msg, GetBadgesandPointsEarnedByUser_nodeParam);
                }
                GetBadgesandPointsEarnedByUser_parameters.source = !!GetBadgesandPointsEarnedByUser_parameters.source ? GetBadgesandPointsEarnedByUser_parameters.source : msg.payload;
                
                GetBadgesandPointsEarnedByUser_nodeParam = node.GetBadgesandPointsEarnedByUser_format;
                GetBadgesandPointsEarnedByUser_nodeParamType = node.GetBadgesandPointsEarnedByUser_formatType;
                if (GetBadgesandPointsEarnedByUser_nodeParamType === 'str') {
                    GetBadgesandPointsEarnedByUser_parameters.format = GetBadgesandPointsEarnedByUser_nodeParam || '';
                } else {
                    GetBadgesandPointsEarnedByUser_parameters.format = RED.util.getMessageProperty(msg, GetBadgesandPointsEarnedByUser_nodeParam);
                }
                GetBadgesandPointsEarnedByUser_parameters.format = !!GetBadgesandPointsEarnedByUser_parameters.format ? GetBadgesandPointsEarnedByUser_parameters.format : msg.payload;
                
                GetBadgesandPointsEarnedByUser_nodeParam = node.GetBadgesandPointsEarnedByUser_apikey;
                GetBadgesandPointsEarnedByUser_nodeParamType = node.GetBadgesandPointsEarnedByUser_apikeyType;
                if (GetBadgesandPointsEarnedByUser_nodeParamType === 'str') {
                    GetBadgesandPointsEarnedByUser_parameters.apikey = GetBadgesandPointsEarnedByUser_nodeParam || '';
                } else {
                    GetBadgesandPointsEarnedByUser_parameters.apikey = RED.util.getMessageProperty(msg, GetBadgesandPointsEarnedByUser_nodeParam);
                }
                GetBadgesandPointsEarnedByUser_parameters.apikey = !!GetBadgesandPointsEarnedByUser_parameters.apikey ? GetBadgesandPointsEarnedByUser_parameters.apikey : msg.payload;
                
                GetBadgesandPointsEarnedByUser_nodeParam = node.GetBadgesandPointsEarnedByUser_userId;
                GetBadgesandPointsEarnedByUser_nodeParamType = node.GetBadgesandPointsEarnedByUser_userIdType;
                if (GetBadgesandPointsEarnedByUser_nodeParamType === 'str') {
                    GetBadgesandPointsEarnedByUser_parameters.userId = GetBadgesandPointsEarnedByUser_nodeParam || '';
                } else {
                    GetBadgesandPointsEarnedByUser_parameters.userId = RED.util.getMessageProperty(msg, GetBadgesandPointsEarnedByUser_nodeParam);
                }
                GetBadgesandPointsEarnedByUser_parameters.userId = !!GetBadgesandPointsEarnedByUser_parameters.userId ? GetBadgesandPointsEarnedByUser_parameters.userId : msg.payload;
                                result = client.GetBadgesandPointsEarnedByUser(GetBadgesandPointsEarnedByUser_parameters);
            }
            if (!errorFlag && node.method === 'GetBadgesandPointsearnedbyaTeam') {
                var GetBadgesandPointsearnedbyaTeam_parameters = [];
                var GetBadgesandPointsearnedbyaTeam_nodeParam;
                var GetBadgesandPointsearnedbyaTeam_nodeParamType;

                GetBadgesandPointsearnedbyaTeam_nodeParam = node.GetBadgesandPointsearnedbyaTeam_source;
                GetBadgesandPointsearnedbyaTeam_nodeParamType = node.GetBadgesandPointsearnedbyaTeam_sourceType;
                if (GetBadgesandPointsearnedbyaTeam_nodeParamType === 'str') {
                    GetBadgesandPointsearnedbyaTeam_parameters.source = GetBadgesandPointsearnedbyaTeam_nodeParam || '';
                } else {
                    GetBadgesandPointsearnedbyaTeam_parameters.source = RED.util.getMessageProperty(msg, GetBadgesandPointsearnedbyaTeam_nodeParam);
                }
                GetBadgesandPointsearnedbyaTeam_parameters.source = !!GetBadgesandPointsearnedbyaTeam_parameters.source ? GetBadgesandPointsearnedbyaTeam_parameters.source : msg.payload;
                
                GetBadgesandPointsearnedbyaTeam_nodeParam = node.GetBadgesandPointsearnedbyaTeam_format;
                GetBadgesandPointsearnedbyaTeam_nodeParamType = node.GetBadgesandPointsearnedbyaTeam_formatType;
                if (GetBadgesandPointsearnedbyaTeam_nodeParamType === 'str') {
                    GetBadgesandPointsearnedbyaTeam_parameters.format = GetBadgesandPointsearnedbyaTeam_nodeParam || '';
                } else {
                    GetBadgesandPointsearnedbyaTeam_parameters.format = RED.util.getMessageProperty(msg, GetBadgesandPointsearnedbyaTeam_nodeParam);
                }
                GetBadgesandPointsearnedbyaTeam_parameters.format = !!GetBadgesandPointsearnedbyaTeam_parameters.format ? GetBadgesandPointsearnedbyaTeam_parameters.format : msg.payload;
                
                GetBadgesandPointsearnedbyaTeam_nodeParam = node.GetBadgesandPointsearnedbyaTeam_apikey;
                GetBadgesandPointsearnedbyaTeam_nodeParamType = node.GetBadgesandPointsearnedbyaTeam_apikeyType;
                if (GetBadgesandPointsearnedbyaTeam_nodeParamType === 'str') {
                    GetBadgesandPointsearnedbyaTeam_parameters.apikey = GetBadgesandPointsearnedbyaTeam_nodeParam || '';
                } else {
                    GetBadgesandPointsearnedbyaTeam_parameters.apikey = RED.util.getMessageProperty(msg, GetBadgesandPointsearnedbyaTeam_nodeParam);
                }
                GetBadgesandPointsearnedbyaTeam_parameters.apikey = !!GetBadgesandPointsearnedbyaTeam_parameters.apikey ? GetBadgesandPointsearnedbyaTeam_parameters.apikey : msg.payload;
                
                GetBadgesandPointsearnedbyaTeam_nodeParam = node.GetBadgesandPointsearnedbyaTeam_teamId;
                GetBadgesandPointsearnedbyaTeam_nodeParamType = node.GetBadgesandPointsearnedbyaTeam_teamIdType;
                if (GetBadgesandPointsearnedbyaTeam_nodeParamType === 'str') {
                    GetBadgesandPointsearnedbyaTeam_parameters.teamId = GetBadgesandPointsearnedbyaTeam_nodeParam || '';
                } else {
                    GetBadgesandPointsearnedbyaTeam_parameters.teamId = RED.util.getMessageProperty(msg, GetBadgesandPointsearnedbyaTeam_nodeParam);
                }
                GetBadgesandPointsearnedbyaTeam_parameters.teamId = !!GetBadgesandPointsearnedbyaTeam_parameters.teamId ? GetBadgesandPointsearnedbyaTeam_parameters.teamId : msg.payload;
                                result = client.GetBadgesandPointsearnedbyaTeam(GetBadgesandPointsearnedbyaTeam_parameters);
            }
            if (!errorFlag && node.method === 'ResetBadgesandPointsForaUser') {
                var ResetBadgesandPointsForaUser_parameters = [];
                var ResetBadgesandPointsForaUser_nodeParam;
                var ResetBadgesandPointsForaUser_nodeParamType;

                ResetBadgesandPointsForaUser_nodeParam = node.ResetBadgesandPointsForaUser_source;
                ResetBadgesandPointsForaUser_nodeParamType = node.ResetBadgesandPointsForaUser_sourceType;
                if (ResetBadgesandPointsForaUser_nodeParamType === 'str') {
                    ResetBadgesandPointsForaUser_parameters.source = ResetBadgesandPointsForaUser_nodeParam || '';
                } else {
                    ResetBadgesandPointsForaUser_parameters.source = RED.util.getMessageProperty(msg, ResetBadgesandPointsForaUser_nodeParam);
                }
                ResetBadgesandPointsForaUser_parameters.source = !!ResetBadgesandPointsForaUser_parameters.source ? ResetBadgesandPointsForaUser_parameters.source : msg.payload;
                
                ResetBadgesandPointsForaUser_nodeParam = node.ResetBadgesandPointsForaUser_format;
                ResetBadgesandPointsForaUser_nodeParamType = node.ResetBadgesandPointsForaUser_formatType;
                if (ResetBadgesandPointsForaUser_nodeParamType === 'str') {
                    ResetBadgesandPointsForaUser_parameters.format = ResetBadgesandPointsForaUser_nodeParam || '';
                } else {
                    ResetBadgesandPointsForaUser_parameters.format = RED.util.getMessageProperty(msg, ResetBadgesandPointsForaUser_nodeParam);
                }
                ResetBadgesandPointsForaUser_parameters.format = !!ResetBadgesandPointsForaUser_parameters.format ? ResetBadgesandPointsForaUser_parameters.format : msg.payload;
                
                ResetBadgesandPointsForaUser_nodeParam = node.ResetBadgesandPointsForaUser_apikey;
                ResetBadgesandPointsForaUser_nodeParamType = node.ResetBadgesandPointsForaUser_apikeyType;
                if (ResetBadgesandPointsForaUser_nodeParamType === 'str') {
                    ResetBadgesandPointsForaUser_parameters.apikey = ResetBadgesandPointsForaUser_nodeParam || '';
                } else {
                    ResetBadgesandPointsForaUser_parameters.apikey = RED.util.getMessageProperty(msg, ResetBadgesandPointsForaUser_nodeParam);
                }
                ResetBadgesandPointsForaUser_parameters.apikey = !!ResetBadgesandPointsForaUser_parameters.apikey ? ResetBadgesandPointsForaUser_parameters.apikey : msg.payload;
                
                ResetBadgesandPointsForaUser_nodeParam = node.ResetBadgesandPointsForaUser_userId;
                ResetBadgesandPointsForaUser_nodeParamType = node.ResetBadgesandPointsForaUser_userIdType;
                if (ResetBadgesandPointsForaUser_nodeParamType === 'str') {
                    ResetBadgesandPointsForaUser_parameters.userId = ResetBadgesandPointsForaUser_nodeParam || '';
                } else {
                    ResetBadgesandPointsForaUser_parameters.userId = RED.util.getMessageProperty(msg, ResetBadgesandPointsForaUser_nodeParam);
                }
                ResetBadgesandPointsForaUser_parameters.userId = !!ResetBadgesandPointsForaUser_parameters.userId ? ResetBadgesandPointsForaUser_parameters.userId : msg.payload;
                                result = client.ResetBadgesandPointsForaUser(ResetBadgesandPointsForaUser_parameters);
            }
            if (!errorFlag && node.method === 'GetUserDetailsST') {
                var GetUserDetailsST_parameters = [];
                var GetUserDetailsST_nodeParam;
                var GetUserDetailsST_nodeParamType;

                GetUserDetailsST_nodeParam = node.GetUserDetailsST_source;
                GetUserDetailsST_nodeParamType = node.GetUserDetailsST_sourceType;
                if (GetUserDetailsST_nodeParamType === 'str') {
                    GetUserDetailsST_parameters.source = GetUserDetailsST_nodeParam || '';
                } else {
                    GetUserDetailsST_parameters.source = RED.util.getMessageProperty(msg, GetUserDetailsST_nodeParam);
                }
                GetUserDetailsST_parameters.source = !!GetUserDetailsST_parameters.source ? GetUserDetailsST_parameters.source : msg.payload;
                
                GetUserDetailsST_nodeParam = node.GetUserDetailsST_since;
                GetUserDetailsST_nodeParamType = node.GetUserDetailsST_sinceType;
                if (GetUserDetailsST_nodeParamType === 'str') {
                    GetUserDetailsST_parameters.since = GetUserDetailsST_nodeParam || '';
                } else {
                    GetUserDetailsST_parameters.since = RED.util.getMessageProperty(msg, GetUserDetailsST_nodeParam);
                }
                GetUserDetailsST_parameters.since = !!GetUserDetailsST_parameters.since ? GetUserDetailsST_parameters.since : msg.payload;
                
                GetUserDetailsST_nodeParam = node.GetUserDetailsST_to;
                GetUserDetailsST_nodeParamType = node.GetUserDetailsST_toType;
                if (GetUserDetailsST_nodeParamType === 'str') {
                    GetUserDetailsST_parameters.to = GetUserDetailsST_nodeParam || '';
                } else {
                    GetUserDetailsST_parameters.to = RED.util.getMessageProperty(msg, GetUserDetailsST_nodeParam);
                }
                GetUserDetailsST_parameters.to = !!GetUserDetailsST_parameters.to ? GetUserDetailsST_parameters.to : msg.payload;
                
                GetUserDetailsST_nodeParam = node.GetUserDetailsST_format;
                GetUserDetailsST_nodeParamType = node.GetUserDetailsST_formatType;
                if (GetUserDetailsST_nodeParamType === 'str') {
                    GetUserDetailsST_parameters.format = GetUserDetailsST_nodeParam || '';
                } else {
                    GetUserDetailsST_parameters.format = RED.util.getMessageProperty(msg, GetUserDetailsST_nodeParam);
                }
                GetUserDetailsST_parameters.format = !!GetUserDetailsST_parameters.format ? GetUserDetailsST_parameters.format : msg.payload;
                
                GetUserDetailsST_nodeParam = node.GetUserDetailsST_apikey;
                GetUserDetailsST_nodeParamType = node.GetUserDetailsST_apikeyType;
                if (GetUserDetailsST_nodeParamType === 'str') {
                    GetUserDetailsST_parameters.apikey = GetUserDetailsST_nodeParam || '';
                } else {
                    GetUserDetailsST_parameters.apikey = RED.util.getMessageProperty(msg, GetUserDetailsST_nodeParam);
                }
                GetUserDetailsST_parameters.apikey = !!GetUserDetailsST_parameters.apikey ? GetUserDetailsST_parameters.apikey : msg.payload;
                                result = client.GetUserDetailsST(GetUserDetailsST_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamLearningPathsST') {
                var GetTeamLearningPathsST_parameters = [];
                var GetTeamLearningPathsST_nodeParam;
                var GetTeamLearningPathsST_nodeParamType;

                GetTeamLearningPathsST_nodeParam = node.GetTeamLearningPathsST_source;
                GetTeamLearningPathsST_nodeParamType = node.GetTeamLearningPathsST_sourceType;
                if (GetTeamLearningPathsST_nodeParamType === 'str') {
                    GetTeamLearningPathsST_parameters.source = GetTeamLearningPathsST_nodeParam || '';
                } else {
                    GetTeamLearningPathsST_parameters.source = RED.util.getMessageProperty(msg, GetTeamLearningPathsST_nodeParam);
                }
                GetTeamLearningPathsST_parameters.source = !!GetTeamLearningPathsST_parameters.source ? GetTeamLearningPathsST_parameters.source : msg.payload;
                
                GetTeamLearningPathsST_nodeParam = node.GetTeamLearningPathsST_since;
                GetTeamLearningPathsST_nodeParamType = node.GetTeamLearningPathsST_sinceType;
                if (GetTeamLearningPathsST_nodeParamType === 'str') {
                    GetTeamLearningPathsST_parameters.since = GetTeamLearningPathsST_nodeParam || '';
                } else {
                    GetTeamLearningPathsST_parameters.since = RED.util.getMessageProperty(msg, GetTeamLearningPathsST_nodeParam);
                }
                GetTeamLearningPathsST_parameters.since = !!GetTeamLearningPathsST_parameters.since ? GetTeamLearningPathsST_parameters.since : msg.payload;
                
                GetTeamLearningPathsST_nodeParam = node.GetTeamLearningPathsST_to;
                GetTeamLearningPathsST_nodeParamType = node.GetTeamLearningPathsST_toType;
                if (GetTeamLearningPathsST_nodeParamType === 'str') {
                    GetTeamLearningPathsST_parameters.to = GetTeamLearningPathsST_nodeParam || '';
                } else {
                    GetTeamLearningPathsST_parameters.to = RED.util.getMessageProperty(msg, GetTeamLearningPathsST_nodeParam);
                }
                GetTeamLearningPathsST_parameters.to = !!GetTeamLearningPathsST_parameters.to ? GetTeamLearningPathsST_parameters.to : msg.payload;
                
                GetTeamLearningPathsST_nodeParam = node.GetTeamLearningPathsST_format;
                GetTeamLearningPathsST_nodeParamType = node.GetTeamLearningPathsST_formatType;
                if (GetTeamLearningPathsST_nodeParamType === 'str') {
                    GetTeamLearningPathsST_parameters.format = GetTeamLearningPathsST_nodeParam || '';
                } else {
                    GetTeamLearningPathsST_parameters.format = RED.util.getMessageProperty(msg, GetTeamLearningPathsST_nodeParam);
                }
                GetTeamLearningPathsST_parameters.format = !!GetTeamLearningPathsST_parameters.format ? GetTeamLearningPathsST_parameters.format : msg.payload;
                
                GetTeamLearningPathsST_nodeParam = node.GetTeamLearningPathsST_apikey;
                GetTeamLearningPathsST_nodeParamType = node.GetTeamLearningPathsST_apikeyType;
                if (GetTeamLearningPathsST_nodeParamType === 'str') {
                    GetTeamLearningPathsST_parameters.apikey = GetTeamLearningPathsST_nodeParam || '';
                } else {
                    GetTeamLearningPathsST_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamLearningPathsST_nodeParam);
                }
                GetTeamLearningPathsST_parameters.apikey = !!GetTeamLearningPathsST_parameters.apikey ? GetTeamLearningPathsST_parameters.apikey : msg.payload;
                                result = client.GetTeamLearningPathsST(GetTeamLearningPathsST_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamUsersST') {
                var GetTeamUsersST_parameters = [];
                var GetTeamUsersST_nodeParam;
                var GetTeamUsersST_nodeParamType;

                GetTeamUsersST_nodeParam = node.GetTeamUsersST_source;
                GetTeamUsersST_nodeParamType = node.GetTeamUsersST_sourceType;
                if (GetTeamUsersST_nodeParamType === 'str') {
                    GetTeamUsersST_parameters.source = GetTeamUsersST_nodeParam || '';
                } else {
                    GetTeamUsersST_parameters.source = RED.util.getMessageProperty(msg, GetTeamUsersST_nodeParam);
                }
                GetTeamUsersST_parameters.source = !!GetTeamUsersST_parameters.source ? GetTeamUsersST_parameters.source : msg.payload;
                
                GetTeamUsersST_nodeParam = node.GetTeamUsersST_since;
                GetTeamUsersST_nodeParamType = node.GetTeamUsersST_sinceType;
                if (GetTeamUsersST_nodeParamType === 'str') {
                    GetTeamUsersST_parameters.since = GetTeamUsersST_nodeParam || '';
                } else {
                    GetTeamUsersST_parameters.since = RED.util.getMessageProperty(msg, GetTeamUsersST_nodeParam);
                }
                GetTeamUsersST_parameters.since = !!GetTeamUsersST_parameters.since ? GetTeamUsersST_parameters.since : msg.payload;
                
                GetTeamUsersST_nodeParam = node.GetTeamUsersST_to;
                GetTeamUsersST_nodeParamType = node.GetTeamUsersST_toType;
                if (GetTeamUsersST_nodeParamType === 'str') {
                    GetTeamUsersST_parameters.to = GetTeamUsersST_nodeParam || '';
                } else {
                    GetTeamUsersST_parameters.to = RED.util.getMessageProperty(msg, GetTeamUsersST_nodeParam);
                }
                GetTeamUsersST_parameters.to = !!GetTeamUsersST_parameters.to ? GetTeamUsersST_parameters.to : msg.payload;
                
                GetTeamUsersST_nodeParam = node.GetTeamUsersST_format;
                GetTeamUsersST_nodeParamType = node.GetTeamUsersST_formatType;
                if (GetTeamUsersST_nodeParamType === 'str') {
                    GetTeamUsersST_parameters.format = GetTeamUsersST_nodeParam || '';
                } else {
                    GetTeamUsersST_parameters.format = RED.util.getMessageProperty(msg, GetTeamUsersST_nodeParam);
                }
                GetTeamUsersST_parameters.format = !!GetTeamUsersST_parameters.format ? GetTeamUsersST_parameters.format : msg.payload;
                
                GetTeamUsersST_nodeParam = node.GetTeamUsersST_apikey;
                GetTeamUsersST_nodeParamType = node.GetTeamUsersST_apikeyType;
                if (GetTeamUsersST_nodeParamType === 'str') {
                    GetTeamUsersST_parameters.apikey = GetTeamUsersST_nodeParam || '';
                } else {
                    GetTeamUsersST_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamUsersST_nodeParam);
                }
                GetTeamUsersST_parameters.apikey = !!GetTeamUsersST_parameters.apikey ? GetTeamUsersST_parameters.apikey : msg.payload;
                                result = client.GetTeamUsersST(GetTeamUsersST_parameters);
            }
            if (!errorFlag && node.method === 'GetResultsST') {
                var GetResultsST_parameters = [];
                var GetResultsST_nodeParam;
                var GetResultsST_nodeParamType;

                GetResultsST_nodeParam = node.GetResultsST_source;
                GetResultsST_nodeParamType = node.GetResultsST_sourceType;
                if (GetResultsST_nodeParamType === 'str') {
                    GetResultsST_parameters.source = GetResultsST_nodeParam || '';
                } else {
                    GetResultsST_parameters.source = RED.util.getMessageProperty(msg, GetResultsST_nodeParam);
                }
                GetResultsST_parameters.source = !!GetResultsST_parameters.source ? GetResultsST_parameters.source : msg.payload;
                
                GetResultsST_nodeParam = node.GetResultsST_since;
                GetResultsST_nodeParamType = node.GetResultsST_sinceType;
                if (GetResultsST_nodeParamType === 'str') {
                    GetResultsST_parameters.since = GetResultsST_nodeParam || '';
                } else {
                    GetResultsST_parameters.since = RED.util.getMessageProperty(msg, GetResultsST_nodeParam);
                }
                GetResultsST_parameters.since = !!GetResultsST_parameters.since ? GetResultsST_parameters.since : msg.payload;
                
                GetResultsST_nodeParam = node.GetResultsST_to;
                GetResultsST_nodeParamType = node.GetResultsST_toType;
                if (GetResultsST_nodeParamType === 'str') {
                    GetResultsST_parameters.to = GetResultsST_nodeParam || '';
                } else {
                    GetResultsST_parameters.to = RED.util.getMessageProperty(msg, GetResultsST_nodeParam);
                }
                GetResultsST_parameters.to = !!GetResultsST_parameters.to ? GetResultsST_parameters.to : msg.payload;
                
                GetResultsST_nodeParam = node.GetResultsST_format;
                GetResultsST_nodeParamType = node.GetResultsST_formatType;
                if (GetResultsST_nodeParamType === 'str') {
                    GetResultsST_parameters.format = GetResultsST_nodeParam || '';
                } else {
                    GetResultsST_parameters.format = RED.util.getMessageProperty(msg, GetResultsST_nodeParam);
                }
                GetResultsST_parameters.format = !!GetResultsST_parameters.format ? GetResultsST_parameters.format : msg.payload;
                
                GetResultsST_nodeParam = node.GetResultsST_apikey;
                GetResultsST_nodeParamType = node.GetResultsST_apikeyType;
                if (GetResultsST_nodeParamType === 'str') {
                    GetResultsST_parameters.apikey = GetResultsST_nodeParam || '';
                } else {
                    GetResultsST_parameters.apikey = RED.util.getMessageProperty(msg, GetResultsST_nodeParam);
                }
                GetResultsST_parameters.apikey = !!GetResultsST_parameters.apikey ? GetResultsST_parameters.apikey : msg.payload;
                                result = client.GetResultsST(GetResultsST_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamsST') {
                var GetTeamsST_parameters = [];
                var GetTeamsST_nodeParam;
                var GetTeamsST_nodeParamType;

                GetTeamsST_nodeParam = node.GetTeamsST_source;
                GetTeamsST_nodeParamType = node.GetTeamsST_sourceType;
                if (GetTeamsST_nodeParamType === 'str') {
                    GetTeamsST_parameters.source = GetTeamsST_nodeParam || '';
                } else {
                    GetTeamsST_parameters.source = RED.util.getMessageProperty(msg, GetTeamsST_nodeParam);
                }
                GetTeamsST_parameters.source = !!GetTeamsST_parameters.source ? GetTeamsST_parameters.source : msg.payload;
                
                GetTeamsST_nodeParam = node.GetTeamsST_since;
                GetTeamsST_nodeParamType = node.GetTeamsST_sinceType;
                if (GetTeamsST_nodeParamType === 'str') {
                    GetTeamsST_parameters.since = GetTeamsST_nodeParam || '';
                } else {
                    GetTeamsST_parameters.since = RED.util.getMessageProperty(msg, GetTeamsST_nodeParam);
                }
                GetTeamsST_parameters.since = !!GetTeamsST_parameters.since ? GetTeamsST_parameters.since : msg.payload;
                
                GetTeamsST_nodeParam = node.GetTeamsST_to;
                GetTeamsST_nodeParamType = node.GetTeamsST_toType;
                if (GetTeamsST_nodeParamType === 'str') {
                    GetTeamsST_parameters.to = GetTeamsST_nodeParam || '';
                } else {
                    GetTeamsST_parameters.to = RED.util.getMessageProperty(msg, GetTeamsST_nodeParam);
                }
                GetTeamsST_parameters.to = !!GetTeamsST_parameters.to ? GetTeamsST_parameters.to : msg.payload;
                
                GetTeamsST_nodeParam = node.GetTeamsST_format;
                GetTeamsST_nodeParamType = node.GetTeamsST_formatType;
                if (GetTeamsST_nodeParamType === 'str') {
                    GetTeamsST_parameters.format = GetTeamsST_nodeParam || '';
                } else {
                    GetTeamsST_parameters.format = RED.util.getMessageProperty(msg, GetTeamsST_nodeParam);
                }
                GetTeamsST_parameters.format = !!GetTeamsST_parameters.format ? GetTeamsST_parameters.format : msg.payload;
                
                GetTeamsST_nodeParam = node.GetTeamsST_apikey;
                GetTeamsST_nodeParamType = node.GetTeamsST_apikeyType;
                if (GetTeamsST_nodeParamType === 'str') {
                    GetTeamsST_parameters.apikey = GetTeamsST_nodeParam || '';
                } else {
                    GetTeamsST_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamsST_nodeParam);
                }
                GetTeamsST_parameters.apikey = !!GetTeamsST_parameters.apikey ? GetTeamsST_parameters.apikey : msg.payload;
                                result = client.GetTeamsST(GetTeamsST_parameters);
            }
            if (!errorFlag && node.method === 'GetCourseModulesST') {
                var GetCourseModulesST_parameters = [];
                var GetCourseModulesST_nodeParam;
                var GetCourseModulesST_nodeParamType;

                GetCourseModulesST_nodeParam = node.GetCourseModulesST_source;
                GetCourseModulesST_nodeParamType = node.GetCourseModulesST_sourceType;
                if (GetCourseModulesST_nodeParamType === 'str') {
                    GetCourseModulesST_parameters.source = GetCourseModulesST_nodeParam || '';
                } else {
                    GetCourseModulesST_parameters.source = RED.util.getMessageProperty(msg, GetCourseModulesST_nodeParam);
                }
                GetCourseModulesST_parameters.source = !!GetCourseModulesST_parameters.source ? GetCourseModulesST_parameters.source : msg.payload;
                
                GetCourseModulesST_nodeParam = node.GetCourseModulesST_since;
                GetCourseModulesST_nodeParamType = node.GetCourseModulesST_sinceType;
                if (GetCourseModulesST_nodeParamType === 'str') {
                    GetCourseModulesST_parameters.since = GetCourseModulesST_nodeParam || '';
                } else {
                    GetCourseModulesST_parameters.since = RED.util.getMessageProperty(msg, GetCourseModulesST_nodeParam);
                }
                GetCourseModulesST_parameters.since = !!GetCourseModulesST_parameters.since ? GetCourseModulesST_parameters.since : msg.payload;
                
                GetCourseModulesST_nodeParam = node.GetCourseModulesST_to;
                GetCourseModulesST_nodeParamType = node.GetCourseModulesST_toType;
                if (GetCourseModulesST_nodeParamType === 'str') {
                    GetCourseModulesST_parameters.to = GetCourseModulesST_nodeParam || '';
                } else {
                    GetCourseModulesST_parameters.to = RED.util.getMessageProperty(msg, GetCourseModulesST_nodeParam);
                }
                GetCourseModulesST_parameters.to = !!GetCourseModulesST_parameters.to ? GetCourseModulesST_parameters.to : msg.payload;
                
                GetCourseModulesST_nodeParam = node.GetCourseModulesST_format;
                GetCourseModulesST_nodeParamType = node.GetCourseModulesST_formatType;
                if (GetCourseModulesST_nodeParamType === 'str') {
                    GetCourseModulesST_parameters.format = GetCourseModulesST_nodeParam || '';
                } else {
                    GetCourseModulesST_parameters.format = RED.util.getMessageProperty(msg, GetCourseModulesST_nodeParam);
                }
                GetCourseModulesST_parameters.format = !!GetCourseModulesST_parameters.format ? GetCourseModulesST_parameters.format : msg.payload;
                
                GetCourseModulesST_nodeParam = node.GetCourseModulesST_apikey;
                GetCourseModulesST_nodeParamType = node.GetCourseModulesST_apikeyType;
                if (GetCourseModulesST_nodeParamType === 'str') {
                    GetCourseModulesST_parameters.apikey = GetCourseModulesST_nodeParam || '';
                } else {
                    GetCourseModulesST_parameters.apikey = RED.util.getMessageProperty(msg, GetCourseModulesST_nodeParam);
                }
                GetCourseModulesST_parameters.apikey = !!GetCourseModulesST_parameters.apikey ? GetCourseModulesST_parameters.apikey : msg.payload;
                                result = client.GetCourseModulesST(GetCourseModulesST_parameters);
            }
            if (!errorFlag && node.method === 'GetAchievementsST') {
                var GetAchievementsST_parameters = [];
                var GetAchievementsST_nodeParam;
                var GetAchievementsST_nodeParamType;

                GetAchievementsST_nodeParam = node.GetAchievementsST_source;
                GetAchievementsST_nodeParamType = node.GetAchievementsST_sourceType;
                if (GetAchievementsST_nodeParamType === 'str') {
                    GetAchievementsST_parameters.source = GetAchievementsST_nodeParam || '';
                } else {
                    GetAchievementsST_parameters.source = RED.util.getMessageProperty(msg, GetAchievementsST_nodeParam);
                }
                GetAchievementsST_parameters.source = !!GetAchievementsST_parameters.source ? GetAchievementsST_parameters.source : msg.payload;
                
                GetAchievementsST_nodeParam = node.GetAchievementsST_since;
                GetAchievementsST_nodeParamType = node.GetAchievementsST_sinceType;
                if (GetAchievementsST_nodeParamType === 'str') {
                    GetAchievementsST_parameters.since = GetAchievementsST_nodeParam || '';
                } else {
                    GetAchievementsST_parameters.since = RED.util.getMessageProperty(msg, GetAchievementsST_nodeParam);
                }
                GetAchievementsST_parameters.since = !!GetAchievementsST_parameters.since ? GetAchievementsST_parameters.since : msg.payload;
                
                GetAchievementsST_nodeParam = node.GetAchievementsST_to;
                GetAchievementsST_nodeParamType = node.GetAchievementsST_toType;
                if (GetAchievementsST_nodeParamType === 'str') {
                    GetAchievementsST_parameters.to = GetAchievementsST_nodeParam || '';
                } else {
                    GetAchievementsST_parameters.to = RED.util.getMessageProperty(msg, GetAchievementsST_nodeParam);
                }
                GetAchievementsST_parameters.to = !!GetAchievementsST_parameters.to ? GetAchievementsST_parameters.to : msg.payload;
                
                GetAchievementsST_nodeParam = node.GetAchievementsST_format;
                GetAchievementsST_nodeParamType = node.GetAchievementsST_formatType;
                if (GetAchievementsST_nodeParamType === 'str') {
                    GetAchievementsST_parameters.format = GetAchievementsST_nodeParam || '';
                } else {
                    GetAchievementsST_parameters.format = RED.util.getMessageProperty(msg, GetAchievementsST_nodeParam);
                }
                GetAchievementsST_parameters.format = !!GetAchievementsST_parameters.format ? GetAchievementsST_parameters.format : msg.payload;
                
                GetAchievementsST_nodeParam = node.GetAchievementsST_apikey;
                GetAchievementsST_nodeParamType = node.GetAchievementsST_apikeyType;
                if (GetAchievementsST_nodeParamType === 'str') {
                    GetAchievementsST_parameters.apikey = GetAchievementsST_nodeParam || '';
                } else {
                    GetAchievementsST_parameters.apikey = RED.util.getMessageProperty(msg, GetAchievementsST_nodeParam);
                }
                GetAchievementsST_parameters.apikey = !!GetAchievementsST_parameters.apikey ? GetAchievementsST_parameters.apikey : msg.payload;
                                result = client.GetAchievementsST(GetAchievementsST_parameters);
            }
            if (!errorFlag && node.method === 'GetTeamCoursesST') {
                var GetTeamCoursesST_parameters = [];
                var GetTeamCoursesST_nodeParam;
                var GetTeamCoursesST_nodeParamType;

                GetTeamCoursesST_nodeParam = node.GetTeamCoursesST_source;
                GetTeamCoursesST_nodeParamType = node.GetTeamCoursesST_sourceType;
                if (GetTeamCoursesST_nodeParamType === 'str') {
                    GetTeamCoursesST_parameters.source = GetTeamCoursesST_nodeParam || '';
                } else {
                    GetTeamCoursesST_parameters.source = RED.util.getMessageProperty(msg, GetTeamCoursesST_nodeParam);
                }
                GetTeamCoursesST_parameters.source = !!GetTeamCoursesST_parameters.source ? GetTeamCoursesST_parameters.source : msg.payload;
                
                GetTeamCoursesST_nodeParam = node.GetTeamCoursesST_since;
                GetTeamCoursesST_nodeParamType = node.GetTeamCoursesST_sinceType;
                if (GetTeamCoursesST_nodeParamType === 'str') {
                    GetTeamCoursesST_parameters.since = GetTeamCoursesST_nodeParam || '';
                } else {
                    GetTeamCoursesST_parameters.since = RED.util.getMessageProperty(msg, GetTeamCoursesST_nodeParam);
                }
                GetTeamCoursesST_parameters.since = !!GetTeamCoursesST_parameters.since ? GetTeamCoursesST_parameters.since : msg.payload;
                
                GetTeamCoursesST_nodeParam = node.GetTeamCoursesST_to;
                GetTeamCoursesST_nodeParamType = node.GetTeamCoursesST_toType;
                if (GetTeamCoursesST_nodeParamType === 'str') {
                    GetTeamCoursesST_parameters.to = GetTeamCoursesST_nodeParam || '';
                } else {
                    GetTeamCoursesST_parameters.to = RED.util.getMessageProperty(msg, GetTeamCoursesST_nodeParam);
                }
                GetTeamCoursesST_parameters.to = !!GetTeamCoursesST_parameters.to ? GetTeamCoursesST_parameters.to : msg.payload;
                
                GetTeamCoursesST_nodeParam = node.GetTeamCoursesST_format;
                GetTeamCoursesST_nodeParamType = node.GetTeamCoursesST_formatType;
                if (GetTeamCoursesST_nodeParamType === 'str') {
                    GetTeamCoursesST_parameters.format = GetTeamCoursesST_nodeParam || '';
                } else {
                    GetTeamCoursesST_parameters.format = RED.util.getMessageProperty(msg, GetTeamCoursesST_nodeParam);
                }
                GetTeamCoursesST_parameters.format = !!GetTeamCoursesST_parameters.format ? GetTeamCoursesST_parameters.format : msg.payload;
                
                GetTeamCoursesST_nodeParam = node.GetTeamCoursesST_apikey;
                GetTeamCoursesST_nodeParamType = node.GetTeamCoursesST_apikeyType;
                if (GetTeamCoursesST_nodeParamType === 'str') {
                    GetTeamCoursesST_parameters.apikey = GetTeamCoursesST_nodeParam || '';
                } else {
                    GetTeamCoursesST_parameters.apikey = RED.util.getMessageProperty(msg, GetTeamCoursesST_nodeParam);
                }
                GetTeamCoursesST_parameters.apikey = !!GetTeamCoursesST_parameters.apikey ? GetTeamCoursesST_parameters.apikey : msg.payload;
                                result = client.GetTeamCoursesST(GetTeamCoursesST_parameters);
            }
            if (!errorFlag && node.method === 'GetLearningPathsCourseST') {
                var GetLearningPathsCourseST_parameters = [];
                var GetLearningPathsCourseST_nodeParam;
                var GetLearningPathsCourseST_nodeParamType;

                GetLearningPathsCourseST_nodeParam = node.GetLearningPathsCourseST_source;
                GetLearningPathsCourseST_nodeParamType = node.GetLearningPathsCourseST_sourceType;
                if (GetLearningPathsCourseST_nodeParamType === 'str') {
                    GetLearningPathsCourseST_parameters.source = GetLearningPathsCourseST_nodeParam || '';
                } else {
                    GetLearningPathsCourseST_parameters.source = RED.util.getMessageProperty(msg, GetLearningPathsCourseST_nodeParam);
                }
                GetLearningPathsCourseST_parameters.source = !!GetLearningPathsCourseST_parameters.source ? GetLearningPathsCourseST_parameters.source : msg.payload;
                
                GetLearningPathsCourseST_nodeParam = node.GetLearningPathsCourseST_since;
                GetLearningPathsCourseST_nodeParamType = node.GetLearningPathsCourseST_sinceType;
                if (GetLearningPathsCourseST_nodeParamType === 'str') {
                    GetLearningPathsCourseST_parameters.since = GetLearningPathsCourseST_nodeParam || '';
                } else {
                    GetLearningPathsCourseST_parameters.since = RED.util.getMessageProperty(msg, GetLearningPathsCourseST_nodeParam);
                }
                GetLearningPathsCourseST_parameters.since = !!GetLearningPathsCourseST_parameters.since ? GetLearningPathsCourseST_parameters.since : msg.payload;
                
                GetLearningPathsCourseST_nodeParam = node.GetLearningPathsCourseST_to;
                GetLearningPathsCourseST_nodeParamType = node.GetLearningPathsCourseST_toType;
                if (GetLearningPathsCourseST_nodeParamType === 'str') {
                    GetLearningPathsCourseST_parameters.to = GetLearningPathsCourseST_nodeParam || '';
                } else {
                    GetLearningPathsCourseST_parameters.to = RED.util.getMessageProperty(msg, GetLearningPathsCourseST_nodeParam);
                }
                GetLearningPathsCourseST_parameters.to = !!GetLearningPathsCourseST_parameters.to ? GetLearningPathsCourseST_parameters.to : msg.payload;
                
                GetLearningPathsCourseST_nodeParam = node.GetLearningPathsCourseST_format;
                GetLearningPathsCourseST_nodeParamType = node.GetLearningPathsCourseST_formatType;
                if (GetLearningPathsCourseST_nodeParamType === 'str') {
                    GetLearningPathsCourseST_parameters.format = GetLearningPathsCourseST_nodeParam || '';
                } else {
                    GetLearningPathsCourseST_parameters.format = RED.util.getMessageProperty(msg, GetLearningPathsCourseST_nodeParam);
                }
                GetLearningPathsCourseST_parameters.format = !!GetLearningPathsCourseST_parameters.format ? GetLearningPathsCourseST_parameters.format : msg.payload;
                
                GetLearningPathsCourseST_nodeParam = node.GetLearningPathsCourseST_apikey;
                GetLearningPathsCourseST_nodeParamType = node.GetLearningPathsCourseST_apikeyType;
                if (GetLearningPathsCourseST_nodeParamType === 'str') {
                    GetLearningPathsCourseST_parameters.apikey = GetLearningPathsCourseST_nodeParam || '';
                } else {
                    GetLearningPathsCourseST_parameters.apikey = RED.util.getMessageProperty(msg, GetLearningPathsCourseST_nodeParam);
                }
                GetLearningPathsCourseST_parameters.apikey = !!GetLearningPathsCourseST_parameters.apikey ? GetLearningPathsCourseST_parameters.apikey : msg.payload;
                                result = client.GetLearningPathsCourseST(GetLearningPathsCourseST_parameters);
            }
            if (!errorFlag && node.method === 'GetCoursesST') {
                var GetCoursesST_parameters = [];
                var GetCoursesST_nodeParam;
                var GetCoursesST_nodeParamType;

                GetCoursesST_nodeParam = node.GetCoursesST_source;
                GetCoursesST_nodeParamType = node.GetCoursesST_sourceType;
                if (GetCoursesST_nodeParamType === 'str') {
                    GetCoursesST_parameters.source = GetCoursesST_nodeParam || '';
                } else {
                    GetCoursesST_parameters.source = RED.util.getMessageProperty(msg, GetCoursesST_nodeParam);
                }
                GetCoursesST_parameters.source = !!GetCoursesST_parameters.source ? GetCoursesST_parameters.source : msg.payload;
                
                GetCoursesST_nodeParam = node.GetCoursesST_since;
                GetCoursesST_nodeParamType = node.GetCoursesST_sinceType;
                if (GetCoursesST_nodeParamType === 'str') {
                    GetCoursesST_parameters.since = GetCoursesST_nodeParam || '';
                } else {
                    GetCoursesST_parameters.since = RED.util.getMessageProperty(msg, GetCoursesST_nodeParam);
                }
                GetCoursesST_parameters.since = !!GetCoursesST_parameters.since ? GetCoursesST_parameters.since : msg.payload;
                
                GetCoursesST_nodeParam = node.GetCoursesST_to;
                GetCoursesST_nodeParamType = node.GetCoursesST_toType;
                if (GetCoursesST_nodeParamType === 'str') {
                    GetCoursesST_parameters.to = GetCoursesST_nodeParam || '';
                } else {
                    GetCoursesST_parameters.to = RED.util.getMessageProperty(msg, GetCoursesST_nodeParam);
                }
                GetCoursesST_parameters.to = !!GetCoursesST_parameters.to ? GetCoursesST_parameters.to : msg.payload;
                
                GetCoursesST_nodeParam = node.GetCoursesST_format;
                GetCoursesST_nodeParamType = node.GetCoursesST_formatType;
                if (GetCoursesST_nodeParamType === 'str') {
                    GetCoursesST_parameters.format = GetCoursesST_nodeParam || '';
                } else {
                    GetCoursesST_parameters.format = RED.util.getMessageProperty(msg, GetCoursesST_nodeParam);
                }
                GetCoursesST_parameters.format = !!GetCoursesST_parameters.format ? GetCoursesST_parameters.format : msg.payload;
                
                GetCoursesST_nodeParam = node.GetCoursesST_apikey;
                GetCoursesST_nodeParamType = node.GetCoursesST_apikeyType;
                if (GetCoursesST_nodeParamType === 'str') {
                    GetCoursesST_parameters.apikey = GetCoursesST_nodeParam || '';
                } else {
                    GetCoursesST_parameters.apikey = RED.util.getMessageProperty(msg, GetCoursesST_nodeParam);
                }
                GetCoursesST_parameters.apikey = !!GetCoursesST_parameters.apikey ? GetCoursesST_parameters.apikey : msg.payload;
                                result = client.GetCoursesST(GetCoursesST_parameters);
            }
            if (!errorFlag && node.method === 'GetLearningPathsST') {
                var GetLearningPathsST_parameters = [];
                var GetLearningPathsST_nodeParam;
                var GetLearningPathsST_nodeParamType;

                GetLearningPathsST_nodeParam = node.GetLearningPathsST_source;
                GetLearningPathsST_nodeParamType = node.GetLearningPathsST_sourceType;
                if (GetLearningPathsST_nodeParamType === 'str') {
                    GetLearningPathsST_parameters.source = GetLearningPathsST_nodeParam || '';
                } else {
                    GetLearningPathsST_parameters.source = RED.util.getMessageProperty(msg, GetLearningPathsST_nodeParam);
                }
                GetLearningPathsST_parameters.source = !!GetLearningPathsST_parameters.source ? GetLearningPathsST_parameters.source : msg.payload;
                
                GetLearningPathsST_nodeParam = node.GetLearningPathsST_since;
                GetLearningPathsST_nodeParamType = node.GetLearningPathsST_sinceType;
                if (GetLearningPathsST_nodeParamType === 'str') {
                    GetLearningPathsST_parameters.since = GetLearningPathsST_nodeParam || '';
                } else {
                    GetLearningPathsST_parameters.since = RED.util.getMessageProperty(msg, GetLearningPathsST_nodeParam);
                }
                GetLearningPathsST_parameters.since = !!GetLearningPathsST_parameters.since ? GetLearningPathsST_parameters.since : msg.payload;
                
                GetLearningPathsST_nodeParam = node.GetLearningPathsST_to;
                GetLearningPathsST_nodeParamType = node.GetLearningPathsST_toType;
                if (GetLearningPathsST_nodeParamType === 'str') {
                    GetLearningPathsST_parameters.to = GetLearningPathsST_nodeParam || '';
                } else {
                    GetLearningPathsST_parameters.to = RED.util.getMessageProperty(msg, GetLearningPathsST_nodeParam);
                }
                GetLearningPathsST_parameters.to = !!GetLearningPathsST_parameters.to ? GetLearningPathsST_parameters.to : msg.payload;
                
                GetLearningPathsST_nodeParam = node.GetLearningPathsST_format;
                GetLearningPathsST_nodeParamType = node.GetLearningPathsST_formatType;
                if (GetLearningPathsST_nodeParamType === 'str') {
                    GetLearningPathsST_parameters.format = GetLearningPathsST_nodeParam || '';
                } else {
                    GetLearningPathsST_parameters.format = RED.util.getMessageProperty(msg, GetLearningPathsST_nodeParam);
                }
                GetLearningPathsST_parameters.format = !!GetLearningPathsST_parameters.format ? GetLearningPathsST_parameters.format : msg.payload;
                
                GetLearningPathsST_nodeParam = node.GetLearningPathsST_apikey;
                GetLearningPathsST_nodeParamType = node.GetLearningPathsST_apikeyType;
                if (GetLearningPathsST_nodeParamType === 'str') {
                    GetLearningPathsST_parameters.apikey = GetLearningPathsST_nodeParam || '';
                } else {
                    GetLearningPathsST_parameters.apikey = RED.util.getMessageProperty(msg, GetLearningPathsST_nodeParam);
                }
                GetLearningPathsST_parameters.apikey = !!GetLearningPathsST_parameters.apikey ? GetLearningPathsST_parameters.apikey : msg.payload;
                                result = client.GetLearningPathsST(GetLearningPathsST_parameters);
            }
            if (!errorFlag && node.method === 'GetUserCoursesST') {
                var GetUserCoursesST_parameters = [];
                var GetUserCoursesST_nodeParam;
                var GetUserCoursesST_nodeParamType;

                GetUserCoursesST_nodeParam = node.GetUserCoursesST_source;
                GetUserCoursesST_nodeParamType = node.GetUserCoursesST_sourceType;
                if (GetUserCoursesST_nodeParamType === 'str') {
                    GetUserCoursesST_parameters.source = GetUserCoursesST_nodeParam || '';
                } else {
                    GetUserCoursesST_parameters.source = RED.util.getMessageProperty(msg, GetUserCoursesST_nodeParam);
                }
                GetUserCoursesST_parameters.source = !!GetUserCoursesST_parameters.source ? GetUserCoursesST_parameters.source : msg.payload;
                
                GetUserCoursesST_nodeParam = node.GetUserCoursesST_since;
                GetUserCoursesST_nodeParamType = node.GetUserCoursesST_sinceType;
                if (GetUserCoursesST_nodeParamType === 'str') {
                    GetUserCoursesST_parameters.since = GetUserCoursesST_nodeParam || '';
                } else {
                    GetUserCoursesST_parameters.since = RED.util.getMessageProperty(msg, GetUserCoursesST_nodeParam);
                }
                GetUserCoursesST_parameters.since = !!GetUserCoursesST_parameters.since ? GetUserCoursesST_parameters.since : msg.payload;
                
                GetUserCoursesST_nodeParam = node.GetUserCoursesST_to;
                GetUserCoursesST_nodeParamType = node.GetUserCoursesST_toType;
                if (GetUserCoursesST_nodeParamType === 'str') {
                    GetUserCoursesST_parameters.to = GetUserCoursesST_nodeParam || '';
                } else {
                    GetUserCoursesST_parameters.to = RED.util.getMessageProperty(msg, GetUserCoursesST_nodeParam);
                }
                GetUserCoursesST_parameters.to = !!GetUserCoursesST_parameters.to ? GetUserCoursesST_parameters.to : msg.payload;
                
                GetUserCoursesST_nodeParam = node.GetUserCoursesST_format;
                GetUserCoursesST_nodeParamType = node.GetUserCoursesST_formatType;
                if (GetUserCoursesST_nodeParamType === 'str') {
                    GetUserCoursesST_parameters.format = GetUserCoursesST_nodeParam || '';
                } else {
                    GetUserCoursesST_parameters.format = RED.util.getMessageProperty(msg, GetUserCoursesST_nodeParam);
                }
                GetUserCoursesST_parameters.format = !!GetUserCoursesST_parameters.format ? GetUserCoursesST_parameters.format : msg.payload;
                
                GetUserCoursesST_nodeParam = node.GetUserCoursesST_apikey;
                GetUserCoursesST_nodeParamType = node.GetUserCoursesST_apikeyType;
                if (GetUserCoursesST_nodeParamType === 'str') {
                    GetUserCoursesST_parameters.apikey = GetUserCoursesST_nodeParam || '';
                } else {
                    GetUserCoursesST_parameters.apikey = RED.util.getMessageProperty(msg, GetUserCoursesST_nodeParam);
                }
                GetUserCoursesST_parameters.apikey = !!GetUserCoursesST_parameters.apikey ? GetUserCoursesST_parameters.apikey : msg.payload;
                                result = client.GetUserCoursesST(GetUserCoursesST_parameters);
            }
            if (!errorFlag && node.method === 'GetLearningPathsUsersST') {
                var GetLearningPathsUsersST_parameters = [];
                var GetLearningPathsUsersST_nodeParam;
                var GetLearningPathsUsersST_nodeParamType;

                GetLearningPathsUsersST_nodeParam = node.GetLearningPathsUsersST_source;
                GetLearningPathsUsersST_nodeParamType = node.GetLearningPathsUsersST_sourceType;
                if (GetLearningPathsUsersST_nodeParamType === 'str') {
                    GetLearningPathsUsersST_parameters.source = GetLearningPathsUsersST_nodeParam || '';
                } else {
                    GetLearningPathsUsersST_parameters.source = RED.util.getMessageProperty(msg, GetLearningPathsUsersST_nodeParam);
                }
                GetLearningPathsUsersST_parameters.source = !!GetLearningPathsUsersST_parameters.source ? GetLearningPathsUsersST_parameters.source : msg.payload;
                
                GetLearningPathsUsersST_nodeParam = node.GetLearningPathsUsersST_since;
                GetLearningPathsUsersST_nodeParamType = node.GetLearningPathsUsersST_sinceType;
                if (GetLearningPathsUsersST_nodeParamType === 'str') {
                    GetLearningPathsUsersST_parameters.since = GetLearningPathsUsersST_nodeParam || '';
                } else {
                    GetLearningPathsUsersST_parameters.since = RED.util.getMessageProperty(msg, GetLearningPathsUsersST_nodeParam);
                }
                GetLearningPathsUsersST_parameters.since = !!GetLearningPathsUsersST_parameters.since ? GetLearningPathsUsersST_parameters.since : msg.payload;
                
                GetLearningPathsUsersST_nodeParam = node.GetLearningPathsUsersST_to;
                GetLearningPathsUsersST_nodeParamType = node.GetLearningPathsUsersST_toType;
                if (GetLearningPathsUsersST_nodeParamType === 'str') {
                    GetLearningPathsUsersST_parameters.to = GetLearningPathsUsersST_nodeParam || '';
                } else {
                    GetLearningPathsUsersST_parameters.to = RED.util.getMessageProperty(msg, GetLearningPathsUsersST_nodeParam);
                }
                GetLearningPathsUsersST_parameters.to = !!GetLearningPathsUsersST_parameters.to ? GetLearningPathsUsersST_parameters.to : msg.payload;
                
                GetLearningPathsUsersST_nodeParam = node.GetLearningPathsUsersST_format;
                GetLearningPathsUsersST_nodeParamType = node.GetLearningPathsUsersST_formatType;
                if (GetLearningPathsUsersST_nodeParamType === 'str') {
                    GetLearningPathsUsersST_parameters.format = GetLearningPathsUsersST_nodeParam || '';
                } else {
                    GetLearningPathsUsersST_parameters.format = RED.util.getMessageProperty(msg, GetLearningPathsUsersST_nodeParam);
                }
                GetLearningPathsUsersST_parameters.format = !!GetLearningPathsUsersST_parameters.format ? GetLearningPathsUsersST_parameters.format : msg.payload;
                
                GetLearningPathsUsersST_nodeParam = node.GetLearningPathsUsersST_apikey;
                GetLearningPathsUsersST_nodeParamType = node.GetLearningPathsUsersST_apikeyType;
                if (GetLearningPathsUsersST_nodeParamType === 'str') {
                    GetLearningPathsUsersST_parameters.apikey = GetLearningPathsUsersST_nodeParam || '';
                } else {
                    GetLearningPathsUsersST_parameters.apikey = RED.util.getMessageProperty(msg, GetLearningPathsUsersST_nodeParam);
                }
                GetLearningPathsUsersST_parameters.apikey = !!GetLearningPathsUsersST_parameters.apikey ? GetLearningPathsUsersST_parameters.apikey : msg.payload;
                                result = client.GetLearningPathsUsersST(GetLearningPathsUsersST_parameters);
            }
            if (!errorFlag && node.method === 'GetModulesST') {
                var GetModulesST_parameters = [];
                var GetModulesST_nodeParam;
                var GetModulesST_nodeParamType;

                GetModulesST_nodeParam = node.GetModulesST_source;
                GetModulesST_nodeParamType = node.GetModulesST_sourceType;
                if (GetModulesST_nodeParamType === 'str') {
                    GetModulesST_parameters.source = GetModulesST_nodeParam || '';
                } else {
                    GetModulesST_parameters.source = RED.util.getMessageProperty(msg, GetModulesST_nodeParam);
                }
                GetModulesST_parameters.source = !!GetModulesST_parameters.source ? GetModulesST_parameters.source : msg.payload;
                
                GetModulesST_nodeParam = node.GetModulesST_since;
                GetModulesST_nodeParamType = node.GetModulesST_sinceType;
                if (GetModulesST_nodeParamType === 'str') {
                    GetModulesST_parameters.since = GetModulesST_nodeParam || '';
                } else {
                    GetModulesST_parameters.since = RED.util.getMessageProperty(msg, GetModulesST_nodeParam);
                }
                GetModulesST_parameters.since = !!GetModulesST_parameters.since ? GetModulesST_parameters.since : msg.payload;
                
                GetModulesST_nodeParam = node.GetModulesST_to;
                GetModulesST_nodeParamType = node.GetModulesST_toType;
                if (GetModulesST_nodeParamType === 'str') {
                    GetModulesST_parameters.to = GetModulesST_nodeParam || '';
                } else {
                    GetModulesST_parameters.to = RED.util.getMessageProperty(msg, GetModulesST_nodeParam);
                }
                GetModulesST_parameters.to = !!GetModulesST_parameters.to ? GetModulesST_parameters.to : msg.payload;
                
                GetModulesST_nodeParam = node.GetModulesST_format;
                GetModulesST_nodeParamType = node.GetModulesST_formatType;
                if (GetModulesST_nodeParamType === 'str') {
                    GetModulesST_parameters.format = GetModulesST_nodeParam || '';
                } else {
                    GetModulesST_parameters.format = RED.util.getMessageProperty(msg, GetModulesST_nodeParam);
                }
                GetModulesST_parameters.format = !!GetModulesST_parameters.format ? GetModulesST_parameters.format : msg.payload;
                
                GetModulesST_nodeParam = node.GetModulesST_apikey;
                GetModulesST_nodeParamType = node.GetModulesST_apikeyType;
                if (GetModulesST_nodeParamType === 'str') {
                    GetModulesST_parameters.apikey = GetModulesST_nodeParam || '';
                } else {
                    GetModulesST_parameters.apikey = RED.util.getMessageProperty(msg, GetModulesST_nodeParam);
                }
                GetModulesST_parameters.apikey = !!GetModulesST_parameters.apikey ? GetModulesST_parameters.apikey : msg.payload;
                                result = client.GetModulesST(GetModulesST_parameters);
            }
            if (!errorFlag && node.method === 'GetModulesResultsST') {
                var GetModulesResultsST_parameters = [];
                var GetModulesResultsST_nodeParam;
                var GetModulesResultsST_nodeParamType;

                GetModulesResultsST_nodeParam = node.GetModulesResultsST_source;
                GetModulesResultsST_nodeParamType = node.GetModulesResultsST_sourceType;
                if (GetModulesResultsST_nodeParamType === 'str') {
                    GetModulesResultsST_parameters.source = GetModulesResultsST_nodeParam || '';
                } else {
                    GetModulesResultsST_parameters.source = RED.util.getMessageProperty(msg, GetModulesResultsST_nodeParam);
                }
                GetModulesResultsST_parameters.source = !!GetModulesResultsST_parameters.source ? GetModulesResultsST_parameters.source : msg.payload;
                
                GetModulesResultsST_nodeParam = node.GetModulesResultsST_since;
                GetModulesResultsST_nodeParamType = node.GetModulesResultsST_sinceType;
                if (GetModulesResultsST_nodeParamType === 'str') {
                    GetModulesResultsST_parameters.since = GetModulesResultsST_nodeParam || '';
                } else {
                    GetModulesResultsST_parameters.since = RED.util.getMessageProperty(msg, GetModulesResultsST_nodeParam);
                }
                GetModulesResultsST_parameters.since = !!GetModulesResultsST_parameters.since ? GetModulesResultsST_parameters.since : msg.payload;
                
                GetModulesResultsST_nodeParam = node.GetModulesResultsST_to;
                GetModulesResultsST_nodeParamType = node.GetModulesResultsST_toType;
                if (GetModulesResultsST_nodeParamType === 'str') {
                    GetModulesResultsST_parameters.to = GetModulesResultsST_nodeParam || '';
                } else {
                    GetModulesResultsST_parameters.to = RED.util.getMessageProperty(msg, GetModulesResultsST_nodeParam);
                }
                GetModulesResultsST_parameters.to = !!GetModulesResultsST_parameters.to ? GetModulesResultsST_parameters.to : msg.payload;
                
                GetModulesResultsST_nodeParam = node.GetModulesResultsST_format;
                GetModulesResultsST_nodeParamType = node.GetModulesResultsST_formatType;
                if (GetModulesResultsST_nodeParamType === 'str') {
                    GetModulesResultsST_parameters.format = GetModulesResultsST_nodeParam || '';
                } else {
                    GetModulesResultsST_parameters.format = RED.util.getMessageProperty(msg, GetModulesResultsST_nodeParam);
                }
                GetModulesResultsST_parameters.format = !!GetModulesResultsST_parameters.format ? GetModulesResultsST_parameters.format : msg.payload;
                
                GetModulesResultsST_nodeParam = node.GetModulesResultsST_apikey;
                GetModulesResultsST_nodeParamType = node.GetModulesResultsST_apikeyType;
                if (GetModulesResultsST_nodeParamType === 'str') {
                    GetModulesResultsST_parameters.apikey = GetModulesResultsST_nodeParam || '';
                } else {
                    GetModulesResultsST_parameters.apikey = RED.util.getMessageProperty(msg, GetModulesResultsST_nodeParam);
                }
                GetModulesResultsST_parameters.apikey = !!GetModulesResultsST_parameters.apikey ? GetModulesResultsST_parameters.apikey : msg.payload;
                                result = client.GetModulesResultsST(GetModulesResultsST_parameters);
            }
            if (!errorFlag && node.method === 'GetLearningPathResultsST') {
                var GetLearningPathResultsST_parameters = [];
                var GetLearningPathResultsST_nodeParam;
                var GetLearningPathResultsST_nodeParamType;

                GetLearningPathResultsST_nodeParam = node.GetLearningPathResultsST_source;
                GetLearningPathResultsST_nodeParamType = node.GetLearningPathResultsST_sourceType;
                if (GetLearningPathResultsST_nodeParamType === 'str') {
                    GetLearningPathResultsST_parameters.source = GetLearningPathResultsST_nodeParam || '';
                } else {
                    GetLearningPathResultsST_parameters.source = RED.util.getMessageProperty(msg, GetLearningPathResultsST_nodeParam);
                }
                GetLearningPathResultsST_parameters.source = !!GetLearningPathResultsST_parameters.source ? GetLearningPathResultsST_parameters.source : msg.payload;
                
                GetLearningPathResultsST_nodeParam = node.GetLearningPathResultsST_since;
                GetLearningPathResultsST_nodeParamType = node.GetLearningPathResultsST_sinceType;
                if (GetLearningPathResultsST_nodeParamType === 'str') {
                    GetLearningPathResultsST_parameters.since = GetLearningPathResultsST_nodeParam || '';
                } else {
                    GetLearningPathResultsST_parameters.since = RED.util.getMessageProperty(msg, GetLearningPathResultsST_nodeParam);
                }
                GetLearningPathResultsST_parameters.since = !!GetLearningPathResultsST_parameters.since ? GetLearningPathResultsST_parameters.since : msg.payload;
                
                GetLearningPathResultsST_nodeParam = node.GetLearningPathResultsST_to;
                GetLearningPathResultsST_nodeParamType = node.GetLearningPathResultsST_toType;
                if (GetLearningPathResultsST_nodeParamType === 'str') {
                    GetLearningPathResultsST_parameters.to = GetLearningPathResultsST_nodeParam || '';
                } else {
                    GetLearningPathResultsST_parameters.to = RED.util.getMessageProperty(msg, GetLearningPathResultsST_nodeParam);
                }
                GetLearningPathResultsST_parameters.to = !!GetLearningPathResultsST_parameters.to ? GetLearningPathResultsST_parameters.to : msg.payload;
                
                GetLearningPathResultsST_nodeParam = node.GetLearningPathResultsST_format;
                GetLearningPathResultsST_nodeParamType = node.GetLearningPathResultsST_formatType;
                if (GetLearningPathResultsST_nodeParamType === 'str') {
                    GetLearningPathResultsST_parameters.format = GetLearningPathResultsST_nodeParam || '';
                } else {
                    GetLearningPathResultsST_parameters.format = RED.util.getMessageProperty(msg, GetLearningPathResultsST_nodeParam);
                }
                GetLearningPathResultsST_parameters.format = !!GetLearningPathResultsST_parameters.format ? GetLearningPathResultsST_parameters.format : msg.payload;
                                result = client.GetLearningPathResultsST(GetLearningPathResultsST_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'LitmosapisKyma.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('Litmos', LitmosapisKymaNode);
};
