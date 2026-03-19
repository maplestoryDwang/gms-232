var status = -1;
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(32970, 'e3') == 0) {
    action1(f, E, e);
  } else {
    if (cm.getNumberFromQuestInfo(32974, 'e') == 1 && cm.getNumberFromQuestInfo(32974, 'e2') == 0) {
      action2(f, E, e);
    } else if (cm.isQuestFinished(32978) && cm.getQuestStatus(32980) == 0) {
      action3(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -250, -20);
      cm.npc_ChangeController(2560003, "oid=3562663", 96, -60, 133, 46, 146, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3562663", "summon", 0, 0);
      cm.npc_ChangeController(2560004, "oid=3562664", 254, -181, 70, 204, 304, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3562664", "summon", 0, 0);
      cm.npc_ChangeController(2560006, "oid=3562665", 180, -181, 68, 130, 230, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3562665", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -58);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2560001, "oid=3562763", -87, -239, 75, -137, -37, 0, false, 1000, false);
        cm.npc_SetSpecialAction("oid=3562763", 'summon', 0, 0);
        cm.npc_ChangeController(2560005, "oid=3562764", 90, -231, 75, 40, 140, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=3562764", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#应该能做到吧，艾特？\r\n只要完成这次作战，就能达到S级了。", 37, 2560001, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#当然。这次我会把时间缩得更短。", 37, 2560003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#果然不愧是艾特。", 37, 2560001, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#好了，说明到此结束。\r\n相信大家已经理解了作战内容。\r\n请移动到各自的位置。", 37, 2560001, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#（S级？哼，真笨。）", 37, 2560006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#（连骗人都不会。实际上一拳就搞定了。）", 37, 2560006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#（不要像傻瓜一样去嫉妒。）", 37, 2560004, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我们先出发了。", 37, 2560004, true, true);
                            } else {
                              if (status === V++) {
                                cm.Npc_Fadeout("oid=3562664", 0, 1000);
                                cm.Npc_Fadeout("oid=3562665", 0, 1000);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#我们也走吧。", 37, 2560001, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.Npc_Fadeout("oid=3562763", 0, 1000);
                                    cm.Npc_Fadeout("oid=3562764", 0, 1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=3562663", -1, 200, 150);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#再见，影牙。去执行作战之前，能给我点#r中和剂#k吗？", 37, 2560003, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯，给。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0 #太感谢了。", 37, 2560003, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=3562663", -1, 1000, 150);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不，没关系。这是我的工作……", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -361, -10);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Npc_Fadeout("oid=3562663", 0, 1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=3562663");
                                                          cm.npc_LeaveField("oid=3562663");
                                                          cm.sendNormalTalk_Bottom('呼……', 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#说的是反话吧？\r\n#b骗人的人竟然会羡慕被骗的人。", 37, 2560000, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1500, 100, -165, -10);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(2560000, "oid=3563473", -150, -20, 133, -200, -100, 1, false, 150, false);
                                                                    cm.npc_SetSpecialAction("oid=3563473", 'summon', 0, 0);
                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("啊，我没有……", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#没关系，影牙。我也可以理解。\r\n和医务队的事情相比，他相当华丽，对吧？", 37, 2560000, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("嗯……是有一点。", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1##fs20 ##r但。是。", 37, 2560000, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1##fs18#我们的使命是绝对的。\r\n千里之堤，毁于蚁穴。", 37, 2560000, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1##fs20#绝对不能#r怀疑使命#k。\r\n#fs16#你该不会是忘了吧？", 37, 2560000, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("是，是！！对不起……", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("（每次都这样落入威尔队长的陷阱……）", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我再叮嘱你一件事。\r\n影子森林中的#r诅咒气息#k正在逐渐增强。", 37, 2560000, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#一不小心，可能会被影子气息侵蚀。所以如果见到没见过的植物，最好不要靠近。", 37, 2560000, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#r影子诅咒……#k是，知道了。", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#老是跟你唠叨，真的很抱歉，影牙。\r\n但是团员的安全永远是第一位的，希望你能理解。", 37, 2560000, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=3563473", 1);
                                                                                                  cm.Npc_Fadeout("oid=3563473", 0, 700);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=3563473");
                                                                                                    cm.npc_LeaveField("oid=3563473");
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                        cm.setStandAloneMode(false);
                                                                                                        cm.eventSKill(0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.updateInfoQuest(32970, "s1=1;s2=1;e1=1;e2=1;e3=1");
                                                                                                        cm.forceCompleteQuest(32970);
                                                                                                        cm.updateInfoQuest(32970, "s1=1;s2=1;exp=1;e1=1;e2=1;e3=1");
                                                                                                        cm.gainExp(2462700);
                                                                                                        cm.gainItem(4036341, -40);
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
function action2(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
      cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h0;18=h0;19=h0");
      cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h1;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h0;18=h0;19=h0");
      cm.npc_ChangeController(2560001, "oid=3574639", -87, -239, 75, -137, -37, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3574639", "summon", 0, 0);
      cm.npc_ChangeController(2560005, "oid=3574640", 90, -231, 75, 40, 140, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3574640", "summon", 0, 0);
      cm.npc_ChangeController(2560000, "oid=3574641", -200, -180, 62, -250, -150, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3574641", "summon", 0, 0);
      cm.npc_ChangeController(2560002, "oid=3574642", -113, -25, 133, -163, -63, 0, true, 1000, false);
      cm.npc_SetSpecialAction("oid=3574642", "summon", 0, 0);
      cm.npc_ChangeController(2560004, "oid=3574643", 100, -20, 133, 50, 150, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3574643", "summon", 0, 0);
      cm.npc_ChangeController(2560006, "oid=3574644", 180, -20, 133, 130, 230, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=3574644", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -264, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -290, -6);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……最后还是没说。怎么办呢……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不，没事的。\r\n虽然#b艾特#k知道了迎月花，让人有点担心……", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("但是只要以后尽可能避开他，应该就没什么问题。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=3574642", -1);
                  cm.sendNormalTalk_Bottom("#face0#（喂，影牙！你！大家都在看着你呢！）", 37, 2560002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯？什么……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -53);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.sendNormalTalk_Bottom('#face3#……', 37, 2560003, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#如果我的理解没错……", 37, 2560001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这次作战，你是想#b和影牙一起出战#k吧？", 37, 2560001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我说得对吗，艾特？", 37, 2560001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                  cm.npc_setForceFlip("oid=3574639", 1);
                                  cm.npc_setForceFlip("oid=3574641", 1);
                                  cm.npc_setForceFlip("oid=3574642", 1);
                                  cm.sendNormalTalk_Bottom("#face4#是的，没错。", 37, 2560003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#fs20#呃唉？！！", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#在之前的作战中受了点伤，我担心会恶化。\r\n要是医务队员能一起参加作战，负担就能减轻不少。", 37, 2560003, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face1#嗯？', 37, 2560000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那，那那……有那个必要吗……我，我还有别的事……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#别的事？啊～原来你很忙啊，哈哈……啊！是因为那个吗？那个什么来着？", 37, 2560003, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face14#迎。月……", 37, 2560003, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我，我想参加战斗！", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3574639"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3574640"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3574641"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3574642"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3574643"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3574644"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这个嘛……我不知道。", 37, 2560001, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#嗯……", 37, 2560000, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是的，影牙的主意好像不错。我赞成。", 37, 2560000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("嗯？！", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#对影牙而言，这也会是很好的经历。", 37, 2560000, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#既然威尔这么说，那就没办法了。", 37, 2560001, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face14#从现在开始，你就是我的奴隶。", 37, 2560003, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom('（救命……）', 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=3574639");
                                                                        cm.npc_LeaveField("oid=3574639");
                                                                        cm.npc_LeaveField("oid=3574640");
                                                                        cm.npc_LeaveField("oid=3574640");
                                                                        cm.npc_LeaveField("oid=3574641");
                                                                        cm.npc_LeaveField("oid=3574641");
                                                                        cm.npc_LeaveField("oid=3574642");
                                                                        cm.npc_LeaveField("oid=3574642");
                                                                        cm.npc_LeaveField("oid=3574643");
                                                                        cm.npc_LeaveField("oid=3574643");
                                                                        cm.npc_LeaveField("oid=3574644");
                                                                        cm.npc_LeaveField("oid=3574644");
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.updateInfoQuest(32974, "e=1;exp=1;e2=1");
                                                                            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h0;18=h0;19=h0");
                                                                            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                                                                            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                                                                            cm.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0, 0);
                                                                            cm.setStandAloneMode(false);
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
function action3(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -900, -84);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2560003, "oid=3582377", -800, -60, 138, -850, -750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3582377", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNormalTalk_Bottom("#face5#哈哈哈，看到了吗？", 37, 2560003, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我死定了……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face5#哈哈，别太担心。我不会把你怎么样的。", 37, 2560003, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face5#好玩吧？看见那家伙的表情了吗？哈哈哈！", 37, 2560003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("确实很好笑……嘻嘻嘻。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/pen", 100);
                  cm.sendNormalTalk_Bottom("嗯？等等……书里又增加了没见过的内容？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face16#什么？", 37, 2560003, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("（哎呀！不应该让艾特看到……）", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face16#用盛满了月光的#r那种花#k，来代替一撮月光，怎么样……？", 37, 2560003, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你们俩在看什么呢？", 37, 2560000, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0, 0);
                              cm.npc_ChangeController(2560000, "oid=3582594", -746, -100, 119, -796, -696, 1, false, 1000, false);
                              cm.npc_SetSpecialAction("oid=3582594", "summon", 0, 0);
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("啊，队，队长！你好……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你好，队长。", 37, 2560003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果没什么急事，我可以把影牙带走吗？", 37, 2560000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#当然。", 37, 2560003, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=3582594", 1);
                                        cm.Npc_Fadeout("oid=3582594", 0, 500);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=3582594");
                                          cm.npc_LeaveField("oid=3582594");
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face16#影牙，你昨天说过#r“奇怪”#k，对吧？", 37, 2560003, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.sendNormalTalk_Bottom('嗯？嗯……', 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face16##fs18#你知道吗？这里的人不会说那种话。绝对。", 37, 2560003, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("什么？听，听你这么一说，确实……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face16#所以，如果医务队长说出#r“奇怪”#k这样的话，一定要小心。", 37, 2560003, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face16#如果那样的话……", 37, 2560003, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face16#说明那家伙是秘密的幕后黑手。", 37, 2560003, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.setStandAloneMode(false);
                                                                      cm.eventSKill(0);
                                                                      cm.forceStartQuest(32980, '');
                                                                      cm.npc_LeaveField("oid=3582377");
                                                                      cm.npc_LeaveField("oid=3582377");
                                                                      cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                                                      cm.dispose();
                                                                      cm.warp(307000120, 0, false);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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