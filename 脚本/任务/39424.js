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
      cm.sendNormalTalk_Bottom("#face2#老大呢？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#应该会一如既往在最上层的。", 36, 3004907, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#该隐，德拉卡兹已经分成了老大派和提拉格派，\r\n在整个据点中开战。", 36, 3004907, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#可是两边都会盯上你的。", 36, 3004907, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#我知道。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face2#（必须向上。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
              } else if (status === v++) {
                cm.forceStartQuest(39424, '');
                cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h1;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h1");
                cm.OnStartNavigation(410000403, 0, "3004968", 39424);
                cm.dispose();
                cm.warp(410000401, 2, false);
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
      cm.sendNormalTalk_Bottom('#face0#该隐？', 36, 3004910, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#等一下，我不打算和你打，我和提拉格那家伙也已经分道扬镳了。", 36, 3004910, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#原因呢？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#提拉格这家伙，是打算打着记忆和项圈的幌子再次利用我们。", 36, 3004910, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#等我找回了记忆，我会离开的，虽然我拿这个#r项圈#k没有办法……\r\n就算被定位也没办法。", 36, 3004910, true, true, 1);
            } else if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#想来不会为了抓我这种人派出追剿部队吧。", 36, 3004910, true, true, 1);
              cm.forceCompleteQuest(39424);
              cm.gainExp(6603);
              cm.gainExp(377);
              cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h1");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}