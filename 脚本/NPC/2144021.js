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
      var w = cm.getJob();
      if (Math.floor(w / 100) == 101) {
        cm.askAcceptDecline("哦，这是谁啊。原来是女神的接班人，新的超越者啊。很可笑地被威尔玩弄于股掌之间，怎么这会儿又跑到我这里来了。\r\n\r\n#r你我会不会携手那是后话了，先让我看看你们的实力再说吧。#k", 1, 2144021);
        cm.effect_Voice("Voice.img/akayrum/3", 100);
      } else {
        cm.askAcceptDecline("不知勇气和愚蠢区别的家伙们，想死，就放马来吧，呵呵。", 1, 2144021);
      }
    } else if (status === V++) {
      cm.npc_LeaveField("oid=3042935");
      if (cm.getMapId() == 272020200) {
        cm.spawnMobLimit(8860007, 1, 320, -190, 1);
      } else {
        cm.spawnMobLimit(8860010, 1, 320, -190, 1);
      }
      cm.dispose();
    }
  }
}