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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 64, -800);
      cm.npc_ChangeController(3004922, "oid=564451", 201, -778, 19, 151, 251, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=564451", 'summon', 0, 0);
      cm.setNPC_Fadein(3004922, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 167, -800);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#喂。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我一直在等你，德拉卡……", 36, 3004922, true, true, 1);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=564451", -1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=564451'], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#德、德拉卡……啊……", 36, 3004922, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你说在等人？等谁？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊……啊……", 36, 3004922, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#就算再搞其他小动作也无济于事。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#我总觉得这里面有猫腻，你要是老实交代，就能免遭一顿罪。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 5, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#别、别过来，你以为我会怕吗？", 36, 3004922, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#这家伙……有古怪啊……？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#？！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0", "oid=564451"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/fall", 100);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#切！！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#额啊……", 36, 3004922, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#等、等着瞧。", 36, 3004922, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField('oid=564451');
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#逃走了……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#那家伙怎么会有#r怨恨石#k？这件事可非同小可……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#（啊，这是……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_Hero9(0, 2500);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/4", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#这本手册上写的……是有关#r怨恨石#k的内容嘛？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#（德拉卡兹会从管理员那里周期性地领到怨恨石。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#（一般来说，是用手握紧后将其弄碎使用。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/page", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#（据推测怨恨石是在据点内造出来的，\r\n至于具体的制造方法就不得而知了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#（德拉卡兹的一名“医生”曾经提到过#b原型#k的存在……？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_屏幕渐入插图消失A(['00'], [700]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                            cm.sendNormalTalk_Bottom("#face2#原型啊……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#嗯……之前还有藏在据点的小鬼，\r\n现如今还有写有德拉卡兹内部情报的手册……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#现在到底发生了什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#你没问题吗？", 36, 3004916, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;76=h0;85=h0;77=h0");
                                                                                                        cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;77=h0");
                                                                                                        cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h1;77=h0");
                                                                                                        cm.forceCompleteQuest(39408);
                                                                                                        cm.getPlayer().levelUp();
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.dispose();
                                                                                                        cm.warp(410000418, 1, true);
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