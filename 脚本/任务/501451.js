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
      cm.askYesNo("又可以购买小屋家具也可以领取 #e#b焕新城堡家具#n#k的机会! 怎么样, 要不要现在就参加?", 4, 9010010);
    } else {
      if (status === v++) {
        cm.forceStartQuest(501451, '');
        cm.sendNormalTalk("完成5次以上购物再来找我的话我会给你#b#e#i2633545# #t2633545# 2个#n#k!", 4, 9010010, false, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b#e每周三#n#k我会重新给你任务,在这之前为止要努力购物啊.", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("那么,这周的购物也拜托了~", 4, 9010010, true, true);
          } else if (status === v++) {
            cm.dispose();
          }
        }
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