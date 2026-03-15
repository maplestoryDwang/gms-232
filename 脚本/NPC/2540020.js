var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var w = cm.getItemQuantity(4009236);
      if (w >= 10) {
        cm.gainItem(4009236, -10);
        cm.playerMessage(5, '橙色古代水灵出现了。');
        cm.playerMessage(-1, "橙色古代水灵出现了。");
        for (var V = 0; V < pos.length; V++) {
          if (cm.rand(0, 100) > 75) {
            continue;
          }
          var w = cm.rand(2, 5);
          for (var u = 0; u < w; u++) {
            var Q = em.getMonster(9309035);
            cm.getMap().spawnMonsterOnGroundBelow(Q, new java.awt.Point(pos[V][0] + cm.rand(-50, 50), pos[V][1]));
          }
        }
      } else {
        cm.sendOkS("得收集 #b10个#k 橙水灵的液体才行。目前只有 #r" + w + "个#k 。");
      }
      cm.dispose();
    }
  }
}
var pos = [[724, -700], [724, -460], [724, -220], [724, 20], [1270, -640], [1270, -400], [1270, -160], [1270, 80], [-700, -700], [-700, -460], [-700, -220], [-700, 20], [-1250, -640], [-1250, -400], [-1250, -160], [-1250, 80]];