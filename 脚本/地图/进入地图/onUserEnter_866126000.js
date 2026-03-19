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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390383, "oid=2272021", -300, 0, 9, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272021", 'summon', 0, 0);
      cm.sendNormalTalk("做得很好,老大!\r\n我真是太惊讶了!", 1, 9390383, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("真的?我干的很漂亮是吗?\r\n我真的是像一个英雄一样消灭怪物的吗?", 3, 9390383, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [1500, -270, -150, 1, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1800);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("稍等!\r\n我闻到了非常危险的气味。", 1, 9390383, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1496, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2495);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(9390443, "oid=2272027", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=2272027", "summon", 0, 0);
                  cm.npc_SetForceMove("oid=2272027", -1, 1100, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(800);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9390436, "oid=2272028", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2272028", 'summon', 0, 0);
                    cm.npc_SetForceMove("oid=2272028", -1, 1000, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(800);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(9390437, "oid=2272029", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=2272029", "summon", 0, 0);
                      cm.npc_SetForceMove("oid=2272029", -1, 600, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9390438, "oid=2272030", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2272030", 'summon', 0, 0);
                        cm.npc_SetForceMove("oid=2272030", -1, 900, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9390439, "oid=2272031", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2272031", 'summon', 0, 0);
                          cm.npc_SetForceMove("oid=2272031", -1, 700, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                          cm.updateInfoQuest(65890, "count=367;todayCount=337;lastDate=20210530");
                          cm.updateInfoQuest(65890, "count=367;todayCount=367;lastDate=20210530");
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9390440, "oid=2272037", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2272037", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=2272037", -1, 700, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(10000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("真是些烦人的家伙啊!\r\n 嘿~ 老大! 那个家伙,让我一个人对付吧？", 1, 9390383, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2272021", "special0", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2272021");
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/11"], [2150, -300, 0, 1, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Tremble(0, 350, 30);
                                        cm.fieldEffect_PlayFieldSound("ShamanBTTuto/RaiUse0", 100);
                                        cm.npc_SetSpecialAction("oid=2272027", 'attack1', 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(450);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("ShamanBTTuto/mobattack0", 100);
                                          cm.fieldEffect_Tremble(0, 0, 30);
                                          cm.inGameDirectionEvent_AskAnswerTime(900);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(9390383, "oid=2272083", 20, 0, 9, -30, 70, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=2272083", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=2272083", 'freeze0', 0, 1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/0"], [700, 90, -150, 1, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(750);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("呃!那个家伙,竟然穿了我的爪子抓不穿的盔甲!", 1, 9390383, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2272083", "move", 0, 1);
                                                cm.npc_SetForceMove("oid=2272083", -1, 150, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("切,这个家伙怎么这么慢啊?", 1, 9390383, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [1500, -150, -150, 1, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_Tremble(0, 0, 30);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/12"], [1000, 0, -200, 1, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_Tremble(0, 0, 30);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_Tremble(0, 0, 30);
                                                            cm.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/15"], [1700, 200, 0, 1, 0, 0, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo2", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_Tremble(0, 0, 30);
                                                                  cm.npc_SetSpecialAction("oid=2272027", "die1", 0, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(9390382, "oid=2272169", 200, 0, 9, 150, 250, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=2272169", 'summon', 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=2272169", -1, 30, 100);
                                                                      cm.npc_SetSpecialAction("oid=2272083", "move", 0, 1);
                                                                      cm.npc_SetForceMove("oid=2272083", 1, 50, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1550);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=2272027");
                                                                        cm.fieldEffect_PlayBGM("BgmBT.img/RemembranceBear", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        cm.updateInfoQuest(65890, "count=397;todayCount=367;lastDate=20210530");
                                                                        cm.updateInfoQuest(65890, "count=397;todayCount=397;lastDate=20210530");
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("我觉得…… 波波……好脏……呜呃呃……", 1, 9390382, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("哇! 是可爱的小熊哦!", 3, 9390382, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("嘿~ 像熊一样慢到家的家伙!!! \r\n 为何这么晚才出现啊？", 1, 9390383, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("嘿嘿!我觉得,波波……确实是熊, 嘿嘿嘿!", 1, 9390382, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("赶紧醒醒啊,波波! \r\n 现在正需要你那无知的力量呢!", 1, 9390383, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("嗯?这个可爱的小熊也是冒险岛动物英雄团吗?", 3, 9390383, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("那个,那个,叫我波波吧。 嘿嘿。", 1, 9390382, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("啊,好可爱!!!", 3, 9390382, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk('呃呵,呃呵', 1, 9390382, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=2272028", -1, 100, 100);
                                                                                              cm.npc_SetForceMove("oid=2272169", 1, 30, 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=2272028", "attack1", 0, 1);
                                                                                                cm.fieldEffect_PlayFieldSound("ShamanBTTuto/PoPo2", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/17"], [2800, 0, -250, 1, 0, 0, 0, 0, 0]);
                                                                                                  cm.fieldEffect_Tremble(0, 0, 30);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_Tremble(0, 0, 30);
                                                                                                    cm.npc_LeaveField("oid=2272028");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/0"], [1000, 0, -150, 1, 0, 0, 0, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("吓……吓一大跳……\r\n有点害怕呢……", 3, 9390382, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk("呃呵,呃呵!", 1, 9390382, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("(总……总觉得有点害怕!!!)", 3, 9390382, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk("嘿~ 波波！现在没空让你这样了。\r\n 你也快和老大签订守护契约，然后去消灭那个硬帮帮的家伙吧！", 1, 9390383, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk("嗯!知道了,来,就和波波签订契约吧。嘿嘿嘿。", 1, 9390382, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=2272169", -1, 80, 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=2272169", "special3", 0, 1);
                                                                                                                      cm.inGameDirectionEvent_OneTimeAction(1990, 1000);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/10"], [2000, 60, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Contract", 100);
                                                                                                                          cm.sendNormalTalk('嚓,嚓,嚓!!', 3, 9390382, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk("来,老大!现在就用波波的力量,消灭那个家伙吧!", 1, 9390383, true, true);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.forceCompleteQuest(59013);
                                                                                                                            cm.gainExp(560);
                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(866127000, 0, false);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.npc_LeaveField("oid=2272029");
                                                                                                                            cm.npc_LeaveField("oid=2272030");
                                                                                                                            cm.npc_LeaveField("oid=2272031");
                                                                                                                            cm.npc_LeaveField("oid=2272037");
                                                                                                                            cm.npc_LeaveField("oid=2272083");
                                                                                                                            cm.npc_LeaveField("oid=2272169");
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}