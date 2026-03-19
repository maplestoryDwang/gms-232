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
  } else if (status === V++) {
    cm.spawnMobLimit(2400261, 1, -727, -3984, 100);
    cm.spawnMobLimit(2400261, 1, -615, -3984, 100);
    cm.spawnMobLimit(2400261, 1, -486, -3984, 100);
    cm.spawnMobLimit(2400261, 1, -199, -4038, 100);
    cm.spawnMobLimit(2400261, 1, -55, -4038, 100);
    cm.spawnMobLimit(2400261, 1, 104, -4038, 100);
    cm.spawnMobLimit(2400261, 1, 39, -3759, 100);
    cm.spawnMobLimit(2400261, 1, -76, -3759, 100);
    cm.spawnMobLimit(2400261, 1, -180, -3759, 100);
    cm.spawnMobLimit(2400261, 1, -347, -3759, 100);
    cm.spawnMobLimit(2400261, 1, -878, -3587, 100);
    cm.spawnMobLimit(2400261, 1, -753, -3587, 100);
    cm.spawnMobLimit(2400261, 1, -634, -3587, 100);
    cm.spawnMobLimit(2400261, 1, -501, -3587, 100);
    cm.spawnMobLimit(2400261, 1, 227, -3445, 100);
    cm.spawnMobLimit(2400261, 1, 112, -3445, 100);
    cm.spawnMobLimit(2400261, 1, -205, -3445, 100);
    cm.spawnMobLimit(2400261, 1, -88, -3445, 100);
    cm.spawnMobLimit(2400261, 1, -430, -3266, 100);
    cm.spawnMobLimit(2400261, 1, -557, -3266, 100);
    cm.spawnMobLimit(2400261, 1, -692, -3266, 100);
    cm.setPartner(1, 3002110, 80002360, 0);
    cm.addPopupSay(3002110, 2500, "#face0#没剩多远了！再加把劲儿！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face9#呃啊啊！救命！走开！走开！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face0#马上就到了！", '', 0);
    cm.dispose();
    cm.spawnMobLimit(2400261, 1, 104, -4691, 100);
    cm.spawnMobLimit(2400261, 1, 9, -4691, 100);
    cm.spawnMobLimit(2400261, 1, 28, -4691, 100);
    cm.spawnMobLimit(2400261, 1, -346, -4642, 100);
    cm.spawnMobLimit(2400261, 1, -524, -4642, 100);
    cm.spawnMobLimit(2400261, 1, -229, -4642, 100);
    cm.spawnMobLimit(2400261, 1, -196, -4642, 100);
    cm.spawnMobLimit(2400261, 1, -581, -4358, 100);
    cm.spawnMobLimit(2400261, 1, -778, -4358, 100);
    cm.spawnMobLimit(2400261, 1, -725, -4358, 100);
    cm.spawnMobLimit(2400261, 1, -143, -4262, 100);
    cm.spawnMobLimit(2400261, 1, -188, -4262, 100);
    cm.spawnMobLimit(2400261, 1, -153, -4262, 100);
    cm.spawnMobLimit(2400261, 1, -139, -4262, 100);
    cm.spawnMobLimit(2400261, 1, 149, -4262, 100);
    cm.spawnMobLimit(2400261, 1, -745, -4958, 100);
    cm.spawnMobLimit(2400261, 1, -621, -4958, 100);
    cm.spawnMobLimit(2400261, 1, -680, -4958, 100);
    cm.spawnMobLimit(2400261, 1, 66, -5016, 100);
    cm.spawnMobLimit(2400261, 1, 25, -5016, 100);
    cm.spawnMobLimit(2400261, 1, -85, -5016, 100);
    cm.spawnMobLimit(2400261, 1, -22, -5016, 100);
    cm.spawnMobLimit(2400261, 1, -388, -5016, 100);
    cm.spawnMobLimit(2400261, 1, 175, -5064, 100);
    cm.spawnMobLimit(2400261, 1, 423, -5064, 100);
    cm.spawnMobLimit(2400261, 1, 240, -5064, 100);
    cm.spawnMobLimit(2400261, 1, -607, -5311, 100);
    cm.spawnMobLimit(2400261, 1, -730, -5311, 100);
    cm.spawnMobLimit(2400261, 1, -718, -5311, 100);
    cm.spawnMobLimit(2400261, 1, -645, -4958, 100);
    cm.spawnMobLimit(2400261, 1, -656, -4958, 100);
    cm.spawnMobLimit(2400261, 1, -246, -5016, 100);
    cm.spawnMobLimit(2400261, 1, 36, -5016, 100);
    cm.spawnMobLimit(2400261, 1, -416, -5016, 100);
    cm.spawnMobLimit(2400261, 1, 48, -5016, 100);
    cm.spawnMobLimit(2400261, 1, -215, -5016, 100);
    cm.spawnMobLimit(2400261, 1, 482, -5064, 100);
    cm.spawnMobLimit(2400261, 1, 559, -5064, 100);
    cm.spawnMobLimit(2400261, 1, 240, -5064, 100);
    cm.spawnMobLimit(2400261, 1, -738, -5311, 100);
    cm.spawnMobLimit(2400261, 1, -777, -5311, 100);
    cm.spawnMobLimit(2400261, 1, -435, -5311, 100);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;