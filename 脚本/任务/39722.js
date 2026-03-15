var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/effect/3", 0, 1000, 0, 0, -20, 4, 0, -1, 0, -1, -1);
      cm.setAmbience("Game.img/LimenWaterFallSign2", 100, 60);
      cm.sendNormalTalk_Bottom("#face3#咦咦咦？！", 37, 3004323, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#呜哇啊！", 37, 3004322, true, true);
        cm.effect_Voice("Voice5.img/CH1/Elwyn/21", 128);
      } else {
        if (status === v++) {
          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/effect/2", 0, 1000, 0, 0, -20, 4, 0, -1, 0, -1, 1);
          cm.fieldEffect_PlayFieldSound("Sound/Game.img/LimenWaterFallStart", 100);
          cm.playSoundEffDirectly("Game.img/LimenWaterFallSign2");
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === v++) {
            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === v++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === v++) {
              cm.warp(993135009, 0, false);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#看那里！！好像有人从那边过来了。", 37, 3004322, false, true);
      } else {
        if (status === v++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === v++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === v++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#大家好。", 37, 3004336, false, true);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("你不会是……从海的那边过来的吧？", 57, 0, false, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#没错。", 37, 3004336, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#我正等着诸位呢。", 37, 3004336, true, true);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === v++) {
                            cm.forceCompleteQuest(39722);
                            cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else if (status === v++) {
                            cm.warp(993120000, 2, false);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.setStandAloneMode(false);
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