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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400917, "oid=6479304", 10, -55, 9, -40, 60, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6479304", "summon", 0, 0);
      cm.npc_setForceFlip("oid=6479304", 1);
      cm.npc_SetSpecialAction("oid=6479304", "stand", 10000, 1);
      cm.npc_ChangeController(9400836, "oid=6479305", -205, -55, 6, -255, -155, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6479305", "summon", 0, 0);
      cm.npc_setForceFlip("oid=6479305", 1);
      cm.Npc_Fadeout("oid=6479305", 0, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1100, 3000, -55, -95);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3800);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=6479304", -1);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#神那，剑斗那家伙好像在上面。", 37, 9130081, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#旁边是公主吗？听不清她在说些什么。神那，我们凑近点吧？", 37, 9130081, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("小白……偷听可不是好事情！樱乃姬公主也需要休息的。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#就只考虑公主！我也需要休息嘛！给我一块星星糖就好……", 37, 9130081, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你可真是……稍等一会儿。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(17, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#嘿嘿，我就是因为这样才喜欢神那的！", 37, 9130081, false, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                cm.npc_SetSpecialAction("oid=6479304", "jump", 400, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(800);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                  cm.npc_SetSpecialAction("oid=6479304", "jump", 400, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                    cm.npc_SetSpecialAction("oid=6479304", 'jump', 400, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=6479304", "stand", -1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.Npc_Fadeout("oid=6479305", 255, 1500);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#神那、小白。看来你们很享受宴会呢。", 37, 9130010, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#土御门春秋！", 37, 9130081, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('老师。', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#神那，你坚持阴阳正道从而拯救了世界。请容许我再次赞美你的伟大。", 37, 9130010, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#阴阳巨变……在一切都将消逝的混乱中，你是如何找到出路的呢？", 37, 9130010, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那时，我面对的是破坏循环与秩序的黑暗力量。", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("看到那黑暗力量的瞬间……我有种迷失的感觉。不，我已经迷失了。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("但在黑暗的尽头……所有人的愿望变成了指引我的光芒，这才得以回归阴阳之道。", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("当然，小白也帮了我不少忙。", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#神那，我好感动！！", 37, 9130081, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                                                          cm.npc_SetSpecialAction("oid=6479304", "jump", 800, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                                                            cm.npc_SetSpecialAction("oid=6479304", 'jump', 800, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=6479304", 'stand', 10000, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=6479304", 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=6479304", -1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=6479304", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=6479304", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
                                                                                        cm.npc_SetSpecialAction("oid=6479304", 'jump', 500, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=6479304", "stand", 10000, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionPL.img/effect/restart_kanna/0", 0, 1500, 0, -60, 12, 4, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#你正行走在连我都未曾踏足的阴阳正道上。真厉害。", 37, 9130010, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那些破坏阴阳正道的人依然存在，所以我们仍任重道远。", 37, 9130010, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#神那，以后也拜托你了。", 37, 9130010, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("是，老师。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#神那啊啊啊啊~", 37, 9130021, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊！公主在呼唤我们。走吧！快点！！", 37, 9130081, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_Hero9(0, 3000);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                            cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.forceStartQuest(39701, '');
                                                                                                                              cm.eventSKill(0);
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(993120000, 5, false);
                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                              cm.npc_LeaveField("oid=6479304");
                                                                                                                              cm.npc_LeaveField("oid=6479304");
                                                                                                                              cm.npc_LeaveField("oid=6479305");
                                                                                                                              cm.npc_LeaveField("oid=6479305");
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}