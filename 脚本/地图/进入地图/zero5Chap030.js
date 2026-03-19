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
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.spawnMobLimit(9300788, 1, -235, -637, 100);
        cm.sendNormalTalk("#p2400006#！#p2400006#！我为#p2400006#你准备了可爱的敌人！#r远古精灵#k！它在冒险岛世界相当有名呢！", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我想就算是再多的远古精灵，也会被#p2400006#你全部打倒的！即使没有#p2400005#！实际上，#p2400005#更擅长理论，战斗应该不如#p2400006#你吧？", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我期待看到#p2400006#你的英姿~", 33, 2460000, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;