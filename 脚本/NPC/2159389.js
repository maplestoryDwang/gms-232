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
      if (cm.isQuestActive(23637) && !cm.haveItem(4033636)) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true, false);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1140);
      } else {
        cm.playerMessage(-1, "是一张模糊的照片。");
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("xenon/photoF");
        cm.inGameDirectionEvent_AskAnswerTime(3990);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("怎么回事……？这种感觉？\r\n第一次见到#p2151003#的时候就是这种感觉。有点怀念，又有点悲伤……感觉心缩起来了一样。", 3, 2159389, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但是又感觉有点温暖。让人一直想回想起来的那种感觉。", 3, 2159389, true, true);
          } else if (status === V++) {
            cm.forceStartQuest(23718, '');
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.gainItem(4033636, 1);
            cm.dispose();
          }
        }
      }
    }
  }
}