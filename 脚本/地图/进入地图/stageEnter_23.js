var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage23");
  if (V === 'start') {
    var O = em.getProperty("stage23_fail");
    if (O != null && O > 0) {
      cm.getMap().getWeatherEffectNotice("请谨慎越过。都已经坠落" + O + "次啦！");
    }
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(em);
    return;
  }
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 23 F\r\n\r\n#fs22#啊，他们为了阻挡别人进入，把其他的路都弄消失了。\r\n\r\n找不到路的时候，按上方向键时，我可以暂时给你看路线。\r\n\r\n因为也要给别人看的关系，只有三次机会，所以看的时候一定要集中精神来看。\r\n\r\n如果不小心掉落下去了，记得使用我给你的灵魂连接器。现在我会传送到在你最后看过的路前面。", 30000);
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
  f.setProperty("stage23", "start");
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.getMap().getWeatherEffectNotice("请突破到23楼。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;