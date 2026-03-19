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
  if (!cm.isQuestActive(20031)) {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1106002, "oid=227124", -268, 120, 12, -318, -218, 1, false, 0, false);
        cm.curNodeEventEnd(true);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(true, true, true);
        cm.playerMessage(-1, "林伯特的杂货店");
        cm.playerMessage(-1, "冒险岛历XXXX年3月7日");
        cm.getTopMsgFont("点击灯泡就可以开始任务。任务状态快捷键[Q]/选择型[J]", 3, 20, 20, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else if (status === V++) {
          cm.effect_OnUserEff("UI/tutorial.img/34");
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  } else {
    cm.dispose();
  }
}