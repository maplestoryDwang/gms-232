var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceForfeitQuest(33239);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500025, 0, 221, -940, 0, 'box2');
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500025, 0, 1358, -984, 0, "box3");
      cm.getMap().spawnReactorIfNotExist(3500025, 0, -165, -540, 0, "box1");
      cm.getMap().spawnReactorIfNotExist(3500025, 0, 1503, -499, 0, "box4");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, 'light1');
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, 'graph');
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;skip17=1;act5=350053550");
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.npc_ChangeController(1540703, "oid=26122739", 1950, -10, 9, 1900, 2000, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26122739", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26122739", "off", -1, 1);
      cm.npc_setForceFlip("oid=26122739", -1);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 0, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
      cm.getMap().getReactorByName("box1").forceHitReactor(null, 1, -165, -540, 0);
      cm.getMap().getReactorByName("box2").forceHitReactor(null, 0, 221, -940, 0);
      cm.getMap().getReactorByName("box3").forceHitReactor(null, 1, 1358, -984, 0);
      cm.getMap().getReactorByName("box4").forceHitReactor(null, 0, 1503, -499, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 0, 568, -360, 0);
      cm.getMap().getReactorByName('light3').forceHitReactor(null, 0, 779, -274, 0);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
      cm.npc_ChangeController(1540490, "oid=26122740", 495, -4, 7, 445, 545, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26122740", "summon", 0, 0);
      cm.updateInfoQuest(33238, "start=1;puzzleNotice=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("（4个管道碎片全部塞好了。）", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 610, 0);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这次灯也没有亮。\r\n看来又要把碎片旋转到正确的位置才行……", 37, 1540490, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1600, -360);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你知道方法吧？通过攻击旋转管道碎片，把相同颜色的连接起来。", 37, 1540490, false, true);
                  } else {
                    if (status === V++) {
                      cm.cameraSwitch_CameraSwitchBack();
                      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.sendNormalTalk_Bottom("#face0#这个地方比较大，我会站远点。\r\n如果你喊我，我会告诉你机器的状态。\r\n\r\n#b（只要点击头上的灯泡，就能了解当前状态了。）#k", 37, 1540490, false, false);
                        } else if (status === V++) {
                          cm.getMap().getReactorByName('light1').forceHitReactor(null, 0, 431, -277, 0);
                          cm.getMap().getReactorByName('light2').forceHitReactor(null, 0, 568, -360, 0);
                          cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
                          cm.getMap().getReactorByName("eye").forceHitReactor(null, 0, 510, -291, 0);
                          cm.getMap().getReactorByName('graph').forceHitReactor(null, 0, 560, -169, 0);
                          cm.npc_SetSpecialAction("oid=26122739", 'off', -1, 1);
                          cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=0;skip15=1;skip17=1;act5=350053550");
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/mOff", 100);
                          cm.dispose();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;