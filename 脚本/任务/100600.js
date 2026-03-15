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
      cm.askMenu("欢迎来到#b#e<冒险岛无边游泳池>#k#n！\r\n\r\n#L0# 聆听#e#b<冒险岛无边游泳池>#k的说明。#n#l\r\n#L1# 查看#e#b<冒险岛无边游泳池>#k的升级概率。#n#l\r\n使用#L2# #b#e<冒险岛无边游泳池>#k。#n#l", 0, 9062308);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("\r\n#e<冒险岛无边游泳池>#n由1~3号共3个通道构成。", 0, 9062308, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("\r\n各个通道中随机配置了可爱的#b#e鸭蹼道具#k#n，能够帮助你游得更远。", 0, 9062308, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n选择通道入场后获得鸭蹼道具，每前进一格即可体验#e#b升级#k#n的快感。", 0, 9062308, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n另外，冒险岛无边游泳池的#e使用费#n统一为#e#b100个#i4310291:# #t4310291:# #n#k，但#e可使用次数#n会根据#e#b<贵宾会员>#n#k等级有所不同。", 0, 9062308, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n#e<各等级可使用次数>\r\n\r\n#b贵宾CLASSIC#k：#r无法#k使用\r\n#b贵宾ELITE#k：每个世界每天#r1次#k\r\n#b贵宾PREMIUM#k：每个世界每天#r2次#k\r\n#b贵宾PRESTIGE#k：每个世界每天#r3次#k", 0, 9062308, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n最后请您记住，#e<冒险岛无边游泳池>#n仅供#b141级~199级的角色入场#k。", 0, 9062308, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("\r\n好了。马上来#e<冒险岛无边游泳池>#n享受顶级的升级服务吧！", 0, 9062308, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("\r\n#e※活动时间\r\n - 2021年08月03日23点59分截止#n", 0, 9062308, true, false);
                } else if (status === v++) {
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.askNumber("你想知道在哪一个等级使用时的概率呢？\r\n#r(141级~199级)#k", 9062308, 141, 141, 199, 0);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#e<#b141级#k使用冒险岛无边游泳池>\r\n\r\n- 提升1级：5%\r\n- 提升2级：5%\r\n- 提升3级：5%\r\n- 提升4级：5%\r\n- 提升5级：5%\r\n- 提升6级：5%\r\n- 提升7级：10%\r\n- 提升8级：20%\r\n- 提升9级：20%\r\n- 提升10级：20%", 0, 9062308, false, true);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("\r\n#e#b贵宾ELITE#k#n等级以上可以使用#e<冒险岛无边游泳池>#n。", 0, 9062308, false, false);
  } else if (status === v++) {
    cm.dispose();
  }
}