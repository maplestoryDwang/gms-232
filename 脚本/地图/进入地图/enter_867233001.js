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
    cm.npc_ChangeController(9400570, "oid=205175", -221, 101, 10, -271, -171, 1, false, false);
    cm.onActionBarResult(15, 1010, 0, 3, 0);
    cm.onActionBarResult(15, 1010, 0, 3, 1);
    cm.onActionBarResult(15, 1010, 0, 3, 2);
    cm.onActionBarResult(15, 1010, 0, 3, 3);
    cm.onActionBarResult(15, 1010, 0, 3, 4);
    cm.onActionBarResult(6, 1010);
    cm.forceCompleteQuest(64139);
    cm.forceStartQuest(64140, '');
    cm.dispose();
    cm.warp(867235900, 0, true);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;