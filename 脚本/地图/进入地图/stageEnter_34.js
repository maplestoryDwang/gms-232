var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage34");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 34 F\r\n\r\n#fs22#有看到旁边的黄色卷毛牛吧？先猎杀黄色卷毛牛吧。\r\n\r\n搜集黄色卷毛牛掉落的黄色皮革10个左右，再透过羊旁边的传送点可前往上方楼层。\r\n\r\n从上层的紫色卷毛牛那搜集10个紫色皮革的话就可移动至下一楼！", 30000);
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
  f.setProperty("stage34", "start");
  cm.getMap().getWeatherEffectNotice("请搜集10个以上上层紫色卷毛牛掉落的紫色皮革。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;