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
      if (cm.getMapId() == 350060180) {
        cm.spawnMobLimit(8240098, 1, 515, -16, 1);
        cm.obstacleFallRepeat(3, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
      } else {
        if (cm.getMapId() == 350060200) {
          cm.spawnMobLimit(8240099, 1, 515, -16, 1);
          cm.obstacleFallRepeat(4, "黑色天堂_蓝色残骸", "黑色天堂_机器人色残骸", 5);
        } else {
          if (cm.getMapId() == 350060240) {
            cm.spawnMobLimit(8240104, 1, 515, -16, 1);
            cm.obstacleFallRepeat(3, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
          } else if (cm.getMapId() == 350060260) {
            cm.spawnMobLimit(8240105, 1, 515, -16, 1);
            cm.obstacleFallRepeat(4, "黑色天堂_蓝色残骸", "黑色天堂_机器人色残骸", 5);
          }
        }
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;