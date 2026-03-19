function start() {
    if (cm.getMapId() == 350011420) {
        if (cm.getInfoQuest(33151) == "date=6") {
            cm.addPopupSay(1540503, 2000, "哥哥, 你记得反抗者里面名叫贝尔的女生吗?", "Voice3.img/BlackHeaven/3_5/1");
            cm.addPopupSay(1540502, 2000, "我记得. 她说我们是鸡, 对吧?", "Voice3.img/BlackHeaven/3_5/2");
            cm.addPopupSay(1540503, 4000, "嗯, 那个坏脾气的女人. 我们看起来像鸡吗?她究竟是什么眼神啊?", "Voice3.img/BlackHeaven/3_5/3");
            cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=2;password=1");
            cm.updateInfoQuest(33151, "date=7")
        } else {
            if (cm.getInfoQuest(33151) == "date=7") {
                cm.addPopupSay(1540503, 4000, "鸡很笨的. 自己下了蛋都会立刻忘记, 和我们才不一样呢. ", "Voice3.img/BlackHeaven/3_5/4");
                cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=3;password=1");
                cm.addPopupSay(1540503, 2000, "我想回家泡个澡. ", "Voice3.img/BlackHeaven/3_5/5");
                cm.addPopupSay(1540504, 2000, "哥哥, 不要废话了, 继续往上爬吧. ", "Voice3.img/BlackHeaven/3_5/6");
                cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=4;password=1");
                cm.updateInfoQuest(33151, "date=8")
            } else {
                if (cm.getInfoQuest(33151) == "date=8") {
                    cm.addPopupSay(1540503, 2000, "你记得反抗者的贝尔吗?", "Voice3.img/BlackHeaven/3_5/7");
                    cm.addPopupSay(1540504, 2000, "你刚刚不是说过了嘛, 哥哥!", "Voice3.img/BlackHeaven/3_5/8");
                    cm.addPopupSay(1540503, 2000, "啊?嗯……", "Voice3.img/BlackHeaven/3_5/9");
                    cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=5;password=1");
                    cm.updateInfoQuest(33151, "date=9")
                } else {
                    if (cm.getInfoQuest(33151) == "date=9") {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                        cm.fieldEffect_Tremble(1, 500, 30);
                        cm.addPopupSay(1540504, 2000, "刚刚那是什么声音?", "Voice3.img/BlackHeaven/3_5/10");
                        cm.addPopupSay(1540503, 2000, "古皮哥哥放屁了. ", "Voice3.img/BlackHeaven/3_5/11");
                        cm.addPopupSay(1540502, 1000, "......不是的. ", "Voice3.img/BlackHeaven/3_5/12");
                        cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=6;password=1");
                        cm.updateInfoQuest(33151, "date=10")
                    } else {
                        if (cm.getInfoQuest(33151) == "date=10") {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                            cm.fieldEffect_Tremble(0, 500, 30);
                            cm.addPopupSay(1540502, 3000, "……我再说一次, 那不是我的放屁声. ", "Voice3.img/BlackHeaven/3_5/13");
                            cm.addPopupSay(1540503, 1000, "嘻嘻嘻!", "Voice3.img/BlackHeaven/3_5/14");
                            cm.addPopupSay(1540504, 2000, "嘘, 小声点!会被发现的. ", "Voice3.img/BlackHeaven/3_5/15");
                            cm.updateInfoQuest(33151, "onBoard=1;monpa=4;dagoth=1;ropeOut=1;halo=1;ropetalk=7;password=1");
                            cm.updateInfoQuest(33151, "date=11")
                        }
                    }
                }
            }
        }
    }
};