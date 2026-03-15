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
      cm.askAcceptDecline_Bottom("#face3#墨玄大侠！哎呀，艾利涅的骚乱也许比预计的更严重，所以他们在不断向我们求助。你想听听详细的情况吗？\r\n#b(※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下与勇士等级对应的怪物和任务经验值。）", 36, 9401283, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#果然不愧是墨玄大侠！", 36, 9401283, false, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#你听说过妖精吗？在冒险岛世界生活着无数种族，妖精是对人类警戒心很强的种族之一。", 36, 9401283, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b妖精学院艾利涅#k是年轻的妖精们学习魔法的地方，位于人类无法涉足的纯粹的妖精之地。", 36, 9401283, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0##b（还是第一次听说。世界……可真大啊。）", 36, 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#但是最近随着某个人类魔法师的闯入，好像出了什么问题。\r\n根据我个人获得的情报……那个魔法师现在被关了起来！", 36, 9401283, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#要是骚乱进一步扩大，人类和妖精的关系也许就会产生无法弥合的裂痕。\r\n墨玄大侠！我想你一定有办法让这场骚乱平息下来！", 36, 9401283, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.askAcceptDecline_Bottom("#face0#大侠，你能帮忙吗？\r\n如果你打算马上出发，我立即把你送到那里去！", 36, 9401283, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#明智的选择，大侠！", 36, 9401283, false, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1##p1040002#会告诉你进入妖精之地的方法。\r\n#p1040002#就住在#b魔法密林#k左侧的#b#m101030000##k。", 36, 9401283, true, true, 1);
                      } else if (status === v++) {
                        cm.forceStartQuest(32148, '1');
                        cm.forceStartQuest(65952, '');
                        cm.dispose();
                        cm.warp(101030000, 1, false);
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
      cm.sendNormalTalk("喵~呜，你就是为了解决妖精学院艾利涅\r\n的骚乱，受邀而来的勇士吗，喵呜？", 0, 1040002, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk('是的。', 3, 1040002, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("看上去好像没那么强喵。\r\n不过既然说是有名的勇士，我就相信你一次喵。", 0, 1040002, true, true);
        } else if (status === v++) {
          cm.forceStartQuest(32147, '1');
          cm.forceCompleteQuest(65952);
          cm.dispose();
        }
      }
    }
  }
}