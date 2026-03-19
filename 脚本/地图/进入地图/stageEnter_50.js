var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage50");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 50 F\r\n\r\n#fs22#现在，我们已经来到最后一层地下50层了……\r\n\r\n你能够制服她吗……老实说，这世上没有人能有这样的自信。甚至连作为创造者的我也不敢自诩能够成功。\r\n\r\n你一定要小心。我是说她的魔法、分身以及宠物。\r\n\r\n如果她要施展无限火焰，你就使用推拉敌人的攻击让她无法吟唱咒语。\r\n\r\n那将是非常困难的。不过你要加油。现在只要将桃乐丝击败就算是真正成功了。走吧。", 30000);
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
  f.setProperty("stage50", "start");
  cm.getMap().getWeatherEffectNotice("你如果将桃乐丝消灭，就真的胜利了。这将是一场激烈的战斗，加油。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  var E = f.getMonster(9309207);
  cm.getMap().spawnMonsterOnGroundBelow(E, new java.awt.Point(390, 154));
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;