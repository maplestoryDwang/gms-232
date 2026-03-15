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
      cm.sendNormalTalk_Bottom("终于找到了！这下总算可以弄清楚克拉尼亚藏在哪里了。", 56, 9401115, 0, 1);
      if (!cm.haveItem(4036643, 1)) {
        cm.gainItem(4036643, 1);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}