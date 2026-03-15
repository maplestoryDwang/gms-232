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
      cm.sendNormalTalk_Bottom("#face1#哎哟，刚刚好像有人搭话来着……", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#小鬼们，不是你们吧？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#哦，我说怎么有股陌生的气息，原来是来自不同次元的冒险家啊。", 36, 1032001, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#见到你很高兴，我是汉斯，是负责教导冒险岛世界冒险家的转职教官。", 36, 1032001, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#你手上的这个铃铛……不知为何能让人感受到一股神奇的气息。", 36, 1032001, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#搞不好和多年来研究的那股力量有关……", 36, 1032001, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#那能给我看一看吗？", 36, 1032001, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.askAcceptDecline_Bottom("#face1#怎么办呢？", 36, 3005100, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#搞不好这是个能搞清楚铃铛来历的机会，去见见吧！", 36, 3005100, false, true, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(36244, '');
                      cm.dispose();
                      cm.warp(101000003, 0, false);
                    }
                  }
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
      cm.sendNormalTalk_Bottom("#face0#你来啦，请稍等，我还在理头绪……", 36, 1032001, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(36244);
      cm.dispose();
    }
  }
}