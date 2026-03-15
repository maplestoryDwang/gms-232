var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  if (cm.getStringFromQuestInfo(30062, "NpcSpeech") === "13020161/13020072/13020183") {
    cm.sendOk("我，我说！我全说！");
  } else {
    cm.sendOk("我是骄傲的大海盗！我是绝对不会开口的！");
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;