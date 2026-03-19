var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage40");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 40 F\r\n\r\n#fs22#第40层正由获得了头脑的稻草人守护着。它们可不好对付。\r\n\r\n由于稻草人是由稻草构成的，通过普通的攻击很难对其造成伤害。同时它们也存在弱点。\r\n\r\n你看见那边着火的地方了吗？你将稻草人引到那里。那样，稻草人就会被渐渐焚烧的。\r\n\r\n虽然你引来的稻草人越多，它们被烧毁的速度也就越快，不过那样它们就会更加愤怒，进而向你发动致命攻击的。\r\n\r\n你要小心这一点！", 30000);
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
  f.setProperty("stage40", "start");
  cm.getMap().getWeatherEffectNotice("请消灭稻草人，前往下一层吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  var E = f.getMapFactoryMap(cm.getMapId());
  var e = f.getMonster(9309203);
  E.spawnMonsterOnGroundBelow(e, new java.awt.Point(1000, 0));
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;