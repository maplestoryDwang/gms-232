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
      cm.npc_ChangeController(3004432, "oid=775452", 150, -50, -1, 100, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=775452", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=775453", -320, -50, -1, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=775453", 'summon', 0, 0);
      cm.npc_ChangeController(3004460, 'oid=775454', -545, -50, -1, -595, -495, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=775454", "summon", 0, 0);
      cm.npc_ChangeController(3004460, 'oid=775455', -600, 73, -1, -650, -550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=775455", "summon", 0, 0);
      cm.npc_ChangeController(3004461, 'oid=775456', -209, -50, -1, -259, -159, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=775456', "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=775457", -137, -50, -1, -187, -87, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=775457", "summon", 0, 0);
      cm.npc_ChangeController(3004460, "oid=775458", -648, -50, -1, -698, -598, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=775458", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=775459", -710, 73, -1, -760, -660, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=775459", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=775454", "special", -1, 1);
      cm.npc_SetSpecialAction('oid=775455', 'special2', -1, 1);
      cm.npc_SetSpecialAction("oid=775456", 'special2', -1, 1);
      cm.npc_SetSpecialAction("oid=775457", 'special', -1, 1);
      cm.npc_SetSpecialAction("oid=775453", "special8", -1, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -370, 42);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -430, -50);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呃……", 37, 3004461, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(700, 0, 2000, 700, 250, 42);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#嗯……早知道多带些人了。", 37, 3004432, false, true);
                  cm.effect_Voice("Voice5.img/CH2/Loland/38", 128);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=775452", 1, 50, 70);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775452"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.npc_ChangeController(3004431, "oid=775995", 370, 73, -1, 320, 420, 1, true, 1000, false);
                      cm.npc_SetSpecialAction("oid=775995", "summon", 0, 0);
                      cm.npc_ChangeController(3004437, 'oid=775996', 470, 73, -1, 420, 520, 1, true, 1000, false);
                      cm.npc_SetSpecialAction("oid=775996", "summon", 0, 0);
                      cm.npc_ChangeController(3004437, 'oid=775997', 540, 73, -1, 490, 590, 1, true, 1000, false);
                      cm.npc_SetSpecialAction("oid=775997", "summon", 0, 0);
                      cm.inGameDirectionEvent_ForcedFlip(0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=775458", 'special', -1, 1);
                        cm.npc_SetSpecialAction("oid=775459", "special", -1, 1);
                        cm.setNpcSpecialActionReset("oid=775453");
                        cm.sendNormalTalk_Bottom("#face2#罗兰德，乖乖束手就擒吧。", 37, 3004431, false, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/101", 128);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=775453", 1, 350, 150);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 410);
                          cm.sendNormalTalk_Bottom("#face3#……", 37, 3004432, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你就别妄想逃跑了。\r\n你们的计划已经全部败露。你的部下，也很快就会落网的。", 37, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/102", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#很快……？", 37, 3004432, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Loland/10-1", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#可惜你们还是迟了。", 37, 3004432, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Loland/11-1", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#行动时间提前了。", 37, 3004432, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(993141016, 5, 5, 10);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/blow", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775453"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775995"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775996"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775997"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(993141016, 0, 0, 0);
                                        cm.sendNormalTalk_Bottom("#face4#难道是寺院的方向……？", 37, 3004431, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#用不着我们特意设计，他们就会互相指控对方了。", 37, 3004432, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Loland/12-1", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#等骚乱扩大，守备队就会出动，趁着守备空虚的时候……\r\n翼人军会攻入城中。", 37, 3004432, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Loland/13", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#嘁，把他抓起来。", 37, 3004431, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Idea/104", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=775996", "special", -1, 1);
                                                cm.npc_SetSpecialAction("oid=775997", 'special', -1, 1);
                                                cm.onSetNpcScript("oid=775996", 1, ["special", "special6"], [1, -1]);
                                                cm.onSetNpcScript("oid=775997", 1, ["special", "special6"], [1, -1]);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.Npc_Fadeout('oid=775452', 0, 500);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=775452", "special4", -1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                    cm.Npc_Fadeout("oid=775452", 255, 500);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775453"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775995"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775996"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775997"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=775452", -1);
                                                        cm.sendNormalTalk_Bottom("#face0#你别碍事，塞伦。圣地现在沦陷，不见得是坏事。", 37, 3004432, false, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Loland/14", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那家伙正往这里来。\r\n攻打近天峰的那家伙，吉伦·达尔摩尔的第一个使徒。", 37, 3004432, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Loland/15", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#！！！！", 37, 3004430, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=775452", 0, 2000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#哼，他以为这样就能逃得掉吗？", 37, 3004431, false, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Idea/105", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=775995", "special2", -1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                                                                  cm.npc_SetForceMove("oid=775453", 1, 120, 120);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#请住手……！不能杀了他！", 37, 3004430, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Seren/59", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=775995"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#塞伦？你在做什么？！", 37, 3004431, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Idea/106", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#到底是为什么？难道你……", 37, 3004431, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Idea/107", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#难道你现在还相信那个人会是圣剑之主吗？", 37, 3004431, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/108", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#他只是……只是暂时被邪恶之徒洗脑了。我会劝他回头的。", 37, 3004430, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Seren/60", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#没有哦。我怎么看都不像是你说的那样。快闪开。", 37, 3004431, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Idea/109", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=775453", "special10", -1, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#你……竟不惜做到这个地步……", 37, 3004431, false, true);
                                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/110", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setNpcSpecialActionReset("oid=775995");
                                                                                      cm.sendNormalTalk_Bottom("#face2#拜托了。眼下……", 37, 3004430, true, true);
                                                                                      cm.effect_Voice("Voice5.img/CH2/Seren/61", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#眼下除了相信他，没有别的办法。", 37, 3004430, true, true);
                                                                                        cm.effect_Voice("Voice5.img/CH2/Seren/62", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face5#圣剑一定会重拾光芒的。一定会……", 37, 3004430, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Seren/63", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else if (status === V++) {
                                                                                                  cm.eventSKill(0);
                                                                                                  cm.forceCompleteQuest(39815);
                                                                                                  cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                  cm.forceStartQuest(39850);
                                                                                                  cm.warp(410000500, 0, false);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h0;07=h1;17=h1;08=h1;09=h0;19=h1");
                                                                                                  cm.npc_LeaveField("oid=775452");
                                                                                                  cm.npc_LeaveField('oid=775452');
                                                                                                  cm.npc_LeaveField("oid=775453");
                                                                                                  cm.npc_LeaveField('oid=775453');
                                                                                                  cm.npc_LeaveField("oid=775454");
                                                                                                  cm.npc_LeaveField('oid=775454');
                                                                                                  cm.npc_LeaveField('oid=775455');
                                                                                                  cm.npc_LeaveField("oid=775455");
                                                                                                  cm.npc_LeaveField("oid=775456");
                                                                                                  cm.npc_LeaveField('oid=775456');
                                                                                                  cm.npc_LeaveField('oid=775457');
                                                                                                  cm.npc_LeaveField('oid=775457');
                                                                                                  cm.npc_LeaveField('oid=775458');
                                                                                                  cm.npc_LeaveField("oid=775458");
                                                                                                  cm.npc_LeaveField('oid=775459');
                                                                                                  cm.npc_LeaveField("oid=775459");
                                                                                                  cm.npc_LeaveField("oid=775995");
                                                                                                  cm.npc_LeaveField("oid=775995");
                                                                                                  cm.npc_LeaveField("oid=775996");
                                                                                                  cm.npc_LeaveField('oid=775996');
                                                                                                  cm.npc_LeaveField("oid=775997");
                                                                                                  cm.npc_LeaveField("oid=775997");
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