function addListItem() {
		let inputValue = $("input").val();
		if(inputValue !== '') {
			let listElement = $("<li class='list-group-item list-group-item-action list-group-item-success align-middle'></li>").text(inputValue);
			$(listElement).append("<button type='button' class='btn-close remove' aria-label='Close'></button>");
			$("#mylist").append(listElement);
			$("input").val(""); // clears the input field
			// removes parent of the current object, which is parent of the remove button, the <li> element.
			$(".remove").on("click", function() {
			$(this).parent().remove();
			});
		}
}

function addLogStamp() {
	let timeNDate = $("<li class='item align-middle'>Item added on " + document.lastModified + " </li>");
	$("#logList").append(timeNDate);
}


$(function() {
	$("#inputField").on("keyup", function(event) {
		// number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			event.preventDefault(); // cancel the default action, if needed
			//event handler
			addListItem();
			addLogStamp();
		}
	});
	$("#add").on("click", function() {
		//event handler
		addListItem();
	});
});



$(function() {
	$("#add").on("click", function(){
		addLogStamp();
	});
});

