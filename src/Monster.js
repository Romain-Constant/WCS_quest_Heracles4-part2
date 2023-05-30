class Monster extends Fighter {
  constructor(name, strength, dexterity, image, x, y, range) {
    super(name, strength, dexterity, image, x, y, range);
    this.experience = 500;
  }
}
