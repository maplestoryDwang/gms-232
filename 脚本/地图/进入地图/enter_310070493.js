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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(2155114, "oid=42498948", -3100, -50, 15, -3150, -3050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=42498948", "summon", 0, 0);
      cm.npc_ChangeController(2155112, "oid=42498949", -3000, -50, 14, -3050, -2950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=42498949", 'summon', 0, 0);
      cm.inGameDirectionEvent_Monologue("我… 我认为我从一开始就与其他机器人制造得不同. ", 1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust5", 0, 500, 0, 0, 7, 4, 1, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("从组装后开始就保留在内存器中的这些来历不明的机器人. ", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("虽然我记不得, 但我很想念它们. ", 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("嗯. 我, ", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("从一开始就拥有感情. ", 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/FieldgraveStory/illust4", 0, 500, 0, 0, 7, 4, 1, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("分解拥有感情的不良品. ", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("我隐藏了感情, 作为一个普通机器人生活着. ", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue('直到发生了那件事…', 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm41.img/PromiseOfHeaven_vocaless", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust8", 0, 500, 0, 0, 7, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("究竟是偶然, 还是要发生的事情注定会发生. ", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("我还是第一次见到那样的超级人造人. ", 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("在黑色天堂内除了我之外, 唯一拥有感情的机器人…", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3000, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                  cm.npc_SetForceMove("oid=42498948", 1, 260, 120);
                                                  cm.npc_SetForceMove("oid=42498949", 1, 260, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 2500, -2700, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("…所以，我差点受到警告。\r\n这次如果再晚点，说不定就真的要被判定为不良品了。", 37, 2155114, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("原来如此。", 37, 2155112, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155114, null, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=42498948", 1, 160, 120);
                                                              cm.npc_SetForceMove("oid=42498949", 1, 160, 120);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 2500, -2500, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("嗯…这里好安静，真的很不错。\r\n不是吗？", 37, 2155114, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("太过安静会有什么问题吗？\r\n那在这附近也放上机器…", 37, 2155112, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=42498948"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.sendNormalTalk_Bottom("啊，不。我想说的不是这个。\r\n嗯。我想说这里能听到操作员你的声音，真的很不错。", 37, 2155114, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('我的声音很小吗？', 37, 2155112, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=42498948"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.sendNormalTalk_Bottom("不，不是那样的…嗯…", 37, 2155114, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155114, null, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=42498948", 1, 160, 120);
                                                                              cm.npc_SetForceMove("oid=42498949", 1, 160, 120);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 2500, -2300, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=42498949", -1);
                                                                                    cm.sendNormalTalk_Bottom("到啦。我现在从这里走就行了。\r\n努力工作吧。", 37, 2155112, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("嗯，你慢走！", 37, 2155114, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=42498949", 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=42498949", 1, 50, 120);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=42498949", -1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("等等。", 37, 2155112, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("不过，#b你总是从这里经过的原因#k是什么呢？\r\n这里好像不是智能机器人的通道啊？", 37, 2155112, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("啊，啊，那个。", 37, 2155114, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我发现，这里是#fs18##b前往集合场所\r\n最近的路#k#fs16#！", 37, 2155114, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("…是这样啊。\r\n我知道了。", 37, 2155112, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=42498949", 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=42498949", 1, 1050, 120);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("啊，那个…请慢走！", 37, 2155114, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155114, null, cm.getPlayer().getId());
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=42498948", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=42498948", -1, 550, 300);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      cm.npc_LeaveField("oid=42498949");
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.warp(310070494, 0, false);
                                                                                                                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                      cm.npc_LeaveField("oid=42498948");
                                                                                                                      cm.npc_LeaveField("oid=42498948");
                                                                                                                      cm.npc_LeaveField("oid=42498949");
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