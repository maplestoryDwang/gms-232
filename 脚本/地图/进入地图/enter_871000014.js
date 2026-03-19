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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400928, "oid=11112859", -200, 250, 0);
      cm.npc_SetSpecialAction("oid=11112859", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=11112860", -300, 250, 0);
      cm.npc_SetSpecialAction("oid=11112860", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -150, 80]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#建筑家凯尼斯家"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.sendNewEffects(13, [3000, 350, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b哇……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [0, 250, 300, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(13, [3000, -350, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 180);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.sendNormalTalk_Bottom("#b太厉害了！这是什么？扎昆……桌子？！", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=11112859", 1, 20, 100);
                              cm.sendNormalTalk_Bottom("#face0#哇！你怎么知道的？！", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b这一看就是扎昆的手啊？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=11112860", 1, 80, 100);
                                  cm.sendNormalTalk_Bottom("#face0#这样啊……我们没见过扎昆，所以不知道呢。", 37, 9400921, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#据说这是凯尼斯在当冒险家的时候，抓住扎昆后得到的东西。", 37, 9400921, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#没错，我听那个故事大概有50遍了吧。", 37, 9400920, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b抓住扎昆做成了桌子？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#虽然我也不是亲眼所见，但是据说如果消灭冒险岛世界的BOSS怪物，就能得到特殊的家具。", 37, 9400921, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(9400931, "oid=11112905", 270, 260, 1);
                                            cm.npc_SetSpecialAction("oid=11112905", "summon", 0, 0);
                                            cm.sendNormalTalk_Bottom("#face0#至今我听说过的，有#t2672045:#、#t2672046:#、#t2672013:#？还有吗，艾米？", 37, 9400921, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#好像还有#t2672052:#！", 37, 9400920, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=11112905", -1, 170, 100);
                                                cm.sendNewEffects(13, [3000, 100, 0, 0, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#除此之外好像还有很多。只不过我们没见过罢了，如果是你，应该能得到很多吧。", 37, 9400922, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.sendNormalTalk_Bottom("#b凯尼斯！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#你来的还真快啊，呵呵 ", 37, 9400922, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#b那个……', 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你觉得之前的家有点小吧？那个房屋其实也是我建的。那是我学习建筑后建的第二个房屋，第一个是这间房屋。", 37, 9400922, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#虽然我很喜欢那个房屋，但是我知道它又小又旧，住起来有点不方便。", 37, 9400922, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#请稍等一下。", 37, 9400922, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=11112905", 'special', 3000, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#来，看看，这个怎么样？", 37, 9400922, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Effect/DirectionWz2.img/effect/myHome/1", 0, 900, 0, -80, 12, 4, 0);
                                                                      cm.sendNormalTalk_Bottom("#b把这个房屋给我……？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#太帅气了！看看这蘑菇屋顶的曲线！", 37, 9400921, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#呵呵，你啊，如果能答应我几件事，我就把这个房屋的图纸给你，怎么样？", 37, 9400922, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                            cm.sendNormalTalk_Bottom("#b什么事……？", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#没多难的。", 37, 9400922, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#第一，这房屋完全是为了你而创造的空间，所以它是给你的。", 37, 9400922, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b当然了！", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#第二，在辛苦的狩猎和战斗后，回到家好好休息，家是恢复活力的空间。", 37, 9400922, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b这也是当然的！", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#最后，你要和我们凯兰西亚的居民们一直好好相处下去。", 37, 9400922, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b当然，这都是理所当然的事情，不用这么强调也行啊？", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.askMenu_Bottom("#face1#呵呵，忙起来了之后，很容易就会忘记理所当然的事情哦。\r\n#b#L0#我答应你，凯尼斯。#l\r\n#L1#我不能答应你，凯尼斯。#l", 37, 9400922);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              if (e == 0) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#谢谢你能答应我，那以后就好好相处吧！", 37, 9400922, false, true);
                                                                                              } else {
                                                                                                cm.sendNormalTalk_Bottom("#face0#呵呵，没想到你会这么回答，不过我相信你能做好的。你身边的这些好友也都会帮助你的……", 37, 9400922, false, true);
                                                                                              }
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.updateInfoQuest(64605, "chk=1;give=1");
                                                                                                cm.sendNormalTalk_Bottom("#face1#[#i2630598:##t2630598#]\r\n来，拿着吧！这就是你的建筑图纸。", 37, 9400922, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.gainItem(2630598, 1);
                                                                                                  cm.sendNormalTalk_Bottom("#face1#双击背包消耗栏的图纸，就能激活你的建筑列表。", 37, 9400922, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.updateInfoQuest(64605, "chk=1;dir=1;give=1");
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('1', "Effect/DirectionWz2.img/effect/myHomeTuto/5", 0, 900, 0, -80, 12, 4, 0);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#前往我的小屋，点击我的小屋菜单的#i3801390#按键，选择射手村2层房屋后，选择你喜欢的屋顶、外墙和窗户，然后就能进行建造了。", 37, 9400922, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#如果有什么问题，你可以随时来找我。等你建成了美丽的新家，记得邀请我去参观啊，哈哈哈", 37, 9400922, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                        cm.sendNormalTalk_Bottom("#b谢谢你，凯尼斯！", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#要是家变大了，就能有更多可以装饰的地方了吧？真是让人激动呢！", 37, 9400921, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#什么啊，真是羡慕呢~！别傻站着了，赶快去我的小屋，开始建造吧。我要第一个参观你的新家！", 37, 9400920, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.forceCompleteQuest(64605);
                                                                                                              cm.updateInfoQuest(500767, "1=1;2=1;3=1;4=1;entrance=0;7=1;managerXpos=100;managerYpos=100");
                                                                                                              cm.sendNewEffects(19, [0]);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.warp(871000001, 0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.npc_LeaveField("oid=11112859");
                                                                                                              cm.npc_LeaveField("oid=11112860");
                                                                                                              cm.npc_LeaveField("oid=11112905");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;