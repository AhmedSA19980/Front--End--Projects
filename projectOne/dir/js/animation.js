




/*window.onload = hacking;//Llamamos a la funcion despues de que el documento ha sido cargado completamente
function hacking(){
	var c = document.getElementById("umarcbs");
	c.height = window.innerHeight;  //innerHeight se utiliza para saber la altura de la pantalla
	c.width = window.innerWidth;    //innerHeight se utiliza para saber la altura de la pantalla
	
	
	var letraTam=12; //Tamaño de la letras por pixel
	var columnas=c.width/letraTam; //El ancho dividido por el tamano que tendra las letras

	var letras=[];
	for(var i=0; i<columnas;i++){
		letras[i]=1;//Siver para saber la cantidad de letras que tendra en la pantalla
			
	}
	contexto= c.getContext('2d');//Muy importante especificar el contexto en el cual vamos a trabajar
	
	function dibujar(){
		contexto.fillStyle="rgba(0,0,0,0.05)";//Damos el color que tendra el recuadro en el que estara la animacion. en este caso sera transparente 0.05
		contexto.fillRect(0,0,c.width,c.height);//Damos las dimensiones alto y ancho que tendra el cuadrado, que en este caso es de toda la pantalla

		contexto.fillStyle= "#00b07c";//Color de las letras
		contexto.font= letraTam+"px digital-7";//Tamaño de la letra

		for(var i=0;i<letras.length;i++){
			text=elegirTexto();
			Texto=text.split("");
			
			contexto.fillText(Texto, i*letraTam, letras[i]*letraTam);//Para imprimir texto disponesmos de fillText(texto,x,y)
			

			if(letras[i]*letraTam > c.height && Math.random()>0.975){
				letras[i]=0;
			}
			letras[i]++;

		}

	}
	//La funcion elegirTexto me permite elegir aleatoriamente el texto a utilizar en un cajon o columna
	//Esto lo conseguimos gracias a la tabla de caracteres ASCII con los cuales podremos convertir el valor
	//Numerico al valor real. 
		function elegirTexto(){
		var numTexto=Math.floor((Math.random()*94)+33);//Elegimos un caso en base a un numero aleatorio
				return String.fromCharCode(parseInt(numTexto));//Convertimos el valor a entero y despues a su valor correspondiente ASCII
			}
	setInterval(dibujar,120);//velocidad a la que se ejecuta la funcion en milisegundos

}*/


//get Context

/*The Canvas element has an in-built DOM method referred to as 
getContext. It is a JavaScript function utilized in 
accessing the rendering context together with its drawing methods. 
This function accepts a single parameter, which is usually the
2D graphics context (defined as “2d”). Example of JavaScript Canvas 
Code */



//fillStyle = “color”—it adds color to the shape; otherwise, it will have a default color of black

//fillRect(x,y,width,height)—it draws a filled rectangle

//strokeRect(x,y,width,height)—it gives the rectangle its outline

//clearRect(x,y,width,height)—it clears the specified rectangular section and makes it entirely transparent

// The fillText() method draws filled text on the canvas. The default color of the text is black.








