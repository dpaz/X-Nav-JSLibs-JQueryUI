
$(document).ready(function(){
	$( "#datepicker" ).datepicker();
	$( "#draggable1" ).draggable();
	$( "#draggable2" ).draggable();
	$( "#draggable3" ).draggable();
	$( "#draggable4" ).draggable();
	$( "#draggable5" ).draggable();
	$( "#draggable6" ).draggable();
	$("#papelera").droppable({
		drop:function(event, ui){
				$("#papelera").attr("src","http://www.vistax64.com/attachments/tutorials/2581d1370210857-recycle-bin-full-jpg");
				$(ui.draggable).hide();
		}});
	$("#papelera").draggable();
	
});
