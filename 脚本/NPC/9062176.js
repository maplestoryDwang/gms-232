var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = 'action' + (cm.getMapId() - 993104000);
  eval(V)(f, W, U);
}
function action0(f, W, U) {
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
      cm.askMenu_Bottom("\r\n请稍等一下YO！\r\n #b<新复古爬高高~>#k马上就要开始了YO！\r\n请不要放弃YO！\r\n#L0#<新复古爬高高~>参加方法#l\r\n#r#L1#离开这里。", 132, 9062176, 3);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#b#e<新复古爬高高~>#n#k\r\n\r\n朝着甘迪所在的高处YO～\r\n比其他人更快#b爬高高~#kYO！\r\n机会只有#b一次！#k一个决定就能改变一切YO！ \r\n比赛结束后将根据#b排名#k发放#b新复古能量#kYO。", 132, 9062176, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n#b#e<新复古爬高高~>#n#k\r\n\r\n不要因为没有进入排名而失望YO。\r\n按照你达到的高度～也能获得#b新复古能量#k哦YO\r\n不努力的勇士当然什么也得不到YO。\r\n直到最后也不要放弃，尽可能地去多多摘椰子吧YO！\r\n抛弃是什么？永不放弃YO！", 132, 9062176, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n#b#e<新复古爬高高~奖励>#n#k\r\n - #r第1名#k : #b10,000#k新复古能量\r\n - #r第2 ～ 5名#k : #b7,500#k新复古能量\r\n - #r第6 ～ 10名#k : #b6,000#k新复古能量\r\n - #r第11 ～ 20名#k : #b4,500#k新复古能量\r\n - #r第21 ～ 30名#k : #b3,500#k新复古能量\r\n - #r未进入排名#k : #b2,500#k新复古能量#k", 132, 9062176, false, false, 3);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("看来你很忙啊YO！下次请一定要参加哦YO！", 36, 9062175, false, false, 3);
  } else if (status === V++) {
    cm.warp(cm.getNumberFromQuestInfo(100238, "rMap"), 0, false);
    cm.dispose();
  }
}
function action100(f, W, U) {
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
      cm.askYesNo_Bottom("\r\n#b<新复古爬高高~>#k你已经上到顶端了YO！\r\n你要领取奖励并先离开吗YO？", 36, 9062176, 3);
    } else {
      var w = cm.getNumberFromQuestInfo(100240, "rank");
      var N = w == 1 ? 10000 : w <= 5 ? 7500 : w <= 10 ? 6000 : w <= 20 ? 4500 : w <= 30 ? 3500 : 2500;
      cm.新复古王国_获得点数(N);
      cm.dispose();
      cm.warp(993104200, 9, false);
    }
  }
}
function action200(f, W, U) {
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
      cm.askYesNo_Bottom("\r\n新复古爬高高~勇士修行还不错吧YO？\r\n希望下次能有更好的成果YO。\r\n#r我送你返回原地吧YO。", 36, 9062176, 3);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(cm.getNumberFromQuestInfo(100238, "rMap"), 0, false);
    }
  }
}