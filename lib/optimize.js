var glsl = require("mapbox-glsl-optimizer");

var target = glsl.TARGET_OPENGLES20;
var compiler = new glsl.Compiler(target);

function optimize(kind, name) {
    return function(source) {
        var shader = new glsl.Shader(compiler, kind, source);
        if (!shader.compiled()) {
            throw new Error("Failed to optimize " + name + " shader");
        }

        var output = shader.output();
        shader.dispose();

        return output;
    };
}

module.exports = {
    "fragment" : optimize(glsl.FRAGMENT_SHADER, "fragment"),
    "vertex" : optimize(glsl.VERTEX_SHADER, "vertex"),
};
