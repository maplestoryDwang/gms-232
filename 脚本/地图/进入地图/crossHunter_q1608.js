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
    cm.spawnMobLimit(9300471, 1, 199, 165, 1);
    if (cm.isQuestActive(1608)) {
      cm.npc_ChangeController(9073000, "oid=42876308", -580, 204, 18, -630, -530, 1, false, false);
      cm.npc_SetSpecialAction("oid=42876308", "summon", 0, 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;