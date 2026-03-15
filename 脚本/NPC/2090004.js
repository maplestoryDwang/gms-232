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
      cm.askMenu("我可是多才多艺哦，你想要什么就告诉我吧\r\n#b#L0#制造药物#l\r\n#L1#制造卷轴#l\r\n#L2#捐赠药材#l\r\n#L3#我想放弃画轴复原……#l", 0, 2090004);
    } else if (status === V++) {
      cm.sendNext("打败黑魔法师再来。");
      cm.dispose();
    }
  }
}