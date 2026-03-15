var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (cm.getQuestStatus(6410) != 1) {
    cm.sendNext("...");
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("Would you like to protect Deli?");
  } else if (status == 1) {
    cm.warp(925010000, 0);
    cm.dispose();
  }
}