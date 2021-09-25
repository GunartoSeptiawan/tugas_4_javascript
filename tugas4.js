var irma = 170;
var mawar = 160;
var budi = 150;

if(irma>mawar){
  if(irma>budi){
    console.log("irma adalah yang paling tinggi")
  }else{
    console.log("irma adalah yang tertinggi kedua")
  }
}else{
  if(irma<budi){
    console.log("irma adalah yang terpendek")
  }else{
    console.log("irma adalah yang terpendek kedua")
  }
}

if(mawar>budi){
  if(mawar>irma){
    console.log("mawar adalah yang paling tinggi")
  }else{
    console.log("mawar adalah yang tertinggi kedua")
  }
}else{
  if(mawar<irma){
    console.log("mawar adalah yang terpendek")
  }else{
    console.log("mawar adalah yang terpendek kedua")
  }
}

if(budi>irma){
  if(budi>mawar){
    console.log("budi adalah yang paling tinggi")
  }else{
    console.log("budi adalah yang tertinggi kedua")
  }
}else{
  if(budi<mawar){
    console.log("budi adalah yang terpendek")
  }else{
    console.log("budi adalah yang terpendek kedua")
  }
}