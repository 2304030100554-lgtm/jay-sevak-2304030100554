const prompt = require("prompt-sync")({ sigint: true });

// ======================= USER INPUT =======================

// Basic account info
let Account = {
  number: prompt("Enter Account Number: "),
  holder: prompt("Enter Account Holder Name: "),
  currency: prompt("Enter Currency (INR/USD/etc): "),
  balance: prompt("Enter Opening Balance: "),
  transactions: []
};

// How many transactions?
let count = Number(prompt("How many transactions do you want to enter? "));

// Take transaction input from the user
for (let i = 0; i < count; i++) {
  console.log(`\n--- Enter Transaction ${i + 1} ---`);
  let type = prompt("Type (Deposit / Withdraw): ");
  let amount = prompt("Amount: ");
  let date = prompt("Date (YYYY-MM-DD): ");

  Account.transactions.push({ type, amount, date });
}


// ======================= MAIN PROCESS FUNCTION =======================
function processBankAccount(acc) {
  const openingBalance = Number(acc.balance);
  let balance = isNaN(openingBalance) ? 0 : openingBalance;

  const applied = [];
  const rejected = [];
  let totalDeposit = 0;
  let totalWithdraw = 0;

  try {
    for (let t of acc.transactions) {
      let amount = Number(t.amount);

      // ---------------- Validation Rules ----------------

      if (isNaN(amount)) {
        rejected.push({ ...t, reason: "Amount is not a valid number" });
        continue;
      }

      if (amount <= 0) {
        rejected.push({ ...t, reason: "Amount must be greater than zero" });
        continue;
      }

      if (!t.type) {
        rejected.push({ ...t, reason: "Transaction type missing" });
        continue;
      }

      if (t.type !== "Deposit" && t.type !== "Withdraw") {
        rejected.push({ ...t, reason: "Unknown transaction type" });
        continue;
      }

      // ---------------- Apply Deposit ----------------
      if (t.type === "Deposit") {
        balance += amount;
        totalDeposit += amount;
        applied.push({ ...t, appliedAmount: amount });
        continue;
      }

      // ---------------- Apply Withdraw ----------------
      if (t.type === "Withdraw") {
        if (amount > balance) {
          rejected.push({ ...t, reason: "Insufficient balance" });
          continue;
        }

        balance -= amount;
        totalWithdraw += amount;
        applied.push({ ...t, appliedAmount: amount });
        continue;
      }
    }
  }

  // ---------------- Catch Unexpected Errors ----------------
  catch (err) {
    rejected.push({ error: "System Error", message: err.message });
  }

  // ---------------- Always Run ----------------
  finally {
    console.log("\n🔍 Audit Log: Processing Finished.");
  }

  // Return final result
  return {
    accountNumber: acc.number,
    holder: acc.holder,
    currency: acc.currency,
    openingBalance,
    finalBalance: balance,
    totalDeposit,
    totalWithdraw,
    appliedTransactions: applied,
    rejectedTransactions: rejected
  };
}


// ======================= RUN PROGRAM =======================
console.log("\n===== FINAL ACCOUNT SUMMARY =====");
console.log(processBankAccount(Account));
