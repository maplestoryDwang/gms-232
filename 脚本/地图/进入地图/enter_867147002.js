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
      cm.npc_ChangeController(9401035, "oid=200955", 265, 185, 72, 215, 315, 5, true, 0, false);
      cm.npc_ChangeController(9401049, "oid=200956", 407, -115, 56, 386, 424, 5, true, 0, false);
      cm.npc_ChangeController(9401043, "oid=200957", 476, 125, 78, 426, 514, 5, true, 0, false);
      cm.npc_ChangeController(9401040, 'oid=200958', 412, 125, 77, 386, 462, 4, true, 0, false);
      cm.npc_ChangeController(9401024, "oid=200959", -332, -25, 1, -382, -332, 0, false, 0, false);
      cm.npc_ChangeController(9401123, 'oid=200960', -234, 155, 32, -284, -184, 4, true, 0, false);
      cm.npc_ChangeController(9401129, 'oid=200961', 209, 185, 65, 159, 259, 4, true, 0, false);
      cm.npc_ChangeController(9401130, 'oid=200962', -16, -205, 13, -66, 34, 5, true, 0, false);
      cm.npc_ChangeController(9401131, "oid=200963", -323, -205, 16, -373, -273, 4, true, 0, false);
      cm.npc_ChangeController(9401132, "oid=200964", -246, -205, 11, -296, -196, 5, true, 0, false);
      cm.npc_ChangeController(9401133, "oid=200965", -183, -205, 11, -233, -133, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401025, "oid=8618788", -40, 60, 48, -90, 10, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=8618788", 'summon', 0, 0);
      cm.npc_ChangeController(9401026, "oid=8618789", 40, 60, 48, -10, 90, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=8618789", "summon", 0, 0);
      cm.npc_ChangeController(9401027, "oid=8618790", -120, 60, 47, -170, -70, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=8618790", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("马米，出来了～当当，尊贵的#h0#登场！", 37, 9401023, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 330);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNewEffects(17, [2000, 1000, 2000, -20, 90]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("您一路辛苦了，我是这里的负责人，您叫我马米就好。", 37, 9401021, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b你好，我是#h0#。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=8618790", 0);
                  cm.sendNormalTalk_Bottom("来来，我们以后会经常见面的，那就慢慢了解彼此，进入正题吧？", 37, 9401023, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("您来的路上看见旁边出现的巨大洞口了吗？直到不久之前，这里还是个山丘，这座岛屿是我出生的地方，我曾经就在这附近玩耍打闹。", 37, 9401021, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我离开家一段时间后再回来时，开满白色野花的山丘便消失不见了，取而代之的是巨大的洞口。一开始我十分激动，因为在我们认为再没有新的探险场所时，出现了这种未知的领域。", 37, 9401021, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我聚集了伙伴，进入了那个巨大的洞口，然而…… ", 37, 9401021, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……出来时就剩我一个人了。", 37, 9401021, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这里面生存着未知的怪物，和冒险岛世界其余的地方都不同。幽灵？尘土怪？我们都不知该称之为什么。", 37, 9401021, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("关于这个洞口的传闻铺天盖地，在冒险家们蜂拥而至之时我决定了。如果没有办法阻止他们，那就阻止更多人牺牲吧。", 37, 9401021, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("所以我在这里成立了远征队本部，帮助其他冒险家。", 37, 9401021, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b……原来如此。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我想拜托你的是，带领这些，进入深渊，担任远征队队长的角色。", 37, 9401021, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯～补充说明一下，每天都有无数的冒险家排着队下到深渊，但最高纪录也只达到过地下9层，而且还只有3次。连续的失败导致冒险家们纷纷丧失了信心和挑战欲。", 37, 9401023, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嘿嘿！所以大叔我想出了一个好主意。我决定寻找能够率领这些冒险家的远征队队长！当然，就是你啦～（眨眼）", 37, 9401023, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.askMenu_Bottom("#b嗯，要是成为远征队队长……\r\n#L0# 我该做些什么呢？#l", 57, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("好问题，这个好问题当然要交给马米！", 37, 9401023, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("首先需要募集同行的远征队队员。虽然有人向我们推荐了你，但我也不会那么鲁莽，不检验你的实力，就将你送到那么危险的地方。", 37, 9401021, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("找到远征队队员，探索深渊，累积声望，通过累积的声望帮助远征队队员成长，然后再前往更深层的区域探险，就这样到达#b深渊的尽头，告诉我们那里的情况。#k。这就是你要做的事情。", 37, 9401021, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("另外，最重要的是消灭“暗影”。“暗影”不会受到普通攻击，所以远征队队长将会获得特殊能力。", 37, 9401021, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("取而代之的是，获得能力的远征队队长无法消灭#b深渊的普通怪物。#k。因此你才需要与其他探险家一同组成远征队，前往探险。", 37, 9401021, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("更加详细的内容，以后我会一个一个慢慢告诉你，不用担心。", 37, 9401023, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.askMenu_Bottom("#b嗯，要是成为远征队队长……\r\n#L1# 我能获得什么呢？#l", 57, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哦吼！你还挺务实的嘛？其实奖励是最重要的。奖励呢……敬请期待吧～～ ", 37, 9401023, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("就是名誉！我要是这么说，你就会回去了吧？", 37, 9401023, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("哈哈，远征队中所有人之间共享#b经验值#k。也就是说，#h0#即使成为了远征队队长，无法消灭普通怪物，也都可以#k收到#b远征队队员获得的经验值。", 37, 9401023, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("怎么样？这个提案很有吸引力吧？消灭暗影至关重要，不过还好它不会经常出现，所以这趟冒险应该还算轻松。", 37, 9401023, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.askMenu_Bottom("#b嗯，要是成为远征队队长……\r\n#L2# 要担任队长到什么时候呢？#l", 57, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你问到了关键点上。我们也无法一直运营这个远征队本部，直到看见深渊的尽头为止，深渊远征队预计在#b2020年2月19日至3月31日期间内#k运营。", 37, 9401021, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.askMenu_Bottom("#b嗯，要是成为远征队队长……\r\n#L3# 原来如此。#l", 57, 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这下解开你的疑问了吗？", 37, 9401023, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("怎么样？你愿意成为带领诸多冒险家的远征队队长吗？", 37, 9401023, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b我的荣幸。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("好的，那就交给马米！", 37, 9401023, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#h0#，我将赋予你远征队队长的资格。", 37, 9401021, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound2/PL_Sound.img/Wz2_Abyss/levelUP", 100);
                                                                                      cm.sendNormalTalk_Bottom("作为远征队队长，你的第一个任务就是收编远征队队员。", 37, 9401021, true, true);
                                                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/AbyssExpedition/LevelUP");
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("好在远征队总部里经常有不少寻求同伴的冒险家，这事应该不难～ ", 37, 9401023, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("呵呵，如果你需要帮助，就来找大叔和马米。", 37, 9401023, true, true);
                                                                                        } else if (status === V++) {
                                                                                          cm.forceCompleteQuest(64760);
                                                                                          cm.updateInfoQuest(64760, 'chk1=1');
                                                                                          cm.updateInfoQuest(64753, "point=0;level=0;rank=0");
                                                                                          cm.eventSKill(0);
                                                                                          cm.dispose();
                                                                                          cm.warp(867147000, 1, true);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.gainItem(3700624, 1);
                                                                                          cm.npc_LeaveField("oid=8618788");
                                                                                          cm.npc_LeaveField("oid=8618788");
                                                                                          cm.npc_LeaveField("oid=8618789");
                                                                                          cm.npc_LeaveField("oid=8618789");
                                                                                          cm.npc_LeaveField("oid=8618790");
                                                                                          cm.npc_LeaveField("oid=8618790");
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}