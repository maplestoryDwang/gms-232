var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage20");
  if (V === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, 'noHelp') == 1) {
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 20 F\r\n\r\n#fs22#第20层正由铁皮人守护着，他是我很喜爱的童话书中的人物。\r\n\r\n铁皮人的行动很缓慢，所以很容易避开他的攻击，不过一旦被击中就会受到很大的伤害。\r\n\r\n铁皮人每隔一段时间就需要上一次油漆，所以桃乐丝会召唤幻影出来，为他上油漆。\r\n\r\n就在桃乐丝为铁皮人上油漆的时候，你通过推拉敌人的攻击进行妨碍，使上油漆无法进行。", 30000);
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
  f.setProperty("stage20", 'start');
  cm.getMap().getWeatherEffectNotice("请消灭铁皮人。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  var E = f.getMonster(9309205);
  cm.getMap().spawnMonsterOnGroundBelow(E, new java.awt.Point(1000, 0));
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;