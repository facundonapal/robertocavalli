
	  	function showMenu() {
	  		var menu = document.getElementById('_hiddensubmenu');
	  		var backgroundW = document.getElementById('backW-1');
	  		var backgroundW2 = document.getElementById('backW-2');
	  		var logoBlack = document.getElementById('blacklogo');

           //navbar icons white to black

	  		var buttonblack1 = document.getElementById('buttonblack1');
	  		var buttonblack2 = document.getElementById('buttonblack2');
	  		var buttonblack3 = document.getElementById('buttonblack3');
	  		var buttonblack4 = document.getElementById('buttonblack4');
	  		var buttonblack5 = document.getElementById('buttonblack5');
	  		var buttonblack6 = document.getElementById('buttonblack6');
	  		var buttonblack7 = document.getElementById('buttonblack7');

	  		menu.style.display = "inline-block";
	  		backgroundW.style.background = "#fff";
	  		backgroundW2.style.background = "#fff";
	  		backgroundW2.style.color = "#000";
	  		logoBlack.style.fill = "#000";

	  		buttonblack1.style.color = "#000";
	  		buttonblack2.style.color = "#000";
	  		buttonblack3.style.fill = "#000";
	  		buttonblack4.style.fill = "#000";
	  		buttonblack5.style.fill = "#000";
	  		buttonblack6.style.fill = "#000";
	  		buttonblack7.style.fill = "#000";

	  	}

	  	function hideMenu() {
	  		var menu = document.getElementById('_hiddensubmenu');
	  		var backgroundW = document.getElementById('backW-1');
	  		var backgroundW2 = document.getElementById('backW-2');
	  		var logoBlack = document.getElementById('blacklogo');
	  		
	  		//navbar icons white to black
	  		
	  		var buttonblack1 = document.getElementById('buttonblack1');
	  		var buttonblack2 = document.getElementById('buttonblack2');
	  		var buttonblack3 = document.getElementById('buttonblack3');
	  		var buttonblack4 = document.getElementById('buttonblack4');
	  		var buttonblack5 = document.getElementById('buttonblack5');
	  		var buttonblack6 = document.getElementById('buttonblack6');
	  		var buttonblack7 = document.getElementById('buttonblack7');
	  		
	  		menu.style.display = "none";
	  		backgroundW.style.background = "transparent"; 
	  		backgroundW2.style.background = "transparent"; 
	  		backgroundW2.style.color = "#fff"; 
	  		logoBlack.style.fill = "#fff";
	  		logoBlack.style.fill = "#000";

	  		buttonblack1.style.color = "#fff";
	  		buttonblack2.style.color = "#fff";
	  		buttonblack3.style.fill = "#fff";
	  		buttonblack4.style.fill = "#fff";
	  		buttonblack5.style.fill = "#fff";
	  		buttonblack6.style.fill = "#fff";
	  		buttonblack7.style.fill = "#fff";

	  	}	