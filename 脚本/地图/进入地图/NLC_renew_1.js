var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  cm.cancelItem(2210065);
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
      if (!cm.isQuestActive(28746)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(10000);
      cm.curNodeEventEnd(true);
      cm.npc_LeaveField("oid=67524");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [4500, 803, -611, 1, 0, 1, 1, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien2/0"], [4500, 703, -611, 1, 0, 1, 1, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 0, -100, 0, 0, 0, 0, 0]);
        cm.sendNormalTalk("哇哦，这是什么啊！早知道就带个照相机来了？！", 3, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(4);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("外星人基地？它们肯定是想……入侵冒险岛！我得去警告大家！", 3, 0, false, true);
          } else {
            if (status === V++) {
              cm.playerMessage(-1, '震区调查完成1/1');
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === V++) {
              cm.forceStartQuest(28746, '1');
              cm.setStandAloneMode(false);
              cm.eventSKill(0);
              cm.warp(600000000, 6, false);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}