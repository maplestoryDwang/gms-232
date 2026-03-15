var status = -1;
var selectionLog = [];
function start(x, A, Y) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  if (x == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Y;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else {
    if (status == z++) {
      cm.sendNormalTalk("#h0#！你好像变得更厉害了。", 0, 3003490, false, true, 0);
    } else {
      if (status === z++) {
        cm.sendNormalTalk('安哈因之柱怎么样？', 2, 3003490, true, true, 0);
      } else {
        if (status === z++) {
          cm.sendNormalTalk("多亏#h0#你的帮忙，还撑得住，\r\n还有不少其他勇士也在帮忙，现在起我们应该可以少麻烦#h0#你帮忙了。", 0, 3003490, true, true, 0);
        } else {
          if (status === z++) {
            cm.sendNormalTalk("但绝不能掉以轻心，\r\n即便在黑暗之中，他依然蠢蠢欲动地想要复活！\r\n#r#e*每日通关2次安哈因防御时，即便不参加也能完成1次。#n#k", 0, 3003490, true, true, 0);
          } else if (status === z++) {
            cm.forceCompleteQuest(39079);
            cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage0(x, A, Y) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = Y;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else {
    if (status == z++) {
      cm.askYesNo("");
    } else if (status == z++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(x, A, Y) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  if (x == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Y;
  var z = -1;
  if (status <= z++) {
    cm.dispose();
  } else {
    if (status == z++) {
      var j = cm.getQuest();
      cm.askYesNo("");
    } else if (status == z++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}