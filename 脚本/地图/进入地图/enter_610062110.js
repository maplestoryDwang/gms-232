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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062110");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2669058", 3380, -78, 36, 3330, 3430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2669058", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2669059", 3748, -128, 21, 3698, 3798, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2669059", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.inGameDirectionEvent_AskAnswerTime(7200);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#数天前，克拉奇安森林……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3560, 5);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("1000年前……", 37, 9201534, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("然而，我不信任的是你的话，而不是这个地方。", 37, 9201534, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2669058", 1, 30, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#嘿，我倒是想跟你说你爱听的话，但我没法这么做。", 37, 9201539, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#我来这儿是为了帮助你，为此，你需要知道真相。", 37, 9201539, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2669058", 1, 50, 50);
                          cm.sendNormalTalk_Bottom("#face3#你明天是想夺取幻日吧。", 37, 9201539, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#你没去守护者的要塞，而是直接去找绯红之心……与他对质，最后还杀了他。", 37, 9201539, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('……', 37, 9201534, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#我知道你想不起来。", 37, 9201539, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#但这就是你本人在我同意帮助你的时候告诉我的，因此，为了达成你的目的，你必须相信我。", 37, 9201539, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2669059", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我理解……", 37, 9201534, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2669059", 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("但你的话有一部分实在是不合理。", 37, 9201534, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                  cm.effect_NormalSpeechBalloon('？？', 1, 0, 0, 2000, 1, 0, -30, 0, 4, 9201539, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#哪部分？", 37, 9201539, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2669059", -1, 30, 50);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我的父亲……我没打算杀死绯红之心。", 37, 9201534, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("如果他最后能投降或至少理解我……我也不会下手……", 37, 9201534, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 1, 0, -30, 0, 4, 9201539, null, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#你真可怜。", 37, 9201539, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈。", 37, 9201534, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#所以我不理解家人这回事。\r\n他一直阻挠你的计划。", 37, 9201539, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#还逼得你离开了你的故乡，一路来到冒险岛世界。", 37, 9201539, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#你这是抽了什么风，突然就觉得他会听得进你的话？", 37, 9201539, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#如果你无法理解家人之间的羁绊……\r\n那我也没法向你解释。", 37, 9201534, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=2669058", -1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=2669058", 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#你终将杀死他。\r\n然后，你就能获得幻日。", 37, 9201539, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#但你的计划，最后会功亏一篑。", 37, 9201539, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("有劳告诉我为什么会这样吗？", 37, 9201534, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#宗师们会为了防止你染指幻日，将它摧毁。", 37, 9201539, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/whiteout");
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_4", 100);
                                                                                                      cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust2");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3560, 5);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#他们不惜献出自身性命来阻止你。", 37, 9201539, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#太可敬了。", 37, 9201534, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#你确定你明白正是这些人破坏了你的计划，还把你困在雕像中，整整一千年？", 37, 9201539, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哈，抱歉。\r\n还请继续。", 37, 9201534, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#嗯，正如我所说，你的兄弟苏巴尼会把你封印在雕像中，让你一千年都无法脱身。", 37, 9201539, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face3#你说那是一种介于生与死之间的体验……仿佛被夹在阴阳两界之间一般。", 37, 9201539, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#居然是苏巴尼把我封印的？\r\n看来我低估他了……", 37, 9201534, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#他为此赔了命。", 37, 9201539, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=2669059", 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("他和其他人……\r\n为了信仰竟然愿意献出性命。", 37, 9201534, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("还是说，他们竟然有那么讨厌我？", 37, 9201534, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#说不准。\r\n我只能把我亲眼所见的事实告诉你。", 37, 9201539, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=2669059", 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("明白了。\r\n对你穿越时间来此警告我的行为，我致以诚挚的谢意。", 37, 9201534, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("这个时间线的我自然会跟未来时间线的我做出一样的选择。", 37, 9201534, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#什么选择？", 37, 9201539, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#将我这个美貌而又睿智的顾问留在身边。", 37, 9201534, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#……", 37, 9201539, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.npc_SetForceMove("oid=2669059", -1, 50, 50);
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#有你在我身边，我感觉我可以修改我的计划了。", 37, 9201534, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#或许你能进一步协助我……？", 37, 9201534, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#想要什么就跟我说吧。", 37, 9201539, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                      cm.updateInfoQuest(61369, "1=1;2=1");
                                                                                                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                      cm.warp(610062120, 0, true);
                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                      cm.npc_LeaveField("oid=2669058");
                                                                                                                                                                      cm.npc_LeaveField("oid=2669058");
                                                                                                                                                                      cm.npc_LeaveField("oid=2669059");
                                                                                                                                                                      cm.npc_LeaveField("oid=2669059");
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