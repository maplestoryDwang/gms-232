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
  } else if (status === V++) {
    cm.Hidden_background("close", 0);
    if (cm.isQuestFinished(64070) && !cm.isQuestFinished(64071)) {
      cm.npc_ChangeController(9400598, "oid=5389137", -650, -65, 3, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=5389137", "summon", 0, 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;