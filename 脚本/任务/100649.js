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
      cm.sendNormalTalk("嗨！#b#h0##k!\r\n#b#e<精灵兄弟的黄金马车>#k#n来啦！", 0, 9000029, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n#b精灵兄弟的黄金马车#k是每天哐哐！盖上签到图章，即可获得大量礼物的愉快任务！", 4, 9000029, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n活动时间内登录游戏后，点击活动通知按钮即可打开#b#e<精灵兄弟的黄金马车>#k#n 签到表！", 4, 9000029, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n活动时间内每天自动累积登录时间，积满#b60分钟#后就可以“哐！”地盖上签到图章！", 4, 9000029, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n另外，#b周末一次可获得2个#k签到图章，千万不要错过哦！", 4, 9000029, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n不同签到天数的礼物如下！", 4, 9000029, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("#e<完成9次签到>\r\n#b#i2614061:# #t2614061:##k#n\r\n\r\n\r\n#e<完成18次签到>\r\n#b#i2632297:# #t2632297:##k#n\r\n\r\n\r\n#e<完成27次签到>\r\n#b#i2631709:# #t2631709:##k#n\r\n\r\n\r\n#e<完成36次签到>\r\n#b#i2632280:# #t2632280:##k#n\r\n\r\n\r\n#e<完成45次签到>\r\n#b#i2048745:# #t2048745:##k#n\r\n\r\n\r\n#e<完成54次签到>\r\n#b#i2632284:# #t2632284:##k#n\r\n\r\n\r\n#e<完成63次签到>\r\n#b#i2633017:# #t2633017:##k#n\r\n\r\n\r\n#e<完成72次签到>\r\n#b#i2633018:# #t2633018:##k#n\r\n\r\n\r\n#e<完成81次签到>\r\n#b#i2633019:# #t2633019:##k#n\r\n\r\n\r\n#e<完成90次签到>\r\n#b#i2633020:# #t2633020:##k#n\r\n\r\n\r\n#e<完成99次签到>\r\n#b#i2439666:# #t2439666:##k#n", 4, 9000029, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n为了防止你忘记时间而错过签到，我准备了特别机会！\r\n让我来告诉你什么是#b#e<黄金图章>#k#n吧！", 4, 9000029, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n使用签到板的#b#e<黄金图章>#k#n后，消耗#b1800抵用券#k可以获得一次#b来不及完成的签到#k图章。", 4, 9000029, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n不过，黄金图章的#b可使用数量#k被限定为#r以一天前的日期为基准，未能完成的天数#k，请知悉！", 4, 9000029, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n黄金图章无论是在#r哪一天使用，都只能敲下一个图章#k ，可别忘了这一点！", 4, 9000029, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n对啦！#e累计登录时间#n与#e奖励获取记录#n以#r冒险岛ID为单位#k进行，只有#r101级以上的角色#k可以累积登录时间，要注意这一点哦！", 4, 9000029, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n还有，日期变更时，若正在执行其他委托，则上线时间可能无法正常累积，#e所以在日期变更后，要打开签到板，确认一下上线时间是否正常累积#n !", 4, 9000029, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n更加详细内容去冒险岛官网了解吧！", 4, 9000029, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("#e#b<精灵兄弟的黄金马车>#k#n\r\n\r\n\r\n#e※ 活动期限#n\r\n  - 至2021年#r06月22日下午11点59分#k为止#k", 4, 9000029, true, true);
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