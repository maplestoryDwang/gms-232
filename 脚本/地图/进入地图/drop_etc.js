var status = -1;
var selectionLog = [];
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
    cm.playerMessage(-1, "要离开这个地方，就需要避开障碍物，进入顶端的传送口。");
    cm.scheduleWarpTask(300, 301000000, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;