document.addEventListener("keypress", function(e) {
	if(e.key === 'Enter')
		consultar()
});

function consultar()
{
	let cep = document.getElementById("campoConsultaCep").value

	if (validarCep())
	{
		let busca = new XMLHttpRequest()
		busca.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", false)
		busca.send()
		console.log(busca.responseText)

		let retorno = JSON.parse(busca.responseText)
		document.getElementById("campoLogradouro").value = retorno.logradouro
		document.getElementById("campoComplemento").value = retorno.complemento
		document.getElementById("campoBairro").value = retorno.bairro
		document.getElementById("campoLocalidade").value = retorno.localidade + ", " + retorno.uf
	}
	else
	{
		let erro = "O CEP informado é inválido"
		console.log(erro)
		alert(erro)
	}
}

function validarCep()
{
	let resultado = true

	let cep = document.getElementById("campoConsultaCep").value
	cep = cep.replace("-", "")
	cep = cep.trim()

	if (cep.length != 8)
		resultado = false

	return resultado
}