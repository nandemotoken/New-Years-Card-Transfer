
const AddressNandemoToken = "0x87936b9e1220Ba94a7e496B4351a52BdF5e6C64D";
const AddressHirory = "0x62E8e47e84DfeF86106638AfDdbbF18050fA094e";
const Addressmaruhisao = "0xCDbF6A0cE40cc10AA513ad2922F469c29eFd5169";
const Addressotukarehitoiki1 = "0xb08d68cc0a117BD08427eAF7EB133D9785Df4cc4";
const Addresssalmon_crypto = "0xa664a65d98340899276902E9d2B636F2e5490CcA";


async function checkPost(){
  console.log("ポストを確認します");
  let useraddress = await web3tr.eth.getAccounts();
  console.log(useraddress[0]);
  myurl = "https://explorer-mainnet.maticvigil.com/address/" + useraddress[0] + "/token-transfers";
  window.open(myurl) ;
}




