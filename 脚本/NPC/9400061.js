var status = -1;
var selectionLog = [];
var rank = ['F', 'D', 'C', 'B', 'A', 'S'];
var reqScore = [0, 25, 50, 75, 100, 150];
var box = [2028346, 2028345, 2028344, 2028343, 2028342, 2028338];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  var V = cm.getNumberFromQuestInfo(59792, "score");
  var w = cm.getNumberFromQuestInfo(59792, "expCount");
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
      cm.sendNormalTalk_Bottom("#face0#获得总分: " + V + "分。\r\n奖励级别: " + rank[getRank(V)], 36, 9400057, false, true);
    } else {
      if (status === N++) {
        cm.sendNormalTalk_Bottom("#face0#欢迎您访问私营银河研究合作机关APORD的第6号研究船。\r\n下次再见吧。", 36, 9400057, true, true);
      } else {
        if (status === N++) {
          cm.sendNormalTalk_Bottom("#face0#你可获得的经验值如下。" + w, 36, 9400057, true, true);
        } else if (status === N++) {
          cm.gainItem(box[getRank(V)], 1);
          cm.dispose();
          cm.warp(867110000, 0);
          cm.fieldEffect_KinesisEXP(w);
          cm.gainExp(w);
          cm.updateInfoQuest(59792, "killCount=0;expCount=0;score=0");
          cm.updateInfoQuest(63864, "expCountEv=0");
          cm.addNumberForQuestInfo(59790, "ClearCount", 1);
          cm.addNumberForQuestInfo(59793, 'count', 1);
        }
      }
    }
  }
}
function getRank(f) {
  for (var W = reqScore.length - 1; W >= 0; W--) {
    if (f >= reqScore[W]) {
      return W;
    }
  }
  return 0;
}