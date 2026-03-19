function action(f, E, e) {
  cm.spawnMob(9300422, -2100, 1);
  cm.spawnMob(9300422, -2480, 1);
  cm.spawnMob(9300422, -3000, -613);
  cm.spawnMob(9300422, -3200, -613);
  cm.spawnMob(9300422, -2800, -613);
  cm.spawnMob(9300422, -2200, -613);
  cm.spawnMob(9300422, -2000, -613);
  cm.spawnMob(9300422, -1800, -613);
  cm.spawnMob(9300422, -2100, -330);
  cm.spawnMob(9300422, -2300, -330);
  cm.spawnMob(9300422, -2500, -330);
  cm.spawnMob(9300422, -2700, -330);
  cm.spawnMob(9300422, -2900, -330);
  cm.topMsg("按下键盘的[Ctrl]键就能进行普通攻击。");
  cm.enableActions();
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;