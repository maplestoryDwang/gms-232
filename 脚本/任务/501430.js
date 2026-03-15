var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  var e = cm.getNumberFromQuestInfo(500773, "manager");
  var H = npcs[e];
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#你已经集齐我拜托你的建筑材料了啊！#h0#果然值得托付！", 36, H, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#我会好好传达，将你找来的材料用于今天的扩建工程！\r\n你明天还会来帮我吗？我会一直等你的！", 36, H, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest();
        cm.gainItem(4036756, -30);
        cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
        cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
        cm.dispose();
      }
    }
  }
}