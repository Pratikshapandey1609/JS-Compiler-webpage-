

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula'
});

var output = document.getElementById('output');
output.style.width = '100%';

console.log = function (message) {
    output.innerText += message + '\n';
};

function runCode() {
    output.innerText = '';
    var code = editor.getValue();
    try {
        var result = eval(code);
        if (result !== undefined) {
            output.innerText += result + '\n';
        }
    } catch (error) {
        output.innerText += error + '\n';
    }
}

editor.on('change', function () {
    runCode();
});

runCode();
