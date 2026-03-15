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
      cm.sendNormalTalk("#e#b#h0##k#n,\r\n\r\n#fs16##r#e2021年！春节到啦！", 4, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("所以我准备了！\r\n\r\n让#r#e2021新年#n#k更加特别的#b#e<冒险岛二十问>#n#k！", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#fs16##r#e2021!#n#k#fs13#\r\n\r\n看见那个数字！我就想到了一个点子！", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("正是\r\n\r\n#fs16##r#e冒险岛二十问！", 4, 9010010, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("我准备了#b#e3个#n#k的二十问问题，以及提示各#b#e20个#n#k！", 4, 9010010, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("通关任务，获得#b#e随机1个提示#n#k，那二十问问题也就迎刃而解了！", 4, 9010010, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("你说二十问难道不是会给20个提示吗？", 4, 9010010, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("呼呼呼，那样就没意思了！", 4, 9010010, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("我只能告诉你20个的提示中的#r#e1个#n#k，和其它朋友商量好再告诉我正确答案吧！", 4, 9010010, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("答对二十问问题后，我会送给你我准备的特殊礼物！", 4, 9010010, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("#e#r<第一个二十问>#n#k\r\n\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#i2632765:# #t2632765:#\r\n#b#i2048731:# #t2048731:#", 4, 9010010, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("#e#r<第二个二十问>#n#k\r\n\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#i2632766:# #t2632766:#\r\n#b#i2614058:# #t2614058:#", 4, 9010010, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("#e#r<第三个二十问>#n#k\r\n\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#i2632763:# #t2632763:#", 4, 9010010, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("对了！只有集齐今天可收集的#b觉醒铸币#k后，勇士才能#r#e每天挑战1次#n#k二十问问答！", 4, 9010010, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("各位勇士只有集齐今天可收集的#b觉醒铸币#k，才能参与春节活动！", 4, 9010010, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("你还没有集齐#b觉醒铸币#k呢。\r\n请你集齐今天可收集的#b觉醒铸币#k后，再来找我吧！", 4, 9010010, true, false);
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