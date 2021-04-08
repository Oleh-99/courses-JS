(function($) {

	function addUsers() {
		var arrData = [];
		if (0 === arrData.length) {
			loaderShow();
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users', 
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

			removeContent();
			$this.addClass('active');
			$user.addClass('active');
		
			if (typeof arrPost['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
					dataType : "json",
					success: function (data) { 
						arrPost['userId_' + id] = data;
						renderPost(arrPost[`userId_${id}`]);
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				});
			} else {
				renderPost(arrPost[`userId_${id}`]);
			} 
		});
	}

	function addComment() {
		var arrComm = [];
		$(document).on('click', '.btn-comm', function() {
			let $this = $(this);
			let $thisParent = $this.parent();
			let id = $thisParent.data('post');

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
						success: function (data) { 
							arrComm['postId_' + id] = data;
							renderComment(arrComm[`postId_${id}`], $thisParent);
						},
						error: function() {
							alert('Error');
						},
						complete: function() {
							loaderHide();
						}
					});
				} else {
					renderComment(arrComm[`postId_${id}`], $thisParent);
				};
			};
		});
	}

	function addUsersAlbums() {
		var arrAlbum = [];
		$(document).on('click', '.btn-albums', function(e) {
			e.preventDefault();
			let $this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');

			removeContent();
			$this.addClass('active');
			$user.addClass('active');
			
			if (typeof arrAlbum['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/albums?userId=${id}`,  
					dataType : "json",
					success: function (data) { 
						arrAlbum['userId_' + id] = data;
						renderAlbum(arrAlbum[`userId_${id}`]);
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				});
			} else {
				renderAlbum(arrAlbum[`userId_${id}`]);
			};
		});
	}

	function addFotoAlbum() {
		var arrFoto = [];
		$(document).on('click', '.album', function() {
			let id = $(this).data('albums');
			$('.album').remove();
			
			if (typeof arrFoto['albumId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`, 
					dataType : "json",
					success: function (data) { 
						arrFoto['albumId_' + id] = data;
						renderFotoAlbum(arrFoto['albumId_' + id]);
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				});
			} else {
				renderFotoAlbum(arrFoto['albumId_' + id]);
			};
		});
	}

	function addUsersTodos() {
		arrTodo = [];
		$(document).on('click', '.btn-todos', function(e) {
			e.preventDefault();
			let $this = $(this);
			let $user = $this.parent();
			let id = $user.data('id');

			removeContent ();
			$this.addClass('active');
			$user.addClass('active');
			
			if (typeof arrTodo['userId_' + id] === 'undefined') {
				loaderShow();
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`, 
					dataType : "json",
					success: function (data) { 
						arrTodo['userId_' + id] = data;
						renderTodo(arrTodo['userId_' + id]);
					},
					error: function() {
						alert('Error');
					},
					complete: function() {
						loaderHide();
					}
				});
			} else {
				renderTodo(arrTodo['userId_' + id]);
			};
		});
	}

	function renderPost(arr) {
		for (let index = 0; index < arr.length; index++) {
			$('.posts .row').append(
				`<div class="col-4 post" data-post="${arr[index].id}">
					<div class="title">${arr[index].title}</div>
					<div class="text-comm">${arr[index].body} ...</div>
					<button class="btn btn-comm">View comments</button>
				</div>`
			);
		};
	}

	function renderComment(arr, parent) {
		for (let index = 0; index < arr.length; index++) {
			parent.append(
				`<div class="comm" data-comm="${arr[index].id}">
					<div class="comm-name">${arr[index].name}</div>
					<div class="comm-email">${arr[index].email}</div>
					<div class="comm-body">${arr[index].body}</div>
				</div>`
			);
		};
	}

	function renderAlbum(arr) {
		for (let index = 0; index < arr.length; index++) {
			$('.posts .row').append(`
				<div class="col-3 album" data-albums="${arr[index].id}">
					<div class="title">${arr[index].title}</div>
				</div>
			`);
		};
	}

	function renderFotoAlbum(arr) {
		for (let index = 0; index < arr.length; index++) {
			$('.posts .row').append(`
				<div class="col-3 album-foto" data-post="${arr[index].id}">
					<div><img src="${arr[index].thumbnailUrl}"</div>
					<div class="title">${arr[index].title}</div>
				</div>
			`);
		};
	}

	function renderTodo(arr) {
		for (let index = 0; index < arr.length; index++) {
			let check;
			if (arr[index].completed) {
				check = '<input type="checkbox" checked>';
			} else {
				check = '<input type="checkbox">';
			};
			$('.posts .row').append(`
				<div class="col-3 todo" data-todo="${arr[index].id}">
					<div class="todo-title">${arr[index].title}</div>
					${check}
				</div>`
			);
		};
	}

	function removeContent() {
		$('.btn').removeClass('active');
		$('.user').removeClass('active');
		$('.post').remove();
		$('.album').remove();
		$('.album-foto').remove();
		$('.todo').remove();
	}

	function loaderShow() {
		$('.loader').show()
	}

	function loaderHide() {
		$('.loader').hide()
	}

	$(document).ready(function() {
		addUsersPost();
		addUsers();
		addComment();
		addUsersAlbums();
		addFotoAlbum();
		addUsersTodos();
		loaderHide();
	})

})(jQuery);