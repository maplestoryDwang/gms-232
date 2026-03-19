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
  } else {
    if (status === V++) {
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58926) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58939) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58967)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(9130116, "oid=539108890", 323, -231, 2, 273, 373, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=539108890", 'summon', 0, 0);
      cm.npc_ChangeController(9130109, "oid=539108891", -321, -236, 1, -371, -271, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539108891", "summon", 0, 0);
      cm.npc_ChangeController(9130120, "oid=539108893", 584, -236, 2, 534, 634, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539108893", "summon", 0, 0);
      cm.npc_ChangeController(9130118, "oid=539108894", -2, -236, 2, -52, 48, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539108894", "summon", 0, 0);
      cm.npc_ChangeController(9130119, "oid=539108895", -145, -243, 1, -195, -95, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539108895", 'summon', 0, 0);
      cm.dispose();
    }
  }
}