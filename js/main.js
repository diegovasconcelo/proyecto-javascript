$(document).ready(function(){
 
  //slider
  if(window.location.href.indexOf('index')> -1){
	$('.galeria').bxSlider({
	    mode: 'fade',  //JSON con las opciones
	    captions: true,
	    slideWidth: 1200,
	    pager:true
	 });
  }
  

  //Posts
  if(window.location.href.indexOf('index') > -1){
	  var posts=[
		  {
		  	title:'Prueba de titulo 1',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
		  {
		  	title:'Prueba de titulo 2',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
		  {
		  	title:'Prueba de titulo 3',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
		  {
		  	title:'Prueba de titulo 4',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js,
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
		  {
		  	title:'Prueba de titulo 5',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js,
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
		  {
		  	title:'Prueba de titulo 6',
		  	date:'Publicado ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),//Propio de moment.js,
		  	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor vitae sapien vitae bibendum. Donec ut libero vulputate, semper ante ac, luctus nisl. Aenean vel sapien a sem aliquam porta. Maecenas in nisl at dolor ornare eleifend. Mauris egestas lobortis erat quis ultricies. Aliquam non mattis est, nec consequat eros. Praesent semper fermentum ipsum vel ultricies. Integer lobortis nibh leo, et blandit arcu semper mollis. Sed molestie fringilla commodo.'
		  },
	  ];
		  posts.forEach((item, index) => {
	  		var post = `
	  		<article class="post">
				<h2>${item.title}</h2> 
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
	  	`;
	  	$("#posts").append(post);
  });
	}

  

  //Selector de tema
  var theme=$('#theme');
  $('#to-green').click(function(){
  	theme.attr('href','css/green.css')
  });

  $('#to-red').click(function(){
  	theme.attr('href','css/red.css')
  });

  $('#to-blue').click(function(){
  	theme.attr('href','css/blue.css')
  });

  //scroll arriba de la web
  $('.subir').click(function(e){
  	e.preventDefault(); //Se  utiliza en este caso para prevenir que por link se acceda a la función

  	$('html, body').animate({
  		scrollTop:0
  	},500);

  	return false;
  });

  //login falso

  $('#login form').submit(function(){
  	var form_name=$('#form_name').val();

  	localStorage.setItem('form_name',form_name);//Nombre del indece del local storage + vble.
  });
	
	var form_name=localStorage.getItem('form_name');

  	if(form_name!=null && form_name!="undefined"){
  		var about_parrafo = $('#about p');

  	 	about_parrafo.html("<br><strong>¡Bienvenido, "+form_name +"!</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

  	 	$('#login').hide();

  	 	$('#logout').click(function(){
  	 		localStorage.clear(); 
  	 		location.reload(); //Para recargar la pagina
  	 	});
	}

	if(window.location.href.indexOf('about') > -1){
		$('#acordeon').accordion();
	}

	//reloj
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
			var reloj=moment().format('h:mm:ss');
			$('#reloj').html(reloj);
		},1000);
		
	}

	if(window.location.href.indexOf('contact') > -1){
		$("form input[name='date']").datepicker({
			dateFormat:'dd-mm-yy'
		});		

		$.validate({
	    	lang: 'es',
	    	errorMessagePosition:'top',
	    	scrollToTopOnError:true
	  	});
	}

});