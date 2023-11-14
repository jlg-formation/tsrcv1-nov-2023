import { Config } from "./interfaces/Config";

export class Board {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  render() {
    throw new Error("Method not implemented.");
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
