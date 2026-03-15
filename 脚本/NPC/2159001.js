var status = -1;
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("#h0#，你来晚了。捉迷藏现在开始。既然已经到了大人不许来的地方，就应该好好玩玩。");
    } else {
      if (status === V++) {
        cm.askYesNo("你来晚了，你来找我们。我们现在躲起来。你到前面的大树那里数到10。");
      } else if (status === V++) {
        cm.warp(931000001, 1);
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