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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062060");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2665343", -1100, 210, 50, -1150, -1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2665343", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("希望不是那样，朋友。我们来搜索一下这里吧……", 37, 9201536, false, true);
      } else if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}