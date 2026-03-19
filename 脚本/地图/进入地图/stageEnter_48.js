var status = -1;
function action(K, p, x) {
  status++;
  var j = em.getProperty("stage48");
  if (j === "start") {
    cm.npc_ChangeController(2540004, -1433, 270);
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    cm.npc_ChangeController(2540004, -1433, 270);
    em.setProperty("stage48", "start");
    cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
    cm.dispose();
    return;
  }
  var o = -1;
  if (status <= o++) {
    cm.dispose();
  } else {
    if (status === o++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2540004, -1433, 270);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === o++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === o++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 48 F\r\n\r\n#fs22#地下48层是幻想阶梯。\r\n\r\n你要通过这里必须凭借感觉而不能相信自己所看到的。\r\n\r\n那些石蘑菇为了干扰你的注意力正在捣乱，所以你去把它们消灭后通过这里吧。\r\n\r\n啊！那是我上次见过的探险家！这次让我们再次请他帮忙指一次路吧！", 30000);
        } else if (status === o++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          cm.dispose();
          em.setProperty("stage48", "start");
          cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
        } else {
          cm.dispose();
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