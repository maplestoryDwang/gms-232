var status;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0 && status == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("恭喜你通过了第二阶段的测试！");
  } else {
    if (status == 1) {
      if (!cm.canHold(4031062, 1)) {
        cm.sendNext('背包空间不足');
        cm.dispose();
        return;
      }
      cm.gainItem(4031062, 1);
      cm.warp(211042300);
      if (cm.getQuestStatus(100202) != 2) {
        cm.startQuest(100202);
        cm.completeQuest(100202);
        cm.gainExp(10000);
      }
      cm.dispose();
    }
  }
}
var status = -1;