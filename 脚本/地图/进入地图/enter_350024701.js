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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540450, "oid=22719550", -2070, -250, 25, -2120, -2020, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719550", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22719551", -2121, -277, 4, -2171, -2071, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719551", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=22719552", -1810, -250, 31, -1860, -1760, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719552", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=22719553", -1870, -250, 26, -1920, -1820, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719553", "summon", 0, 0);
      cm.npc_ChangeController(1540484, "oid=22719554", -2300, -250, 14, -2350, -2250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719554", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=22719555", -1750, -250, 31, -1800, -1700, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719555", "summon", 0, 0);
      cm.npc_ChangeController(1540464, "oid=22719556", -2255, -250, 27, -2305, -2205, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719556", "summon", 0, 0);
      cm.npc_ChangeController(1540465, "oid=22719557", -2355, -250, 14, -2405, -2305, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22719557", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=22719556", "alert", -1, 1);
      cm.npc_SetSpecialAction("oid=22719557", 'alert', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 80, -2039, -237);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们活捉了黑色之翼的干部。", 37, 1540453, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不，我已经不再是黑色之翼的人！\r\n没有奥尔卡的黑色之翼，我待在那里还有什么意思？", 37, 1540484, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你们真是群可恶的家伙。\r\n快放了奥尔卡。奥尔卡现在没有任何力量啊！", 37, 1540484, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们不能那么做。\r\n请想想你们之前对我们的所作所为吧。", 37, 1540452, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呃呃……那我们来交换！", 37, 1540484, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=22719550"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=22719551"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=22719552"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=22719553"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#现在我冒着生命危险偷到的黑色天堂设计图就在我的怀里。\r\n如果我现在回去，肯定会被当做叛徒，受到严惩。", 37, 1540484, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我要用设计图和你们交换奥尔卡。\r\n如果你们不满足我的要求，我就立刻将设计图撕毁！", 37, 1540484, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你的手脚都被绑住了，你要怎么撕毁设计图？", 37, 1540451, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……对哦！", 37, 1540484, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#呃呃……那我就跳下去！\r\n你们不要小看我！我可是说做就做的男子汉！\r\n", 37, 1540484, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……我知道了，快把设计图交出来吧。", 37, 1540451, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                              cm.sendNormalTalk_Bottom("#face0#行了吧？我已经交出设计图。现在你们应该按照约定让我见见奥尔卡了。", 37, 1540484, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("好的。\r\n不过，要等战争结束之后。", 37, 1540451, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#什……什么？", 37, 1540484, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(900, 3000, 900, -2259, -237);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/11", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(4100);
                                                      cm.effect_NormalSpeechBalloon("咳……你们这些家伙……!!", 1, 0, 0, 4000, 0, 0, 0, 0, 4, 1540484, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=22719554", -1, 560, 150);
                                                        cm.npc_LeaveField("oid=22719556");
                                                        cm.npc_LeaveField("oid=22719556");
                                                        cm.npc_LeaveField("oid=22719557");
                                                        cm.npc_LeaveField("oid=22719557");
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/14", 100);
                                                        cm.inGameDirectionEvent_PushScaleInfo(3300, 3000, 3300, -2529, -237);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                            cm.effect_NormalSpeechBalloon("你们还有脸说自己是正义的人吗?", 0, 0, 0, 3000, 0, 0, 0, 0, 4, 1540484, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=22719554");
                                                              cm.npc_LeaveField("oid=22719554");
                                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -1929, -187);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#南哈特，你不是和他约定好了吗？", 37, 1540450, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=22719551", 1);
                                                                      cm.sendNormalTalk_Bottom("目前正在进行战争，女皇。\r\n我也没有办法。", 37, 1540451, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("你终于说对了一句话。\r\n我们现在不能为个人的感情所牵绊。", 37, 1540452, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#可是，南哈特。", 37, 1540450, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("在战争中没有人能依旧保持高尚。\r\n如果要对付恶人，我们就要趟浑水。", 37, 1540451, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#…………", 37, 1540450, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("天亮之后，黑色天堂就会发现我们。\r\n我们必须在那之前想好对策。", 37, 1540451, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("真正的战争现在才刚刚开始。", 37, 1540451, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(900, 1000, 900, -1929, -237);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                      cm.forceCompleteQuest(33149);
                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                      cm.playerMessage(5, "获得了2500声望. ");
                                                                                      cm.gainHonorExp(2500, true);
                                                                                      cm.updateInfoQuest(33121, "honor=1");
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#   Act 2.出战，水晶花园！\r\n\r\n                         完结。\r\n\r\n#fs20#(与联盟会场的摩柯搭话，即可以开始下一个Act。)", 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.forceCompleteQuest(33121);
                                                                                            cm.finishAchievement(1189);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                            cm.gainItem(3015030, 1);
                                                                                            cm.gainItem(1142769, 1);
                                                                                            cm.forceCompleteQuest(33179);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(913050010, 0, true);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=22719550");
                                                                                            cm.npc_LeaveField("oid=22719550");
                                                                                            cm.npc_LeaveField("oid=22719551");
                                                                                            cm.npc_LeaveField("oid=22719551");
                                                                                            cm.npc_LeaveField("oid=22719552");
                                                                                            cm.npc_LeaveField("oid=22719552");
                                                                                            cm.npc_LeaveField("oid=22719553");
                                                                                            cm.npc_LeaveField("oid=22719553");
                                                                                            cm.npc_LeaveField("oid=22719555");
                                                                                            cm.npc_LeaveField("oid=22719555");
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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