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
        cm.spawnMobLimit(9300786, 1, 764, 83, 100);
        cm.sendNormalTalk("你果然很强啊。竟然这么轻易地就击退了远古精灵……真不愧是#p2400005#。真是可惜了。你为什么要被 #p2400006#束缚着……", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("喏，那我给你介绍下第二个敌人吧。第二个敌人是#r艾利杰#k……是很美但却很凶猛的野兽。我想#p2400005#你一定会很享受这次的战斗的。", 33, 2460000, true, true);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
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