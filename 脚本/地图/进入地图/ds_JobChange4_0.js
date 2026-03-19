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
    cm.killAllMobNoExp();
    cm.spawnMobLimit(9001040, 1, 550, 69, 100);
    cm.updateInfoQuest(26011, '');
    cm.scheduleWarpTask(45, 927000110);
    cm.addPopupSay(0, 6000, '击杀后等待时间结束。');
    cm.dispose();
  }
}