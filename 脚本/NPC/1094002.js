var status = 0;
var item;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(2186) == 1) {
      var V = Math.floor(Math.random() * 2);
      if (V == 0 && !cm.haveItem(4031853)) {
        item = 4031853;
      } else if (V == 1) {
        item = 4031854;
      } else {
        item = 4031855;
      }
      cm.gainItem(item, 1);
      if (item == 4031853) {
        cm.sendNext("I found Abel's glasses.");
      } else {
        cm.sendOk("I found a pair of glasses, but it doesn't seem to be Abel's. Abel's pair is horn-rimmed...");
      }
    }
    cm.dispose();
  }
}