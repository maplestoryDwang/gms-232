var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.haveItem(4031013, 30)) {
      cm.removeAll(4031013);
      cm.completeQuest(100010);
      cm.startQuest(100011);
      cm.sendOk("You're a true hero！Take this and the Dark Lord will acknowledge you.");
    } else {
      cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.");
      cm.dispose();
    }
  } else if (status == 1) {
    cm.warp(103000000, 0);
    cm.gainItem(4031012, 1);
    cm.dispose();
  }
}