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
  var V = cm.getInfoQuest(18837);
  if (V != null && V.indexOf("visit=1") >= 0) {
    openUI();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var w = -1;
  selectionLog[status] = U;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      cm.sendNext_Bottom("你来了啊，能看到你是我的荣幸，操作已经堪比神的山羊……现在就像是个非常出色的人呢。", 9070200);
    } else {
      if (status === w++) {
        cm.sendNext_Bottom("什么？你说你不是那种人？别谦虚了，谁都会有想要隐藏的秘密的。", 9070200);
      } else {
        if (status === w++) {
          cm.sendNext_Bottom("其他动物那边，我会帮你保密的，真希望你能在这里给那些缺根筋的家伙好好做个表率。", 9070200);
        } else {
          if (status === w++) {
            cm.sendNext_Bottom("还有变成人的身体之后，虽然实力不如从前……但我个人很想知道，当#g人的操作达到神的境界#k时会是什么样子。", 9070200);
          } else {
            if (status === w++) {
              cm.sendNext_Bottom("那你只要做好羊的行动，当个挑战神操作的普通人类就好了，祝你好运。", 9070200);
              cm.updateInfoQuest(18837, "visit=1");
              cm.setNumberForQuestInfo(18838, "count", 99);
              cm.setNumberForQuestInfo(18838, "stageT", new Date().getTime());
              cm.setNumberForQuestInfo(18838, "hack", 0);
              cm.setNumberForQuestInfo(18838, "stage", 0);
              cm.setNumberForQuestInfo(18838, "mode", 1);
            } else if (status == w++) {
              openUI();
            }
          }
        }
      }
    }
  }
}
function openUI() {
  cm.addPopupSay(9070200, 2000, "你要挑战“神操作”吗？");
  var f = cm.getNumberFromQuestInfo(18838, "stage");
  cm.openUIWithOption(1112, Math.max(0, Math.floor((f - 1) / 5)));
  cm.dispose();
}