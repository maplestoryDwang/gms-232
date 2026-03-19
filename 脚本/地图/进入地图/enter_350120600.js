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
    cm.npc_ChangeController(1540795, "oid=58140", -630, 268, 17, -680, -580, 1, false, 0, false);
    cm.updateInfoQuest(33915, "act1=350112400;act2=350120600");
    cm.setNumberForQuestCustomData(33900, 4);
    cm.showMapleHero();
    cm.npc_ChangeController(1540844, "oid=287842962", 190, 255, 4, 140, 240, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=287842962", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=287842962", "stand2", -1, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;