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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.sendNormalTalk_Bottom("#face2#…你，是谁？", 37, 3003270, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#……你的气息很危险。", 37, 3003270, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#但是，说不定你就是我一直等待的人……", 37, 3003270, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我可以凑近点看看你吗？", 37, 3003270, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("永恒的生命，无尽的知识。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('…新世界。', 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("这对一直生活在埃欧雷的精灵路西德来说，有着难以言喻的吸引力。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("他拥有崇高的理想，而且有足够的力量可以实现自己的理想。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("这么强大的生命需要自己的能力。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("她没有半点犹豫，立刻和黑魔法师联手了。", 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(250);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(940200132, 0);
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