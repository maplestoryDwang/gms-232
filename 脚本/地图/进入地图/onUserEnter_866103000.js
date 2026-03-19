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
      cm.forceJoinEvent("林之灵_营救小猫");
      cm.forceStartQuest(56427, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("咿呀！未来的冒险岛英雄！到达大人们都恐惧的狼之森林！！", 3, 9390300, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯?那个陷阱是什么?好像还有什么东西……我得去看看!!", 3, 9390300, true, true);
        } else if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.setStandAloneMode(false);
          cm.forceCompleteQuest(59002);
          cm.dispose();
        }
      }
    }
  }
}