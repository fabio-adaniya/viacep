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

	if($.isNumeric(cep))
	{
		if(cep.length == 8)
			$.ajax({
				url: "https://viacep.com.br/ws/" + cep + "/json/",
			}).done(function(response){
				$("#campoLogradouro").val(response.logradouro);
				$("#campoComplemento").val(response.complemento);
				$("#campoBairro").val(response.bairro);
				$("#campoLocalidade").val(response.localidade + ", " + response.uf);

				Swal.fire({
					icon: 'success',
					title: 'Consulta realizada com sucesso!',
				});
			});
		else
			Swal.fire({
				icon: 'error',
				title: 'O CEP informado é inválido!',
			});
	}
	else if(cep.length == 0)
	{
		Swal.fire({
			icon: 'warning',
			title: 'Nenhum CEP foi informado!',
		});
	}
	else
	{
		Swal.fire({
			icon: 'error',
			title: 'O CEP informado é inválido!',
		});
	}
}