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
      cm.npc_ChangeController(9310561, "oid=96113", 1135, -5, 106, 1085, 1185, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9310556, "oid=39368925", 1405, -6, 106, 1355, 1455, 1, false, false);
      cm.npc_SetSpecialAction("oid=39368925", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1400, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那么……为了占卜，我必须要集中精神，请稍等。", 37, 9310556, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#fs20##e#b%(！@#)%*！@*#！^**%*……！我看到了，看到了！！！！！！！！！！！！！", 37, 9310556, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 255, 255, 255, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=39368925", "action", -1, 1);
                  cm.sendNormalTalk_Bottom("今天客人你的运势……", 37, 9310556, false, true);
                } else {
                  if (status === V++) {
                    cm.setNpcSpecialActionReset("oid=39368925");
                    cm.sendNormalTalk_Bottom("#fs20##e#b所求甚微，但回报丰厚。\r\n万事顺利，福至心灵。", 37, 9310556, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("请你明天再来，客人。", 37, 9310556, true, true);
                    } else {
                      if (status === V++) {
                        cm.dispose();
                        cm.warp(701100000, 4);
                        cm.setInGameDirectionMode(false, true, false);
                        var O = cm.rand(2023532, 2023536);
                        cm.useItem(O, false);
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