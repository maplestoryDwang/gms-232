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
    cm.sendNormalTalk("我来说明一下第三关。这里有写着数字的箱子，在正确的箱子上面按↑键，可以移动到下一个箱子。其他好像没什么可以告诉你们了。\r\n", 0, 2040041, false, true);
    cm.dispose();
  }
}