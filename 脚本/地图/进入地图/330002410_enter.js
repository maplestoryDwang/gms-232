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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530240, "oid=37715052", 660, 20, 2, 610, 710, 1, true, false);
      cm.npc_SetSpecialAction("oid=37715052", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=37715053", 600, 20, 2, 550, 650, 1, true, false);
      cm.npc_SetSpecialAction("oid=37715053", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=37715054", 540, 20, 2, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=37715054", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=37715055", 480, 20, 1, 430, 530, 1, true, false);
      cm.npc_SetSpecialAction("oid=37715055", "summon", 0, 0);
      cm.npc_ChangeController(1530180, "oid=37715056", 420, 20, 1, 370, 470, 1, true, false);
      cm.npc_SetSpecialAction("oid=37715056", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=37715057", 330, 20, 1, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=37715057", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("卡珊德拉，旧楼前洒着的不是血，而是番茄酱。这究竟是怎么回事？", 37, 1530110, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我，我不知道！\r\n肯定是供食阿姨们在搬运番茄酱途中洒的吧？哈哈哈", 37, 1530180, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("卡珊德拉~~ 谎话也要适可而止。\r\n那里根本就没有学生，怎么会有供食阿姨呢？", 37, 1530110, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……那应该是以前洒的吧！", 37, 1530180, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("卡珊德拉~~ 我不是跟你说要适可而止吗？\r\n#h0#说空番茄酱瓶上有最近使用过的痕迹。", 37, 1530110, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我不知道！唉，你为什么要像这样追根究底啊？\r\n奥兹，你那么喜欢追根究底，你肯定是B型吧？", 37, 1530180, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我是O型啊。", 37, 1530110, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 120, 500, 58);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4387);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……卡珊德拉不会说谎的。", 37, 1530240, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("但现在发现了空番茄酱瓶啊。这一切真的是谎言吗……？", 37, 1530270, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我们究竟要相信谁呢？", 37, 1530310, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 120, 134, 58);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3546);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你们要相信我！现在旧楼的秘密已经被揭开！\r\n我以爷爷的名义保证，卡珊德拉所说的都是谎言！", 37, 1530110, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("呃呃……！", 37, 1530180, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("南哈特脚趾受伤只是个巧合而已。\r\n所以，大家不要继续被卡珊德拉蒙骗了。知道了吗？", 37, 1530110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=37715057", -1, 100, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                              cm.setAmbience("Ambience.img/ding", 100, 60);
                                              cm.npc_SetSpecialAction("oid=37715056", "shade", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.playNpcEff(1530180);
                                                cm.inGameDirectionEvent_Monologue("居然敢怀疑我卡珊德拉的灵性……", 1);
                                                cm.effect_Voice("Voice2.img/Friends/CH4_03/1", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……？", 37, 1530110, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#他又来了……他又来了！\r\n他将惩罚怀疑我卡珊德拉之人……！！！", 37, 1530180, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH4_03/2", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === V++) {
                                                      cm.playNpcEff(1530180);
                                                      cm.effect_Voice("SoundEff.img/thunder", 100);
                                                      cm.npc_LeaveField("oid=37715057");
                                                      cm.dispose();
                                                      cm.warp(330002411, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;