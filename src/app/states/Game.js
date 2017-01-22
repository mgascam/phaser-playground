/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */


export default class Game extends Phaser.State {

  create () {
    this.game.stage.backgroundColor = '#324e92';
    this.chipBlackWhite = this.game.add.sprite(0,0,'chipBlackWhite');
    this.chipBlackWhite.inputEnabled = true;
    this.chipBlackWhite.input.enableDrag();
    this.chipBlackWhite.events.onDragStop.add(function (e) {
      console.log(e);
    })
  }

  update () {
  }

}
