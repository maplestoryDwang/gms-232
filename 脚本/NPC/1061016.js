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
      cm.askMenu("你又来了？我们经常见面啊？你很闲吗？你要拜托我什么事吗？你找到蝙蝠怪的皮了吗？#b\r\n\r\n#L0#请你用蝙蝠怪的皮碎片制作卷轴吧。#l\r\n#L4#请你用20个蝙蝠怪的皮碎片做一双皮鞋吧。#l#k", 0, 1061016);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
var req = [5, 5, 5, 10, 10, 10, 10, 10, 10, 10];
var item = [2040734, 2040735, 2040738, 2040728, 2040729, 2040730, 2040731, 2040732, 2040733, 2040739];
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("你要制作什么样的卷轴呢？卷轴种类不同，需要的皮毛数量也不同。#b\r\n\r\n#L12#等一下，下次再制作吧。#l\r\n#L0#5个蝙蝠怪的皮碎片 -  #i2040734:# #t2040734##l\r\n#L1#5个蝙蝠怪的皮碎片 -  #i2040735:# #t2040735##l\r\n#L4#5个蝙蝠怪的皮碎片 - #i2040738:# #t2040738##l\r\n#L5#10个蝙蝠怪的皮碎片 - #i2040728:# #t2040728##l\r\n#L6#10个蝙蝠怪的皮碎片 - #i2040729:# #t2040729##l\r\n#L7#10个蝙蝠怪的皮碎片 - #i2040730:# #t2040730##l\r\n#L8#10个蝙蝠怪的皮碎片 - #i2040731:# #t2040731##l\r\n#L9#10个蝙蝠怪的皮碎片 - #i2040732:# #t2040732##l\r\n#L10#10个蝙蝠怪的皮碎片 - #i2040733:# #t2040733##l\r\n#L11#10个蝙蝠怪的皮碎片 - #i2040739:# #t2040739##l", 0, 1061016);
  } else {
    if (status === V++) {
      if (U == 12) {
        cm.sendNormalTalk("犹犹豫豫的……好吧，需要的话，可以再来找我。", 0, 1061016, false, false);
      } else if (cm.haveItem(4001261, req[U])) {
        cm.sendNormalTalk("嗯，皮毛的成色刚刚好。喏，这是你要的卷轴，拿好了。\r\n\r\n#b#i" + item[U] + ":# #t" + item[U] + '#', 0, 1061016, false, false);
        cm.gainItem(4001261, -req[U]);
        cm.gainItem(item[U], 1);
      } else {
        cm.sendNormalTalk("不过你好像没有足够的蝙蝠怪皮毛啊……材料不够。这样怎么能制作卷轴呢？", 0, 1061016, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    if (cm.haveItem(4001261, 20)) {
      cm.sendNormalTalk("嗯，皮毛的成色刚刚好。喏，这是你要的皮鞋，拿好了。\r\n\r\n#b#i" + item[U] + ":# #t" + item[U] + '#', 0, 1061016, false, false);
      cm.gainItem(4001261, -20);
      cm.gainItem(1072375, 1);
    } else {
      cm.sendNormalTalk("不过你好像没有足够的蝙蝠怪皮毛啊……材料不够。这样怎么能制作鞋子呢？", 0, 1061016, false, true);
    }
  } else if (status === V++) {
    cm.dispose();
  }
}