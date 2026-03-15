var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var w = cm.getNumberFromQuestInfo(63109, "key");
      if (w == 0) {
        cm.updateInfoQuest(63109, "key=1");
        cm.sendNormalTalk("…………", 5, 9400310, false, true);
        cm.dispose();
      } else {
        if (w == 1) {
          cm.updateInfoQuest(63109, "key=2");
          cm.sendNormalTalk("…………………………………………", 5, 9400310, false, true);
          cm.dispose();
        } else {
          if (w == 2) {
            cm.updateInfoQuest(63109, 'key=3');
            cm.sendNormalTalk("……………………………………………………………………………………", 5, 9400310, false, true);
            cm.dispose();
          } else {
            if (w == 3) {
              cm.updateInfoQuest(63109, "key=4");
              cm.sendNormalTalk("………………………………………………………………………………………………………………………………", 5, 9400310, false, true);
              cm.dispose();
            } else {
              if (w == 4) {
                cm.updateInfoQuest(63109, 'key=5');
                cm.sendNormalTalk("…………………………………………………………………………………………………………………………………………………………………………", 5, 9400310, false, true);
                cm.dispose();
              } else if (w == 5) {
                cm.sendNormalTalk("#b你为什么不说话。有什么烦恼吗？", 3, 0, false, true);
              } else {
                cm.sendNormalTalk("你一定要遵守约定哦。我什么话也没说。好了，你快走吧。要是被人看到就不好了。", 5, 9400310, false, false);
                cm.dispose();
              }
            }
          }
        }
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("嗯…………。", 5, 9400310, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b唔嗯…………………………。", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯……………………", 5, 9400310, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b跟我说说。说不定我能帮你。", 3, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("唔…………。", 5, 9400310, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("唔唔…………………………。", 5, 9400310, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("唔唔唔……………………………………。", 5, 9400310, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b是不是有人欺负你？还是你不能说话？", 3, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("喂！！你说谁被欺负谁不能说话啊！！", 5, 9400310, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b还好，你会说话啊。", 3, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("啊……可恶……都怪你把事情搞砸了！", 5, 9400310, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b搞砸了？", 3, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我正在跟我朋友比赛看谁可以忍更久不说话。", 5, 9400310, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#b啊……。这地方进行奇怪比赛的人真多。", 3, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("唉……我都忍了3天了……因为你这下输了……。", 5, 9400310, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#b哎呀……真抱歉，我能怎么补偿你呢？", 3, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("不过……。我朋友还没来。也就是说，还没人见到我开口说话了。", 5, 9400310, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#b我看到了。", 3, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("………………………………………。", 5, 9400310, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#b………………………………………。", 3, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("你想要什么？", 5, 9400310, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#b呃，也不是……。", 3, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("你也看见了，我没什么能给你。啊，这个给你吧。算不上什么好东西……", 5, 9400310, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#b这个是……。钥匙？你在哪里找到的？", 3, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("不知道。就在路上走着走着偶然捡到的。但似乎没有合适它的箱子。", 5, 9400310, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#b嗯，谢谢你。", 3, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            var w = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                                                            cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + w + "/12)");
                                                            cm.updateInfoQuest(63109, 'key=6');
                                                            cm.forceCompleteQuest(63109);
                                                            cm.sendNormalTalk("你一定要遵守约定哦。我什么话也没说。好了，你快走吧。要是被人看到就不好了。", 5, 9400310, true, true);
                                                            cm.gainItem(4036010, 1);
                                                          } else if (status === V++) {
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
            }
          }
        }
      }
    }
  }
}