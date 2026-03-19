var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager('副本_起源之塔');
  var O = V == null ? null : V.getProperty("stage" + parseInt('02'));
  if (O === 'start') {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, 'noHelp') == 1) {
    startMap(V);
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 02 F\r\n\r\n#fs20#啊，这个结界是？！", 0);
        } else {
          if (status === b++) {
            cm.inGameDirectionEvent_Monologue("新的结界，想要突破这个结界，就得从白狼或者野狼那里获得比各个封印更高的数字。", 0);
          } else {
            if (status === b++) {
              cm.inGameDirectionEvent_Monologue("如果获得了卡片，就前往要欺骗的结界，按上方向键。", 1);
            } else if (status === b++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
              cm.curNodeEventEnd(true);
              cm.setInGameDirectionMode(false, true);
              cm.setStandAloneMode(false);
              startMap(V);
            } else {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty('stage' + parseInt('02'), "start");
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.getMap().getWeatherEffectNotice("必须捕捉怪物获得数字高于结界的卡片后，才能欺骗结界。", 147, 60000, 1);
  cm.updateInfoQuest(42006, "yc=0;b=0;g=0;bc=0;gc=0;r=0;y=0;rc=0");
  cm.getMap().getReactorByName('r').forceHitReactor(cm.getPlayer(), cm.rand(0, 4));
  cm.getMap().getReactorByName('g').forceHitReactor(cm.getPlayer(), cm.rand(0, 4));
  cm.getMap().getReactorByName('b').forceHitReactor(cm.getPlayer(), cm.rand(0, 4));
  cm.getMap().getReactorByName('y').forceHitReactor(cm.getPlayer(), cm.rand(0, 4));
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;