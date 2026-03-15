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
      cm.askMenu("有什么事吗？\r\n#L100#我想修理装备。#l", 0, 2080000);
    } else {
      if (status === V++) {
        cm.askYesNo("好的！让我来发挥一下我的实力吧。根据耐久度的消耗量和装备的等级，修理费用会有所不同。这你应该知道吧？你现在就想修理装备吗？", 0, 2080000);
      } else if (status === V++) {
        cm.openUIWithOption(33, 2080000);
        cm.dispose();
      }
    }
  }
}