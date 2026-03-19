var status = -1;
var pos = [[-1800, -200], [-1000, -200], [-200, -200]];
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage32");
  if (V === 'start') {
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 32 F\r\n\r\n#fs22#这个地方跟刚刚离开的31楼区域感觉很像吧？\r\n\r\n但是这个地方里除了最下方踏板外，上方的踏板是无法站上去的。\r\n\r\n踩过棘草消灭上方全部的蓝色古代绿水灵吧！", 30000);
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
  f.setProperty("stage32", "start");
  cm.getMap().getWeatherEffectNotice("消灭区域内所有怪物，移动至下一层吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  var E = f.getMapFactoryMap(cm.getMapId());
  for (var e = 0; e < pos.length; e++) {
    for (var V = 0; V < 15; V++) {
      var O = f.getMonster(9309037);
      f.registerMonster(O);
      E.spawnMonsterOnGroundBelow(O, new java.awt.Point(pos[e][0] + cm.rand(-100, 100), pos[e][1]));
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;