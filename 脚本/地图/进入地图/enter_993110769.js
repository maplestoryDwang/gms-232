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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -184, 15);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -143, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18#几天后，遗迹深处"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#还期待随着黑魔法师消亡，我的诅咒也能够就此解除呢……\r\n果然并没有什么特别的变化啊。", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#又不一定来了这里就有什么好办法……", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#所以我为什么要千里迢迢跑回这种地方啊。", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3004118, "oid=5092549", -339, 28, 29, -389, -289, 0, false, 1500, false);
                      cm.npc_SetSpecialAction("oid=5092549", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#唉，勇士？", 37, 1013350, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#高尔根告诉过我，\r\n说是他看到有外面的家伙进入这里，可那个背影不知为何看起来有点眼熟……", 37, 1013350, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#所以我只是猜测有这样的可能就过来转一圈，没想到勇士你居然回来了呢！", 37, 1013350, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#这段时间的冒险怎么样啊？是不是超赞的？", 37, 1013350, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#(……应该可以将大致的情况告诉布里。)", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哇，这么说勇士击败了魔王啊！", 37, 1013350, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#我一辈子都会引以为豪的！\r\n关于曾经和击退黑魔法师的勇士一起冒险这件事！", 37, 1013350, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#当然，呃……称之为冒险未免有些太短暂，另外也没能帮上什么大忙，不过……", 37, 1013350, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#即便如此……即便如此，对我来说也真的是一场意义非凡的冒险。", 37, 1013350, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#日后每当遇到困难，我都会回想起和勇士你一起经历的冒险，鼓起勇气的！", 37, 1013350, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#哎呀，看样子我实在是打扰到勇士你了呢。", 37, 1013350, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#那我就先告辞了！\r\n我得去告诉高尔根，他可以放心了，嘿嘿。", 37, 1013350, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#记得再来玩哦！", 37, 1013350, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Npc_Fadeout("oid=5092549", 0, 700);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我的冒险对别人来说也能有非凡的意义吗……", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face6#哈……看样子并没有白来呢。", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#该动身了，去格兰蒂斯。", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#那里还有新的冒险，许多神秘的遗迹在等着我吧。", 37, cm.getPlayer().getGender() == 1 ? 1013358 : 1013359, true, true);
                                                                        } else {
                                                                          if (status === V++) {
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
                                                                                          cm.npc_LeaveField("oid=5092549");
                                                                                          cm.npc_LeaveField("oid=5092549");
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}