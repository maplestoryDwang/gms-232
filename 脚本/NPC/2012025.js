var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendNext("看来你还有事情要办吧？");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("坐上船之后，需要飞很久才能到达目的地。如果你在这里有急事要办的话，请先把事情办完。怎么样？你要上船吗？");
  } else if (status == 1) {
    cm.warp(200090400, 0);
    cm.scheduleWarpTask(180, 260000100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;