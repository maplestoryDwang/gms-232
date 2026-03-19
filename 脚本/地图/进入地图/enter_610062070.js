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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062070");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2666901", 0, 215, 3, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2666901", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我先看看这附近还有没有其他的线索。", 57, 0, false, true);
      } else if (status === V++) {
        cm.updateInfoQuest(61347, "c1=1");
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}