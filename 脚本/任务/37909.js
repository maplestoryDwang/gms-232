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
      cm.sendNormalTalk_Bottom("#face0#好，是很近的地方呢。", 36, 3004850, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#嗯……", 36, 3004850, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#有什么问题吗？", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#不是，信号太清晰了。", 36, 3004850, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#去看看就知道了。先出发吧。", 36, 3004850, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("那我们马上去追踪信号吧？", 56, 3004805, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(37909, '');
                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h1;20=h0;02=h1;21=h0;03=h0;04=h0;05=h0;41=h0;24=h1;25=h1;09=h0");
                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;21=h0;03=h0;04=h0;05=h0;41=h0;24=h1;25=h1;09=h0");
                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;21=h0;03=h0;04=h0;05=h0;41=h0;06=h1;24=h1;25=h1;09=h0");
                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h1;21=h0;03=h0;04=h0;05=h0;41=h0;06=h1;24=h1;25=h1;09=h0");
                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h1;21=h0;03=h0;04=h0;05=h0;41=h0;06=h1;24=h1;25=h1;17=h1;09=h0");
                  cm.OnStartNavigation(450016060, 0, "east00", 37909);
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
      cm.npc_LeaveField('oid=54673');
      cm.npc_LeaveField('oid=54674');
      cm.npc_LeaveField("oid=54675");
      cm.sendNormalTalk_Bottom("#face0#发出声波的原来是这个家伙……", 36, 3004850, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#这个……", 36, 3004851, true, true, 1);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(993185004, 0, false);
      }
    }
  }
}