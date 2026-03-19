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
      cm.npc_ChangeController(9401123, "oid=8679406", -350, 20, 14, -400, -300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8679406", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=8679407", -540, 50, 13, -590, -490, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=8679407", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -450, 150]);
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
            cm.sendNormalTalk_Bottom("喂！喂！请你打起精神！", 37, 9401029, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=8679406", -1, 80, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                cm.sendNormalTalk_Bottom("如果现在睡着就不好了！喂！！！！", 37, 9401029, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b莫妮卡，你轻点…", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呃……呃呃…… ", 37, 9401030, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b你清醒了吗？！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……这……这里…… ", 37, 9401030, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("还能是哪里！还是你之前晕倒的地方！", 37, 9401029, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("第……第几层？", 37, 9401030, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b地下3层。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=8679407"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("……几乎快上去了啊…… ", 37, 9401030, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b你说上去？", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("呃呃……你能扶我一把吗？", 37, 9401030, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b当然。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=8679406"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.sendNormalTalk_Bottom("等，等一下！", 37, 9401029, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b莫妮卡？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=8679406", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=8679406", 1, 150, 150);
                                                cm.sendNormalTalk_Bottom("队长，借一步说话。", 37, 9401029, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=8679406", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("呃呃……怎么了？", 37, 9401030, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("（窃窃私语……队长，那个人一定是从更底层上来的，他的衣服都是湿的。如果将他收编进我们远征队，一定会大有帮助……窃窃私语）", 37, 9401029, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("……我都听见了…… ", 37, 9401030, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                              cm.sendNormalTalk_Bottom("啊哦，这样的话！我就直截了当地说了，请你加入我们远征队！", 37, 9401029, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("很抱歉……我无法归属于任何地方。", 37, 9401030, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=8679407"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.npc_SetForceMove("oid=8679406", -1, 130, 140);
                                                                  cm.sendNormalTalk_Bottom("为什么！？", 37, 9401029, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b莫妮卡，不要问如此让人为难的问题。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("那，那我就不问了，不过我们也无法帮助你！", 37, 9401029, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=8679406", 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=8679406", -1);
                                                                          cm.sendNormalTalk_Bottom("（窃窃私语……队长，就相信我吧！）", 37, 9401029, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=8679406", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=8679406", -1);
                                                                                cm.sendNormalTalk_Bottom("嗯～～你应该知道吧？每支远征队都有各自的探险区域。等我们走后，总有一天会有其他远征队走上这条路的！", 37, 9401029, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("如果你不是有什么特别大的苦衷，最好还是加入我们远征队吧！", 37, 9401029, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我们队长特别帅气，我也很强大！一定会和你成为很好的伙伴！", 37, 9401029, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……都这么威胁我了，还说是伙伴？", 37, 9401030, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("怎，怎么会是威胁呢！是提议，提议！", 37, 9401029, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("不可以拒绝的……提议？", 37, 9401030, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("……别管我了，你们走吧。", 37, 9401030, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("这也是一种……命运吧…… ", 37, 9401030, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b莫妮卡，他肯定是有什么苦衷…… ", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我的天哪！还有什么比生命更重要的，你居然会这么说？你是怎么说出这种话的？", 37, 9401029, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("某些人为了多活一段时间而拼命挣扎，而你却如此轻易地放弃了可以生存下来的机会！这也不是什么很困难的事情啊，也不是让你一辈子都做这件事。", 37, 9401029, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("你至少可以先答应下来，然后选择逃跑什么吧！", 37, 9401029, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b莫妮卡，冷静点…", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("……对不起，队长。", 37, 9401029, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("……哈啊……", 37, 9401030, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("……你的威胁，我接受了。", 37, 9401030, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("…… ", 37, 9401029, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#b我们还是先回本部为好。", 57, 0, true, true);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.warp(867147004, 0, false);
                                                                                                                          cm.eventSKill(0);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                          cm.forceCompleteQuest(64768);
                                                                                                                          cm.npc_LeaveField("oid=8679406");
                                                                                                                          cm.npc_LeaveField("oid=8679406");
                                                                                                                          cm.npc_LeaveField("oid=8679407");
                                                                                                                          cm.npc_LeaveField("oid=8679407");
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