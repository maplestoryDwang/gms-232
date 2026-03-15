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
    if (cm.getItemQuantity(4001878) >= 10 && cm.getItemQuantity(4001879) >= 1) {
      cm.askYesNo_Bottom("我们时间神官正在调查神秘河地区。请问你有艾尔达凝聚的水滴石吗？我听说这是拉克兰地区的怪物们的珍藏品。\r\n我需要10个#i4001878:##t4001878#和\r\n1个#i4001879:##t4001879#来进行调查，你能帮我个忙吗？我会用#b幻影币#k和你交换的。", 3003105);
    } else {
      cm.sendNormalTalk("我们时间神官正在调查神秘河地区。请问你有艾尔达凝聚的水滴石吗？我听说这是拉克兰地区的怪物们的珍藏品。\r\n我需要10个#i4001878:##t4001878#和\r\n1个#i4001879:##t4001879#来进行调查，你能帮我个忙吗？我会用#b幻影币#k和你交换的。", 0, 3003105, false, false);
      cm.dispose();
    }
  } else {
    cm.gainItem(4001878, -10);
    cm.gainItem(4001879, -1);
    cm.gainItem(4310218, 1);
    cm.dispose();
    cm.sendNormalTalk("非常感谢你的帮助！给，这是你的#b#i4310218##z4310218##k。", 0, 3003105, false, false);
  }
}