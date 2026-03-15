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
      cm.sendOk("……啊？你找我吗？我也不知道我应该做什么。我的脚本位于： #b 脚本/NPC/3003770.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复我的脚本！");
    } else {
      cm.dispose();
    }
  }
}