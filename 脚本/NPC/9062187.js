var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = "action" + (cm.getMapId() - 993104300);
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
      cm.askMenu_Bottom("\r\n请稍等一下YO！\r\n#b<新复古椰子比赛>#k马上就要开始了YO！\r\n请一定要争取胜利哦YO！\r\n#L0#<新复古椰子比赛>参加方法#l\r\n#r#L1#离开这里。", 132, 9062187, 3);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n比其他人更多地进行#r普通攻击#k来摘取#b椰子#k吧YO！\r\n在限制时间内获得更多椰子点数的队伍获胜YO！\r\n没有平局YO！同分情况下，首先获得该分数的队伍胜利YO！", 132, 9062187, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n比赛结束后，将根据#b排名#k发放#b新复古能量#kYO。\r\n#b胜利的组队#k将获得特别优惠YO！可以获得#b1.5倍的新复古能量#k哦YO。\r\n不努力的勇士当然什么也得不到YO。\r\n直到最后也不要放弃，尽可能地去多多摘椰子吧YO！\r\n抛弃是什么？永不放弃YO！", 132, 9062187, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛奖励>#n#k\r\n - #r第1名#k : #b9,000#k新复古能量\r\n - #r第2 ～ 5名#k : #b7,000#k新复古能量\r\n - #r第6 ～ 10名#k : #b5,000#k新复古能量\r\n - #r第11 ～ 20名#k : #b4,000#k新复古能量\r\n - #r第21 ～ 30名#k : #b3,000#k新复古能量\r\n - #r未进入排名#k : #b1,600#k新复古能量#k", 132, 9062187, true, true, 3);
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
    cm.warp(cm.getNumberFromQuestInfo(100274, "rMap"), 0, false);
    cm.dispose();
  }
}
function action10(f, W, U) {
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
  } else if (status === V++) {
    cm.askYesNo_Bottom("\r\n#b<新复古椰子比赛>#k比赛还没有结束YO！\r\n你现在就要离开吗YO？", 36, 9062176, 3);
  } else {
    cm.dispose();
    cm.warp(993104320, 3, false);
  }
}
function action20(f, W, U) {
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
      cm.askYesNo_Bottom("\r\n新复古椰子比赛~勇士修行还不错吧YO？\r\n希望下次能有更好的成果YO。\r\n#r我送你返回原地吧YO。", 36, 9062176, 3);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(cm.getNumberFromQuestInfo(100274, "rMap"), 0, false);
    }
  }
}