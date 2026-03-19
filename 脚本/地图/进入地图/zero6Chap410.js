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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这样…… 就找齐所有的女神之泪了吗…… 从第一次见到你到现在，已经过了多久了呢。不知为何，我感觉那就像很久之前的事情。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("现在我们要去冒险岛世界了吗？", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我们该去了。……虽然也许女神会因此消亡，但…… 那是女神所希望的。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……我似乎并不讨厌镜世界。", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('…………', 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face4#虽然被关在这里很长时间…… 但也不全是坏事。也有开心的事，也交到了朋友…… 还遇到了阿尔法你。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face5#如果是在冒险岛世界，我应该就见不到你了。应该一开始就不会被分开了。但我们这样被分开也不是坏事。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face4#那样我们就不会有独自作战的感觉了。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face4#你说得对…… 我们这样相见反而更好。", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("…………走吧。并不是说集齐了女神之泪就结束了。现在才是开始。首先应该觉醒成为真正的时间超越者才行吧。", 41, 2400005, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("嗯。我们回神殿去吧。", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(320000000, 5, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;