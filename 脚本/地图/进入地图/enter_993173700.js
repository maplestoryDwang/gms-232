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
    cm.scheduleWarpTask(1800, 993123000, 0, false);
    cm.gloryEventUIUpdate(8, 2, 1800000, 0, 1800000, 100354);
    cm.addPopupSay(9062210, 4000, "请通过魔法地图确认战场上的情况，保护骑士们的安全。", '', 0);
    cm.dispose();
  }
}