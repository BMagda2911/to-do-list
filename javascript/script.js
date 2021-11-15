$(function() {
	$.fn.addOrRemoveListItem = function() {
		let inputValue = $("input").val();
		if(inputValue !== '') {
			let listElement = $("<li class='list-group-item list-group-item-action list-group-item-success align-middle'></li>").text(inputValue);
			$(listElement).append("<button type='button' class='btn-close remove' aria-label='Close'></button>");
			$("#myList").append(listElement);
			$("input").val(""); // clears the input field
			// removes parent of the current object, which is parent of the remove button, the <li> element.
			$(".remove").on("click", function() {
				$(this).parent().remove();
			});
		}
	}
});

$(function() {
	$.fn.addOrRemoveLogStamp = function() {
		let timeNDate = $("<li class='item align-middle remove-log'>Item added on " + document.lastModified + " </li>");
		$("#logList").append(timeNDate);
		$("#clearLog").on("click", function() {
			$(this).next().remove();
			location.reload();
		});
	}
});

$(function() {
	$("#inputField").on("keyup", function(event) {
		// number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			event.preventDefault(); // cancel the default action
			// event handler
			$.fn.addOrRemoveListItem();
			$.fn.addOrRemoveLogStamp();
		}
	});
	$("#add").on("click", function() {
		// event handler
		$.fn.addOrRemoveListItem();
		$.fn.addOrRemoveLogStamp();
	});
});
