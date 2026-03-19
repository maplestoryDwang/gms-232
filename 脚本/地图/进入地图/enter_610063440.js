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
  } else if (status === V++) {
    cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063440");
    cm.npc_ChangeController(9201539, "oid=2725206", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=2725206", "summon", 0, 0);
    cm.dispose();
  }
}