function action(f, W, U) {
  if (!cm.haveItem(4032649)) {
    cm.sendNext("You need the empty bottle for Ancient Glacial Water.");
  } else {
    cm.gainItem(4032649, -1);
    cm.gainItem(2022698, 1);
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;