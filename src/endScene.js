class EndScene extends Phaser.Scene {

  constructor() {
		super({key : 'endScene'});
    this.finalScore= 0;
	}

  endScene () {

  };

  init(data){
    console.log('init', data);
    this.finalScore = Math.round(data.scoreText * 10) / 10;
  };

  create() {
    this.cameras.main.fadeIn(2000, 0, 0, 0)
    var text = this.add.text(250,250, 'GAME OVER!',  { fontSize: '22px', fill: '#fff' });
    text.setInteractive({ useHandCursor: true });

    this.add.text(250,280, `FINAL SCORE: ${this.finalScore}ETH`,  { fontSize: '22px', fill: '#fff' });

    text.on('pointerdown', () => this.clickButton());
  };

  clickButton() {
   this.scene.start('gameScene');
  }
}

export default EndScene;