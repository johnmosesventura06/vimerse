module.exports = {
  // ////////// EVENTS
  // fight
  FightScheduled: 'FIGHT.SCHEDULED',
  FightStarted: 'FIGHT.STARTED',
  FightEnded: 'FIGHT.ENDED',
  FightResultDeclared: 'FIGHT.RESULT.DECLARED',
  FightBettingStarted: 'FIGHT.BETTING.STARTED',
  FightBettingStopped: 'FIGHT.BETTING.STOPPED',
  FightBettingLastCall: 'FIGHT.BETTING.LAST_CALL',

  // bet
  BetPlaced: 'BET.PLACED',
  BetTransactionCompleted: 'BET.TRANSACTION.COMPLETED',
  BetTransactionFailed: 'BET.TRANSACTION.FAILED',
  BetOddsUpdated: 'BET.ODDS.UPDATED',

  // user
  UserRegistered: 'USER.REGISTERED',

  // payment
  PaymentCompleted: 'PAYMENT.COMPLETED',

  // ////////// COMMANDS
};
