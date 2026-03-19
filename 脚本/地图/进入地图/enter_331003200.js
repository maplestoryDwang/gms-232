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
    cm.npc_ChangeController(1531067, "oid=196532516", 699, 47, 30, 649, 749, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=196532516", "summon", 0, 0);
    cm.spawnMobLimit(2700303, 1, 250, 57, 15);
    cm.spawnMobLimit(2700303, 1, 250, 57, 15);
    cm.spawnMobLimit(2700303, 1, 250, 57, 15);
    cm.spawnMobLimit(2700303, 1, 250, 57, 15);
    cm.spawnMobLimit(2700303, 1, 250, 57, 15);
    cm.spawnMobLimit(2700304, 1, 300, 57, 15);
    cm.spawnMobLimit(2700304, 1, 300, 57, 15);
    cm.spawnMobLimit(2700304, 1, 300, 57, 15);
    cm.spawnMobLimit(2700304, 1, 300, 57, 15);
    cm.spawnMobLimit(2700304, 1, 300, 57, 15);
    cm.spawnMobLimit(2700305, 1, 350, 57, 15);
    cm.spawnMobLimit(2700305, 1, 350, 57, 15);
    cm.spawnMobLimit(2700305, 1, 350, 57, 15);
    cm.spawnMobLimit(2700305, 1, 350, 57, 15);
    cm.spawnMobLimit(2700305, 1, 350, 57, 15);
    cm.onSetMapObjectMove("subway_bg", "outside", [2, 1]);
    cm.onSetMapObjectMove("subway_main", "outside", [2, 1]);
    cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
    cm.cameraSwitch_PushSwitchMoveInfo("go_next", 1000);
    cm.addPopupSay(1531001, 2000, "#face10#小心点,  越来越多了！", '', 0);
    cm.dispose();
  }
}