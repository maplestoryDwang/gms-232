var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("#b（看到了一小段阿赫过去星光熠熠的模样，好像可以前往那个时期的废都广场。）", 0, 1052201);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(103041160, 0);
    }
  }
}