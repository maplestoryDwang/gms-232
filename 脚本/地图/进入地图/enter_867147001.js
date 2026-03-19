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
      cm.getPlayer().removeFamiliar(true);
      cm.closeUI(596);
      cm.onActionBarResult(6, -1);
      cm.深渊远征队_加载数据();
      if (cm.isQuestFinished(64762) && cm.getQuestStatus(64763) == 0) {
        cm.dispose();
        cm.warp(867147003, 0, true);
        return;
      }
      if (cm.getQuestStatus(66141) > 0) {
        cm.openNewUI(1, "UIAbyssExpeditionManangementButton");
      }
      if (cm.isQuestFinished(64772) && !cm.isQuestFinished(64773)) {
        cm.npc_ChangeController(9401052, "oid=13647218", 50, 60, 31, 0, 100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=13647218", 'summon', 0, 0);
      }
      if (cm.isQuestFinished(64760)) {
        cm.dispose();
        return;
      }
      cm.dispose();
    }
  }
}