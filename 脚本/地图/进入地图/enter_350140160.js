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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("SoundEff.img/thunder2", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 0, -600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, 0, -300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#那棵巨大的树是……？！", 37, 1540452, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                    cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 0, -250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#魔族的攻击再加上那个……", 37, 1540701, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#光靠那里的兵力难以抵挡啊！", 37, 1540702, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("看样子得调整作战计划了，派兵增援金银岛！", 37, 1540838, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(350140200, 0, true);
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