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
  if (!cm.isQuestActive(41209)) {
    cm.sendNormalTalk('（一只孤零零的猫。）', 2, 2450017, false, true);
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
      cm.sendNormalTalk("胳膊一样大小的紫色身体，毫无疑问这肯定是乌里卡的猫马斯特玛。你的主人丢了你之后，有多么伤心你知道吗。来，现在该回家了……", 2, 2450017, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("喵喵~？", 0, 2450017, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("喂，你跑哪里去？额，额，还跑！", 2, 2450017, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(41218, '1');
          cm.forceStartQuest(41219, '1');
          cm.dispose();
        }
      }
    }
  }
}