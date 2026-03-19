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
    if (cm.isQuestActive(65924)) {
      cm.addPopupSay(9401277, 3000, '#face0#' + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + "，千万不能放水哦！", '', 0);
      cm.spawnMobLimit(9601665, 1, -420, 337, 1);
    }
    cm.dispose();
  }
}