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
      cm.askMenu("有什么事吗？\r\n\r\n#b#L0#和文博士对话#l", 0, 2300001);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你是文教授吗？", 16, 2300001, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("看来你是见到了我的弟弟。文教授是我的弟弟。", 0, 2300001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("弟弟？！我还以为你们是一个人呢。", 16, 2300001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哈哈哈，是吗？我和我弟弟是完全不同的两个人。", 0, 2300001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你们真的很像。", 16, 2300001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("从外貌来说也许如此，但我是#b理论物理学家#k，我弟弟研究的是#b实验物理学#k。如果你知道了这一点，就不会混淆了。", 0, 2300001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("理论物理学？实验物理学？两者有什么差异吗？", 16, 2300001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那当然。差异非常大。跟电子工程和电气工程、有机化学和无机化学的差异一样大。", 0, 2300001, true, true);
                    } else if (status === V++) {
                      cm.sendNormalTalk("(到底是说相近呢？还是说差异大啊？听了例子之后反而更糊涂了……)", 16, 2300001, true, false);
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