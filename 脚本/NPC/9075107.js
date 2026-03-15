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
      if (Math.abs(cm.getPlayer().getPosition().x - 1022) <= 100 && Math.abs(cm.getPlayer().getPosition().y + 523) <= 100) {
        var w = cm.getNpc() - 9075106 + 1;
        cm.sendOk("已启动" + w + "号控制装置。");
        if (cm.getNumberFromQuestInfo(1826, 'c' + w) == 0) {
          cm.setNumberForQuestInfo(1826, 'c' + w, 1);
          var N = cm.addNumberForQuestInfo(1826, "count", 1);
          if (N == 4) {
            cm.setQuestCustomData(1826, "1111");
          }
        }
        cm.dispose();
      } else {
        cm.dispose();
        cm.sendOkS("太远了，够不着。");
      }
    }
  }
}