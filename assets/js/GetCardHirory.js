
async function checkcardHirory(){
  console.log("check card");
  const Address = "0x62E8e47e84DfeF86106638AfDdbbF18050fA094e";
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let useraddress = await web3tr.eth.getAccounts();
  console.log(useraddress[0]);
  let fromblockchain1 = await mycontract.methods.getmycardNumber(useraddress[0]).call();
  console.log(fromblockchain1);
	if (fromblockchain1 != 0){
  document.getElementById("idn").innerHTML =  '<a href="https://explorer-mainnet.maticvigil.com/tokens/0x62E8e47e84DfeF86106638AfDdbbF18050fA094e/instance/' + fromblockchain1 + '/token-transfers"' + ' target=_"blank"><h2>　　取得した年賀状のURLはこちら</a></h2>';
	}
	}

async function makecardHirory(){
  console.log("make card");
  const Address = "0x62E8e47e84DfeF86106638AfDdbbF18050fA094e";
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let useraddress = await web3tr.eth.getAccounts();
  document.getElementById("idn").innerHTML = "年賀状発行には約20秒かかります"
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です" } , 10000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です…" } , 11000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です……" } , 12000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です………" } , 13000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です…………" } , 14000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "年賀状を発行中です……………" } , 15000);
  setTimeout( () => { document.getElementById("idn").innerHTML = "取得したNFT年賀状を確認ボタンを押してください" } , 30000);
  let ret = await mycontract.methods.mint().send({ from: useraddress[0] });
  //ret.on("receipt" , setTimeout( checkcard() , 5000 ));;
	document.getElementById("idn").innerHTML = "年賀状到着まで約20秒お待ちください";
  setTimeout( checkcardHirory() , 15000 )
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}
