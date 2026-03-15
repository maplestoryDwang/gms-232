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
      cm.sendNormalTalk("哼,唤醒居然整整消耗了3天。", 4, 9390303, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("伊卡不坦诚喵。\r\n#b#h0##k倒下去的时候,最着急的可是伊卡喵。", 4, 9390300, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("烦,好烦!!!", 4, 9390303, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("但是我又要和伊卡道别了喵。\r\n#b#h0##k，你的魔力好像还不足以使用我们的力量喵。", 4, 9390300, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("我们已经和#b#h0##k签订了守护契约，所以都将变成精灵状态喵。", 4, 9390300, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b#h0##k必须要借助魔力，才能让我们像这样现身，或者使用我们的力量喵。\r\n上次#b#h0##k晕倒也是因为过度使用我们的力量而耗尽了自己的魔力喵。", 4, 9390300, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("拉伊和波波平时也要进入精灵状态喵。如果持续现身的话，#b#h0##k的魔力会逐渐耗尽的喵。", 4, 9390300, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("不过没关系,老大!", 4, 9390302, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("我平时待在精灵界,不过只出来一会儿的话,就不需要太多的魔力,所以可随时叫我出来哦。", 4, 9390302, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("只要发动从我们这里学到的动物守护模式即可,老大!", 4, 9390302, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("波波应该也和我的心情一样~", 4, 9390301, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("但是,最好不要使用我或者伊卡的力量喵。", 4, 9390300, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("想要借助我们的力量的话,得需要很多魔力,所以可别像上次一样再混下去喵。\r\n不断的练级并积攒力量的话,总有一天能够成功召唤我们的喵。", 4, 9390300, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("那暂时就无法见面了吗?", 2, 9390300, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("稍微出来说说话还是可以的喵。 \r\n不要担心喵。还有，我们马上就要消失了。但我们一直存在于你的力量中，你的心里的喵。向林之灵之路出发吧喵！", 4, 9390300, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("那就再见喵", 5, 9390300, true, true);
                                    cm.gainItem(1142673, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("来,老大!以后你会经常见到我的!", 5, 9390302, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("可爱的波波也一样。", 5, 9390301, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("哼。小家伙们……到时候再叫我吧。我先走了。", 5, 9390303, true, true);
                                        } else if (status === v++) {
                                          cm.updateInfoQuest(39391, "level=1");
                                          cm.gainExp(1194);
                                          cm.updateInfoQuest(59021, "fly=2;tuto=1");
                                          cm.teachSkill(110001506, 1, 1);
                                          cm.forceCompleteQuest(59018);
                                          cm.dispose();
                                          cm.warp(866191000, 0, false);
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