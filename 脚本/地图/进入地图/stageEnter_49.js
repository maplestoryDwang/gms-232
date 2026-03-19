var status = -1;
function action(m, t, g) {
  status++;
  var G = em.getProperty("stage49");
  if (G === "start") {
    cm.npc_ChangeController(2540010, "2540010", 171, 185, 1, false, true);
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    cm.npc_ChangeController(2540010, '2540010', 171, 185, 1, false, true);
    startMap(em);
    return;
  }
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else {
    if (status === n++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2540010, "2540010", 171, 185, 1, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === n++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === n++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 49 F\r\n\r\n#fs22#地下49层是通往桃乐丝最后的阶段。\r\n\r\n桃乐丝的分身会对你的知识进行测试，看你是否有资格见她。\r\n\r\n过去,曾经有相当多挑战起源之塔的探险家都没能通过这一阶段，不过我相信以你的实力一定能通过的。来吧，你去和桃乐丝的分身对话吧。", 30000);
        } else if (status === n++) {
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
function startMap(m) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, m.getTimeLeft(), 0, m.getTimeLeft(), 42011);
  m.setProperty("stage49", "start");
  cm.getMap().getWeatherEffectNotice("请解答桃乐丝的所有问题，然后前往下一层吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;