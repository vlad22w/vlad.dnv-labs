 // scrip5.js 

document.getElementById('go').addEventListener('click', function () {

    var inputText = document.getElementById('source-text').value.toUpperCase(); 

    var resultContainer = document.getElementById('result-text');

    resultContainer.innerHTML = '';
    
    for (var i = 0; i < inputText.length; i++) {

        var img = document.createElement('img');

        img.src = './5img/' + inputText[i] + '.png'; 

        resultContainer.appendChild(img);
    }
});

