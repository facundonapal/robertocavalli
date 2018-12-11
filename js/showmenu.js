
	  	function showMenu() {
	  		var menu = document.getElementById('_hiddensubmenu');
	  		var backgroundW = document.getElementById('backW-1');
	  		var backgroundW2 = document.getElementById('backW-2');
	  		var logoBlack = document.getElementById('blacklogo');
	  		menu.style.display = "inline-block";
	  		backgroundW.style.background = "#fff";
	  		backgroundW2.style.background = "#fff";
	  		backgroundW2.style.color = "#000";
	  		logoBlack.style.fill = "#000";

	  	}

	  	function hideMenu() {
	  		var menu = document.getElementById('_hiddensubmenu');
	  		var backgroundW = document.getElementById('backW-1');
	  		var backgroundW2 = document.getElementById('backW-2');
	  		var backgroundT3 = document.getElementById('whitebg');
	  		var logoBlack = document.getElementById('blacklogo');
	  		menu.style.display = "none";
	  		backgroundW.style.background = "transparent"; 
	  		backgroundW2.style.background = "transparent"; 
	  		backgroundW2.style.color = "#fff"; 
	  		backgroundT3.style.background = "transparent"; 
	  		logoBlack.style.fill = "#fff";

	  	}	