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
      if (cm.isQuestActive(64760)) {
        cm.dispose();
        cm.warp(867147002, 0, true);
        return;
      }
      if (cm.getQuestStatus(66141) > 0) {
        cm.openNewUI(1, "UIAbyssExpeditionManangementButton");
      }
      cm.深渊远征队_显示酒馆成员();
      cm.深渊远征队_加载数据();
      cm.dispose();
    }
  }
}