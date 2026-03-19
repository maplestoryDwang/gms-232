var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.effect_OnUserEff("UI/tutorial.img/4");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;