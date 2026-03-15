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
      cm.sendNormalTalk_Bottom("#face0#啊，你就是跟在守护者塞伦大人身后的……", 37, 3004442, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("有什么需要我帮忙的吗？", 57, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#请告诉黎明祭司们。\r\n黎明祈祷的时候，火焰祭司在故意放火。", 37, 3004442, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#他们肯定打算妨碍祈祷。", 37, 3004442, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("你为什么不自己说呢？", 57, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我说几遍都没有用。\r\n他们对噪音不敏感，肯定不会把我说的话当回事。", 37, 3004442, true, true);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("#face0#如果告诉守护者大人的话，她说不定会有什么对策。\r\n你愿意答应我的请求吗？", 37, 3004442);
                } else {
                  if (status === v++) {
                    cm.forceStartQuest(39806, '');
                    cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1;07=h1");
                    cm.sendNormalTalk_Bottom("#face0#谢谢。守护者大人好像正在前往东城墙。", 37, 3004442, false, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("去东边城墙看看吧。", 57, 0, true, true);
                    } else if (status === v++) {
                      cm.OnStartNavigation(410000500, 1, "3004407", 39806);
                      cm.npc_LeaveField("oid=368291");
                      cm.npc_LeaveField("oid=368292");
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
function stage0(g, w, a) {
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
      cm.npc_ChangeController(3004436, "oid=517215", 620, 22, 7, 570, 770, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=517215", 'summon', 0, 0);
      cm.npcMove(3004436, 0, -80, 0);
      cm.Npc_Fadeout("oid=517215", 0, 500);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 518, -11);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 563, 10);
    } else {
      if (status === v++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === v++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === v++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#欢迎光临。你是朝圣者吧？啊，是刚刚的那位！", 37, 3004404, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("（露出可怕的表情……）", 57, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#你先听我解释……啊呀！！我的脚好像崴了。", 37, 3004404, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("你没事吧？", 57, 0, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#这里是红焰斯皮萨的圣地。听说以强大的火焰魔法著称的#r斯皮萨教团#k在古代神时期一度十分活跃。", 37, 3004404, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#但是，古代神的时代结束后，他们失去了引以为傲的火焰魔法。", 37, 3004404, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#最终，教团名存实亡，失去了栖身之处的教徒也四散而去。", 37, 3004404, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#但是据说，他们因为无法忘记烟火，所以制成了#r黑火药#k。", 37, 3004404, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("黑火药？", 57, 0, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#看那边。", 37, 3004404, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 550, -10);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1"], [0, 682, -180, 1, 0, 1, 1, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/blow", 100);
                                        cm.userSetFieldFloating(410000500, 3, 3, 20);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === v++) {
                                          cm.userSetFieldFloating(410000500, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#是他们制造的黑火药被引爆了。", 37, 3004404, false, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#听说引爆时的火焰越漂亮，就证明拥有的神力越强大。", 37, 3004404, true, true);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("嗯…… ", 57, 0, true, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("嗯？？", 57, 0, true, true);
                                                } else {
                                                  if (status === v++) {
                                                    cm.Npc_Fadeout("oid=517215", 255, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#哈哈……这种事怎么能少了我呢。", 37, 3003675, false, true);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3"], [0, 622, -200, 1, 0, 1, 1, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                                          cm.userSetFieldFloating(410000500, 5, 5, 3);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.userSetFieldFloating(410000500, 0, 0, 0);
                                                            cm.sendNormalTalk_Bottom("#face0#哦哦哦！！！", 37, 3004444, false, true);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#呼…… ", 37, 3003675, true, true);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊！#h0#！", 37, 3003675, false, true);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("……（还是装作没看到吧。）", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.forceCompleteQuest(39806);
                                                                          cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else if (status === v++) {
                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                              cm.npc_LeaveField('oid=517215');
                                                                              cm.npc_LeaveField("oid=517215");
                                                                              cm.eventSKill(0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.setStandAloneMode(false);
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