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
      cm.npc_ChangeController(1012106, "oid=116570", 4800, -56, 4);
      cm.npc_ChangeController(1012003, "oid=116571", 3384, 124, 4);
      cm.npc_ChangeController(1012133, 'oid=116572', 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400033, "oid=1811047", 5260, 441, 0);
      cm.npc_SetSpecialAction("oid=1811047", "summon");
      cm.npc_ChangeController(9400032, "oid=1811048", 5379, 441, 0);
      cm.npc_SetSpecialAction("oid=1811048", "summon");
      cm.npc_ChangeController(9400031, "oid=1811049", 5540, 441, 1);
      cm.npc_SetSpecialAction("oid=1811049", "summon");
      cm.npc_ChangeController(9400062, "oid=1811050", 5600, 441, 1);
      cm.npc_SetSpecialAction("oid=1811050", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=1811049", -1, 50, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("那个……你好……", 9400031);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("怎么了？", 9400032);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("那个，我听说你丢失了乌龟。", 9400031);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("我知道你一定很希望得到安慰……你一定感到非常难过……", 9400031);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("……？奇怪的家伙。我可没空管小屁孩，你如果没见过乌龟，那就一边玩去吧。", 9400032);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("其实，我也弄丢了对我来说重要的青蛙嘟嘟！我是正在对此进行调查的侦探代号BT！", 9400031);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("我现在想抓住一切线索，所以找到了你。", 9400031);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("你能告诉我关于失踪的乌龟的事情吗？", 9400031);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("我为什么要告诉你？而且，代号BT是什么啊……你没有别的名字吗？", 9400032);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("名字……有是有……但是，我……不想说……", 9400031);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("为什么啊？", 9400032);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("我……被说过好多次……名字很土气……", 9400031);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("那……那个！对不起，我似乎太着急了。", 9400031);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("我弄丢了重要的朋友……所以想着这种失踪事件会不会有共同点，就找到了你。", 9400031);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("你能告诉我一下事情的经过吗？", 9400031);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("嗯……乌龟和青蛙……我觉得应该没什么关联啊……", 9400032);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("而且，连自己的名字都不敢说的家伙，我为什么……", 9400032);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("好吧……我知道了……如果你不想说，我也不能强迫你……", 9400031);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("等下，你要把别人说的话听完啊，你也太没礼貌了！", 9400032);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("你不是说你要抓住一切线索吗，为什么这么快就放弃了！", 9400032);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom("#face1#不……你看上去不是不想说吗……你干嘛这么凶啊！嘤！", 9400031);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextNoESC_Bottom("我，我不是故意这么凶的……", 9400032);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC_Bottom("要说起来的话，我正在寻找以前生活在枫叶山丘的叫做奈奈的乌龟。", 9400032);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("那家伙从来没有出过枫叶山丘……突然就不见了。", 9400032);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("有人说看见别人把它带走了。", 9400032);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC_Bottom("啊！我的嘟嘟也是！嘟嘟也从来没有离开过森林，然后被人带走了！", 9400031);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC_Bottom("那个……我应该叫你什么呢？", 9400031);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNextNoESC_Bottom("啊，我还没说我的名字啊。我叫做剑斗，好了，现在你可以去一边玩了。", 9400032);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNextNoESC_Bottom("嘿嘿，我刚才也说过，我叫做代号BT！是正在搜查嘟嘟失踪事件的侦探！", 9400031);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNextNoESC_Bottom("原本……我是为了和平而战的勇士……不过现在得先找到消失的朋友！", 9400031);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNextNoESC_Bottom("……行了，如果你现在没什么事要找我，那就快走吧。", 9400032);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNextNoESC_Bottom("剑斗，你怎么能对别人如此失礼呢。", 9400033);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNextNoESC_Bottom("啊，吓死我了！", 9400031);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNextNoESC_Bottom("神那，我说过好几次了，别这么突然出现……", 9400032);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNextNoESC_Bottom("抱歉，我叫做神那，代号BT。", 9400033);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNextNoESC_Bottom("你能不能别用这么认真的表情说这个名字……", 9400032);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNextNoESC_Bottom("代号神那！太帅了！你还带着小猫啊！", 9400031);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNextNoESC_Bottom("我可不喜欢这个小鬼。", 9400040);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNextNoESC_Bottom("哇！还会说话？！", 9400062);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNextNoESC_Bottom("说起失踪的动物们……", 9400033);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNextNoESC_Bottom("我觉得应该是有人看中了奈奈的灵力，把它偷走了。其实，只有我和剑斗知道奈奈是灵物乌龟。", 9400033);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNextNoESC_Bottom("不过，我还是觉得有人知道了奈奈的能力，所以偷走了它。", 9400033);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNextNoESC_Bottom("看来是有点奇怪啊，代号神那？代号剑斗？", 9400031);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNextNoESC_Bottom("为什么连我都要这么叫啊。", 9400032);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNextNoESC_Bottom("能够祈雨的嘟嘟和灵物奈奈……", 9400031);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNextNoESC_Bottom("这两个动物都有着神秘的能力……是不是有点奇怪呢？！", 9400031);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNextNoESC_Bottom("别，别无视我啊……", 9400032);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNextNoESC_Bottom("看来有坏人正在偷取拥有特殊能力的动物！", 9400031);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNextNoESC_Bottom("人多力量大，我们一起调查这个事件是不是比较好呢？！", 9400031);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNextNoESC_Bottom("呃……和这种家伙……我拒绝。", 9400032);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNextNoESC_Bottom("剑斗，嘟嘟和奈奈……似乎确实有什么关联。我们和她一起找吧，看上去我们应该没什么损失。", 9400033);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNextNoESC_Bottom("要不然……我就只能诚实地报告说奈奈是因为某人所以不见了。", 9400033);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNextNoESC_Bottom("……好吧，我们一起吧。", 9400032);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNextNoESC_Bottom("哇！太好了！我们一起帅气地解决事件……", 9400031);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNextNoESC_Bottom("就像是……侦探团一样！冒险岛第一的侦探团成立！", 9400031);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNextNoESC_Bottom("我可不怎么喜欢这个主意。", 9400032);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNextNoESC_Bottom("我挺满意的。", 9400033);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNextNoESC_Bottom("不过，如果能用代号来称呼就更好了！代号剑斗和代号神那！", 9400031);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNextNoESC_Bottom("不要。", 9400032);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNextNoESC_Bottom("我觉得还不错啊。", 9400033);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNextNoESC_Bottom("#face2#嘿嘿！好极了！那我们现在就开始正式搜查吧！", 9400031);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNextSNoESC_Bottom("好，现在已经找到线索了！可以再增加一页了！");
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.forceCompleteQuest(59712);
                                                                                                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                        cm.updateInfoQuest(59762, "1=1;2=1;3=1");
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                        cm.warp(cm.getNumberFromQuestInfo(59744, 'map'), 0);
                                                                                                                                        cm.setInGameDirectionMode(false, false, false);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.npc_LeaveField("oid=1811047");
                                                                                                                                        cm.npc_LeaveField("oid=1811048");
                                                                                                                                        cm.npc_LeaveField("oid=1811049");
                                                                                                                                        cm.npc_LeaveField("oid=1811050");
                                                                                                                                        cm.dispose();
                                                                                                                                      } else {
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
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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