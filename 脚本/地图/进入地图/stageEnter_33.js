var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage33");
  var O = em.getMapFactoryMap(cm.getMapId());
  if (V === "start" || V === 'clear') {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, 'noHelp') == 1) {
    startMap(em);
    return;
  }
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
      for (var b = 0; b < 5; b++) {
        for (var w = 0; w < 5; w++) {
          var L = O.getReactorByName(b + '' + w);
          L.forceHitReactor(cm.getPlayer(), cm.rand(0, 3));
        }
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === b++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === b++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 33 F\r\n\r\n#fs22#这楼是有着古代植物的植物圈。\r\n\r\n啊，这些家伙们混在植物园的房间里，无法轻​​易地走下去。\r\n\r\n通过传送点前要仔细看好方向，请移动至右边最里面的传送点。不是想要的方向的话，丢下迷宫钥匙 - 逆时针方向或\t迷宫钥匙 - 顺时针方向就会改变方向，好好珍惜使用它们。", 30000);
        } else if (status === b++) {
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
  f.setProperty("stage33", 'start');
  cm.getMap().getWeatherEffectNotice("按照你自己的意愿转动传送口，然后前往下一层吧。", 147, 60000, 1);
  cm.gainItem(4009233, 8);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;