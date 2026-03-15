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
      cm.sendNormalTalk_Bottom("#face0#原来塞伦是去救那个人了。", 36, 3004436, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#是啊，那家伙还真是让人摸不着头脑，对吧？", 36, 3004431, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face0#好了，大伙儿都准备好了吗？", 36, 3004431);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#那我们也开始吧。", 36, 3004431, false, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#先分散从三个不同的方向潜入，战斗结束后，再去指定的地点会合。", 36, 3004431, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1#我们就去荡平那些家伙的部队，给那个讨厌的大叔一点颜色瞧瞧吧。", 36, 3004431, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3004435, true, true);
                } else if (status === v++) {
                  cm.forceStartQuest(39911, '');
                  cm.OnStartNavigation(410000770, 0, "east00", 39911);
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
      cm.sendNormalTalk_Bottom("#face0#这就已经足够混乱了。", 36, 3004436, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#突袭战比预想的要成功。", 36, 3004435, true, true);
      } else if (status === v++) {
        cm.forceCompleteQuest(39911);
        cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
        cm.dispose();
      }
    }
  }
}