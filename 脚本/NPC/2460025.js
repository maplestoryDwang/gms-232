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
      cm.sendNormalTalk("#b(这是#p2400008#的遗物。衣服和物品散落在各处。)", 32, 2460025, false, true);
    } else {
      if (status === V++) {
        cm.askAcceptDecline("#b(我们在散落的衣物中找到了闪灼的占卜器。要回收占卜器吗？)", 32, 2460025);
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true, true, true);
          cm.inGameDirectionEvent_AskAnswerTime(500);
          cm.gainItem(4033921, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("#face9#……愚蠢的家伙。", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face9#…………", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(320000000, 3, false);
                cm.setInGameDirectionMode(false, true, false);
              }
            }
          }
        }
      }
    }
  }
}