// check off specific todos by clicking
//have to add click event listener to entire ul parent so new li items can be checked off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
//have to add click event listener to entire ul parent so new spans can have the delete ability
$("ul").on("click", "span", function(event){
	//"this" refers to the span (X), the parent method refers the entire li (Todo item). THEN fadeOut on the li
	$(this).parent().fadeOut(500, function(){
		//here, "this" refers to the li, not the span
		$(this).remove();
	});
	//prevent li event (strikethrough) from firing
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear out text from input box after user hits Enter
		$(this).val("");
		// create a nedw li and ass to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})