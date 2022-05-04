	/***************************************************
	Funcoes 
	***************************************************/
	 $(document).ready(function () {
		 /* links paginas */
		$('#idBtnProd').click(function(){
			//alert('btnprod');
			location.href = 'produtos.php';
		});
	
		/* estilos progress bars */
		$("#idDivPbarPhp").mouseover(function() {
			$(this).css({"background-color": "blue"});
			$("#idPhp").css({"font-weight": "bold"});
		});
		$("#idDivPbarPhp").mouseout(function() {
			$(this).css({"background-color": "rgb(51, 73, 172)"});
			$("#idPhp").css({"font-weight": "500"});
		});
		$("#idDivPbarJava").mouseover(function() {
			$(this).css({"background-color": "red"});
			$("#idJava").css({"font-weight": "bold"});
		});
		$("#idDivPbarJava").mouseout(function() {
			$(this).css({"background-color": "rgb(173, 81, 81)"});
			$("#idJava").css({"font-weight": "500"});
		});
		$("#idDivPbarHtml").mouseover(function() {
			$("#idHtml").css({"font-weight": "bold"});
			$(this).css({"background-color": "grey"});
		});
		$("#idDivPbarHtml").mouseout(function() {
			$("#idHtml").css({"font-weight": "500"});
			$(this).css({"background-color": "rgb(91, 93, 99)"});
		});
		$("#idDivPbarCss").mouseover(function() {
			$("#idCss").css({"font-weight": "bold"});
			$(this).css({"background-color": "green"});
		});
		$("#idDivPbarCss").mouseout(function() {
			$("#idCss").css({"font-weight": "500"});
			$(this).css({"background-color": "darkcyan"});
		});
		$("#idDivPbarJs").mouseover(function() {
			$("#idJs").css({"font-weight": "bold"});
			$(this).css({"background-color": "orange"});
		});
		$("#idDivPbarJs").mouseout(function() {
			$("#idJs").css({"font-weight": "500"});
			$(this).css({"background-color": "darksalmon"});
		});

	
	});
	
	function goToWhatsapp(fonenumber){
		//alert(fonenumber);
		window.open('https://api.whatsapp.com/send?phone=5548'+fonenumber+'&text=Mensagem%20a%20partir%20do%20site:', '_blank');
	}
	  //
	
	//**** funcção da caixinha de mensagem *******
	function sendBoxMsg() {
		var fname = $("#useusername").val();
		var email = $("#useremail").val();
		var message = $("#usermsg").val();
		// check if all the fields are filled
		if (fname == '') {
			//alert('Informe seu nome!');
			$("#useusername").focus();
			return false;
		}
		if (email == '') {
			//alert('Informe seu email!');
			$("#useremail").focus();
			return false;
		}
		if (message == '') {
			//alert('Escreva sua mensagem...');
			$("#usermsg").focus();
			return false;
		}
	
		var dataString = 'fname='+$("#useusername").val()+'&email='+$("#useremail").val()+'&message='+$("#usermsg").val()+'';
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: 'contact.php',
			data: dataString,
		   /* dataType: 'json',*/
			success: function (data) {
				//$("dados").html(data);
				var str = jQuery.trim(data);
				if (str == '0') {
					$("#submitmsg").fadeOut();
					var html_res = '<div class="alert-content"><button type="button" id="idBtnClose" class="close idBtnClose" data-dismiss="alert-content">x</button>Não foi possível enviar a mensagem.<br> Tentenovamente mais tarde...!</div>';
					$("div#resp").removeClass('alert-success').addClass('alert-error').show().html(html_res);
				}
				else if (str == '1') {
					$("#submitmsg").hide();
					var html_res = '<div class="alert-content"><button type="button" id="idBtnClose" class="close idBtnClose" data-dismiss="alert-content">x</button>Mensagemenviada com sucesso!</div>';
					$("div#resp").removeClass('alert-error').addClass('alert-success').show().html(html_res);
					setTimeout('$("#msgWrapper").fadeOut("slow");', 5500);
				}
				//sendSmsMsg();
			},
			error: function (error) {
				$("div#output").removeClass('alert-success').addClass('alert-error').show().html('<div class="alert-content"><button type="button" id="idBtnClose" class="close idBtnClose" data-dismiss="alert-content">x</button>Execução interrompida. Contacte o suporte... </div>' + error);
				setTimeout('$("#msgWrapper").fadeOut("slow");', 5500);
				//sendSmsMsg();
			}
		});
	}
	
	function fun_log() {

        console.log('--fun_log--');

        var funCod = '1';
        var url = './fun_gen.php';
        $.ajax({
            type: "POST",
            url: url,
            data: {funcontrol: funCod},
            // dataType: "json",
            success: function(data){
				//$('#idDiv1').fadeIn('fast');$('#idDiv1').html(('> SUCCESS: '+data));
                console.log(data);
            },
            error: function(jqXHR, status, error) {
                console.log(status, error);
				$('#idDiv1').fadeIn('fast');$('#idDiv1').html(('Error: '+error));
            }
        });
    }
	
	fun_log();
