var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      if (!cm.isQuestActive(3345)) {
        cm.dispose();
        return;
      } else {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true, false);
        cm.getTopMsgFont("请按照指定的顺序，点击魔法阵进行触发。", 3, 30, 8, 0, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction1.img/effect/aran1/tutorialClick/0", "oid=0"], [3000, -110, -45, 1, 0, 1, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      }
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}