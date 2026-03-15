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
      if (cm.getNumberFromQuestInfo(501094, "mapTuto") > 1) {
        cm.dispose();
        cm.openShop(cm.getNpc() + 1);
        return;
      }
      cm.sendNormalTalk("嗯……好一座散发出神秘气息的石像。", 2, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这是沉睡于此的祖先留下的痕迹。\r\n你目前资格不足，还无法唤醒祖先。", 4, 9062318, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("祖先苏醒后，将可以获得珍贵的物品。\r\n所以，你快去完成#b#e白公的秘籍<入门>#n#k再来。", 4, 9062318, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这是唤醒沉睡的祖先后可以获得的物品吗……", 2, 0, true, true);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}