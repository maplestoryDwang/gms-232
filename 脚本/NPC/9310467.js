var status = -1;
var selectedItem = -1;
var selectedCost = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    cm.dispose();
    cm.openNpc(9900003, "boss_out");
  }
}