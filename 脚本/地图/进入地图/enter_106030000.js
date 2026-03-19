var status = -1;
function action(f, E, e) {
  if (cm.isQuestFinished(30061)) {
    cm.removeAll(2270038);
  }
  if (cm.isQuestActive(30052) && cm.haveItem(4034104, 20)) {
    action30052(f, E, e);
  } else {
    if (cm.isQuestActive(30053) && cm.haveItem(4034105, 20)) {
      action30053(f, E, e);
    } else if (cm.isQuestActive(30060) && cm.haveItem(4034110, 20)) {
      action30060(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action30052(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext_Bottom("怎么这么慢？下一个就轮到我们了。差点就要在没有照明的情况下表演了。别那样傻站着，快点把灯装起来。好了，快点！", 1302010);
    } else if (status === V++) {
      cm.removeAll(4034104);
      cm.warp(106031000, 0, true);
      cm.gainExp(44850);
      cm.forceCompleteQuest(30052);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function action30053(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext_Bottom("我还担心你会不会忘记我的委托呢。不知道为什么，我的委托总是很容易被人忘记。好了，马上就轮到我了。我要把盔甲穿上去。请稍等一下！", 1302115);
    } else if (status === V++) {
      cm.removeAll(4034105);
      cm.warp(106031000, 0, true);
      cm.gainExp(44850);
      cm.forceCompleteQuest(30053);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function action30060(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext_Bottom("拜托你的东西全部搜集到了吗？哦，那你先把头盔戴上看看。我想了一下，我们蘑菇没有腿，就算戴上头盔，看上去也不像大海盗。但是你长着两条腿，不是吗？", 1302100);
    } else if (status === V++) {
      cm.removeAll(4034110);
      cm.warp(106031001, 0, true);
      cm.gainExp(44850);
      cm.forceCompleteQuest(30060);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;