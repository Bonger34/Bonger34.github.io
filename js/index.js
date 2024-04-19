function toggleNav() {
	if (window.getComputedStyle(document.getElementsByClassName("sidenav")[0]).width === "0px") {
		document.getElementsByClassName("sidenav")[0].style.width = "200px";
	} else if (window.getComputedStyle(document.getElementsByClassName("sidenav")[0]).width === "200px"){
		document.getElementsByClassName("sidenav")[0].style.width = "0px";
	}
}