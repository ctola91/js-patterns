export default class Singleton {
  private static instance: Singleton;
  private static randomNumber: number;

  private constructor() {
    Singleton.randomNumber = Math.random() * 100;
  }

  static getInstance(): Singleton {
    if (Singleton.instance !== undefined && Singleton.instance !== null) {
      return Singleton.instance;
    } else {
      Singleton.instance = new Singleton();

      return Singleton.instance;
    }
  }

  getRandomNumber() {
    return Singleton.randomNumber;
  }
}
