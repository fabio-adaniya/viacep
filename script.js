function consultar()
{
	cep = document.getElementById("campoCep").value
	cep = cep.replace("-", "")

	if (validarCep())
	{
		busca = new XMLHttpRequest()
		busca.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", false)
		busca.send()
		console.log(busca.responseText)

		retorno = JSON.parse(busca.responseText)
		document.getElementById("campoLogradouro").value = retorno.logradouro
		document.getElementById("campoComplemento").value = retorno.complemento
		document.getElementById("campoBairro").value = retorno.bairro
		document.getElementById("campoLocalidade").value = retorno.localidade
		document.getElementById("campoUF").value = retorno.uf
	}
	else
		console.log("O CEP informado é inválido")
}

function validarCep(validar)
{
	resultado = true
	return resultado
}