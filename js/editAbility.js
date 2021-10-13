function editpage(){
	document.body.contentEditable = true;
	document.getElementById("edit_button").style.display="none";
    document.getElementById("stop_editing_button").style.display="block";
}
function doNoteditpage(){
	document.body.contentEditable = false;
	document.getElementById("edit_button").style.display="block";
    document.getElementById("stop_editing_button").style.display="none";
}
