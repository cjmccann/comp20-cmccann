1. All aspects of the assignment have been implemented correctly.
2. I have collaborated extensively with StackOverflow. I briefly discussed the big ideas of the assignment with John Rodli. 
3. I spent roughly 11 hours completing the assignment.
5. The score and grid are stored in the html_actuator.js and game_manager.js files in the grid and metadeta objects. The actuator is instantiated in the game_manager file.
6. In order to send the final score and grid to my web application I:  
	--Added $.post("submit.json"...) method to the function HTMLActuator in html_actuator.js
		-> Fires when the game is over
	--When posting is complete, refreshes the high score list via: .done(function (data) { getScores(); });
	--Onload of page body in index file (2048 game), triggers getScores(); in highScores.js, a file I created
	--To get the index to display the game, I had to convert the 2048 index.html file to jade, and then edit some of the jade link correctly to the server methods
