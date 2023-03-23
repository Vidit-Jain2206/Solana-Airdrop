// const { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } = solanaWeb3;

// const connection = new Connection('https://devnet.solana.com', 'confirmed');

// let walletaddress=document.getElementById("walletAddress").value;
// let amount=document.getElementById("amount").value * 1e9;
// const recipientAddress = new PublicKey(walletaddress);


// const transaction = new Transaction().add(
//     SystemProgram.transfer({
//       fromPubkey: connection.wallet.publicKey,
//       toPubkey: recipientAddress,
//       lamports: amount,
//     })
//   );
  
//   (async () => {
//     const signature = await sendAndConfirmTransaction(
//       connection,
//       transaction,
//       [connection.wallet],
//       {commitment: 'confirmed'}
//     );
//     console.log('Transaction signature:', signature);
//   })();
  
const { Connection, PublicKey } = solanaWeb3;
function submitForm(){
    let solanaPublicKey = document.getElementById("inputText").value;
    let airdropAmount = document.getElementById("airdropAmount").value;
    let lamports = airdropAmount * 1e9;
    const connection = new Connection ("https://api.devnet.solana.com");
    var publicKeyObject = new PublicKey(solanaPublicKey)
    const fn = (async () => {
        let txhash = await connection.requestAirdrop(publicKeyObject, lamports);
        console.log(`txhash: ${txhash}`);
        const inputText = document.getElementById ("inputText").value;
        alert ("You transferred: " + airdropAmount + " SOL to this wallet " + inputText);
    });

fn();
}