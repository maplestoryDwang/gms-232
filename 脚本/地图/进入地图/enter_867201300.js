var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestActive(64121)) {
    cm.warp(867201690, 0);
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(9400570, "oid=202782", 505, 242, 18, 455, 555, 1, false, false);
    cm.npc_ChangeController(9400580, "oid=7604857", 50, 440, 2, 0, 100, 1, true, false);
    cm.npc_SetSpecialAction("oid=7604857", "summon", 0, 0);
    cm.npc_ChangeController(9400595, "oid=7604858", 180, 440, 2, 130, 230, 0, true, false);
    cm.npc_SetSpecialAction("oid=7604858", "summon", 0, 0);
    cm.forceForfeitQuest(64073);
    cm.forceCompleteQuest(64208);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;