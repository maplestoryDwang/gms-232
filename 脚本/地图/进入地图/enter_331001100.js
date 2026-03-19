var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.playVideoByScript("Kinesis1.avi");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 4830, -620);
      } else {
        if (status === V++) {
          cm.onSetMapObjectCreateLayerMore('city', 2, "daylight", 1);
          cm.onSetMapObjectMove("city", "daylight", [2, 1]);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kinesis/signal", 100);
          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 4450, -620);
              } else {
                if (status === V++) {
                  cm.onSetMapObjectCreateLayerMore('city', 2, "day2night", 0);
                  cm.onSetMapObjectMove("city", "day2night", [2, 0]);
                  cm.onSetMapObjectCreateLayerMore("city", 3, "night", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("title", "Map/Effect2.img/kinesis/title", 0, 3000, 0, 0, 40, 4, 0, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer("title", '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                        cm.effect_Text(["#fn黑体##fs26#" + new Date().getFullYear() + "年, 大都市"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 200, -300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(8000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.inGameDirectionEvent_SetHideEffect(0);
                              cm.warp(331001110, 0, true);
                              cm.setStandAloneMode(false);
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.eventSKill(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;