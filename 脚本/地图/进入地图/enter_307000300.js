var status = -1;
function action(b, L, p) {
  status++;
  if (cm.isQuestActive(32984)) {
    action1(b, L, p);
  } else {
    cm.dispose();
  }
}
function action1(b, L, p) {
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      cm.sendNormalTalk_Bottom("必须进入影子神殿。", 57, 0, false, true);
    } else if (status === F++) {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;