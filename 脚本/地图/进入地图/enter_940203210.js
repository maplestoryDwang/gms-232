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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004001, "oid=7142625", -3, 113, 4, -53, 47, 0, true, false);
      cm.npc_SetSpecialAction("oid=7142625", 'summon', 0, 0);
      cm.npc_ChangeController(3001259, "oid=7142626", 200, 113, 4, 150, 250, 1, false, false);
      cm.npc_SetSpecialAction("oid=7142626", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 138, 129);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face0#是的，没错。会被#b净化#k。就像#b太阳#k一样。", 37, 3004001, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#燃烧掉所有肮脏的不纯物质，\r\n成为无公害的半永久能量之源。", 37, 3004001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#完全疯了……", 37, 3001259, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#走着瞧吧……达到临界点还剩下一个小时 。", 37, 3004001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#乌鸦你这段时间要和我边喝茶边等吗？", 37, 3004001, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.npc_LeaveField("oid=7142625");
                        cm.npc_LeaveField("oid=7142625");
                        cm.npc_LeaveField("oid=7142626");
                        cm.npc_LeaveField("oid=7142626");
                        cm.dispose();
                        cm.warp(940203211, 0);
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