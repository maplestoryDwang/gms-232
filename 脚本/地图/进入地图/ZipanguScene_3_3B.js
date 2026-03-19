var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(58749) && cm.getQuestStatus(58750) == 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      if (cm.isQuestFinished(58739)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.cameraSwitch_PushSwitchMoveInfo("pt_800022000", 3000);
      cm.sendNormalTalk_Bottom("……从那洞窟里倾泻出好强烈的阴气。", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("进去瞧瞧。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111012, "oid=3656878", -260, -60, 11, -310, -210, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3656878", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === O++) {
          cm.sendNormalTalk_Bottom('哎？镰鼬？', 57, 0, false, true);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("#face0#我估计你可能要费点时间，就过来帮忙。", 37, 9111012, true, true);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("我已潜入窟里搜集来了证据。", 57, 0, true, true);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，你找到许多线索吗？", 37, 9111012, true, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("是的！凭这些证据，我们可以发起攻击了！", 57, 0, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face0#好，我们一起去！", 37, 9111012, true, true);
                  } else if (status === O++) {
                    cm.npc_LeaveField("oid=3656878");
                    cm.npc_LeaveField("oid=3656878");
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setPartner(1, 9111012, 80011301, 0);
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