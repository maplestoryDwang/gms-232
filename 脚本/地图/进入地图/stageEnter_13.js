var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage13");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 13 F\r\n\r\n#fs22#大事不好了。维持这一层的魔法正在颤动，而且有碎片掉落下来。\r\n\r\n再加上那些被碎片击中的怪物受惊之后变得疯狂起来，而且正朝着魔力石的方向直奔而去。\r\n\r\n受到的冲击越大，崩溃的速度也就越快，所以你去将那些发疯的怪物消灭，防止它们进一步的破坏。", 30000);
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
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  f.setProperty("stage13", "start");
  cm.getMap().getWeatherEffectNotice("请躲避掉落的碎片，并在怪物撞击到魔力石之前，将它们全部消灭。注意不要远离魔力石。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  f.schedule("stage13_Fight", 10000);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;