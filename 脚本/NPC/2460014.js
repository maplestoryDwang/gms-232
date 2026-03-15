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
      if (cm.isQuestActive(41267)) {
        var w = cm.getNumberFromQuestCustomData(41271);
        if (w == 0) {
          cm.sendNormalTalk("按照琦尼的设计图，画了1次魔法阵。", 0, 2460014, false, true);
          cm.forceStartQuest(41271, '1');
        } else {
          if (w == 1) {
            cm.sendNormalTalk("按照琦尼的设计图，画了2次魔法阵。", 0, 2460014, false, true);
            cm.forceStartQuest(41271, '2');
          } else if (w == 2) {
            cm.sendNormalTalk("按照琦尼设计图，完成了魔法阵。", 0, 2460014, false, true);
            cm.forceStartQuest(41271, '3');
            cm.updateInfoQuest(41267, "clear=clear");
          } else {
            cm.sendNormalTalk("按照琦尼设计图，完成了魔法阵。", 0, 2460014, false, true);
          }
        }
      } else {
        cm.sendOk("#b（一个练习用的魔法阵）");
      }
    } else {
      cm.dispose();
    }
  }
}