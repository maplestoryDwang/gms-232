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
            cm.sendNormalTalk_Bottom("#face0#射手村的特派员传来消息说，他们观察到了一些奇怪的动向，但是目前还没能查探到什么具体情况。可不可以请你详细说明一下到底是怎么回事呢？？", 37, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##b#p1103003##k的报告书是短时间内赶出来的，里面就只写了一些简略的内容。他还说，具体情况只能等神那到达后，再来帮忙说明了。可不可以请你帮忙说说这到底是怎么回事呢？", 37, 1101002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57427, "");
                    cm.sendNormalTalk_Bottom("（我向南哈特详细描述了自己原本所在世界的情况……包括在日本究竟都发生了什么，织田军已经开始在这个新的世界蠢蠢欲动，以及这个世界很快也会出现问题。说完后，我向他表示，希望能够尽快见到希纳斯女皇。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#原来如此……我也感觉到了一些不稳的动向，但还以为又是黑色之翼动的手脚……如果神那你所言不假，那么冒险岛又出现了一批新的邪恶势力啊。他们……是叫织田军对吧？", 37, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这个问题还是要尽快报告给女皇知道才行。我也会将这些情况转告给其他骑士团成员，让大家充分做好战斗准备。", 37, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#女皇就在右侧，她正和#b#p1101001##k在一起。还请不要做出什么无礼的举动。", 37, 1101002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest();
                                    cm.dispose()
                                }
                            }
                        }
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
            cm.sendNormalTalk_Bottom("#face0#你好。欢迎来到圣地。情况我已经从南哈特那边听说了。你才刚刚来到这个陌生的世界，一定遇到了不少问题吧。\r\n", 37, 1101000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#金银岛派往各地的特派员送来报告说，以魔法密林为首，在其他各地同时发生了多起魔物暴动事件。这些事件应该都和织田军有关。\n最可怕的是，我们还接到报告说，织田军已经和一直在冒险岛作恶的组织黑色之翼有所接触。", 37, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这已经不是你们这些与织田军敌对之人的问题了。他们的接触已经对整个冒险岛造成了巨大的威胁。除了直接听我指挥的骑士团外，冒险岛所有住民都必须齐心协力，共同对抗黑色之翼与织田军两大邪恶势力。", 37, 1101000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我已经联系到了#b#m100000000##k的#b#p1012100##k，#b#m310000000##k的对抗黑势力组织和流浪在世界各地的英雄也都已经知道了这次的事件。相信他们一定会积极协助你们的，神那你也可以将这件事告诉给自己的同伴。", 37, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57427);
                            cm.updateInfoQuest(15710, "lasttime=19/11/27/17/55");
                            cm.gainExp(3000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};