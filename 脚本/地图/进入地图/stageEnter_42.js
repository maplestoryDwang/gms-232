var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage42");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs42#B - 42 F\r\n\r\n#fs22#第42层是曾在神木村地区见过的橡木甲虫、金属甲虫、哈维以及血腥哈维居住的地方。\r\n\r\n桃乐丝到底想把这里变成什么样子，真是无法控制啊！\r\n\r\n你将变成守护兽的橡木甲虫、金属甲虫、哈维以及血腥哈维各消灭30只，然后通过这里吧。\r\n\r\n我的魔法力量破碎，同时碎片正在掉落，你要注意躲避别被击中了。", 30000);
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
  f.setProperty("stage42", 'start');
  cm.getMap().getWeatherEffectNotice("请各消灭橡木甲虫、金属甲虫、哈维以及血腥哈维，向第42层突破吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;