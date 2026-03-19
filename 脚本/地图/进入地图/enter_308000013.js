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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -603, -397);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#第二十二个太阳。", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1500, 7000, -603, 35);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(8500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#(越来越吃力了……。)", 36, 2570101, false, true, 1);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end");
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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