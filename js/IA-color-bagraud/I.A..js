		//Inicializar red neuronal
		var network = new brain.NeuralNetwork();

		//Entrenarla
		//texto blanco, o texto negro segun el fondo
		network.train([
								//texto blanco//

			//Fondo negro (entrada en 0s) = texto blanco (salida = 1)
			{input: {rojo: 0, verde: 0, azul: 0}, output: {color: 1}},
			//Fondo azul, texto blanco
			{input: {rojo: 0, verde: .43, azul: 1}, output: {color: 1}},
			//Fondo rojo, texto blanco
			{input: {rojo: 1, verde: 0, azul: 0}, output: {color: 1}},

								//texto negro//

			//Fondo blanco (entrada en 1s) = texto negro (salida = 0)
			{input: {rojo: 1, verde: 1, azul: 1}, output: {color: 0}},
			//Fondo verde, texto negro
			{input: {rojo: 0, verde: 1, azul: 0}, output: {color: 0}},
			//fondo mas claro, texto negro
			{input: {rojo:.02, verde:.96, azul: 1}, output: {color: 0}},
		]);

		function colorBagrand(color) {
            if (document.getElementById("cambio-color-background").checked == true) {
                //Cambio de color body
                c = document.getElementById("color-background").value;
                document.body.style.backgroundColor = c;
                document.getElementById("color-background-body").style.color = c;
				
				var rgb = [color.channels.r, color.channels.g, color.channels.b];
				console.log(rgb);

				//Tomar el fondo actual elegido por el usuario,
				//para usarlo de entrada para que la red nos de su
				//prediccion del mejor color de texto a utilizar
				var entrada = {
					rojo: rgb[0]/255,
					verde: rgb[1]/255,
					azul: rgb[2]/255,
				};

				//Obtener la prediccion de la red
				var resultado = network.run(entrada);
				//console.log(resultado);

				//Si resultado > .5, se considera color de texto blanco
			    if (resultado.color > .5) {
                    //ajuste de color texto ajustar y si icono
			    	document.getElementById("text-options").style.color = "white";
                    document.getElementById("color-background-options").style.color = "white";
                    //cambio de color iconos clear
                    document.getElementById("clear-textarea-icon").style.color = "white";
                    document.getElementById("color-background-clear").style.color = "white";
                    document.getElementById("clear-textarea-icon-reset").style.color = "white";
			    } else {
                    //ajuste de color texto ajustar y si icono
			    	document.getElementById("text-options").style.color = "black";
                    document.getElementById("color-background-options").style.color = "black";
                    //cambio de color iconos clear
                    document.getElementById("clear-textarea-icon").style.color = "black";
                    document.getElementById("color-background-clear").style.color = "black";
                    document.getElementById("clear-textarea-icon-reset").style.color = "black";
			    };
            };
		};