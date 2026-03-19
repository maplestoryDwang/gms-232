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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000106, "oid=1053603", 150, 50, 3, 100, 200, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1053603", "summon", 0, 0);
        cm.npc_ChangeController(3000107, "oid=1053604", 70, 50, 3, 20, 120, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053604", "summon", 0, 0);
        cm.sendNormalTalk('你清醒一些了吗？', 1, 3000106, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("狼牙？呃……这里是什么地方？我还活着？", 17, 3000106, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你现在安全了。", 1, 3000107, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("卡塔利安？先别说我，迪奥怎么样了？", 17, 3000107, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("她很安全，就是遇到点麻烦……", 1, 3000107, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("您为什么对我说话这么客气……？", 17, 3000107, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你是狂龙战士。所有诺巴族人都应该对狂龙战士表示尊敬。", 1, 3000106, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("狂龙战士？你说的是我？我不明白你说的话。", 17, 3000106, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("接到贝德罗斯的求援后，我和狼牙立即前往东侧圣殿，在那里发现了已经觉醒成为狂龙战士的你。", 1, 3000107, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我们赶到时，你已经把那里那些奇怪的祭司全部赶走，昏倒在地。", 1, 3000107, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("迪奥没事，你不用担心。不过看样子迪奥受到圣物的诅咒，令我不太放心。", 1, 3000106, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("圣物的诅咒？比起这个，我还是不能相信你说我变成狂龙战士的话！", 17, 3000106, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("从到达的时候，围绕在你身上的灵气和变身征兆来看，你应该就是狂龙战士。虽然很难接受，但你就是命运中的那个孩子。", 1, 3000106, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("那么我……我会变成什么样？", 17, 3000106, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("你只要坦然接受赋予你的使命，按照命运的指引行动就行了。", 1, 3000106, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你年龄还小，这条路会很艰难，但既然赋予了你伟大的力量，你当然要承担起相应的责任。", 1, 3000106, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("如果我真的具有那么强大的力量，我愿意承担责任。可我现在还什么也没感觉到啊。", 17, 3000106, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("你是狂龙战士转生，转生后会失去所有战斗能力和记忆。简单来说，身为狂龙战士的你现在还只是块带有无限潜力的原石。", 1, 3000107, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("请你勤快修炼，早日成为不亚于先代的狂龙战士，领导我们诺巴族。", 1, 3000107, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("你别太催他，卡塔利安。他还不能完全了解担在他肩上的沉重命运。你先休息一会儿吧。", 1, 3000106, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("你虽然成了狂龙战士，但现在还很虚弱，所以别跟别人说你是狂龙战士，那样你会很危险。", 1, 3000107, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("不起这个，我更担心迪奥。迪奥在哪儿？", 17, 3000107, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("她比你更早醒过来，知道自己的情况后，跑出了万神殿。克里昂跟着去了，不会有事的。", 1, 3000107, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("我现在脑子里一片乱麻。不过精神好一些了，我想自己整理一下思绪。", 17, 3000107, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("你别太辛苦了。", 1, 3000106, true, true);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                        cm.npc_LeaveField("oid=1053603");
                                                        cm.npc_LeaveField("oid=1053604");
                                                        cm.dispose();
                                                        cm.warp(400000000, 0, false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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