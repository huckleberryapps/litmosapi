var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('Litmos node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'Litmos', name: 'Litmos' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'Litmos');
            done();
        });
    });

    it('should handle CreateNewUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'CreateNewUser',
                CreateNewUser_source: '<node property>', // (1) define node properties
                CreateNewUser_format: '<node property>', // (1) define node properties
                CreateNewUser_contentType: '<node property>', // (1) define node properties
                CreateNewUser_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUsers()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUsers',
                GetUsers_format: '<node property>', // (1) define node properties
                GetUsers_source: '<node property>', // (1) define node properties
                GetUsers_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaUserbyUsername()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaUserbyUsername',
                GetaUserbyUsername_source: '<node property>', // (1) define node properties
                GetaUserbyUsername_format: '<node property>', // (1) define node properties
                GetaUserbyUsername_apikey: '<node property>', // (1) define node properties
                GetaUserbyUsername_username: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UpdateaUser',
                UpdateaUser_source: '<node property>', // (1) define node properties
                UpdateaUser_contentType: '<node property>', // (1) define node properties
                UpdateaUser_body: '<node property>', // (1) define node properties
                UpdateaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUserbyUserId()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUserbyUserId',
                GetUserbyUserId_source: '<node property>', // (1) define node properties
                GetUserbyUserId_format: '<node property>', // (1) define node properties
                GetUserbyUserId_apikey: '<node property>', // (1) define node properties
                GetUserbyUserId_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DeleteaUser',
                DeleteaUser_source: '<node property>', // (1) define node properties
                DeleteaUser_apikey: '<node property>', // (1) define node properties
                DeleteaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUsersDetails()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUsersDetails',
                GetUsersDetails_source: '<node property>', // (1) define node properties
                GetUsersDetails_format: '<node property>', // (1) define node properties
                GetUsersDetails_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PostAdvancedCustomFieldsforaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'PostAdvancedCustomFieldsforaUser',
                PostAdvancedCustomFieldsforaUser_source: '<node property>', // (1) define node properties
                PostAdvancedCustomFieldsforaUser_fromat: '<node property>', // (1) define node properties
                PostAdvancedCustomFieldsforaUser_contentType: '<node property>', // (1) define node properties
                PostAdvancedCustomFieldsforaUser_body: '<node property>', // (1) define node properties
                PostAdvancedCustomFieldsforaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaUsersAdvancedCustomFields()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaUsersAdvancedCustomFields',
                GetaUsersAdvancedCustomFields_source: '<node property>', // (1) define node properties
                GetaUsersAdvancedCustomFields_contentType: '<node property>', // (1) define node properties
                GetaUsersAdvancedCustomFields_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateanewUserBulkImport()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'CreateanewUserBulkImport',
                CreateanewUserBulkImport_source: '<node property>', // (1) define node properties
                CreateanewUserBulkImport_format: '<node property>', // (1) define node properties
                CreateanewUserBulkImport_sendmessage: '<node property>', // (1) define node properties
                CreateanewUserBulkImport_contentType: '<node property>', // (1) define node properties
                CreateanewUserBulkImport_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofRecentBulkImports()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofRecentBulkImports',
                GetaListofRecentBulkImports_source: '<node property>', // (1) define node properties
                GetaListofRecentBulkImports_format: '<node property>', // (1) define node properties
                GetaListofRecentBulkImports_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaSpecificBulkImport()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaSpecificBulkImport',
                GetaSpecificBulkImport_source: '<node property>', // (1) define node properties
                GetaSpecificBulkImport_format: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MarkaModuleComplete()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'MarkaModuleComplete',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetCourses()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetCourses',
                GetCourses_source: '<node property>', // (1) define node properties
                GetCourses_format: '<node property>', // (1) define node properties
                GetCourses_limit: '<node property>', // (1) define node properties
                GetCourses_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaCourse',
                GetaCourse_source: '<node property>', // (1) define node properties
                GetaCourse_format: '<node property>', // (1) define node properties
                GetaCourse_apikey: '<node property>', // (1) define node properties
                GetaCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle AssignCoursestoaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'AssignCoursestoaUser',
                AssignCoursestoaUser_source: '<node property>', // (1) define node properties
                AssignCoursestoaUser_sendmessage: '<node property>', // (1) define node properties
                AssignCoursestoaUser_contentType: '<node property>', // (1) define node properties
                AssignCoursestoaUser_body: '<node property>', // (1) define node properties
                AssignCoursestoaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListCoursesAssignedtoaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ListCoursesAssignedtoaUser',
                ListCoursesAssignedtoaUser_source: '<node property>', // (1) define node properties
                ListCoursesAssignedtoaUser_format: '<node property>', // (1) define node properties
                ListCoursesAssignedtoaUser_apikey: '<node property>', // (1) define node properties
                ListCoursesAssignedtoaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListAllUsersAssignedtoaCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ListAllUsersAssignedtoaCourse',
                ListAllUsersAssignedtoaCourse_source: '<node property>', // (1) define node properties
                ListAllUsersAssignedtoaCourse_format: '<node property>', // (1) define node properties
                ListAllUsersAssignedtoaCourse_apikey: '<node property>', // (1) define node properties
                ListAllUsersAssignedtoaCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListModulesforaCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ListModulesforaCourse',
                ListModulesforaCourse_source: '<node property>', // (1) define node properties
                ListModulesforaCourse_format: '<node property>', // (1) define node properties
                ListModulesforaCourse_apikey: '<node property>', // (1) define node properties
                ListModulesforaCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListCourseandModuleResultsforaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ListCourseandModuleResultsforaUser',
                ListCourseandModuleResultsforaUser_source: '<node property>', // (1) define node properties
                ListCourseandModuleResultsforaUser_format: '<node property>', // (1) define node properties
                ListCourseandModuleResultsforaUser_apikey: '<node property>', // (1) define node properties
                ListCourseandModuleResultsforaUser_userId: '<node property>', // (1) define node properties
                ListCourseandModuleResultsforaUser_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnassignCoursesfromaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UnassignCoursesfromaUser',
                UnassignCoursesfromaUser_source: '<node property>', // (1) define node properties
                UnassignCoursesfromaUser_apikey: '<node property>', // (1) define node properties
                UnassignCoursesfromaUser_userId: '<node property>', // (1) define node properties
                UnassignCoursesfromaUser_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListAllCourseResultsforAllUsersSinceaSpecificDate()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ListAllCourseResultsforAllUsersSinceaSpecificDate',
                ListAllCourseResultsforAllUsersSinceaSpecificDate_source: '<node property>', // (1) define node properties
                ListAllCourseResultsforAllUsersSinceaSpecificDate_since: '<node property>', // (1) define node properties
                ListAllCourseResultsforAllUsersSinceaSpecificDate_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ResetCourseResults()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ResetCourseResults',
                ResetCourseResults_source: '<node property>', // (1) define node properties
                ResetCourseResults_apikey: '<node property>', // (1) define node properties
                ResetCourseResults_userId: '<node property>', // (1) define node properties
                ResetCourseResults_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetCourseCustomFields()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetCourseCustomFields',
                GetCourseCustomFields_source: '<node property>', // (1) define node properties
                GetCourseCustomFields_format: '<node property>', // (1) define node properties
                GetCourseCustomFields_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetCourseCustomFieldValuesforaSpecificCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetCourseCustomFieldValuesforaSpecificCourse',
                GetCourseCustomFieldValuesforaSpecificCourse_source: '<node property>', // (1) define node properties
                GetCourseCustomFieldValuesforaSpecificCourse_apikey: '<node property>', // (1) define node properties
                GetCourseCustomFieldValuesforaSpecificCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetAllLearningPaths()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetAllLearningPaths',
                GetAllLearningPaths_source: '<node property>', // (1) define node properties
                GetAllLearningPaths_format: '<node property>', // (1) define node properties
                GetAllLearningPaths_contentType: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle AssignUserstoaLearningPath()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'AssignUserstoaLearningPath',
                AssignUserstoaLearningPath_source: '<node property>', // (1) define node properties
                AssignUserstoaLearningPath_includesubteams: '<node property>', // (1) define node properties
                AssignUserstoaLearningPath_contentType: '<node property>', // (1) define node properties
                AssignUserstoaLearningPath_body: '<node property>', // (1) define node properties
                AssignUserstoaLearningPath_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofLearningPathsAssignedtoaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofLearningPathsAssignedtoaUser',
                GetaListofLearningPathsAssignedtoaUser_source: '<node property>', // (1) define node properties
                GetaListofLearningPathsAssignedtoaUser_format: '<node property>', // (1) define node properties
                GetaListofLearningPathsAssignedtoaUser_contentType: '<node property>', // (1) define node properties
                GetaListofLearningPathsAssignedtoaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaSpecificLearningPath()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaSpecificLearningPath',
                GetaSpecificLearningPath_source: '<node property>', // (1) define node properties
                GetaSpecificLearningPath_format: '<node property>', // (1) define node properties
                GetaSpecificLearningPath_contentType: '<node property>', // (1) define node properties
                GetaSpecificLearningPath_lpId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofCoursesinaLearningPath()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofCoursesinaLearningPath',
                GetaListofCoursesinaLearningPath_source: '<node property>', // (1) define node properties
                GetaListofCoursesinaLearningPath_format: '<node property>', // (1) define node properties
                GetaListofCoursesinaLearningPath_contentType: '<node property>', // (1) define node properties
                GetaListofCoursesinaLearningPath_lpId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofUsersAssignedtoaLearningPath()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofUsersAssignedtoaLearningPath',
                GetaListofUsersAssignedtoaLearningPath_source: '<node property>', // (1) define node properties
                GetaListofUsersAssignedtoaLearningPath_format: '<node property>', // (1) define node properties
                GetaListofUsersAssignedtoaLearningPath_contentType: '<node property>', // (1) define node properties
                GetaListofUsersAssignedtoaLearningPath_lpId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle AssignLearningPathstoaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'AssignLearningPathstoaTeam',
                AssignLearningPathstoaTeam_source: '<node property>', // (1) define node properties
                AssignLearningPathstoaTeam_format: '<node property>', // (1) define node properties
                AssignLearningPathstoaTeam_sendmessage: '<node property>', // (1) define node properties
                AssignLearningPathstoaTeam_contentType: '<node property>', // (1) define node properties
                AssignLearningPathstoaTeam_body: '<node property>', // (1) define node properties
                AssignLearningPathstoaTeam_lpTeamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetLearningPathsAssignedtoaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetLearningPathsAssignedtoaTeam',
                GetLearningPathsAssignedtoaTeam_source: '<node property>', // (1) define node properties
                GetLearningPathsAssignedtoaTeam_format: '<node property>', // (1) define node properties
                GetLearningPathsAssignedtoaTeam_contentType: '<node property>', // (1) define node properties
                GetLearningPathsAssignedtoaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnAssignUsersfromaLearningPath()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UnAssignUsersfromaLearningPath',
                UnAssignUsersfromaLearningPath_source: '<node property>', // (1) define node properties
                UnAssignUsersfromaLearningPath_format: '<node property>', // (1) define node properties
                UnAssignUsersfromaLearningPath_contentType: '<node property>', // (1) define node properties
                UnAssignUsersfromaLearningPath_body: '<node property>', // (1) define node properties
                UnAssignUsersfromaLearningPath_userId: '<node property>', // (1) define node properties
                UnAssignUsersfromaLearningPath_lpId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle AssignaListofCoursestoaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'AssignaListofCoursestoaTeam',
                AssignaListofCoursestoaTeam_source: '<node property>', // (1) define node properties
                AssignaListofCoursestoaTeam_sendmessage: '<node property>', // (1) define node properties
                AssignaListofCoursestoaTeam_contentType: '<node property>', // (1) define node properties
                AssignaListofCoursestoaTeam_body: '<node property>', // (1) define node properties
                AssignaListofCoursestoaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnAssignaListofCoursesfromaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UnAssignaListofCoursesfromaTeam',
                UnAssignaListofCoursesfromaTeam_source: '<node property>', // (1) define node properties
                UnAssignaListofCoursesfromaTeam_contentType: '<node property>', // (1) define node properties
                UnAssignaListofCoursesfromaTeam_body: '<node property>', // (1) define node properties
                UnAssignaListofCoursesfromaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PromoteaUsertoTeamLeaderforaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'PromoteaUsertoTeamLeaderforaTeam',
                PromoteaUsertoTeamLeaderforaTeam_source: '<node property>', // (1) define node properties
                PromoteaUsertoTeamLeaderforaTeam_contentType: '<node property>', // (1) define node properties
                PromoteaUsertoTeamLeaderforaTeam_teamId: '<node property>', // (1) define node properties
                PromoteaUsertoTeamLeaderforaTeam_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DemoteaTeamLeaderonaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DemoteaTeamLeaderonaTeam',
                DemoteaTeamLeaderonaTeam_source: '<node property>', // (1) define node properties
                DemoteaTeamLeaderonaTeam_contentType: '<node property>', // (1) define node properties
                DemoteaTeamLeaderonaTeam_teamId: '<node property>', // (1) define node properties
                DemoteaTeamLeaderonaTeam_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamLeadersforaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamLeadersforaTeam',
                GetTeamLeadersforaTeam_source: '<node property>', // (1) define node properties
                GetTeamLeadersforaTeam_format: '<node property>', // (1) define node properties
                GetTeamLeadersforaTeam_apikey: '<node property>', // (1) define node properties
                GetTeamLeadersforaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PromoteaUsertoTeamAdminforaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'PromoteaUsertoTeamAdminforaTeam',
                PromoteaUsertoTeamAdminforaTeam_source: '<node property>', // (1) define node properties
                PromoteaUsertoTeamAdminforaTeam_contentType: '<node property>', // (1) define node properties
                PromoteaUsertoTeamAdminforaTeam_teamId: '<node property>', // (1) define node properties
                PromoteaUsertoTeamAdminforaTeam_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DemoteaTeamAdministratoronaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DemoteaTeamAdministratoronaTeam',
                DemoteaTeamAdministratoronaTeam_source: '<node property>', // (1) define node properties
                DemoteaTeamAdministratoronaTeam_contentType: '<node property>', // (1) define node properties
                DemoteaTeamAdministratoronaTeam_teamId: '<node property>', // (1) define node properties
                DemoteaTeamAdministratoronaTeam_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamAdministratorsforaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamAdministratorsforaTeam',
                GetTeamAdministratorsforaTeam_source: '<node property>', // (1) define node properties
                GetTeamAdministratorsforaTeam_format: '<node property>', // (1) define node properties
                GetTeamAdministratorsforaTeam_apikey: '<node property>', // (1) define node properties
                GetTeamAdministratorsforaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUsersinaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUsersinaTeam',
                GetUsersinaTeam_source: '<node property>', // (1) define node properties
                GetUsersinaTeam_format: '<node property>', // (1) define node properties
                GetUsersinaTeam_limit: '<node property>', // (1) define node properties
                GetUsersinaTeam_apikey: '<node property>', // (1) define node properties
                GetUsersinaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle AssignUserstoaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'AssignUserstoaTeam',
                AssignUserstoaTeam_source: '<node property>', // (1) define node properties
                AssignUserstoaTeam_format: '<node property>', // (1) define node properties
                AssignUserstoaTeam_contentType: '<node property>', // (1) define node properties
                AssignUserstoaTeam_body: '<node property>', // (1) define node properties
                AssignUserstoaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnAssignUsersfromaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UnAssignUsersfromaTeam',
                UnAssignUsersfromaTeam_source: '<node property>', // (1) define node properties
                UnAssignUsersfromaTeam_format: '<node property>', // (1) define node properties
                UnAssignUsersfromaTeam_contentType: '<node property>', // (1) define node properties
                UnAssignUsersfromaTeam_teamId: '<node property>', // (1) define node properties
                UnAssignUsersfromaTeam_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnAssignaUserfromAllTeams()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UnAssignaUserfromAllTeams',
                UnAssignaUserfromAllTeams_source: '<node property>', // (1) define node properties
                UnAssignaUserfromAllTeams_contentType: '<node property>', // (1) define node properties
                UnAssignaUserfromAllTeams_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetalistofAllTeamsaUserisAssignedto()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetalistofAllTeamsaUserisAssignedto',
                GetalistofAllTeamsaUserisAssignedto_source: '<node property>', // (1) define node properties
                GetalistofAllTeamsaUserisAssignedto_format: '<node property>', // (1) define node properties
                GetalistofAllTeamsaUserisAssignedto_apikey: '<node property>', // (1) define node properties
                GetalistofAllTeamsaUserisAssignedto_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofAllTeams()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofAllTeams',
                GetaListofAllTeams_source: '<node property>', // (1) define node properties
                GetaListofAllTeams_format: '<node property>', // (1) define node properties
                GetaListofAllTeams_limit: '<node property>', // (1) define node properties
                GetaListofAllTeams_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateaTeamorSubTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'CreateaTeamorSubTeam',
                CreateaTeamorSubTeam_source: '<node property>', // (1) define node properties
                CreateaTeamorSubTeam_format: '<node property>', // (1) define node properties
                CreateaTeamorSubTeam_contentType: '<node property>', // (1) define node properties
                CreateaTeamorSubTeam_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaTeam',
                GetaTeam_source: '<node property>', // (1) define node properties
                GetaTeam_format: '<node property>', // (1) define node properties
                GetaTeam_apikey: '<node property>', // (1) define node properties
                GetaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UpdateaTeam',
                UpdateaTeam_source: '<node property>', // (1) define node properties
                UpdateaTeam_format: '<node property>', // (1) define node properties
                UpdateaTeam_contentType: '<node property>', // (1) define node properties
                UpdateaTeam_body: '<node property>', // (1) define node properties
                UpdateaTeam_secondTeamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GETTeamTeam_Id()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GETTeamTeam_Id',
                GETTeamTeam_Id_source: '<node property>', // (1) define node properties
                GETTeamTeam_Id_format: '<node property>', // (1) define node properties
                GETTeamTeam_Id_apikey: '<node property>', // (1) define node properties
                GETTeamTeam_Id_secondTeamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteaTeamorSubteam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DeleteaTeamorSubteam',
                DeleteaTeamorSubteam_source: '<node property>', // (1) define node properties
                DeleteaTeamorSubteam_apikey: '<node property>', // (1) define node properties
                DeleteaTeamorSubteam_secondTeamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateaNewILTsessionforaModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'CreateaNewILTsessionforaModule',
                CreateaNewILTsessionforaModule_source: '<node property>', // (1) define node properties
                CreateaNewILTsessionforaModule_format: '<node property>', // (1) define node properties
                CreateaNewILTsessionforaModule_contentType: '<node property>', // (1) define node properties
                CreateaNewILTsessionforaModule_body: '<node property>', // (1) define node properties
                CreateaNewILTsessionforaModule_courseId: '<node property>', // (1) define node properties
                CreateaNewILTsessionforaModule_moduleId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofSessionsinanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofSessionsinanILTModule',
                GetaListofSessionsinanILTModule_source: '<node property>', // (1) define node properties
                GetaListofSessionsinanILTModule_format: '<node property>', // (1) define node properties
                GetaListofSessionsinanILTModule_apikey: '<node property>', // (1) define node properties
                GetaListofSessionsinanILTModule_courseId: '<node property>', // (1) define node properties
                GetaListofSessionsinanILTModule_moduleId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofFutureSessionsforanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofFutureSessionsforanILTModule',
                GetaListofFutureSessionsforanILTModule_source: '<node property>', // (1) define node properties
                GetaListofFutureSessionsforanILTModule_format: '<node property>', // (1) define node properties
                GetaListofFutureSessionsforanILTModule_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofallILTModulesinaCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofallILTModulesinaCourse',
                GetaListofallILTModulesinaCourse_source: '<node property>', // (1) define node properties
                GetaListofallILTModulesinaCourse_format: '<node property>', // (1) define node properties
                GetaListofallILTModulesinaCourse_apikey: '<node property>', // (1) define node properties
                GetaListofallILTModulesinaCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaSpecificSessioninanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaSpecificSessioninanILTModule',
                GetaSpecificSessioninanILTModule_source: '<node property>', // (1) define node properties
                GetaSpecificSessioninanILTModule_format: '<node property>', // (1) define node properties
                GetaSpecificSessioninanILTModule_apikey: '<node property>', // (1) define node properties
                GetaSpecificSessioninanILTModule_courseId: '<node property>', // (1) define node properties
                GetaSpecificSessioninanILTModule_moduleId: '<node property>', // (1) define node properties
                GetaSpecificSessioninanILTModule_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateaSessioninanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UpdateaSessioninanILTModule',
                UpdateaSessioninanILTModule_source: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_format: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_contentType: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_body: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_courseId: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_moduleId: '<node property>', // (1) define node properties
                UpdateaSessioninanILTModule_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteaSessioninanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DeleteaSessioninanILTModule',
                DeleteaSessioninanILTModule_source: '<node property>', // (1) define node properties
                DeleteaSessioninanILTModule_format: '<node property>', // (1) define node properties
                DeleteaSessioninanILTModule_apikey: '<node property>', // (1) define node properties
                DeleteaSessioninanILTModule_courseId: '<node property>', // (1) define node properties
                DeleteaSessioninanILTModule_moduleId: '<node property>', // (1) define node properties
                DeleteaSessioninanILTModule_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofAllInstructors()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofAllInstructors',
                GetaListofAllInstructors_source: '<node property>', // (1) define node properties
                GetaListofAllInstructors_format: '<node property>', // (1) define node properties
                GetaListofAllInstructors_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetSessionRollCallforaSession()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetSessionRollCallforaSession',
                GetSessionRollCallforaSession_source: '<node property>', // (1) define node properties
                GetSessionRollCallforaSession_format: '<node property>', // (1) define node properties
                GetSessionRollCallforaSession_contentType: '<node property>', // (1) define node properties
                GetSessionRollCallforaSession_courseId: '<node property>', // (1) define node properties
                GetSessionRollCallforaSession_moduleId: '<node property>', // (1) define node properties
                GetSessionRollCallforaSession_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MarkanILTSessionCompleteandaddScore()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'MarkanILTSessionCompleteandaddScore',
                MarkanILTSessionCompleteandaddScore_source: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_format: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_contentType: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_body: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_courseId: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_moduleId: '<node property>', // (1) define node properties
                MarkanILTSessionCompleteandaddScore_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetalistofUsersRegisteredtoaSession()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetalistofUsersRegisteredtoaSession',
                GetalistofUsersRegisteredtoaSession_source: '<node property>', // (1) define node properties
                GetalistofUsersRegisteredtoaSession_format: '<node property>', // (1) define node properties
                GetalistofUsersRegisteredtoaSession_contentType: '<node property>', // (1) define node properties
                GetalistofUsersRegisteredtoaSession_courseId: '<node property>', // (1) define node properties
                GetalistofUsersRegisteredtoaSession_moduleId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetuserAttendanceforaSession()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetuserAttendanceforaSession',
                GetuserAttendanceforaSession_source: '<node property>', // (1) define node properties
                GetuserAttendanceforaSession_format: '<node property>', // (1) define node properties
                GetuserAttendanceforaSession_contentType: '<node property>', // (1) define node properties
                GetuserAttendanceforaSession_courseId: '<node property>', // (1) define node properties
                GetuserAttendanceforaSession_moduleId: '<node property>', // (1) define node properties
                GetuserAttendanceforaSession_sessionId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MarkAttendanceforUsersRegisteredtoaSession()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'MarkAttendanceforUsersRegisteredtoaSession',
                MarkAttendanceforUsersRegisteredtoaSession_source: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_apikey: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_courseId: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_moduleId: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_sessionDayId: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_userId: '<node property>', // (1) define node properties
                MarkAttendanceforUsersRegisteredtoaSession_attended: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetaListofSessionsforaSpecificInstructor()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetaListofSessionsforaSpecificInstructor',
                GetaListofSessionsforaSpecificInstructor_source: '<node property>', // (1) define node properties
                GetaListofSessionsforaSpecificInstructor_format: '<node property>', // (1) define node properties
                GetaListofSessionsforaSpecificInstructor_apikey: '<node property>', // (1) define node properties
                GetaListofSessionsforaSpecificInstructor_instructorId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RegisteraUsertoaSession()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'RegisteraUsertoaSession',
                RegisteraUsertoaSession_source: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_format: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_apikey: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_courseId: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_moduleId: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_sessionId: '<node property>', // (1) define node properties
                RegisteraUsertoaSession_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateanILTModuleinaCourse()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'CreateanILTModuleinaCourse',
                CreateanILTModuleinaCourse_source: '<node property>', // (1) define node properties
                CreateanILTModuleinaCourse_format: '<node property>', // (1) define node properties
                CreateanILTModuleinaCourse_contentType: '<node property>', // (1) define node properties
                CreateanILTModuleinaCourse_body: '<node property>', // (1) define node properties
                CreateanILTModuleinaCourse_courseId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'UpdateanILTModule',
                UpdateanILTModule_source: '<node property>', // (1) define node properties
                UpdateanILTModule_format: '<node property>', // (1) define node properties
                UpdateanILTModule_contentType: '<node property>', // (1) define node properties
                UpdateanILTModule_body: '<node property>', // (1) define node properties
                UpdateanILTModule_courseId: '<node property>', // (1) define node properties
                UpdateanILTModule_eventId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteanILTModule()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'DeleteanILTModule',
                DeleteanILTModule_source: '<node property>', // (1) define node properties
                DeleteanILTModule_apikey: '<node property>', // (1) define node properties
                DeleteanILTModule_courseId: '<node property>', // (1) define node properties
                DeleteanILTModule_eventId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetAchievements()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetAchievements',
                GetAchievements_source: '<node property>', // (1) define node properties
                GetAchievements_format: '<node property>', // (1) define node properties
                GetAchievements_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTotalBadgesandPointsForUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTotalBadgesandPointsForUser',
                GetTotalBadgesandPointsForUser_source: '<node property>', // (1) define node properties
                GetTotalBadgesandPointsForUser_format: '<node property>', // (1) define node properties
                GetTotalBadgesandPointsForUser_apikey: '<node property>', // (1) define node properties
                GetTotalBadgesandPointsForUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetBadgesandPointsEarnedByUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetBadgesandPointsEarnedByUser',
                GetBadgesandPointsEarnedByUser_source: '<node property>', // (1) define node properties
                GetBadgesandPointsEarnedByUser_format: '<node property>', // (1) define node properties
                GetBadgesandPointsEarnedByUser_apikey: '<node property>', // (1) define node properties
                GetBadgesandPointsEarnedByUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetBadgesandPointsearnedbyaTeam()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetBadgesandPointsearnedbyaTeam',
                GetBadgesandPointsearnedbyaTeam_source: '<node property>', // (1) define node properties
                GetBadgesandPointsearnedbyaTeam_format: '<node property>', // (1) define node properties
                GetBadgesandPointsearnedbyaTeam_apikey: '<node property>', // (1) define node properties
                GetBadgesandPointsearnedbyaTeam_teamId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ResetBadgesandPointsForaUser()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'ResetBadgesandPointsForaUser',
                ResetBadgesandPointsForaUser_source: '<node property>', // (1) define node properties
                ResetBadgesandPointsForaUser_format: '<node property>', // (1) define node properties
                ResetBadgesandPointsForaUser_apikey: '<node property>', // (1) define node properties
                ResetBadgesandPointsForaUser_userId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUserDetailsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUserDetailsST',
                GetUserDetailsST_source: '<node property>', // (1) define node properties
                GetUserDetailsST_since: '<node property>', // (1) define node properties
                GetUserDetailsST_to: '<node property>', // (1) define node properties
                GetUserDetailsST_format: '<node property>', // (1) define node properties
                GetUserDetailsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamLearningPathsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamLearningPathsST',
                GetTeamLearningPathsST_source: '<node property>', // (1) define node properties
                GetTeamLearningPathsST_since: '<node property>', // (1) define node properties
                GetTeamLearningPathsST_to: '<node property>', // (1) define node properties
                GetTeamLearningPathsST_format: '<node property>', // (1) define node properties
                GetTeamLearningPathsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamUsersST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamUsersST',
                GetTeamUsersST_source: '<node property>', // (1) define node properties
                GetTeamUsersST_since: '<node property>', // (1) define node properties
                GetTeamUsersST_to: '<node property>', // (1) define node properties
                GetTeamUsersST_format: '<node property>', // (1) define node properties
                GetTeamUsersST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetResultsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetResultsST',
                GetResultsST_source: '<node property>', // (1) define node properties
                GetResultsST_since: '<node property>', // (1) define node properties
                GetResultsST_to: '<node property>', // (1) define node properties
                GetResultsST_format: '<node property>', // (1) define node properties
                GetResultsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamsST',
                GetTeamsST_source: '<node property>', // (1) define node properties
                GetTeamsST_since: '<node property>', // (1) define node properties
                GetTeamsST_to: '<node property>', // (1) define node properties
                GetTeamsST_format: '<node property>', // (1) define node properties
                GetTeamsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetCourseModulesST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetCourseModulesST',
                GetCourseModulesST_source: '<node property>', // (1) define node properties
                GetCourseModulesST_since: '<node property>', // (1) define node properties
                GetCourseModulesST_to: '<node property>', // (1) define node properties
                GetCourseModulesST_format: '<node property>', // (1) define node properties
                GetCourseModulesST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetAchievementsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetAchievementsST',
                GetAchievementsST_source: '<node property>', // (1) define node properties
                GetAchievementsST_since: '<node property>', // (1) define node properties
                GetAchievementsST_to: '<node property>', // (1) define node properties
                GetAchievementsST_format: '<node property>', // (1) define node properties
                GetAchievementsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetTeamCoursesST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetTeamCoursesST',
                GetTeamCoursesST_source: '<node property>', // (1) define node properties
                GetTeamCoursesST_since: '<node property>', // (1) define node properties
                GetTeamCoursesST_to: '<node property>', // (1) define node properties
                GetTeamCoursesST_format: '<node property>', // (1) define node properties
                GetTeamCoursesST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetLearningPathsCourseST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetLearningPathsCourseST',
                GetLearningPathsCourseST_source: '<node property>', // (1) define node properties
                GetLearningPathsCourseST_since: '<node property>', // (1) define node properties
                GetLearningPathsCourseST_to: '<node property>', // (1) define node properties
                GetLearningPathsCourseST_format: '<node property>', // (1) define node properties
                GetLearningPathsCourseST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetCoursesST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetCoursesST',
                GetCoursesST_source: '<node property>', // (1) define node properties
                GetCoursesST_since: '<node property>', // (1) define node properties
                GetCoursesST_to: '<node property>', // (1) define node properties
                GetCoursesST_format: '<node property>', // (1) define node properties
                GetCoursesST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetLearningPathsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetLearningPathsST',
                GetLearningPathsST_source: '<node property>', // (1) define node properties
                GetLearningPathsST_since: '<node property>', // (1) define node properties
                GetLearningPathsST_to: '<node property>', // (1) define node properties
                GetLearningPathsST_format: '<node property>', // (1) define node properties
                GetLearningPathsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetUserCoursesST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetUserCoursesST',
                GetUserCoursesST_source: '<node property>', // (1) define node properties
                GetUserCoursesST_since: '<node property>', // (1) define node properties
                GetUserCoursesST_to: '<node property>', // (1) define node properties
                GetUserCoursesST_format: '<node property>', // (1) define node properties
                GetUserCoursesST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetLearningPathsUsersST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetLearningPathsUsersST',
                GetLearningPathsUsersST_source: '<node property>', // (1) define node properties
                GetLearningPathsUsersST_since: '<node property>', // (1) define node properties
                GetLearningPathsUsersST_to: '<node property>', // (1) define node properties
                GetLearningPathsUsersST_format: '<node property>', // (1) define node properties
                GetLearningPathsUsersST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetModulesST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetModulesST',
                GetModulesST_source: '<node property>', // (1) define node properties
                GetModulesST_since: '<node property>', // (1) define node properties
                GetModulesST_to: '<node property>', // (1) define node properties
                GetModulesST_format: '<node property>', // (1) define node properties
                GetModulesST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetModulesResultsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetModulesResultsST',
                GetModulesResultsST_source: '<node property>', // (1) define node properties
                GetModulesResultsST_since: '<node property>', // (1) define node properties
                GetModulesResultsST_to: '<node property>', // (1) define node properties
                GetModulesResultsST_format: '<node property>', // (1) define node properties
                GetModulesResultsST_apikey: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle GetLearningPathResultsST()', function (done) {
        var flow = [
            { id: 'n1', type: 'Litmos', name: 'Litmos',
                method: 'GetLearningPathResultsST',
                GetLearningPathResultsST_source: '<node property>', // (1) define node properties
                GetLearningPathResultsST_since: '<node property>', // (1) define node properties
                GetLearningPathResultsST_to: '<node property>', // (1) define node properties
                GetLearningPathResultsST_format: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
