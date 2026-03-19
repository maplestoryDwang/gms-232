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
      cm.npc_ChangeController(2470046, 'oid=27662', 361, -115, 22, 311, 411, 1, false, 0, false);
      cm.npc_ChangeController(2470024, "oid=2522030", 503, 82, 11, 453, 553, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2522030", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这里又是哪里？真是奇怪的地方…… 和神殿相似却又有所不同。", 41, 2400005, false, true);
        cm.effect_Voice("Voice.img/Alpha/107", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face7#……阿尔法，看那个…… 那些画面……", 41, 2400006, true, true);
          cm.effect_Voice("Voice.img/Beta/5", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face7#神殿…… 神官们…… 影子骑士团……？这是什么呢？这是……", 41, 2400006, true, true);
            cm.effect_Voice("Voice.img/Beta/6", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("欢迎来到镜世界控制室…… 纳因。不对，现在是阿尔法？旁边的是贝塔啊。虽然我们不是第一次见面…… 但你们应该不记得我了。", 33, 2470024, true, true);
              cm.effect_Voice("Voice.img/Will/23", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/zero/story");
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face1#……威尔？！你怎么会在这里？", 41, 2400005, false, true);
                      cm.effect_Voice("Voice.img/Alpha/108", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你的问题似乎错了。你不应该问我怎么会在这里，你应该问问你们怎么会在这。因为是我招待你们来这的。", 33, 2470024, true, true);
                        cm.effect_Voice("Voice.img/Will/24", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11#你说这是镜世界控制室了吧…… 这里就是你操作镜世界的场所吗？", 41, 2400005, true, true);
                          cm.effect_Voice("Voice.img/Alpha/109", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("没有。看到…… 这个了吗？这是被封印的女神。虽然镜世界是黑魔法师创作的，但是是女神的力量支撑着这个世界。", 33, 2470024, true, true);
                            cm.effect_Voice("Voice.img/Will/25", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#是利用女神创造出的监狱吗…… 但是一个世界的超越者…… 该死，我不知道！我们先消灭掉威尔这家伙再想吧！走吧，贝塔！", 41, 2400005, true, true);
                              cm.effect_Voice("Voice.img/Alpha/110", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('#face1#嗯！', 41, 2400006, true, true);
                                cm.effect_Voice("Voice.img/Beta/7", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("该死…… 镇定点。我们还有很多事情没搞清楚。比如说…… 为什么女神之泪没被激活之类的。", 33, 2470024, true, true);
                                  cm.effect_Voice("Voice.img/Will/26", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face11#……怎么能把那个……！", 41, 2400005, true, true);
                                    cm.effect_Voice("Voice.img/Alpha/111", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face2#那是当然的…… 因为那个原因是我造成的。", 33, 2470024, true, true);
                                      cm.effect_Voice("Voice.img/Will/27", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/zero/story");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("阿尔法，还有贝塔…… 你们的神官们是怎么说你们的？军团长应付不了神之子，所以将你们分成了两个？", 33, 2470024, false, true);
                                          cm.effect_Voice("Voice.img/Will/28", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("没错。如果是黑魔法师还说不准，但是以我的力量想要对付超越者真的很难，即使是还没觉醒的超越者。", 33, 2470024, true, true);
                                            cm.effect_Voice("Voice.img/Will/29", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("所以我将还没觉醒的你们分成了两个。到这里都是正确的…… 但是，仅仅只是这样吗？", 33, 2470024, true, true);
                                              cm.effect_Voice("Voice.img/Will/30", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face1#你到底想说什么呢？！", 41, 2400005, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/112", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("将你们分成两个之后，为了不让你们的力量合在一起，我将你们中的一个幽禁起来，另一个进行了洗脑。为了防备你们力量合并，我还#r用我的力量污染了你们中一个所拥有的时间之力#k。", 33, 2470024, true, true);
                                                  cm.effect_Voice("Voice.img/Will/31", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("即使你们俩相见，并且觉醒成神之子…… 即使你们培养出时间之力…… 变强的力量逐渐变得不稳定。", 33, 2470024, true, true);
                                                    cm.effect_Voice("Voice.img/Will/32", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("即使是非常小的窟窿也可能使整个堤坝倒塌。一个非常小的不安要素，用那个就足以让你们无法成为超越者。", 33, 2470024, true, true);
                                                      cm.effect_Voice("Voice.img/Will/33", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("因为#r不洁者#k是无法成为超越者的。绝对不行。并且永远不行。", 33, 2470024, true, true);
                                                        cm.effect_Voice("Voice.img/Will/34", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#face1#你这个家伙……！", 41, 2400005, true, true);
                                                          cm.effect_Voice("Voice.img/Alpha/113", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("即便如此，你们若想成为超越者的话…… 也很简单。你们两个中的#r不洁者消失的话，剩余的另一个人是洁净的，他就能觉醒成超越者#k啦。虽然力量可能有点不足。", 33, 2470024, true, true);
                                                            cm.effect_Voice("Voice.img/Will/35", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("比起永远不能成为超越者，那样也许比较好呢。那么请除掉不洁者吧。当然…… 我不能告诉你们谁才是不洁者…… 哈哈哈。", 33, 2470024, true, true);
                                                              cm.effect_Voice("Voice.img/Will/36", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("#face7#…………！", 41, 2400006, true, true);
                                                                cm.effect_Voice("Voice.img/Beta/8", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("#face7#你为了这样，把我们……", 41, 2400005, true, true);
                                                                  cm.effect_Voice("Voice.img/Alpha/114", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("我本想在事情变成这样之前抓住两位的…… 我也觉得很遗憾。我不想让你们痛苦。所以我本想在那之前，让所有的事情回到原样……", 33, 2470024, true, true);
                                                                    cm.effect_Voice("Voice.img/Will/37", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("现在也还不迟，阿尔法…… 还有贝塔。如果是痛苦悲伤的记忆的话，没有不是反而更好吗？你们不想回到以前幸福的时候吗？回到什么都不知道的那时候。", 33, 2470024, true, true);
                                                                      cm.effect_Voice("Voice.img/Will/38", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("#face1#闭嘴！我绝不会原谅你的！", 41, 2400005, true, true);
                                                                        cm.effect_Voice("Voice.img/Alpha/115", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("#face1#……现在我们没有胜算。逃跑吧，阿尔法！", 41, 2400006, true, true);
                                                                          cm.effect_Voice("Voice.img/Beta/9", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("#face1#但是！", 41, 2400005, true, true);
                                                                            cm.effect_Voice("Voice.img/Alpha/116", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("……逃跑？那也不赖。你们回去决定吧。是谁生谁死。但是，谁都无法保证活着的那方一定不是不洁者。", 33, 2470024, true, true);
                                                                              cm.effect_Voice("Voice.img/Will/39", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("其实说不定要找出答案并不难。反正#b我已经告诉你们正确答案了#k。说实话，我希望两位能找出正确答案。", 33, 2470024, true, true);
                                                                                cm.effect_Voice("Voice.img/Will/40", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("#face2#因为你们找出正确答案，帮我减少我要做的事情的话…… 我会轻松不少。", 33, 2470024, true, true);
                                                                                  cm.effect_Voice("Voice.img/Will/41", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("好了，那么…… 这次我就放走你们。我们迟早会再见的。", 33, 2470024, true, true);
                                                                                    cm.effect_Voice("Voice.img/Will/42", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceStartQuest(40616, '1');
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(320000000, 6, false);
                                                                                      cm.setInGameDirectionMode(false, true, false);
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