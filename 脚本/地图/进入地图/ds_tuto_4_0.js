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
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk('嗯……', 3, 2159344, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("(这里……是陌生的房间。不是刚才的东西哦……呃……全身都很疼。)", 3, 2159344, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("(看了一下，虽然是个陌生的地方，但好像是治疗室……这是什么地方？我怎么会在这里？)", 3, 2159344, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(先来整理一下情况。)", 3, 2159344, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(黑魔法师违背了和我的约定，破坏了妈妈和戴米安生活的神秘岛大陆南部地区。故乡只剩下一片废墟……到底为什么……)", 3, 2159344, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("(吊坠！吊坠到哪里去了？)", 3, 2159344, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("(是在战斗的时候弄丢了吗？和家人有关的东西一个都没有留下……呃……)", 3, 2159344, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.sendNormalTalk("(为了向黑魔法师复仇而来到时间神殿的时候……中途派出了#p2151009#。如果他还在那里的话，一定被其他军团长杀死了……虽然有#p2159309#的妨碍，但是很快就击败了他……他那时好像说英雄们来了？)", 3, 2159344, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(黑魔法师果然很强。还以为只要拼了命，一定可以给他造成一点伤害呢……最后只是打破了他的保护魔法，碰到了一点衣角而已……虽然一开始就没有期待能把他杀掉……)", 3, 2159344, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(但是我为什么还活着呢……？背叛黑魔法师的部下，应该没理由能活下来啊……中间有其他人的介入吗？难道是那些英雄……？)", 3, 2159344, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("(啊……头好疼。光是推测好像什么都不能确定……我连这是什么地方都不知道。在全部被毁掉的冒险岛世界竟然有这种地方，真让人吃惊。而且那些东西……看上去很陌生。)", 3, 2159344, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(1);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.sendNormalTalk("(先检查一下自己的状态吧……虽然不知道怎么回事，但是要想应对目前的情况，必须要有力量……还剩下多少精气呢？)", 3, 2159344, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/13"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("(……该死！精气几乎没有了……！看看缩小的精气盾，就知道自己的身体状态怎么样了。几乎所有能力都消失了。没有受任何伤，竟然会变得这么弱……这到底是怎么回事？)", 3, 2159344, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("(变得这么弱，要是遇到敌人的话，该怎么办呢？那个戴着帽子的男人……虽然好像不是敌人，但不知道是什么人……)", 3, 2159344, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("(呼……要想恢复力量，看来得花上一段时间了。光这样待着也没用……不如去活动一下吧。)", 3, 2159344, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(1);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("(好像听到了什么声音……)", 3, 2159344, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("在电站看到好像是能量传送装置的东西和一个蛋连接在一起之后，我打算回来，因为至少他们不会再吸收埃德尔斯坦的能量了。但是就在那时候，那个人打碎了蛋，冲出来把黑色之翼全部干掉了。", 1, 2159344, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("老实说，J，要不是你说的话，我根本不会相信这种荒唐的事。黑色之翼到底在干什么呢？而且那个人……背上长着翅膀，好像不是普通人。", 1, 2159315, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk('(……是在说我吗？)', 3, 2159315, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("那个人用的技能我还是第一次看到。非常强……老实说，如果不是因为他力量变弱，可以压制住他，我是不会把他带回来的。也许会很危险。", 1, 2159344, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("难道是实验体……？贝比蒂不也是这样吗？谁也不知道黑色之翼在矿山深处做什么实验。如果是疯子科学家格里梅尔制造出来的实验体，那他也是受害者。", 1, 2159312, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("可恶的格里梅尔……我一定要把他干掉！", 1, 2159314, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("他差不多也该醒来了。应该去看一看。", 1, 2159344, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(2);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                cm.npc_ChangeController(2159344, "oid=924201", -600, -20, 1, -650, -550, 0, false, 0, false);
                                                                cm.npc_SetSpecialAction("oid=924201", "summon", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3", "oid=924201"], [1500, 0, -100, 1, 0, 1, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("起来啦。身体还好吗？你的脸色还是很不好……", 1, 2159344, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("……是你救了我吗？", 3, 2159344, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("我总不能把倒下的人留在黑色之翼那里吧？从情况来看，我们之间的利害关系好像是一致的。你好像有很多话要说……跟我们一起走吧。", 1, 2159344, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("(审问……？收买……？还不知道。至少比刚醒来时看到的那群叫黑色之翼的家伙要好……)好的。", 3, 2159344, true, true);
                                                                        } else if (status === V++) {
                                                                          cm.curNodeEventEnd(true);
                                                                          cm.npc_LeaveField("oid=924201");
                                                                          cm.dispose();
                                                                          cm.warp(931050010, 0, false);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}