var status = -1;
function start() {
  cm.dispose();
  if (cm.getLevel() <= 10) {
    cm.setStandAloneMode(true);
    cm.setDirectionMode(true);
    cm.effect_Direction("Effect/Direction3.img/goAdventure/Scene" + (cm.getPlayer().getGender() == 0 ? '0' : '1'));
    cm.enableActions();
  } else {
    cm.warp(10000, 0, true);
  }
}