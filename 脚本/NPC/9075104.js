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
      if (Math.abs(cm.getPlayer().getPosition().x + 648) <= 100 && Math.abs(cm.getPlayer().getPosition().y - 81) <= 100) {
        cm.sendNormalTalk("连接控制装置需要密码。做好输入密码的准备了吗？", 0, 9075104, false, true);
      } else {
        cm.dispose();
        cm.sendOkS("太远了，够不着。");
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("密码？密码到底是什么呢……哎呀，不知道。先随便输个试试吧。应该不会有事吧……", 2, 9075104, true, true);
      } else {
        if (status === V++) {
          cm.askText("为了连接控制装置，请输入密码。", '', 9075104, 0, 7, 0);
        } else if (status === V++) {
          cm.forceStartQuest(1832, 'Access');
          cm.sendNormalTalk("已连接到链接2控制装置。现在链接2正在正常运转。", 0, 9075104, false, false);
        } else {
          cm.dispose();
        }
      }
    }
  }
}