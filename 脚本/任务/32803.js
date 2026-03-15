var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("其他队员为了从目标人物周围的人口中获得有用情报，已经纷纷展开了间谍活动。#h0#这名队员，你的任务完成了吗？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你，怎么看都像是过分沉迷于战争游戏。不管怎样，我已经大概知道麦格纳斯老师对希拉老师的看法了。", 57, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("很好，那么下一个目标就是希拉老师。这次你悄悄接近目标获取情报吧。", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32803, "");
                        cm.getTopMsgFont("前往4楼的医务室就可以和希拉老师对话了. ", 3, 20, 20, 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("你哪里不舒服吗？我把话说在前头，你要是打算在医务室混过上课时间的话，我劝你趁早打消这个念头。", 37, 1530160, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("要是在3秒之内你还不回答我问题的话，我就当你是装病。#b\r\n#L0#我是因为心痛才来的。#l\r\n#L1#我在上体育课的时候摔倒把脚崴了。#l#l\r\n#L2#我好像是得了什么眼病。#l", 37, 1530160)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#又是个体育课上受伤的同学？这个体育老师到底是怎么训练学生的，天天把孩子们往医务室送！做一些有助于塑造身材的瑜伽、普拉提什么的多好？不管怎样，这人就是很让我不满意。", 37, 1530160, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好吧，那边抽屉里有红色的药膏，你把它涂在受伤的地方就行了。什么？绷带？\r\n 这孩子，脚扭了就算涂上点唾沫都会好的。别在那儿装病了，涂完药的话就回去吧。", 37, 1530160, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                            cm.forceCompleteQuest(32803);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};