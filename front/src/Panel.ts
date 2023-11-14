import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./utils/misc";

type Callback = (newConfig: Config) => void;

export class Panel {
  callback: Callback = () => {};

  constructor(private config: Config) {
    this.render();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key].toString();
    }
  }
}
