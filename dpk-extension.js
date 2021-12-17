function changeParentFrame() {
    // Do here whatever your script requires. For example:
    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    } 
    
    if (parent.frames && !isFunction(parent.frames)) {
        var originParentFrames = parent.frames;
        parent.frames = function(name) {
        return originParentFrames[name];
        };
        console.log('Aplicando compatibilidade de browsers!')
        console.log(parent.frames)
        console.log('feito por: https://github.com/ooiuri')
    }
}

function embed(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
}

embed(changeParentFrame);
