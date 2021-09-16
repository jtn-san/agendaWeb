/**
 * Validacao de campos obrigatorios
 * Confirmação de exclusao
 * @author Jonathan
 */

function validar() {
	//Passo 2 do slide 21
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	//alert(nome + ' ' + fone)
	if (nome === '') {
		alert('Preencha o nome do contato')
		frmContato.nome.focus()
		return false
	} else if (fone === '') {
		alert('Preencha o telefone do contato')
		frmContato.fone.focus()
		return false
	} else {
		//a linha abiaxo envia os dados do formulario para camada controller 
		document.forms['frmContato'].submit() //Passo 3 slide 21
	}
}

// para excluir um contato

function confirmar(idcon){
	// confirm gera um alerta com uma caixa de opcoes
	let resposta = confirm('Confirma a eclusão deste contato?')
	if (resposta === true) {
		// após confirmado envia ao controller a requisiao delete e o idcon
		window.location.href = 'delete?idcon=' + idcon
	}	
}