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
    cm.npc_ChangeController(1540795, "oid=58959", 591, -14, 4, 541, 641, 1, false, 0, false);
    cm.setAmbience("Ambience.img/gravity", 100, 60);
    cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350130800");
    cm.showMapleHero();
    cm.npc_ChangeController(1540881, "oid=306107269", 1261, -27, 2, 1211, 1311, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=306107269", "summon", 0, 0);
    cm.setNpcSpecialActionReset("oid=306107269");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;