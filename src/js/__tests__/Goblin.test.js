/**
 * @jest-environment jsdom
 */
import Goblin from '../Goblin';

jest.useFakeTimers();

test('init', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">SCORE: <span class="score">0</span> MISS: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="col">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeTruthy();
  goblin.init();
  jest.advanceTimersByTime(1500);
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeFalsy();
});

test('rotate', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">SCORE: <span class="score">0</span> MISS: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="col">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeTruthy();
  goblin.rotate();
  jest.advanceTimersByTime(1500);
  expect(goblin.cells[0].contains(goblin.goblinHead)).toBeFalsy();
});

test('lose', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="results">SCORE: <span class="score">0</span> MISS: <span class="miss">0</span> of 5</div>
    <div class="row">
      <div class="col">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>`;
  const goblin = new Goblin(html.querySelector('.goblin'));
  goblin.init();
  jest.advanceTimersByTime(6000);
  expect(goblin.game.miss).toBe(5);
  jest.advanceTimersByTime(2000);
  expect(goblin.game.miss).toBe(5);
});
