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
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
    cm.npc_ChangeController(2074154, "oid=1943293", -990, -137, 11, -1040, -940, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=1943293", 'summon', 0, 0);
    cm.npc_ChangeController(2074019, "oid=1943294", -795, -68, 7, -845, -745, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1943294", "summon", 0, 0);
    cm.npc_ChangeController(2074105, "oid=1943295", -657, -64, 5, -707, -607, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1943295", "summon", 0, 0);
    cm.npc_ChangeController(2074136, "oid=1943296", -600, -33, 5, -650, -550, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1943296", "summon", 0, 0);
    cm.npc_ChangeController(2074107, "oid=1943297", -547, -19, 4, -597, -497, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=1943297", "summon", 0, 0);
    cm.npc_ChangeController(2074150, "oid=1943298", -499, -19, 4, -549, -449, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1943298", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=1943294", 'pain3', -1, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;