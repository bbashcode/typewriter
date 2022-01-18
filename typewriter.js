const sentence = "hello there from the lighthouse lab";

 let count = 0;
 for (const char of sentence) {
   if(sentence.length){
    process.stdout.write('\n');
   }
   setTimeout(() => {
   process.stdout.write(char);  
   }, count);
  count += 50;
}
