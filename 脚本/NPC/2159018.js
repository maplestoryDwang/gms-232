var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      cm.askMenu("#e<组队任务：冰骑士的诅咒>#n\r\n等等，嘘……！安静！小心被冰骑士发现。要是受到他的诅咒，就会跟旁边我的朋友变成一样……我就单刀直入了。请把我的朋友从冰骑士的诅咒中介救出来！！！\r\n#b#L0# 我可以帮助你的朋友。#l\r\n#L1# 我想知道到底发生了什么事。#l\r\n#L2# 我想拥有冰骑士的特殊道具。#l", 0, 2159018);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我一直以为我是大人，其他的孩子都很幼稚。阿俊总是跟着我，他是个听话的孩子。我们和往常一样玩捉迷藏，阿俊在抓我的时候，被我吓了一下。我觉得他很搞笑，就逗了他一下，但是……", 0, 2159018, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("阿俊说想变得勇敢，想成为所有人认可的勇敢的人。但是他却被冰骑士骗了，变成了那副模样。请帮帮我的朋友阿俊！要是不快点把诅咒解开的话，阿俊可能会和冰骑士一样，失去人类的心。", 0, 2159018, true, true);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("消灭#b冰骑士#k即可获得 #b#t4001529##k。据说用它可以制作特殊道具。如果你能消灭冰骑士，解开诅咒，并把#t4001529#交给我，我就会送你特殊道具。\r\n#L0##i1152127:# #t1152127# - 20个#t4001529##l\r\n#L1##i1072819:# #t1072819# - 10个#t4001529##l\r\n#L2##i2041513:# #t2041513# - 10个#t4001529##l\r\n#L3##i2041514:# #t2041514# - 10个#t4001529##l", 0, 2159018);
  } else {
    if (status === V++) {
      var w = [1152127, 1072819, 2041513, 2041514];
      var N = [20, 10, 10, 10];
      if (cm.getItemQuantity(4001529) >= N[U]) {
        cm.gainItem(N[U], N[U]);
        cm.gainItem(w[U], 1);
        cm.sendNormalTalk("这是给你的#b#i" + w[U] + ":##t" + w[U] + "##k，拿好了！", 0, 2159018, false, false);
      } else {
        cm.sendNormalTalk("你确定你拥有足够多的#b#t4001529##k了吗？可别想瞒着我哟。", 0, 2159018, false, false);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}