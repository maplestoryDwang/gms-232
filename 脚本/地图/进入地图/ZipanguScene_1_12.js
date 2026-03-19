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
      cm.forceCompleteQuest(58729);
      cm.forceStartQuest(58701, "appear");
      cm.updateInfoQuest(58711, "10=4;0=2;1=3;2=4;3=4;4=4;5=4;6=4;7=4;8=4;9=4");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111000, "oid=3542109", 2395, -290, 12, 2345, 2445, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3542109", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("给，我把火之五行带回来了。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getFire", "oid=3542109"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.sendNormalTalk_Bottom("#face1#真的很谢谢你。托你的福，解决了一个难题……。", 37, 9111000, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那些……狸猫妖怪们……。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3542109"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("我记得它们说过要离开妖怪森林……！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我听说人类讨伐了狸猫山丘……\r\n感觉它们好可怜……。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……所以呢。", 37, 9111000, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#……所以那又怎么样？", 37, 9111000, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relBreak", "oid=3542109"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face2#我才不管那些狸猫好不好，我只在乎我的妹妹！", 37, 9111000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#我只要关心我妹妹一个就够了……。", 37, 9111000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#至于那些自私的妖怪……\r\n只要能让我妹妹恢复健康，别说死掉数百只，哪怕死掉数千只都不要紧！", 37, 9111000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……我回来的路上遇到你妹妹了。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……。", 37, 9111000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("……她很怜悯那些狸猫妖怪，为它们举行了荐度斋。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#……我妹妹真傻。", 37, 9111000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#现在都什么时候了，还想着帮那些妖怪处理后事……。", 37, 9111000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("她相信总有什么事情是人类和妖怪可以一起做的……。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#她就是这点最傻！", 37, 9111000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#那些妖怪是因为在村里造成了危害，才被赶出我们村庄的。", 37, 9111000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#不管我们怎么澄清我们是清白的，都没人肯信。\r\n毕竟我妹妹是妖怪……而且常常有妖怪来我们家。", 37, 9111000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#最后，我们只好跑到这偏僻的蘑菇神社里定居下来。", 37, 9111000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#……你知道当我带着生病的妹妹刚开始在这里住下来的时候，他们为我们做了什么吗？", 37, 9111000, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#……什么都没做。", 37, 9111000, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#想当初他们都把我妹妹当成是特殊人物，各种来找我们帮忙……。\r\n……等我们真的需要帮助的时候，却鬼影都不见一个了！", 37, 9111000, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(9111001, "oid=3543511", 1660, -290, 46, 1610, 1710, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=3543511", "summon", 0, 0);
                                                                    cm.npc_SetForceMove("oid=3543511", 1, 150, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=3543511", 'stand2', 0, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……姐姐……。", 37, 9111001, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.npc_SetSpecialAction("oid=3543511", "die1", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=3543511");
                                                                            cm.npc_LeaveField("oid=3543511");
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3542109"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.npc_ChangeController(9111051, "oid=3543757", 1850, -290, 9, 1800, 1900, 0, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=3543757", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0##p9111001#！", 37, 9111000, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("她怎么突然晕倒了？！", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#这是因为#b#p9111001##k她体内那该死的妖怪之血开始躁动了！", 37, 9111000, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("妖怪之血开始躁动？？", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2##b#p9111001##k是半妖。她体内封印着妖怪之血。", 37, 9111000, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=3543757", "overpower2", 0, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=3543757");
                                                                                            cm.npc_LeaveField("oid=3543757");
                                                                                            cm.npc_ChangeController(9111031, "oid=3544144", 1850, -290, 9, 1800, 1900, 0, true, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=3544144", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=3544144", "fallready", 0, 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2##p9111001#！！！", 37, 9111000, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 140);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_QTE(0);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                        cm.inGameDirectionEvent_QTE(7);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=3544144", "falldown", 0, 1);
                                                                                                            cm.inGameDirectionEvent_OneTimeAction(8, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=3544144");
                                                                                                              cm.npc_LeaveField("oid=3544144");
                                                                                                              cm.npc_ChangeController(9111051, "oid=3544792", 1850, -290, 9, 1800, 1900, 0, false, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=3544792", "summon", 0, 0);
                                                                                                              cm.sendNormalTalk_Bottom("#face2#平时她的妖力都被封印住了，\r\n但只要她稍微受累，体内的妖怪之血就会躁动起来，试图侵蚀她的人身。", 37, 9111000, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#因为她不是真正的妖怪，仅以人类的躯体是扛不住的……。", 37, 9111000, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#……你说过刚才#b#p9111001##k举行了荐度斋是吧？", 37, 9111000, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('……？！', 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#她擅自跑出去已经很冒险，竟然还施展了妖力……。", 37, 9111000, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#你简直就是把这孩子往死路上推啊！", 37, 9111000, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("……对，对不起。我完全没想到会这样。", 57, 0, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#……不……。", 37, 9111000, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#……我不需要你的道歉。如果你真的担心#b#p9111001##k，就帮我做件事。", 37, 9111000, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#……我们很需要你的帮助……。", 37, 9111000, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#……请……务必……", 37, 9111000, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#……救救我妹妹……。", 37, 9111000, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_LeaveField("oid=3542109");
                                                                                                                                                  cm.npc_LeaveField("oid=3542109");
                                                                                                                                                  cm.npc_LeaveField("oid=3544792");
                                                                                                                                                  cm.npc_LeaveField("oid=3544792");
                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_SlideText("#fs15#继续。", 1, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                      cm.dispose();
                                                                                                                                                      cm.warp(800020015, 0, false);
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}