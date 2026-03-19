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
    cm.npc_ChangeController(9400682, "oid=203328", -910, -546, 43, -957, -860, 1, false, false);
    cm.npc_ChangeController(9400570, "oid=203329", -52, -628, 48, -102, -2, 1, false, false);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -580, -955);
    cm.npc_ChangeController(9400580, "oid=7621935", -390, -585, 32, -440, -340, 1, true, false);
    cm.npc_SetSpecialAction("oid=7621935", "summon", 0, 0);
    cm.npc_ChangeController(9400682, "oid=7621936", -910, -550, 43, -960, -860, 1, false, false);
    cm.npc_SetSpecialAction("oid=7621936", "summon", 0, 0);
    cm.Hidden_background("portal", 0);
    cm.forceStartQuest(64088);
    cm.forceForfeitQuest(64089);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;