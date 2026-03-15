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
      cm.askMenu("#e<组队任务：克里塞的薛西斯>#n\r\n有没有人看到过我的宠物？\r\n#b#L0#进入克里塞组队任务。#l\r\n#L1#听米卡埃拉的故事。#l\r\n#L2#领取奖励。#l", 0, 2170016);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
    cm.openNpc(2170016, "组队任务_克里塞入场");
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("我的宠物叫“薛西斯”，是一只非常可爱又温顺的山羊。但是，不久之前它开始变得狂暴，还做了一些奇怪的事情。", 0, 2170016, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("角斗场的塔中好像发生了不好的事情。请前往那里，看看我的宠物在做什么吧。\r\n\r\n - #e等级#n：110级以上 #r( 推荐等级：110 ~ 129 )#k \r\n - #e限制时间#n：20分钟\r\n - #e参加人员#n：1~4名\r\n - #e获得道具：\r\n\r\n          #i1022245:# #t1022245#\r\n          #i1022246:# #t1022246##n", 0, 2170016, true, true);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    if (cm.getItemQuantity(4001844) >= 80) {
      cm.gainItem(4001844, -80);
      var e = cm.rand(1022245, 1022246);
      cm.gainItem(e, 1);
      cm.sendNormalTalk("请#h0#大人收下这份奖品！\r\n#b#i" + e + "##z" + e + '#', 0, 2170016, false, true);
    } else {
      cm.sendNormalTalk("嗯……#h0#大人现在持有 #r0个#k#t4001844#。至少还要搜集#r80个#k才能领取奖励。", 0, 2170016, false, true);
    }
  } else if (status === v++) {
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}