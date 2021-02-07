export const tokens = (n) => {
  return new web3.utils.BN(web3.utils.toWei(n, "ether"));
};

export const EVM_REVERT = "VM Exception while processing transaction: revert";
