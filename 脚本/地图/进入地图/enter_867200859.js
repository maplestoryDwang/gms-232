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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, 450, 200]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/footstep1", 128);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9400580, "oid=4254840", 1550, 170, 10, 1500, 1600, 1, true, false);
            cm.npc_SetSpecialAction("oid=4254840", "summon", 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/footstep2", 128);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=4254840", -1, 100, 80);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.sendNormalTalk_Bottom("#b谁啊？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(12, [2000, 1250, 200, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=4254840", -1, 100, 80);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/footstep3", 128);
                        cm.fieldEffect_PlayBGM("BgmPL2.img/WalkTogether", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#啊……", 37, 9400580, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b艾丽卡？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400580, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#b你有什么事？', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(12, [2000, 1150, 200, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#没事。我做了个噩梦，想出来透透风。一不小心走太远了呢。", 37, 9400580, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b你该待在野营地里，这里很危险。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我可以坐一会儿再走吗？", 37, 9400580, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=4254840", -1, 90, 80);
                                              cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/footstep1", 128);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/footstep2", 128);
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 78);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=4254840", "sit", -1, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(29, 9999999);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b……", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你有休息到吗？这种事情派我们的骑士来做就行……", 37, 9400580, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b不，亚皮纳斯派遣团才真是来这里后一天都没歇过。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……是啊，他们都是拥有很强使命感的好人。", 37, 9400580, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#对了，#h0#。你找到来信人是谁了吗？", 37, 9400580, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b还没找到。她好像不是卡夫塔佩的村民。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这样啊……。#h0#你帮了很多，我们也一起帮你寻找信的主人吧。", 37, 9400580, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#b我只是做了我该做的，并不是为了回报。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#世界上没什么事是理所当然的。", 37, 9400580, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#感谢你是应该的。", 37, 9400580, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b……谢谢你，说得我都不好意思了。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#（笑容）", 37, 9400580, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b你做了什么梦？", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……啊……", 37, 9400580, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b啊，如果是不愿想起的记忆，你可以不用回答。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……以后……以后有机会我再告诉你。", 37, 9400580, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#尽管这地方危机四伏，但眼下这一刻好平静啊。", 37, 9400580, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#凉凉的风，高高的夜空，美丽的极光……", 37, 9400580, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNewEffects(17, [5000, 2000, 1000, 890, -580]);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNewEffects(17, [0, 1000, 2000, 1150, 200]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#感觉脑子都变得清醒起来了。", 37, 9400580, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('#b你不冷吗？', 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#冷，可即使不在这里，我的夜晚也一直都是冰冷的。", 37, 9400580, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#每晚我从噩梦中惊醒时，昏暗的房间里只有自己孤零零一个人。\r\n可今晚醒来的时候，小帐篷里还睡了超过二十个人哦！", 37, 9400580, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#像那样和大伙儿挤在一起，我忽然觉得很安心。", 37, 9400580, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#而当我走到外面来时，就看见这么美丽的极光……", 37, 9400580, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……还有#h0#你。", 37, 9400580, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#当前情况下说这种话不太合适……但感觉蛮好的。", 37, 9400580, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#b……夜还很深，你回去睡吧。", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#明天也是段艰辛的旅程吧？", 37, 9400580, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但愿不要像今天这样有人受重伤……", 37, 9400580, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.setNpcSpecialActionReset("oid=4254840");
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那我先回去了，#h0#，早上见。", 37, 9400580, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=4254840", 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=4254840", 1, 300, 80);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                          } else if (status === V++) {
                                                                                                                                            cm.forceCompleteQuest(64040);
                                                                                                                                            cm.forceStartQuest(64041, '');
                                                                                                                                            cm.updateInfoQuest(64005, '');
                                                                                                                                            cm.setNumberForQuestInfo(64006, 'Ec', 0);
                                                                                                                                            cm.warp(867200551, 0, true);
                                                                                                                                            cm.npc_LeaveField("oid=4254840");
                                                                                                                                            cm.npc_LeaveField("oid=4254840");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;