var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/25", 1, 1, 1, 0, 0);
      cm.updateInfoQuest(65890, "count=639;todayCount=609;lastDate=20210530");
      cm.updateInfoQuest(65890, "count=639;todayCount=639;lastDate=20210530");
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这是怎么回事？", 3, 9390381, false, true);
        cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/25", 1, 0, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这3年来我一直在沉睡。我想现在使用我的力量还有些勉强。", 1, 9390381, false, true);
          } else if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;