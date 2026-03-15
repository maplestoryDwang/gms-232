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
      cm.sendNormalTalk("嗯……哦？！这样啊……嗯？！啊……", 0, 3001002, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk('干什么呢？！', 2, 3001002, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("是#h0#吗。", 0, 3001002, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("？！什，什么话。我是爆莉萌天使。", 2, 3001002, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("爆莉萌天使不哭的。即使戴着爆莉萌天使假面，那#b从小就刻下的眼泪痕迹#k就证明你是#h0#。也许你能骗得了别人，但绝不可能逃过我#r诺巴的大贤者尤兰斯#k的火眼金睛。", 0, 3001002, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("？！眼泪痕迹？啊，是没画好妆啊……", 2, 3001002, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("…是个玩笑。谁能一辈子不洗脸啊。怎么可能凭眼泪痕迹辨认一个人呢。虽然我老了，身体也不好，但我可是大贤者。 #b看透事物本质的能力就是成为大贤者后获得的特殊能力#k。", 0, 3001002, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("就为了那个能力才当大贤者的吗，幼稚。", 4, 3000132, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("爱丝卡达，不准说出去！！", 2, 3001002, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("不对啊。如果真的是大贤者的话，没道理不认识我啊。", 4, 3000132, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("你是……谁啊？我不认识。", 0, 3001002, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk('?!', 4, 3000132, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("完全。没有意识到嘛。", 0, 3001002, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("嗯。咳。嗯哼。怎么这样。比起我那个时代，大贤者的水准可是下滑了不少啊。总之很高兴见到你。大贤者。", 4, 3000132, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("现在只是个隐居草野的老人罢了。不过真的不认识吗？", 0, 3001002, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("#b(讲述打破圣物，和爱丝卡达相遇，以及爱丝卡达详细的自我介绍。虽然真的很好奇，但爱丝卡达只说相信和自己拥有同样气息的家伙。但是，到底是什么气息？)#k", 2, 3001002, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("这样啊，爱丝卡达。我要正式做个介绍。我是转职大贤者，不过现在只是隐居草野的#b平凡老人尤兰斯#k。话说回来……你的品位还真是……(再次上下打量爆莉萌天使。) 不错。", 0, 3001002, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("是吧？不愧是诺巴的大贤者啊。", 4, 3000132, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("... (不知道该说什么了！)\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 59,432", 2, 3001002, true, true);
                                        } else if (status === v++) {
                                          cm.forceCompleteQuest(31625);
                                          cm.gainExp(59432);
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