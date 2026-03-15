var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#对了，还要告诉海娜，领主被赶走的事。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#她一定会很开心的，我们这就去工坊吧！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#……你自己走吧。", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#为什么？因为我的脚步太慢了吗？", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#不是这样的……", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这家伙……因为我都没能好好调查铃铛。）", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（至少我要找到点有关铃铛的线索。）", 36, 3005102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#总之我很忙。", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#有什么好忙的？嗯？告诉我嘛！", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，总之很忙！", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.askYesNo_Bottom("#face0#看来格里挺忙的……要不要我去工坊转告海娜？", 36, 3005100, 1);
                        } else if (status === v++) {
                          cm.forceStartQuest(36229, '');
                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h1;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;66=h0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                          cm.OnStartNavigation(410004001, 0, "3005162", 36229);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#你就是这样赶走领主的啊。", 36, 3005103, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#嗯！多亏海娜帮忙，现在可以利用连接工坊和村庄以及后巷的通道\r\n轻松叫人过来了。", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#可是这很危险，你怎么就能肯定这个计划会成功？", 36, 3005103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#土地和人是合为一体的。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#说要拿走铃铛的时候，我也能感觉到那几位不是坏人。", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#这样啊，那我怎么样？", 36, 3005103, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#嗯？", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#呵呵，我开玩笑的，别介意。", 36, 3005103, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#这么说！现在要重新画画了？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯，我已经好久没有安心好好作画过了，\r\n等这次的画完成……", 36, 3005103, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我会第一个给你看的。", 36, 3005103, true, true, 1);
                        } else if (status === v++) {
                          cm.forceCompleteQuest(36229);
                          cm.gainExp(2896);
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