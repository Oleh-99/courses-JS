(function($) {

	function addUsers() {
		var arrData = [];
		if (0 === arrData.length) {
			loaderShow();
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users', 
				async: false,
				// beforeSend: function() {
					
				// },
				success: function(data) { 
				
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
					};
					$('.user').first().find('.btn-posts').trigger('click');
				},
				error: function() {
					alert('Error');
				},
				complete: function() {
					loaderHide();
				}
			});
		};
	}

	function addUsersPost() {
		var arrPost = [];
		$(document).on('click', '.btn-posts', function(e) {
			e.preventDefault();
			
			let $this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');

			// $('.content').append('<div class="loader"></div>');
			removeContent();
			$this.addClass('active');
			$user.addClass('active');
		
			if (typeof arrPost['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
					dataType : "json",
					async: false,
					// beforeSend: function() {
						
					// },
					success: function (data) { 
						arrPost['userId_' + id] = data;
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				})
			} 

			for (let index = 0; index < arrPost[`userId_${id}`].length; index++) {
				$('.posts .row').append(`
					<div class="col-4 post" data-post="${arrPost[`userId_${id}`][index].id}">
						<div class="title">${arrPost[`userId_${id}`][index].title}</div>
						<div class="text-comm">${arrPost[`userId_${id}`][index].body} ...</div>
						<button class="btn btn-comm">View comments</button>
					</div>`
				);
			};
			
			// setTimeout(function () {
			// 	// $('.loader').remove();
			// }, 1000);
		});
	}

	function addComment() {
		var arrComm = [];
		$(document).on('click', '.btn-comm', function() {
			let $this = $(this);
			let $thisParent = $this.parent();
			let id = $thisParent.data('post');

			// $('.content').append('<div class="loader"></div>');
			if ($this.hasClass('active')) {
				$this.removeClass('active').text('View comments');
				$thisParent.removeClass('active').find('.comm').remove();
			} else {
				$this.addClass('active').text('Hidden comments');
				$thisParent.addClass('active');

				if (typeof arrComm['postId_' + id] === 'undefined') {
					loaderShow();
					$.ajax({
						url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`, 
						dataType : "json",
						async: false,
						// beforeSend: function() {
						// 	loaderShow();
						// },
						success: function (data) { 
							arrComm['postId_' + id] = data;
						},
						error: function() {
							alert('Error');
						},
						complete: function() {
							loaderHide();
						}
					})
				} 
	
				for (let index = 0; index < arrComm[`postId_${id}`].length; index++) {
					$thisParent.append(
						`<div class="comm" data-comm="${arrComm[`postId_${id}`][index].id}">
							<div class="comm-name">${arrComm[`postId_${id}`][index].name}</div>
							<div class="comm-email">${arrComm[`postId_${id}`][index].email}</div>
							<div class="comm-body">${arrComm[`postId_${id}`][index].body}</div>
						</div>`
					);
				}
			};

			// setTimeout(function () {
			// 	// $('.loader').remove()
			// }, 1000);
		});
	}

	function addUsersAlbums() {
		var arrAlbum = [];
		$(document).on('click', '.btn-albums', function(e) {
			e.preventDefault();
			$this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');

			// $('.content').append('<div class="loader"></div>');
			removeContent();
			$this.addClass('active');
			$user.addClass('active');
			

			if (typeof arrAlbum['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/albums?userId=${id}`,  
					dataType : "json",
					async: false,
					// beforeSend: function() {
					// 	loaderShow();
					// },
					success: function (data) { 
						arrAlbum['userId_' + id] = data;
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				})
			} 

			for (let index = 0; index < arrAlbum[`userId_${id}`].length; index++) {
				$('.posts .row').append(`
					<div class="col-3 album" data-albums="${arrAlbum[`userId_${id}`][index].id}">
						<div class="title">${arrAlbum[`userId_${id}`][index].title}</div>
					</div>
				`)
			};

			// setTimeout(function() {
			// 	// $('.loader').remove();
			// }, 1000);
		});
	}


	function addFotoAlbum() {
		var arrFoto = [];
		$(document).on('click', '.album', function() {

			let id = $(this).data('albums');

			//$('.content').append('<div class="loader"></div>');
			$('.album').remove();
			
			if (typeof arrFoto['albumId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`, 
					dataType : "json",
					async: false,
					// beforeSend: function() {
					// 	loaderShow();
					// },
					success: function (data) { 
						arrFoto['albumId_' + id] = data;
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				})
			}

			for (let index = 0; index < arrFoto['albumId_' + id].length; index++) {
				$('.posts .row').append(`
					<div class="col-3 album-foto" data-post="${arrFoto['albumId_' + id][index].id}">
						<div><img src="${arrFoto['albumId_' + id][index].thumbnailUrl}"</div>
						<div class="title">${arrFoto['albumId_' + id][index].title}</div>
					</div>
				`)
			}
			// setTimeout(function () {
			// 	// $('.loader').remove()
			// }, 1000);
		});
	}

	function addUsersTodos() {
		arrTodo = [];
		$(document).on('click', '.btn-todos', function(e) {
			e.preventDefault();
			$this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');

			// $('.content').append('<div class="loader"></div>');
			removeContent ();
			$this.addClass('active');
			$user.addClass('active');
			
			if (typeof arrTodo['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`, 
					dataType : "json",
					async: false,
					// beforeSend: function() {
					// 	loaderShow();
					// },
					success: function (data) { 
						arrTodo['userId_' + id] = data;
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				})
			}

			for (let index = 0; index < arrTodo['userId_' + id].length; index++) {
				let check;
				if ( arrTodo['userId_' + id][index].completed === true) {
					check = '<input type="checkbox" checked>';
				} else {
					check = '<input type="checkbox">';
				}
				$('.posts .row').append(`
					<div class="col-3 todo" data-todo="${arrTodo['userId_' + id][index].id}">
						<div class="todo-title">${arrTodo['userId_' + id][index].title}</div>
						${check}
					</div>`
				);
			}
			// setTimeout(function () {
			// 	// $('.loader').remove()
			// }, 1000);
		});
	}

	function removeContent () {
		$('.btn').removeClass('active');
		$('.user').removeClass('active');
		$('.post').remove();
		$('.album').remove();
		$('.album-foto').remove();
		$('.todo').remove();
	} 

	function loaderShow() {
		$('.loader').show(1000)
	}
	function loaderHide() {
		$('.loader').hide(1000)
	}

	$(document).ready(function() {
		addUsersPost();
		addUsers();
		addComment();
		addUsersAlbums();
		addFotoAlbum();
		addUsersTodos();
		// loaderHide();
	})
})(jQuery);