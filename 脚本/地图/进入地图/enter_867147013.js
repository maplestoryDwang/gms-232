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
      cm.npc_ChangeController(9401053, 'oid=201026', 691, 71, 1, 643, 743, 4, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201027", 383, 74, 3, 328, 428, 2, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201028", 538, 74, 3, 524, 587, 5, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201029", 92, 70, 6, 44, 137, 4, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201030", -87, 67, 5, -147, -47, 5, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201031", -324, 74, 14, -370, -313, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401123, "oid=8677347", 1030, 50, 2, 980, 1080, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8677347", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(13, [3000, -1000, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("啊！！是食石者！据说食石者生活在水边，看来这附近应该有水源。", 37, 9401029, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("先去那边看看吧？", 37, 9401029, true, true);
          } else {
            if (status === V++) {
              cm.eventSKill(0);
              cm.updateInfoQuest(64768, 'dir=1');
              cm.forceStartQuest(64768, '');
              cm.npc_LeaveField("oid=8677347");
              cm.npc_LeaveField("oid=8677347");
              cm.dispose();
              var O = cm.getEventManager('深渊远征队_教程2');
              O.startInstance(cm.getPlayer());
              cm.setInGameDirectionMode(false, true, false);
            }
          }
        }
      }
    }
  }
}