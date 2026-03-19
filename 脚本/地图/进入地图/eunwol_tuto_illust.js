var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getInfoQuest(38900) === '1') {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/enter");
        cm.inGameDirectionEvent_AskAnswerTime(3500);
      } else if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.warp(927030020, 0);
        cm.dispose();
      }
    }
  } else {
    if (cm.getInfoQuest(38900) === '2') {
      var V = -1;
      if (status <= V++) {
        cm.dispose();
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true);
          cm.setStandAloneMode(true);
          cm.inGameDirectionEvent_SetHideEffect(1);
          cm.effect_Direction("Effect/Direction15.img/eunwolTutorial/Scene0");
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else if (status === V++) {
          cm.inGameDirectionEvent_SetHideEffect(0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          cm.warp(927030030, 0);
          cm.dispose();
        }
      }
    } else {
      if (cm.getInfoQuest(38900) === '3') {
        var V = -1;
        if (status <= V++) {
          cm.dispose();
        } else {
          if (status === V++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.effect_Direction("Effect/Direction15.img/eunwolTutorial/Scene1");
            cm.inGameDirectionEvent_AskAnswerTime(16000);
          } else if (status === V++) {
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, true);
            cm.setStandAloneMode(false);
            cm.dispose();
            cm.warp(927030040, 0);
          }
        }
      } else {
        var V = -1;
        if (status <= V++) {
          cm.dispose();
        } else {
          if (status === V++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\r\n冒险岛世界已经被一股沉沉的黑暗所笼罩。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("\r\n突然出现的黑魔法师想用他那强大的黑暗力量支配冒险岛世界", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n所有的人都惧怕黑魔法师, 所以无人敢与他对抗。", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("\r\n冒险岛世界只剩下无尽的绝望。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("\r\n还有……", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("\r\n终于愿意将冒险岛从黑魔法师的魔爪中救出的人出现了。", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3300);
                            cm.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene0");
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(false, true);
                            cm.setStandAloneMode(false);
                            cm.warp(927030000, 0);
                            cm.dispose();
                          } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;