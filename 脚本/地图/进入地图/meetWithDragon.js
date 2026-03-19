function action(f, E, e) {
  cm.setDirectionMode(true);
  cm.setStandAloneMode(true);
  cm.effect_Direction("Effect/Direction4.img/meetWithDragon/Scene" + (cm.getPlayer().getGender() == 0 ? '0' : '1'));
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;