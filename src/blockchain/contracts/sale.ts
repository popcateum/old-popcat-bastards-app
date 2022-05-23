import { signer, provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import SaleAbiJSON from '../abi/Sale.json';

const saleCA = '0x48c4C6F3e78280672e2fa34cAF1588D80fB50165';
const saleABI: any = SaleAbiJSON;

async function mint(createdAt: number, hash: string, signature: string, amount: any) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.mint(createdAt, hash, signature, amount);
  await tx.wait();
}

function isMinted(address: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, provider);
  return sale.isMinted(address);
}

export {
  mint, isMinted
}