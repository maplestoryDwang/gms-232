var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(32104)) {
    cm.warp(101070010, 0);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;