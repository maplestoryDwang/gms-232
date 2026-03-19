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
      cm.npc_ChangeController(3004328, 'oid=368236', -132, 275, 7, -182, -82, 4, true, 0, false);
      cm.npc_ChangeController(3004322, "oid=368237", 61, 275, 15, 11, 111, 5, true, 0, false);
      cm.npc_ChangeController(3004323, "oid=368238", 126, 275, 9, 76, 176, 5, true, 0, false);
      cm.npc_ChangeController(3004329, "oid=368239", -35, 275, 8, -85, 15, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#原来是通向路西德的房间。", 37, 3003251, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#不出所料……在这里可以俯瞰拉克兰的全貌。", 37, 3003251, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#先来调查她的梦境吧。", 37, 3003251, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#深入其中虽然会有风险，但只是偷看一下的话，不会有什么问题的。", 37, 3003251, true, true);
              } else if (status === V++) {
                cm.warp(993135004, 0, false);
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