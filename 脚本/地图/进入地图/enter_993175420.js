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
    cm.dispose();
    if (cm.getQuestStatus(100444) == 1) {
      cm.updateInfoQuest(100433, "43=0;47=1;65=1");
      cm.updateInfoQuest(100433, "43=1;47=1;65=1");
      cm.npc_ChangeController(9062247, 'oid=441477', 176, 279, 7, 126, 226, 1, false, 0, false);
      cm.npc_ChangeController(9062243, "oid=441478", -234, 279, 7, -284, -184, 0, false, 0, false);
    }
  }
}