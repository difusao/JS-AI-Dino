'use strict';

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

      // TODO Sensores do jogo
      let obsW = obstacle.width;
      let obsH = obstacle.height;
      let obsPosX = obstacle.xPos;
      let obsPosY = obstacle.yPos;
      let obsSpd = tRexGameRunner.currentSpeed;

      let datas = [Number(obsW.toFixed(9)), Number(obsH.toFixed(9)), Number(obsPosX.toFixed(9)), Number(obsPosY.toFixed(9)), Number(obsSpd.toFixed(9))];

      console.log("Sensores:", { obsW: obsW, obsH: obsH, obsPosX: obsPosX, obsPosY:obsPosY, obsSpd:obsSpd });

      // jumpDragon();
      // duckDragon();
    }

    setTimeout(updateGame, 50);
  };

  updateGame();
};