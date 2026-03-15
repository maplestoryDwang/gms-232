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
      cm.sendNormalTalk("谢谢！但是我的铃铛不见了喵。\r\n\r\n好像是在那树上丢的…… 请按#b[Ctrl]#k键攻击那棵树，如果铃铛掉落下来，就按#b[Z]#k键拾取！", 0, 9390300, false, true);
    } else {
      if (status === v++) {
        cm.askAcceptDecline("快找一下吧喵。要没有它的话,我跟赤身裸体没什么区别喵!", 0, 9390300);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("像刚才一样,在树前用#e#b[Ctrl]#k#n键进行攻击,铃铛的话,就用#e#b[Z]#k#n键捡取是吧?", 2, 9390300, false, true);
        } else if (status === v++) {
          cm.forceStartQuest(59004, '');
          cm.dispose();
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
      cm.sendNormalTalk("铃铛在这里!没关系,喵喵啊?", 2, 9390300, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("等……稍等……喵……转过身去喵,我好害臊喵。", 0, 9390300, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk('都好了吗?', 2, 9390300, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("喵!!!失礼了喵!!!请稍等片刻喵!!!!", 0, 9390300, true, true);
          } else if (status === v++) {
            cm.gainItem(4034005, -1);
            cm.dispose();
            cm.warp(866106000, 0, true);
          }
        }
      }
    }
  }
}