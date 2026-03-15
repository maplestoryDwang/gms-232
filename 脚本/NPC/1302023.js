var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  if (!cm.isQuestFinished(30062)) {
    cm.dispose();
    return;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNextS_Bottom("好像应该就在这里……这个附近一定有可以爬到大海盗的飞艇上的装置……找到了！");
    } else if (status === V++) {
      cm.forceStartQuest(30063, 'clear');
      cm.warp(106030102, 0);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;