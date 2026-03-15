var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("因时间碎片而产生的无数的空间…… 其中能找对路的人非常少。只有能操纵时间的人才能做到。", 33, 2470000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你们终于来找我们了，要成为超越者的两位。", 33, 2470001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……难怪感受到了这么不同寻常的力量，原来是第四个和第五个女神之泪在一起啊。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这次不会错。肯定是女神之泪。", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("从两位身上感受到的力量…… 看来两位已经将其他的女神之泪全部找回了。", 33, 2470000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("但是，我们还不能陪伴两位。因为我们还有要做的事没有完成。", 33, 2470001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('要做的事？', 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我们先离开时间通道，去玩具城吧。我会在那里跟你们详细说明。", 33, 2470000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那请抓住我们的手吧。我们会把你们带到玩具城的。", 33, 2470001, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(327000000, 10, false);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.forceStartQuest(40608, '1');
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