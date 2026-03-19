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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 0);
      cm.npc_ChangeController(3004652, "oid=123320389", -135, 0, 2, -185, -85, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123320389", 'summon', 0, 0);
      cm.npc_ChangeController(3004663, "oid=123320390", 360, -40, 3, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123320390", "summon", 0, 0);
      cm.Npc_Fadeout("oid=123320390", 0, 500);
      cm.npcMove(3004663, 0, -150, 0);
      cm.npc_SetSpecialAction("oid=123320390", "special2", -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 125, -200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呃，下水道的味道……", 56, 0, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#小心。这条地下铁路非～常复杂。", 36, 3004652, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#就像蜘蛛网一样交织在一起，稍不注意就会迷路。", 36, 3004652, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("所以你才想借地图吗？", 56, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯，那是详细记录着地下铁路构造的唯一的、#b神圣的地图#k。", 36, 3004652, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("神圣？", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#贝尔大叔说要是被T-boy抢走，就会很危险，所以把它藏了起来。", 36, 3004652, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哈……只要有了那个东西，就能避开T-boy的眼睛，安全地来往于地上世界了。", 36, 3004652, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#啊，我们到了。", 36, 3004652, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#打开这个盖子……", 36, 3004652, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/metal", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#唔啊！！", 36, 3004652, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                      cm.onCameraTilt(-180, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#啊呀呀呀……", 36, 3004652, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我们钻到列车底下了吗？", 56, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.onCameraTilt(0, 500);
                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, 125, -111);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#还好T-boy不在这里。", 36, 3004652, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这些都是什么装置？", 56, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#好像是研究室。但怎么会在这里……？", 36, 3004652, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123320389"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=123320390", 255, 500);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/drone2", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setAmbience("SoundEff.img/blackHeaven/scanner_alert", 100, 60);
                                                                cm.sendNormalTalk_Bottom("#face0#哔哔哔。发现入侵拿着！发现入侵者！", 36, 3004663, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(3004667, "oid=123327296", 240, -10, 2, 190, 290, 1, true, 300, false);
                                                                  cm.npc_SetSpecialAction("oid=123327296", 'summon', 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(3004667, "oid=123327332", 360, -10, 3, 310, 410, 1, true, 300, false);
                                                                    cm.npc_SetSpecialAction("oid=123327332", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(3004667, "oid=123327476", 480, -10, 3, 430, 530, 1, true, 300, false);
                                                                      cm.npc_SetSpecialAction("oid=123327476", "summon", 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#啊，被发现了！快逃……", 36, 3004652, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("不，已经太晚了。", 56, 0, true, true, 1);
                                                                        } else if (status === V++) {
                                                                          cm.warp(450014100, 0, true);
                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.forceCompleteQuest(37607);
                                                                          cm.gainExp(8782820);
                                                                          cm.updateInfoQuest(37600, "10=h0;11=h0;02=h0;12=h1;09=h0");
                                                                          cm.npc_LeaveField("oid=123320389");
                                                                          cm.npc_LeaveField("oid=123320390");
                                                                          cm.npc_LeaveField("oid=123327296");
                                                                          cm.npc_LeaveField("oid=123327332");
                                                                          cm.npc_LeaveField("oid=123327476");
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