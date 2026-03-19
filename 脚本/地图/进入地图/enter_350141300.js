var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.spawnMobLimit(8240181, 1, -485, -417, 100);
      cm.spawnMobLimit(8240181, 1, 405, -380, 100);
      cm.spawnMobLimit(8240181, 1, 679, -404, 100);
      cm.spawnMobLimit(8240181, 1, 708, -742, 100);
      cm.spawnMobLimit(8240181, 1, 262, -722, 100);
      cm.spawnMobLimit(8240181, 1, -39, -768, 100);
      cm.spawnMobLimit(8240181, 1, -383, -528, 100);
      cm.spawnMobLimit(8240181, 1, -708, -635, 100);
      cm.spawnMobLimit(8240181, 1, -931, -869, 100);
      cm.spawnMobLimit(8240181, 1, -658, -893, 100);
      cm.spawnMobLimit(8240181, 1, -322, -925, 100);
      cm.spawnMobLimit(8240180, 1, 247, -922, 100);
      cm.spawnMobLimit(8240181, 1, 377, -963, 100);
      cm.spawnMobLimit(8240180, 1, 511, -1009, 100);
      cm.spawnMobLimit(8240180, 1, 71, -919, 100);
      cm.spawnMobLimit(8240180, 1, -138, -891, 100);
      cm.spawnMobLimit(8240180, 1, -490, -930, 100);
      cm.spawnMobLimit(8240180, 1, -790, -881, 100);
      cm.spawnMobLimit(8240180, 1, 547, -377, 100);
      cm.spawnMobLimit(8240180, 1, 81, -422, 100);
      cm.spawnMobLimit(8240180, 1, -624, -400, 100);
      cm.spawnMobLimit(8240180, 1, 551, -710, 100);
      cm.spawnMobLimit(8240180, 1, 115, -730, 100);
      cm.spawnMobLimit(8240180, 1, -198, -762, 100);
      cm.spawnMobLimit(8240180, 1, -917, -657, 100);
      cm.spawnMobLimit(8240180, 1, -538, -578, 100);
      cm.spawnMobLimit(8240180, 1, -187, -516, 100);
      cm.onSetMapTagedObjectVisible(1, 'pt00', 512);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onSetMapTagedObjectVisible(1, "pt00", 64);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptout", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.showMapleHero();
        var O = cm.getNumberFromQuestInfo(34021, "hero1");
        var b = cm.getNumberFromQuestInfo(34021, "hero2");
        cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
        cm.addPopupSay(1540805, 1000, "#face3##p" + (1540801 + O) + "#, #p" + (1540801 + b) + "#. 刚刚碰到的那个魔族战士让我觉得怪怪的。", '', 0);
        cm.addPopupSay(1540801 + O, 1000, "#face3#恶魔……他是数百年前与我们战斗的对手。虽然实力很强，却无法信任。", '', 0);
        cm.addPopupSay(1540801 + b, 1000, "#face0#戴米安竟然是他的弟弟……", '', 0);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;