var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askAcceptDecline("#b#h ##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说情况非常紧急，请尽快过来。", 1101002);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到圣地。", 1101002);
      } else if (status === V++) {
        cm.forceStartQuest(30000);
        cm.warp(913080000, 0);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;