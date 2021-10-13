if(typeof(Storage) !== "undefined") {
	if ("display_all" in localStorage) {//variable is already defined
		;
	} 
	else {
		localStorage.display_all=1;//1 means visible
	}
} 
if(typeof(Storage) !== "undefined") {
	if(localStorage.display_all==1)
		localStorage.display_all=1;//1 means visible
	else {
		document.getElementsByTagName("body")[0].style.display = "none";
		alert("admin has disabled acess to this page, if you are admin, enable it from the next page(make sure to allow popups to redirect to next page");
		window.open('./admin_mode.html','_blank');
	}
} 
else {
    document.getElementsByTagName("body")[0].innerHTML = "Sorry, your browser does not support web storage...";
}
