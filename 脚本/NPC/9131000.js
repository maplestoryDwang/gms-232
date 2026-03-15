var status = -1;
function start() {
  switch (cm.getMapId()) {
    case 807100003:
      action(1, 0, 0);
      break;
    default:
      cm.dispose();
  }
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (cm.getMapId()) {
    case 807100003:
      if (status == 0) {
        cm.sendNextNoESC_Illus("喔啦啦，呼呼… 去抓老虎的路上遇到了鹿，看打扮不像是织田信长所属的武装，怎麽会来到本能寺呀？", 9131000);
      } else {
        if (status == 1) {
          cm.sendNextSNoESC("(与温柔的外貌或者语气不同感觉一股杀气……是织田信长所属的将帅吗？)");
        } else {
          if (status == 2) {
            cm.sendNextSNoESC("我是松山家族的山崎伴信的大儿子剑斗！我来是为了主家和一个家族报仇找回公主殿下 ！");
          } else {
            if (status == 3) {
              cm.sendNextNoESC_Illus("松山，松山……好陌生的名字，当然若是不存在的名字记它又有什麽意义。", 9131000);
            } else {
              if (status == 4) {
                cm.sendNextSNoESC("看你那傲慢且旁若无人的态度，不用知道名字也能肯定是魔王的手下，那麽我和切开云雾之剑也不用在犹豫啦。");
              } else {
                if (status == 5) {
                  cm.sendNextSNoESC("现在也不晚，想报上名字尽管报，这将是你在这个世界的最後的声音。");
                } else {
                  if (status == 6) {
                    cm.sendNextNoESC_Illus("是喔，没必要知道名字啦。", 9131007);
                  } else {
                    if (status == 7) {
                      cm.npc_ChangeController(9131007, 135, 30);
                      cm.npc_SetSpecialAction(9131007, "summon");
                      cm.sendNextSNoESC("信玄！");
                    } else {
                      if (status == 8) {
                        cm.sendNextNoESC_Illus("看你就知道这次混战从哪里开始的，难道不是吗？四天王，明智光秀！", 9131007);
                      } else {
                        if (status == 9) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0"], [0, 0, -120, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status == 10) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3"], [0, 0, -120, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status == 11) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4"], [0, 0, -120, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status == 12) {
                                cm.sendNextNoESC_Illus("喔啦啦，呼呼……果然武田信玄名不虚传呀，第一眼就知道我的真实身分，连我要谋反的事情也知道了。", 9131000);
                              } else {
                                if (status == 13) {
                                  cm.sendNextNoESC_Illus("第一次亲自见你，但是根据我听到的传闻你不是那种可以在别人手下很长时间的人，怎麽样，若是把剑对准原来的主人，那麽考虑一下要不要联手啊？", 9131007);
                                } else {
                                  if (status == 14) {
                                    cm.sendNextSNoESC("信玄，就是那家伙把松山烧了！怎麽可以跟大仇人联手！明智光秀觉悟吧！");
                                  } else {
                                    if (status == 15) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5"], [0, 0, -120, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status == 16) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6"], [0, -100, -120, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status == 17) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7"], [0, -100, -120, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status == 18) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8"], [0, 0, -120, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status == 19) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9"], [0, -100, -120, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status == 20) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10"], [0, 0, -120, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status == 21) {
                                                  cm.inGameDirectionEvent_MoveAction(1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                } else {
                                                  if (status == 22) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    cm.inGameDirectionEvent_OneTimeAction('剑豪_反握刀柄', 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11"], [0, -100, -120, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status == 23) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12"], [0, -100, -120, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status == 24) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13"], [0, 150, -120, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status == 25) {
                                                          cm.npc_SetSpecialAction(9131007, "attack");
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else if (status == 26) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/shingenAttack/0"], [0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                                        } else {
                                                          cm.dispose();
                                                          cm.warp(807100004, 0);
                                                          cm.setInGameDirectionMode(false);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
  }
}