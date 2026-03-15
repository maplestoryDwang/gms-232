var status = -1;
var selectionLog = [];
4;
2631803;
3;
2631804;
3;
2631805;
2;
2631806;
2;
2633058;
2;
2439869;
2;
2433808;
1;
2450167;
1;
2630512;
var items = [[4, 2631802, 1][1][1][1][1][1][3][1][4][4]];
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
  var e = cm.getNumberFromQuestInfo(501033, "count");
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askMenu("请挑选想要的道具……\r\n#b#h0##k，现在你拥有的花笺数量是#b#e" + e + "个#n#k……\r\n\r\n#r※ <花笺商店>的道具\r\n有效时间全部为7天。#k\r\n\r\n#e<花笺4个>#n\r\n#L1#  #i2631802:# #b#t2631802:# 1个#k#l\r\n#L2#  #i2631803:# #b#t2631803:# 1个#k#l\r\n\r\n#e<花笺3个>#n\r\n#L3#  #i2631804:# #b#t2631804:# 1个#k#l\r\n#L4#  #i2631805:# #b#t2631805:# 1个#k#l\r\n\r\n#e<花笺2个>#n\r\n#L5#  #i2631806:# #b#t2631806:# 1个#k#l\r\n#L6#  #i2633058:# #b#t2633058:# 1个#k#l\r\n#L7#  #i2439869:# #b#t2439869:# 3个#k#l\r\n#L8#  #i2433808:# #b#t2433808:# 1个#k#l\r\n\r\n#e<花笺1个>#n\r\n#L9#  #i2450167:# #b#t2450167:# 4个#k#l\r\n#L10#  #i2630512:# #b#t2630512:# 4个#k#l\r\n#L11# 再考虑一下。#l", 4, 1012108);
    } else {
      if (status == v++) {
        if (a > 0 && a < 11) {
          if (e >= items[a - 1][0]) {
            cm.addNumberForQuestInfo(501033, "count", -items[a - 1][0]);
            var H = items[a - 1][1];
            cm.gainItem(H, items[a - 1][2]);
            cm.sendOk('这是你的#i' + H + ":# #b#t" + H + ":#，请收好了……");
          } else {
            cm.sendOk("花笺还不够哦……目前你拥有的花笺数量是#b#e" + e + "个#n#k。");
          }
        } else {}
        cm.dispose();
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}