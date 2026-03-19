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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setPartner(1, 3001300, 80002330, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6#快看那！", 37, 3001351, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(230400, 1, 384000, 230400, -819200, 30975);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6#只在书本上见过的水晶门竟然就在眼前！呃……好紧张！", 37, 3001351, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#通过那里离开村子后,即可获得所需配件。\r\n可法律上严厉禁止逃离平民翼人地区\r\n#b一经发现,很有可能被关进监狱。#k", 37, 3001300, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3##b监……监狱！？#k\r\n怎……怎么办？那是升级必需的一种配件……", 37, 3001351, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.setPartner(0, 3001300, 0, 0);
                        cm.npc_ChangeController(3001300, "oid=939334", -350, 50, 10, -400, -300, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=939334", 'summon', 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(153600, 1, 512000, 153600, -128000, 30975);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face8#为了防止我们的身份暴露……\r\n不如使用#b闪光弹#k迷惑他们的视线吧？", 37, 3001351, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这是个办法。", 37, 3001300, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#不、不了……还是回家吧……\r\n总感觉会无辜遭受牵连……", 37, 3001351, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#闪光火炮准备完毕。等待发射。", 37, 3001300, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(153600, 1, 512000, 153600, -102400, 30975);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 10, 0, 1, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#啊,准备#b发射#k？这……这怎么办？", 37, 3001351, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#虽说#b发射#k闪光弹不会带来什么物理性伤害……", 37, 3001351, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#不是的……如果胡乱#b发射#k了……", 37, 3001351, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=939334", "lightup", -1, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_ready", 100);
                                                cm.sendNormalTalk_Bottom("#face0##b发射#k命令输入完毕。3秒后即将#b发射#k。", 37, 3001300, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(7);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#发、发射？！你说发射！？？？？？？？", 37, 3001351, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_NormalSpeechBalloon('3', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3001300, null, cm.getPlayer().getId());
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_NormalSpeechBalloon('2', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3001300, null, cm.getPlayer().getId());
                                                          cm.sendNormalTalk_Bottom("#face4##r等等,利奥！！！！#k", 37, 3001351, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_NormalSpeechBalloon('1', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3001300, null, cm.getPlayer().getId());
                                                            cm.inGameDirectionEvent_PushScaleInfo(512000, 1, 256000, 512000, -384000, 255);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 100, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 100, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 600, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#呃啊！我的眼睛！", 37, 3001306, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#我的天啊,竟然真的发射了！？", 37, 3001351, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#若想获得配件,先要把利奥你升级一下……", 37, 3001351, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField('oid=939334');
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                            } else if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.dispose();
                                                                              cm.warp(940202011, 0, true);
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
                }
              }
            }
          }
        }
      }
    }
  }
}