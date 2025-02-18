function reverseChaine(str: string): string {
  return str.split("").reverse().join("");
}
let maChaine = "Bonjour le monde";
let chaineInversee = reverseChaine(maChaine);
console.log(chaineInversee); 
