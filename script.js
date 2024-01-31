const form = document.getElementById('form-contact');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    handleSubmit(e);
});


function adicionaLinha() {
    const inputContact = document.getElementById('contact-add');
    const inputNumber = document.getElementById('number-contact');

    if (contatos.includes(inputContact.value)) {
        document.querySelector('.failure-message').style.display = 'block';

    } else {

        contatos.push(inputContact.value);

        let linha = '<tr>';

        linha += `<td> ${inputContact.value}</td>`
        linha += `<td> ${inputNumber.value}</td>`
        linha += `</tr>`;
    
        linhas += linha
    }

    inputContact.value = '';
inputNumber.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function handleSubmit(e) {
    
    e.preventDefault();
    const failureMessage = document.querySelector('.failure-message');

    setTimeout(() => {
        
        failureMessage.style.display = 'none';
    }, 6000); 
}