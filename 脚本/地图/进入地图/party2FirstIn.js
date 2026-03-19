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
    cm.showMapEffect(true, 5120018, "消灭次元玩具白鼠和次元玩具黑鼠，搜集20张次元通行证！", 15, false);
    cm.dispose();
  }
}