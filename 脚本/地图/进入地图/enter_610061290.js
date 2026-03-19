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
      cm.updateInfoQuest(61333, "act1=610061290");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2835131", 550, -128, 2, 500, 600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2835131", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2835132", 1510, -128, 17, 1460, 1560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2835132", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#我这是在哪？\r\n我产生幻觉了吗？", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2835131", -1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2835131", 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#可能是我最近太累了吧……", 37, 9201539, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2835131", 1, 300, 80);
                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#你就是那个在找我的人？", 37, 9201539, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2835132", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#你是谁？", 37, 9201539, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2835132", -1, 200, 50);
                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=2835132", 0);
                                cm.sendNormalTalk_Bottom("#face0#呵呵。\r\n你应该已经知道了吧。", 37, 9201534, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2835131", 1, 100, 80);
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#你是……？", 37, 9201539, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("说出来吧。", 37, 9201534, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 0, 1100, -100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3##b纳瑞坎！#k", 37, 9201539, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我既不是你同僚口中的童话故事，也不是你眼中的极恶魔鬼。", 37, 9201534, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#那……你到底是什么？", 37, 9201539, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我只是个渴求知识的魔法师而已，为了我的信仰牺牲了一切。", 37, 9201534, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#跟你很相似。", 37, 9201534, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#你的信仰……#b幻日#k吗？", 37, 9201539, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……', 37, 9201534, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#为什么幻日对你那么重要？", 37, 9201539, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#是为了获得至高无上的力量，统治世界吗？", 37, 9201539, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你对我确实有所了解，但了解得并不全面。", 37, 9201534, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我从未跟人说过我的经历……", 37, 9201534, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('但我愿意跟你分享。', 37, 9201534, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2835132", -1, 100, 80);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face3#……！！", 37, 9201539, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("这下你懂了吧？\r\n人们说我痴迷于幻日的力量。\r\n但这才是事情的真相。", 37, 9201534, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("最后，我被困在这城堡之中，在阴阳两界徘徊。\r\n但你的声音唤醒了我，让我重获新生。", 37, 9201534, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#呃，我倒也不是故意这样的。", 37, 9201539, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#那就是命运弄人了。", 37, 9201534, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face3#那个……我很同情你的遭遇，真的很同情。", 37, 9201539, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#但你得理解的是，你的行为吓着了其他人。在他们看来，你只是想把幻日据为己有而已，你是个危险的存在。", 37, 9201539, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#那些促使你做出如此决定的人——你的反转界同胞……你这样看待他们，难道他们不也是这样看待你的吗？", 37, 9201539, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("幻日必须受到控制。\r\n总得有人承担这个责任。", 37, 9201534, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("而分享强大的力量往往会导致背叛。", 37, 9201534, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#这我不在乎！\r\n我只在乎你的故事，和到底发生了什么。", 37, 9201539, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#确实，现在这点很重要。", 37, 9201539, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("或许我能帮助你。\r\n如果你能先帮我的话。", 37, 9201534, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face3#我？帮你？怎么帮？", 37, 9201539, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("帮我离开这里，夺取幻日。\r\n有了你找到的幻日碎片，这并不是难事。", 37, 9201534, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#求求你……让我有机会纠正我过去犯下的错误吧。", 37, 9201534, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#我为什么要冒这么大的险？", 37, 9201539, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("我需要你，而你也需要我。", 37, 9201534, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("你可以让整个世界都知道我的存在，向那些视你为狂人的家伙证明你没有错。", 37, 9201534, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("只要我取回幻日，我就赐予你无限的知识，让你的世界永久和平。", 37, 9201534, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("我向你保证。", 37, 9201534, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#……", 37, 9201539, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#我现在很虚弱。\r\n一无所有。", 37, 9201534, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我需要像你这样学识渊博的人帮助我找到幻日。\r\n仅此而已。", 37, 9201534, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#哈……真可怜。\r\n居然会需要我这种人的帮助，你也真是走投无路了。", 37, 9201539, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("不，我需要的是你。\r\n不是你这样的人。", 37, 9201534, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#我没法向你保证什么。\r\n但你的提议确实让我有点兴趣。", 37, 9201539, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#我只有一个条件。", 37, 9201539, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#等你得到幻日，就必须立刻离开冒险岛世界。\r\n不能让我们的世界承受如此巨大的风险。", 37, 9201539, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我答应你……遗憾的是我们没有机会真正见上一面。", 37, 9201534, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#……", 37, 9201539, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                      cm.warp(610061300, 0, true);
                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                      cm.npc_LeaveField("oid=2835131");
                                                                                                                                                      cm.npc_LeaveField("oid=2835131");
                                                                                                                                                      cm.npc_LeaveField("oid=2835132");
                                                                                                                                                      cm.npc_LeaveField("oid=2835132");
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