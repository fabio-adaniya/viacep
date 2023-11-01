$("#campoConsultaCep").keypress(function(event){
	if(event.which == 13)
		consultar();
});

$("#button-consultar").click(function(){
	consultar();
});

function consultar()
{
	cep = $("#campoConsultaCep").val();
	cep = cep.replace("-", "");
	cep = cep.trim();

	if(cep.length == 8)
	{
		$.ajax({
			url: "https://viacep.com.br/ws/" + cep + "/json/",
		}).done(function(response){
			$("#campoLogradouro").val(response.logradouro);
			$("#campoComplemento").val(response.complemento);
			$("#campoBairro").val(response.bairro);
			$("#campoLocalidade").val(response.localidade + ", " + response.uf);
		});
	}
	else
	{
		let erro = "O CEP informado é inválido";
		console.log(erro);
		alert(erro);
	}
}