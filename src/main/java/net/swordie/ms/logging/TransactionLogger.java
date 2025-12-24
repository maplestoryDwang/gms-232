package net.swordie.ms.logging;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.TradeTransactionDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class TransactionLogger {

    private static final int MAX_QUEUE_SIZE = 1;

    private static final Logger log = LogManager.getLogger();
    private static final Lock lock = new ReentrantLock();
    private static final TradeTransactionDao tradeTransactionDao = (TradeTransactionDao) SworDaoFactory.getByClass(TradeTransaction.class);

    private static final List<TradeTransaction> transactionQueue = new ArrayList<>();


    public static void addTradeTransaction(UUID tradeUuid, Item item, Char from, Char to) {
        try {
            lock.lock();

            transactionQueue.add(TradeTransaction.fromTrade(tradeUuid, item, from, to));
        } finally {
            lock.unlock();
        }
        if (transactionQueue.size() >= MAX_QUEUE_SIZE) {
            flush();
        }
    }

    public static void addTradeTransaction(UUID tradeUuid, long money, Char from, Char to) {
        if (money == 0) {
            return;
        }

        try {
            lock.lock();

            transactionQueue.add(TradeTransaction.fromTrade(tradeUuid, money, from, to));
        } finally {
            lock.unlock();
        }
        if (transactionQueue.size() >= MAX_QUEUE_SIZE) {
            flush();
        }
    }

    public static void addDropTransaction(Item item, Char from, Char to) {
        try {
            lock.lock();

            transactionQueue.add(TradeTransaction.fromDrop(item, from, to));
        } finally {
            lock.unlock();
        }
        if (transactionQueue.size() >= MAX_QUEUE_SIZE) {
            flush();
        }
    }

    public static void addDropTransaction(long money, Char from, Char to) {
        if (money == 0) {
            return;
        }

        try {
            lock.lock();

            transactionQueue.add(TradeTransaction.fromDrop(money, from, to));
        } finally {
            lock.unlock();
        }
        if (transactionQueue.size() >= MAX_QUEUE_SIZE) {
            flush();
        }
    }

    private static void flush() {
        try {
            lock.lock();

            tradeTransactionDao.saveOrUpdate(getTransactionQueue());
            getTransactionQueue().clear();
        } finally {
            lock.unlock();
        }
    }

    private static List<TradeTransaction> getTransactionQueue() {
        return transactionQueue;
    }
}
