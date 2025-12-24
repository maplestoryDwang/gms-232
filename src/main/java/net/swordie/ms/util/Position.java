package net.swordie.ms.util;

import moe.maple.miho.point.MoePoint;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.drop.Drop;

import java.awt.*;
import java.util.ArrayList;
import java.util.Objects;

public class Position {
    private int x;
    private int y;

    public Position(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public Position(){
        x = 0;
        y = 0;
    }

    public Position(Point value) {
        this.x = (int) value.getX();
        this.y = (int) value.getY();
    }

    @Override
    public String toString() {
        return String.format("[%d, %d]", getX(), getY());
    }

    public Position deepCopy() {
        return new Position(getX(), getY());
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    /**
     * Creates a {@link Rect} with regard to this character. Adds all values to this Char's
     * position.
     *
     * @param rect The rectangle to use.
     * @return The new rectangle.
     */
    public Rect getRectAround(Rect rect) {
        int x = getX();
        int y = getY();
        return new Rect(x + rect.getLeft(), y + rect.getTop(), x + rect.getRight(), y + rect.getBottom());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Position position = (Position) o;
        return x == position.x &&
                y == position.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    public Position add(Position pos) {
        return new Position(getX() + pos.getX(), getY() + pos.getY());
    }

    public int manhattanDistanceTo(Position pos) {
        return Math.abs(getX() - pos.getX()) + Math.abs(getY() - pos.getY());
    }

    public moe.maple.miho.point.Point toMoe() {
        return new MoePoint(getX(), getY());
    }

    public double distanceTo(Position other) {
        var myX = getX();
        var myY = getY();

        var otX = other.getX();
        var otY = other.getY();

        var deltaX = myX > otX ? myX - otX : otX - myX;
        var deltaY = myY > otY ? myY - otY : otY - myY;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    public static Position flipY(Position position) {
        return new Position(-position.getX(), position.getY());
    }

    public static Position flipX(Position position) {
        return new Position(position.getX(), -position.getY());
    }

    public static Position rotate90Clockwise(Position position) {
        // Algorithm for 90 degrees clockwise rotation.
        // +x  ->  -y  ->  -x  ->  +y
        // x and y switch places
        int xOff = position.getX();
        int yOff = position.getY();

        return new Position(yOff, -xOff);
    }

    public void show(Char chr) {
        chr.getField().drop(new Drop(0, 100), this, this);
    }

    public void debugPos(Char chr) {
        var field = chr.getField();

        field.drop(new Drop(0, 1), this, this);
        chr.chatMessage(toString());
    }

    public Position flipAround(int x, boolean fromRightToLeft) {
        var deltaX = Math.abs(getX() - x);
        return new Position(fromRightToLeft ? getX() - deltaX * 2 : getX() + deltaX * 2, getY());
    }
}
