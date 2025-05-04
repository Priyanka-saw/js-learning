const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
        <table>
        <tr>-
        <th>key</th>
        <th>keyCode</th>
        <th>Code</th>
        </tr>
        <tr>
        <td>${e.key === " " ? 'space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
        </tr>
        <tr>
        </table>
        </div>  
    `
})

//keydown : is fired when a key is pressed 
// the keyup and keydown events provide a code indicating which key is pressed, while keypress indicates which character was entered
