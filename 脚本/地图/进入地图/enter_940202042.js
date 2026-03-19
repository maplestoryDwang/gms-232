var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(34832) && !cm.isQuestFinished(34834)) {
    action34832(f, E, e);
  } else {
    if (cm.isQuestFinished(34832) && !cm.isQuestFinished(34834)) {
      action34834(f, E, e);
    } else if (cm.isQuestFinished(34834) && cm.isQuestFinished(34826)) {
      action34826(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action34832(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3001300, 'oid=669722', -533, 785, 59, -583, -483, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=669722", "summon", 0, 0);
        cm.npc_ChangeController(3001312, "oid=669723", -430, 698, 129, -480, -380, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=669723", "summon", 0, 0);
        cm.npc_ChangeController(3001310, "oid=669724", -1208, 573, 158, -1258, -1158, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=669724", "summon", 0, 0);
        cm.npc_ChangeController(3001311, 'oid=669725', -1310, 579, 154, -1360, -1260, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=669725", 'summon', 0, 0);
        cm.npc_ChangeController(3001359, "oid=669726", -1108, 579, 140, -1158, -1058, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=669726', "summon", 0, 0);
        cm.npc_ChangeController(3001308, "oid=669727", -1350, 579, 153, -1400, -1300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=669727", "summon", 0, 0);
        cm.npc_ChangeController(3001307, 'oid=669728', -1400, 579, 153, -1450, -1350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=669728", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -850, 200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, -850, 770);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#勇士部落遗迹发掘地山丘", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('明明……是这边啊……', 37, 3001359, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#什么啊，什么都没有嘛？", 37, 3001311, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#修安……怎么回事？", 37, 3001308, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我明明看见了！长得跟你拿给我看的那个很像，就在这石塔附近晃动来着！", 37, 3001359, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#一定是那样！不过再等等吧？", 37, 3001310, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("好！那就等一会吧！", 37, 3001359, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001310, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001311, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001359, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001300, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001312, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001308, null, cm.getPlayer().getId());
                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 20, 0, 4, 3001307, null, cm.getPlayer().getId());
                                cm.sendNormalTalk_Bottom("那、那个！不能这么傻等着了，不如你帮帮我吧？", 37, 3001359, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#帮什么忙啊！？那个什么修安该不会在胡说八道吧？那我们岂不是白跑一趟！？", 37, 3001311, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#我们能帮上什么忙？", 37, 3001354, true, true, 1);
                                  } else if (status === V++) {
                                    cm.updateInfoQuest(34832, 'd=1');
                                    cm.npc_LeaveField('oid=669722');
                                    cm.npc_LeaveField("oid=669723");
                                    cm.npc_LeaveField("oid=669724");
                                    cm.npc_LeaveField("oid=669725");
                                    cm.npc_LeaveField("oid=669726");
                                    cm.npc_LeaveField("oid=669727");
                                    cm.npc_LeaveField('oid=669728');
                                    cm.dispose();
                                    cm.warp(102040200, 2, false);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action34834(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3001300, 'oid=670135', -533, 785, 59, -583, -483, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=670135', "summon", 0, 0);
        cm.npc_ChangeController(3001312, 'oid=670136', -430, 698, 129, -480, -380, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=670136", "summon", 0, 0);
        cm.npc_ChangeController(3001310, "oid=670137", -1208, 573, 158, -1258, -1158, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670137", "summon", 0, 0);
        cm.npc_ChangeController(3001311, "oid=670138", -1310, 579, 154, -1360, -1260, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670138", "summon", 0, 0);
        cm.npc_ChangeController(3001359, 'oid=670139', -1108, 579, 140, -1158, -1058, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=670139", 'summon', 0, 0);
        cm.npc_ChangeController(3001308, "oid=670140", -1350, 579, 153, -1400, -1300, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=670140', 'summon', 0, 0);
        cm.npc_ChangeController(3001307, "oid=670141", -1400, 579, 153, -1450, -1350, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670141", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -850, 770);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#看来还是没消息……怎么办？", 37, 3001359, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#修安……你……不会真的在说谎吧？", 37, 3001308, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#不是的！我真的看见了……", 37, 3001359, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3001346, "oid=670142", -770, 770, 53, -820, -720, 0, false, 0, false);
                  cm.npc_SetSpecialAction('oid=670142', "summon", 0, 0);
                  cm.npc_SetSpecialAction('oid=670142', "obejct_appear", 0, 1);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_summon", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(850);
                } else {
                  if (status === V++) {
                    cm.setNpcSpecialActionReset('oid=670142');
                    cm.npc_SetSpecialAction("oid=670142", 'object', -1, 1);
                    cm.sendNormalTalk_Bottom("#face0#那边好像有什么在闪？是不是那边啊？", 37, 3001354, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……！！！", 37, 3001311, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊！看到了！", 37, 3001308, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#没错，就是那个！", 37, 3001359, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#确实看到了！", 37, 3001310, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#咿呀~终于找到了？", 37, 3001307, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#好，那我就先进去了！嘿嘿！", 37, 3001307, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=670141", 1, 300, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯，这不是假的嘛？", 37, 3001307, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#什么？怎么没反应？", 37, 3001310, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#和我们知道的那扇门不太一样吗？", 37, 3001308, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=670142");
                                            cm.npc_SetSpecialAction("oid=670142", "open", 0, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#门……开了！", 37, 3001354, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=670135"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", 'oid=670136'], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670137"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670138"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670139"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670140"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=670141"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#主人！小心啊！我从里面感知到一股强大的魔力！", 37, 3001300, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我感觉到了。那一边的……古代神之圣所……", 37, 3001354, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), 304, 1257);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=670137");
                                                        cm.npc_LeaveField("oid=670138");
                                                        cm.npc_LeaveField('oid=670139');
                                                        cm.npc_LeaveField("oid=670140");
                                                        cm.npc_LeaveField("oid=670141");
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=670135'], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=670136"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=670137"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=670138'], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=670139"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=670140"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=670141"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.sendNormalTalk_Bottom("#face2#呃啊！？怎么消失了！？", 37, 3001307, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#伊利温！！！？你去哪了！？", 37, 3001310, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=670135");
                                                            cm.npc_LeaveField('oid=670136');
                                                            cm.npc_LeaveField("oid=670142");
                                                            cm.dispose();
                                                            cm.warp(940202043, 0, true);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action34826(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001300, "oid=670275", -533, 785, 59, -583, -483, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=670275', 'summon', 0, 0);
        cm.npc_ChangeController(3001312, 'oid=670276', -430, 698, 129, -480, -380, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=670276", "summon", 0, 0);
        cm.npc_ChangeController(3001310, "oid=670277", -1208, 573, 158, -1258, -1158, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670277", "summon", 0, 0);
        cm.npc_ChangeController(3001311, "oid=670278", -1310, 579, 154, -1360, -1260, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670278", "summon", 0, 0);
        cm.npc_ChangeController(3001359, 'oid=670279', -1108, 579, 140, -1158, -1058, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=670279", "summon", 0, 0);
        cm.npc_ChangeController(3001308, "oid=670280", -1350, 579, 153, -1400, -1300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=670280", 'summon', 0, 0);
        cm.npc_ChangeController(3001307, "oid=670281", -1400, 579, 153, -1450, -1350, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=670281', "summon", 0, 0);
        cm.npc_ChangeController(3001346, "oid=670282", -770, 770, 53, -820, -720, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=670282', 'summon', 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -850, 770);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 304, 1257);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove('oid=670277', 1, 200, 200);
            cm.sendNormalTalk_Bottom("#face2#伊利温！伊利温！！！！！！", 37, 3001310, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#什、什么啊？到底跑哪去了？", 37, 3001307, true, true, 1);
            } else {
              if (status === V++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -784, 725);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face2#呃啊！', 37, 3001310, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#呃唉！", 37, 3001307, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#……！！！", 37, 3001311, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#伊利温！你是怎么回事啊？我都担心死了……", 37, 3001308, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.npc_SetSpecialAction('oid=670282', "disappeared", 0, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_gone", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField('oid=670282');
                              cm.sendNormalTalk_Bottom("#face0#好像找到……古代神之圣所了。", 37, 3001354, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove('oid=670278', 1, 400, 200);
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -740, 760);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#然后呢？圣所在哪？怎么才能找到？", 37, 3001311, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我也不清楚。水晶门突然就消失了。", 37, 3001354, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#那里……发生什么事了？", 37, 3001308, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我听到一个声音，并感觉到水晶的力量涌入我体内。四周都被雾气笼罩……总之好像是对方故意用强大魔法把自己藏起来了。", 37, 3001354, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#竟然藏起来了……难道这次又搞错了。", 37, 3001311, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#话虽如此，这次还是有成果的嘛！我们都做得不错！", 37, 3001308, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#没错。多亏你们帮忙，现在隐约能看到……阿加特大人所说的古代神之圣所了。谢谢。", 37, 3001354, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们绝不能就此放弃……", 37, 3001354, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#大家再加把劲吧！", 37, 3001354, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === V++) {
                                                      cm.npc_LeaveField("oid=670275");
                                                      cm.npc_LeaveField('oid=670276');
                                                      cm.npc_LeaveField("oid=670277");
                                                      cm.npc_LeaveField("oid=670278");
                                                      cm.npc_LeaveField("oid=670279");
                                                      cm.npc_LeaveField("oid=670280");
                                                      cm.npc_LeaveField('oid=670281');
                                                      cm.dispose();
                                                      cm.warp(102040200, 2, true);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}