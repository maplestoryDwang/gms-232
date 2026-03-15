var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (!cm.isQuestActive(41209)) {
    cm.sendNormalTalk("（一只孤零零的猫。）", 2, 2450017, false, true);
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你的主人在找你呢？来，该回家了……", 2, 2450018, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("喵喵~", 0, 2450018, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("喂！给我停下！这该死的猫咪，到底在跑什么？看我怎么收拾你！", 2, 2450018, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(41219, '2');
          cm.dispose();
        }
      }
    }
  }
}