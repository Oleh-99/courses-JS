var arrData = [ ];
var arrPost = [ ];
var arrComm = [ ];

if (0 === arrData.length) {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users', 
		dataType : "json",
		async: false,
		success: function (info) { 
		
			for (let index = 0; index < info.length; index++) {
				arrData.push(info[index]);
				let id = info[index].id;
				let foto = '<div><img src="merak-testimonials-1.jpg" alt=""></div>';
				let name = '<div class="name">' + info[index].name + '</div>';
				let username = '<div class="username">' + info[index].username + '</div>';
				let table = '<table><tbody><tr><td>Email: </td><td>' + info[index].email + '</td></tr><tr><td>Phone:</td><td>' + info[index].phone + '</td></tr><tr><td>Company:</td><td>' + info[index].company.name + '</td></tr></tbody></table>';
				$('.content').append('<div class="card" data-id="' + id + '">'+ foto + name + username + table + '</div>');
			}
		}
	})
}

$('.card').each (function() {
	$(this).on('click', function () {
		let $this = $(this);
		let id = $this.data('id');

		$('.card').removeClass('active');
		$this.addClass('active');
		$('.post').remove();


		if (0 === arrPost.length) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/posts', 
				dataType : "json",
				async: false,
				success: function (info) { 
					for (let index = 0; index < info.length; index++) {
						arrPost.push(info[index]);
						if (info[index].userId === id) {
							let postId = info[index].id;
							let title = '<div class="title">' + info[index].title + '</div>';
							let body = '<div class="text-comm">' + info[index].body + '...</div>';
							$('.posts').append('<div class="post" data-post="' +  postId + '">' + title +  body + '</div>');
						}
					}
				}
			})
		} else {
			for (let index = 0; index < arrPost.length; index++) {
				if (arrPost[index].userId === id) {
					let postId = arrPost[index].id;
					let title = '<div class="title">' + arrPost[index].title + '</div>';
					let body = '<div class="text-comm">' + arrPost[index].body + '...</div>';
					$('.posts').append('<div class="post" data-post="' +  postId + '">' + title +  body + '</div>');
				}
			}
		}
		
	});
});

$('.post').each (function() {
	$(this).on('click', function () {
		let $this = $(this);
		let id = $this.data('post');
		$('.post').removeClass('active');
		$this.addClass('active');
		console.log("1");
		//if (0 === arrComm.length) {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/comments', 
				dataType : "json",
				async: false,
				success: function (info) { 
					for (let index = 0; index < info.length; index++) {
						arrComm.push(info[index]);
						if (info[index].postId === id) {
							let commId = info[index].id;
							let name = '<div>' + info[index].name + '</div>';
							let email = '<div>' + info[index].email + '</div>';
							let body = '<div>' + info[index].body + '</div>';
							$('.post').append('<div class="comm" data-comm="' +  commId + '">' + name + email +  body + '</div>');
						}
					}
				}
			})
	//	} else {
			// for (let index = 0; index < arrPost.length; index++) {
			// 	if (arrPost[index].userId === id) {
			// 		let postId = arrPost[index].id;
			// 		let title = '<div class="title">' + arrPost[index].title + '</div>';
			// 		let body = '<div class="text-comm">' + arrPost[index].body + '...</div>';
			// 		$('.posts').append('<div class="post" data-post="' +  postId + '">' + title +  body + '</div>');
			// 	}
			// }
		//}
	});
})
