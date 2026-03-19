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
    cm.spawnMobLimit(9601669, 1, -600, 90, 20);
    cm.spawnMobLimit(9601669, 1, -450, 84, 20);
    cm.spawnMobLimit(9601669, 1, -300, 85, 20);
    cm.spawnMobLimit(9601669, 1, -150, 90, 20);
    cm.spawnMobLimit(9601669, 1, 0, 90, 20);
    cm.spawnMobLimit(9601669, 1, 550, 90, 20);
    cm.spawnMobLimit(9601669, 1, 300, 89, 20);
    cm.spawnMobLimit(9601669, 1, 450, 86, 20);
    cm.spawnMobLimit(9601669, 1, 600, 87, 20);
    cm.spawnMobLimit(9601669, 1, 750, 89, 20);
    cm.spawnMobLimit(9601669, 1, 900, 85, 20);
    cm.spawnMobLimit(9601669, 1, -400, -209, 20);
    cm.spawnMobLimit(9601669, 1, -200, -209, 20);
    cm.spawnMobLimit(9601669, 1, 0, -209, 20);
    cm.spawnMobLimit(9601669, 1, 200, -209, 20);
    cm.spawnMobLimit(9601669, 1, 750, -207, 20);
    cm.spawnMobLimit(9601669, 1, 950, -207, 20);
    cm.addPopupSay(9401277, 3000, "#face0#" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + '!', "VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 0);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0##b……素笑的声音……？是错觉吗？", '', 0);
    cm.spawnMobLimit(9601669, 1, 770, 87, 20);
    cm.spawnMobLimit(9601669, 1, 1211, 87, 20);
    cm.spawnMobLimit(9601669, 1, 1236, -207, 20);
    cm.dispose();
  }
}