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
      if (!cm.isQuestActive(23219)) {
        cm.sendOk("你现在应该还有别的事情。");
        cm.dispose();
        return;
      }
      cm.askYesNo("#h0#，你来啦。我来通过时间缝隙，把你送回过去。过去的你真的很强，必须做好充分的准备。准备好了吗？", 0, 2159331);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("祝你好运，#h0#。", 0, 2159331, false, true);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(927000100, 0, false);
      }
    }
  }
}