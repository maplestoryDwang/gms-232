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
      cm.askMenu("你好！你有什么事情吗？\r\n\r\n#b#L0# 我想在逆转法典上注入反魔力。#l\r\n#L1# 我想把搜集的反魔力和反魔力石交换成#t4310092#或#t4310091#。#l", 0, 2230205);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestCustomData(32427);
    if (cm.hasEquipped(1162018)) {
      if (w == 0) {
        cm.sendNormalTalk("哎？你的反魔力不够哦！这样就没法升级#b#i1162018##z1162018##k了。", 0, 2230205, false, false);
        cm.dispose();
      } else {
        var N = [0, 1000, 1600, 2560, 4096, 6554, 10486, 16777, 26844, 42950, 68719, 109951, 175922];
        var u = cm.getEquipBySlot(-33);
        var Q = u.getLevel() >= N.length ? u.getLevel() * 36515 - 280279 : N[u.getLevel()];
        cm.askNumber("你要向#b#i1162018##z1162018##k注入多少反魔力呢？\r\n\r\n当前成长等级：#e#b#l" + u.getLevel() + "#n#k\r\n当前成长经验值：#b#e" + u.getSealeadExp() + " / #k" + Q, 2230205, w, 1, w);
      }
    } else {
      cm.sendNormalTalk("哎？你好像没有装备#b#i1162018##z1162018##k哦！只有装备好后才能注入反魔力，请重新确认一下是否已经装备上。", 0, 2230205, false, false);
      cm.dispose();
    }
  } else if (status === V++) {
    cm.addNumberForQuestCustomData(32427, -U);
    cm.克里蒂亚斯_升级逆转法典(U);
    cm.sendNormalTalk("注入反魔力成功了！检查一下你的#b#i1162018##z1162018##k吧。", 0, 2230205, false, false);
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestCustomData(32427);
    if (w < 700) {
      cm.sendNormalTalk("你好像没有可以用来交换的反魔力或反魔力石……#b想交换#b#i4310091##t4310091##k的话，#r每个需要反魔力 700#k。#b交换#b#i4310092##t4310092##k的话，#r每个需要反魔力石1个和反魔力 1200#k。你能确认一下吗？", 0, 2230205, false, false);
      cm.dispose();
    } else {
      var N = "#b想交换#b#i4310091##t4310091##k的话，#r每个需要反魔力 700#k。#b交换#b#i4310092##t4310092##k的话，#r每个需要反魔力石1个和反魔力 1200#k。要交换哪一个呢？\r\n";
      if (w >= 700) {
        N += "\r\n#L1##b交换#b#i4310091##t4310091##k#l";
      }
      if (w >= 1200 && cm.haveItem(4009005)) {
        N += "\r\n#L2##b交换#b#i4310092##t4310092##k#l";
      }
      cm.askMenu(N);
    }
  } else {
    if (status === V++) {
      var w = cm.getNumberFromQuestCustomData(32427);
      if (U == 1) {
        cm.setNumberForQuestCustomData(32427, w - 700);
        cm.gainItem(4310091, 1);
        cm.sendOk("这是#b#i4310091##t4310091##k，请收好！");
        cm.playerMessage(5, "当前保存的反魔力为" + (w - 700) + '。');
      } else if (U == 1) {
        cm.setNumberForQuestCustomData(32427, w - 1200);
        cm.gainItem(4310091, 1);
        cm.gainItem(4009005, -1);
        cm.sendOk("这是#b#i4310092##t4310092##k，请收好！");
        cm.playerMessage(5, "当前保存的反魔力为" + (w - 1200) + '。');
      }
      cm.dispose();
    }
  }
}