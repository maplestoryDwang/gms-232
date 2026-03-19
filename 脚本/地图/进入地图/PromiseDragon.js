function action(f, E, e) {
  cm.setDirectionMode(true);
  cm.setStandAloneMode(true);
  cm.effect_Direction("Effect/Direction4.img/PromiseDragon/Scene0");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;