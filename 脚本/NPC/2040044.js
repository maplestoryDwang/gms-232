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
    cm.sendNormalTalk("我来说明一下第六关。终于到这里了……现在到了打倒引起这一切骚乱的罪魁祸首了。请你们打倒这里的#b#o9300012##k。它好像因为你们而非常生气，请一定要小心。\r\n只要全体队员合力把它打倒，次元之门就不会再被打开了。请加油吧！", 0, 2040044, false, true);
    cm.dispose();
  }
}