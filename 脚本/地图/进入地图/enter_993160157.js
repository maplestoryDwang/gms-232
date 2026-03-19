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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001667, "oid=16055078", 269, 267, 22, 219, 319, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=16055078", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 91, 420);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哟呵，来了位新客人嘛？", 37, 3001676, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#既然你来到了这里……就只能沦为我的玩物。", 37, 3001676, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#你说什么！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#我看像是被书怪上身了。", 37, 3001651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face7#书怪？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#那就是个没有朋友的孤独的家伙，\r\n也是，毕竟他还有个恶趣味，每次都喜欢给别人出晦涩难懂的谜题……", 37, 3001651, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#谜题啊……应该会挺有趣的。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……你喜欢谜题吗？", 37, 3001676, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#呵呵……要是不乐意，我就把你干掉，\r\n答错谜题的话也一样。", 37, 3001676, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face8#这，这倒是……挺杀气腾腾的嘛？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.askMenu_Bottom("#face0#那我就来出第一道题，“虽然就在近处，却绝对无法抓到，就是一个藏身于暗处的胆小鬼。”\r\n\r\n#b#L0#风#l\u3000#L1#影子#l\u3000#L2#水#l", 37, 3001676, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（那家伙的眼神变得凶狠起来……\r\n看来没有答对，再选选其他的答案吧。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.askMenu_Bottom("#face0#那我就来出第一道题，“虽然就在近处，却绝对无法抓到，就是一个藏身于暗处的胆小鬼。”\r\n\r\n#b#L0#风#l\u3000#L1#影子#l\u3000#L2#水#l", 37, 3001676, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.askMenu_Bottom("#face0#答对了呢，那第二题。“人人都有，却是个心机鬼，叫它慢点它偏就要快。”\r\n\r\n#b#L0#时间#l\u3000#L1#镜子#l\u3000#L2#金子#l", 37, 3001676, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哦，这次也答对了，你……还真是聪明啊，有意思。\r\n那我就接着出下一道题……", 37, 3001676, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（妖怪禅师身上的书怪接二连三地给出谜题，\r\n然后不知不觉间就流逝了这么多时间。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你让我很开心。", 37, 3001676, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face10#我嘛，就难得借此机会让脑瓜子转了转。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这些应该就足够了，\r\n呵呵……这就回到原先的地方吧？", 37, 3001676, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 266, 286);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#保重……", 37, 3001676, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=16055078", "special0", 1800, 1);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/appear", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=16055078");
                                                                            cm.npc_ChangeController(3001651, "oid=16057068", -316, 520, 17, -366, -266, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=16057068", "summon", 0, 0);
                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -646, 520);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -226, 550);
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
                                                                                  cm.setNpcSpecialActionReset("oid=16057068");
                                                                                  cm.npc_SetSpecialAction("oid=16057068", 'special3', 1800, 0);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.setNpcSpecialActionReset("oid=16057068");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -20, 460);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        cm.gainSkillBuff(80000268);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungEffect/6", 0, 500, 430, 120, 1, 4, 0, -1, 0, 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/complete", 100);
                                                                                          cm.userSetFieldFloating(993160157, 10, 10, 10);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.userSetFieldFloating(993160157, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.npc_LeaveField("oid=16057068");
                                                                                              cm.updateInfoQuest(39562, "NpcSpeech=30016831;do=1;clear=1");
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.warp(250010503, 0, false);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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