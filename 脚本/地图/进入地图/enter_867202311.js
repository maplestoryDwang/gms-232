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
    cm.npc_ChangeController(9400570, "oid=7539197", 1713, 10, 34, 1663, 1763, 1, false, false);
    cm.npc_SetSpecialAction("oid=7539197", "summon", 0, 0);
    cm.playerMessage(-1, "把石头搬到城墙跟前。");
    cm.getMap().resetReactors();
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 150, 77, 0, "rock");
    cm.getMap().spawnReactorIfNotExist(8659131, 0, 790, 10, 0, 'rock2');
    cm.npc_ChangeController(9400606, "oid=7539200", 450, 30, 31, 400, 500, 1, true, false);
    cm.npc_SetSpecialAction("oid=7539200", "summon", 0, 0);
    cm.npc_ChangeController(9400605, "oid=7539201", 750, 0, 33, 700, 800, 1, true, false);
    cm.npc_SetSpecialAction("oid=7539201", "summon", 0, 0);
    cm.npc_ChangeController(9400638, "oid=7539202", -1526, -20, 13, -1576, -1476, 1, true, false);
    cm.npc_SetSpecialAction("oid=7539202", "summon", 0, 0);
    cm.npc_ChangeController(9400639, "oid=7539203", -1380, 90, 4, -1430, -1330, 1, true, false);
    cm.npc_SetSpecialAction("oid=7539203", "summon", 0, 0);
    cm.npc_ChangeController(9400640, "oid=7539204", -1030, 80, 6, -1080, -980, 0, true, false);
    cm.npc_SetSpecialAction("oid=7539204", "summon", 0, 0);
    cm.forceStartQuest(64169, "rock");
    cm.npc_SetForceMove("oid=7539200", -1, 250, 50);
    cm.npc_SetForceMove("oid=7539201", -1, 250, 50);
    cm.scheduleOpenNpcTask(10, 70, "莫奈德_延时任务");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;