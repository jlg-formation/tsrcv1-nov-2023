import { Board } from "./Board";
import { Panel } from "./Panel";
import { Config } from "./interfaces/Config";
import "./style.scss";

console.log("coucou");

const config: Config = {
  samples: 20,
  multiplicationFactor: 3,
};
const board = new Board(config);
board.render();

const panel = new Panel(config);
panel.onUpdate((newConfig: Config) => {
  board.setConfig(newConfig);
  board.render();
});
