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
      cm.sendNormalTalk('喂~', 0, 3001006, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("你好，#p3001006#。现在到了提高#p3001005#业绩的时候了。对吧？我总担心上次的事情将他的业绩降低了。", 2, 3001006, true, true);
      } else {
        if (status === v++) {
          cm.askAcceptDecline("啊，嗯~是的~这次的事情对大家都好，你放心好了~我听说#p3001005#最近好像在囤积居奇~我会给你#t4033367#，你用这个将#p3001005#的囤货全部吃进吧？", 0, 3001006);
        } else {
          if (status === v++) {
            cm.forceStartQuest(31636, '');
            cm.sendNormalTalk("有#r#t2430942#在，就不用亲自跑去，直接用通信器就好了，明白吧？#k啊，购买囤货所需的金币已经给你了。拜托了~", 0, 3001006, false, true);
          } else if (status === v++) {
            cm.gainItem(4033390, 1);
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