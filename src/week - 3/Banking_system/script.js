const prompt = require("prompt-sync")();

// ======================= USER INPUT =======================
let Account = {
  holder: prompt("Enter Account Holder Name: "),
  number: prompt("Enter Account Number: "),
  balance: prompt("Enter Opening Balance: "),
  transactions: []
};

// Ask how many transactions user wants to enter
let transCount = Number(prompt("How many transactions? "));

// Take transaction input from user
for (let i = 0; i < transCount; i++) {
  console.log(`\nEnter Transaction ${i + 1}:`);
  let type = prompt("Type (Deposit/Withdraw): ");
  let amount = prompt("Amount: ");
  let date = prompt("Date (YYYY-MM-DD): ");

  Account.transactions.push({ type, amount, Date: date });
}


// ======================= MAIN PROCESS FUNCTION =======================
function processBankAccount(acc) {
  const openingBalance = Number(acc.balance);
  let balance = isNaN(openingBalance) ? 0 : openingBalance;

  let applied = [];
  let rejected = [];
  let totalDeposit = 0;
  let totalWithdraw = 0;

  try {
    for (let t of acc.transactions) {
      let amount = Number(t.amount);

      // Invalid amount
      if (isNaN(amount) || amount <= 0) {
        rejected.push({ ...t, reason: "Invalid amount" });
        continue;
      }

      // Missing type
      if (!t.type) {
        rejected.push({ ...t, reason: "Missing type" });
        continue;
      }

      // Deposit
      if (t.type === "Deposit") {
        balance += amount;
        totalDeposit += amount;
        applied.push({ ...t, appliedAmount: amount });
        continue;
      }

      // Withdraw
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

      // Unknown type
      rejected.push({ ...t, reason: "Unknown type" });
    }
  }

  catch (err) {
    rejected.push({ error: "System Error", message: err.message });
  }

  finally {
    console.log("\n🔍 Audit Log: Processing Completed");
  }

  return {
    holder: acc.holder,
    number: acc.number,
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

