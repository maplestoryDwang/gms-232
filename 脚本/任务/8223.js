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
      cm.askMenu("你好啊，朋友！看到你安然无恙，我很高兴。这次来这边是有什么事么？\r\n#b#L0#你好啊，无名战士！既然你曾经在守护者的要塞待过，那么能不能给我讲讲密室呢？#l#k", 0, 9201581);
    } else {
      if (status === v++) {
        cm.askMenu("你是说密室么？它里面就是宗师们的房间，还有他们开会用的议会大厅。为什么突然问这个？\r\n#b#L0#我觉得我找到了这些战士们堕落的原因了。应该是因为有一群从我们冒险岛世界的镜像世界反转界来的宗师们控制了城堡！#l#k", 0, 9201581);
      } else {
        if (status === v++) {
          cm.askMenu("其他位面？宗师们的镜像？一听到这些概念我就头疼！再加上我就这么出现在了未来，我真晕了。但是这个“反转界”好像听起来有点耳熟呢。\r\n#b#L0#你听说过反转界？#l#k", 0, 9201581);
        } else {
          if (status === v++) {
            cm.askMenu("反转界……这个名字就像是模糊的低语在我脑中回荡。 我知道这个名字很重要……但不知道为什么自己会这么想。我感觉……好像……好像我曾经去过那里。不，不可能的……我记得……\r\n#L0#无名战士，你都记得什么？#l#k", 0, 9201581);
          } else {
            if (status === v++) {
              cm.askMenu("我……什么都不记得了！算了，我这不争气的脑袋！这些来自反转界的骗子——不管他们为什么要组建一支堕落的军队，反正肯定不是出于好心。我们必须采取行动！\r\n#L0#他们要攻击新叶都，呃，就是古萨福村！我们必须要干掉这些反转界的大师。但是必须要先想办法进入密室才行！#l#k ", 0, 9201581);
            } else {
              if (status === v++) {
                cm.askMenu("我有密室大门的#b键石#！因为我职责的关系，宗师们会经常需要我的服务。\r\n#L0#太好了，能把它交给我么？#l#k", 0, 9201581);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline("我已经明白了你的想法，也愿意给你键石……但这是有条件的。如果你想在城堡里都是守卫者的时候去冲击大门，那就是找死。但是……如果你能想办法减少守卫者的数量，那就可以极大地增加成功的可能。只要你能想办法减少守卫者的数量，我就给你键石。你觉得怎么样？", 0, 9201581);
                } else if (status === v++) {
                  cm.sendNormalTalk("太好了。虽然情况很严重，但是我们也必须小心谨慎地坚持执行正确的策略。通常，城堡中兵力的编制是营，一个营由75名士兵组成。虽然你之前的行为已经削弱破风者的力量，但这依然不够，你还需要分别消灭以下每个公会的一个营才行： #b75 劫风兵, 75 烙炎兵#k, and #b75 夜影兵#k。只要你能达成这个目标，我就给你守护者的键石，并衷心祝你成功！", 0, 9201581, false, true);
                  cm.forceStartQuest(8223, '');
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}