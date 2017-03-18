
	/*Hiding start button, showing slogan*/
		function firstSlogan() {
			var hide = document.getElementById('hide');
			var show = document.getElementById('slogan');
			hide.style.display = "none";
			show.style.display = "block";
			sloganGenerate();
		}

	/*Generating a slogan*/
		function sloganGenerate() {
			var firstRow = ["WIN-WIN", "P-to-P", "BLOCKCHAIN", "BIG DATA", "MACHINE LEARNING", "FINTECH", "BITCOIN", "VR", "AI", "IoT", "NEUROSCIENCE"];
			var secondRow = ["UBERIZED", "ORIENTED", "FOCUSED", "INSPIRED", "EMPOVERED", "DRIVEN"];
			var thirdRow = ["SOLUTION", "SERVICE", "PLATFORM", "MARKETPLACE", "COMMUNITY", "CHATBOT", "APP"];

			var rand1 = Math.floor(Math.random()* firstRow.length);
			var rand2 = Math.floor(Math.random()* secondRow.length);
			var rand3 = Math.floor(Math.random()* thirdRow.length);

			var firstNew = document.getElementById('first');
			var secondNew = document.getElementById('second');
			var thirdNew = document.getElementById('third');

			firstNew.innerHTML = firstRow[rand1];
			secondNew.innerHTML = secondRow[rand2];
			thirdNew.innerHTML = thirdRow[rand3];
		}