var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("欢迎来到豫园皮肤管理室。想要晶莹剔透的皮肤吗？或者想要健康的古铜色皮肤吗？只要持有#b#t5153015##k就可以得到你想要的皮肤哦~", 0, 9310550, false, true);
    } else if (status === V++) {
      cm.askAvatar("通过本店特殊开发的机器可以查看护肤后的样子。你想要哪种皮肤呢？请选择吧~", 9310550, 5153015, [1, 2, 3, 4, 9, 10, 11]);
    } else {
      cm.dispose();
    }
  }
}