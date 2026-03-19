var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(62110, "FirstEnter") > 0) {
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
      cm.setStandAloneMode(true);
      cm.onTeleport(1, cm.getPlayer().getId(), -1961, -4);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2000, -43);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(12000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 100000, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                cm.inGameDirectionEvent_AskAnswerTime(1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("#fs15##r#e喂，你！！！", 0, 0, 0, 2000, 9310532, 6711706);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else if (status === V++) {
                    cm.effect_NormalSpeechBalloon("#fs20##r#e请等一下！！！", 0, 0, 0, 2000, 9310532, 6711706);
                    cm.forceStartQuest(62111, '');
                    cm.updateInfoQuest(62110, "FirstEnter=1");
                    cm.dispose();
                    cm.warp(701100000, 5);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;