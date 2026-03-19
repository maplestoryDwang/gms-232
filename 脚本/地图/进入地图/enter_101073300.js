var status = -1;
function action(f, E, e) {
  if (Math.floor(cm.getJob() / 100) == 164) {
    cm.addPopupSay(3001651, 1500, "#face1#怪物上了\r\n土拨鼠那家伙的身！", '', 0);
    cm.spawnMobLimit(2400570, 1, 18, 245, 1);
  } else {
    cm.spawnMobLimit(3501008, 1, 18, 245, 1);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;