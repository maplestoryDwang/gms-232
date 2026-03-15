var status = -1;
function action(f, W, U) {
  var V = parseInt((cm.getMapId() - 141000000) / 10000) + 1;
  status++;
  if (status == 0) {
    cm.askYesNo("航海士，现在要起航吗？");
  } else if (status == 1) {
    cm.warp(141060000, V);
    cm.forceStartQuest();
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;