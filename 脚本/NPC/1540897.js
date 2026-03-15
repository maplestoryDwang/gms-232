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
  if (cm.getNumberFromQuestInfo(34021, "hero1") == 2 || cm.getNumberFromQuestInfo(34021, "hero2") == 2) {
    cm.sendNormalTalk_Bottom("#face6#我们什么时候出发？", 37, 1540879, false, true);
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else {
    if (status === N++) {
      cm.askMenu_Bottom("龙神，请让我参与阿弗利埃的报仇吧。\r\n#b#L0#一起战斗。#l\r\n#L1#我再考虑考虑。#l", 37, 1540879);
    } else {
      cm.dispose();
      if (U == 0) {
        if (cm.getNumberFromQuestInfo(34021, 'hero1') < 0) {
          cm.setNumberForQuestInfo(34021, "hero1", 2);
          cm.getTopMsgFont("已经选择了第一位英雄，请挑选第二位与其同行的英雄。", 3, 20, 4, 0);
        } else if (cm.getNumberFromQuestInfo(34021, "hero2") < 0) {
          cm.setNumberForQuestInfo(34021, "hero2", 2);
          cm.getTopMsgFont("已经选择了两位一起同行的英雄，请通过传送口前往下一个地图。", 3, 20, 4, 0);
        } else {
          cm.sendNormalTalk_Bottom("#face3#抱歉，这次只有两个人能参与冲锋。", 37, 1540805, false, true);
        }
      }
    }
  }
}