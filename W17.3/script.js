// Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
   #balance;
   constructor(balance){
      this.#balance = balance;
   }
   getBalance(){
      return this.#balance; 
   }
   deposit(amount){
      this.#balance += amount; 
   }
   withdraw(amount){
      if(amount > this.#balance){
         console.log("Недостатньо коштів");
         return;
      }
      this.#balance -= amount; 
   }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); 
account1.deposit(500);
console.log(account1.getBalance()); 
account1.withdraw(2000);
console.log(account1.getBalance()); 

