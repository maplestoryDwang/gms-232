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
    cm.npc_ChangeController(1531065, "oid=1524530", 373, 47, 13, 323, 423, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1524530", "summon", 0, 0);
    cm.npc_ChangeController(1531066, "oid=1524531", 680, 47, 30, 630, 730, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1524531", "summon", 0, 0);
    cm.onSetMapObjectMove("subway_bg", "outing", [2, 0]);
    cm.onSetMapObjectMove("subway_main", "outing", [2, 0]);
    cm.onSetMapObjectMove("subway_bg", "outside", [3, 1]);
    cm.onSetMapObjectMove("subway_main", "outside", [3, 1]);
    cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
    cm.cameraSwitch_PushSwitchMoveInfo("go_next", 1000);
    cm.addPopupSay(1531001, 2000, "#face10#凯内西斯,  前方有怪物！", '', 0);
    cm.dispose();
    cm.spawnMobLimit(2700303, 1, 250, 57, 10);
    cm.spawnMobLimit(2700303, 1, 260, 57, 10);
    cm.spawnMobLimit(2700303, 1, 270, 57, 10);
    cm.spawnMobLimit(2700304, 1, 280, 57, 10);
    cm.spawnMobLimit(2700304, 1, 290, 57, 10);
    cm.spawnMobLimit(2700304, 1, 300, 57, 10);
    cm.spawnMobLimit(2700305, 1, 310, 57, 10);
    cm.spawnMobLimit(2700305, 1, 320, 57, 10);
    cm.spawnMobLimit(2700305, 1, 330, 57, 10);
    cm.spawnMobLimit(2700305, 1, 340, 57, 10);
  }
}