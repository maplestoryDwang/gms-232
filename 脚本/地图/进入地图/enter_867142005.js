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
      cm.npc_ChangeController(9401085, "oid=200568", -3201, 3344, 17, -3251, -3151, 4, true, 0, false);
      cm.npc_ChangeController(9401084, "oid=200569", -3090, 3344, 18, -3140, -3040, 0, false, 0, false);
      cm.npc_ChangeController(9401115, "oid=200570", -2506, 3344, 13, -2556, -2456, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4000, 500, -2900, 3400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 2147483647, 2147483647, 2147483647);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯……这次没骗人。", 56, 0, 0, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("真让人失望。#h0#，没想到在你心目中，我是这样的形象。", 36, 9401085, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#h0#，那个橱柜。\r\n#b克拉尼亚的秘密文件#k应该就在里面。", 36, 9401084, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.eventSKill(0);
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
}