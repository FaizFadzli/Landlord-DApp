# 🏠 Landlord DApp

A decentralized rental agreement management app using **Next.js**, **Hardhat**, **Ethereum**, **Tailwind CSS**, and **Ethers.js**.

---

## 🚀 Features

- ✅ Landlord can create leases
- ✅ Tenant can sign and pay rent monthly
- ✅ Disputes can be raised and resolved
- ✅ Reputation system based on on-time payments
- ✅ MetaMask wallet connection

---

## 🛠 Tech Stack

- ⚛️ Next.js + App Router
- 🎨 Tailwind CSS
- ⚙️ Hardhat (for compiling and deploying smart contracts)
- 🔌 Ethers.js
- 🦊 MetaMask
- 🧪 Ganache (local blockchain)

---

## 📦 How to Run the Project

### 1. Clone the repo

git clone https://github.com/FaizFadzli/Landlord-DApp.git
cd landlord-dapp

### 2. Install dependencies
npm install

### 3. Start Ganache
Make sure Ganache is running locally and MetaMask is connected to the same network.

### 4. Compile and deploy contracts
npx hardhat compile
npx hardhat run scripts/deploy.js --network ganache

### 5. Update your contract address in the frontend file: src/lib/contract.ts

### 6. Run the frontend app
npm run dev