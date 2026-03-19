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
      cm.npc_ChangeController(9401071, "oid=200545", 765, -265, 24, 715, 815, 5, true, 0, false);
      cm.npc_ChangeController(9401072, "oid=200546", 868, -265, 23, 868, 918, 5, true, 0, false);
      cm.npc_ChangeController(9401073, "oid=200547", 1295, -265, 22, 1245, 1345, 1, false, 0, false);
      cm.npc_ChangeController(9401074, "oid=200548", 956, -265, 23, 906, 1006, 1, false, 0, false);
      cm.npc_ChangeController(9401075, "oid=200549", 1019, -265, 23, 969, 1069, 1, false, 0, false);
      cm.npc_ChangeController(9401076, "oid=200550", 560, -265, 24, 510, 610, 0, false, 0, false);
      cm.npc_ChangeController(9401077, "oid=200551", 407, -265, 20, 357, 457, 0, false, 0, false);
      cm.npc_ChangeController(9401078, "oid=200552", 1162, -265, 23, 1112, 1212, 1, false, 0, false);
      cm.npc_ChangeController(9401079, "oid=200553", 1089, -265, 23, 1039, 1139, 1, false, 0, false);
      cm.npc_ChangeController(9401080, 'oid=200554', 486, -265, 20, 436, 486, 0, false, 0, false);
      cm.npc_ChangeController(9401081, "oid=200555", 328, -265, 20, 278, 378, 0, false, 0, false);
      cm.npc_ChangeController(9401084, "oid=200556", 155, -265, 20, 105, 205, 0, false, 0, false);
      cm.npc_ChangeController(9401082, "oid=200557", 86, -265, 19, 36, 136, 0, false, 0, false);
      cm.npc_ChangeController(9401083, 'oid=200558', 1231, -265, 22, 1181, 1281, 1, false, 0, false);
      cm.npc_ChangeController(9400445, "oid=200559", 238, -265, 20, 188, 288, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 2000, 310, -280);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 1160, -280);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 760, -240);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#你们的意思是要把#b你们的配件#k……不……#b身体的一部分#k给杰斯吗……？", 36, 9401072, 0, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("好像也不是……不可以。", 36, 9401080, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我举双手双脚赞成！只要可以救杰斯！", 36, 9401074, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("只要可以报恩，我们什么都愿意做。\r\n如果可以救杰斯的话，这点代价又算得了什么呢？", 36, 9401075, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你们……可能会失去一条腿一只手臂。\r\n你们的脸有可能会变得很可怕……", 36, 9401072, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("对于准备去到外面世界的你们来说……那应该是一件大事吧。\r\n可能会很难独立……即便这样……", 36, 9401072, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("没时间废话了。\r\n快点开始吧。", 36, 9401081, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你们……", 36, 9401072, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("既然主意已定，那就开始行动吧……！", 36, 9400434, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.forceCompleteQuest(64938);
                                        cm.forceCompleteQuest(64944);
                                        cm.fieldEffect_Hero9(0, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound2/PL_Beautyroid.img/Beautyroid3_MoreHumanThanHuman", 100);
                                          cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/Beautyroid/41", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('1', "Map/EffectPL.img/Beautyroid/42", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('2', "Map/EffectPL.img/Beautyroid/43", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('3', "Map/EffectPL.img/Beautyroid/44", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 740, -240);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("杰……杰斯？", 36, 9401072, 0, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("杰斯，快醒醒……！", 56, 0, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#杰斯！睁开眼睛！快点！睁开眼睛！杰斯！", 36, 9401076, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#呃……呃呃……好晕……", 36, 9401071, 1, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("杰斯……！太好了……真的太好了……！", 36, 9401072, 1, 1);
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
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#呜……呜呜……我没有哭！我只是……被灰尘迷住眼睛了……", 36, 9401079, 0, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#真是太好了，杰斯……", 36, 9401078, 1, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#匹比……#h0#……？\r\n还有大家……发生什么事了……？阿特利埃……", 36, 9401071, 1, 1);
                                                                          cm.setAccountQuestInfo(226, "count=602;T=20200515001127");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("完全奔溃了，你成功了，杰斯！", 56, 0, 1, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#那就好！\r\n但，但是……我怎么还活着……", 36, 9401071, 1, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我发现你的时候，无数的拟真机器人包裹着你的身体。", 56, 0, 1, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("可能多亏了他们，在爆炸的同时才没有生命危险。\r\n但……受了很重的伤。", 56, 0, 1, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#啊，这样看来我的身体……？咦……？", 36, 9401071, 1, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("为了救你，我们别无他法。\r\n只能用拟真机器人部件取代你的身体部位。", 36, 9401072, 1, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("不是的。现在。完整的人类。像我一样。", 36, 9401086, 1, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#工厂都已经倒塌了……这么多的部件是从哪里找来的？", 36, 9401071, 1, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("是这些#b拟真机器人#k……自愿贡献出了自己身体的一部分。", 36, 9400434, 1, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#你……你们？但是……要想在世上生活，一定需要完整的身体才行……", 36, 9401071, 1, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("身体什么的都无所谓。\r\n最重要的是杰斯和匹比, 还有#h0#想要拯救我们的心意。", 36, 9400433, 1, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#你们……为了……为了我……呜……\r\n啊……我很想哭，但流不出眼泪……", 36, 9401071, 1, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("严格的说……你现在已经不是#b完整的人类#k了。\r\n因为你是借助#b机械之力#k而活的……所以以后生活应该会有很多奇怪的地方……", 36, 9401072, 1, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face5#我，我变成智能机器人了……？", 36, 9401071, 1, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("不是#b完全#k变成，应该说是半人类，半机器状态吗……\r\n抱歉，我已经尽力了。", 36, 9401072, 1, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face5#你为什么要道歉……！你救了我啊！\r\n还有，#h0#和这里的#b拟真机器人#k一样……都是给了我新生命的人。", 36, 9401071, 1, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face5#谢谢你们，真的谢谢你们……！", 36, 9401071, 1, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("杰斯，谢谢你能活过来。", 56, 0, 1, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                      cm.eventSKill(0);
                                                                                                                      cm.warp(867142000, 0, false);
                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                      cm.forceCompleteQuest(64931);
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