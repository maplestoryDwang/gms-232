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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.forceCompleteQuest(58734);
      cm.forceStartQuest(58735, '');
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=1;4=4;5=4;6=4;7=4;8=4;9=4");
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(9111011, "oid=3586243", -100, 1437, 24, -150, -50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3586243", "summon", 0, 0);
        cm.npc_ChangeController(9111012, "oid=3586244", 0, 1437, 22, -50, 50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3586244", 'summon', 0, 0);
        cm.npc_ChangeController(9111001, "oid=3586245", 200, 1437, 12, 150, 250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3586245", "summon", 0, 0);
        cm.npc_ChangeController(9111022, "oid=3586246", -548, 1437, 11, -598, -498, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3586246", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呃……呃……", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111022, null, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#哥！你还好吗？", 37, 9111011, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3586243", -1, 300, 150);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#现在我要开始回收金之五行了。", 37, 9111001, false, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("\r\n#L0#把分离金之五行的任务交给竹野子。#l", 56, 0);
                } else {
                  if (status === V++) {
                    cm.updateInfoQuest(58710, "1=6;2=12");
                    cm.teachSkill(80011290, -1, 0);
                    cm.getTopMsgFont("竹野子记住了你的话。", 3, 20, 8, 0, 0);
                    cm.sendNormalTalk_Bottom('辛苦你了。', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯！这事就交给我吧！", 37, 9111001, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=3586245", -1, 350, 170);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=3586245", "overpowerloop", 300000, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.playerMessage(-1, '协助竹野子回收五行。');
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_QTE(99);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#唔噢噢噢噢噢噢噢……呃啊啊！！！！！！！！！！！", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111022, null, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#……咳咳……我……我承受不住这股力量……！", 37, 9111001, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#照这样下去……连竹野子都会有危险的！", 37, 9111012, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getMetal", "oid=3586245"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('#face3#嗷呜！', 37, 9111001, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=3586245", "die1", 750, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#竹野子!", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111012, null, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#竹野子！", 1, 0, 0, 5000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呃……嗯……", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111022, null, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#牛鬼哥！哥！！你醒醒！你能认出我是谁吗？", 37, 9111011, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你……棘……鬼？你这家伙……我不是叫你……别到这里来吗……", 37, 9111022, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=3586246", "sleep", 30000, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#对不起……我应该常常来看你的。我以为你过得很好。对不起，真的对不起。", 37, 9111011, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#……哭什么……你这家伙……怎么弄得灰头土脸的……", 37, 9111022, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#你看起来跟人类一样了……真帅……亲爱的……老弟……", 37, 9111022, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=3586246", "die1", 3000, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=3586246");
                                                                    cm.npc_LeaveField("oid=3586246");
                                                                    cm.sendNormalTalk_Bottom("#face1#牛鬼哥！！！！！！！！！你别死！！！！！！！！！！！", 37, 9111011, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=3586243", 'cry', 30000, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#……哈啊……", 37, 9111001, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setNpcSpecialActionReset("oid=3586245");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=3586245", -1, 120, 170);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#抱……抱歉。真的……很抱歉……凭我的力量，最多只能把金之五行取出来。", 37, 9111001, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#竹野子，你不要太自责。你已经尽力了。", 37, 9111012, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.setNpcSpecialActionReset("oid=3586243");
                                                                                    cm.npc_setForceFlip("oid=3586243", 1);
                                                                                    cm.sendNormalTalk_Bottom("#face0#不是你的错……谢谢你。多亏了你，我才能在牛鬼哥临终时跟他说会儿话。", 37, 9111011, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0# #h0#，也谢谢你的帮助。相信牛鬼哥心里也很感激大家。", 37, 9111011, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relGet", "oid=3586243"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##h0#，这是从牛鬼身上取出的金之五行。你拿去交给姐姐吧。", 37, 9111001, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我想，无论是人类，还是其他物种，都是因为抱有私心，才会彼此斗来斗去的。", 37, 9111001, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#如果各自都能让一步，都能努力去理解对方，也不会发生今天这样的悲剧……", 37, 9111001, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#希望……牛鬼能获得安息……", 37, 9111001, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.warp(800021111, 0, true);
                                                                                                      cm.npc_LeaveField("oid=3586243");
                                                                                                      cm.npc_LeaveField("oid=3586243");
                                                                                                      cm.npc_LeaveField("oid=3586244");
                                                                                                      cm.npc_LeaveField("oid=3586244");
                                                                                                      cm.npc_LeaveField("oid=3586245");
                                                                                                      cm.npc_LeaveField("oid=3586245");
                                                                                                      cm.eventSKill(0);
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