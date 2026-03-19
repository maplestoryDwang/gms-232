var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage26");
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
        cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 0, -800);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 26 F\r\n\r\n#fs22#这里聚集了黏呼呼的橙水灵。\r\n\r\n收集橙水灵的液体10个淋在火焰祭坛上可以召唤更多的橙水灵。\r\n\r\n用这种方式继续召唤橙水灵。总共请消灭300只橙水灵！\r\n\r\n那么，可以做到吧？那么祝你好运！", 30000);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
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
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage26", "start");
  cm.getMap().getWeatherEffectNotice("请将10个橙水灵的液体放在火焰祭坛上召唤出怪物，然后消灭300个怪物。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;