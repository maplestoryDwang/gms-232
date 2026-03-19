var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.updateInfoQuest(61333, "act1=610061440");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("这不就是#b守护者的要塞#k嘛！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 100, 480, -10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(13317);
          } else {
            if (status === V++) {
              cm.addPopupSay(9201537, 2000, "没想到我能见到荒废前的守护者的要塞！", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
            } else {
              if (status === V++) {
                cm.addPopupSay(9201537, 2000, "1000年前的守护者的要塞真是气派啊！哈哈！", '', 0);
                cm.inGameDirectionEvent_AskAnswerTime(4200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                        cm.updateInfoQuest(61368, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                      } else if (status === V++) {
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
        }
      }
    }
  }
}