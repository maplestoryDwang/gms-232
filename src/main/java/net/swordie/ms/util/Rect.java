package net.swordie.ms.util;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.world.field.Field;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 1/5/2018.
 */
public class Rect {
    private int left, top, right, bottom;

    public Rect() {
    }

    public Rect(int left, int top, int right, int bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }

    public Rect(Position lt, Position rb) {
        this.left = lt.getX();
        this.top = lt.getY();
        this.right = rb.getX();
        this.bottom = rb.getY();
    }

    public Rect(Point lt, Point rb) {
        this.left = (int) lt.getX();
        this.top = (int) lt.getY();
        this.right = (int) rb.getX();
        this.bottom = (int) rb.getY();
    }

    /**
     * Top left x coord
     * @return
     */
    public int getLeft() {
        return left;
    }

    /**
     * Top left x coord
     * @param left
     */
    public void setLeft(int left) {
        this.left = left;
    }

    /**
     * Top left y coord
     * @return
     */
    public int getTop() {
        return top;
    }

    /**
     * Top left y coord
     * @param top
     */
    public void setTop(int top) {
        this.top = top;
    }

    /**
     * Bottom right x coord
     * @return
     */
    public int getRight() {
        return right;
    }

    /**
     * Bottom right x coord
     * @param right
     */
    public void setRight(int right) {
        this.right = right;
    }

    /**
     * Bottom right y coord
     * @return
     */
    public int getBottom() {
        return bottom;
    }

    /**
     * Bottom right y coord
     * @param bottom
     */
    public void setBottom(int bottom) {
        this.bottom = bottom;
    }

    /**
     * Returns the width of this Rect.
     * @return the width of this Rect.
     */
    public int getWidth() {
        return Math.abs(getLeft() - getRight());
    }

    /**
     * Returns the height of this Rect.
     * @return The height of this Rect.
     */
    public int getHeight() {
        return Math.abs(getTop() - getBottom());
    }

    /**
     * Encodes this Rect to a given {@link OutPacket}.
     * @param outPacket The OutPacket this Rect should be encoded to.
     */
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getLeft());
        outPacket.encodeInt(getTop());
        outPacket.encodeInt(getRight());
        outPacket.encodeInt(getBottom());
    }

    /**
     * Returns whether or not a {@link Position} is inside this Rect.
     * @param position The Position to check.
     * @return if the position is not null and inside this Rect (rect.left < pos.x < rect.right &&
     * rect.top < pos.y < rect.bottom.
     */
    public boolean hasPositionInside(Position position) {
        if(position == null) {
            return false;
        }
        int x = position.getX();
        int y = position.getY();
        return x >= left && y >= top && x <= right && y <= bottom;
    }

    /**
     * Move this Rect left by the width, effectively flipping around the left edge.
     * @return The resulting Rect from the move.
     */
    public Rect moveLeft() {
        return new Rect(getLeft() - getWidth(), getTop(), getLeft(), getBottom());
    }

    /**
     * Move this Rect right by the width, effectively flipping around the right edge.
     * @return The resulting Rect from the move.
     */
    public Rect moveRight() {
        return new Rect(getRight(), getTop(), getRight() + getWidth(), getBottom());
    }

    /**
     * Move this Rect up by the heigh, effectively flipping around the top edge.
     * @return The resulting Rect from the move.
     */
    public Rect moveUp() {return new Rect(getLeft(), getTop() + getHeight(), getRight(), getTop());}

    /**
     * Move this Rect down by the heigh, effectively flipping around the down edge.
     * @return The resulting Rect from the move.
     */
    public Rect moveDown() {return new Rect(getLeft(), getBottom(), getRight(), getBottom() - getHeight());}

    /**
     * Flips this Rect horizontally around a certain Position's x .
     * @param x The x to flip around
     * @return The flipped Rect
     */
    public Rect horizontalFlipAround(int x) {
        return new Rect(getRight() - 2 * (getRight() - x), getTop(), getLeft() + 2 * (x - getLeft()), getBottom());
    }

    public Rect move(int x, int y) {
        return new Rect(getLeft() + x, getTop() + y, getRight() + x, getBottom() + y);
    }

    /**
     * Returns a deep copy of this Rect.
     * @return a deep copy of this Rect
     */
    public Rect deepCopy() {
        return new Rect(getLeft(), getTop(), getRight(), getBottom());
    }

    @Override
    public String toString() {
        return String.format("[%d, %d, %d, %d]", left, top, right, bottom);
    }

    /**
     * Returns a random Position that is inside this Rect.
     * @return the random Position
     */
    public Position getRandomPositionInside() {
        int randX = Util.getRandom(getLeft(), getRight());
        int randY = Util.getRandom(getTop(), getBottom());
        return new Position(randX, randY);
    }

    /**
     * Returns a random list of Rects of size count, each Rect being of size innerRect.
     *
     * @param count amount of random Rects to try to fit in
     * @param innerRect Rect size of the inner Rect
     * @return list of random Rects
     */
    public List<Rect> getRandomRectsInside(Field field, int count, Rect innerRect) {
        var possibleRects = getPossibleRectsInside(innerRect);
        List<Rect> randomRects = new ArrayList<>();

        while (count > 0 && possibleRects.size() != 0) {
            var randomRect = Util.getRandomFromCollection(possibleRects);
            possibleRects.remove(randomRect);
            randomRects.add(randomRect);
            count--;
        }

        // map rect to closed fh
        for (var rect : randomRects) {
            var middle = rect.getLeft() + ((rect.getRight() - rect.getLeft()) / 2);
            var bottom = rect.getBottom();
            var pos = new Position(middle, bottom);
            var fh = field.findFootHoldBelow(pos);
            if (fh == null) {
                fh = field.findFootHoldBelow(pos.add(new Position(0, -100)));
            }
            if (fh != null) {
                var fhY = fh.getYFromX(middle);
                var diffY = bottom - fhY;
                rect.translateY(-diffY);
            }
        }

        return randomRects;
    }

    private void translateY(int diffY) {
        setTop(getTop() + diffY);
        setBottom(getBottom() + diffY);
    }

    public List<Rect> getPossibleRectsInside(Rect innerRect) {
        var innerDeltaX = Math.abs(innerRect.getLeft() - innerRect.getRight());
        var innerDeltaY = Math.abs(innerRect.getTop() - innerRect.getBottom());

        List<Rect> rects = new ArrayList<>();
        for (var left = getLeft(); left + innerDeltaX <= getRight(); left += innerDeltaX) {
            for (var top = getTop(); top + innerDeltaY <= getBottom(); top += innerDeltaY) {
                rects.add(new Rect(left, top, left + innerDeltaX, top + innerDeltaY));
            }
        }
        return rects;
    }

    public Rect scaleLinear(double scalar) {
        var deltaX = Math.abs(getRight() - getLeft()) * (scalar - 1);
        var deltaY = Math.abs(getBottom() - getTop()) * (scalar - 1);

        return new Rect((int)(getLeft() - deltaX / 2), (int)(getTop() - deltaY / 2), (int)(getRight() + deltaX / 2), (int)(getBottom() + deltaY / 2));
    }

    public void debugRect(Char chr) {
        var field = chr.getField();

        var poses = new ArrayList<Position>();
        poses.add(new Position(left, top));
        poses.add(new Position(left, bottom));
        poses.add(new Position(right, top));
        poses.add(new Position(right, bottom));

        for (var pos : poses) {
            field.drop(new Drop(0, 1000), pos, pos);
        }
        chr.chatMessage(toString());
    }
}
