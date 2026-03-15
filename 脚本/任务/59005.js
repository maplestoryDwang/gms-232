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
  } else {
    if (status == v++) {
      cm.sendNormalTalk("喵!我好感动啊喵!真没想到你做到了喵", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("呃!!!不过,你这是不分青红皂白,就让我去对付野狼是吗?", 2, 9390463, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("喵!我再说一次,我叫阿尔喵,冒险岛动物英雄团的……", 0, 9390463, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("别转移话题,你个臭猫!!!", 2, 9390463, true, true);
          } else if (status === v++) {
            cm.forceCompleteQuest(59005);
            cm.gainExp(10);
            cm.dispose();
          }
        }
      }
    }
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
      cm.sendNormalTalk("喵!我好感动啊喵!真没想到你做到了喵", 0, 9390463, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("呃!!!不过,你这是不分青红皂白,就让我去对付野狼是吗?", 2, 9390463, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("喵!我再说一次,我叫阿尔喵,冒险岛动物英雄团的……", 0, 9390463, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("别转移话题,你个臭猫!!!", 2, 9390463, true, true);
          } else if (status === v++) {
            cm.forceCompleteQuest(59005);
            cm.gainExp(10);
            cm.dispose();
          }
        }
      }
    }
  }
}