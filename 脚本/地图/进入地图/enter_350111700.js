var status = -1;
var selectionLog = [];
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
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.npc_ChangeController(1540799, "oid=287931459", 153, 100, 8, 103, 203, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287931459", "summon", 0, 0);
      cm.npc_ChangeController(1540802, "oid=287931460", -130, 200, 15, -180, -80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287931460", "summon", 0, 0);
      cm.npc_ChangeController(1540810, "oid=287931461", 90, 100, 8, 40, 140, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287931461", "summon", 0, 0);
      cm.npc_ChangeController(1540811, "oid=287931462", -210, 200, 15, -260, -160, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287931462", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=287931461", "rope", -1, 1);
      cm.sendNormalTalk_Bottom('警告你们不许过来！', 37, 1540799, false, true);
      cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/1", 128);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#俘虏人质？你们可真够老套的。", 37, 1540802, true, true);
        cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/2", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("恩，偶尔老套的作战方式是最好的作战方式。", 37, 1540799, true, true);
          cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/3", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("深有同感。", 37, 1540806, true, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/4", 128);
          } else {
            if (status === V++) {
              cm.curNodeEventEnd(true);
              cm.setInGameDirectionMode(true, false, true);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931459"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 290, 150);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1540806, "oid=287936038", 520, 100, 10, 470, 570, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287936038", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(2);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=287931459");
                          cm.npc_LeaveField("oid=287931459");
                          cm.npc_SetSpecialAction("oid=287936038", "special1", 0, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101004/Hit", 100);
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101004/Use", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287936038"], [0, -110, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#这就叫做协同作战。", 37, 1540806, false, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/5", 128);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=287936038", 'special2', 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101000/Hit", 100);
                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101000/Use", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25100001/Hit", 100);
                                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25100001/Use", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=287936038");
                                        cm.npc_ChangeController(1540841, "oid=287941146", 520, 100, 10, 470, 570, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=287941146", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=287936038", -1, 300, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=287931461", -1);
                                            cm.setNpcSpecialActionReset("oid=287931461");
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 10, 310);
                                            cm.effect_NormalSpeechBalloon("#fn黑体##fs20#呜呜……", 1, 0, 0, 4500, 1, -100, 0, 0, 4, 1540841, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("是英雄！是英雄救了我们！", 37, 1540811, false, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/6", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#战神，还有大家……你们怎么知道这里的？", 37, 1540810, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/7", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我听说利琳被抓走了就立刻赶来了，\r\n带着和我一起修炼的隐月。", 37, 1540802, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/8", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#朋友的事就是我的事，\r\n不过我没想到会多来一个人。", 37, 1540806, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/9", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#我会来是出于其他原因。\r\n我感知到阿弗利埃发生了什么非同寻常的事情。", 37, 1540805, true, true);
                                                        cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/10", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("没错，现在可不是我们这么傻愣着的时候！", 37, 1540810, true, true);
                                                          cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/11", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(1540807, "oid=287950100", 370, 300, 19, 320, 420, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=287950100", "summon", 0, 0);
                                                            cm.npc_SetForceMove("oid=287950100", -1, 150, 120);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("主人，你原来在这里啊！", 37, 1540807, false, true);
                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/12", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("米乐！！", 37, 1540805, true, true);
                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/13", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("主人能没事真是万幸。", 37, 1540807, true, true);
                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/14", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#等一下，有件大事。\r\n我来的路上听那些魔族士兵说了……\r\n说是那些魔族为了将先祖感染将他囚禁了起来。", 37, 1540807, true, true);
                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/15", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#！！这是真的吗？！", 37, 1540805, true, true);
                                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/16", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.userSetFieldFloating(350111700, 5, 5, 5);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287936038"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931460"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931461"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931462"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.userSetFieldFloating(350111700, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#主人，先祖的痛苦正越来越大。", 37, 1540807, false, true);
                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/17", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#恩，我也感觉到了。", 37, 1540805, true, true);
                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/18", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("战神，可不是傻愣着的时候，你和他们一起去战斗吧。", 37, 1540810, true, true);
                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/19", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('你没事吗，利琳？', 37, 1540802, true, true);
                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/20", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("这里的秘密通道我还是知道的，我可以带着俘虏们逃出去。", 37, 1540810, true, true);
                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/21", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287936038"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931460"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931461"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287931462"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#看样子是被其他士兵发现了。", 37, 1540806, false, true);
                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/22", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#这有何妨，带路吧，龙神。", 37, 1540802, true, true);
                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/23", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#我吗？", 37, 1540805, true, true);
                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/24", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("没错，米乐不是知道方向吗？\r\n事已至此，我们得尽快冲出去，救出阿弗利埃才行。", 37, 1540806, true, true);
                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/25", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#好吧，都跟我来。", 37, 1540805, true, true);
                                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/26", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetForceMove("oid=287936038", 1, 300, 120);
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
                                                                                                        cm.npc_SetForceMove("oid=287931460", 1, 700, 120);
                                                                                                        cm.npc_SetForceMove("oid=287950100", 1, 300, 120);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=287931461", 1);
                                                                                                          cm.sendNormalTalk_Bottom('利琳，我们赶紧逃吧！', 37, 1540811, false, true);
                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/27", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("曾经封印黑魔法师的英雄重新聚首的这一天，\r\n能够再次阻挡世界的危机。", 37, 1540810, false, true);
                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/28", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("也许他们的相遇并不是偶然。", 37, 1540810, true, true);
                                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/TEAM/29", 128);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.updateInfoQuest(33901, "rp=6");
                                                                                                                cm.dispose();
                                                                                                                cm.warp(350111750, 0, true);
                                                                                                                cm.npc_LeaveField("oid=287936038");
                                                                                                                cm.npc_LeaveField("oid=287936038");
                                                                                                                cm.npc_LeaveField("oid=287931460");
                                                                                                                cm.npc_LeaveField("oid=287931460");
                                                                                                                cm.npc_LeaveField("oid=287941146");
                                                                                                                cm.npc_LeaveField("oid=287941146");
                                                                                                                cm.npc_LeaveField("oid=287931461");
                                                                                                                cm.npc_LeaveField("oid=287931461");
                                                                                                                cm.npc_LeaveField("oid=287931462");
                                                                                                                cm.npc_LeaveField("oid=287931462");
                                                                                                                cm.npc_LeaveField("oid=287950100");
                                                                                                                cm.npc_LeaveField("oid=287950100");
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
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;