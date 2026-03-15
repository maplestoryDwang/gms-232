var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.askMenu("梦境已经到了尽头！");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("梦境已经到了尽头！我现在让你回到现实时间去吧！");
  } else {
    if (status == 1) {
      cm.askMenu("祝你好运！伟大的冒险家！");
    } else if (status == 2) {
      cm.warp(450004000);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;