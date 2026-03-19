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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063250");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201567, "oid=2717586", 3200, 275, 6, 3150, 3250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2717586", 'summon', 0, 0);
      cm.npc_ChangeController(9201566, "oid=2717587", 3100, 275, 2, 3050, 3150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2717587", "summon", 0, 0);
      cm.npc_ChangeController(9201567, "oid=2717588", 3050, 275, 2, 3000, 3100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2717588", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(16, 0);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=2717586", "hurt", 0, 0);
          cm.npc_SetForceMove("oid=2717587", 1, 400, 300);
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=2717586");
            cm.npc_LeaveField("oid=2717586");
            cm.inGameDirectionEvent_OneTimeAction(16, 0);
            cm.npc_SetSpecialAction("oid=2717587", 'hurt', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=2717587");
              cm.npc_LeaveField("oid=2717587");
              cm.npc_SetForceMove("oid=2717588", 1, 500, 300);
              cm.inGameDirectionEvent_OneTimeAction(16, 0);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2717588", 'hurt', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2717588");
                  cm.npc_LeaveField("oid=2717588");
                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("堵不住入口，我们就完蛋了。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                        cm.npc_ChangeController(9201539, "oid=2717796", 4110, 200, 17, 4060, 4160, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2717796", "summon", 0, 0);
                        cm.npc_SetForceMove("oid=2717796", -1, 200, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(5200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3600, 450);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.sendNormalTalk_Bottom("你是……？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#你肯定是宗师的一员吧。\r\n居然能够抵抗得了我的毒素。", 37, 9201539, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('啊，你就是张博士吧！', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#没错，宗师。", 37, 9201539, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我可不是什么宗师。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#那你是谁？", 37, 9201539, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("给你个提示……要有随手关门的习惯哦，穿越传送门也要关。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……区区冒险者，居然偷用我的传送门，有够“英雄”的。", 37, 9201539, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("谁找到就归谁。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#还挺幽默。\r\n可惜，你来晚了。", 37, 9201539, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#纳瑞坎已经得到了幻日。没人能阻止他了。", 37, 9201539, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("他由绯红之心对付，他不会成功的。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#……那又如何？", 37, 9201539, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('哈？', 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2717796", -1, 50, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face5#为什么做这种无用功？纳瑞坎说得对……自由只会让人们堕落。", 37, 9201539, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#但在唯一强权者的控制下，所有痛苦都会消失。", 37, 9201539, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#世界终将引来和平。\r\n我不理解你为什么要阻止他。", 37, 9201539, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("你真的以为，没人会站出来反抗一个企图征服世界的疯子？", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("你有没有想过，纳瑞坎为了他所谓的“世界和平”，杀害了多少无辜的人？", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#他们那是自作自受！", 37, 9201539, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=2717796", 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face5#我……我厌倦了。\r\n厌倦了被人冷落，厌倦了被人忽视，我的父母、我的同僚……所有人都抛弃了我。", 37, 9201539, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=2717796", -1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face5#只有纳瑞坎…只有他……\r\n需要我。", 37, 9201539, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("……我说你不会是在逗我吧。", 57, 0, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                        cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201539, null, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("张博士，你怎么能爱上纳瑞坎这种人？\r\n他让你帮他杀害了自己的家人啊！", 57, 0, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face2#那是因为他的家人与他为敌！\r\n如果不给予支持，家人和路人也没有什么区别！", 37, 9201539, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#他凭什么要在乎一帮瞧不起他的梦想的人？\r\n他就应该杀了他们！", 37, 9201539, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("所以我说，为了他的梦想，多少人得死？", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face5#你……你就是不明白。\r\n我没法说服你。", 37, 9201539, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face5#我要阻止你，让纳瑞坎赢，这样我就再也不是孤单一人了。", 37, 9201539, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=2717796", "attack", 0, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                                    cm.npc_ChangeController(9201580, "oid=2718791", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718791", 'summon', 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201580, "oid=2718792", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718792", "summon", 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201580, "oid=2718793", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718793", "summon", 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201580, "oid=2718794", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718794", "summon", 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201566, "oid=2718795", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718795", 'summon', 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201566, "oid=2718796", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718796", "summon", 0, 0);
                                                                                                                                    cm.npc_ChangeController(9201566, "oid=2718797", 2750, 275, 15, 2700, 2800, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2718797", "summon", 0, 0);
                                                                                                                                    cm.npc_SetForceMove("oid=2718791", 1, 350, 200);
                                                                                                                                    cm.npc_SetForceMove("oid=2718792", 1, 300, 300);
                                                                                                                                    cm.npc_SetForceMove("oid=2718793", 1, 250, 200);
                                                                                                                                    cm.npc_SetForceMove("oid=2718794", 1, 210, 250);
                                                                                                                                    cm.npc_SetForceMove("oid=2718795", 1, 180, 200);
                                                                                                                                    cm.npc_SetForceMove("oid=2718796", 1, 130, 300);
                                                                                                                                    cm.npc_SetForceMove("oid=2718797", 1, 100, 300);
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      cm.effect_NormalSpeechBalloon("！！！", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                        cm.sendNormalTalk_Bottom("他们是……？", 57, 0, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face5#正如我所说，宗师们也被腐化了。", 37, 9201539, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在他们是我和纳瑞坎的忠实奴仆了。\r\n这下事情不就简单多了吗？", 37, 9201539, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("你怎么能如此残忍？他们可是——", 57, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#别跟我来这套！\r\n敢与我们为敌的人，只有死路一条。", 37, 9201539, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#这是为了永久的和平，纳瑞坎和我毕生都在诉求的和平。", 37, 9201539, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("你疯了。我不会让你得逞的。", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face5#你想怎样与我无关。\r\n因为你很快就会死了。", 37, 9201539, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_setForceFlip("oid=2717796", 1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_SetForceMove("oid=2717796", 1, 400, 100);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=2717796");
                                                                                                                                                            cm.npc_LeaveField("oid=2717796");
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.eventSKill(0);
                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
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