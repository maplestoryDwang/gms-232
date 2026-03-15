var status = -1;
var selectionLog = [];
function start(E, r, j) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  if (E == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      cm.sendNormalTalk("#b#e#h0##n#k，你好啊？\r\n成为创作者心情如何啊？\r\n你就不想成为当红创作者吗？", 4, 9062549, false, true, 0);
    } else {
      if (status === W++) {
        cm.sendNormalTalk("普利托……！？你怎么在当节目经纪人？", 2, 0, true, true, 0);
      } else {
        if (status === W++) {
          cm.sendNormalTalk("呵呵，普利托破例当上了狩猎节目经纪人，总之你知道吗？对人气创作者来说，感谢粉丝打赏的狩猎#b#e反应#n#k是必不可少的。", 4, 9062549, true, true, 0);
        } else {
          if (status === W++) {
            cm.sendNormalTalk("\r\n#fc0xFFAAAAAA#（反应……？）#k", 2, 0, true, true, 0);
          } else {
            if (status === W++) {
              cm.sendNormalTalk("既然这么安静，应该没有#b#e反应#n#k吧。\r\n咳咳，我为还没有特别反应的#b#e#h0##n#k你专门准备了特别的#b#e嗨翻天#n#k！", 4, 9062549, true, true, 0);
            } else {
              if (status === W++) {
                cm.sendNormalTalk("#b#e嗨翻天#n#k的方法非常简单！\r\n只要在狩猎过程中看着开心地引爆#b#e#h0##n#k的节目观众打赏的#b#e冒险岛惊喜福利袋#n#k就好，\r\n这个冒险岛惊喜福利袋中可是装着满满的#r经验值#k！", 4, 9062549, true, true, 0);
              } else {
                if (status === W++) {
                  cm.askYesNo("怎么样？\r\n想不想和我一起开心地引爆#b#e冒险岛惊喜福利袋#n#k？", 4, 9062549);
                } else {
                  if (status === W++) {
                    cm.teachSkill(80003064, 0, -1);
                    cm.teachSkill(80003064, 1, 1);
                    cm.teachSkill(80003064, 1, 0);
                    cm.updateInfoQuest(100857, "feverCnt=0");
                    cm.updateInfoQuest(100857, "count=0;feverCnt=0");
                    cm.updateInfoQuest(100857, "count=0;feverCnt=0;date=22/02/02");
                    cm.updateInfoQuest(100857, "count=0;feverCnt=0;date=22/02/02;todayFirst=0");
                    cm.updateInfoQuest(501567, "fever=0");
                    cm.updateInfoQuest(100857, "count=0;feverCnt=0;date=22/02/02;todayFirst=0;pangpangJoin=0");
                    cm.forceCompleteQuest(100855);
                    cm.playerMessage(5, "从现在起可在等级范围怪物出没的地方使用<直播-嗨翻天>技能。");
                    cm.sendNormalTalk("果然，我一直就信你！\r\n那现在我就来告诉你要怎么进行#b#e嗨翻天#n#k。", 4, 9062549, false, true, 0);
                  } else {
                    if (status === W++) {
                      cm.sendNormalTalk("先狩猎#r500只#k等级范围怪物，然后观看#b#e#h0##n#k狩猎节目的观众就会打赏#b#e冒险岛惊喜福利袋#n#k！", 4, 9062549, true, true, 0);
                    } else {
                      if (status === W++) {
                        cm.sendNormalTalk("然后开心地引爆狩猎场喷涌而出的#b#e冒险岛惊喜福利袋#n#k，获得#r经验值#k就好，怎么样，很简单吧？", 4, 9062549, true, true, 0);
                      } else {
                        if (status === W++) {
                          cm.sendNormalTalk("啊，对了，#r每天最多只能进行10次#k#b#e嗨翻天#n#k，现在就用开心的#b#e嗨翻天#n#k来成为当红创作者吧！\r\n\r\n#e[活动时间]#n\r\n -截止到2022年2月8日 23点59分\r\n\r\n※嗨翻天次数会在每天零点重置。\r\n※赛场上正在进行嗨翻天时，会无法触发嗨翻天。", 4, 9062549, true, true, 0);
                        } else if (status === W++) {
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
      }
    }
  }
}
function stage0(E, r, j) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = j;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      cm.askYesNo("");
    } else if (status == W++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(E, r, j) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  if (E == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status == W++) {
      var J = cm.getQuest();
      cm.askYesNo("");
    } else if (status == W++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}