function action(f, E, e) {
  cm.spawnMob(9300524, -175, 181);
  cm.spawnMob(9300524, -150, 181);
  cm.spawnMob(9300524, -125, 181);
  cm.spawnMob(9300524, -100, 181);
  cm.spawnMob(9300524, -75, 181);
  cm.spawnMob(9300524, -50, 181);
  cm.spawnMob(9300524, -25, 181);
  cm.spawnMob(9300524, 0, 181);
  cm.spawnMob(9300524, 25, 181);
  cm.spawnMob(9300524, 50, 181);
  cm.spawnMob(9300524, 75, 181);
  cm.spawnMob(9300524, 100, 181);
  cm.spawnMob(9300524, 125, 181);
  cm.spawnMob(9300524, 150, 181);
  cm.spawnMob(9300524, 175, 181);
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;