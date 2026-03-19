var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage30");
  if (V === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(em);
    return;
  }
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 30 F\r\n\r\n#fs22#30楼……我喜欢的童话书里出现的胆小鬼狮子是这里的守门员。\r\n\r\n因为胆小所以会逃走或躲起来，但有时候喝了勇气药水后会大声狮子吼。\r\n\r\n狮子吼因为是声波而无法躲避……狮子继续逃跑成功的话勇气会逐渐上升。狮子若得到勇气，攻击就会变强，要小心。\r\n\r\n狮子吼持续太久的话是无法撑下去的。这种时候就去左边的装置让恐怖的气息散发就可以了。\r\n\r\n那么就消灭狮子，我们在下一楼层见吧。", 30000);
        } else if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          startMap(em);
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage30", 'start');
  cm.getMap().getWeatherEffectNotice("让我们靠近恐怖发生装置，将胆小的狮子唤出来吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;