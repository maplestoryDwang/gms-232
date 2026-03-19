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
      cm.npc_ChangeController(9390203, "oid=109900", 284, 75, 14, 234, 334, 1, false, 0, false);
      cm.npc_ChangeController(9390202, "oid=109901", 19, 75, 14, -31, 69, 0, false, 0, false);
      cm.npc_ChangeController(9390257, "oid=109902", -77, 75, 14, -127, -27, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(17621, '');
      cm.sendNormalTalk_Bottom("你没听到我说的话吗？时间就是金钱。你没有提前预约就这么突然来访，这样的行为很没有礼貌。", 37, 9390203, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(17621, '257_show');
        cm.sendNormalTalk_Bottom("那个，统帅。实际上，这个人帮我找回了差点被偷走的交易品。", 37, 9390217, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("什么？差点被偷走的交易品？被偷是什么意思啊！", 37, 9390203, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊……那个…… 突然出现了很可怕的敌人拦腰抢劫…我……我先走了！", 37, 9390217, true, true);
          } else {
            if (status === V++) {
              cm.forceStartQuest(17621, '');
              cm.sendNormalTalk_Bottom("#b(居然说了那种谎话之后，就逃跑！！)#k", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯…… 那我应该为此表示感谢才是。谢谢你。", 37, 9390203, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没什么。那是我应该做的。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我正式介绍下我自己吧。我叫#e#b吉尔伯特·达尼尔拉#k#n，我既是凯梅尔兹共和国的统帅，又是达尼尔拉商团的主人。很高兴认识你", 37, 9390203, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("好的，我是在冒险岛世界各地旅行的#h0#。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("旅行！那是年轻人的特权呢。但你为什么想要见我？", 37, 9390203, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊…… 那个……(怎么办。可以告诉他我作为使节的义务吗？)", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.forceStartQuest(17621, "202_show");
                            cm.sendNormalTalk_Bottom("爸爸！我回来啦！", 37, 9390202, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("莱文，我不是跟你说过嘛，在商团的时候要喊我'统帅'！公私要区分清楚！", 37, 9390203, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…很抱歉。统帅。我按照你的命令，顺利完成交易之后回来了。", 37, 9390202, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("嗯？呦~ #h0#已经到达啦！", 37, 9390202, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("莱文，你认识他？听他说，他是旅行者。他把我们商团的交易品从小偷手上抢了回来。", 37, 9390203, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我不在的这段时间，你又做了了不起的事情啊！你这家伙还真不错。爸爸，#e#b#h0##k#n在贝里也帮了我。", 37, 9390202, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你并不是普通的旅行者啊。你有着出众的身手和仗义之心。你给了我们商团的人很大帮助。", 37, 9390203, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("他哪是什么单纯的旅行者啊！#e#b#h0##k#n是代表希纳斯女皇来的和平使者！是不是很厉害？我一开始还以为从#b海本#k王国又派来使节了……", 37, 9390202, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("什么？", 37, 9390203, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("(该死！！)啊，是的……没错，其实是冒险岛世界的希纳斯女皇派我来的。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你之前不还说自己是旅行者吗？", 37, 9390203, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("是……是那样的。首领大人，我实话告诉您吧。\r\n其实我不是普通的旅行者，而是代表希纳斯女皇而来。虽然我们之前还不太熟悉，但是最近冒险岛世界各地和凯梅尔兹共和国之间的交流日渐增多。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("所以……你来这里的目的是什么？", 37, 9390203, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("就像是之前莱文说的那样，我是作为希纳斯女皇的和平使者来到这里的。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("和平使者？", 37, 9390203, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("是的。希纳斯女皇希望和凯梅尔兹共和国保持友好的关系，更希望和你们成为相互合作的同伴。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("嗯… 你远道而来，先休息吧。你帮了我们商团不少忙，今天就在这休息吧。", 37, 9390203, true, true);
                                                          } else if (status === V++) {
                                                            cm.forceCompleteQuest(17621);
                                                            cm.setStandAloneMode(false);
                                                            cm.dispose();
                                                            cm.warp(865000002, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;