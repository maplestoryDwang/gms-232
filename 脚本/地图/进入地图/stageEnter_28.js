var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage28");
  if (V === "start" || V === 'clear') {
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 28 F\r\n\r\n#fs22#是沙漠蛇与耳罩蜥蜴聚集的地方。但是看不见他们吧？\r\n\r\n蜥蜴类的怪物本来就喜欢藏在沙子里。使用一般攻击最上方踏板的蜥蜴洞穴的话可以暂时叫出他们。\r\n\r\n但是经过5~10秒后会再次躲回沙子里，所以要快点消灭它们并消灭沙漠蛇与耳罩蜥蜴各20只！", 30000);
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
  f.setProperty("stage28", "start");
  cm.getMap().getWeatherEffectNotice("摇晃树木叫出那些家伙吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;