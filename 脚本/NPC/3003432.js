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
  } else if (status === V++) {
    if (cm.getItemQuantity(4161102) >= 1) {
      cm.sendOk("回忆录不是在你包里吗？(其他栏)");
      cm.dispose();
    } else {
      cm.gainItem(4161102, 1);
      cm.sendOk("这次别再弄丢了。");
      cm.dispose();
    }
  } else {
    cm.dispose();
  }
}