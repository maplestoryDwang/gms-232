var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.getTopMsgFont("请消灭智能机器人, 搜集配件. ", 3, 20, 20, 0);
    cm.addPopupSay(1540503, 2000, "智能机器人居然有家人, 说实话我很吃惊!", '', 0);
    cm.addPopupSay(1540504, 2000, "没错, 哥哥. 他们真的产生了人类的感情吗?", '', 0);
    cm.addPopupSay(1540502, 2000, "我分明感受到了它们的感情. 它们说话的语气和普通的智能机器人不同. ", '', 0);
    cm.addPopupSay(1540504, 2000, "看起来真是和睦的一家人. 我想起在圣地的爸爸和妈妈. ", '', 0);
    cm.addPopupSay(1540502, 2000, "哈~就是说. 只有尽快结束战争, 才能见到爸爸和妈妈!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;