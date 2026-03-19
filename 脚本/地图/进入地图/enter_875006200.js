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
    cm.spawnMobLevel(9601663, 1, 30, -250, 87);
    cm.addPopupSay(9401281, 3000, "#face0#请原谅我的无礼，武神。", '', 0);
    cm.dispose();
  }
}