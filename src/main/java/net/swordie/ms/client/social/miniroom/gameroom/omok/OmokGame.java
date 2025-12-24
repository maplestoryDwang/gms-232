package net.swordie.ms.client.social.miniroom.gameroom.omok;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.regex.Pattern;

/**
 * Created on 05/02/2022.
 *
 * @author Asura
 */
public class OmokGame {
    /**
     * https://aeons.darkbb.com/t1048-spikeai-s-omok-strategy-guide
     *
     * Rule of three and three:
     *
     * Three and three rule disallows a player to move in a space that simultaneously forms two open rows of three.
     * A row of three is a line that if left alone only requires one more piece to join 4 pieces with open ends on both sides.
     * (a for sure win for that player).
     */
    private static final int BOARD_SIZE = 15;

    private Char redoRequest;
    private Char turn;
    private List<OmokStone> log = new ArrayList<>();
    private int[][] board = new int[BOARD_SIZE][BOARD_SIZE];

    public int[][] getBoard() {
        return board;
    }

    public Char getRedoRequest() {
        return redoRequest;
    }

    public void setRedoRequest(Char redoRequest) {
        this.redoRequest = redoRequest;
    }

    public List<OmokStone> getLog() {
        return log;
    }

    public Char getTurn() {
        return turn;
    }

    public void setTurn(Char turn) {
        this.turn = turn;

    }

    private boolean isFreePosition(int xPos, int yPos) {
        return getBoard()[xPos][yPos] == 0;
    }

    private boolean violatesThreeAndThreeRule(int xPos, int yPos, int playerColourValue) {
        var diffList = new ArrayList<Tuple<Integer, Integer>>() {{
            add(new Tuple<>(0, -1)); // vertical
            add(new Tuple<>(-1, -1)); // diagonal \
            add(new Tuple<>(-1, 0)); // horizontal
            add(new Tuple<>(-1, 1)); // diagonal /
        }};

        var threesCount = 0;

        for (var diff : diffList) {
            var newXPos = xPos;
            var newYPos = yPos;


            var line = new ArrayList<Integer>();
            for (var i = 0; i < 4; i++) {
                newXPos += diff.getLeft();
                newYPos += diff.getRight();

                if (newXPos < 0 || newXPos >= BOARD_SIZE || newYPos < 0 || newYPos >= BOARD_SIZE) {
                    // edge of board
                    line.add(3);
                    continue;
                }

                var playerColour = getBoard()[newXPos][newYPos];
                line.add(playerColour);
            }

            newXPos = xPos;
            newYPos = yPos;

            var line2 = new ArrayList<Integer>();
            var reverseDirectionX = diff.getLeft() * -1;
            var reverseDirectionY = diff.getRight() * -1;
            for (var i = 0; i < 4; i++) {
                newXPos += reverseDirectionX;
                newYPos += reverseDirectionY;

                if (newXPos < 0 || newXPos >= BOARD_SIZE || newYPos < 0 || newYPos >= BOARD_SIZE) {
                    // edge of board
                    line2.add(3);
                    continue;
                }

                var playerColour = getBoard()[newXPos][newYPos];
                line2.add(playerColour);
            }
            Collections.reverse(line2);
            line2.add(playerColourValue);
            line2.addAll(line);

            StringBuilder str = new StringBuilder();
            for (var i = 0; i < line2.size(); i++) {
                var s = String.valueOf(line2.get(i));
                str.append(s);
            }

            var pattern = Pattern.compile(String.format("0[0,%d]{3,4}0", playerColourValue));
            var groups = new HashSet<String>();
            var m = pattern.matcher(str);
            while (m.find()) {
                var g = m.group();
                groups.add(g);
            }
            var updatedStr = str;
            for (var i = 0; i < 7; i++) {
                updatedStr = updatedStr.deleteCharAt(0);
                m = pattern.matcher(updatedStr);
                while (m.find()) {
                    var g = m.group();
                    groups.add(g);
                }
            }

            for (var group : groups) {
                var g = group.substring(1, group.length() - 1);

                if (g.length() - g.replace(String.valueOf(playerColourValue), "").length() >= 3 && g.length() - g.replace("0", "").length() <= 1) {
                    threesCount++;
                    break;
                }
            }
        }

        return threesCount >= 2;
    }

    public boolean putStone(Char chr, int xPos, int yPos, int playerColourValue) {
        if (!isFreePosition(xPos, yPos)) {
            return false;
        }
        if (violatesThreeAndThreeRule(xPos, yPos, playerColourValue)) {
            return false;
        }

        getBoard()[xPos][yPos] = playerColourValue;
        getLog().add(new OmokStone(chr, xPos, yPos, playerColourValue));
        return true;
    }

    public boolean won(int xPos, int yPos, int playerColourValue) {
        var diffList = new ArrayList<Tuple<Integer, Integer>>() {{
            add(new Tuple<>(0, -1)); // vertical
            add(new Tuple<>(-1, -1)); // diagonal \
            add(new Tuple<>(-1, 0)); // horizontal
            add(new Tuple<>(-1, 1)); // diagonal /
        }};

        for (var diff : diffList) {
            var newXPos = xPos;
            var newYPos = yPos;


            var line = new ArrayList<Integer>();
            for (var i = 0; i < 4; i++) {
                newXPos += diff.getLeft();
                newYPos += diff.getRight();

                if (newXPos < 0 || newXPos >= BOARD_SIZE || newYPos < 0 || newYPos >= BOARD_SIZE) {
                    // edge of board
                    line.add(3);
                    continue;
                }

                var playerColour = getBoard()[newXPos][newYPos];
                line.add(playerColour);
            }

            newXPos = xPos;
            newYPos = yPos;

            var line2 = new ArrayList<Integer>();
            var reverseDirectionX = diff.getLeft() * -1;
            var reverseDirectionY = diff.getRight() * -1;
            for (var i = 0; i < 4; i++) {
                newXPos += reverseDirectionX;
                newYPos += reverseDirectionY;

                if (newXPos < 0 || newXPos >= BOARD_SIZE || newYPos < 0 || newYPos >= BOARD_SIZE) {
                    // edge of board
                    line2.add(3);
                    continue;
                }

                var playerColour = getBoard()[newXPos][newYPos];
                line2.add(playerColour);
            }
            Collections.reverse(line2);
            line2.add(playerColourValue);
            line2.addAll(line);

            StringBuilder str = new StringBuilder();
            for (var i = 0; i < line2.size(); i++) {
                var s = String.valueOf(line2.get(i));
                str.append(s);
            }

            var pattern = Pattern.compile(String.format("%d{5,}", playerColourValue));
            var matcher = pattern.matcher(str);

            if (matcher.find()) {
                return true;
            }
        }

        return false;
    }

    public boolean isTie() {
        for (var i = 0; i < getBoard().length; i++) {
            for (var ii = 0; ii < getBoard()[i].length; ii++) {
                if (getBoard()[i][ii] == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    public int redo(Char requestor) {
        var returnInt = 0;
        var putStoneHistory = new ArrayList<>(getLog());
        Collections.reverse(putStoneHistory);
        var removedTurns = new ArrayList<OmokStone>();
        for (var putStoneEntry : putStoneHistory) {
            removedTurns.add(putStoneEntry);
            if (putStoneEntry.getPlacer() == requestor) {
                break;
            }
        }
        for (var removedTurn : removedTurns) {
            getBoard()[removedTurn.getxPos()][removedTurn.getyPos()] = 0;
            returnInt++;
        }

        setTurn(requestor);
        return returnInt;
    }
}
