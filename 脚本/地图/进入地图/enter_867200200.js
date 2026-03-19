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
      cm.spawnMob(9402245, 1, 326, -1402);
      cm.spawnMob(9402245, 1, 220, -1235);
      cm.spawnMob(9402246, 1, 809, -1230);
      cm.spawnMob(9402245, 1, 1302, -1353);
      cm.spawnMob(9402245, 1, 1631, -1395);
      cm.updateInfoQuest(64014, "scene1=0;mapIdx=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(6);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 3000, 740, -400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b（这么危险的地方，那酒鬼大叔是怎么跑上来的……？）", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 3000, 2330, -400);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b（万一他跟着我走下来……怕是要出事的。）", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b（一边消灭怪物一边往下走吧。）", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.playerMessage(-1, "消灭区域内的所有怪物再下去。");
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                                cm.spawnMob(9402246, 1, 2775, -266);
                                cm.spawnMob(9402245, 1, 1618, -466);
                                cm.spawnMob(9402245, 1, 2775, -266);
                                cm.spawnMob(9402246, 1, 2775, -266);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;