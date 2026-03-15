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
      if (cm.getNumberFromQuestInfo(501094, "shop6") > 0) {
        cm.dispose();
        cm.openShop(cm.getNpc() + 1);
        return;
      }
      cm.sendNormalTalk("呵呵，你好！", 4, 9062331, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("尽管是用来修炼的地方，也不能失去应有的#r#e美感#n#k。", 4, 9062331, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("所以，有很多我特别准备的物品！", 4, 9062331, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("欢迎随时光顾#b#e装扮商店#n#k！", 4, 9062331, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.setNumberForQuestInfo(501094, "shop6", 1);
          }
        }
      }
    }
  }
}