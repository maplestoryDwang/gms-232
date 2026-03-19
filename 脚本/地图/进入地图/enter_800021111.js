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
      cm.updateInfoQuest(58735, "state=2");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111000, "oid=3589008", 2136, -235, 57, 2086, 2186, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3589008", "summon", 0, 0);
        cm.npc_ChangeController(9111001, "oid=3589009", 2564, -235, 58, 2514, 2614, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3589009", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1800, 1000, 2642, -206);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3589008", 1, 150, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#竹野子！！！！！你又跑哪里去了！！姐姐我都急死了！！！", 37, 9111000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#啊……姐姐……对不起……我觉得有点闷……就出去散了会儿步。", 37, 9111001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……你这孩子……我……我多担心……你知道吗……？", 37, 9111000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#姐姐别哭，对不起。", 37, 9111001, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else if (status === V++) {
                          cm.warp(800000000, 5, false);
                          cm.npc_LeaveField("oid=3589008");
                          cm.npc_LeaveField("oid=3589008");
                          cm.npc_LeaveField("oid=3589009");
                          cm.npc_LeaveField("oid=3589009");
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
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