var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == -1) {
    status = 0;
    cm.sendNext("A half-written letter... maybe it's important！Should I take a look?");
  } else if (status == 0) {
    if (cm.haveItem(4031839)) {
      cm.sendOk("I've already picked one up. I don't think I'll need to pick up another one.");
      cm.dispose();
    } else {
      cm.gainItem(4031839, 1);
      cm.sendOk("I can barely make this out... but it reads Kyrin.");
      cm.dispose();
    }
  }
}