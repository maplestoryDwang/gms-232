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
    cm.playerMessage(-1, "在限定时间内避开掉落的雪！");
    cm.obstacleFallRepeat(30, "列娜海峡_大雪团", "列娜海峡_小雪团", 5);
    cm.dispose();
  }
}