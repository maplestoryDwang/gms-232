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
      cm.askMenu("什么事情？\r\n\r\n#b#L0#想和你对话。#l", 0, 2151001);
    } else if (status === V++) {
      cm.sendNormalTalk("是啊……我口才也不怎么好……真没意思。", 0, 2151001, false, true);
      cm.dispose();
    }
  }
}