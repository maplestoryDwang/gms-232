var status = -1;
function action(f, W, U) {
  if (em == null) {
    cm.sendOk("...");
    cm.dispose();
    return;
  }
  if (em.getProperty("stage") === '1' && em.getProperty("stage5") === '0') {
    cm.sendOk("What... a suspicious conspiracy? This can't be...");
    em.setProperty("stage", '2');
  } else if (em.getProperty("stage5") === '1' && cm.getMap().getNumMonsters() == 0) {
    cm.sendOk('Continue.');
    em.setProperty('stage5', '2');
    cm.getMap().setReactorState();
  } else {
    cm.sendOk("...");
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;