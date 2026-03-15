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
      cm.askMenu("我的名字…原本并不是笨蛋……\r\n#b#L0#询问记忆恢复了多少#l\r\n#b#L1#停止对话#l", 0, 2155100);
    } else if (status === V++) {
      if (U == 0) {
        cm.sendNormalTalk("嗯……还需要一点时间。\r\n你完成的委托越多，搜集芯片碎片就越容易。\r\n#b你能再帮我解决几个委托吗？#k\r\n那样的话，我芯片就会逐渐修复。", 0, 2155100, false, true);
      } else {
        cm.sendNormalTalk("虽然我记不清了，但…我…一定要回去。", 0, 2155100, false, false);
      }
    } else {
      cm.dispose();
    }
  }
}