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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9401358, "oid=367372", 360, 200, 13, 310, 410, 0, false, 1000, false);
      cm.npc_SetSpecialAction("oid=367372", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 650, 230]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 180, 0, 0, 0, 1200, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我已经派人给他传话了。", 37, 9401358, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2##fs20##e#fc0xff990000#……竟然要用这么麻烦的方法。", 37, 9401281, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2##fs20##e#fc0xff990000#呵呵，但是这份痛苦不会持续太久。\r\n很快就能找回过去的荣光。啊哈哈哈！", 37, 9401281, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2##fs20##e#fc0xff990000#做好迎接那位大人的准备吧。", 37, 9401281, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('是！', 37, 9401358, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(14, [0, 2000, 1000]);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(19, [0]);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(875003008, 0, false);
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=367372");
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