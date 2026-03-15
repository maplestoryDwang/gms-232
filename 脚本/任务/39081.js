var status = -1;
var selectionLog = [];
function start(v, p, o) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = o;
  var T = -1;
  if (status <= T++) {
    cm.dispose();
  } else {
    if (status == T++) {
      cm.sendNormalTalk("#h0#！你真的已经强大到让我刮目相看了呢！", 0, 3003538, false, true, 0);
    } else {
      if (status === T++) {
        cm.sendNormalTalk("埃斯佩拉的次元怎么样？", 2, 3003538, true, true, 0);
      } else {
        if (status === T++) {
          cm.sendNormalTalk("#h0#，多亏了你现在情况好转了许多，\r\n现在有不少其他勇士也来帮忙，#h0#，从现在起应该不需要你这么操劳了。", 0, 3003538, true, true, 0);
        } else {
          if (status === T++) {
            cm.sendNormalTalk("但绝不能掉以轻心，\r\n毕竟即便有所好转，次元也尚未稳定。\r\n#r#e*每日通关2次保护埃斯佩拉时，即便不参加也能完成1次。#n#k", 0, 3003538, true, true, 0);
          } else if (status === T++) {
            cm.forceCompleteQuest(39081);
            cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage0(v, p, o) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = o;
  var T = -1;
  if (status <= T++) {
    cm.dispose();
  } else {
    if (status == T++) {
      cm.askYesNo("");
    } else if (status == T++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(v, p, o) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = o;
  var T = -1;
  if (status <= T++) {
    cm.dispose();
  } else {
    if (status == T++) {
      var a = cm.getQuest();
      cm.askYesNo("");
    } else if (status == T++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}