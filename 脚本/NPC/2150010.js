var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendNext("看来你不太喜欢到陌生的地方去旅行。");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("你想到埃德尔斯坦去？费用是800金币……想去的话，就快点上来。");
  } else if (status == 1) {
    if (cm.getMeso() < 800) {
      cm.sendNext("嗯……你确定自己有#b800#k金币吗？请你打开背包确认一下。不够的话，就先去吧钱凑齐。");
    } else {
      cm.gainMeso(-800);
      cm.warp(200090600, 0);
      cm.scheduleWarpTask(20, 310000010);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;