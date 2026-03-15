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
      if (cm.getNumberFromQuestInfo(33563, "visit") > 0) {
        cm.sendNormalTalk_Bottom("又见面了呢，你要来看看商品吗？", 37, 9070101, false, true);
      } else {
        cm.sendNormalTalk_Bottom("哎哟喂，这位客人好像头一次见呢。", 37, 9070101, false, true);
      }
    } else {
      if (status === V++) {
        if (cm.getNumberFromQuestInfo(33563, "visit") > 0) {
          cm.dispose();
          cm.openUI(296);
        } else {
          cm.sendNormalTalk_Bottom("见到你很高兴，我叫爱莎，作为马修勒的财务负责管理员，帮你将从乌鲁斯那里收集到的珍贵材料换成道具。", 37, 9070101, true, true);
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("如果你想要换成多个道具，或者是想要知道所拥有的材料的数量，都可以随时来问我。", 37, 9070101, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那就请你慢慢看这四周的商品吧。", 37, 9070101, true, true);
          } else if (status === V++) {
            cm.updateInfoQuest(33563, 'visit=1');
            cm.openUI(296);
            cm.dispose();
          }
        }
      }
    }
  }
}