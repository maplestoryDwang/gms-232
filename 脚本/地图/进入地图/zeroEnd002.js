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
      cm.npc_ChangeController(2491003, "oid=254096", 53, -85, 7, 3, 103, 1, false, 0, false);
      cm.npc_ChangeController(2491004, "oid=254097", -198, -85, 3, -248, -148, 0, false, 0, false);
      cm.npc_ChangeController(2491005, 'oid=254098', 267, -85, 10, 217, 317, 1, false, 0, false);
      cm.npc_ChangeController(2491006, "oid=254099", 183, -85, 10, 133, 233, 1, false, 0, false);
      cm.npc_ChangeController(2491002, "oid=254100", -281, -85, 1, -331, -231, 0, false, 0, false);
      cm.npc_ChangeController(2491001, "oid=254101", 358, -85, 8, 308, 408, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(那些人是……！？)", 1, 2400005, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(我感到了很强的……力量……！那个人是…… 阿卡伊勒？！)", 1, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(背叛女神的人…… 那样的话，那些人是…… 黑魔法师的手下吗？！)", 1, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(我们该怎么办，阿尔法……？！)", 1, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(我们已经来到这里，不能就这么后退。还好……好像不是敌对的氛围。他好像是真的要向我们说明情况…… 我们去看看吧。)", 1, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b(只是见到黑魔法师的手下就惊慌逃跑的话…… 我们时间超越者的颜面何存？)", 1, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……你们是新任的时间超越者吗？嗯…… 确实如威尔所说的那么年轻。", 9, 2491003, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……你们是黑魔法师的手下吗？", 1, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("这么快就被你们发现了？你们确实…… 不错啊。", 9, 2491003, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("因为我们很熟悉你的脸…… 阿卡伊勒。背叛女神的叛徒……！", 1, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("哎呀。不要那么愤怒地看着我。现在我不想与你们为敌。我们现在需要的应该是交谈吧？", 9, 2491002, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我是说根据你们的选择…… 我们可能会变成一条船上的人。", 9, 2491002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你在说什么？什么一条船…… 你不会是想劝我们和你们合作吧？", 1, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("为什么不会？时间超越者…… 你们要和我们合作吗？", 9, 2491003, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("……你在开玩笑吧？我一直以为我们是仇人，我们的关系什么时候变得这么好了？", 1, 2400005, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("从现在开始，关系变好也不迟啊？我们的提议对你们来说也不差。反而是很好的提议呢。…我的提议是让你们成为冒险岛世界和万神殿，这两个世界的超越者。", 9, 2491003, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("两个世界的……", 1, 2400005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……超越者？", 1, 2400006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("现在能完全控制镜世界的你们，为什么会来到万神殿而不是冒险岛，你们不好奇吗？", 9, 2491002, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("理由很简单。因为万神殿和冒险岛世界正在合并。", 9, 2491002, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("呵呵呵…… 你们好像很吃惊。不过，这也确实够让人吃惊的。但是这就是伟大的黑魔法师的计划。你们知道吗？一个世界只能存在一名超越者。", 9, 2491002, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("换句话说，也就是一个世界需要一名超越者。光超越者，生命超越者，时间超越者…… 每个各一名。", 9, 2491002, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("如果一个世界没有超越者的话，会怎么样？如果超越者消亡的话，必须得诞生出新的超越者，但是…… 如果满足某种条件的话，新的超越者也可能不会诞生。", 9, 2491003, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("没有超越者诞生的世界会变得不稳定…… 那个世界为了寻求完整，就会寻找其他世界的超越者。为了弥补不足。", 9, 2491003, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("冒险岛世界也是一样。光超越者是伟大的那位，生命超越者是阿丽莎，还有时间超越者…… 伦娜消失的冒险岛世界需要新的超越者。", 9, 2491002, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("之后就找到了格兰蒂斯。", 9, 2491002, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("找到超越者所在世界的冒险岛世界，开始与格兰蒂斯逐渐合并。有意思的是，冒险岛世界占主要地位，而格兰蒂斯处于次要地位。是因为世界版图的差异吗？", 9, 2491003, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("世界的结合也是有惯性的。如果那时冒险岛世界立刻诞生出新的超越者的话，结合会被立刻打破。但是，经历了数百年的时间之后……", 9, 2491003, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("到了现在，即使冒险岛世界出现了超越了，也无法打破这种结合。", 9, 2491003, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("这话的意思……是说冒险岛世界和格兰蒂斯……即将成为一个世界？", 1, 2400005, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("虽然现在还不完整。已经可以说是一个世界了。因此，你们才会来到这万神殿世界而不是冒险岛世界。", 9, 2491002, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("你为什么要告诉我们那个……？", 1, 2400006, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("我不是问过你，是否愿意成为两个世界的超越者。冒险岛世界和格兰蒂斯两个世界的超越者。", 9, 2491003, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("难道…… 起初黑魔法师就觊觎着那个……", 1, 2400005, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("你们果然很有眼色？伦娜的封印、阿丽莎的封印…… 还有伟大的那位他自己封印，都是为了这一刻准备的。现在两个世界的结合就快完成，伟大的那位即将作为两个世界的光超越者重新获得力量。", 9, 2491003, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("我们时间超越者呢……？生命超越者呢？", 1, 2400005, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("那个我还不能告诉你们。我只能说有既定的人选。", 9, 2491003, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("如果女神没有拒绝这么好的提议的话…… 我也不会做出蒙上女神眼睛的这种事。虽然很惋惜，但是女神实在太不贪心了。", 9, 2491002, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("但我相信，你们肯定与女神不同。你们是为了与女神做出不同的选择而诞生的。", 9, 2491002, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("所以…… 你们将我们囚禁在镜世界？是为了在需要时能利用我们？", 1, 2400005, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("这个…… 说得有点过了吧。那只是说服你们的一种方法而已。", 9, 2491002, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk('应该是洗脑吧。', 1, 2400006, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("哈哈哈…… 你说得没错。能将你们洗脑并为我们所用，那是最好的。但是洗脑已经失败了，你们已经成功觉醒成超越者。这是我们的失误。不，应该说是你们的实力才对。", 9, 2491003, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk("说实话，我不是不觉得遗憾。如果你们被洗脑的话，我们会更方便做事的。但如果不是最佳的话，至少要做出最佳的选择吧？我是说，如果洗脑不成功的话，你们能选择和我们合作也是不错的。", 9, 2491003, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk("好了，怎么样？你要和我们合作吗？你们不会就满足于一个冒险岛世界吧？你们可是能成为两位世界的超越者呢。只要你们消灭万神殿的超越者就行了。当然我们会帮你们的。", 9, 2491003, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk('……如果我们拒绝呢？', 1, 2400005, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk("你们应该最清楚才对啊？伦娜拒绝了伟大的那位的提议，她的后果你们很清楚。", 9, 2491003, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("#b(……说得好听是提议…… 这明明就是威胁嘛。该怎么办呢？该怎么做才好呢？)", 1, 2400005, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("#b(……女神会拒绝肯定是有理由的。在知道那个理由之前…… 我们不能接受这提议。还有…… 我们不能相信他们。)", 9, 2400006, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk("……你给我们点时间，让我们考虑下。", 1, 2400005, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk("嗯…… 你们想要考虑的时间？", 9, 2491003, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("……没错。但那不是当然的吗？我们就在不久前才与你们的同伴，威尔进行了战斗。并且，我们才刚刚觉醒成超越者。", 1, 2400005, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk("但是我们才离开镜世界，就要接受我们一直以来认定的最大敌人黑魔法师…… 他的手下的提议？你觉得这有可能吗？", 1, 2400005, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk("很抱歉，我们不能相信你们。完全不能。首先…… 我们得先了解下这个世界。到那时为止…… 你们也拿出些能让我们信服的其他证据来吧。", 1, 2400005, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk("……傲慢的家伙。", 9, 2491004, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk("唉，别生气，德米安。连那样的骨气都没有的话，就愧对超越者这个名称。", 9, 2491002, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk("那…… 还有点时间。我想应该可以宽限你们几天。好的，我们在冒险岛世界看到你们的话，会装作没看到。你们也可以装作没看到我们。", 9, 2491003, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk("但是，你们不能决定地太慢。今天就当做是提前跟你们打招呼…… 再见。", 9, 2491003, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk("等下。我想再问你一件事…… 你没有想过要向杀死威尔的我们报仇吗？怀有抵触情绪的话，似乎没办法成为一伙的吧？", 1, 2400005, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk("这个么。弱者死亡不是理所当然的事情吗？这里没有人会因为那件事而对你们怀有恶意，你们放心吧。话说回来……你们确定威尔已经死了？", 9, 2491003, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk("威尔…… 还活着！？", 1, 2400006, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk("哈哈。等我们再次见面的话，你们应该就能亲自确认他到底有没有死了。你们想要报仇的话，得和我们联手才行吧？好了，那你们就回去吧。引路人会把你们带到冒险岛世界的。", 9, 2491003, true, true);
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.forceStartQuest(40805, '0');
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(940040001, 1, false);
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