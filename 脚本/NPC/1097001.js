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
      if (cm.getMapId() == 912080120) {
        if (cm.getNumberFromQuestInfo(30108, "success") == 5) {
          cm.askAcceptDecline("谢谢你帮我制作了美味的料理！制作出美味料理的人可以获得更多的经验值作为奖励！当然，也能获得更多的厨师资格证！谢谢你！你想领取奖励并退出吗？", 0, 1097001);
        } else {
          cm.askAcceptDecline("嗯……坦率地说，你的料理做得并不好。是放错了材料吗？必须使用正确的材料，才能制作出美味的料理……只要继续挑战，实力自然就会见长。好了，领取奖励之后，你可以走了。", 0, 1097001);
        }
      } else {
        cm.askYesNo("你想停止制作料理并退出吗？料理没有完成的话，就无法获得奖励。如果你觉得没关系，我就送你出去。");
      }
    } else if (status === V++) {
      if (cm.getMapId() == 912080120) {
        cm.addNumberForQuestCustomData(13723, 1);
        if (cm.getNumberFromQuestInfo(30108, "success") == 5) {
          cm.gainItem(4033668, 2);
          cm.gainExp(Math.pow(cm.getPlayer().getLevel(), 3) * 2);
          if (cm.isQuestActive(30101)) {
            cm.forceStartQuest(30102, Math.min(3, cm.getNumberFromQuestCustomData(30102) + 1));
          }
        } else {
          cm.gainItem(4033668, 1);
          cm.gainExp(Math.pow(cm.getPlayer().getLevel(), 3));
        }
      }
      cm.dispose();
      cm.warp(912080000);
    }
  }
}