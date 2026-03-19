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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, 76);
      cm.npc_ChangeController(3004434, "oid=551072", 5, 76, 2, -45, 55, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=551072", 'summon', 0, 0);
      cm.npc_ChangeController(3004431, 'oid=551073', -240, 76, 2, -290, -190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=551073", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -96, 26);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#预言，预言，预言……全都是预言啊。", 37, 3004431, false, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/59", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#就靠这些时间含糊、地点含糊、描述含糊的谣传……\r\n能找到剑的主人吗？", 37, 3004431, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Idea/60", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#预言是会自动实现的。无需人为去促成的。", 37, 3004434, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Arran/21", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#要是只知道干坐着等待奇迹发生，我们诺巴族早就灭绝了。", 37, 3004431, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Idea/61", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没办法了。只能多研究研究这个了。", 37, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/62", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#虽然每部教典描述的形态稍有差异，但大体上的内容是相同的。\r\n可说真的，什么高洁之人、正义之人、纯洁之人等等……都是很主观的标准。", 37, 3004431, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Idea/63", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#唯一确定的是，剑的主人世代都是#b天族#k。", 37, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/64", 128);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/5", 0, 1000, 0, -100, 1, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("天族的话……那不就是守护者塞伦所属的种族吗。", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#据说那是#b太阳神密特拉#k降临时，从天国带下来的半人半神的种族。", 37, 3004434, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Arran/22", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#随着古代神的时代终结，他们也失去力量，从此留在下界生活。", 37, 3004434, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Arran/23", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#后来，他们在最接近天空的#b近天峰#k上建立城市和教团，一度创造了繁荣的文明。", 37, 3004434, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Arran/24", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#圣剑是在近天峰沦陷之后，才被送来这里的呀。\r\n那么，除了塞伦之外的其他天族人都怎么样了？", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/65", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#都分散到大陆各地了，\r\n他们种族的人数本来就不多，如今更是稀罕少见了。", 37, 3004434, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Arran/25", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这下麻烦了。", 37, 3004431, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/66", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#话说回来……圣剑在#h0#的手里也起反应了呢。", 37, 3004431, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Idea/67", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("是非常#r强烈的敌意#k。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#如果说#r超越者#k也算神的一种，它会不会是在对杀害同族的凶手表示愤怒？", 37, 3004431, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Idea/68", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不会的。\r\n封印石原本就是#r世间的意志#k为了对付古代神而制造出来的物品……", 37, 3004434, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Arran/26", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#对抗者继承了那股力量，古代神对" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "表现出敌意，是理所当然的。", 37, 3004434, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Arran/27", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4##fs18#嗯……诶？！", 37, 3004431, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Idea/69", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("（为了与古代神抗衡，所以世界的意志打造了封印石？）", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#看样子你们不知道封印石的起源呀。", 37, 3004434, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Arran/28", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#这是真的吗？是可靠的说法吗？", 37, 3004431, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/70", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这事几乎没人知道，\r\n因为是很久以前的事了，也没留下什么史料。", 37, 3004434, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Arran/29", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#就是说只是一种推断的说法？", 37, 3004431, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Idea/71", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#是的。\r\n直到对抗者接触神剑，亲自验证之前。", 37, 3004434, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Arran/30", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, true, true);
                                                                          cm.npc_LeaveField('oid=552134');
                                                                          cm.npc_LeaveField('oid=552135');
                                                                          cm.npc_LeaveField("oid=553668");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#对抗者继承了当初消灭#r太阳神密特拉#k的力量……", 37, 3004431, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#这个情报非同小可……对联盟来说会是一个打击。", 37, 3004431, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#艾伦，你能否对此保密？\r\n如果这件事被曝光，联盟和塞尔提乌的关系会因而走向终结。", 37, 3004431, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#好，我会守口如瓶的。", 37, 3004434, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#尤其不能让那个名为#b守护者#k的女人听到风声。", 37, 3004431, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#要是被那个铁皮脑袋的女人知道了，她肯定会五官喷火，嚷嚷着要杀了我们。", 37, 3004431, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("会做到那、那种地步吗……", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                              cm.effect_Voice("SoundEff/knock", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#艾伦在吗？", 37, 3004430, false, true);
                                                                                                cm.effect_Voice("Voice5.img/CH2/Seren/14", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=551073'], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊……", 37, 3004431, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("嗬！！", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=551073", -1);
                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(3004430, 'oid=554084', -370, 76, 1, -420, -320, 0, true, 700, false);
                                                                                                          cm.npc_SetSpecialAction("oid=554084", "summon", 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#我想确认一下之前拜托你的东西……", 37, 3004430, false, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH2/Seren/15", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=554084"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#之前……是我失礼了。", 37, 3004430, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不……我才是。", 37, 3004431, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.warp(410000690, 1, false);
                                                                                                                        cm.eventSKill(0);
                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                        cm.forceCompleteQuest(39811);
                                                                                                                        cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                                        cm.npc_LeaveField("oid=551072");
                                                                                                                        cm.npc_LeaveField("oid=551072");
                                                                                                                        cm.npc_LeaveField("oid=551073");
                                                                                                                        cm.npc_LeaveField('oid=551073');
                                                                                                                        cm.npc_LeaveField("oid=554084");
                                                                                                                        cm.npc_LeaveField("oid=554084");
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