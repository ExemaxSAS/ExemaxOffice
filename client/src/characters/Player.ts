import Phaser from 'phaser'
import { PlayerBehavior } from '../../../types/PlayerBehavior'

/**
 * shifting distance for sitting animation
 * format: direction: [xShift, yShift, depthShift]
 */
export const sittingShiftData = {
  up: [0, 3, -10],
  down: [0, 3, 1],
  left: [0, -8, 10],
  right: [0, -8, 10],
}

export default class Player extends Phaser.Physics.Arcade.Sprite {
  playerId: string
  playerBehavior = PlayerBehavior.IDLE
  readyToConnect = false
  playerName: Phaser.GameObjects.Text

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    id: string,
    frame?: string | number
  ) {
    super(scene, x, y, texture, frame)

    this.playerId = id
    this.setDepth(this.y)

    this.playerName = this.scene.add
      .text(this.x, this.y + 20, '')
      .setFontFamily('Arial')
      .setFontSize(12)
      .setColor('#000000')
  }

  setPlayerName(name: string) {
    this.playerName.setText(name)
  }
}
