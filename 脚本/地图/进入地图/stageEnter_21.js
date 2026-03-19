var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage21");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 21 F\r\n\r\n#fs22#地下21层有着天空之城的生灵。\r\n\r\n虽然这里的环境和它们曾经生活的地方一样，但毕竟这里是地下世界，这让我偶尔会感到愧疚。\r\n\r\n如果你消灭蓝独角狮、红独角狮以及黄独角狮的话，艾利杰就会出现的。\r\n\r\n你将艾利杰消灭，那么通往下一层的门就会被打开。", 30000);
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
  f.setProperty("stage21", "start");
  cm.getMap().getWeatherEffectNotice("请将艾利杰消灭后往下走吧。你打猎怪物后，愤怒的艾利杰就会出现的。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;