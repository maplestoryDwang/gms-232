var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askAcceptDecline("你们是来击退我的勇士吗……亦或是与黑魔法师敌对的人吗……无论是哪一方都无所谓，如果大家目的明确，就无需多言了……\r\n上吧，你们这些愚蠢的家伙……");
      cm.effect_Voice("Voice.img/vonleon/0", 100);
    } else if (status === V++) {
      cm.dispose();
      cm.npc_LeaveField(cm.getNpc());
      spawn();
    }
  }
}
function spawn() {
  if (cm.getMapId() == 211070100) {
    cm.spawnMobLimit(8840013, 1, -6, -188, 1);
  } else if (cm.getMapId() == 211070102) {
    cm.spawnMobLimit(8840010, 1, -6, -188, 1);
  } else {
    cm.spawnMobLimit(8840018, 1, -6, -188, 1);
  }
}