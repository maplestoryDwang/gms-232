var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.fieldEffect_ScreenMsg("lightning/screenMsg/1");
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(1032201, 230, -130, 1);
      cm.npc_SetSpecialAction(1032201, "summon");
      cm.npc_ChangeController(1032202, 340, -400, 1);
      cm.npc_SetSpecialAction(1032202, 'summon');
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("还记得我刚才说的吗？", 1032201);
      } else {
        if (status === V++) {
          cm.sendNextSNoESC("1桶新鲜的牛奶，3份烧烤用猪肉，少量用于垂钓的鱼饵，还有……");
        } else {
          if (status === V++) {
            cm.sendNextNoESC("又忘了！织毛衣用的毛线。必须在天气变冷之前，织好衣服和围巾。", 1032201);
          } else {
            if (status === V++) {
              cm.sendNextSNoESC("对，织毛衣。红线和白线是吧？");
            } else {
              if (status === V++) {
                cm.sendNextSNoESC("(遇到拉尼娅后，身体一直感觉疼痛，最近越来越频繁了。难道是因为封印后失去光之力量的原因吗？)");
              } else {
                if (status === V++) {
                  cm.sendNextNoESC("夜光法师真笨喵。所以说啊，把他捡回来养着没有任何意义。", 1032202);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC("佩妮，我不是说过不要这么和夜光法师说话嘛！这次不要再忘了。否则我就生气了。", 1032201);
                  } else {
                    if (status === V++) {
                      cm.sendNextSNoESC("知道了，拉尼娅。这次我一定买对。哈哈。我走啦。");
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC("我送你到前面。佩妮，看好家。", 1032201);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC("切，拉尼娅最近偏心夜光法师喵。这是歧视动物喵。", 1032202);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC("回来的时候，给佩妮抓喜欢的鲜鱼。", 1032201);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC("嗯，哼！弄点吃的就想收买我，我才不是那种没出息的猫喵。不过既然你们一定要抓的话，别忘了抓点肥的喵。我可不是因为想吃才说的喵！", 1032202);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC("遵命，呵呵……走吧，夜光法师。", 1032201);
                              } else {
                                if (status === V++) {
                                  cm.sendNextSNoESC("呃，嗯。走吧。(和以前不同，心里仍然很憋闷。怎么会这样？)");
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(1);
                                    cm.npc_SetForceMove(1032201, -1, 400, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.setInGameDirectionMode(false);
                                    cm.npc_LeaveField(1032201);
                                    cm.npc_LeaveField(1032202);
                                    cm.warp(910141020, 0);
                                    cm.dispose();
                                  } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;