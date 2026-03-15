var status = -1;
function action(f, W, U) {
  status++;
  if (cm.getNumberFromQuestInfo(23007, "exp2") == 1) {
    cm.sendNext("阿俊和阿班找到了吗？阿班不仔细找的话很难找到？你到所有可能的地方都去找找。");
    cm.dispose();
    return;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("咦？被发现了？嘿嘿嘿……是我躲的地方太容易找了吗？");
    } else {
      if (status === V++) {
        cm.sendNext("阿俊和阿班找到了吗？阿班不仔细找的话很难找到？你到所有可能的地方都去找找。");
      } else if (status === V++) {
        if (cm.getNumberFromQuestInfo(23007, "exp2") == 0) {
          cm.gainExp(5);
          cm.setNumberForQuestInfo(23007, 'exp2', 1);
        }
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;