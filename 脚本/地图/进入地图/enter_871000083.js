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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 0, 370]);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs20##e第二天广场喷泉前……"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(9400929, "oid=91899628", 70, 300, 26, 20, 120, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899628", "summon", 0, 0);
        cm.npc_ChangeController(9400928, "oid=91899629", -25, 300, 26, -75, 25, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899629", "summon", 0, 0);
        cm.npc_ChangeController(9401164, "oid=91899630", -150, 300, 26, -200, -100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899630", "summon", 0, 0);
        cm.npc_ChangeController(9401163, "oid=91899631", -210, 300, 23, -260, -160, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899631", 'summon', 0, 0);
        cm.npc_ChangeController(9401160, "oid=91899632", -280, 300, 23, -330, -230, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899632", "summon", 0, 0);
        cm.npc_ChangeController(9400931, "oid=91899633", -340, 300, 23, -390, -290, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899633", "summon", 0, 0);
        cm.npc_ChangeController(9401161, "oid=91899634", -550, 360, 31, -600, -500, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899634", "summon", 0, 0);
        cm.npc_ChangeController(9401162, "oid=91899635", -620, 360, 31, -670, -570, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899635", 'summon', 0, 0);
        cm.npc_ChangeController(9401174, "oid=91899636", -355, 360, 30, -405, -305, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91899636", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
              cm.sendNormalTalk_Bottom("#b哇……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNewEffects(13, [1000, -100, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=91899629", 1);
                  cm.npc_setForceFlip("oid=91899628", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##h0#，你来了？嘿嘿。这会儿有点忙，你可以排下队吗？", 37, 9400920, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=91899629"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(1, 520);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(13, [1000, -90, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=91899629", -1);
                            cm.npc_setForceFlip("oid=91899628", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.npc_setForceFlip("oid=91899633", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#呵呵，#h0#也不例外呢！艾米真是铁面无私。", 37, 9400922, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b是啊。话说回来，生意还真火爆呢！", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#可不是嘛。真让人期待它的味道呢。呵呵呵", 37, 9400922, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=91899632", -1);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#凯兰西中原本就没有咖啡店吗？", 37, 9401160, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=91899633", 1);
                                          cm.sendNormalTalk_Bottom("#face0#嗯，没有。应该说是不需要。", 37, 9400922, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#为什么？", 37, 9401160, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#大家都喜欢在自己家里招待朋友，一起聊聊天，分享茶点。现在艾米的果汁之所以能够大卖，可能是因为味道不错……也有可能因为是艾米制作的。", 37, 9400922, true, true);
                                              cm.setAccountQuestInfo(226, "count=1892;T=20200607100254");
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b肯定是这样的。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#呵呵，你们是？", 37, 9400922, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=91899630", 1, 600, 100);
                                                    cm.npc_SetForceMove("oid=91899631", 1, 600, 100);
                                                    cm.sendNormalTalk_Bottom("#face2#啊！你好。我还没来得及打招呼。我叫杰尼，几天前和奶奶一起搬到这里的。", 37, 9401160, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#啊哈，是玛丽奶奶家的孙女啊。", 37, 9400922, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#你已经见过奶奶了啊。以后请多多关照。", 37, 9401160, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你的奶奶一直夸奖自己的孙女漂亮又勤快，原来是真的啊。", 37, 9400922, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#哈哈，谢谢你。", 37, 9401160, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#下一位~~？", 37, 9400920, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=91899632", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=91899632", 1, 120, 100);
                                                                  cm.npc_setForceFlip("oid=91899633", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=91899633", 1, 110, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 110);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你好，我要一杯芒果汁。", 37, 9401160, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#好的！请稍等！", 37, 9400920, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#客人，给你！", 37, 9400920, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=91899632", 1, 200, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#下一位~~！", 37, 9400920, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNewEffects(13, [1000, 50, 0, 0, 0]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=91899633", 1, 60, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 60);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#可以给我一杯最好喝的吗？", 37, 9400922, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b我也一样。", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#好的~！客人，马上为你准备艾米特制果汁！", 37, 9400920, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_setForceFlip("oid=91899632", -1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#生意不错呢，肯定很充实吧。", 37, 9400922, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#嘿嘿嘿……", 37, 9400920, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#倒水的时候不要打扰我哦。嘿嘿嘿……一杯5000金币……呼呼呼", 37, 9400920, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#哼哼。", 37, 9400922, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_setForceFlip("oid=91899633", -1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNewEffects(13, [2000, -350, 0, 0, 0]);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#酸酸甜甜的，真的很好喝呢？", 37, 9401161, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#就是。但没有地方坐，真是可惜。", 37, 9401162, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#是因为人太多了吧。要不我们回家吧？", 37, 9401161, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#好吧。这种果汁，只要稍微研究一下，在家里也可以做出来的。", 37, 9401162, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=91899634", -1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=91899634", -1, 600, 100);
                                                                                                                              cm.npc_SetForceMove("oid=91899635", -1, 600, 100);
                                                                                                                              cm.sendNewEffects(13, [2000, 400, 0, 0, 0]);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#切……果汁好喝不就行了，要啥坐的地方啊？", 37, 9400920, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#人们来咖啡店的原因有很多。美味的果汁是其一，但有时也想暂时休息一下，或和朋友一起聊聊天。", 37, 9401160, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=91899633", 1);
                                                                                                                                      cm.npc_setForceFlip("oid=91899629", 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91899629"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#所以……如果有可以坐下来休息或聊天的空间的话，就会增加3倍的客流量？！", 37, 9400920, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#也可以这么解释。哈哈", 37, 9401160, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#咖啡店！", 37, 9400920, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#哥哥……我们……", 37, 9400920, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我们家太小了，不行。", 37, 9400921, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#切……那么……", 37, 9400920, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_setForceFlip("oid=91899629", -1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#呵呵呵，那我把我家的厢房借给你吧。反正空着也是空着。", 37, 9400922, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#真的吗？", 37, 9400920, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#不过，世界上没有免费的午餐。", 37, 9400922, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#那，那么……", 37, 9400920, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#使用期间，饮料免费就行……", 37, 9400922, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91899629"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#真的吗？！真的吗？！没了？", 37, 9400920, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#呵呵呵。", 37, 9400922, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#凯尼斯大叔真帅气！一言既出驷马难追哦！", 37, 9400920, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.forceCompleteQuest(65435);
                                                                                                                                                                      cm.updateInfoQuest(501024, "start=1;obj=1");
                                                                                                                                                                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                        cm.warp(871000000, 2, true);
                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                        cm.npc_LeaveField("oid=91899628");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899629");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899630");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899631");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899632");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899633");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899634");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899635");
                                                                                                                                                                        cm.npc_LeaveField("oid=91899636");
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