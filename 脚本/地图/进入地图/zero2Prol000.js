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
      cm.npc_ChangeController(2400012, "oid=24083", 374, -260, 56, 324, 424, 1, false, 0, false);
      cm.npc_ChangeController(2400013, 'oid=24084', -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24085", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=24086", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=24087", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=24088", 215, -230, 34, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400018, 'oid=24089', 520, -230, 34, 470, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24090", 470, -167, 62, 420, 520, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=24091", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24092", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.updateInfoQuest(40901, '');
      cm.forceStartQuest(40901, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……就这样，最终时间女神伦娜被黑魔法师和军团长给封印了。能看到世界的未来，但是却无法挽回自己的命运……难道这就是时间超越者的极限吗。", 33, 2400000, false, true);
        cm.effect_Voice("Voice.img/Pieng/0", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不过，女神也不是什么准备都没做。女神希望有人能够代替她成为时间超越者，也希望她的继任者能够#b走向和她不同的未来之路#k。由此#b神之子#k得以降生。", 33, 2400000, true, true);
          cm.effect_Voice("Voice.img/Pieng/1", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但还是被狡猾的黑魔法师给发现了。他把新生的神之子关了起来，在他还未彻底领悟自身之前，使用各种方法干扰他不让他觉醒。", 33, 2400000, true, true);
            cm.effect_Voice("Voice.img/Pieng/2", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("因此，两位从前就不知道给两位生命的女神是谁、为两位所准备的神殿是什么、以及自己又是何人。现在，都知道了吗？", 33, 2400000, true, true);
              cm.effect_Voice("Voice.img/Pieng/3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("OK，我知道了，我就是时间女神伦娜的继承人，对吧？女神被黑魔法师和他的部下封印了起来，而我又一直被军团长蒙在鼓里。", 41, 2400005, false, true);
                  cm.effect_Voice("Voice.img/Alpha/100", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("但是，我想知道的不是这些。不对，我也想知道这些，但是现在最重要的不是这些。我是神之子，到这里我可以接受。但是……#face1#为什么突然变成了两个？！这家伙也是我吗？！", 41, 2400005, true, true);
                    cm.effect_Voice("Voice.img/Alpha/101", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("是的，呵呵。刚才我也说过了，女神#r只创造了一位神之子#k。我们也以为还有一个，但这都是因为军团长的力量，所以才变成了两个孩子。", 33, 2400000, true, true);
                      cm.effect_Direction("Effect/Direction13.img/zeroPrologue/Emotion5", 0, 0, 0);
                      cm.effect_Voice("Voice.img/Pieng/4", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("黑魔法师的军团长，虽然他的确拥有非常强大的力量，但他一个人也无法抵挡两位超越者。所以他想到了一个奇异的方法。那就是把#r神之子一分为二#k。", 33, 2400000, true, true);
                        cm.effect_Voice("Voice.img/Pieng/5", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("变成两人的神之子，其时间之力也各得一半，因此相对也比较容易管理。其中一个被关在了神殿里，永不得苏醒……而另一个则由自己亲自洗脑，不让其觉醒。", 33, 2400000, true, true);
                          cm.effect_Voice("Voice.img/Pieng/6", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("但是，两位的性别如何变得不同，我也不太清楚。可能在分离的时候，介入了一股不曾预料的力量吧？当然，两位是男是女我都没有关系，嘿嘿。", 33, 2400000, true, true);
                            cm.effect_Voice("Voice.img/Pieng/7", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……所以说……我就是他，她就是我……因为难以辨别，所以他叫#p2400005#，我叫#p2400006#……", 41, 2400006, true, true);
                              cm.effect_Voice("Voice.img/Beta/0", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("知道了，那我现在该做什么？", 41, 2400006, true, true);
                                cm.effect_Voice("Voice.img/Beta/1", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face0#不要那么轻易就跳过啊！我已经为自己想好了名字，叫做Zero！#b为了忘记重复了9次的过去，打算重新开始，所以才起了这样的名字！#k但是我为什么要被叫成#p2400005#呢？！", 41, 2400005, false, true);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/displeased/0", 1, 1, 1, 0, 0);
                                    cm.effect_Voice("Voice.img/Alpha/102", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("那么你来当#p2400006#吧，我来当#p2400005#。", 41, 2400006, true, true);
                                      cm.effect_Voice("Voice.img/Beta/2", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face0#我不是说这个！", 41, 2400005, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/103", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_REPEAT("Effect/Direction13.img/effect/zero/displeased/0", 1, 0, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("啊啊啊……说了等于白说。你对这种情况没有感到任何不满么？你的脸怎么会那么平静？", 41, 2400005, false, true);
                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                            cm.effect_Voice("Voice.img/Alpha/104", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("对现在这个情况，我也不知道哪里有什么不好。倒是你为什么会这么发火？", 41, 2400006, true, true);
                                              cm.effect_Voice("Voice.img/Beta/3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face1#那是肯定的……！你真的是我吗？为什么性格完全不同？我没有你这么傻！", 41, 2400005, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/105", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [207, -339, 185, 1, 0, 1, 1, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [372, -367, 185, 1, 0, 1, 1, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [489, -333, 185, 1, 0, 1, 1, 0]);
                                                  cm.sendNormalTalk("性格取决于两位成长的环境，两位在不同环境下成长，自然性格也不会像。除了这个其他地方两位一模一样！", 33, 2400007, true, true);
                                                  cm.effect_Voice("Voice.img/Benedict/0", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("感受到的时间之力也完全相同，两位的确是一个人。其实就性别不同之外，长相也一摸一样。", 33, 2400008, true, true);
                                                    cm.effect_Voice("Voice.img/Casillas/0", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("虽然很抱歉，但是现在还找不到两位能成为一个人的方法。我也是第一次碰到这种情况，而且时间神殿的记录中也没有相关的记录。", 33, 2400000, true, true);
                                                      cm.effect_Voice("Voice.img/Pieng/8", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("不过话说回来，我挺开心的……神之子竟然是两位。一位也足以开心了，不过又多了一位……怎么说呢，这是不是叫做#r双手开花#k？根本就没想到过会有这么美丽的风景……", 33, 2400000, true, true);
                                                        cm.effect_Voice("Voice.img/Pieng/9", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Kite/Storm", 100);
                                                          cm.sendNormalTalk("#face7#喂……算了……不用再说你自己的兴趣了！还是到下一个话题吧！对了，你说这里不是真正的世界？", 41, 2400005, true, true);
                                                          cm.effect_Direction("Effect/Direction13.img/zeroPrologue/Emotion7", 0, 0, 0);
                                                          cm.effect_Voice("Voice.img/Alpha/106", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("对。黑魔法师和时间女神，还有军团长……都是在冒险岛世界的事情，但这里又不是冒险岛世界……那么这又是哪里呢？", 41, 2400006, true, true);
                                                            cm.effect_Voice("Voice.img/Beta/4", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("啊啊，是的。这个是我们的世界……不是冒险岛世界。这里是黑魔法师和军团长为了困住我们所建立的监狱……即#b镜世界#k。", 33, 2400000, true, true);
                                                              cm.effect_Voice("Voice.img/Pieng/10", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("神之子真正能发挥超越者力量的地方，那就是超越者所属于的世界，即冒险岛世界。敌人也知道这一点，所以才会创造出镜世界来阻止两位的力量。", 33, 2400000, true, true);
                                                                cm.effect_Voice("Voice.img/Pieng/11", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("说是创造，但也不是完美的世界。这里只是将冒险岛世界照在镜子上反射出来的世界，是既渺小又不稳定的虚拟世界。", 33, 2400000, true, true);
                                                                  cm.effect_Voice("Voice.img/Pieng/12", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("好在两位神之子觉醒的时候，#b镜世界的一部分也被打破，从而通向了冒险岛世界#k。右侧的那扇门就是那扇通道。", 33, 2400000, true, true);
                                                                    cm.effect_Voice("Voice.img/Pieng/13", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("但是很可惜，两位还无法通过这扇门前往冒险岛世界，因为两位已经被束缚在镜世界了。来……百闻不如一见，我来打开那扇门。", 33, 2400000, true, true);
                                                                      cm.effect_Voice("Voice.img/Pieng/14", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(320000000, 1, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;