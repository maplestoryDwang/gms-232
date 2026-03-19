function start() {
    if (cm.getMapId() == 350011100) {
        if (cm.getNumberFromQuestInfo(33151, "monpa") < 1) {
            cm.addPopupSay(1540502, 2000, "黑色之翼肯定是打算复活黑魔法师吧?", "Voice3.img/BlackHeaven/3_2/5");
            cm.addPopupSay(1540503, 6000, "你不知道吗?这可是秘密……有消息称黑魔法师已经复活了. ", "Voice3.img/BlackHeaven/3_2/6");
            cm.addPopupSay(1540502, 2000, "什么?如果这是真的, 那不就糟糕了吗?", "Voice3.img/BlackHeaven/3_2/7");
            cm.addNumberForQuestInfo(33151, "monpa", 1)
        }
    } else {
        if (cm.getMapId() == 350011200) {
            if (cm.getNumberFromQuestInfo(33151, "monpa") < 2) {
                cm.addPopupSay(1540502, 2000, "布吉肯定被关在这里的某个地方. ", "Voice3.img/BlackHeaven/3_2/1");
                cm.addPopupSay(1540503, 4000, "她究竟是怎么被抓到的?她做情报员又不是一两天的事情了. ", "Voice3.img/BlackHeaven/3_2/2");
                cm.addPopupSay(1540502, 2000, "她好像在调查#r什么危险的东西#k. ", "Voice3.img/BlackHeaven/3_2/3");
                cm.addPopupSay(1540504, 2000, "黑色之翼那些家伙……究竟有什么诡计呢?", "Voice3.img/BlackHeaven/3_2/4");
                cm.addNumberForQuestInfo(33151, "monpa", 2)
            }
        } else {
            if (cm.getMapId() == 350011300) {
                if (cm.getNumberFromQuestInfo(33151, "monpa") < 3) {
                    cm.addPopupSay(1540503, 2000, "你刚刚看到了吗?我今天的状态非常好!", "");
                    cm.addPopupSay(1540502, 2000, "必须比那个更快, 德皮. ", "");
                    cm.addPopupSay(1540504, 2000, "哥哥们, 集中注意力. ", "");
                    cm.addNumberForQuestInfo(33151, "monpa", 3)
                }
            } else {
                if (cm.getMapId() == 350011800) {
                    if (cm.getNumberFromQuestInfo(33151, "monpa") < 4) {
                        cm.addPopupSay(1540503, 2000, "我好想吃旋转寿司. ", "");
                        cm.addPopupSay(1540502, 2000, "烤鳗鱼, 烤鳗鱼最棒了. ", "");
                        cm.addPopupSay(1540504, 2000, "...", "");
                        cm.addNumberForQuestInfo(33151, "monpa", 4)
                    }
                } else {
                    if (cm.getMapId() == 350011900) {
                        if (cm.getNumberFromQuestInfo(33151, "monpa") < 5) {
                            cm.addPopupSay(1033228, 3000, "你们来得正好!今天我就给你们来个了断!!", "");
                            cm.addPopupSay(1540503, 2000, "怎么会这样!石头居然会说话?", "");
                            cm.addPopupSay(1033228, 1000, "啊?!鸟居然会说话!!!", "");
                            cm.addPopupSay(1540504, 1000, "...", "");
                            cm.addNumberForQuestInfo(33151, "monpa", 5)
                        }
                    }
                }
            }
        }
    }
};