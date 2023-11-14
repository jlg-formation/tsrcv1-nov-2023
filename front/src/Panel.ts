import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./utils/misc";

type Callback = (newConfig: Config) => void;

export class Panel {
  callback: Callback = () => {};

  constructor(private config: Config) {
    this.render();
    this.setActions();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key].toString();

      const inputElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      inputElt.value = this.config[key] + "";
    }
  }

  setActions() {
    for (const key of keys(this.config)) {
      const inputElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      inputElt.addEventListener("input", () => {
        this.config[key] = +inputElt.value;
        this.render();
        this.callback(this.config);
      });
    }

    this.setRandomButtonAction();
  }

  setRandomButtonAction() {
    const btnElt = querySelector(".command button.random");
    btnElt.addEventListener("click", () => {
      console.log("random");
    });
  }
}
