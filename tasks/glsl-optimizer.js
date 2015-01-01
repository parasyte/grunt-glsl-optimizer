module.exports = function (grunt) {
    function task() {
        var optimize = require("../lib/optimize");

        this.files.forEach(function (file) {
            var kind = file.orig.kind;
            if (!(kind in optimize)) {
                return grunt.fatal("Invalid kind: " + kind);
            }

            var src = grunt.file.read(file.src);
            grunt.file.write(file.dest, optimize[kind](src));
        });
    }

    grunt.registerMultiTask("glsl-optimizer", "Optimize your GLSL shaders!", task);
};
