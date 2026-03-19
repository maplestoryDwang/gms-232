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
    cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064050");
    cm.setAmbience("Ambience.img/warning", 100, 60);
    cm.npc_ChangeController(9201539, "oid=2744256", 433, 275, 22, 383, 483, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2744256", 'summon', 0, 0);
    cm.npc_SetSpecialAction("oid=2744256", "hurt", -1, 0);
    cm.dispose();
  }
}