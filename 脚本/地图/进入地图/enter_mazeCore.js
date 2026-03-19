var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, E, e) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    cm.onSetBackEffect('cube', 1, 1, 0, 0);
    if (cm.getMapId() == 940300000) {
      action1(f, E, e);
    } else if (cm.getMapId() == 940400000) {
      action2(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  if (status == 0) {
    cm.getMap().getReactorByName("exit00").forceHitReactor(cm.getPlayer(), 1);
    cm.npc_ChangeController(3003802, "oid=2307128", 500, 100, 13, 450, 550, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2307128", "summon", 0, 0);
    cm.getWeatherEffectNotice("看到了一个点着几根蜡烛的烛台。", 253, 7000, 1);
    cm.sendNormalTalk_Bottom("那就是迷宫之核吗？", 57, 0, false, true);
  } else {
    if (status == 1) {
      cm.sendNormalTalk_Bottom("其他人怎么突然！！！", 57, 0, true, true);
    } else if (status == 2) {
      cm.npc_ChangeController(3003802, "oid=2307129", 500, 100, 13, 450, 550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2307129", "summon", 0, 0);
      cm.getWeatherEffectNotice("看到了一个点着几根蜡烛的烛台。", 253, 7000, 1);
      cm.dispose();
      cm.lightUpCandle(1, 56228, 3, 1, 9);
    }
  }
}
function action2(f, E, e) {
  if (status == 0) {
    cm.getMap().getReactorByName("exit00").forceHitReactor(cm.getPlayer(), 1);
    cm.sendNormalTalk_Bottom("那就是迷宫之核吗？", 57, 0, false, true);
  } else if (status == 1) {
    cm.npc_ChangeController(3003802, "oid=2312337", 500, 100, 14, 450, 550, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2312337", 'summon', 0, 0);
    cm.getWeatherEffectNotice("看到了一个点着几根蜡烛的烛台。", 253, 7000, 1);
    cm.dispose();
    cm.lightUpCandle(1, 56228, 3, 1, 9);
  }
}