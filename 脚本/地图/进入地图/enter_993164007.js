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
      cm.npc_ChangeController(3004907, 'oid=363533', 1145, -41, 6, 1095, 1195, 1, false, 0, false);
      cm.npc_ChangeController(3004908, "oid=363534", 981, 63, 4, 931, 1031, 0, false, 0, false);
      cm.npc_ChangeController(3004910, "oid=564180", 420, -60, 8, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=564180", "summon", 0, 0);
      cm.npc_ChangeController(3004911, "oid=564181", 494, -60, 8, 444, 544, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=564181", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 355, -74);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 365, -7);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1058, -36);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.sendNormalTalk_Bottom("#face0#唔……", 36, 3004912, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#怪……怪物……", 36, 3004912, true, true, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#呼~看样子你又酣畅淋漓地干了一场啊。", 36, 3004910, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3004904, 'oid=564184', 251, 30, 3, 201, 301, 0, true, 1000, false);
                        cm.npc_SetSpecialAction('oid=564184', "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3004909, 'oid=564185', 155, 30, 1, 105, 205, 0, true, 1000, false);
                          cm.npc_SetSpecialAction("oid=564185", 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=564181", -1);
                            cm.sendNormalTalk_Bottom("#face4#啧啧……这次的这些家伙也坏了。", 36, 3004904, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#喂，该隐，我看你为了这点没多少的点数还在认真攒呢……\r\n难不成还在四处找那个#b记忆里的理想国#k？", 36, 3004904, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(8);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#怎么？难不成是想找茬吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#不是，我的意思是~\r\n我不太明白为什么非要这么苦苦挣扎。", 36, 3004904, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#别这样，你不如就和我一起在这里长住吧？\r\n我供你吃供你睡，你还可以靠惩治罪犯解压，多好啊？", 36, 3004904, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#一年。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 3004904, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#准确来说，整整一年后，我就会出去。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#所以别乱来。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#……", 36, 3004904, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#忍着，提拉格，那家伙很快就要走了。", 36, 3004910, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#是啊，和我们不同。", 36, 3004911, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈，这可真是，也不知道大家是单纯还是真傻……", 36, 3004904, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3004911, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#瞧瞧那些家伙。", 36, 3004904, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 10000, 1092, -7);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#那些人#r夺走了大家的记忆#k，并以此为担保制作战斗兵器。", 36, 3004904, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#这帮家伙可和那些抢人财物的普通坏人截然不同，\r\n是#r真正的恶魔#k。", 36, 3004904, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#这些家伙真的能像我们一样……", 36, 3004904, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 365, -7);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#这么#b听话又忠心耿耿的狗#k，他们又岂会乖乖就放手。", 36, 3004904, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#face0#嗯……', 36, 3004911, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#没错……我知道这话倒是没错，\r\n可眼下这不是无计可施了嘛？", 36, 3004910, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#来，听我说，\r\n我最近新交了个朋友……", 36, 3004904, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#我还以为基本上都只是瞎闹腾，还有吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#……", 36, 3004904, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#那我就先告辞了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 213, -7);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 265, 1);
                                                                                                                cm.npc_setForceFlip("oid=564184", -1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#我说，该隐。", 36, 3004904, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#看样子是老大太宠你了，你就误以为自己真的有本事了……", 36, 3004904, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#反正在这一行但凡有谁行差踏错就是万劫不复。", 36, 3004904, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#所以……不要犯错。", 36, 3004904, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face3#特别是，在我的面前。", 36, 3004904, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.forceCompleteQuest(39406);
                                                                                                                                    cm.getPlayer().levelUp();
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h0;82=h1;73=h0;83=h1;84=h1;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h1;54=h0;82=h1;73=h0;83=h1;84=h1;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h1;73=h0;83=h1;84=h1;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;83=h1;84=h1;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;83=h0;84=h1;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;83=h0;84=h0;85=h1");
                                                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;83=h0;84=h0;85=h0");
                                                                                                                                    cm.npc_LeaveField("oid=564180");
                                                                                                                                    cm.npc_LeaveField("oid=564181");
                                                                                                                                    cm.npc_LeaveField("oid=564184");
                                                                                                                                    cm.npc_LeaveField("oid=564185");
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(410000401, 0, true);
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}