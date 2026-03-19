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
    cm.npc_ChangeController(2074100, "oid=1942831", -795, -68, 7, -845, -745, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1942831", 'summon', 0, 0);
    cm.npc_ChangeController(2074105, "oid=1942832", -657, -64, 5, -707, -607, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942832", "summon", 0, 0);
    cm.npc_ChangeController(2074136, "oid=1942833", -600, -33, 5, -650, -550, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942833", "summon", 0, 0);
    cm.npc_ChangeController(2074107, "oid=1942834", -547, -19, 4, -597, -497, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1942834", "summon", 0, 0);
    cm.npc_ChangeController(2074150, "oid=1942835", -499, -19, 4, -549, -449, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1942835", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=1942831", "pain3", -1, 1);
    cm.spawnMobLimit(5100203, 1, -1025, -167, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;