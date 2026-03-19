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
      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(5, 256, 0, 0, 0, 0);
      cm.setMobImage("SoundEff.img/PL_AfterLand/clear_day", 200);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, -670, 40);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 400, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.addPopupSay(9400205, 2000, "这地方看上去很幸福吧？", '', 0);
              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 350, -200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.addPopupSay(9400205, 2000, "看着那些无忧无虑的孩子们，我仿佛也恢复了童心。", '', 0);
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 300, 120);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b去见见孩子们吧？", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                        } else if (status === V++) {
                          cm.updateInfoQuest(63098, "FirstEnter1=1;FirstEnter2=1;FirstEnter3=1;FirstEnter4=1;FirstEnter=1;FirstEnterC=1;turn=1");
                          cm.dispose();
                          cm.warp(867113500, 0, true);
                          cm.setStandAloneMode(false);
                          cm.setInGameDirectionMode(false, true, false);
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