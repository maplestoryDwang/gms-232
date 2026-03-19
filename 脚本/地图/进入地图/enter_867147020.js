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
      cm.playerMessage(5, "");
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(true, false, true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(9401123, "oid=5393578", -900, 40, 2, -950, -850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=5393578", "summon", 0, 0);
        cm.npc_ChangeController(9401124, "oid=5393579", -800, 40, 2, -850, -750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=5393579", "summon", 0, 0);
        cm.npc_ChangeController(9401126, "oid=5393580", -600, 40, 6, -650, -550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=5393580", "summon", 0, 0);
        cm.npc_ChangeController(9401055, "oid=5393581", -500, 40, 7, -550, -450, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=5393581", "summon", 0, 0);
        cm.sendNewEffects(17, [0, 1000, 2000, -850, 150]);
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
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
              cm.npc_SetSpecialAction("oid=5393581", 'attack1', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b米西蒂！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                    cm.npc_SetForceMove("oid=5393579", 1, 320, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=5393578", 1, 340, 100);
                      cm.sendNewEffects(12, [1000, -600, 150, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/230.img/skill/2301005/effect", "oid=5393578"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=5393581", "die1", -1, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.Npc_Fadeout("oid=5393581", 0, 1000);
                                    cm.npc_setForceFlip("oid=5393578", -1);
                                    cm.npc_setForceFlip("oid=5393579", -1);
                                    cm.sendNormalTalk_Bottom("你疯了吗？！", 37, 9401029, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=5393580", -1);
                                      cm.sendNormalTalk_Bottom("…… ", 37, 9401032, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b没关系，米西蒂？有没有受伤？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……给你", 37, 9401032, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Abyss/1", "oid=5393580"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b这……是什么？", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("道具………… ", 37, 9401032, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("虽然我不知道不见了的道具是什么……但有这个行不行？", 37, 9401032, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("东西真的不是我偷的，所以我没法还给你们。大家都在怀疑我，我该怎么办。", 37, 9401032, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你们收下这个，不要赶我走……", 37, 9401032, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("… ", 37, 9401029, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b为了拿到这个…… ", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你，你说……不是你不就行了。", 37, 9401029, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('我说了啊。', 37, 9401032, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("……对，对不起，我怀疑了你…… ", 37, 9401029, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("……还是先去那个临时帐篷里休息一下吧。", 37, 9401030, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(12, [5000, 250, 150, 0, 0]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=5393578");
                                                                          cm.npc_LeaveField("oid=5393578");
                                                                          cm.npc_LeaveField("oid=5393579");
                                                                          cm.npc_LeaveField("oid=5393579");
                                                                          cm.npc_LeaveField("oid=5393580");
                                                                          cm.npc_LeaveField("oid=5393580");
                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), 260, 50);
                                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                                          cm.npc_ChangeController(9401123, "oid=5395503", 190, 40, 3, 140, 240, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=5395503", "summon", 0, 0);
                                                                          cm.npc_ChangeController(9401126, "oid=5395504", 430, 40, 3, 380, 480, 1, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=5395504", "summon", 0, 0);
                                                                          cm.npc_ChangeController(9401124, "oid=5395505", 500, 40, 3, 450, 550, 1, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=5395505", 'summon', 0, 0);
                                                                          cm.inGameDirectionEvent_OneTimeAction(29, -1);
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("… ", 37, 9401029, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("那个。", 37, 9401032, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("嗯？嗯嗯，你说！", 37, 9401029, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("即使如此……还是第一次有人这样来找我。", 37, 9401032, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("谢谢。", 37, 9401032, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("你是笨蛋吗？！", 37, 9401029, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("这不是理所当然的嘛！你一个人很危险！", 37, 9401029, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("……那个……我之前听某个人说过，如果不和伙伴一起进入深渊，就会很危险，也无法冒险，所以远征队本部强制大家组成远征队。", 37, 9401032, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("我觉得这样特别好，就来到了深渊……但我的实力不出众，也没有像样的装备，谁都不愿意接受我。", 37, 9401032, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("所以，所以……我才想组装装备。", 37, 9401032, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("对不起，所以我才设局欺骗了你们和其他人……", 37, 9401032, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("……那，你也和我差不多…… ", 37, 9401029, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("你和我？", 37, 9401032, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我要是没有遇见队长，也不知道会做出什么事情来。", 37, 9401029, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom('你原谅我了？', 37, 9401032, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("哼，哼…… ", 37, 9401029, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#b既然我们现在是一个团队了，下次有机会了，也去向别人道个歉吧。", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("真，真的吗？一直是一个团队吗？现在也是？", 37, 9401032, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#b当然。", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("谢谢！谢谢！真的谢谢！我以后会努力帮助你们的！", 37, 9401032, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("现在也不会再说谎了，真的！", 37, 9401032, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("我也，我也……对不起你，米西蒂。", 37, 9401029, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.eventSKill(0);
                                                                                                                                      cm.forceCompleteQuest(64776);
                                                                                                                                      cm.gainItem(2631535, 3);
                                                                                                                                      cm.npc_LeaveField("oid=5393581");
                                                                                                                                      cm.npc_LeaveField("oid=5393581");
                                                                                                                                      cm.npc_LeaveField("oid=5395503");
                                                                                                                                      cm.npc_LeaveField("oid=5395503");
                                                                                                                                      cm.npc_LeaveField("oid=5395504");
                                                                                                                                      cm.npc_LeaveField("oid=5395504");
                                                                                                                                      cm.npc_LeaveField("oid=5395505");
                                                                                                                                      cm.npc_LeaveField("oid=5395505");
                                                                                                                                      cm.dispose();
                                                                                                                                      cm.setNumberForQuestInfo(64789, "map", 867147800);
                                                                                                                                      var O = cm.getEventManager('深渊远征队');
                                                                                                                                      O.startInstance(cm.getPlayer());
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
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}