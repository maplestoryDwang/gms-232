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
      cm.askYesNo("你要使用#r魔法石臼#k，开始#b宝石工艺#k吗？\r\n#r#e※合成S级宝石时，可以在同等级的宝石中获得1个。", 4, 9000132);
    } else if (status === V++) {
      cm.openUIWithOption(0, 0);
      cm.openUI(107);
      cm.dispose();
    }
  }
}