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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -470, 9);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004000, "oid=7109207", -850, 11, 11, -900, -800, 0, true, false);
        cm.npc_SetSpecialAction("oid=7109207", "summon", 0, 0);
        cm.npc_ChangeController(3004007, "oid=7109208", -470, 11, 9, -520, -420, 1, true, false);
        cm.npc_SetSpecialAction("oid=7109208", "summon", 0, 0);
        cm.npc_ChangeController(3004018, "oid=7109209", -610, 11, 9, -660, -560, 0, true, false);
        cm.npc_SetSpecialAction("oid=7109209", 'summon', 0, 0);
        cm.npc_ChangeController(3004018, "oid=7109210", -330, 11, 9, -380, -280, 1, true, false);
        cm.npc_SetSpecialAction("oid=7109210", "summon", 0, 0);
        cm.npc_ChangeController(3004018, "oid=7109211", -190, 11, 9, -240, -140, 1, true, false);
        cm.npc_SetSpecialAction("oid=7109211", 'summon', 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呃～真是恶心的家伙。", 37, 3004018, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我，我的部件咕噜，咕噜咕噜！", 37, 3004007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这家伙带来的部件，看起来挺派得上用场的！\r\n能卖个好价钱就行了。", 37, 3004018, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这家伙怎么办？", 37, 3004018, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#煮成辣汤吧！这不一举两得吗？", 37, 3004018, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7109208"], [0, 0, -20, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face2#咕噜？！！", 37, 3004007, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#咕噜！咕噜！！", 37, 3004007, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7109208", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7109208", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=7109208", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face0#别动！', 37, 3004000, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7109209"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7109210"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7109211"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                  cm.npc_SetForceMove("oid=7109209", -1, 10, 200);
                                  cm.npc_SetForceMove("oid=7109210", -1, 10, 200);
                                  cm.npc_SetForceMove("oid=7109211", -1, 10, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#什么呀？！", 37, 3004018, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -841, 9);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#朦胧月色下，暗影横出世，\r\n我就是恶臭垃圾堆中横空诞生的乱世英雄……", 37, 3004000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……哇，是那个助手！", 37, 3004000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("助手？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#有什么不明白的问题吗？\r\n你被人威胁了吗？你在找什么神秘物品吗？", 37, 3004000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#等他肯定没错了。", 37, 3004000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哪里有是非，哪里就有我。\r\n瞧！侦探黑鸦出场了！", 37, 3004000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3004018, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你不觉得腻烦吗？", 37, 3004018, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -449, -79);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你到底什么时候换你的开场白呀？", 37, 3004018, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我是来找部件的。希望你能还给我。", 37, 3004000, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你在说什么？噗哈哈哈！你这话真有趣！", 37, 3004018, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#另外，头目说如果发现你，要狠狠揍你一顿呢。\r\n恐怕还有赏金？", 37, 3004018, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哦，太好了。那我们要趁这个机会好好感受一下被关注的感觉了。", 37, 3004018, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#没关系吗？让你来找东西的可是#b武器商人佩隆#k呀！", 37, 3004000, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#佩隆？那个疯子？", 37, 3004018, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#疯子……这话可真对！", 37, 3004000, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#怎么办？", 37, 3004018, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，先躲一躲吧！", 37, 3004018, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=7109209", 1, 1000, 200);
                                                                                      cm.npc_SetForceMove("oid=7109210", 1, 1000, 200);
                                                                                      cm.npc_SetForceMove("oid=7109211", 1, 1000, 200);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#咕，咕噜……", 37, 3004007, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#怎么了？走吧，你的朋友在等你。", 37, 3004000, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_LeaveField("oid=7109211");
                                                                                              cm.sendNormalTalk_Bottom("#face0#咕噜！我，真的？", 37, 3004007, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=7109208", 0);
                                                                                                cm.sendNormalTalk_Bottom("#face0#记住，偷东西是不道德的。", 37, 3004000, true, true);
                                                                                                cm.npc_LeaveField("oid=7109210");
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#以后像古鲁格一样善良地生活吧！", 37, 3004000, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#不，不道德的咕噜……善良的咕噜……", 37, 3004007, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#太难了，咕噜……", 37, 3004007, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=7109208", 1, 1000, 200);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.dispose();
                                                                                                          cm.gainExp(9487412);
                                                                                                          cm.warp(402000222, 1);
                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                          cm.setStandAloneMode(false);
                                                                                                          cm.forceCompleteQuest(37108);
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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