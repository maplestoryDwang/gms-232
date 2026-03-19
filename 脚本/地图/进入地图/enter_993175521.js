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
      cm.forceCompleteQuest(100446);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062255, "oid=27893840", 350, 10, 12, 300, 400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27893840", "summon", 0, 0);
      cm.npc_ChangeController(9062259, "oid=27893841", 250, 10, 12, 200, 300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27893841", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 250, 10);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#就是这幅画。找到了。", 37, 9062255, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, 580, -126);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.onSetBackEffect('portrait', 1, 0, 0, 0);
                  cm.sendNormalTalk_Bottom("那幅画是……", 57, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b#b#h0##k#k，你能不能念一下画的名字？", 37, 9062255, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b世界上最美的丽人……#k", 57, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这幅画被评为整个美术史上#b最完美的肖像画#k之一。\r\n你知道这幅画花了多久完成吗？", 37, 9062255, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#听说这画家没有结婚，直到离世，整整花了#b30年时间#k来画这幅画。", 37, 9062255, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这也是这幅画出名的原因之一。\r\n#b花费一生完成的杰作……#k.\r\n即便获得如此高的赞誉，这个画家还是因为最后没有画出#b完美的微笑#k而难过不已。", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#因为那#b画的模特#k，也是画家的#b未婚妻#k……", 37, 9062255, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#就是你，离开了这个世界。", 37, 9062255, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#那副画是……", 37, 9062259, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("就是摘下面具的你的样子。", 57, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#一定要#b完成我的肖像画的约定#k……\r\n还有#b要相守一生的誓言#k都……", 37, 9062259, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你全部都遵守了。\r\n我这次……又晚你一步啊。", 37, 9062259, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你的未婚夫从没忘记过你。", 37, 9062255, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是的……我现在都想起来了……\r\n我因病快要离世前，#b陪在我身边，紧紧抓着我的手的#k他……", 37, 9062259, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#即使我死了也不曾忘记我……\r\n真是个善良的人……", 37, 9062259, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 250, 10);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#如果到你们所说的#b死者世界#k去，是不是也能见到我的未婚夫呢？", 37, 9062259, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我也没有去过，所以没法肯定地告诉你。\r\n但既然是你的未婚夫……他肯定会在哪里等着你吧？", 37, 9062255, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#是啊……他的话，会一直等我的……不管是10年还是100年。", 37, 9062259, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#不能再让他等我了。这次我不能再迟到了……", 37, 9062259, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我会照你们说的，#b在午夜的时候摘去假面#k。", 37, 9062259, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#可以请你们暂时离开吗？\r\n我想安静地看一会我亲爱的未婚夫为我所作的画像。", 37, 9062259, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, 580, -126);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("#fs24#微笑的假面久久地注视着肖像画。", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("#fs24#画中，她的微笑非常灿烂、美丽。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("#fs24#是她的假面无法与之相比的。", 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#再等一等。帅气的画家先生。", 37, 9062259, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/finishEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.npc_LeaveField("oid=27893840");
                                                                                              cm.npc_LeaveField("oid=27893841");
                                                                                              cm.dispose();
                                                                                              cm.warp(993175400, 1, false);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}