var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]
console.log(campos);

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo;
        tr.appendChild(td);
    });
    
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    campos[0].value = 'yyyy-MM-dd';
    campos[1].value = 1;
    campos [2].value = 0;

    // campos[0].focus;
});

// function clearFocus() {
//     campos[0] = ' '
//     campos[1] = 1
//     campos [2] = 0

//     campos[0].focus()
// }