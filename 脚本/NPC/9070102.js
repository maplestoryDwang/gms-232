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
      cm.askMenu("我查瓦德，在帮助马修勒的工作。\r\n#b你有什么想要的物品吗？#k\r\n#L0#我想要获得称号。#l\r\n#L1#我想要获得勋章。#l", 0, 9070102);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    if (cm.haveItem(3700334)) {
      cm.sendNormalTalk("你已经获得了#i3700334:# #t3700334#了吗？真是太厉害了！", 4, 9070102, false, true);
    } else {
      cm.sendNormalTalk("你想要#i3700334:# #t3700334#吗？嗯……", 4, 9070102, false, true);
    }
  } else {
    if (status === V++) {
      if (cm.haveItem(3700334)) {
        cm.sendNormalTalk("称号获取条件如下，\r\n\r\n#b     -仅限于18人挑战的情况\r\n     - 获得A级以上时\r\n     - 只限于第一名的一个玩家#k", 4, 9070102, true, false);
      } else {
        cm.sendNormalTalk("称号获取条件如下，\r\n\r\n#b     -仅限于18人挑战的情况\r\n     - 获得A级以上时\r\n     - 只限于第一名的一个玩家#k\r\n\r\n加油吧，继续努力总有一天你能够得到的。", 4, 9070102, true, false);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(18683, 'kill');
    var N = cm.getNumberFromQuestInfo(18683, 'join');
    var u = cm.getNumberFromQuestInfo(18683, "sss");
    var Q = cm.getNumberFromQuestInfo(18683, "assist");
    var m = "#b这些是我能给的勋章. \r\n#k";
    if (w >= 1 && !cm.haveItem(1142878)) {
      m += "\r\n#L1##i1142878:# #t1142878# - 完成1次通关#b(" + w + "/1)#k#l";
    } else {
      m += "\r\n#i1142878:# #t1142878# - 完成1次通关#b(" + w + "/1)#k" + (cm.haveItem(1142878) ? "#r(已领取)#k" : '');
    }
    if (w >= 5 && !cm.haveItem(1142879)) {
      m += "\r\n#L2##i1142879:# #t1142879# - 完成5次通关#b(" + w + "/5)#k#l";
    } else {
      m += "\r\n#i1142879:# #t1142879# - 完成5次通关#b(" + w + "/5)#k" + (cm.haveItem(1142879) ? "#r(已领取)#k" : '');
    }
    if (w >= 100 && !cm.haveItem(1142881)) {
      m += "\r\n#L4##i1142881:# #t1142881# - 完成挑战100次#b(" + N + '/100)#k#l';
    } else {
      m += "\r\n#i1142881:# #t1142881# - 完成挑战100次#b(" + N + "/100)#k" + (cm.haveItem(1142881) ? "#r(已领取)#k" : '');
    }
    if (u >= 1 && !cm.haveItem(1142882)) {
      m += "\r\n#L5##i1142882:# #t1142882# - 完成1次SSS#b(" + u + "/1)#k#l";
    } else {
      m += "\r\n#i1142882:# #t1142882# - 完成1次SSS#b(" + u + '/1)#k' + (cm.haveItem(1142882) ? '#r(已领取)#k' : '');
    }
    if (u >= 5 && !cm.haveItem(1142883)) {
      m += "\r\n#L6##i1142883:# #t1142883# - 完成5次SSS#b(" + u + '/5)#k#l';
    } else {
      m += "\r\n#i1142883:# #t1142883# - 完成5次SSS#b(" + u + "/5)#k" + (cm.haveItem(1142883) ? "#r(已领取)#k" : '');
    }
    if (u >= 30 && !cm.haveItem(1142884)) {
      m += "\r\n#L7##i1142884:# #t1142884# - 完成30次SSS#b(" + u + "/30)#k#l";
    } else {
      m += "\r\n#i1142884:# #t1142884# - 完成30次SSS#b(" + u + "/30)#k" + (cm.haveItem(1142884) ? '#r(已领取)#k' : '');
    }
    m += "\r\n#i1142885:# #t1142885# - 被吃次数达到100次#b(0/100)#k";
    m += "\r\n#i1142886:# #t1142886# - 被抓次数达到100次#b(0/100)#k";
    if (Q >= 999 && !cm.haveItem(1142887)) {
      m += "\r\n#L10##i1142887:# #t1142887# - 助攻完成999次#b(" + Q + "/999)#k#l";
    } else {
      m += "\r\n#i1142887:# #t1142887# - 助攻完成999次#b(" + Q + "/999)#k" + (cm.haveItem(1142887) ? "#r(已领取)#k" : '');
    }
    cm.askMenu(m, 9070102);
  } else {
    if (status === V++) {
      cm.dispose();
      if (U > 0) {
        var c = 1142877 + U;
        cm.sendOk("恭喜你！这是给与你的奖励：#b#i" + c + ":# #t" + c + '#');
        cm.gainItem(c, 1);
      }
    }
  }
}