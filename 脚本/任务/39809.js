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
      cm.sendNormalTalk_Bottom("#face0#有没有什么感觉？", 37, 3004431, false, true);
      cm.effect_Voice("Voice5.img/CH2/Idea/36", 128);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('这个嘛……', 57, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("啊！！", 57, 0, true, true);
        } else if (status === v++) {
          cm.npc_LeaveField("oid=533534");
          cm.npc_LeaveField("oid=533534");
          cm.npc_LeaveField("oid=533535");
          cm.npc_LeaveField("oid=533535");
          cm.npc_LeaveField("oid=533536");
          cm.npc_LeaveField("oid=533536");
          cm.dispose();
          cm.warp(993141010, 0, false);
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -208, 173);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -135, 171);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#因为相信王子殿下，我们差点丢了小命。", 37, 3004431, false, true);
            cm.effect_Voice("Voice5.img/CH2/Idea/42", 128);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哈哈……", 37, 3004433, true, true);
              cm.effect_Voice("Voice5.img/CH2/Carlyle/51", 128);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我们擅自乱动圣剑，还被剑之守护者发现。\r\n这下……恐怕要遭到驱逐了吧？", 37, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/43", 128);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯……不会有事的。塞伦没那么不通人情。", 37, 3004433, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Carlyle/52", 128);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯？你说真的吗？", 37, 3004431, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Idea/44", 128);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯……老实说……我也有点担心……\r\n搞不好连继承王位的事也要泡汤……还是太轻率了……", 37, 3004433, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Carlyle/53", 128);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#……什么？！", 37, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/45", 128);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#哈哈，我逗你们的。", 37, 3004433, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Carlyle/54", 128);
                        } else {
                          if (status === v++) {
                            cm.npc_ChangeController(3004437, "oid=536841", -432, 150, 12, -482, -382, 0, true, 700, false);
                            cm.npc_SetSpecialAction("oid=536841", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#王子殿下，大事不好了。您看这个。", 37, 3004437, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Knight/8", 128);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face1#这是……黑太阳的证物啊。", 37, 3004433, true, true);
                              } else {
                                if (status === v++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === v++) {
                                    cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_Monologue("告圣地的所有子民。", 0);
                                      cm.effect_Voice("Voice5.img/CH2/Loland/31", 128);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_Monologue("我们是#r黑太阳#k。拒绝信奉神之人。", 1);
                                        cm.effect_Voice("Voice5.img/CH2/Loland/32", 128);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face4#不信神者的标志是#r黑太阳#k？莫非……只是巧合吧…… ", 37, 3004431, false, true);
                                              cm.effect_Voice("Voice5.img/CH2/Idea/46", 128);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("（好像并非只有我能用埃斯佩拉之剑使太阳升起。）", 57, 0, true, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_Monologue("自从神在这片土地上消失之后，已经过了很长的岁月。", 0);
                                                  cm.effect_Voice("Voice5.img/CH2/Loland/33", 128);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_Monologue("这期间，以神的名义推行的所有虚伪行径，都是我们反抗的对象。", 0);
                                                    cm.effect_Voice("Voice5.img/CH2/Loland/34", 128);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_Monologue("我们坚信只有#r神彻底消失#k，人类才能获得自由。", 1);
                                                      cm.effect_Voice("Voice5.img/CH2/Loland/35", 128);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.inGameDirectionEvent_Monologue("想活命的话，就立刻离开塞尔提乌。", 0);
                                                        cm.effect_Voice("Voice5.img/CH2/Loland/36", 128);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.inGameDirectionEvent_Monologue("否则，你们将会#r和神的痕迹一起灰飞烟灭#k。", 1);
                                                          cm.effect_Voice("Voice5.img/CH2/Loland/37", 128);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#包括广场公告栏在内，大街小巷全都贴满了这样的壁报。", 37, 3004437, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Knight/9", 128);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#如今那帮间谍已开始明目张胆的行动了。看来战争已迫在眉睫。", 37, 3004433, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/55", 128);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我们把发现的壁报全部清除了。\r\n正在寻找是否有看见他们张贴壁报者的目击者。", 37, 3004437, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Knight/10", 128);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#知道了。", 37, 3004433, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/56", 128);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#还有……火焰祭司的#r黑火药#k似乎少了几袋。", 37, 3004437, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Knight/11", 128);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#火焰祭司们都说是黎明祭司偷的，正闹得不可开交呢。", 37, 3004437, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Knight/12", 128);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#嗯……", 37, 3004433, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/57", 128);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我有事要处理，先走一步。", 37, 3004433, true, true);
                                                                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/58", 128);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#塞伦卿那边我会好好跟她解释，你们不用太担心。", 37, 3004433, true, true);
                                                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/59", 128);
                                                                                  } else {
                                                                                    if (status === v++) {
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
                                                                                          cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
                                                                                          cm.eventSKill(0);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.forceCompleteQuest(39809);
                                                                                          cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                          cm.npc_LeaveField('oid=541081');
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