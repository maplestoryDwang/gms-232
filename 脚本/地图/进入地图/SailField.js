var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.onActionBarResult(5, 100);
  var V = cm.getNumberFromQuestInfo(17009, "step");
  if (V == 1) {
    action1(f, E, e);
  } else {
    if (V == 2) {
      action2(f, E, e);
    } else {
      if (V == 3) {
        action3(f, E, e);
      } else if (cm.getMapId() == 865000500) {
        cm.onActionBarResult(6, 100);
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你好，#h0# 。我先介绍下我自己吧。我是提皮斯，我以后会帮助你们进行航海。", 5, 9390225, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("啊哈哈，一想要和勇士你一起航海了，我的心情就好激动啊！", 5, 9390225, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我好像在哪见过你…… 额…… 肯定是我搞错了吧。", 5, 9390225, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(17005, '');
          em.schedule("航海结束", 5000);
          cm.dispose();
        }
      }
    }
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk('很高兴能再次见到你。', 5, 9390225, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好久没这么安静的航海了。哈哈哈，看来幸运女神时常陪伴着你啊。", 5, 9390225, true, true);
      } else if (status === V++) {
        cm.forceStartQuest(17006, '');
        em.schedule("航海结束", 5000);
        cm.dispose();
      }
    }
  }
}
function action3(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("船长！那边远处出现了怪物。", 5, 9390225, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("如果出现怪物的话，请按舰船技能击退怪物！", 5, 9390225, true, true);
      } else if (status === V++) {
        cm.spawnMobLimit(9390823, 1, 200, 185, 1);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;