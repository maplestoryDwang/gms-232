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
      cm.sendNormalTalk("听说最近在黑色天堂内部可以获得神秘的东西(#i4001877:#)。不过你好像没有……\r\n如果发现了，一定要拿来给我看看……\r\n（可以把#i4001877:##b#t4001877##k交换成#i1672076:##b#t1672076##k。）", 0, 2155009, false, true);
    } else {
      if (status === V++) {
        if (cm.haveItem(4001877, 1)) {
          cm.sendNormalTalk("太好了！#i1672076:##b#t1672076#它是你的了……", 0, 2155009, true, false);
          cm.gainItem(1672076, 1);
          cm.dispose();
        } else {
          cm.sendNormalTalk("我需要纪念币……不过原因我得保密……\r\n得有20个#i4001842:##t4001842#和\r\n1个#i4001843:##t4001843#\r\n才可以和我进行交易。\r\n杉顺想要的……#b埃苏莱布斯币#k……在我手里……", 0, 2155009, true, false);
        }
      } else if (status === V++) {
        if (cm.haveItem(4001842, 20) && cm.haveItem(4001843, 1)) {
          cm.sendNormalTalk("太好了！#i4310156:##b#t4310156#它是你的了……", 0, 2155009, true, false);
          cm.gainItem(4001842, -20);
          cm.gainItem(4001843, -1);
          cm.gainItem(4310156, 1);
          cm.dispose();
        }
        cm.dispose();
      }
    }
  }
}