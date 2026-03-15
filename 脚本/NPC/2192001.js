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
    cm.dispose();
    if (cm.isQuestActive(31382)) {
      cm.openNpc("副本_梦幻主题乐园_Boss_剧情");
    } else {
      cm.openNpc("副本_梦幻主题乐园_Boss");
    }
  }
}