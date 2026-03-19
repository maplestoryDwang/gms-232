var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.spawnMobLimit(2400561, 1, 740, 38, 100);
    cm.spawnMobLimit(2400561, 1, 634, 38, 100);
    cm.spawnMobLimit(2400561, 1, 252, 38, 100);
    cm.spawnMobLimit(2400561, 1, 138, 38, 100);
    cm.spawnMobLimit(2400561, 1, -380, 38, 100);
    cm.spawnMobLimit(2400561, 1, -489, 38, 100);
    cm.spawnMobLimit(2400561, 1, -600, 38, 100);
    cm.spawnMobLimit(2400561, 1, -729, 38, 100);
    cm.spawnMobLimit(2400561, 1, 699, -363, 100);
    cm.spawnMobLimit(2400561, 1, 582, -363, 100);
    cm.spawnMobLimit(2400561, 1, 143, -144, 100);
    cm.spawnMobLimit(2400561, 1, 23, 38, 100);
    cm.spawnMobLimit(2400561, 1, -88, -168, 100);
    cm.spawnMobLimit(2400561, 1, -209, -168, 100);
    cm.spawnMobLimit(2400561, 1, 157, -370, 100);
    cm.spawnMobLimit(2400561, 1, 50, -370, 100);
    cm.spawnMobLimit(2400561, 1, -66, -370, 100);
    cm.spawnMobLimit(2400561, 1, -187, -370, 100);
    cm.spawnMobLimit(2400561, 1, -618, 38, 100);
    cm.spawnMobLimit(2400561, 1, -730, 38, 100);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face7#我还以而会很吵闹……\r\n没想到挺冷清的嘛。", '', 0);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face0#剩下的肯定已经渗透到村里了。", '', 0);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face2#……果然提前做好准备不会错。", '', 0);
    cm.spawnMobLimit(2400561, 1, 1272, 38, 100);
    cm.spawnMobLimit(2400561, 1, 976, 38, 100);
    cm.spawnMobLimit(2400561, 1, 1062, 38, 100);
    cm.spawnMobLimit(2400561, 1, 1118, 38, 100);
    cm.spawnMobLimit(2400561, 1, 914, 38, 100);
    cm.dispose();
  }
}