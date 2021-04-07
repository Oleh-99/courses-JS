(function($) {
$(document).ready(function() {

	var arrData = [ ];
	var arrPost = [ ];
	var arrComm = [ ]
	var arrAlbum = [ ];
	var arrFoto = [ ];
	var arrTodo = [ ];


	function addUsers () {
		if (0 === arrData.length) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users', 
				async: false,
				success: function (data) { 
				
					for (let index = 0; index < data.length; index++) {
						arrData.push(data[index]);
						$('.users').append(
							`<div class="user" data-id="${data[index].id}">
								<div><img src="merak-testimonials-1.jpg" alt=""></div>
								<div class="name">${data[index].name}</div>
								<div class="username">${data[index].username}</div>
								<table>
									<tbody>
										<tr>
											<td>Email: </td>
											<td>${data[index].email}</td>
										</tr>
										<tr>
											<td>Phone: </td>
											<td>${data[index].phone}</td>
										</tr>
										<tr>
											<td>Company: </td>
											<td>${data[index].company.name}</td>
										</tr>
									</tbody>
								</table>
								<a href="#" class="btn btn-posts">Posts</a>
								<a href="#" class="btn btn-albums">Albums</a>
								<a href="#" class="btn btn-todos">Todos</a>
							</div>`
						);

					}

					$.ajax({
						url: `https://jsonplaceholder.typicode.com/posts?userId=${arrData[0].id}`, 
						dataType : "json",
						success: function (data) { 
							for (let index = 0; index < data.length; index++) {
								arrPost.push(data[index]);
								$('.posts .row').append(`
									<div class="col-4 post" data-post="${data[index].id}">
										<div class="title">${data[index].title}</div>
										<div class="text-comm">${data[index].body} ...</div>
									</div>`
								)
							}
						}
					})
				}
			});
		};
	}


	function addPostUser() {
		$(document).on('click', '.btn-posts', function(e) {
			e.preventDefault();
			let $this = $(this)
			let $user = $this.parent();
			let id = $user.data('id');
			let availability = false;

			$('.content').append('<div class="loader"></div>');
			$('.btn').removeClass('active');
			$('.user').removeClass('active');
			$this.addClass('active');
			$user.addClass('active');
			$('.post').remove();
			$('.album').remove();
			$('.album-foto').remove();
			$('.todo').remove();
			
			for (let index = 0; index < arrPost.length; index++) {
				if (arrPost[index].userId === id) {
					availability = true;
				}
			}
		
			if (!availability) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
					dataType : "json",
					async: false,
					success: function (data) { 
						for (let index = 0; index < data.length; index++) {
							arrPost.push(data[index]);
						}
					}
				})
			}

			for (let index = 0; index < arrPost.length; index++) {
				if (arrPost[index].userId === id) {
					$('.posts .row').append(`
						<div class="col-4 post" data-post="${arrPost[index].id}">
							<div class="title">${arrPost[index].title}</div>
							<div class="text-comm">${arrPost[index].body} ...</div>
						</div>
					`)
				}
			}
			setTimeout(function () {
				$('.loader').remove()
			}, 1000);
		});
	}

	function addComment () {
		$(document).on('click', '.post', function() {
			let $this = $(this);
			let id = $this.data('post');
			let availability = false;

			$('.content').append('<div class="loader"></div>');
			if($this.hasClass('active')) {
				$this.removeClass('active');
				$this.find('.comm').remove()
			} else {
				$('.post').removeClass('active');
				$this.addClass('active');

				for (let index = 0; index < arrComm.length; index++) {
					if (arrComm[index].postId === id) {
						availability = true;
					}
				}
			
				if (!availability) {
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`, 
						dataType : "json",
						async: false,
						success: function (data) { 
							for (let index = 0; index < data.length; index++) {;
								arrComm.push(data[index]);
							}
						}
					})
				}

				for (let index = 0; index < arrComm.length; index++) {
					if (arrComm[index].postId === id) {
						$this.append(
							`<div class="comm" data-comm="${arrComm[index].id}">
								<div class="comm-name">${arrComm[index].name}</div>
								<div class="comm-email">${arrComm[index].email}</div>
								<div class="comm-body">${arrComm[index].body}</div>
							</div>`
						);
					}
				}
			}
			setTimeout(function () {
				$('.loader').remove()
			}, 1000);
		});
	}

	function addAlbumsUser() {
		$(document).on('click', '.btn-albums', function(e) {
			e.preventDefault();
			$this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');
			let availability = false;

			$('.content').append('<div class="loader"></div>');
			$('.btn').removeClass('active');
			$('.user').removeClass('active');
			$this.addClass('active');
			$user.addClass('active');
			$('.post').remove();
			$('.album').remove();
			$('.album-foto').remove();
			$('.todo').remove();

			for (let index = 0; index < arrAlbum.length; index++) {
				if (arrAlbum[index].userId === id) {
					availability = true;
				}
			}
			
			if (!availability) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/albums?userId=${id}`, 
					dataType : "json",
					async: false,
					success: function (data) { 
						for (let index = 0; index < data.length; index++) {
							arrAlbum.push(data[index]);
						}
					}
				})
			}

			for (let index = 0; index < arrAlbum.length; index++) {
				if (arrAlbum[index].userId === id) {
					$('.posts .row').append(`
						<div class="col-3 album" data-albums="${arrAlbum[index].id}">
							<div class="title">${arrAlbum[index].title}</div>
						</div>
					`)
				}
			}
			setTimeout(function () {
				$('.loader').remove()
			}, 1000);
		});
	}


	function addAlbumUser() {
		$(document).on('click', '.album', function() {
			$this = $(this);
			
			let id = $this.data('albums');
			let availability = false;

			$('.content').append('<div class="loader"></div>');
			$('.album').remove();
			$('.album-foto').remove();
			
			for (let index = 0; index < arrFoto.length; index++) {
				if (arrFoto[index].albumId === id) {
					availability = true;
				}
			}
			
			if (!availability) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`, 
					dataType : "json",
					async: false,
					success: function (data) { 
						for (let index = 0; index < data.length; index++) {
							arrFoto.push(data[index]);
						}
					}
				})
			}

			for (let index = 0; index < arrFoto.length; index++) {
				if (arrFoto[index].albumId === id) {
					$('.posts .row').append(`
						<div class="col-3 album-foto" data-post="${arrFoto[index].id}">
							<div><img src="${arrFoto[index].thumbnailUrl}"</div>
							<div class="title">${arrFoto[index].title}</div>
						</div>
					`)
				}
			}
			setTimeout(function () {
				$('.loader').remove()
			}, 1000);
		});
	}

	function addTodosUser() {
		$(document).on('click', '.btn-todos', function(e) {
			e.preventDefault();
			$this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');
			let availability = false;

			$('.content').append('<div class="loader"></div>');
			$('.btn').removeClass('active');
			$('.user').removeClass('active');
			$this.addClass('active');
			$user.addClass('active');
			$('.post').remove();
			$('.album').remove();
			$('.album-foto').remove();
			$('.todo').remove();

			for (let index = 0; index < arrTodo.length; index++) {
				if (arrTodo[index].userId === id) {
					availability = true;
				}
			}
			
			if (!availability) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`, 
					dataType : "json",
					async: false,
					success: function (data) { 
						for (let index = 0; index < data.length; index++) {
							arrTodo.push(data[index]);
						}
					}
				})
			}

			for (let index = 0; index < arrTodo.length; index++) {
				if (arrTodo[index].userId === id) {
					// let check;
					// if (arrTodo[index].completed === true) {
					// 	check = checked;
					// }
					$('.posts .row').append(`
						<div class="col-3 todo" data-todo="${arrTodo[index].id}">
							<div class="todo-title">${arrTodo[index].title}</div>
							<input type="checkbox">
						</div>
					`)
					
				}
			}
			setTimeout(function () {
				$('.loader').remove()
			}, 1000);
		});
	}



	addUsers ();
	addPostUser();
	addComment ();
	addAlbumsUser();
	addAlbumUser();
	addTodosUser()

})
})(jQuery);