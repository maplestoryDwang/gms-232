var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.setNPC_Fadein(3004960, 1);
      cm.setNPC_Fadein(3004967, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 195, -16);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 3, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 350, -50);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#怎么样了？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
            cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哪怕稍微再晚一步可就糟糕了，所幸性命无忧。", 36, 3004916, true, true, 1);
              cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face4#这样吗……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === v++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 30, 0);
                    cm.sendNormalTalk_Bottom("#face0#你打算怎么做……", 36, 3004916, false, true, 1);
                    cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我还有记忆没有要回来。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#不要走。", 36, 3004914, true, true, 1);
                        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/6', 100);
                      } else {
                        if (status === v++) {
                          cm.npc_ChangeController(3004914, "oid=567045", 333, -6, 3, 283, 383, 1, true, 500, false);
                          cm.npc_SetSpecialAction("oid=567045", 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face3#现在那块怨恨石也没了嘛。", 36, 3004914, false, true, 1);
                            cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face2#……无所谓。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face2#但是！", 36, 3004914, true, true, 1);
                                    cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#我看了看研究笔记。", 36, 3004916, true, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#该隐说得没错，\r\n你从一开始就不需要#r怨恨石#k。", 36, 3004916, true, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/14', 100);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#头目一直在找的那个#b原型#k就是你，\r\n他们复制从你身上提取出的力量，供给了德拉卡兹。", 36, 3004916, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#那是什么……", 36, 3004914, true, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/12", 100);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face4#管理员……之前是这么说的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#是，原型也没事。", 36, 3004908, false, true, 1);
                                                        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 2);
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face4#是，应该是吧……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                              cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#所以老大保护我……操控……记忆……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                  cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#是叫#r黑色诺巴……#k的吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face4#事到如今我才明白，一切笼罩的假象，以及里面的真实记忆……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm56/HappyBirthdayMyDearShort", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.fieldEffect_屏幕渐入插图A(['effect', "Effect/Direction25.img/Dlep6/effect/0", 'cc'], [1, 10, 10, 1, 2000, -1, 0, 0, -1]);
                                                                              cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/3/0", 'cc'], [1, 0, 0, 0, 2000, -1, 0, 0, -1]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [5000]);
                                                                                  cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/kain/illust/3/1", 'cc'], [1, 0, 0, 0, 5000, -1, 0, 0, -1]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === v++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#打从一开始……就没什么可以回去的地方……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/22", 100);
                                                                                    } else {
                                                                                      if (status === v++) {
                                                                                        cm.fieldEffect_屏幕渐入插图消失A(['01'], [3500]);
                                                                                        cm.fieldEffect_屏幕渐入插图消失A(["effect"], [3500]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                      } else {
                                                                                        if (status === v++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#该隐？该隐！！", 36, 3004914, false, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/23', 100);
                                                                                        } else {
                                                                                          if (status === v++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#这孩子，让开。", 36, 3004916, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/24", 100);
                                                                                          } else {
                                                                                            if (status === v++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 155, -18);
                                                                                            } else {
                                                                                              if (status === v++) {
                                                                                                cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === v++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                } else {
                                                                                                  if (status === v++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/malice", 100);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                                                                                                    cm.npc_LeaveField("oid=567045");
                                                                                                    cm.forceStartQuest(39430, '');
                                                                                                    cm.forceCompleteQuest(39421);
                                                                                                    cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                  } else {
                                                                                                    if (status === v++) {
                                                                                                      cm.forceStartQuest(39456, '');
                                                                                                      cm.forceCompleteQuest(39456);
                                                                                                      cm.sendNormalTalk_Bottom("#face0#该隐到底……怎么样了？", 36, 3004914, false, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100);
                                                                                                    } else {
                                                                                                      if (status === v++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "的恶意，被唤醒了……", 36, 3004916, true, true, 1);
                                                                                                        cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/26", 100);
                                                                                                      } else {
                                                                                                        if (status === v++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === v++) {
                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === v++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === v++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#该隐……", 36, 3004914, false, true, 1);
                                                                                                                cm.effect_Voice("Voice6.img/kain/21/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                              } else {
                                                                                                                if (status === v++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === v++) {
                                                                                                                    cm.fieldEffect_Hero9(0, 2500);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                  } else if (status === v++) {
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(410000418, 3, true);
                                                                                                                    cm.changeJob(6310);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}