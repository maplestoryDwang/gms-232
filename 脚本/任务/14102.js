var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk("Let me know when you change your mind!");
            cm.dispose();
            status--
        }
    }
    if (status == 0) {
        cm.askAcceptDecline("#r[Maple Mayhem Bingo]#k is a three player bingo game. Want to hear the rules?")
    } else {
        if (status == 1) {
            cm.sendNextS("You can participate in this game #rup to 10 times a day#k per account.")
        } else {
            if (status == 2) {
                cm.sendNextPrevS("Once you're in-game and it's your turn, you can click on any of the numbers on your bingo board to select them. If your opponent has the same number on his or her bingo board, that number will also be marked.")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("The game ends if anyone completes 5 rows within the time limit. If nobody completes 5 rows within the time limit, whoever has the highest points will win the game.")
                } else {
                    if (status == 4) {
                        cm.sendNextPrevS("You get 100 points for checking off one number, and 200 points for checking off the mission number (shown in yellow). You will get 500 bonus points by completing any one bingo row. Lastly, you'll get 1000 points for completing one bingo row by checking off the mission number (shown in yellow).")
                    } else {
                        if (status == 5) {
                            cm.sendNextPrevS("Rewards are given out based on the final rankings. However, you won't get anything if you leave in the middle, or if you don't participate in the game!")
                        } else {
                            if (status == 6) {
                                cm.forceStartQuest();
                                cm.forceCompleteQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};