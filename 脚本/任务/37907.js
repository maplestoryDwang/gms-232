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
      cm.sendNormalTalk_Bottom("#face0#手势信号？啊！因为在水下没法用言语交流。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#能教我几种手势信号吗？", 36, 3004851, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#学着点也不错。\r\n#h0#，麻烦你去清理周围怪物好吗？", 36, 3004850, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("(为什么不教我呢……？)", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("#face0#消灭#b100只#k就可以了。", 36, 3004850, 1);
            } else if (status === v++) {
              cm.forceStartQuest(37907, '');
              cm.gainExp(2488535);
              cm.dispose();
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
      cm.sendNormalTalk_Bottom("呼哧……呼哧……我专心清理了怪物……沃莉？", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##h0#，像这样双臂向旁边展开，晃动手臂……\r\n是“没有异常”的意思。", 36, 3004851, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#手臂上下大幅挥动，是危险的意思……", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#像这样竖起拇指，其他手指伸直的状态下晃动……晃动……嗯……", 36, 3004851, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#休麦，你之前说这是什么意思？", 36, 3004851, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#是嫌你丑，叫你别靠近的意思。", 36, 3004850, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#不，不是的，#h0#！！我绝对不是这意思！！", 36, 3004851, true, true, 1);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(37907);
                    cm.gainExp(265476362);
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