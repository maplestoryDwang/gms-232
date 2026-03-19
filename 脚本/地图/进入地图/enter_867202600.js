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
    cm.playerMessage(-1, "收集结实的木头，建立一个树墙。");
    cm.spawnMobLimit(9402316, 1, 140, 105, 1);
    if (cm.isQuestActive(64107) && cm.haveItem(4036389, 50)) {
      cm.npc_ChangeController(9400589, "oid=7532838", -200, 60, 14, -250, -150, 1, true, false);
      cm.npc_SetSpecialAction("oid=7532838", "summon", 0, 0);
    } else {
      cm.spawnMobLimit(9402306, 1, 200, 105, 1);
    }
    cm.spawnMobLimit(9402309, 1, 250, 105, 1);
    cm.spawnMobLimit(9402313, 1, 300, 105, 1);
    if (!cm.isQuestFinished(64108)) {
      cm.addPopupSay(9400589, 3000, "#face0#结实的木头看来很少啊… ", '', 0);
    }
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act3.1_收集木材");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;