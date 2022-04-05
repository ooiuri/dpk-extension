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

function fChecaCGC() {
    var CGCCPF ='';
    if(document.frmValidaCGC.txtCGC.value==''){
        alert('Digite o CGC');
        document.frmValidaCGC.txtCGC.focus();
        return false;
    }
    else{
        CGCCPF = document.frmValidaCGC.txtCGC.value;
        if (CGCCPF.length<12){
            if (isCPFCNPJ(document.frmValidaCGC.txtCGC,1)==true){
                window.location.href = 'ValidaCGC.asp?action=2&vCGC='+document.frmValidaCGC.txtCGC.value;
            }
        }
        else {
            if (isCPFCNPJ(document.frmValidaCGC.txtCGC,2)==true){
                window.location.href = 'ValidaCGC.asp?action=2&vCGC='+document.frmValidaCGC.txtCGC.value;
            }
        }
    }
}

function embed(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    
    document.documentElement.appendChild(script);
}

function embedfChecaCGC(fn) {
    const script = document.createElement("script");
    script.text = `${fn.toString()}`;

    document.documentElement.appendChild(script);
}

embed(changeParentFrame);
embedfChecaCGC(fChecaCGC);
