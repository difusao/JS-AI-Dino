'use strict';

// import SynapticBrowser from '../rna/SynapticBrowser.js'
// import AGWB from '../ag/AGWeightsBest.js'

function startGame(tRexGameRunner) {
  var keyEvent = {
    JUMP: 38,
    DUCK: 40
  };

  var jumpDragon = function () {
    tRexGameRunner.tRex.startJump(Math.round(tRexGameRunner.currentSpeed * 10));

    tRexGameRunner.onKeyDown({
      keyCode: keyEvent.JUMP,
      type: 'touchstart'
    });

    tRexGameRunner.onKeyUp({
      keyCode: keyEvent.JUMP,
      type: 'touchend'
    });
  };

  var duckDragon = function () {
    tRexGameRunner.onKeyDown({
      keyCode: keyEvent.DUCK,
      type: 'touchstart'
    });

    tRexGameRunner.onKeyUp({
      keyCode: keyEvent.DUCK,
      type: 'touchend'
    });
  };

  var updateGame = function () {
    if (tRexGameRunner.crashed) {
      // console.log("Bateu!");
    }

    if (tRexGameRunner.runningTime > tRexGameRunner.config.CLEAR_TIME) {
      let obstacle = tRexGameRunner.horizon.obstacles[0];

      console.log("Sensores:", { obsW: obstacle.width, obsH: obstacle.height, obsPosX: obstacle.xPos, obsPosY:obstacle.yPos, obsSpd:tRexGameRunner.currentSpeed });

      // jumpDragon();
      // duckDragon();
    }

    setTimeout(updateGame, 30);
  };

  updateGame();
};