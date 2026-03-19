var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(40104)) {
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
      cm.npc_ChangeController(2420007, "oid=24729", 677, 55, 4, 627, 727, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.spawnMobLimit(9300760, 1, -182, 55, 100);
      cm.spawnMobLimit(9300760, 1, -52, 55, 100);
      cm.spawnMobLimit(9300760, 1, 90, 55, 100);
      cm.spawnMobLimit(9300760, 1, 292, 55, 100);
      cm.spawnMobLimit(9300760, 1, 480, 55, 100);
      cm.sendNormalTalk("……这里是怪盗幻影的据点？……怎么看不见幻影，全是#r#o9300760##k。", 41, 2400006, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这里是#o9300760#的据点！先消灭掉#o9300760#吧！", 33, 2420007, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#可恶！这是什么情况？！先全都消灭掉吧！", 41, 2400005, true, true);
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