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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -714, 285);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -568, 273);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#不过和从前相比，我的跑步速度好像还快了一点呢。", 36, 3005100, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face6#以前每次和朋友们赛跑，我都是倒数第一。", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.npc_ChangeController(3005110, 'oid=620342', -586, 289, 1, -636, -536, 1, true, 1500, false);
                cm.npc_SetSpecialAction("oid=620342", "summon", 0, 0);
                cm.npc_ChangeController(3005111, 'oid=620343', -488, 289, 1, -538, -438, 1, true, 1500, false);
                cm.npc_SetSpecialAction('oid=620343', 'summon', 0, 0);
                cm.npc_ChangeController(3005112, "oid=620344", -413, 289, 1, -463, -363, 1, true, 1500, false);
                cm.npc_SetSpecialAction("oid=620344", 'summon', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=620342"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=620343"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=620344"], [0, 0, 0, 1, -20, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#你们……", 36, 3005110, false, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#是那头流氓狼还有上次那个外乡人？", 36, 3005111, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.sendNormalTalk_Bottom("#face0#哇，好久不见！", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#你们搞什么……难不成是想来报上一次的仇？", 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#小的们，准备好了吗？", 36, 3005110, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom('#face0#是！', 36, 3005111, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005102, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === v++) {
                                    cm.npc_SetSpecialAction("oid=620342", "special", -1, 1);
                                    cm.npc_SetSpecialAction("oid=620343", "special", -1, 1);
                                    cm.npc_SetSpecialAction("oid=620344", "special", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#什……什么？", 36, 3005102, false, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#啦啦姐！！！", 36, 3005110, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#我这辈子都会当你是大姐的！", 36, 3005111, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face1#大……大姐？", 36, 3005100, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#我听说了，听说你吹出肥皂泡后，空中落下了巨大的瀑布，击败了领主和他的那些手下！", 36, 3005110, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_Unknown9(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else if (status === v++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.npc_LeaveField("oid=620342");
                                                  cm.npc_LeaveField("oid=620343");
                                                  cm.npc_LeaveField('oid=620344');
                                                  cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                                  cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;set=1");
                                                  cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h1;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                                  cm.forceStartQuest(36219, '');
                                                  cm.dispose();
                                                  cm.warp(410004003, 1, true);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      cm.sendNormalTalk_Bottom("#face0#那是元素灵，它应该是想要来帮助格里吧。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#格里大哥！", 36, 3005110, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我从很久之前便开始尊敬你了！！", 36, 3005111, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#什，什么嘛……这么突然。", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#竟然能下定决心迎战一直以来无人敢反抗的那个领主……", 36, 3005110, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#不是正面迎战，是那个元素灵自作主张……", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#好帅啊！咂咂！", 36, 3005112, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#都说不是的了！就不能好好听人说话嘛！", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#可还是……头一次，\r\n从前藏身于后巷的我们这些人会迎战领主……！", 36, 3005110, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom('#face0#……', 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我们一直以来只想着要欺负那些比我们弱小的人……\r\n我们已经深刻反省过了，请您成为我们的大哥吧！", 36, 3005111, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#我可没这个想法！我打算自己一个人走！", 36, 3005102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#大哥！别丢下我们啊！", 36, 3005110, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#大哥！！", 36, 3005111, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#格里，你真打算撇下那些人吗？", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#我不是说过嘛，我谁都不信，什么该死的大哥……", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#我并不打算正面迎战，还完债我就打算离开这座村庄。", 36, 3005102, true, true, 1);
                                    } else if (status === v++) {
                                      cm.forceCompleteQuest(36219);
                                      cm.gainExp(2283);
                                      cm.OnStartNavigation(410004003, 1, "3005163", 36219);
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