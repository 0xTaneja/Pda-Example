const {PublicKey} = require('@solana/web3.js');
const {ASSOCIATED_TOKEN_PROGRAM_ID,TOKEN_PROGRAM_ID} = require('@solana/spl-token')
const {Buffer}=require('buffer')

//pgm id +  john address + mint address - ata which has certain balance in it 
const userAddress= new PublicKey("DKTRJ18i86svkAxGhMZMXMXUka7VTH92Kjocc137XUSB");
const tokenMintAddress=new PublicKey("4FzDJcLcV5ycqLR4S5K1Mfcz6uRH8eSZQ7B97iVZsY8P");


const getAssociatedTokenAddress=(mintAddress,ownerAddress) =>{
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),

        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    )


}

const [associatedTokenAddress, bump] = getAssociatedTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated Token Address: ${associatedTokenAddress.toBase58()}, bump: ${bump}`);

