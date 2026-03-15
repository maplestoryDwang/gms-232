var status = -1;
function action(f, W, U) {
  status++;
  if (cm.getNumberFromQuestInfo(23007, 'exp1') == 1) {
    cm.sendNext("找到乌里卡和阿班了吗？特别是阿班，他很会躲，一定要仔细找找。");
    cm.dispose();
    return;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("啊！抓住了！切……");
    } else {
      if (status === V++) {
        cm.sendNext("呃……我还想再往里躲一点的，那样的话头发就不会露出来了……");
      } else {
        if (status === V++) {
          cm.sendNext("找到乌里卡和阿班了吗？特别是阿班，他很会躲，一定要仔细找找。");
        } else if (status === V++) {
          if (cm.getNumberFromQuestInfo(23007, "exp1") == 0) {
            cm.gainExp(5);
            cm.setNumberForQuestInfo(23007, "exp1", 1);
          }
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;