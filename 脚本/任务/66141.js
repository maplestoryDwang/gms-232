var status = -1;
var selectionLog = [];
var statusStart = -1;
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
      cm.sendNormalTalk_Bottom("马米，出来了～当当，尊贵的#h0#登场！", 37, 9401023, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("您一路辛苦了，我是这里的负责人，您叫我马米就好。 ", 37, 9401021, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#b你好，我是#h0#。", 57, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("来来，我们以后会经常见面的，那就慢慢了解彼此，进入正题吧？ ", 37, 9401023, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("您来的路上看见旁边出现的巨大洞口了吗？直到不久之前，这里还是个山丘，这座岛屿是我出生的地方，我曾经就在这附近玩耍打闹。", 37, 9401021, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("我离开家一段时间后再回来时，开满白色野花的山丘便消失不见了，取而代之的是巨大的洞口。当时，我感觉到体内想要冒险的血液沸腾，因为我们认为再也没有新的探险场所时，这种未知的领域出现了。", 37, 9401021, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("那里面栖息着来历不明的怪物，它们和冒险岛世界中的任何生物都不一样。尤其是那个不明正体的东西，我从未见过什么东西有那种气息。因此，我们称之为“暗影”。", 37, 9401021, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("总之，那个巨大的黑洞出现之后，关于这里的传闻人尽皆知，冒险家们随之涌来，那时我便下定了决心。", 37, 9401021, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("我要在这里建立远征总部，征服那个地方。", 37, 9401021, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#b……原来如此。", 57, 0, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("我想拜托你的是，带领这些，进入深渊，担任远征队队长的角色。", 37, 9401021, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("嗯～补充说明一下，每天都有无数的冒险家排着队下到深渊，但最高纪录也只达到过地下9层，而且还只有3次。连续的失败导致冒险家们纷纷丧失了信心和挑战欲。", 37, 9401023, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("嘿嘿！所以大叔我想出了一个好主意。我决定寻找能够率领这些冒险家的远征队队长！当然，就是你啦～（眨眼）", 37, 9401023, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.askMenu_Bottom("#b嗯，要是成为远征队队长……\r\n#L0# 我该做些什么呢？#l\r\n#L1# 我能获得什么呢？#l\r\n#L2# 我要担任远征队队长到什么时候呢？#l\r\n#L3# 原来如此。#l", 57, 0, 1);
                              } else {
                                if (statusStart < 0) {
                                  statusStart = status;
                                }
                                var e = "action分支" + selectionLog[v];
                                eval(e)(g, w, a, v);
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
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk_Bottom("好问题，这个好问题当然要交给马米！", 37, 9401023, false, true, 1);
  } else {
    if (status === v++) {
      cm.sendNormalTalk_Bottom("首先需要募集同行的远征队队员。虽然有人向我们推荐了你，但我也不会那么轻率，不检验你的实力，就将你送到那么危险的地方。", 37, 9401021, true, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("找到远征队队员，与他们一同探索深渊，累积#b声望#k，通过累积的#b声望#k帮助远征队队员成长，然后再前往更深层的区域探险，就这样到达#b深渊的尽头#k。这就是你要做的事情。", 37, 9401021, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("另外，最重要的是消灭“暗影”。“暗影”不会受到普通攻击，所以远征队队长将会获得特殊能力。", 37, 9401021, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("取而代之的是，获得能力的远征队队长无法消灭#b深渊的普通怪物。#k. 因此你才需要与其他探险家一同组成远征队，前往探险。", 37, 9401021, true, true, 1);
          } else if (status === v++) {
            cm.sendNormalTalk_Bottom("更加详细的内容，以后我会慢慢告诉你，不用担心。", 37, 9401023, true, true, 1);
            status = statusStart - 2;
          }
        }
      }
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk_Bottom("哦吼！你还挺务实的嘛？其实奖励是最重要的。奖励呢……敬请期待吧～～ ", 37, 9401023, false, true, 1);
  } else {
    if (status === v++) {
      cm.sendNormalTalk_Bottom("就是名誉！我要是这么说，你就会回去了吧？", 37, 9401023, true, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("哈哈，远征队中所有人之间共享#b经验值#k。也就是说，如果#h0#成为了远征队队长，即使无法消灭普通怪物，也可以收到#b远征队队员获得的经验值#k。", 37, 9401023, true, true, 1);
      } else if (status === v++) {
        cm.sendNormalTalk_Bottom("怎么样？这个提案很有吸引力吧？消灭暗影至关重要，不过还好它不会经常出现，所以这趟冒险应该还算轻松。", 37, 9401023, true, true, 1);
        status = statusStart - 2;
      }
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk_Bottom("你问到了关键点上。我们也无法一直运营这个远征队本部到看见深渊尽头的那天。深渊远征队预计在#b2021年5月12日至6月22日期间内#k运营。", 37, 9401021, false, true, 1);
    status = statusStart - 2;
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk_Bottom("这下解开你的疑问了吗？", 37, 9401023, false, true, 1);
  } else {
    if (status === v++) {
      cm.sendNormalTalk_Bottom("怎么样？你愿意成为带领诸多冒险家的远征队队长吗？", 37, 9401023, true, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#b我的荣幸。", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("好的，那就交给马米！", 37, 9401023, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#h0#，我将赋予你远征队队长的资格。", 37, 9401021, true, true, 1);
          } else {
            if (status === v++) {
              cm.fieldEffect_PlayFieldSound("Sound2/PL_Sound.img/Wz2_Abyss/levelUP", 100);
              cm.sendNormalTalk_Bottom("接下来，你可以作为远征队队长收编远征队队员，探索深渊了。", 37, 9401021, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_OnUserEff("Effect/OnUserEff.img/AbyssExpedition/LevelUP");
                cm.sendNormalTalk_Bottom("话说，有一群队员得知你要来，早早就等着了。希望你能作为远征队队长，与他们一同开启探险之旅，征服深渊。", 37, 9401021, true, true, 1);
              } else {
                if (status === v++) {
                  cm.深渊远征队_初始队员();
                  cm.sendNormalTalk_Bottom("我从小就力气大，体力好，一直负责村里的家务事。一切就交给我吧！", 37, 9401034, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("我是莫妮卡！魔法师！我会使用圣箭术，还有……我特别聪明！", 37, 9401029, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("嗯，看来所有的队员已经聚齐在你的远征队中了。接下来我将告诉你几点作为远征队队长活动，需要了解的事情。", 37, 9401021, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.openNewUI(1, "UIAbyssExpeditionManangementButton");
                        cm.sendNormalTalk_Bottom("首先，你可以打开远征队管理窗口，设置加入的远征队队员。\r\n通过画面左下方的#b[远征队管理]按钮#k即可打开UI，与你心仪的队员会合之后，通过总部外的升降机即可进入深渊。", 37, 9401021, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("探险结束后，找到远征总部这里的芽芽，他会为你发放相应的奖励。你可以通过收集到的#b声望#k升级远征队队长的指挥力。芽芽，请你来说明一下吧。", 37, 9401021, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("在深渊中探索一定时间以上之后，找到我，我会在核算后为你发放相应的奖励。", 37, 9401022, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.updateInfoQuest(64753, "level=2;rank=0");
                              cm.sendNormalTalk_Bottom("不过需要注意的是，每天只能核算1次。我还有事，先告辞了。", 37, 9401022, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("……芽芽好像有点忙，以后再去找他了解升级的详细情况吧。总之，在深渊探险的过程中，你能得到队员们可以使用的各种装备和技能。", 37, 9401021, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("为各个队员使用你得到的装备和技能，可以使他们成长得更加强大，你还是赶快去探索深渊吧。", 37, 9401021, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("我也要说一句！远征总部除了那些人之外，还有许多一直在寻找同伴的强大冒险家，如果你想寻找新的同伴，就来找我吧~当然，你需要有一定点数以上的#b声望#k才行。", 37, 9401023, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("好了，为了证明#h0#你有资格被任命为远征队队长，这个称号给你。", 37, 9401023, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.forceCompleteQuest(66141);
                                        cm.updateInfoQuest(64753, "point=0;level=2;rank=0");
                                        cm.updateInfoQuest(64757, "totalTime2=2;totalTime=0");
                                        cm.sendNormalTalk_Bottom("现在真的要开始啦！总部外的前院中有一个公告栏，在那里领取#b[深渊调查任务]#k之后，通过升降机进入深渊就可以啦~", 37, 9401023, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.gainItem(3700624, 1);
                                          cm.sendNormalTalk_Bottom("那接下来就拜托你啦~如果有什么问题，你可以随时来找大叔我和马米。", 37, 9401023, true, true, 1);
                                        } else if (status === v++) {
                                          cm.playerMessage(-1, "现在可以通过画面右下方的[远征队管理]按钮，使用远征队管理窗口。");
                                          cm.playerMessage(5, "直接双击佣兵，或者点击远征队队员设置按钮，即可装备或解除佣兵。");
                                          cm.playerMessage(5, "详细信息可通过任务查看。");
                                          cm.openNewUI(1, "UIAbyssExpedition");
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