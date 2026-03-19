var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/dragonMark/PSD", 'animation', '', ''], [1, 1, 1, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/gravity", 100, 60);
        cm.sendNormalTalk_Bottom("……能听到吗？能听到吗？", 37, 1540836, false, true);
        cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/1", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#这个声音是？", 37, 1540805, true, true);
          cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/2", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("如果现在你能听见我的声音，那你肯定就是我的继承人。", 37, 1540836, true, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/3", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#难道是弗里德？", 37, 1540805, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/4", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("是的，没错，我将自己的声音刻在了诺言纹章上。", 37, 1540836, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/5", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没时间了，你听好，阿弗利埃会将这条信息交给你，就表明世界处于危险之中。", 37, 1540836, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/6", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#用不了多久，黑魔法师的军团长就会吞噬掉世界树。\r\n要想阻止他，需要我准备好的某样东西。", 37, 1540836, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/7", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#难道你说的是封印石吗？", 37, 1540805, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/8", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那是种封印石压根不能比的极其重要且危险的东西，\r\n只有我的继承人，也就是你才能找到。", 37, 1540836, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/9", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#只有我……？怎么会呢？", 37, 1540805, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/10", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你很快就会知道的，我之所以要秘密地将这个消息告诉你，\r\n是因为若用其他方式告诉你，消息有可能会走漏出去。", 37, 1540836, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/11", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#我搞不太明白……脑子好乱啊。", 37, 1540805, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/12", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("从现在开始，你要记好我告诉你的地点，还有……", 37, 1540836, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/13", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你不是一个人，如果我的朋友们还活着，就一定会帮助你的。", 37, 1540836, true, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/14", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#朋友吗？", 37, 1540805, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/15", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("曾经一起封印黑魔法师的五位朋友。他们都是可以信任的人。", 37, 1540836, true, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/16", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我会等你的。", 37, 1540836, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT1/MESSAGE/17", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(350112320, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;