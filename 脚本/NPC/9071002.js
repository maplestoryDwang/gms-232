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
      cm.sendNormalTalk_Bottom("你好~你是来买门票的吗？\r\n#b怪物公园REBORN#k已经不再需要入场券了~", 36, 9071002, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b每天可以免费使用2次#k，\r\n之后使用就需要#b200抵用券#k~", 36, 9071002, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}