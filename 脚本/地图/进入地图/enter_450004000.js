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
      if (cm.isQuestFinished(34330) && !cm.isQuestActive(34331) && !cm.isQuestFinished(34331)) {
        cm.npc_ChangeController(3003200, "oid=1759593", 170, -50, 1, 120, 220, 1, true, false);
        cm.npc_SetSpecialAction("oid=1759593", "summon", 0, 0);
        cm.dispose();
      } else if (cm.isQuestActive(34331) || cm.isQuestFinished(34331)) {
        cm.npc_ChangeController(9010100, "oid=48484", 100, 37, 1, 50, 150, 1, false, false);
        cm.npc_ChangeController(3003208, "oid=1759658", 254, -50, 1, 204, 304, 1, false, false);
        cm.npc_SetSpecialAction("oid=1759658", "summon", 0, 0);
        cm.dispose();
      } else {
        cm.npc_ChangeController(9010100, "oid=48484", 100, 37, 1, 50, 150, 1, false, false);
        cm.npc_ChangeController(3003208, "oid=1759658", 254, -50, 1, 204, 304, 1, false, false);
        cm.npc_SetSpecialAction("oid=1759658", "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;