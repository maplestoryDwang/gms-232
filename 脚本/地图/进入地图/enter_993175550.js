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
    if (cm.getQuestStatus(100441) == 1) {
      cm.forceCompleteQuest(100441);
    }
    if (cm.getQuestStatus(100442) == 1) {
      cm.npc_ChangeController(9062243, "oid=441544", 148, 135, 1, 98, 198, 1, false, 0, false);
      cm.OnStartNavigation(993175550, 0, "pt_go993175570", 0);
    }
    cm.dispose();
  }
}