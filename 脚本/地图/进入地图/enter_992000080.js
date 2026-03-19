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
      cm.npc_ChangeController(2540005, "oid=19915028", 1128, 48, 14, 1078, 1178, 1, false, false);
      cm.npc_SetSpecialAction("oid=19915028", "summon", 0, 0);
      cm.sendNormalTalk("首先，塔内还设有结界，只要这结界感知到高智商生命体的话，就会将其驱逐至大厅。当然，这也是我设下的。虽然这结界的力量十分强大，不过只要输入密码就会将其解除。", 1, 2540000, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哇。很了不起啊？很好。那么我都会帮你解决的，请你把结界解除就可以了。", 17, 2540000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("是吗？很了不起吧？", 1, 2540000, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=19915028"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不过…………那个…………不行啊。", 1, 2540000, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/question");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("怎么？你不是说只要输入密码就可以解除结界吗？", 17, 2540000, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=19915028"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我忘记了。", 1, 2540000, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你说忘记了！那也没办法。已经过了太久的时间了。换做是我的话，500年前设置的装置也不会记住密码的吧？肯定是记不住的！", 1, 2540000, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("嗯…………也是。喂，等等！那么也就是说从一开始就根本无法成功了？", 17, 2540000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("所。以。！我又花费心血制造了朦胧石。你可以使用朦胧石暂时欺骗结界。朦胧石是给予我帮助的善良魔女格琳达的所需之物，所以你需要购买。", 1, 2540000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("既然是帮你，难道不能免费吗？", 17, 2540000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                  cm.sendNormalTalk("再怎么说起源之塔也是我的作品。#r那些家伙连点责任心都没有，#k就那样肆意妄为，不是很讨厌吗？至少要有最基本的责任心吧？", 1, 2540000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("(切…………)", 17, 2540000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你进入起源之塔，就会看到一个时钟，上面显示着当前位置和被结界感知前剩余的时间。", 1, 2540000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("当时钟上的时间显示为0时，你就会被驱逐到大厅了。基本上你会有一些时间…………不过要想下到塔的最底层还是比较困难的。", 1, 2540000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("所以你必须装备朦胧石来欺骗塔内的结界，这样你才能在塔内逗留更长的时间。首先…………你可以用起源点数从给予我帮助的格琳达那里购买，也可以从其他探险家那里购买未被刻印的朦胧石。", 1, 2540000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("不过，由于未被刻印的朦胧石与你的智力水平不能完全相符，因此效果会有所下降。", 1, 2540000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("如果你使用购买的朦胧石，时钟上的时间就会增多。因为使用朦胧石可以延长你能够逗留在塔内的时间。", 1, 2540000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("不过，朦胧石只能在一个地方装备，那就是这个大厅。如果你在结界内装备的话，将不会起到任何作用。", 1, 2540000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("因为你要进入很深很深的地方，所以你应该多装备一些质量好的朦胧石，才会有所帮助的，不是吗？", 1, 2540000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("可以使用朦胧石的空间…………当你的经验可以下到更深的地方时，我会为你扩展的，那时你再来找我吧。当然，你还要积累起源点数。", 1, 2540000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("最后，我向你说明一下在塔内可以随时和我对话的灵魂连接器。", 1, 2540000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("当你实在找不到路或者突然间身体不舒服的时候，就和我联系吧。虽然我不能每件事都帮到你…………但我会尽力而为的。", 1, 2540000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askYesNo("你都理解了吗？不理解我也没办法了。", 1, 2540000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.forceCompleteQuest(42010);
                                                            cm.updateInfoQuest(42000, "slot1=0;slot2=-1;slot3=-1;slot4=-1;slot5=-1");
                                                            cm.sendNormalTalk("啊，我已经按照约定为你开放了可以使用朦胧石的栏位。那么加油吧！", 1, 2540000, false, true);
                                                            cm.gainItem(2432438, 1);
                                                            cm.gainItem(2432461, 1);
                                                          } else if (status === V++) {
                                                            cm.warp(992000000, 1);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=19915028");
                                                            cm.npc_LeaveField("oid=19915028");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;