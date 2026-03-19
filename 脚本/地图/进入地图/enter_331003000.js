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
    if (cm.isQuestActive(22730) || cm.isQuestActive(22731)) {
      cm.npc_ChangeController(1531064, "oid=1524508", 416, 47, 13, 366, 466, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1524508", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
      cm.cameraSwitch_PushSwitchMoveInfo("go_next", 1000);
      cm.dispose();
    }
    cm.dispose();
  }
}