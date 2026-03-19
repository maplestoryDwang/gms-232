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
    cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064520");
    cm.npc_ChangeController(9201577, "oid=2761980", -905, 195, 35, -955, -855, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=2761980", "summon", 0, 0);
    cm.npc_ChangeController(9201540, "oid=2761981", -1031, 195, 50, -1081, -981, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2761981", "summon", 0, 0);
    cm.npc_ChangeController(9201540, "oid=2761982", -1092, 195, 36, -1142, -1042, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2761982", "summon", 0, 0);
    cm.dispose();
  }
}