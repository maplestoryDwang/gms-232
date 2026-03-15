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
      cm.askMenu("有什么事吗？\r\n#b#L0#我想购买珍贵的东西。#l", 0, 2020005);
    } else if (status === V++) {
      cm.sendNormalTalk("如果你能接受我的请求，我就把东西卖给你。", 0, 2020005, false, true);
      cm.dispose();
    }
  }
}