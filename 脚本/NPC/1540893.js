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
    if (cm.haveItem(4001868, 10) && cm.haveItem(4001869, 1)) {
      cm.askAcceptDecline("解铃还须系铃人。你有刻印着我们魔族烙印的灵魂石吗？我会好好酬谢你的。\r\n如果你有20个#i4001868:##t4001868#和\r\n1个#i4001869:##t4001869#，\r\n我可以帮你交换成#b烙印币#k。");
    } else {
      cm.sendNormalTalk("解铃还须系铃人。你有刻印着我们魔族烙印的灵魂石吗？我会好好酬谢你的。\r\n必须有20个#i4001868:##t4001868#和\r\n1个#i4001869:##t4001869#，\r\n才能和我交易。\r\n我可以帮你交换成#b烙印币#k。", 0, 1540893, false, false);
      cm.dispose();
    }
  } else {
    cm.gainItem(4001868, -10);
    cm.gainItem(4001869, -1);
    cm.gainItem(4310199, 1);
    cm.sendNormalTalk('感谢你的帮助！', 0, 1540893, false, false);
    cm.dispose();
  }
}