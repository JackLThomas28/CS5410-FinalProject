MyGame.screens['main-menu'] = (function(game) {
	'use strict';

	function initialize() {
		document.getElementById('id-new-game').addEventListener(
			'click',
			function() {MyGame.main.showScreen('lobby'); });

		document.getElementById('id-options').addEventListener(
			'click',
			function() {MyGame.main.showScreen('options'); });
		
		document.getElementById('id-high-scores').addEventListener(
			'click',
			function() { MyGame.main.showScreen('high-scores'); });
		
		document.getElementById('id-about').addEventListener(
			'click',
			function() { MyGame.main.showScreen('about'); });
	}
	
	function run() {
		MyGame.screens['game-play'].leaveLobby();
	}
	
	return {
		initialize : initialize,
		run : run
	};
}(MyGame.game));