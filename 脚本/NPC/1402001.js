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
      cm.sendNormalTalk("喂，我好像没见过你，是新来的吗？", 0, 1402001, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你在说什么啊，奇丹？你已经忘记我了吗？上次我不是跟你打过招呼吗！", 2, 1402001, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("呃，呃……是吗？抱歉，我记不起来了……", 0, 1402001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("虽然来往的人有很多，不过希望你能记住我的脸。我已经跟你见过好几次了……真是太过分了。", 2, 1402001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("对，对不起。你也知道，最近圣地的气氛很紧张。骑士团员们都聚集在了这里，所以难免会搞错。", 0, 1402001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……气氛有那么紧张吗？", 2, 1402001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那当然。之前守护的希纳斯女皇可能不是真正的皇帝血统……怎么能不紧张呢？", 0, 1402001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("唉……也是，原来如此。听说之后，我也吓了一跳，连忙赶了回来。", 2, 1402001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("一直以来都坚定地率领着骑士团的希纳斯女皇好像因为这件事受到了很大的打击……刚才去见她的时候，她的脸色好像非常苍白，唉……", 0, 1402001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("对于除了希纳斯之外还有其他皇帝的事情，你好像不太高兴啊。", 2, 1402001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("那当然。她一直都非常努力，骑士团能有现在的发展，也全都亏了她。但是突然又冒出了其他的皇帝……", 0, 1402001, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("真是不敢相信。希纳斯不是正统的话，那谁是正宗的皇帝呢？", 2, 1402001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("好像叫希拉还是什么的，那个女人声称自己是真正的皇帝……说得有鼻子有眼的，所以骑士团的人都很震惊。", 0, 1402001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("所以气氛才会这么紧张啊……", 2, 1402001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("是啊。这种时候要是神兽在的话就好了，偏偏他又不在……", 0, 1402001, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("那个女人干嘛偏偏在这个时候蹦出来，说要证明自己的血统啊？她倒是挑个神兽在的日子啊！唉！", 0, 1402001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("唉……就是嘛。", 2, 1402001, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("希望这件事能妥善解决……如果希纳斯女皇不是真正的皇帝血统的话，该怎么办呢……？我是绝对不会追随希纳斯之外的皇帝的……", 0, 1402001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("又不能把圣地分成两块……估计有得乱了……", 0, 1402001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("别太担心，奇丹。一定可以顺利解决的。", 2, 1402001, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("但愿如此……那个叫希拉的女人一定也是有一定的把握，才会挑起这么大的事端的。", 0, 1402001, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("应该是……不过谁又知道呢？说不定会有个大人物出来，一下子把事情解决。", 2, 1402001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("大人物？……你说谁啊？", 0, 1402001, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("这个嘛……哈哈哈。总之别太担心。那我到大会议场那边去看看。", 2, 1402001, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("好的，再见。", 0, 1402001, true, false);
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