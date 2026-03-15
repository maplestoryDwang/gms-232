var status = -1;
function start() {
  cm.askYesNo("要返回先前所在的地方吗？");
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.warp(cm.getSavedLocation("MULUNG_TC"));
    cm.clearSavedLocation("MULUNG_TC");
    cm.dispose();
  } else {
    cm.dispose();
  }
}