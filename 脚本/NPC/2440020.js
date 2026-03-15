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
  } else if (status === V++) {
    if (cm.getQuestCustomData(40317) == 0) {
      cm.npc_ChangeController(2440003, "oid=2833329", 171, 535, 4, 121, 221, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2833329", "summon", 0, 0);
      cm.forceStartQuest(40317, '1');
    }
    cm.dispose();
  }
}