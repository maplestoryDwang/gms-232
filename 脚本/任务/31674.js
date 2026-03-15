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
      cm.sendNormalTalk("啊！爆莉萌天使！嘿嘿嘿。幸好有你上次给我准备的滋补品，我现在强大了很多！", 0, 3001107, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("还不就是侦查兵嘛！", 2, 3001107, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("哼……太过分了。", 0, 3001107, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("嘿嘿嘿。开玩笑呢。侦查可是战场上最重要的事情！我可是继#p3001100#之后的战略家，我说的话不会错的！只有顺利进行了侦查，才能大大提高战场上获胜的可能性！", 2, 3001107, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("嘿嘿，是吧？决定战争的开启和结束！这就是我，侦察兵#p3001107#的作用！", 0, 3001107, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("那么，幽灵军团最近动向如何啊？", 2, 3001107, true, true);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline("啊，这个啊。最近幽灵军团好像在用书信传递情报。每天都有大量的书信传送。爆莉萌天使要从那些家伙手里收集书信吗？", 0, 3001107);
                } else if (status === v++) {
                  cm.updateInfoQuest(31675, '');
                  cm.forceStartQuest(31674, '');
                  cm.forceStartQuest(31676, '0');
                  cm.sendNormalTalk("书信长得像#i2430944#这样。如果你发现的话，请#b打开信封，查看情报#k。根据我侦查的结果，敌人的书信又叫做#r暗号化的10句话#k。", 0, 3001107, false, false);
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