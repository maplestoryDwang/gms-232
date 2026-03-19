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
      cm.spawnMobLimit(2400250, 1, 94, -625, 100);
      cm.spawnMobLimit(2400250, 1, 129, -325, 100);
      cm.spawnMobLimit(2400250, 1, -242, -685, 100);
      cm.spawnMobLimit(2400250, 1, -336, -685, 100);
      cm.spawnMobLimit(2400250, 1, -480, -685, 100);
      cm.spawnMobLimit(2400250, 1, -681, -685, 100);
      cm.spawnMobLimit(2400250, 1, 526, -625, 100);
      cm.spawnMobLimit(2400250, 1, 430, -625, 100);
      cm.spawnMobLimit(2400250, 1, 278, -625, 100);
      cm.spawnMobLimit(2400250, 1, 1018, -865, 100);
      cm.spawnMobLimit(2400250, 1, 884, -865, 100);
      cm.spawnMobLimit(2400250, 1, 772, -865, 100);
      cm.spawnMobLimit(2400250, 1, 1255, -565, 100);
      cm.spawnMobLimit(2400250, 1, 1125, -565, 100);
      cm.spawnMobLimit(2400250, 1, 849, -445, 100);
      cm.spawnMobLimit(2400250, 1, 730, -445, 100);
      cm.spawnMobLimit(2400250, 1, -40, -325, 100);
      cm.spawnMobLimit(2400250, 1, -389, -325, 100);
      cm.spawnMobLimit(2400250, 1, 92, -325, 100);
      cm.spawnMobLimit(2400250, 1, 922, -205, 100);
      cm.spawnMobLimit(2400250, 1, 734, -865, 100);
      cm.spawnMobLimit(2400250, 1, 722, -205, 100);
      cm.spawnMobLimit(2400250, 1, 1120, -565, 100);
      cm.spawnMobLimit(2400250, 1, 1134, -565, 100);
      cm.spawnMobLimit(2400250, 1, 1456, -385, 100);
      cm.spawnMobLimit(2400250, 1, 249, -325, 100);
      cm.spawnMobLimit(2400250, 1, 937, -865, 100);
      cm.spawnMobLimit(2400250, 1, 1095, -865, 100);
      cm.spawnMobLimit(2400250, 1, 706, -865, 100);
      cm.spawnMobLimit(2400250, 1, -736, -254, 100);
      cm.spawnMobLimit(2400250, 1, 1040, -865, 100);
      cm.spawnMobLimit(2400250, 1, 1018, -865, 100);
      cm.spawnMobLimit(2400250, 1, 917, -865, 100);
      cm.npc_ChangeController(3002123, "oid=35117042", 168, -911, 85, 118, 218, 1, false, false);
      cm.npc_SetSpecialAction("oid=35117042", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=35117042", "cry", -1, 100);
      cm.sendNormalTalk_Bottom("这是什么地方？", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#呜呜，救命。", 37, 3002123, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("怎么有个小孩在哭？", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好吧，先消灭掉周围的怪物再说。", 57, 0, true, true);
          } else if (status === V++) {
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