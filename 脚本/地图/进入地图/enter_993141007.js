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
      cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -840, 24);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004441, "oid=510203", 154, 16, 13, 104, 204, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=510203", "summon", 0, 0);
        cm.npc_ChangeController(3004430, "oid=510204", -902, 47, 32, -952, -852, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510204", 'summon', 0, 0);
        cm.npc_ChangeController(3004437, "oid=510205", -1157, -4, 2, -1207, -1107, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510205", "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=510206", -1157, 46, 35, -1207, -1107, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510206", "summon", 0, 0);
        cm.npc_ChangeController(3004439, 'oid=510207', 220, -14, 71, 170, 270, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=510207", 'summon', 0, 0);
        cm.npc_ChangeController(3004439, "oid=510208", 220, 47, 45, 170, 270, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=510208', "summon", 0, 0);
        cm.npc_ChangeController(3004433, "oid=510209", 30, -4, 15, -20, 80, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510209", 'summon', 0, 0);
        cm.npc_ChangeController(3004431, "oid=510210", -140, 1, 16, -190, -90, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510210", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=510211", -140, 40, 39, -190, -90, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=510211', "summon", 0, 0);
        cm.npc_ChangeController(3004436, "oid=510212", -250, -4, 18, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=510212", "summon", 0, 0);
        cm.npc_ChangeController(3004451, "oid=510213", -900, -80, 62, -950, -850, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=510213", "summon", 0, 0);
        cm.npc_ChangeController(3004452, "oid=510214", -800, -80, 59, -850, -750, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=510214", "summon", 0, 0);
        cm.npcMove(3004430, 0, -10, 0);
        cm.npcMove(3004431, 0, -40, 0);
        cm.npcMove(3004436, 0, -40, 0);
        cm.npcMove(3004435, 0, 20, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1050, 20);
        cm.npc_SetForceMove("oid=510204", 1, 500, 68);
        cm.npc_SetForceMove("oid=510205", 1, 640, 68);
        cm.npc_SetForceMove('oid=510206', 1, 640, 68);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 730);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(15000, 0, 2000, 15000, 70, 24);
          } else {
            if (status === V++) {
              cm.addPopupSay(3004451, 2000, "#face0#是那个人吗？真的是" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "击败了神？", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.addPopupSay(3004452, 2000, '#face0#' + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "比我想的要小，简直就是个小孩子啊？", '', 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.addPopupSay(3004451, 2000, "#face0#嘘，会被" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + '听到的。', '', 0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(7000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#欢迎您归来，卡莱尔殿下。", 37, 3004441, false, true);
                      cm.effect_Voice("Voice5.img/CH2/Priest/1", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#陛下呢？", 37, 3004433, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Carlyle/18", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#陛下的病情没有好转，正在休息。", 37, 3004441, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Priest/2", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#请问一起来的这几位是？", 37, 3004441, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Priest/3", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#他们是前来支援塞尔提乌的冒险岛联盟。\r\n还有这位，是击败了冒险岛世界堕落超越者的#b对抗者#k。", 37, 3004433, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Carlyle/19", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#对抗者#b#h0##k？哼，与传闻说的很不一样啊。\r\n我听说对抗者是位挥舞巨剑的高大巨人？", 37, 3004441, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Priest/4", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#而这位朋友……看起来却平平无奇。", 37, 3004441, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Priest/5", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#没想到像您这么睿智的人，也会听信街头巷尾的留言。", 37, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/20", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#哼……您这么说我真是惭愧。", 37, 3004441, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Priest/6", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#但说真的，比起人类消灭神的说法，传闻听起来都更可信些。", 37, 3004441, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Priest/7", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#王子殿下，恕我直言，我对他们的身份还是有点怀疑。\r\n他们真的来自大洋彼岸么？", 37, 3004441, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Priest/8", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/21", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                              cm.sendNormalTalk_Bottom("#face1#您对远道而来的客人如此无礼，是在质疑我吗？", 37, 3004433, false, true);
                                              cm.effect_Voice("Voice5.img/CH2/Carlyle/22", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是我失言了。我向各位赔罪。", 37, 3004441, false, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Priest/9", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#但是……我依然持保留态度。", 37, 3004441, false, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Priest/10", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#希望各位谨言慎行，以免招来太阳的愤怒，让整个圣地无辜遭殃。", 37, 3004441, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Priest/11", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Npc_Fadeout("oid=510203", 0, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=510207", 0, 500);
                                                              cm.Npc_Fadeout('oid=510208', 0, 500);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Npc_Fadeout("oid=510204", 0, 500);
                                                                cm.Npc_Fadeout("oid=510205", 0, 500);
                                                                cm.Npc_Fadeout('oid=510206', 0, 500);
                                                                cm.sendNormalTalk_Bottom('#face1#……', 37, 3004433, false, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/23", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#大神官的待客之道真不客气啊。", 37, 3004431, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/13", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=510209", -1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -129, 24);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#啊，对不起，是我们的人失礼了……", 37, 3004433, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/24", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我是无所谓……可他那番话是说给王子殿下听的吧。你们觉得呢？", 37, 3004435, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Hawkeye/2", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#有这个可能。", 37, 3004431, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/14", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=510203", -1);
                                                                              cm.sendNormalTalk_Bottom("#face0#哈哈……", 37, 3004433, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Carlyle/25", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#请各位在这里稍等，我去给你们准备休息的地方。", 37, 3004433, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/26", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Npc_Fadeout("oid=510209", 0, 500);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#虽说哪儿都是这样，但这里的情况也挺复杂的。\r\n年迈的国王，身为继承人的年轻王子，还有牵制王子的教团……", 37, 3004431, false, true);
                                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/15", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#以外，还见到一些其他教团的人。", 37, 3004431, false, true);
                                                                                        cm.effect_Voice("Voice5.img/CH2/Idea/16", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#就像冒险岛联盟当初一样，要打破这里的局面想必很难。", 37, 3004431, true, true);
                                                                                          cm.effect_Voice("Voice5.img/CH2/Idea/17", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#啊……是啊。", 37, 3003675, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Checky/7", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#哈哈……", 37, 3004435, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#可是……", 37, 3004431, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我看王子殿下的政治情商挺高的，且信他一回吧。", 37, 3004431, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/18", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#你看，人们已经开始在窃窃私语了。\r\n在#b守护者#k的护卫下现身的对抗者足以引起话题。", 37, 3004431, true, true);
                                                                                                      cm.effect_Voice("Voice5.img/CH2/Idea/19", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("（啊，所以王子才特意委托她来护卫的吗……）", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("（我似乎明白她为什么气鼓鼓的了。）", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_ChangeController(3004430, 'oid=511717', -733, 20, 23, -783, -683, 0, true, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=511717", "summon", 0, 0);
                                                                                                                cm.npc_ChangeController(3004437, "oid=511718", -933, -4, 1, -983, -883, 0, true, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=511718", "summon", 0, 0);
                                                                                                                cm.npc_ChangeController(3004437, "oid=511719", -933, 46, 32, -983, -883, 0, true, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=511719", "summon", 0, 0);
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -733, 24);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetForceMove("oid=511717", -1, 400, 80);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.Npc_Fadeout("oid=511717", 0, 500);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.warp(410000500, 0, false);
                                                                                                                            cm.eventSKill(0);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                            cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1");
                                                                                                                            cm.forceCompleteQuest(39803);
                                                                                                                            cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                                            cm.npc_LeaveField("oid=510203");
                                                                                                                            cm.npc_LeaveField("oid=510203");
                                                                                                                            cm.npc_LeaveField("oid=510204");
                                                                                                                            cm.npc_LeaveField('oid=510204');
                                                                                                                            cm.npc_LeaveField("oid=510205");
                                                                                                                            cm.npc_LeaveField('oid=510205');
                                                                                                                            cm.npc_LeaveField("oid=510206");
                                                                                                                            cm.npc_LeaveField("oid=510206");
                                                                                                                            cm.npc_LeaveField("oid=510207");
                                                                                                                            cm.npc_LeaveField("oid=510207");
                                                                                                                            cm.npc_LeaveField('oid=510208');
                                                                                                                            cm.npc_LeaveField("oid=510208");
                                                                                                                            cm.npc_LeaveField("oid=510209");
                                                                                                                            cm.npc_LeaveField("oid=510209");
                                                                                                                            cm.npc_LeaveField("oid=510210");
                                                                                                                            cm.npc_LeaveField("oid=510210");
                                                                                                                            cm.npc_LeaveField("oid=510211");
                                                                                                                            cm.npc_LeaveField("oid=510211");
                                                                                                                            cm.npc_LeaveField('oid=510212');
                                                                                                                            cm.npc_LeaveField('oid=510212');
                                                                                                                            cm.npc_LeaveField("oid=510213");
                                                                                                                            cm.npc_LeaveField("oid=510213");
                                                                                                                            cm.npc_LeaveField('oid=510214');
                                                                                                                            cm.npc_LeaveField("oid=510214");
                                                                                                                            cm.npc_LeaveField("oid=511717");
                                                                                                                            cm.npc_LeaveField("oid=511717");
                                                                                                                            cm.npc_LeaveField("oid=511718");
                                                                                                                            cm.npc_LeaveField("oid=511718");
                                                                                                                            cm.npc_LeaveField("oid=511719");
                                                                                                                            cm.npc_LeaveField("oid=511719");
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}