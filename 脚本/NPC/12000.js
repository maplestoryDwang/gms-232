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
      cm.askMenu("你有什么事？#b\r\n#L0# 我想来借用空水桶。#l\r\n#L1# 没什么事情。#l#k", 0, 12000);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.gainItem(4033893, 1);
          cm.sendNormalTalk("空水桶？啊啊，难道你想要灭火？那样的话，我把这个罐子帽借给你。", 0, 12000, false, true);
        } else if (U == 1) {
          cm.sendNormalTalk("有啥需要的话，随时来找我吧。", 0, 12000, false, true);
        }
        cm.dispose();
      }
    }
  }
}