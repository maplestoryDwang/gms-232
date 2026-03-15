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
      cm.sendNormalTalk_Bottom("#face0#终究还是没能将玩具送到。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#别再多想了啊，你已经做得足够多了。", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#话说那个奶奶都精神恍惚了，到底是怎么记得\r\n很久之前弄丢的玩具的啊？", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#有些记忆不是靠头脑记住的，而是会用心记住。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我也曾有过这样的日子，\r\n那时候奶奶给我讲有趣的故事，我和朋友们一起赛跑，还有……", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#好，知道了，知道了。", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face6#还有刚刚也是！\r\n你能重新回来我很开心！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#……我看你总会若无其事地说出一些莫名其妙的话来。", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#格里，你瞧！这飞扬的肥皂泡是不是很美啊？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（等铃铛修好了……就要尽快抢走，离开这里。）", 36, 3005102, true, true, 1);
                      } else if (status === v++) {
                        cm.dispose();
                        cm.warp(993165510, 0, true);
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