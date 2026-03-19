var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage37");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 37 F\r\n\r\n#fs22#地下37楼有着尼哈沙漠地区的生命体。任谁都觉得荒废的沙漠中也有生命存在。\r\n\r\n继续往地下深处探索也没有不被邪恶力量影响的孩子……\r\n\r\n这地方有狐蒙，秃鹰，沙漠地鼠，沙漠毒蝎总共4种的生命体。请各消灭100只左右。\r\n\r\n现在已经往下探索很深了，请更慎重。加油！", 30000);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else if (status === O++) {
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
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  cm.onTeleport(1, cm.getPlayer().getId(), -800, 400);
  f.setProperty("stage37", "start");
  cm.getMap().getWeatherEffectNotice("请消灭狐蒙，秃鹰，沙漠地鼠，沙漠毒蝎各100只。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;