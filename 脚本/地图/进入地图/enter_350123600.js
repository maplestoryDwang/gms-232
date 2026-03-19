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
    cm.npc_ChangeController(1540795, "oid=58691", 1174, -868, 10, 1131, 1224, 1, false, 0, false);
    cm.updateInfoQuest(33915, "act1=350112400;act2=350123600");
    cm.setNumberForQuestCustomData(33900, 4);
    cm.showMapleHero();
    cm.dispose();
    cm.onSetMapObjectCreateLayerMore('ab', 2, "main_stand", 1);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;