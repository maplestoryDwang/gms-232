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
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Lucid/E1/5", 200);
          cm.inGameDirectionEvent_AskAnswerTime(800);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow2", 200);
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow1", 200);
              cm.inGameDirectionEvent_AskAnswerTime(50);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow0", 200);
                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 80, -40);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#很好！", 37, 3003270, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("全部命中了，路西德。我对你的期望很高。", 37, 3003278, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嘿嘿… 双弩精灵…", 37, 3003270, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(940200103, 0);
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