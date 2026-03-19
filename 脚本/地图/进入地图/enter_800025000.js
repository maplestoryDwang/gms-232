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
      cm.forceCompleteQuest(58780);
      cm.updateInfoQuest(58711, "10=4;11=3;13=3;0=2;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=2");
      cm.updateInfoQuest(58711, "10=4;11=3;13=3;0=3;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=2");
      cm.updateInfoQuest(58712, "10=1;0=1;1=1;2=3;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
      cm.forceStartQuest(58701, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9111000, "oid=3972111", 2000, -270, 11, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3972111", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 7000, 2000, -270);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face0#大太法师，我已经集齐了五行。\r\n下面我该怎么做？", 37, 9111000, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("“真的全都集齐了啊……”", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("“非-常-好。咯咯咯咯咯咯咯咯咯！！", 1);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(9111024, "oid=3972531", 2500, -270, 24, 2450, 2550, 1, false, 0, false);
                      cm.npc_SetSpecialAction("oid=3972531", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1000, 2300, -270);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嘻嘻嘻嘻嘻嘻，愚蠢的巫女……多谢啦！", 37, 9111024, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……大，大太法师……？！", 37, 9111000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我是大妖怪魔僧！\r\n等我吸收了你收集来的所有五行，说不定真的会变成大太法师哦，哈哈哈哈哈哈哈！", 37, 9111024, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3972111"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getFire", "oid=3972531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getMetal", "oid=3972531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getWater", "oid=3972531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getLand", "oid=3972531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getWood", "oid=3972531"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#……啊……啊啊……。", 37, 9111000, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呵呵呵呵呵呵……", 37, 9111024, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#哈，下个就到你妹妹啦。", 37, 9111024, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#咯咯咯……虽然那白痴#b牛鬼#k活生生把五行吸收之后变成了疯子……\r\n但我只要有你那半妖妹妹的妖力加持，吸收五行肯定轻而易举。", 37, 9111024, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3972111"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不过……只可惜你妹妹将会变成废人啊。咯咯咯！", 37, 9111024, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=3972531", "moprh", 0, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2550);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=3972531");
                                                                    cm.npc_LeaveField("oid=3972531");
                                                                    cm.npc_ChangeController(9111023, "oid=3973745", 2500, -270, 24, 2450, 2550, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=3973745", "summon", 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face3#不……不要啊……！！", 37, 9111000, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=3973745", 1, 200, 100);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2000, -270);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=3973745");
                                                                            cm.npc_LeaveField("oid=3973745");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('#face3#啊啊！', 37, 9111001, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                  cm.npc_ChangeController(9111023, "oid=3974142", 2500, -270, 24, 2450, 2550, 1, true, 0, false);
                                                                                  cm.npc_SetSpecialAction("oid=3974142", "summon", 0, 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=3972111", 1, 100, 150);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#不行！休想动我的妹妹！！", 37, 9111000, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#你们姐俩还真是帮了我大忙啊！嘻嘻嘻嘻嘻", 37, 9111023, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=3974142", 1, 500, 150);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3972111"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.npc_SetForceMove("oid=3972111", 1, 100, 150);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=3972111");
                                                                                                cm.npc_LeaveField("oid=3972111");
                                                                                                cm.npc_LeaveField("oid=3974142");
                                                                                                cm.npc_ChangeController(9111064, "oid=3974373", 2250, -270, 21, 2200, 2300, 0, false, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=3974373", 'summon', 0, 0);
                                                                                                cm.sendNormalTalk_Bottom("#face3#不！！！竹野子-！！！！", 37, 9111000, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                    cm.sendNormalTalk_Bottom("#p9111000#！", 57, 0, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=3974142");
                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 3200, -540);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=3974373", -1);
                                                                                                          cm.sendNormalTalk_Bottom("#face3##h0#！！求，求求你……！！竹野子……求你救救竹野子！！！", 37, 9111000, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#我，我被骗了！\r\n给我启示的不是大太法师，是#b#p9111024##k！", 37, 9111000, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("…………！！！", 57, 0, true, true);
                                                                                                              cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#我妹妹有危险……！！\r\n妹妹她……求你救救竹野子！", 37, 9111000, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 4400, -540);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("(通过#r#p9111024##k消失的#b罗生门#k传送过去吧！)", 57, 0, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.warp(800000000, 5, true);
                                                                                                                          cm.npc_LeaveField("oid=3974373");
                                                                                                                          cm.npc_LeaveField("oid=3974373");
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