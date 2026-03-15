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
      cm.effect_Voice("Voice6.img/lara/8/Female/1", 100);
      cm.sendNormalTalk_Bottom("#face0#大家都没有受伤吧？", 36, 3005103, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("Voice6.img/lara/8/Female/2", 100);
        cm.sendNormalTalk_Bottom("#face0#多亏了你，我们才能顺利逃脱，谢谢！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("Voice6.img/lara/8/Female/3", 100);
          cm.sendNormalTalk_Bottom("#face0#我叫海娜，你是第一次来这座村庄吗？", 36, 3005103, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("Voice6.img/lara/8/Female/4", 100);
            cm.sendNormalTalk_Bottom("#face6#嗯，我叫啦啦。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("Voice6.img/lara/8/Female/5", 100);
              cm.sendNormalTalk_Bottom('#face0#……', 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_Voice("Voice6.img/lara/8/Female/6", 100);
                cm.sendNormalTalk_Bottom("#face0#然后他是……", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.effect_Voice("Voice6.img/lara/8/Female/7", 100);
                  cm.sendNormalTalk_Bottom("#face2#好久不见，格里，你现在能顺利数到30了吗？", 36, 3005103, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.effect_Voice("Voice6.img/lara/8/Female/8", 100);
                    cm.sendNormalTalk_Bottom("#face0#……这都是猴年马月的事了……", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.effect_Voice("Voice6.img/lara/8/Female/9", 100);
                      cm.sendNormalTalk_Bottom("#face1#你们两个认识的吗？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.effect_Voice("Voice6.img/lara/8/Female/10", 100);
                        cm.sendNormalTalk_Bottom("#face2#呵呵，格里小时候我们也算是有过一段交情。", 36, 3005103, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.effect_Voice("Voice6.img/lara/8/Female/11", 100);
                          cm.sendNormalTalk_Bottom("#face3#话说这里的这些画都是你画的吗？", 36, 3005100, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.effect_Voice("Voice6.img/lara/8/Female/12", 100);
                            cm.sendNormalTalk_Bottom("#face3#真厉害！我好像是头一次看到如此栩栩如生的美丽画作。", 36, 3005100, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.effect_Voice("Voice6.img/lara/8/Female/13", 100);
                              cm.sendNormalTalk_Bottom("#face0#……喂，要是弄坏了那幅画，你就算干一辈子的活都还不起。", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.effect_Voice("Voice6.img/lara/8/Female/14", 100);
                                cm.sendNormalTalk_Bottom("#face1#真、真的吗？这些画那么贵吗？", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.effect_Voice("Voice6.img/lara/8/Female/15", 100);
                                  cm.sendNormalTalk_Bottom("#face2#没事，放心地走走看看吧。", 36, 3005103, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#话说你为什么来这座村庄啊？", 37, 3005103, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#我正为了摇响这个铃铛四处旅行！", 37, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#要怎么摇响呢？", 37, 3005103, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#这我还不清楚！我是跟着小山灵四处游荡才来到的这里。", 37, 3005100, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face2#这样啊。", 37, 3005103, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#说起来，我真的好久没和别人聊过天了。", 37, 3005103, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#欢迎你以后也经常来找我吧？", 37, 3005103, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face2#真的吗？真的可以吗？那我会经常和格里一起来玩的！", 37, 3005100, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face7#别算上我……", 37, 3005102, true, true, 1);
                                                  } else if (status === v++) {
                                                    cm.dispose();
                                                    cm.warp(993165500, 0, true);
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