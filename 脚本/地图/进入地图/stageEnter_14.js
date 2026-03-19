var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage14");
  if (V === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    em.setProperty("stage14", 'start');
    cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
    cm.warp(992014001, 0);
    cm.dispose();
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 14 F\r\n\r\n#fs22#地下14层虽然看上去很平常，但这里却生活着具有可怕攻击力的蘑菇蝙蝠。\r\n\r\n我们在那些家伙的可视范围之外通过射击将它们消灭，然后通过这里吧。\r\n\r\n我来吸引那些家伙的注意力，你在3分钟之內把它们全都消灭掉。\r\n\r\n提醒你一下，如果子弹没有击中蝙蝠，结界就会受到损伤，我们能在这里停留的时间也就会减少。你开枪时一定要慎重。\r\n\r\n马上开始，准备好。Ready go!", 30000);
        } else if (status === O++) {
          cm.dispose();
          em.setProperty("stage14", "start");
          cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
          cm.warp(992014001, 0);
          cm.inGameDirectionEvent_SetHideEffect(1);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
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