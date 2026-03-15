var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (cm.getMapId() == 993120000) {
    cm.playerMessage(5, "已经在新前哨基地了。");
    cm.sendOkS("已经在新前哨基地了。");
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.updateInfoQuest(100295, "rMap=" + cm.getMapId());
    cm.warp(993120000, 1, false);
    cm.dispose();
  }
}