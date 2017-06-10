	Autenticacao = function() {}
			
			Autenticacao.prototype.validarCampos= function() {
				
				elementoUsuario = document.getElementById("txtUsuario");
				txtUsuario = elementoUsuario.value;
				
				
				elementoSenha = document.getElementById("txtSenha");
				txtSenha = elementoSenha.value;
				
				
				if(txtUsuario=="" || txtSenha==""){
				window.alert("Os campos usuario e senha devem ser digitados");
					return false
				}else{
					return true;
				}
			}
		
		aut = new Autenticacao();