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
      cm.sendNormalTalk("嗯……世人好像终于知道反抗者也是引领冒险岛世界的势力之一了，真是场让人满意的会谈。", 0, 1105011, false, false);
    } else {
      cm.dispose();
    }
  }
}