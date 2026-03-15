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
      cm.askMenu("有什么事情吗？\r\n\r\n#b#L0#我想要和你对话。#l", 0, 2151000);
    } else if (status === V++) {
      cm.sendNormalTalk("力量和技术的协调是很重要的。", 0, 2151000, false, true);
      cm.dispose();
    }
  }
}