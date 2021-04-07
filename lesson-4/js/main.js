$(document).ready(function() {

	var arrData = [ ];
	var arrPost = [ ];
	var arrAlbum = [ ];
	var arrtodo = [ ];


	function addUsers () {
		if (0 === arrData.length) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users', 
				dataType : "json",
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
								<button class="btn btn-posts">Posts</button>
								<button class="btn btn-albums">Albums</button>
								<button class="btn btn-todos">Todos</button>
							</div>`
						);

					}

					$.ajax({
						url: `https://jsonplaceholder.typicode.com/posts?userId=${arrData[0].id}`, 
						dataType : "json",
						async: false,
						success: function (data) { 
							for (let index = 0; index < data.length; index++) {
								$('.posts .row').append(`
									<div class="col-4 post" data-post="${data[index].id}">
										<div class="title">${data[index].title}</div>
										<div class="text-comm">${data[index].body} ...</div>
									</div>
								`)
							}
							
						}
					})
				}
			});
		};
	}

	function addPostUser() {
		$(document).on('click', '.btn-posts', function() {
			let $this = $(this)
			let $user = $this.parent();
			let id = $user.data('id');


			$('.btn').removeClass('active');
			$('.user').removeClass('active');
			$this.addClass('active');
			$user.addClass('active');
			$('.post').remove();
			
			if (0 === arrPost.length) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts`, 
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
		});
	}

	function addComment () {
		$(document).on('click', '.post', function() {
			let $this = $(this);
			let id = $this.data('post');

			if($this.hasClass('active')) {
				$this.removeClass('active');
				$this.find('.comm').remove()
			} else {
				$('.post').removeClass('active');
				$this.addClass('active');
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`, 
					dataType : "json",
					async: false,
					success: function (data) { 
						for (let index = 0; index < data.length; index++) {;
							$this.append(
								`<div class="comm" data-comm="${data[index].id}">
									<div class="comm-name">${data[index].name}</div>
									<div class="comm-email">${data[index].email}</div>
									<div class="comm-body">${data[index].body}</div>
								</div>`
							);
						}
					}
				})
			}
		});
	}

	function addAlbumsUser() {
		$(document).on('click', '.btn-albums', function() {
			let $user = $(this).parent();
			let id = $user.data('id');
		
			$('.user').removeClass('active');
			$user.addClass('active');
			$('.post').remove();
			
			if (0 === arrPost.length) {
				$.ajax({
					url: `https://jsonplaceholder.typicode.com/posts`, 
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
		});
	}


	addUsers ();
	addPostUser();
	addComment ();
	// addAlbumsUser();






})
