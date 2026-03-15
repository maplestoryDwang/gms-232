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
      if (cm.isQuestActive(40206) && !cm.haveItem(4033821, 1)) {
        cm.askYesNo("#b(美丽的#p2430025#，里边有着闪光的#t4033821#……要不要拿走？)", 32, 2430025);
      } else {
        cm.sendOk("#b(美丽的#p2430025#，里边有着闪光的#t4033821#。)");
        cm.dispose();
      }
    } else if (status === V++) {
      cm.playerMessage(5, '拿出来一颗珍珠。');
      cm.gainItem(4033821, 1);
      cm.dispose();
    }
  }
}