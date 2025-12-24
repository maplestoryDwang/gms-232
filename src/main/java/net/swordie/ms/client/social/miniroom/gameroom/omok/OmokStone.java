package net.swordie.ms.client.social.miniroom.gameroom.omok;

import net.swordie.ms.client.character.Char;

/**
 * Created on 07/02/2022.
 *
 * @author Asura
 */
public class OmokStone {
    private Char placer;
    private int xPos, yPos;
    private int colourValue; // the piece that has been placed

    public OmokStone(Char placer, int xPos, int yPos, int colourValue) {
        this.placer = placer;
        this.xPos = xPos;
        this.yPos = yPos;
        this.colourValue = colourValue;
    }

    public Char getPlacer() {
        return placer;
    }

    public void setPlacer(Char placer) {
        this.placer = placer;
    }

    public int getxPos() {
        return xPos;
    }

    public void setxPos(int xPos) {
        this.xPos = xPos;
    }

    public int getyPos() {
        return yPos;
    }

    public void setyPos(int yPos) {
        this.yPos = yPos;
    }

    public int getColourValue() {
        return colourValue;
    }

    public void setColourValue(int colourValue) {
        this.colourValue = colourValue;
    }
}
