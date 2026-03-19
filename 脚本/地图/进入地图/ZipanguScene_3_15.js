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
      cm.forceStartQuest(58752, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111013, "oid=3666823", -108, -70, 30, -158, -58, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666823", "summon", 0, 0);
      cm.npc_ChangeController(9111014, "oid=3666824", 145, -35, 14, 95, 195, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666824", "summon", 0, 0);
      cm.npc_ChangeController(9111012, "oid=3666825", -480, -200, 19, -530, -430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666825", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666826", -630, -35, 17, -680, -580, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666826", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666827", -560, -35, 18, -610, -510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666827", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666828", -500, -35, 19, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666828", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666829", -440, -35, 20, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666829", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666830", -395, -35, 20, -445, -345, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666830", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666831", 235, -35, 2, 185, 285, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666831", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666832", 310, -35, 15, 260, 360, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666832", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666833", 360, -35, 15, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666833", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666834", 420, -35, 3, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666834", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3666835", 480, -35, 1, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3666835", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("呜哇啊！！", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666826"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666827"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666828"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666829"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666830"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666831"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666832"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666833"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666834"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666835"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3666823"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3666824"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#快，抓住那些外地人！", 37, 9111014, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3666825"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("等，等等！！！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("现在我就向你们一一揭露你们的#b#p9111013##k大人的诈骗行径！", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3666824"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=3666824", "attack", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#混账！竟敢在我们的地盘上胡说八道！", 37, 9111014, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9111025, "oid=3667337", 235, -35, 2, 185, 285, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=3667337", "summon", 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#(那个白痴！！！)", 37, 9111014, false, true);
                                cm.effect_NormalSpeechBalloon("啊呀呀……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111025, null, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哼，那么我们不如搞个临时审判，看看到底是谁在说谎！", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#闭嘴！！\r\n#b#p9111025##k！快把他们拖出去！", 37, 9111014, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3667337"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("啊，是！", 37, 9111025, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……哼，就按你说的办。", 37, 9111013, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=9111014"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#鵺，鵺大人！！", 37, 9111014, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我可不想因为一些没凭没据的瞎话搞砸今天这样喜庆的日子。", 37, 9111013, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#来吧……！人类！今天就算你血溅当场，也赎不了你的罪了！\r\n看我怎么撕下你伪善的面具！", 37, 9111013, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#鵺，鵺大人！！我们来处理……！", 37, 9111014, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哼！你闭嘴，#b#p9111014##k！我要亲自料理他们！", 37, 9111013, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#可，可是……！", 37, 9111014, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#干得好，你的挑衅起作用了！", 37, 9111012, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#深陷无信仰和道德败坏的执政者啊！\r\n四肢折断，浑身瘫软似泥，甚至在襁褓中都无法被饶恕的罪人啊！！\r\n你将诅咒自己那无法抗拒的悲惨命运，把头颅戳刺在锈蚀的刀刃上，在绝望中自残致死！", 37, 9111013, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=3666823", "rage", 0, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=3666825", "attack", 0, 1);
                                                              cm.sendNormalTalk_Bottom("#face0#哼，区区罪犯，话还挺多！", 37, 9111012, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#呵……是的。我也是罪人。我是背负着亡者们的原罪，在地狱里跋涉的罪人。", 37, 9111013, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("唉……。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#呵呵，受。伤？", 37, 9111013, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=3666823", 'rage', 0, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.warp(800022520, 0, false);
                                                                          cm.npc_LeaveField("oid=3666823");
                                                                          cm.npc_LeaveField("oid=3666823");
                                                                          cm.npc_LeaveField("oid=3666824");
                                                                          cm.npc_LeaveField("oid=3666824");
                                                                          cm.npc_LeaveField("oid=3666825");
                                                                          cm.npc_LeaveField("oid=3666825");
                                                                          cm.npc_LeaveField("oid=3667337");
                                                                          cm.npc_LeaveField("oid=3667337");
                                                                          cm.npc_LeaveField("oid=3666826");
                                                                          cm.npc_LeaveField("oid=3666826");
                                                                          cm.npc_LeaveField("oid=3666827");
                                                                          cm.npc_LeaveField("oid=3666827");
                                                                          cm.npc_LeaveField("oid=3666828");
                                                                          cm.npc_LeaveField("oid=3666828");
                                                                          cm.npc_LeaveField("oid=3666829");
                                                                          cm.npc_LeaveField("oid=3666829");
                                                                          cm.npc_LeaveField("oid=3666830");
                                                                          cm.npc_LeaveField("oid=3666830");
                                                                          cm.npc_LeaveField("oid=3666831");
                                                                          cm.npc_LeaveField("oid=3666831");
                                                                          cm.npc_LeaveField("oid=3666832");
                                                                          cm.npc_LeaveField("oid=3666832");
                                                                          cm.npc_LeaveField("oid=3666833");
                                                                          cm.npc_LeaveField("oid=3666833");
                                                                          cm.npc_LeaveField("oid=3666834");
                                                                          cm.npc_LeaveField("oid=3666834");
                                                                          cm.npc_LeaveField("oid=3666835");
                                                                          cm.npc_LeaveField("oid=3666835");
                                                                          cm.eventSKill(0);
                                                                          cm.setInGameDirectionMode(false, true, false);
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