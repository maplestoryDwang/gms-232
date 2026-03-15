var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("除了因为任务外出的军团长以外都会来吗?..那么就开会吧。", 2159310);
  } else {
    if (status == 1) {
      cm.sendNextPrev("伟大的祂，在黑魔法师的事情结束前我们要做好我们分内的事，不能因为祂不看就偷懒啊。这样看来 #h0#...听说有带来有趣的情报啊?", 2159308);
    } else {
      if (status == 2) {
        cm.sendNextPrevS("…我拿到了反抗军们正在集合的情报。");
      } else {
        if (status == 3) {
          cm.sendNextPrev("反抗军啊... 把乌合之众的败兵们全部集合起来要做什么. 哈哈哈... 所有人都称他们为 #r英雄#k是吧?真有够好笑。", 2159308);
        } else {
          if (status == 4) {
            cm.sendNextPrev("我还挺期待的? 这应该就是最后的挣扎吧]?真好奇他们要如何来反抗。占领耶雷弗前夕真没力气~清除皇帝那家伙真是易如反掌有够无趣。", 2159339);
          } else {
            if (status == 5) {
              cm.sendNextPrev("战斗会如此的轻松还不都是托黑魔法师的权能应该与妳无关吧,  #p2159339#? ? 好好收敛妳那狂妄的语气。", 2159308);
            } else {
              if (status == 6) {
                cm.sendNextPrev("额... 但我无事可做啊!", 2159339);
              } else {
                if (status == 7) {
                  cm.sendNextPrevS("史乌他看起来好像很忙。杀人鲸待在这里没关系吗?");
                } else {
                  if (status == 8) {
                    cm.sendNextPrev("史乌总是埋头苦干！? 我现在正要去找史乌！哼！总之军团长们都像木头人一样. 真没意思。", 2159339);
                  } else {
                    if (status == 9) {
                      cm.sendNextPrev('…会议呢?', 2159310);
                    } else {
                      if (status == 10) {
                        cm.sendNextPrev("真是. 都是因为 #p2159339#一直在说话所以会议都没什么进度。切... 是在说英雄们的事情吗?英雄啊...  他们都是高尚的 #h0#会好好看著办吧。", 2159308);
                      } else {
                        if (status == 11) {
                          cm.sendNextPrev("连时间女神都制伏的人，那样的英雄也会是对手吗?对吧?哈哈哈哈…", 2159308);
                        } else {
                          if (status == 12) {
                            cm.sendNextPrevS("…状况看似不简单. 那些拼了命的家伙要发挥超越自己能力的力量。然后我只是无法闪掉时间女神的行动... 最终停止幽禁的会是伟大的那位吧。");
                          } else {
                            if (status == 13) {
                              cm.sendNextPrev("哎呀，怎么这么谦虚啊。反正以那个功劳应该可以得到祂的认可吧?比起他我先去神殿散播许多的小动作实在太微小了，不会害羞吗", 2159308);
                            } else {
                              if (status == 14) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [2000, 0, -100, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status == 15) {
                                  cm.sendNext("…你们两够了吧.", 2159310);
                                } else {
                                  if (status == 16) {
                                    cm.sendNextPrev("干嘛? 很有趣啊? 继续说来听听. #p2159309#.", 2159339);
                                  } else {
                                    if (status == 17) {
                                      cm.sendNextPrev("我不过只是被称赞为我们军团最佳的有功之人#h0#而已.ㄎㄎㄎ...", 2159308);
                                    } else {
                                      if (status == 18) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [2000, 0, -100, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status == 19) {
                                          cm.sendNext("#p2159309#.  只要占领完神殿一切都结束了... 那个意义去绑架时间女神的功劳 是绝对的.", 2159310);
                                        } else {
                                          if (status == 20) {
                                            cm.sendNextPrev("然后你蒙蔽女神的双眼不是已经得到奖赏了吗? 你还想要什么, #p2159309#?", 2159310);
                                          } else {
                                            if (status == 21) {
                                              cm.sendNextPrev("我还能奢望什么啊... 哀. 好吧, 那这些事情就说到这里为止继续开会吧. 不要再说那些英雄们的事情了, 其他抵抗势力的问题进展如何?", 2159308);
                                            } else {
                                              if (status == 22) {
                                                cm.sendNextPrev("…就如命令,已确认都破坏了.", 2159310);
                                              } else {
                                                if (status == 23) {
                                                  cm.sendNextPrev("嗯嗯,这样啊.", 2159308);
                                                } else {
                                                  if (status == 24) {
                                                    cm.sendNextPrev("可是啊~ 黑魔法师为什么突然改变计划呢?本来不是占领到神殿就可以了吗?虽没太大的关系,都破坏的话不就没东西好玩了吗?", 2159339);
                                                  } else {
                                                    if (status == 25) {
                                                      cm.sendNextPrevS("…破坏? 那个... 请问是什么命令?我之前都没听说过.");
                                                    } else {
                                                      if (status == 26) {
                                                        cm.sendNextPrev("阿哈, 那样看来是因为你与女神之间的战争太辛劳了所以没将命令传达给你的样子. 你问是什么命令吗?很简单的.", 2159308);
                                                      } else {
                                                        if (status == 27) {
                                                          cm.sendNextPrev("伟大的祂希望可以终结所有的战争. 接到了完全去除停滞不前的抵抗的势力的命令除了你以外的军团长们都会站出来吧.", 2159308);
                                                        } else {
                                                          if (status == 28) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/18"], [2000, 0, -100, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status == 29) {
                                                              cm.sendNext("…连神木村的一草一木都不剩全都消灭掉了...", 2159310);
                                                            } else {
                                                              if (status == 30) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [2000, 0, -100, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status == 31) {
                                                                  cm.sendNextS("(家人在神木村的南部地域耶...!)");
                                                                } else {
                                                                  if (status == 32) {
                                                                    cm.sendNextPrev("黑魔法师所希望的是将这个事情当成一个榜样给反抗军... 看来处理得很完美. 也是件好事吧?", 2159308);
                                                                  } else {
                                                                    if (status == 33) {
                                                                      cm.sendNextPrev("好啊.称为得列功的仆人也剩下没几个了.", 2159310);
                                                                    } else {
                                                                      if (status == 34) {
                                                                        cm.sendNextPrevS("…等一下. 不是说好不动南部地域吗?南部地域破坏到什么程度了?!请跟我说详细的地方...!");
                                                                      } else {
                                                                        if (status == 35) {
                                                                          cm.sendNextPrev("到什么程度啊 嗯... 当然要好好照祂指是的去做阿。接取到破坏全部的名义话当然要清除的一干二净啊。哈哈哈哈哈…你的反应怎这么敏感?有什么挂心的事情吗?", 2159308);
                                                                        } else {
                                                                          if (status == 36) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/11"], [2000, 0, -100, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status == 37) {
                                                                              cm.sendNextS("我有要去确认的事情我就先离席了…");
                                                                            } else {
                                                                              if (status == 38) {
                                                                                cm.sendNextPrev("你受到黑魔法师的宠爱并不代表你可以随便行事。我没说要做我们的事情吗?现在离开的话就是不服从命令.", 2159308);
                                                                              } else {
                                                                                if (status == 39) {
                                                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                                                } else {
                                                                                  if (status == 40) {
                                                                                    cm.sendNextS("(戴维安，母亲…希望你们没事…)");
                                                                                  } else if (status == 41) {
                                                                                    cm.sendNextPrev("也不假装有听到.切…但你说家人都在这吧?哈哈哈…祈求好运吧.", 2159308);
                                                                                  } else {
                                                                                    cm.curNodeEventEnd(true);
                                                                                    cm.dispose();
                                                                                    cm.warp(924020010, 0);
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