var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage17");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 17 F\r\n\r\n#fs22#还是湿地，我们尽快通过障碍，赶紧前往干爽的地区吧。\r\n\r\n夜晚一片漆黑，什么也看不见，你拿着这支火把走吧。它能照亮你附近的范围，会帮到你的。\r\n\r\n如果在途中坠落的话，你就必须#fs27#步行#fs22#回到原来的位置，所以一定要小心别坠落下去了。\r\n\r\n对了！你还要当心脚下的陷阱。", 30000);
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
  f.setProperty("stage17", "start");
  cm.getMap().getWeatherEffectNotice("请小心踩着踏板跑到出口。你还要充分利用陷阱。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;