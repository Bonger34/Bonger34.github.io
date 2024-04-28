function toggleNav() {
	if (window.getComputedStyle(document.getElementsByClassName("sidenav")[0]).width === "0px") {
		document.getElementsByClassName("sidenav")[0].style.width = "400px";
	} else if (window.getComputedStyle(document.getElementsByClassName("sidenav")[0]).width === "400px"){
		document.getElementsByClassName("sidenav")[0].style.width = "0px";
	}
}