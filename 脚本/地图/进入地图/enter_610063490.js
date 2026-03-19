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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063490");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.forceCompleteQuest(61358);
      cm.npc_ChangeController(9201539, "oid=2726926", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2726926", "summon", 0, 0);
      cm.npc_ChangeController(9201570, "oid=2726927", -918, 772, 3, -968, -868, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2726927", "summon", 0, 0);
      cm.npc_ChangeController(9201569, "oid=2726928", -1146, 439, 3, -1196, -1096, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2726928", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2726927", "cry", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("*抽泣 抽泣*", 37, 9201570, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -950, 800);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2726928", 1, 50, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("别哭了，苏巴尼。\r\n不然被父亲看见，你又得挨骂了。", 37, 9201569, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("但是……*抽泣*", 37, 9201570, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("父亲没说错。\r\n未来我们中肯定会有一人继承他的职责，守护幻日。", 37, 9201569, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("所以我们必须加倍努力训练，做好准备。", 37, 9201569, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("但米勒德是长子……我没有必要……", 37, 9201570, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("长子又怎样。\r\n有资格成为幻日守护者的只有反转界最强大的战士。\r\n比如父亲。", 37, 9201569, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("说实话，我觉得米勒德不具备那样的实力。", 37, 9201569, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=2726927");
                                        cm.npc_SetForceMove("oid=2726927", -1, 50, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("纳瑞！！\r\n别这么说啊……万一被别人听到怎么办？", 37, 9201570, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我不过是实话实说而已。", 37, 9201569, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("那……那我将来……也有机会成为幻日守护者吗？", 37, 9201570, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("如果你努力学习，训练再加把劲的话，当然有机会。", 37, 9201569, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("纳瑞……你想成为幻日守护者吗？", 37, 9201570, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("所以你才那么努力训练吧？\r\n父亲也因此最信任你？", 37, 9201570, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=2726928", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("……不，并不是这样。", 37, 9201569, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("还有，你别这么说，父亲对我们的信任是平等的。", 37, 9201569, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("如果你不想成为守护者……那训练为什么这么用功呢？", 37, 9201570, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2726928", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你还记得有次我们被坏人袭击了吗？", 37, 9201569, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("要不是父亲及时赶到……母亲就危险了。", 37, 9201569, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("记得……我那时好害怕。", 37, 9201570, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("我当时太过弱小，无法阻止他们。\r\n但我想要守护母亲。", 37, 9201569, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我的血亲都在战争中丧生，是母亲收留了我。", 37, 9201569, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("我知道是她求父亲收养我的……她是我见过的最善良的人。", 37, 9201569, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我要为她而战。\r\n父亲不在她身边时就由我来守护她。", 37, 9201569, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我也要守护她！我也爱母亲！", 37, 9201570, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("那我们应该齐心协力，刻苦训练。\r\n父亲为整个反转界承担起一份重任。", 37, 9201569, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("当他无法抽身守护他的家人，我们就得挺身而出。", 37, 9201569, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_ChangeController(9201568, "oid=2727600", -632, 772, 3, -682, -582, 1, true, 0, false);
                                                                                              cm.npc_SetSpecialAction("oid=2727600", 'summon', 0, 0);
                                                                                              cm.npc_SetForceMove("oid=2727600", -1, 200, 100);
                                                                                              cm.sendNormalTalk_Bottom("你真是个好孩子，纳瑞。", 37, 9201568, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("母亲。", 37, 9201569, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=2726927", 1);
                                                                                                  cm.sendNormalTalk_Bottom('母亲！', 37, 9201570, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("苏巴尼，听说父亲又骂你了？发生了什么事？", 37, 9201568, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=2726927", -1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=2726927", 1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我……训练不够认真……", 37, 9201570, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=2727600", -1, 50, 50);
                                                                                                                  cm.sendNormalTalk_Bottom("你知觉得反转界的人们应该如何善用幻日的力量呢？", 37, 9201568, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("用它守护反转界？", 37, 9201570, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("没错，但不只是反转界。\r\n我们有责任守护所有受黑暗势力侵袭的时空。", 37, 9201568, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我很高兴你们愿意守护我，但不要忘记，我，也有守护他人的义务。", 37, 9201568, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("苏巴尼，纳瑞坎。", 37, 9201568, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("你们在训练中获得的力量不仅要用于守护家人。\r\n还要用于守护别人。", 37, 9201568, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom('……', 37, 9201569, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("纳瑞，你是个奇特的孩子。\r\n注定成为我们之中最强大的战士。", 37, 9201568, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("父亲和我都清楚这点。\r\n但一定要将你那份力量用在正途。", 37, 9201568, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("如您所愿，母亲。", 37, 9201569, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=2726927", -1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=2726927", 1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("我也会！我也要守护大家！", 37, 9201570, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("谢谢你们两个。\r\n我爱你们。", 37, 9201568, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("我们也爱你，母亲！\r\n我要成为最强的魔法师\r\n然后做许多许多好事！", 37, 9201570, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=2726927", -1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("父亲让我和你的弟弟来帮你训练。\r\n我们一起训练吧。", 37, 9201569, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("谢谢！我一定尽力！", 37, 9201570, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=2726928", -1);
                                                                                                                                                                cm.npc_SetForceMove("oid=2726928", -1, 200, 100);
                                                                                                                                                                cm.npc_SetForceMove("oid=2726927", -1, 200, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_LeaveField("oid=2726928");
                                                                                                                                                                  cm.npc_LeaveField("oid=2726928");
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_LeaveField("oid=2726927");
                                                                                                                                                                    cm.npc_LeaveField("oid=2726927");
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.npc_SetForceMove("oid=2727600", -1, 50, 50);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("纳瑞……希望这孩子不要走上弯路啊……", 37, 9201568, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#他们关系真好。", 37, 9201539, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#但却发生了这种事……", 37, 9201539, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                                          cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1;5=1;6=1");
                                                                                                                                                                                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                                          cm.eventSKill(0);
                                                                                                                                                                                          cm.warp(610063500, 0, true);
                                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                          cm.npc_LeaveField("oid=2726926");
                                                                                                                                                                                          cm.npc_LeaveField("oid=2726926");
                                                                                                                                                                                          cm.npc_LeaveField("oid=2727600");
                                                                                                                                                                                          cm.npc_LeaveField("oid=2727600");
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
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}