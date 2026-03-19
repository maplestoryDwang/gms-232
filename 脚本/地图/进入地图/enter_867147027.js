var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401126, "oid=39263915", -420, -570, 32, -470, -370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39263915", "summon", 0, 0);
      cm.npc_ChangeController(9401127, "oid=39263916", -330, -530, 13, -380, -280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39263916", "summon", 0, 0);
      cm.npc_ChangeController(9401125, "oid=39263917", -220, -470, 11, -270, -170, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=39263917", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -200, -420]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("小心点下来哦～亲爱的～ ", 37, 9401031, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=39263916", 1, 220, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("求求那家伙别再说“亲爱的”了。", 37, 9401033, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你就当做是爱称吧，呼呼", 37, 9401031, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=39263915", 1, 250, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=39263917", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=39263917", 1, 220, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我去！为什么不抓住我？", 37, 9401032, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("… ", 37, 9401031, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39263915"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom('呜哇啊啊啊啊！', 37, 9401032, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(12, [2000, 150, -340, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=39263915", 1, 400, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.sendNormalTalk_Bottom("出什么事了？", 37, 9401033, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("啊哈哈哈，是补给箱！噢耶", 37, 9401032, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("队长，快打开看看！米西蒂想知道里面有什么～ ", 37, 9401032, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=39263915", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 220);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_OneTimeAction(5, 2000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(5, 2000);
                                                    cm.sendNormalTalk_Bottom("咳呃~！是珍贵的技能！", 37, 9401032, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("不要忘记这是米西蒂发现的！诶嘿嘿，真开心，才刚刚开始就获得了好道具！", 37, 9401032, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……哈，真是没品位。", 37, 9401031, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=39263915"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.sendNormalTalk_Bottom("嗯？我吗？", 37, 9401032, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("你觉得这里除了你，还会有人没品味吗？", 37, 9401031, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("当然可能啊，你干嘛招惹我！", 37, 9401032, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=39263915"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我们是怎么进入同一个远征队的呢？", 37, 9401031, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你什么意思？", 37, 9401032, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("你知道吗？我们和你不一样，我们是为了名誉而冒险。", 37, 9401031, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("那我呢？你觉得我是为了什么才来到这里的？", 37, 9401032, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=39263917", 1, 50, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("你怎么不回答我！！！", 37, 9401032, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("米西蒂，你忍着点。", 37, 9401033, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b洛尼！你为什么只对米西蒂那样说话呢？", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("呼，让我和那孩子加入一个远征队简直伤自尊。", 37, 9401031, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#b我无法理解你。', 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("怎么了？大家虽然都不说，但想法不都是一样的吗？", 37, 9401031, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b完全不是，我们之中要数米西蒂最喜欢冒险了。", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("算了，随你怎么想吧。", 37, 9401031, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.eventSKill(0);
                                                                                                        cm.dispose();
                                                                                                        var O = cm.getEventManager("深渊远征队_教程9");
                                                                                                        O.startInstance(cm.getPlayer());
                                                                                                        cm.forceStartQuest(64785, '');
                                                                                                        cm.npc_LeaveField("oid=39263915");
                                                                                                        cm.npc_LeaveField("oid=39263915");
                                                                                                        cm.npc_LeaveField("oid=39263916");
                                                                                                        cm.npc_LeaveField("oid=39263916");
                                                                                                        cm.npc_LeaveField("oid=39263917");
                                                                                                        cm.npc_LeaveField("oid=39263917");
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}