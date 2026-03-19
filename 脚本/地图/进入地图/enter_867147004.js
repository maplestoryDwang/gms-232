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
      cm.npc_ChangeController(9401028, "oid=200968", -341, -25, 31, -391, -341, 1, false, 0, false);
      cm.npc_ChangeController(9401026, "oid=200969", 437, 65, 36, 387, 487, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 2000, 80, 90]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9401123, "oid=8683231", 10, 50, 45, -40, 60, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=8683231", "summon", 0, 0);
            cm.npc_ChangeController(9401124, "oid=8683232", 80, 50, 52, 30, 130, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=8683232", "summon", 0, 0);
            cm.npc_ChangeController(9401027, "oid=8683233", 140, 50, 53, 90, 190, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=8683233", "summon", 0, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.sendNormalTalk_Bottom("哎，你怎么一个人就这样进来了！真是的～～要是被马米知道可就糟糕了。", 37, 9401023, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呃呃…… ", 37, 9401030, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我看你块头挺大～怎么气量这么小呢！", 37, 9401023, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=8683233", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=8683232");
                      cm.sendNormalTalk_Bottom("幸好不是马米或者芽芽，而是我先发现了各位。", 37, 9401023, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#b谢谢你，大叔。', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哦哦~~#h0#有什么可抱歉的，你应该接受称赞才是。不过还好，在他活着的时候发现了他，本部里谁都不愿意再看见有人牺牲了。", 37, 9401023, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("… ", 37, 9401029, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("治疗结束了，我会照顾好这位，等他恢复后就送他回去。各位可以走了！", 37, 9401023, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……威胁…… ", 37, 9401030, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=8683233", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('什么？', 37, 9401023, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我接受了你们的威胁…… ", 37, 9401030, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b啊……！那你愿意加入我们远征队吗？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('……（点头）', 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("发生了什么？", 37, 9401023, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b大叔，请问我可以再接收一名远征队队员吗？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=8683233", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("当然，队员的数量再多也没关系。不过能够进入#b深渊的人员数量根据指挥等级#k设有一定限制，这一点你知道吧？", 37, 9401023, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b是的，我知道。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b我想将他收编进我们远征队。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("哦哦～～你已经找到新同伴了吗？对方同意了吧？", 37, 9401023, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=8683233", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("……我叫拉尔夫。", 37, 9401030, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("好好，拉尔夫，要是你想着独自一人偷偷进入深渊，我就会立刻送你离开，不过如果你与#h0#一起同行……", 37, 9401023, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("很好！好的，你们之间要是商量好了，就不需要什么多余的程序。", 37, 9401023, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.updateInfoQuest(64755, "mCount=2;boxCount=1");
                                                                  cm.sendNormalTalk_Bottom("……这么说，我是同一个远征队了吗？（亮晶晶）", 37, 9401029, true, true);
                                                                  cm.updateInfoQuest(64753, "point=115;level=10;rank=0");
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("哈哈，是是。莫妮卡小姐真厉害啊~你看你明明一脸愤怒，但眼睛却闪闪发光……", 37, 9401023, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("那我们先走了。", 37, 9401029, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=8683231", 1, 320, 150);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=8683233", 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNewEffects(13, [2000, 200, 0, 0, 0]);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 90);
                                                                                cm.npc_SetForceMove("oid=8683232", 1, 150, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("芽芽！帮我们队长升级吧！", 37, 9401029, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("这么快？", 37, 9401022, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('我，5级！', 37, 9401029, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("那个大叔，5级！", 37, 9401029, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('远征队10级！对吧？', 37, 9401029, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("对，升级费呢？要支付声望才行。", 37, 9401022, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b哦，需要多少？", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("100", 37, 9401022, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b给，给你… ", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我收下了。好的，现在开始，你就是初级指挥队长了，新人。", 37, 9401022, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=8683231", -1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound2/PL_Sound.img/Wz2_Abyss/levelUP", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/AbyssExpedition/LevelUP");
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b结……结束了？", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("（点头）", 37, 9401022, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                    cm.sendNormalTalk_Bottom("#b我们现在都是伙伴啦！", 57, 0, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=8683231", -1);
                                                                                                                      cm.sendNormalTalk_Bottom("#b莫妮卡，你是怎么想到要升级的呢？真厉害。", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我也吓到了，在那么手忙脚乱的时候……不知道该说你机灵还是狡猾。", 37, 9401030, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("……对不起，我不该说出那样过分的话，我可能是被野心蒙住了双眼吧。", 37, 9401029, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("我接受你的道歉。", 37, 9401030, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("很抱歉让队长也陷入难堪，以后我不会再这么鲁莽行事了。", 37, 9401029, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b谢谢你。", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=8683231"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……那我们去给拉尔夫买新武器吧？！", 37, 9401029, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom('新武器？', 37, 9401030, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("你现在的武器好像没法再用了。", 37, 9401029, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("我们累积了不少声望，可以买一把新的刀了！去找宝宝吧！", 37, 9401029, true, true);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.updateInfoQuest(64753, "point=115;level=10;rank=1");
                                                                                                                                          cm.forceCompleteQuest(64769);
                                                                                                                                          cm.eventSKill(0);
                                                                                                                                          cm.warp(867147000, 0, true);
                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                          cm.npc_LeaveField("oid=8683231");
                                                                                                                                          cm.npc_LeaveField("oid=8683231");
                                                                                                                                          cm.npc_LeaveField("oid=8683232");
                                                                                                                                          cm.npc_LeaveField("oid=8683232");
                                                                                                                                          cm.npc_LeaveField("oid=8683233");
                                                                                                                                          cm.npc_LeaveField("oid=8683233");
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