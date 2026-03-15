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
      cm.sendNormalTalk("白雪人好帅！\r\n#fs15#白雪人超帅！\r\n#fs18#白雪人世界第一帅！#n", 4, 9062447, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("不知道白雪人有多帅气的人！\r\n#fs15#是可怜的人！\r\n#fs18##r发挥你的力量！让白雪人出名吧！#k#n", 4, 9062447, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("什么？你冷静点，慢慢说。", 2, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("白雪人再次说明。", 4, 9062445, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("哇！不要突然冷静下来啊！\r\n\r\n……算了，没什么。\r\n有什么事吗？", 2, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("拍摄了白雪人的帅气样子。\r\n制作了精美的电视机。\r\n可惜观众不多。", 4, 9062445, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("白雪人笨笨。\r\n但你聪明，你有很多好主意。\r\n白雪人想要让许多人看到。", 4, 9062445, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("……就是说，你希望让更多人看到你制作的电视机，对吗？", 2, 0, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("没错就是这样！\r\n你果然聪明。\r\n这个要#b#e对企鹅保密#n#k哦。\r\n不然它会抢走我的人气的。", 4, 9062445, true, true);
                    } else {
                      if (status === v++) {
                        cm.askYesNo("\r\n白雪人拜托你帮忙。\r\n#r(注意! 该活动每个账号只能参加1次.)", 4, 9062445);
                      } else {
                        if (status === v++) {
                          cm.updateInfoQuest(100698, 'total=0');
                          cm.updateInfoQuest(100698, "today=0;total=0");
                          cm.updateInfoQuest(100698, "date=0;today=0;total=0");
                          cm.updateInfoQuest(100700, "lv=0");
                          cm.updateInfoQuest(100700, "lv=0;date=0");
                          cm.updateInfoQuest(100700, "lv=0;date=0;part0=0");
                          cm.updateInfoQuest(100700, "lv=0;date=0;part0=0;part1=0");
                          cm.updateInfoQuest(100700, "lv=0;date=0;part0=0;part1=0;part2=0");
                          cm.updateInfoQuest(100700, "lv=0;date=0;part0=0;part1=0;part2=0;part3=0");
                          cm.updateInfoQuest(100700, "part4=0;lv=0;date=0;part0=0;part1=0;part2=0;part3=0");
                          cm.forceStartQuest(100699, '');
                          cm.forceCompleteQuest(100696);
                          cm.updateInfoQuest(501856, "count=1");
                          cm.updateInfoQuest(501856, "count=1;lastDay=21/12/15");
                          cm.sendNormalTalk("唔……\r\n虽然答应了要帮忙，但是该做些什么呢？", 2, 0, false, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("哎呦，等我一下啊，#b#h0##k。", 4, 9062450, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("企鹅？", 2, 0, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("白雪人那家伙光顾着兴奋，\r\n最重要的说明还没讲呢就跑了。哈哈。\r\n我来简单讲讲有关白雪人制作的电视机的几件重要事项吧。", 4, 9062446, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("必须通过白雪人想出名的心，也就是#i2632706:# #b#e#t2632706:##n#k来升级白雪人的电视机。", 4, 9062446, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("#i2632706:#狩猎#r#e等级范围怪物#k#n，可以获得#b#e#t2632706:##n#k。\r\n\r\n#r※ 等级范围怪物指的是以角色等级为准，#e-20级到+20级范围#n内的怪物。#k", 4, 9062446, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("#i2632706:#每天最多只能获得#b#e1000个#n#k#b#e#t2632706:##n#k。\r\n#i2632706:#由于必须使用#b#e#t2632706:##n#k来提高等级、更换零件，\r\n所以这个数量说少不少，说多也不多。\r\n换个角度来看，也可以说是刚刚好，嗯。", 4, 9062446, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("升级需要消耗b#e200个#n#k#i2632706:# #b#e#t2632706:##n#k #。\r\n注意，#b一天仅限升级一次！#k\r\n过量对身体不好。", 4, 9062446, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("电视机升至一定等级后，\r\n你就可以#b#e更换#n#k电视机的屏幕或装饰等部件了。\r\n此外，时不时也会发放#b#e礼物#n#k。\r\n当然，礼物由白雪人赞助。", 4, 9062446, true, true);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk("更换电视机零件时，也需要#i2632706:# #b#e#t2632706:##n#k。\r\n#i2632706:#给我#b#e100个#n#k#b#e#t2632706:##n#k，我就帮你更换除已组装的零件以外的其他零件。\r\n啊，零件由白雪人赞助。", 4, 9062446, true, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk("还有什么想知道的，欢迎随时来问我。\r\n我会亲切！迅速！准确！地为你解惑。", 4, 9062446, true, true);
                                            } else if (status === v++) {
                                              cm.sendNormalTalk(" 你是不是想问我，为什么对白雪人的事情这么全力以赴？\r\n当然是因为如果白雪人出名了，我们侦探事务所也会跟着扬名嘛，嘿嘿。\r\n啊，这话要#b#e对白雪人保密#n#k哦。\r\n那就拜托你了。", 4, 9062449, true, false);
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