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
    cm.npc_ChangeController(9400589, "oid=202013", 733, 533, 3, 683, 783, 1, true, false);
    cm.npc_ChangeController(9400593, "oid=202014", 821, 533, 3, 771, 871, 1, true, false);
    cm.npc_ChangeController(9400588, "oid=202015", 786, 533, 3, 736, 836, 1, true, false);
    cm.npc_ChangeController(9400585, 'oid=202016', 180, 533, 1, 130, 230, 1, true, false);
    cm.updateInfoQuest(64034, '');
    cm.playerMessage(-1, "靠着亚皮纳斯的祝福，以体力全满的状态复活。");
    cm.addPopupSay(9400584, 1000, "#face0#亚皮纳斯的祝福与你同在……。", '', 0);
    cm.getMap().spawnReactorIfNotExist(8659146, 0, -150, 527, 0, "help1");
    cm.getMap().spawnReactorIfNotExist(8659147, 0, -480, 527, 0, "help2");
    cm.getMap().resetReactors();
    cm.forceStartQuest(64161, "run");
    cm.forceStartQuest(64166, "sad");
    cm.forceStartQuest(64165, "fight");
    cm.addPopupSay(0, 3000, "#b唔，得赶快出去！", '', 0);
    cm.addPopupSay(9400591, 3000, "救……救命！这里有人……！", '', 0);
    cm.spawnMobLimit(9402338, 1, -300, 483, 1);
    cm.spawnMobLimit(9402304, 1, 80, 483, 1);
    cm.updateInfoQuest(64034, "cnt=0");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;