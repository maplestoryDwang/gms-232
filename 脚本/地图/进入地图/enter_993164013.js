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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1620, 44);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004914, "oid=564887", 1683, 15, 6, 1633, 1733, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=564887", "summon", 0, 0);
        cm.npc_ChangeController(3004915, "oid=564888", 1750, 15, 6, 1700, 1800, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=564888", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1600, 15);
        cm.sendNormalTalk_Bottom("#face0#话说为什么需要我们呢？\r\n德拉卡兹不是擅长躲进黑暗里嘛。", 36, 3004914, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我脖子上挂的这个项圈就是那帮家伙给我铐上的脚镣。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/6/3", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#合约结束之前是绝对解不开的，\r\n一旦进入限制区域，它就会监测到并响起警报。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_屏幕渐入插图消失A(['00'], [500]);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#所以你们要关掉警报装置。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#哔哔，确认入侵者，确认入侵者……", 36, 3004923, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip('oid=564887', -1);
                            cm.npc_setForceFlip("oid=564888", -1);
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 1520, 44);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3004923, 'oid=564904', 1400, 15, 5, 1350, 1450, 0, true, 500, false);
                                cm.npc_SetSpecialAction("oid=564904", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3004923, "oid=564906", 1320, 15, 5, 1270, 1370, 0, true, 500, false);
                                  cm.npc_SetSpecialAction("oid=564906", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3004923, "oid=564907", 1240, 15, 5, 1190, 1290, 0, true, 500, false);
                                    cm.npc_SetSpecialAction("oid=564907", 'summon', 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#啊！！暴露了！", 36, 3004914, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#警报系统访问报错，将切换为本地模式，击退入侵者……", 36, 3004923, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/63001000/Hit", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=564904", "die1", 1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400653/Die", 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=564906", "die1", 1, 1);
                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400653/Die", 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=564907", "die1", 1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400653/Die", 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#呼……你打算怎么承担后果？", 36, 3004914, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我不知道，总有办法的吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#可以肯定的是，现在已经覆水难收了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else if (status === V++) {
                                                                  cm.updateInfoQuest(39412, "dir13=1");
                                                                  cm.npc_LeaveField("oid=564887");
                                                                  cm.npc_LeaveField("oid=564888");
                                                                  cm.npc_LeaveField("oid=564904");
                                                                  cm.npc_LeaveField("oid=564906");
                                                                  cm.npc_LeaveField("oid=564907");
                                                                  cm.dispose();
                                                                  cm.warp(410000404, 1, true);
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