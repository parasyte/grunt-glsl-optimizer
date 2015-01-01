# grunt-glsl-optimizer

Optimize your GLSL shaders!

Based on [glslify-optimize](https://github.com/hughsk/glslify-optimize)

## Install

    npm install grunt-glsl-optimizer --save-dev

## Example Gruntfile.js

```javascript
module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    "glsl-optimizer" : {
      dist : {
        files : [
          {
            kind : "fragment",
            src : "src/video/webgl/fragment.glsl",
            dest : "build/fragment.glsl"
          },
          {
            kind : "vertex",
            src : "src/video/webgl/vertex.glsl",
            dest : "build/vertex.glsl"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-glsl-optimizer");

  grunt.registerTask("default", "glsl-optimizer");
};

```
