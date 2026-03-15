var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (!cm.isQuestActive(1628)) {
        cm.dispose();
        return;
      }
      cm.fieldEffect_ScreenMsg("crossHunter/bomb");
      cm.fieldEffect_PlayFieldSound("cannonshooter/bang", 100);
      cm.getMap().startSimpleMapEffect("危险！快闪开！！！", 5120054);
      cm.forceStartQuest(1641, "bomb");
      cm.npc_ChangeController(9073018, "oid=3016731", -1000, -470, 1, -1050, -950, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3016731", "summon", 0, 0);
      cm.dispose();
    }
  }
}