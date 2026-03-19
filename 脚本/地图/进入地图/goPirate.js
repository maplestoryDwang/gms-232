function start() {
  cm.effect_Direction("Effect/Direction3.img/pirate/Scene" + (cm.isQuestFinished(32214) ? '0' : '1'));
  cm.dispose();
}
var status = -1;