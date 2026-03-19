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
      cm.npc_ChangeController(1012106, "oid=116581", 4770, -56, 5);
      cm.npc_ChangeController(1012003, "oid=116582", 3302, 124, 3);
      cm.npc_ChangeController(1012133, "oid=116583", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400033, "oid=1812384", 5260, 441, 0);
      cm.npc_SetSpecialAction("oid=1812384", "summon");
      cm.npc_ChangeController(9400032, "oid=1812385", 5379, 441, 0);
      cm.npc_SetSpecialAction("oid=1812385", "summon");
      cm.npc_ChangeController(9400031, "oid=1812386", 5560, 441, 1);
      cm.npc_SetSpecialAction("oid=1812386", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=1812386", -1, 50, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("首先，我们既然结成了侦探团，那应该做些什么呢？", 9400031);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("等下，我都说了我不喜欢这个名字……", 9400032);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("嘤嘤，为什么……好不容易我才遇到了你们这样的同伴……", 9400031);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("首先，神那！你能感觉到奈奈的波动？", 9400032);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("嗯……其实非常微弱……我不能确定这是不是奈奈的波动，不过……", 9400033);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom('在哪里？！', 9400032);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("我感觉勇士部落那边应该有什么……", 9400033);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("啊，勇士部落？之前明明女士说勇士部落有人正在贩卖珍稀动物。是不是有什么关联呢？", 9400031);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("#face0#难道嘟嘟会被卖了吗！！！", 9400031);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("#face0#如果他们把奈奈卖了，我就要把那些家伙劈成两半！！", 9400032);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("哎呀……代号剑斗，看来你很珍惜奈奈啊……奈奈一定会感受到你的心意的……", 9400031);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("#face1#谁喜欢那个慢吞吞的家伙啊！我只是因为别人偷了我的东西而不爽。", 9400032);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("你这样欺骗自己真的好吗，剑斗。", 9400033);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("怎么连你也这样！", 9400032);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("那我们就先去勇士部落看看吧。在这里也得不到什么东西了。", 9400031);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("好的，那我们现在就出发吧？", 9400032);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("在出发之前，先等一下。", 9400033);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("我虽然在勇士部落那边感受到了奈奈的波动，但是太微弱了……", 9400033);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("那要怎么办呢？", 9400032);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("我需要确认一下现在感觉到的波动是不是来自于奈奈。", 9400033);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom('你要怎么……确认呢？', 9400031);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextNoESC_Bottom("奈奈的灵力很强，所以它在经过的地方都会留下灵力的粒子。", 9400033);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC_Bottom("这附近的动物很多，在动物体内可能会留下奈奈的粒子……", 9400033);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("虽然只凭一个粒子无法断定就是奈奈，但是如果有多个粒子，应该就能确定了。", 9400033);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("好的！那么，只要多多搜集那种粒子就行了吧？", 9400031);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC_Bottom("嗯，尽可能多搜集一些，我就能更加确定。", 9400033);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNextSNoESC_Bottom("嗯，接下来是搜集灵力啊……现在还能有吗，让我搜集一下看看吧。");
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                cm.setInGameDirectionMode(false, false, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.npc_LeaveField("oid=1812384");
                                                                cm.npc_LeaveField("oid=1812384");
                                                                cm.npc_LeaveField("oid=1812385");
                                                                cm.npc_LeaveField("oid=1812386");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;