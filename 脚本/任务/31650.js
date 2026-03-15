var status = -1;
var selectionLog = [];
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
  } else if (status == v++) {
    cm.forceStartQuest(31650, '');
    cm.gainItem(4033393, 1);
    cm.dispose();
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
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
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("什么是……？难不成是给我送滋补品来的？\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 83,871", 0, 3001007, false, true);
    } else {
      if (status === v++) {
        cm.askMenu("哇！好香啊！为我准备滋补品了吗？！谢谢……吧唧吧唧啧啧滋滋……哇！真好吃！是用什么做的啊？\r\n#b#L0#就是那个长着战斗犬角的……#l\r\n#b#L1#呃？嗯好吃吧？什么来着……啊对了！卡卡隆，是卡卡隆，嘿嘿。#l#k", 1, 3001007);
      } else {
        if (status === v++) {
          cm.gainItem(4033393, -1);
          cm.sendNormalTalk("哇！！咳咳！呸呸！你居然给我吃这个？.. 你以为我会这么说吗？嘿嘿。我不会的。本来食物就贵重，况且还是所有人费劲心思为我做的食物，怎么能不吃呢……呜呜……得吃啊……呜…… (#p3001007#吃着吃着哭了起来)", 1, 3001007, false, true);
        } else if (status === v++) {
          cm.sendNormalTalk("快去吧……#b#p3001000##k在找你呢……", 1, 3001007, true, false);
          cm.forceCompleteQuest(31650);
          cm.gainExp(83871);
          cm.dispose();
        }
      }
    }
  }
}