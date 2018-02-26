function add_comment(id, pId, comment) {
	$.ajax({
		type: "POST",
		url: "/ajax/comments.php",
		data: {id : id, pId : pId, comment : comment, type : "side"}
	})
	.done(function( result ) {

		if (result.length > 0) {
			var f_id ="#f"+ pId;
			$(f_id).html(result);
			var c = $(f_id).find(".getcount").val();
			var f_wrap = "#d"+pId.substring(1);
			$(f_wrap).find(".comment_btn").html(c);
			tooltip();
			formSender();
		}
	});


	$.ajax({
		type: "POST",
		url: "/ajax/get_comm.php",
		data: {id : id, pId : "c_main", type : "bottom"}
	})
	.done(function( result ) {

		if (result.length > 0) {
			var f_id ="#bottom-comments";
			$(f_id).html(result);
			tooltip();
			formSender();
		}
	});



}

function add_comment_bottom(id, pId, comment) {
	$.ajax({
		type: "POST",
		url: "/ajax/comments.php",
		data: {id : id, pId : pId, comment : comment, type : "bottom"}
	})
	.done(function( result ) { 

		if (result.length > 0) {
			var f_id ="#bottom-comments";
			$(f_id).html(result);
			tooltip();
			formSender();

		}
	});

	$.ajax({
		type: "POST",
		url: "/ajax/get_comm.php",
		data: {id : id, pId : pId, type : "side"}
	})
	.done(function( result ) {

		if (result.length > 0) {
			var f_id ="#f"+ pId;
			$(f_id).html(result);
			var c = $(f_id).find(".getcount").val();
			var f_wrap = "#d"+pId.substring(1);
			$(f_wrap).find(".comment_btn").html(c);
			tooltip();
			formSender();
		}
	});

}

function toggle_favorite(id) {
        f_id = id.substring(5);
    $.ajax({
		type: "POST",
		url: "/ajax/favorites.php",
		data: {id : f_id}
	})
	.done(function( result ) {
		
		res = result; 

	});
return true;

}


function toggle_like(id) {
        f_id = id.substring(5);
	$.ajax({
		type: "POST",
		url: "/ajax/likes.php",
		data: {id : f_id}
	})
	.done(function( result ) {
		f_id = "#"+id;
		if (id.substring(0,5) == "lmain") {
			$(f_id).find(".likes:first").html(result);
		} else  {
			$(f_id).find(".like_btn:first").html(result);
		}

	});
return true;

}
