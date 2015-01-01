module.exports = function (grunt) {
    "use strict";

    var sourceFiles = grunt.file.expand("tasks/**/*.js").concat(
        grunt.file.expand("lib/**/*.js")
    );

    // Project configuration.
    grunt.initConfig({
        "pkg" : grunt.file.readJSON("package.json"),

        "jshint" : {
            "options" : {
                "jshintrc" : ".jshintrc",
            },

            "files" : {
                "src" : [ sourceFiles, "Gruntfile.js" ],
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");

    // Default task.
    grunt.registerTask("default", [ "test" ]);

    grunt.registerTask("test", [ "jshint" ]);
    grunt.registerTask("lint", [ "jshint" ]);
};
