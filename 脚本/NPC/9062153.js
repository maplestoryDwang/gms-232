var status = -1;
var selectionLog = [];
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f === 0) {
    status--;
  } else {
    status++;
    cm.dispose();
    cm.openShop(9062145);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;