import Score from './Score';

export default class Goblin {
	constructor(gameElement) {
		this.cells = gameElement.querySelectorAll('.col');
		this.goblinHead = gameElement.querySelector('.head');
		this.game = new Score(gameElement);
	}

	init() {
		this.goblinHead.remove();
		this.game.init();
		this.rotate();
	}

	rotate() {
		let previous = 0;
		let rand = 0;

		const gameInterval = setInterval(() => {
			while (rand === previous) {
				rand = Math.floor(Math.random() * (this.cells.length - 1));
			}

			if (this.cells[previous].querySelector('.head')) {
				this.game.missed();
				if (this.game.miss === 5) {
					clearInterval(gameInterval);
					alert('You lose!');
				}
			}

			previous = rand;
			this.cells[rand].appendChild(this.goblinHead);
		}, 1000);
	}
};