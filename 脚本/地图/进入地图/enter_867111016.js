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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1664856", 1354, 1920, 0);
      cm.npc_SetSpecialAction("oid=1664856", 'summon');
      cm.npc_ChangeController(9400032, "oid=1664857", 1270, 1920, 0);
      cm.npc_SetSpecialAction("oid=1664857", "summon");
      cm.npc_ChangeController(9400033, "oid=1664858", 1140, 1920, 0);
      cm.npc_SetSpecialAction("oid=1664858", "summon");
      cm.npc_ChangeController(9400034, "oid=1664859", 1500, 1920, 1);
      cm.npc_SetSpecialAction("oid=1664859", 'summon');
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1300, 1890);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18#与动物销售商见面的侦探团一行人……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(3375);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("你们的表情为什么这样？", 9400034);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("其实我们正在寻找失踪的动物。而且我们听说了勇士部落有人在出售珍稀动物的消息才来了这里。", 9400031);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("#face2#我们还以为我们的朋友被你抓了……", 9400031);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1664859"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("哎呀，你们是弄错了啊……你们弄丢的都是拥有特殊能力的动物吗？", 9400034);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("#face3#是的，我的嘟嘟能够祈雨，奈奈，嗯……不知道有什么能力，反正也很重要。", 9400031);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("奈奈是一种灵物，应该嘟嘟也是如此。.", 9400033);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("是不是这位赏金猎人所说的宇宙APORD绑架了嘟嘟和奈奈呢？", 9400033);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("那么你们的动物很有可能成为了那些家伙的目标。", 9400034);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("那个……赏金猎人。", 9400031);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("#face2#你能和我们一起寻找宇宙APORD吗？", 9400031);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("#face0#我干嘛要这么做？", 9400034);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("杰特在寻找宇宙APORD，我们在寻找嘟嘟和奈奈。.", 9400031);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("如果我们一起调查，说不定你能快一点找到APORD的痕迹。", 9400031);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom("而我们也能早日看到嘟嘟和奈奈了。", 9400031);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextNoESC_Bottom("啧啧，我在追查悬赏犯人的时候不和别人合作。而且你们还这么业余。", 9400034);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC_Bottom("追查悬赏犯人时，需要比敌人更快的洞察力和严谨的推理能力，所以……", 9400034);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("#face2#好极了！侦探团又有新的同伴了！", 9400031);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("我的话还没说完呢！你这小鬼真是随着自己的意思说话啊！", 9400034);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC_Bottom("而且，就算成功了……我不是还得跟你们分悬赏金嘛，那我可不要。", 9400034);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC_Bottom("#face1#什么？！你不要帮我们吗？！就因为我们是业余的？！", 9400031);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNextNoESC_Bottom("#face2#我和这两位都是冒险岛世界的勇士哦，我们虽然是第一次追查罪犯，但是我们有信心。", 9400031);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNextNoESC_Bottom("你们的信心又不能给我带来钱。", 9400034);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNextNoESC_Bottom("#face1#真是个不可理喻的家伙，我才不要和这样的家伙合作呢。", 9400032);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNextNoESC_Bottom("喂！我已经追查了这些家伙很久，好几年前就来了冒险岛世界。", 9400034);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNextNoESC_Bottom("我已经努力了这么久，才不要被你们这些小鬼耽误了。", 9400034);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNextNoESC_Bottom("你们应该不会天真地以为我会无条件跟你们合作吧？", 9400034);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNextNoESC_Bottom("那我们要怎么做你才能帮我们呢？！", 9400031);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNextNoESC_Bottom("我都说不会帮你们了！你有没有在听我说话啊？！", 9400034);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNextNoESC_Bottom("赏金猎人当然因为“钱”才会有所行动。", 9400033);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNextNoESC_Bottom("没错，都是些贪财的家伙。", 9400032);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNextNoESC_Bottom("不，等下……", 9400034);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNextNoESC_Bottom("#face2#好，那我们就应该找一下能够给他的值钱东西！我们要怎么做呢？！", 9400031);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNextNoESC_Bottom("我不需要！喂！", 9400034);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNextNoESC_Bottom("我们能够找到的应该就是从怪物身上获得的战利品吧？", 9400033);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNextNoESC_Bottom("切，我才不要去迎合这种家伙。", 9400032);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNextNoESC_Bottom("#face1#剑斗！侦探团就应该团结一心！我们不能互相讨厌。", 9400031);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNextNoESC_Bottom("你们听我说啊！喂！", 9400034);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNextNoESC_Bottom("那我们就各自尽自己所能，去搜集战利品吧。这样的话他应该就会满足了吧。", 9400033);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNextNoESC_Bottom("#face2#OK！好极了！那侦探团暂时解散！", 9400031);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=1664856", -1, 1000, 200);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=1664857", -1, 1000, 150);
                                                                                                        cm.npc_SetForceMove("oid=1664858", -1, 1000, 120);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=1664856");
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=1664857");
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=1664858");
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1664859"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNextNoESC_Bottom("#face0#……这些家伙是怎么回事……", 9400034);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.forceStartQuest(59718, '');
                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                  cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                                                                  cm.setInGameDirectionMode(false, false, false);
                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                  cm.npc_LeaveField("oid=1664859");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;