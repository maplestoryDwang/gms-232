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
      cm.hideNpc(3003750);
      cm.npc_ChangeController(3004081, "oid=368340", -364, 335, 48, -414, -314, 4, true, 0, false);
      cm.npc_ChangeController(3004151, "oid=1972355", -470, 305, 35, -520, -470, 0, true, 0, false);
      cm.npc_ChangeController(3004158, "oid=368342", -622, 335, 46, -649, -572, 4, true, 0, false);
      cm.npc_ChangeController(3004158, "oid=368343", -579, 305, 43, -604, -529, 4, true, 0, false);
      cm.npc_ChangeController(3004158, "oid=368344", 403, 314, 61, 353, 453, 5, true, 0, false);
      cm.npc_ChangeController(3004158, "oid=368345", 480, 316, 62, 430, 530, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("BgmEvent2/glory_Base", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -260, 300);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -346, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.npc_ChangeController(3004431, "oid=503571", 196, 255, 37, 146, 246, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=503571", 'summon', 0, 0);
        cm.npc_ChangeController(3004437, "oid=503572", 14, 255, 27, -36, 64, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=503572", "summon", 0, 0);
        cm.npc_ChangeController(3004437, 'oid=503573', -70, 255, 28, -120, -20, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=503573", "summon", 0, 0);
        cm.npc_ChangeController(3004436, 'oid=503574', -12, 329, 53, -62, 38, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=503574", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=503575", 90, 321, 59, 40, 140, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=503575", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#几日后……世界边界。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.npcMove(3004433, 0, -20, 0);
          cm.npcMove(3004151, 0, 10, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#h0#，你知道这次作战的目的吗？", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.askMenu_Bottom("这次作战的目的是……\r\n#L0##b为了阻止联盟分裂#l\r\n#L1##b为了确认古代神的力量#l\r\n#L2##b为了守护圣地塞尔提乌#l\r\n#L3##b为了保障通往大陆的航路畅通#l", 56, 0);
              } else {
                if (status === V++) {
                  if (e == 1) {
                    cm.sendNormalTalk_Bottom("是的，最重要的是#r确认古代神的力量#k。", 37, 1540451, false, true);
                  } else {
                    cm.sendNormalTalk_Bottom("并不是……准确答案，\r\n请不要忘记，最重要的是#r确认古代神的力量#k。", 37, 1540451, false, true);
                  }
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("如你所见，现在不论是骑士团还是反抗者，都没有多余精力断然展开额外的战斗。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("所以，派遣部队以万神殿方面作为主力，由#b伊黛娜#k大人负责指挥。", 37, 1540451, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("一旦士兵们准备就绪，我方就安排他们作为后续部队出发。", 37, 1540451, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("胡克负责骑士团，切奇则负责反抗者部队。", 37, 1540451, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 158, 280);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……这个封印……", 37, 3004431, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, -346, 280);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("她既是冷静的谋士，也是能力卓越的魔法师，没有人比她更适合领导这次作战了。", 37, 1540451, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("不过……诺巴王国对#r高等翼人#k的仇恨由来已久。", 37, 1540451, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我担心她在对抗翼人族的时候，会失去理智。\r\n如果真的出现了这种情况，还请#h0#临机应变。", 37, 1540451, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3004433, 'oid=503988', -136, 255, 34, -186, -86, 1, true, 1500, false);
                                              cm.npc_SetSpecialAction("oid=503988", "summon", 0, 0);
                                              cm.npc_LeaveField('oid=503571');
                                              cm.npc_LeaveField("oid=503571");
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#准备好了。\r\n我修改了封印上的古代术式，然后再激活瞬间移动魔法阵。\r\n这样一来，就可以一口气越过大海了。", 37, 3004433, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#居然让我们以这种方式跨越未知的海洋，真是太可惜了。", 37, 3004435, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽然格兰蒂斯的海洋汹涌壮阔，\r\n但是有机会的话，去其中探索一番也别有风味。", 37, 3004433, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#哈哈，你这么一说，我更有兴趣了！", 37, 3004435, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#请你一定要冷静……", 37, 3003675, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_ChangeController(3004431, "oid=504132", -96, 305, 51, -146, -46, 1, true, 1500, false);
                                                          cm.npc_SetSpecialAction("oid=504132", "summon", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#人员清点完毕。出发吧。", 37, 3004431, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2, 220);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face10##h0#。路上小心。", 37, 3003750, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face10#大家，请务必平安归来。", 37, 3003750, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("对了！说不定在塞尔提乌还有能够套取资金的地方，一定！一定要去确认……", 37, 1540451, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#好了，该出发了。", 37, 3004431, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("确认！！", 37, 1540451, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/5"], [0, 0, 310, 1, 1000, 1, 1, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/6"], [0, 0, 310, 1, -20, 1, 1, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/tel", 100);
                                                                                      cm.userSetFieldFloating(993141003, 3, 3, 3);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField('oid=503572');
                                                                                        cm.npc_LeaveField('oid=503572');
                                                                                        cm.npc_LeaveField("oid=503573");
                                                                                        cm.npc_LeaveField("oid=503573");
                                                                                        cm.npc_LeaveField("oid=504132");
                                                                                        cm.npc_LeaveField('oid=504132');
                                                                                        cm.npc_LeaveField('oid=503574');
                                                                                        cm.npc_LeaveField("oid=503574");
                                                                                        cm.npc_LeaveField('oid=503575');
                                                                                        cm.npc_LeaveField("oid=503575");
                                                                                        cm.npc_LeaveField("oid=503988");
                                                                                        cm.npc_LeaveField("oid=503988");
                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(993141003, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("拜托你……一定要去确认。", 37, 1540451, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else if (status === V++) {
                                                                                              cm.warp(410000510, 0, false);
                                                                                              cm.forceStartQuest(39801, '');
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