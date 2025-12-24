package net.swordie.ms.world;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;

public class TransferInfo {

    private final Client client;
    private final User user;
    private final Channel oldChannel;
    private final Channel newChannel;
    private final StateWrapper state = new StateWrapper();

    public TransferInfo(Client client, User user, Channel oldChannel, Channel newChannel) {
        this.client = client;
        this.user = user;
        this.oldChannel = oldChannel;
        this.newChannel = newChannel;
        setState(State.Initial);
    }

    public User getUser() {
        return user;
    }

    public Channel getNewChannel() {
        return newChannel;
    }

    public Channel getOldChannel() {
        return oldChannel;
    }

    public StateWrapper getState() {
        return state;
    }

    public Client getClient() {
        return client;
    }

    public void setState(State state) {
        this.state.state = state;
        synchronized (this.state) {
            this.state.notifyAll();
        }
    }

    public class StateWrapper {
        // For wait/notify mechanism
        volatile State state;

        public State getState() {
            return state;
        }
    }

    public enum State {
        Initial, // Char is in old connection
        Removed, // Char is in no connection
        Complete // Char is in new connection
    }
}


